start = method

separator =
	[ \t\v\f\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF\n\r\u2028\u2029]+

comments = ('"' [^"]* '"')+

ws = (separator / comments)*

maybeDotsWs = ('.' / separator / comments)*

identifier = $([a-zA-Z] [a-zA-Z0-9]*)

keyword = $(identifier ':')

className = $([A-Z] [a-zA-Z0-9]*)

string = val:rawString {
	return $globals.ValueNode._new()
		._location_(location())
		._source_(text())
		._value_(val);
}

rawString = '\'' val:(('\'\'' {return '\'';} / [^'])*) '\'' {return val.join('');}

character = '$' char:. {
	return $globals.ValueNode._new()
		._location_(location())
		._source_(text())
		._value_(char);
}

symbol = '#' rest:bareSymbol {return rest;}

bareSymbol = val:($(keyword+) / binarySelector / unarySelector / rawString) {
	return $globals.ValueNode._new()
		._location_(location())
		._source_(text())
		._value_(val);
}

number = val:rawNumber {
	return $globals.ValueNode._new()
		._location_(location())
		._source_(text())
		._value_(val);
}

rawNumber = numberExp / hex / float / integer

numberExp = n:$((float / integer) 'e' integer) {return parseFloat(n);}

hex = neg:'-'? '16r' num:$[0-9a-fA-F]+ {
	return parseInt(((neg || '') + num), 16);
}

float = n:$('-'? [0-9]+ '.' [0-9]+) {return parseFloat(n, 10);}

integer = n:$('-'? [0-9]+) {return parseInt(n, 10);}

literalArray = '#(' rest:wsLiteralArrayContents ws ')' {
	return rest
		._location_(location())
		._source_(text());
}

bareLiteralArray = '(' rest:wsLiteralArrayContents ws ')' {
	return rest
		._location_(location())
		._source_(text());
}

literalArrayElement = parseTimeLiteral / bareLiteralArray / bareSymbol

wsLiteralArrayContents =
	lits:(ws lit:literalArrayElement {return lit._value();})* {
		return $globals.ValueNode._new()
			._value_(lits);
	}

dynamicArray = '{' expressions:wsExpressions? maybeDotsWs '}' {
	return $globals.DynamicArrayNode._new()
		._location_(location())
		._source_(text())
		._dagChildren_(expressions || []);
}

dynamicDictionary = '#{' expressions:wsAssociations? maybeDotsWs  '}' {
	return $globals.DynamicDictionaryNode._new()
		._location_(location())
		._source_(text())
		._dagChildren_(expressions || []);
}

pseudoVariable = val:(
	'true' {return true;} /
	'false' {return false;} /
	'nil' {return null;}
) {
	return $globals.ValueNode._new()
		._location_(location())
		._source_(text())
		._value_(val);
}

parseTimeLiteral =
	pseudoVariable / number / literalArray / string / symbol / character

runtimeLiteral = dynamicDictionary / dynamicArray / block

literal = runtimeLiteral / parseTimeLiteral

variable = identifier:identifier {
	return $globals.VariableNode._new()
		._location_(location())
		._source_(text())
		._value_(identifier);
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

wsExpressionsRest = ws '.' maybeDotsWs expression:expression {
	return expression;
}

wsExpressions = maybeDotsWs first:expression others:wsExpressionsRest* {
	return [first].concat(others);
}

assignment = variable:variable ws ':=' ws expression:expression {
	return $globals.AssignmentNode._new()
		._location_(location())
		._source_(text())
		._left_(variable)
		._right_(expression);
}

ret = '^' ws expression:expression {
	return $globals.ReturnNode._new()
		._location_(location())
		._source_(text())
		._dagChildren_([expression]);
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

wsStatementsWs =
	maybeDotsWs ret:ret maybeDotsWs {return [ret];} /
	exps:wsExpressions ws '.' maybeDotsWs ret:ret maybeDotsWs {
		var expressions = exps;
		expressions.push(ret);
		return expressions;
	} /
	expressions:wsExpressions? maybeDotsWs {return expressions || [];}

wsSequenceWs = (ws js:jsSequence ws {return js;}) / wsStSequenceWs

wsStSequenceWs = ws temps:temps? statements:wsStatementsWs? {
	return $globals.SequenceNode._new()
		._location_(location())
		._source_(text())
		._temps_(temps || [])
		._dagChildren_(statements || []);
}

jsSequence = jsStatement

block = '[' params:wsBlockParamList? sequence:wsSequenceWs? ']' {
	return $globals.BlockNode._new()
		._location_(location())
		._source_(text())
		._parameters_(params || [])
		._dagChildren_([sequence._asBlockSequenceNode()]);
}

operand = literal / reference / subexpression

wsUnaryMessage = ws selector:unarySelector !':' {
	return $globals.SendNode._new()
		._location_(location())
		._source_(text())
		._selector_(selector);
}

unarySend = receiver:operand tail:wsUnaryMessage* {
	return receiver._withTail_(tail);
}

wsBinaryMessage = ws selector:binarySelector ws arg:unarySend {
	return $globals.SendNode._new()
		._location_(location())
		._source_(text())
		._selector_(selector)
		._arguments_([arg]);
}

binarySend = receiver:unarySend tail:wsBinaryMessage* {
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
		return $globals.SendNode._new()
			._location_(location())
			._source_(text())
			._selector_(selector)
			._arguments_(args);
	}

keywordSend = receiver:binarySend tail:wsKeywordMessage? {
	return tail ? receiver._withTail_([tail]) : receiver;
}

wsMessage = wsBinaryMessage / wsUnaryMessage / wsKeywordMessage

cascade =
	send:keywordSend & {return send._isSendNode();}
	messages:(ws ';' mess:wsMessage {return mess;})+ {
		messages.unshift(send);
		return $globals.CascadeNode._new()
			._location_(location())
			._source_(text())
			._dagChildren_(messages);
	}

jsStatement = pragmaJsStatement / legacyJsStatement

legacyJsStatement =
	'<' val:(('>>' {return '>';} / [^>])*) '>'
	& {return !/^\s*inlineJS/.test(val.join(''));} {
		console.warn('Use of <...js code...> is deprecated, in:\n' + val.join(''));
		return $globals.JSStatementNode._new()
			._location_(location())
			._source_(val.join(''))
	}

pragmaJsStatement = '<' ws 'inlineJS:' ws val:rawString ws '>' {
	return $globals.JSStatementNode._new()
		._location_(location())
		._source_(val)
}

method =
	pattern:(wsKeywordPattern / wsBinaryPattern / wsUnaryPattern)
	sequence:wsSequenceWs? {
		return $globals.MethodNode._new()
			._location_(location())
			._source_(text())
			._selector_(pattern[0])
			._arguments_(pattern[1])
			._dagChildren_([sequence]);
	}

associationSend =
	send:binarySend
	& { return send._isSendNode() && send._selector() === '->' } {
		return [send._receiver(), send._arguments()[0]];
	}

wsAssociationsRest = ws '.' maybeDotsWs expression:associationSend {
	return expression;
}

wsAssociations = maybeDotsWs first:associationSend others:wsAssociationsRest* {
	return first.concat.apply(first, others);
}
