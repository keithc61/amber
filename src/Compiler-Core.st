Smalltalk createPackage: 'Compiler-Core'!
Object subclass: #AbstractCodeGenerator
	instanceVariableNames: 'currentClass currentPackage source'
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
	instanceVariableNames: 'transformersDictionary'
	package: 'Compiler-Core'!
!CodeGenerator commentStamp!
I am a basic code generator. I generate a valid JavaScript output, but no not perform any inlining.
See `InliningCodeGenerator` for an optimized JavaScript code generation.!

!CodeGenerator methodsFor: 'compiling'!

irTranslator
	^ self irTranslatorClass new
		currentClass: self currentClass;
		yourself
!

irTranslatorClass
	^ IRJSTranslator
!

semanticAnalyzer
	^ (SemanticAnalyzer on: self currentClass)
		thePackage: self currentPackage;
		yourself
!

transformersDictionary
	^ transformersDictionary ifNil: [ transformersDictionary := Dictionary new
		at: '1000-earlyPragmas' put: EarlyPragmator new;
		at: '2000-semantic' put: self semanticAnalyzer;
		at: '5000-astToIr' put: self translator;
		at: '8000-irToJs' put: self irTranslator;
		yourself ]
!

translator
	^ IRASTTranslator new
		source: self source;
		theClass: self currentClass;
		yourself
! !

Object subclass: #Compiler
	instanceVariableNames: 'currentClass currentPackage source codeGeneratorClass codeGenerator'
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
	^ codeGenerator ifNil: [ codeGenerator := self codeGeneratorClass new
			source: self source;
			currentClass: self currentClass;
			currentPackage: self currentPackage;
			yourself ]
!

codeGeneratorClass
	^ codeGeneratorClass ifNil: [ InliningCodeGenerator ]
!

codeGeneratorClass: aClass
	codeGeneratorClass := aClass
!

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

source
	^ source ifNil: [ '' ]
!

source: aString
	source := aString
! !

!Compiler methodsFor: 'compiling'!

ast: aString forClass: aClass protocol: anotherString
	self
		source: aString;
		forClass: aClass protocol: anotherString.

	self codeGenerator transformersDictionary at: '2500-astCheckpoint' put: [ :x | ^x ].
	
	self compileNode: (self parse: aString).

	self error: 'AST transformation failed.'
!

compile: aString forClass: aClass protocol: anotherString
	^ self
		source: aString;
		forClass: aClass protocol: anotherString;
		compileNode: (self parse: aString)
!

compileExpression: aString on: anObject
	^ self
		compile: 'xxxDoIt ^ [ ', aString, ' ] value'
		forClass: anObject class
		protocol: '**xxxDoIt'
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
	method := self eval: (self compileExpression: aString on: anObject).
	method protocol: '**xxxDoIt'.
	anObject class addCompiledMethod: method.
	result := anObject xxxDoIt.
	anObject class removeCompiledMethod: method.
	^ result
!

forClass: aClass protocol: anotherString
	self
		currentPackage: (aClass packageOfProtocol: anotherString);
		currentClass: aClass
!

install: aString forClass: aBehavior protocol: anotherString
	| compiledMethod |
	compiledMethod := self
		eval: (self compile: aString forClass: aBehavior protocol: anotherString)
		forPackage: (aBehavior packageOfProtocol: anotherString).
	^ ClassBuilder new
		installMethod: compiledMethod
		forClass: aBehavior
		protocol: anotherString
!

parse: aString
	^ Smalltalk parse: aString
!

parseExpression: aString
	^ self parse: 'doIt ^ [ ', aString, ' ] value'
!

recompile: aClass
	aClass methodDictionary values
		do: [ :each | each methodClass = aClass ifTrue: [ 
			self 
				install: each source 
				forClass: aClass 
				protocol: each protocol ] ]
		displayingProgress: 'Recompiling ', aClass name.
	aClass theMetaClass ifNotNil: [ :meta |
		meta = aClass ifFalse: [ self recompile: meta ] ]
!

recompileAll
	Smalltalk classes 
		do: [ :each | self recompile: each ]
		displayingProgress: 'Compiling all classes...'
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

Object subclass: #DoIt
	instanceVariableNames: ''
	package: 'Compiler-Core'!
!DoIt commentStamp!
`DoIt` is the class used to compile and evaluate expressions. See `Compiler >> evaluateExpression:`.!

Object subclass: #Evaluator
	instanceVariableNames: ''
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

NodeVisitor subclass: #Pragmator
	instanceVariableNames: 'methodNode sequenceNode'
	package: 'Compiler-Core'!
!Pragmator commentStamp!
I am abstract superclass for pragma-processing transformer.

My subclasses should implement messages for each pragma
they process. Pragma processing checks if a message is known
to a class but not to its superclass. IOW, each and only those
pragmas are processed which are defined as methods in the subclass.

These messages can access sequence node in which
a pragma occurred and its containing method node
as `self sequenceNode` and `self methodNode`.

See `EarlyPragmator` for an example.!

!Pragmator methodsFor: 'accessing'!

methodNode
	^ methodNode
!

methodNode: anObject
	methodNode := anObject
!

sequenceNode
	^ sequenceNode
!

sequenceNode: anObject
	sequenceNode := anObject
! !

!Pragmator methodsFor: 'pragma processing'!

canProcessPragma: aMessage
	| selector |
	selector := aMessage selector.
	^ (self respondsTo: selector) and: [
		(self class superclass canUnderstand: selector) not]
!

processPragma: aMessage
	(self canProcessPragma: aMessage) ifTrue: [
		^ aMessage sendTo: self ]
!

visitMethodNode: aNode
	self methodNode: aNode.
	^ super visitMethodNode: aNode
!

visitSequenceNode: aNode
	self sequenceNode: aNode.
	aNode pragmas do: [ :each | self processPragma: each ].
	^ super visitSequenceNode: aNode
! !

Pragmator subclass: #EarlyPragmator
	instanceVariableNames: ''
	package: 'Compiler-Core'!

!String methodsFor: '*Compiler-Core'!

asVariableName
	^ (Smalltalk reservedWords includes: self)
		ifTrue: [ self, '_' ]
		ifFalse: [ self ]
! !

