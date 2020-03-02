{
	var $globals = __boot.globals;

	function newNode(nodeClass) {
		return nodeClass._new()._location_(location())._source_(text());
	}

	function newSequenceNode(nodeClass, temps, statements) {
		return newNode(nodeClass)._temps_(temps || [])._dagChildren_(statements || []);
	}
}

start = method

separator =
	[ \t\v\f\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF\n\r\u2028\u2029]+

comments = ('"' [^"]* '"')+

ws = (separator / comments)*

maybeDotsWs = ('.' / separator / comments)*

someDotsWs = ws '.' maybeDotsWs

identifier = $([a-zA-Z] [a-zA-Z0-9]*)

keyword = $(identifier ':')

className = $([A-Z] [a-zA-Z0-9]*)

string = val:rawString {
	return newNode($globals.ValueNode)._value_(val);
}

rawString = '\'' val:(('\'\'' {return '\'';} / [^'])*) '\'' {return val.join('');}

character = '$' char:. {
	return newNode($globals.ValueNode)._value_(char);
}

symbol = '#' rest:bareSymbol {return rest;}

bareSymbol = val:($(keyword+) / binarySelector / unarySelector / rawString) {
	return newNode($globals.ValueNode)._value_(val);
}

number = val:rawNumber {
	return newNode($globals.ValueNode)._value_(val);
}

rawNumber = numberExp / hex / float / integer

numberExp = n:$((float / integer) 'e' integer) {return parseFloat(n);}

hex = neg:'-'? '16r' num:$[0-9a-fA-F]+ {
	return parseInt(((neg || '') + num), 16);
}

float = n:$('-'? [0-9]+ '.' [0-9]+) {return parseFloat(n, 10);}

integer = n:$('-'? [0-9]+) {return parseInt(n, 10);}

literalArray = '#(' rest:wsLiteralArrayContents ws ')' {
	return newNode($globals.ValueNode)._value_(rest);
}

bareLiteralArray = '(' rest:wsLiteralArrayContents ws ')' {
	return newNode($globals.ValueNode)._value_(rest);
}

literalArrayElement = parseTimeLiteral / bareLiteralArray / bareSymbol

wsLiteralArrayContents = (ws lit:literalArrayElement {return lit._value();})*

dynamicArray = '{' expressions:wsExpressions? maybeDotsWs '}' {
	return newNode($globals.DynamicArrayNode)._dagChildren_(expressions || []);
}

dynamicDictionary = '#{' expressions:wsAssociations? maybeDotsWs  '}' {
	return newNode($globals.DynamicDictionaryNode)._dagChildren_(expressions || []);
}

pseudoVariable = val:(
	'true' {return true;} /
	'false' {return false;} /
	'nil' {return null;}
) {
	return newNode($globals.ValueNode)._value_(val);
}

parseTimeLiteral =
	pseudoVariable / number / literalArray / string / symbol / character

runtimeLiteral = dynamicDictionary / dynamicArray / block

literal = runtimeLiteral / parseTimeLiteral

variable = identifier:identifier {
	return newNode($globals.VariableNode)._value_(identifier);
}

reference = variable

binarySelector = $[\\+*/=><,@%~|&-]+

unarySelector = identifier

wsKeywordPattern =
	pairs:(ws key:keyword ws arg:identifier {return {key:key, arg:arg};})+ {
		var selector = '';
		var params = [];
		for(var i = 0; i < pairs.length; i++) {
			selector += pairs[i].key;
			params.push(pairs[i].arg);
		}
		return [selector, params];
	}

wsBinaryPattern = ws selector:binarySelector ws arg:identifier {
	return [selector, [arg]];
}

wsUnaryPattern = ws selector:unarySelector {return [selector, []];}

expression = assignment / cascade / keywordSend

wsExpressionsRest = someDotsWs expression:expression {
	return expression;
}

wsExpressions = maybeDotsWs first:expression others:wsExpressionsRest* {
	return [first].concat(others);
}

wsUnaryPragmaMessage = ws selector:unarySelector !':' {
	return $globals.Message._selector_arguments_(selector, []);
}

wsKeywordPragmaMessage =
	pairs:(ws key:keyword ws arg:parseTimeLiteral {return {key:key, arg:arg};})+ {
		var selector = '';
		var args = [];
		for(var i = 0; i < pairs.length; i++) {
			selector += pairs[i].key;
			args.push(pairs[i].arg._value());
		}
		return $globals.Message._selector_arguments_(selector, args)
	}

wsPragmaMessage = wsUnaryPragmaMessage / wsKeywordPragmaMessage

wsPragmas = items:(ws '<' message:wsPragmaMessage ws '>' {return message;})*

assignment = variable:variable ws ':=' ws expression:expression {
	return newNode($globals.AssignmentNode)._left_(variable)._right_(expression);
}

ret = '^' ws expression:expression {
	return newNode($globals.ReturnNode)._expression_(expression);
}

temps = '|' vars:(ws variable:identifier {return variable;})* ws '|' {
	return vars;
}

wsBlockParamList =
	params:((ws ':' ws param:identifier {return param;})+) ws '|' {
		return params;
	}

subexpression = '(' ws expression:expression ws ')' {
	return expression;
}

wsStatements =
	maybeDotsWs ret:ret {return [ret];} /
	exps:wsExpressions someDotsWs ret:ret {
		var expressions = exps;
		expressions.push(ret);
		return expressions;
	} /
	expressions:wsExpressions? {return expressions || [];}

block = '[' params:wsBlockParamList? ws temps:temps? statements:wsStatements? maybeDotsWs ']' {
	return newNode($globals.BlockNode)
		._parameters_(params || [])
		._sequenceNode_(newSequenceNode($globals.BlockSequenceNode, temps, statements));
}

operand = reference / literal / subexpression

wsUnaryMessage = ws selector:unarySelector !':' {
	return newNode($globals.SendNode)._selector_(selector);
}

wsUnaryTail = wsUnaryMessage*

unarySend = receiver:operand tail:wsUnaryTail {
	return receiver._withTail_(tail);
}

wsBinaryMessage = ws selector:binarySelector ws arg:unarySend {
	return newNode($globals.SendNode)._selector_(selector)._arguments_([arg]);
}

wsBinaryTail = unarys:wsUnaryTail binarys:wsBinaryMessage* { return unarys.concat(binarys); }

binarySend = receiver:operand tail:wsBinaryTail {
	return receiver._withTail_(tail);
}

wsKeywordMessage =
	pairs:(ws key:keyword ws arg:binarySend {return {key:key, arg:arg};})+ {
		var selector = '';
		var args = [];
		for(var i = 0; i < pairs.length; i++) {
			selector += pairs[i].key;
			args.push(pairs[i].arg);
		}
		return newNode($globals.SendNode)._selector_(selector)._arguments_(args);
	}

wsKeywordTail = binarys:wsBinaryTail final:wsKeywordMessage? {
	if (final) binarys.push(final);
	return binarys;
}

keywordSend = receiver:operand tail:wsKeywordTail {
	return receiver._withTail_(tail);
}

wsMessage = wsBinaryMessage / wsUnaryMessage / wsKeywordMessage

cascade =
	receiver:operand tail:wsKeywordTail & {return tail.length > 0;}
	messages:(ws ';' mess:wsMessage {return mess;})+ {
		messages.unshift(receiver._withTail_(tail));
		return newNode($globals.CascadeNode)._dagChildren_(messages);
	}

method =
	pattern:(wsKeywordPattern / wsBinaryPattern / wsUnaryPattern)
	aPragmas:wsPragmas? ws temps:temps? zPragmas:wsPragmas? statements:wsStatements? maybeDotsWs {
		return newNode($globals.MethodNode)
			._selector_(pattern[0])
			._arguments_(pattern[1])
			._pragmas_((aPragmas || []).concat(zPragmas || []))
			._sequenceNode_(newSequenceNode($globals.SequenceNode, temps, statements));
	}

associationSend =
	receiver:operand tail:wsBinaryTail
	& { return tail.length > 0 && tail[tail.length-1]._selector() === '->' } {
	    var last = tail.pop();
		return [receiver._withTail_(tail), last._arguments()[0]];
	}

wsAssociationsRest = someDotsWs expression:associationSend {
	return expression;
}

wsAssociations = maybeDotsWs first:associationSend others:wsAssociationsRest* {
	return first.concat.apply(first, others);
}
