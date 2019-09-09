Smalltalk createPackage: 'Compiler-Core'!
(Smalltalk packageAt: 'Compiler-Core' ifAbsent: [ self error: 'Package not created: Compiler-Core' ]) imports: {'smalltalkParser' -> 'amber/parser'}!
Object subclass: #AbstractCodeGenerator
	slots: {#currentClass. #currentPackage. #source}
	package: 'Compiler-Core'!
!AbstractCodeGenerator commentStamp!
I am the abstract super class of all code generators and provide their common API.!

!AbstractCodeGenerator methodsFor: 'accessing'!

currentClass
	^ currentClass
!

currentClass: aClass
	currentClass := aClass
!

currentPackage
	^ currentPackage
!

currentPackage: anObject
	currentPackage := anObject
!

pseudoVariables
	^ Smalltalk pseudoVariableNames
!

source
	^ source ifNil: [ '' ]
!

source: aString
	source := aString
! !

!AbstractCodeGenerator methodsFor: 'compiling'!

compileNode: aNode
	^ self transformers
		inject: aNode
		into: [ :input :transformer | transformer value: input ]
!

transformers
	| dict |
	dict := self transformersDictionary.
	^ dict keys asArray sort collect: [ :each | dict at: each ]
!

transformersDictionary
	self subclassResponsibility
! !

AbstractCodeGenerator subclass: #CodeGenerator
	slots: {#transformersDictionary}
	package: 'Compiler-Core'!
!CodeGenerator commentStamp!
I am a basic code generator. I generate a valid JavaScript output, but no not perform any inlining.
See `InliningCodeGenerator` for an optimized JavaScript code generation.!

!CodeGenerator methodsFor: 'compiling'!

earlyAstPragmator
	^ AstEarlyPragmator new
!

irTranslator
	^ self irTranslatorClass new
		currentClass: self currentClass;
		yourself
!

irTranslatorClass
	^ IRJSTranslator
!

lateIRPragmator
	^ IRLatePragmator new
!

semanticAnalyzer
	^ (SemanticAnalyzer on: self currentClass)
		thePackage: self currentPackage;
		yourself
!

transformersDictionary
	^ transformersDictionary ifNil: [ transformersDictionary := Dictionary new
		at: '1000-earlyPragmas' put: self earlyAstPragmator;
		at: '2000-semantic' put: self semanticAnalyzer;
		at: '5000-astToIr' put: self translator;
		at: '8000-irToJs' put: self irTranslator;
		at: '9000-latePragmas' put: self lateIRPragmator;
		yourself ]
!

translator
	^ IRASTTranslator new
		source: self source;
		theClass: self currentClass;
		yourself
! !

Object subclass: #Compiler
	slots: {#currentPackage. #codeGeneratorClass. #codeGenerator}
	package: 'Compiler-Core'!
!Compiler commentStamp!
I provide the public interface for compiling Amber source code into JavaScript.

The code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`.
The default code generator is an instance of `InlinedCodeGenerator`!

!Compiler methodsFor: 'accessing'!

cleanCodeGenerator
	codeGenerator := nil
!

codeGenerator
	^ codeGenerator
!

codeGenerator: anObject
	codeGenerator := anObject
!

codeGeneratorClass
	^ codeGeneratorClass ifNil: [ InliningCodeGenerator ]
!

codeGeneratorClass: aClass
	codeGeneratorClass := aClass
!

currentPackage
	^ currentPackage
!

currentPackage: anObject
	currentPackage := anObject
! !

!Compiler methodsFor: 'compiling'!

ast: aString forClass: aClass protocol: anotherString
	self
		start: aString forClass: aClass protocol: anotherString;
		transformerAt: '2500-astCheckpoint' put: [ :x | ^x ];
		compileNode: (self parse: aString);
		error: 'AST transformation failed.'
!

compile: aString forClass: aClass protocol: anotherString
	| compilationResult result pragmas closureFactory |
	compilationResult := self
		start: aString forClass: aClass protocol: anotherString;
		compileNode: (self parse: aString).
	closureFactory := self
		eval: (self wrappedSourceOf: compilationResult)
		forPackage: self currentPackage.
	result := Smalltalk core method: #{
		#selector -> compilationResult selector.
		#protocol -> anotherString.
		#source -> compilationResult source.
		#messageSends -> compilationResult messageSends asArray.
		#args -> compilationResult arguments asArray.
		#referencedClasses -> compilationResult classReferences asArray.
	} withFactory: closureFactory.
	result pragmas: compilationResult pragmas.
	^ result
!

compileNode: aNode
    | result |
	result := self codeGenerator compileNode: aNode.
	self cleanCodeGenerator.
	^ result
!

eval: aString
	<inlineJS: 'return eval(aString)'>
!

eval: aString forPackage: aPackage
	^ aPackage
		ifNil: [ self eval: aString ]
		ifNotNil: [ aPackage eval: aString ]
!

evaluateExpression: aString
	"Unlike #eval: evaluate a Smalltalk expression and answer the returned object"
	^ self evaluateExpression: aString on: DoIt new
!

evaluateExpression: aString on: anObject
	"Unlike #eval: evaluate a Smalltalk expression with anObject as the receiver and answer the returned object"
	| result method |
	method := self
		install: (self sourceForExpression: aString)
		forClass: anObject class
		protocol: '**xxxDoIt'.
	result := anObject xxxDoIt.
	anObject class removeCompiledMethod: method.
	^ result
!

install: aString forClass: aBehavior protocol: anotherString
	| compiledMethod |
	compiledMethod := self compile: aString forClass: aBehavior protocol: anotherString.
	aBehavior addCompiledMethod: compiledMethod.
	^ compiledMethod
!

parse: aString
	| result |
	
	[ result := self basicParse: aString ] 
		tryCatch: [ :ex | (self parseError: ex parsing: aString) signal ].
		
	^ result
!

parseExpression: aString
	^ self parse: (self sourceForExpression: aString)
!

recompile: aClass
	aClass includingPossibleMetaDo: [ :eachSide |
		eachSide methodDictionary values
			do: [ :each | each origin = eachSide ifTrue: [ 
				self 
					install: each source 
					forClass: eachSide 
					protocol: each protocol ] ]
			displayingProgress: 'Recompiling ', eachSide name ]
!

recompileAll
	Smalltalk classes 
		do: [ :each | self recompile: each ]
		displayingProgress: 'Compiling all classes...'
!

sourceForExpression: aString
	^ 'xxxDoIt ^ [ ', aString, ' ] value'
!

start: aString forClass: aClass protocol: anotherString
	| package |
	package := aClass packageOfProtocol: anotherString.
	self
		currentPackage: package;
		codeGenerator: (self codeGeneratorClass new
			source: aString;
			currentClass: aClass;
			currentPackage: package;
			yourself)
!

transformerAt: aString put: anObject
	self codeGenerator transformersDictionary at: aString put: anObject
! !

!Compiler methodsFor: 'error handling'!

error: aString
	CompilerError signal: aString
!

parseError: anException parsing: aString
	(anException basicAt: 'location')
		ifNil: [ ^ anException pass ]
		ifNotNil: [ :loc |
			^ ParseError new 
				messageText: 
					'Parse error on line ', loc start line ,
					' column ' , loc start column ,
					' : Unexpected character ', (anException basicAt: 'found');
				yourself ]
! !

!Compiler methodsFor: 'private'!

basicParse: aString
	^ smalltalkParser parse: aString
!

wrappedSourceOf: anIRMethod
	anIRMethod attachments
		ifEmpty: [ ^
			'(function ($methodClass){ return ',
			anIRMethod compiledSource,
			'; })' ]
		ifNotEmpty: [ :attachments | ^ 
			'(function ($methodClass){ return (function(method){Object.defineProperty(method,"a$atx",{enumerable:false,configurable:true,writable:true,value:',
			attachments asJavaScriptSource,
			'});return method})(',
			anIRMethod compiledSource,
			'); })' ]
! !

!Compiler class methodsFor: 'compiling'!

recompile: aClass
	self new recompile: aClass
!

recompileAll
	Smalltalk classes do: [ :each |
		self recompile: each ]
! !

!Compiler class methodsFor: 'evaluating'!

eval: aString
	^ self new eval: aString
! !

!Compiler class methodsFor: 'initialization'!

initialize
	"TODO remove, backward compat"
	Smalltalk globals at: #SmalltalkParser put: smalltalkParser
! !

!Compiler class methodsFor: 'parsing'!

parse: aString
	^ self new parse: aString
!

pseudoVariableNames
	^ PseudoVar dictionary keys asArray
! !

Object subclass: #DoIt
	slots: {}
	package: 'Compiler-Core'!
!DoIt commentStamp!
`DoIt` is the class used to compile and evaluate expressions. See `Compiler >> evaluateExpression:`.!

Object subclass: #Evaluator
	slots: {}
	package: 'Compiler-Core'!
!Evaluator commentStamp!
I evaluate code against a receiver, dispatching #evaluate:on: to the receiver.!

!Evaluator methodsFor: 'evaluating'!

evaluate: aString context: aContext
	"Similar to #evaluate:for:, with the following differences:
	- instead of compiling and running `aString`, `aString` is interpreted using an `ASTInterpreter`
	- instead of evaluating against a receiver, evaluate in the context of `aContext`"

	| compiler ast |
	
	compiler := Compiler new.
	[ ast := compiler parseExpression: aString ] 
		on: Error 
		do: [ :ex | ^ Terminal alert: ex messageText ].
		
	(AISemanticAnalyzer on: aContext receiver class)
		context: aContext;
		visit: ast.

	^ aContext evaluateNode: ast
!

evaluate: aString for: anObject
	^ anObject evaluate: aString on: self
!

evaluate: aString receiver: anObject
	| compiler |
	
	compiler := Compiler new.
	[ compiler parseExpression: aString ] 
		on: Error 
		do: [ :ex | ^ Terminal alert: ex messageText ].

	^ compiler evaluateExpression: aString on: anObject
! !

!Evaluator class methodsFor: 'instance creation'!

evaluate: aString for: anObject
	^ self new evaluate: aString for: anObject
! !

Error subclass: #ParseError
	slots: {}
	package: 'Compiler-Core'!
!ParseError commentStamp!
Instance of ParseError are signaled on any parsing error.
See `Compiler >> #parse:`!

!String methodsFor: '*Compiler-Core'!

asVariableName
	^ (Smalltalk reservedWords includes: self)
		ifTrue: [ self, '_' ]
		ifFalse: [ self ]
! !

