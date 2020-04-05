Smalltalk createPackage: 'Compiler-IR'!
NodeVisitor subclass: #IRASTTranslator
	slots: {#source. #theClass. #method. #sequence}
	package: 'Compiler-IR'!
!IRASTTranslator commentStamp!
I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.!

!IRASTTranslator methodsFor: 'accessing'!

method
	^ method
!

method: anIRMethod
	method := anIRMethod
!

sequence
	^ sequence
!

sequence: anIRSequence
	sequence := anIRSequence
!

source
	^ source
!

source: aString
	source := aString
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
!

withSequence: aSequence do: aBlock
	| outerSequence |
	outerSequence := self sequence.
	self sequence: aSequence.
	aBlock value.
	self sequence: outerSequence.
	^ aSequence
! !

!IRASTTranslator methodsFor: 'visiting'!

addToSequence: anInstruction
	anInstruction ifNotNil: [
		anInstruction isVariable ifFalse: [
			self sequence add: anInstruction ] ].
	^ anInstruction
!

alias: anExpressionNode
	| assignment |

	anExpressionNode isIdempotent ifTrue: [ ^ self visit: anExpressionNode ].

	assignment := self method newAliasingOf: (self visit: anExpressionNode).
	self addToSequence: assignment.

	^ assignment left
!

aliasTemporally: aCollection
	"https://lolg.it/amber/amber/issues/296
	
	If a node is aliased, all preceding ones are aliased as well.
	The tree is iterated twice. First we get the aliasing dependency,
	then the aliasing itself is done"

	| threshold shouldAlias |
	shouldAlias := false.
	threshold := aCollection reversed
		detect: [ :each |
			shouldAlias
				ifTrue: [ true ]
				ifFalse: [
					(each hasOpeningStatements ifTrue: [ true ] ifFalse: [ each subtreeNeedsAliasing ]) ifTrue: [ shouldAlias := true ].
					each shouldBeAliased ] ]
		ifNone: [ nil ].
	threshold ifNil: [ ^ self visitAll: aCollection ].

	shouldAlias := true.
	^ aCollection collect: [ :each |
		shouldAlias
			ifTrue: [ each == threshold ifTrue: [ shouldAlias := false ]. self alias: each ]
			ifFalse: [ self visit: each ] ]
!

visitAssignmentNode: aNode
	| left right assignment |
	right := self visit: aNode right.
	left := self visit: aNode left.
	self addToSequence: (IRAssignment new
		add: left;
		add: right;
		yourself).
	^ left
!

visitBlockNode: aNode
	| closure |
	closure := IRClosure new
		arguments: aNode parameters;
		requiresSmalltalkContext: aNode requiresSmalltalkContext;
		scope: aNode scope;
		yourself.
	aNode scope temps do: [ :each |
		closure add: (IRTempDeclaration new
			name: each name;
			scope: aNode scope;
			yourself) ].
	closure add: (self visit: aNode sequenceNode).
	^ closure
!

visitBlockSequenceNode: aNode
	^ self
		withSequence: IRBlockSequence new
		do: [
			aNode dagChildren ifNotEmpty: [
				aNode dagChildren allButLast do: [ :each |
					self addToSequence: (self visit: each) ].
				aNode dagChildren last isReturnNode
					ifFalse: [ self addToSequence: (IRBlockReturn new add: (self visit: aNode dagChildren last); yourself) ]
					ifTrue: [ self addToSequence: (self visit: aNode dagChildren last) ] ]]
!

visitCascadeNode: aNode
	| receiver |
	receiver := aNode receiver.
	receiver isIdempotent ifFalse: [
		| alias |
		alias := self alias: receiver.
		receiver := VariableNode new binding: alias variable ].
	aNode dagChildren do: [ :each | each receiver: receiver ].

	aNode dagChildren allButLast do: [ :each |
		self addToSequence: (self visit: each) ].

	^ self visit: aNode dagChildren last
!

visitDynamicArrayNode: aNode
	| array |
	array := IRDynamicArray new.
	(self aliasTemporally: aNode dagChildren) do: [ :each | array add: each ].
	^ array
!

visitDynamicDictionaryNode: aNode
	| dictionary |
	dictionary := IRDynamicDictionary new.
	(self aliasTemporally: aNode dagChildren) do: [ :each | dictionary add: each ].
	^ dictionary
!

visitJSStatementNode: aNode
	^ IRVerbatim new
		source: aNode source crlfSanitized;
		yourself
!

visitMethodNode: aNode
	| irSequence |

	self method: (IRMethod new
		source: self source crlfSanitized;
		pragmas: (aNode pragmas collect: [ :each |
			Message
				selector: each selector
				arguments: (each arguments collect: [ :eachArg |
					eachArg isString ifTrue: [ eachArg crlfSanitized ] ifFalse: [ eachArg ]])]);
		theClass: self theClass;
		arguments: aNode arguments;
		selector: aNode selector;
		sendIndexes: aNode sendIndexes;
		requiresSmalltalkContext: aNode requiresSmalltalkContext;
		classReferences: aNode classReferences;
		scope: aNode scope;
		yourself).

	aNode scope temps do: [ :each |
		self method add: (IRTempDeclaration new
			name: each name;
			scope: aNode scope;
			yourself) ].

	self method add: (irSequence := self visit: aNode sequenceNode).

	aNode scope hasLocalReturn ifFalse: [ irSequence
		add: (IRReturn new
			add: (IRVariable new
				variable: (aNode scope pseudoVars at: 'self');
				yourself);
			yourself) ].

	^ self method
!

visitReturnNode: aNode
	^ (aNode nonLocalReturn
		ifTrue: [ IRNonLocalReturn new ]
		ifFalse: [ IRReturn new ])
		scope: aNode scope;
		add: (self visit: aNode expression);
		yourself
!

visitSendNode: aNode
	| send |
	send := IRSend new.
	send
		selector: aNode selector;
		index: aNode index.
	
	(self aliasTemporally: aNode dagChildren) do: [ :each | send add: each ].

	^ send
!

visitSequenceNode: aNode
	^ self
		withSequence: IRSequence new
		do: [ aNode dagChildren do: [ :each |
			self addToSequence: (self visit: each) ] ]
!

visitValueNode: aNode
	^ IRValue new
		value: aNode value;
		yourself
!

visitVariableNode: aNode
	^ IRVariable new
		variable: aNode binding;
		yourself
! !

Object subclass: #IRAliasFactory
	slots: {#counter}
	package: 'Compiler-IR'!

!IRAliasFactory methodsFor: 'accessing'!

next
	counter := counter + 1.
	^ AliasVar new
		name: '$', counter asString;
		yourself
! !

!IRAliasFactory methodsFor: 'initialization'!

initialize
	super initialize.
	counter := 0
! !

DagParentNode subclass: #IRInstruction
	slots: {#parent}
	package: 'Compiler-IR'!
!IRInstruction commentStamp!
I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.
The IR graph is used to emit JavaScript code using a JSStream.!

!IRInstruction methodsFor: 'accessing'!

method
	^ self parent method
!

parent
	^ parent
!

parent: anIRInstruction
	parent := anIRInstruction
!

scope
	^ self parent ifNotNil: [ :node | 
		node scope ]
! !

!IRInstruction methodsFor: 'building'!

add: anObject
	^ self addDagChild: anObject
!

remove: anIRInstruction
	self dagChildren remove: anIRInstruction
!

replace: anIRInstruction with: anotherIRInstruction
	anotherIRInstruction parent: self.
	self dagChildren
		at: (self dagChildren indexOf: anIRInstruction)
		put: anotherIRInstruction
!

replaceWith: anIRInstruction
	self parent replace: self with: anIRInstruction
! !

!IRInstruction methodsFor: 'converting'!

asReceiver
	"Return customized form to act as receiver.
	Return self to use standard $recv(...) boxing."
	^ nil
! !

!IRInstruction methodsFor: 'testing'!

isClosure
	^ false
!

isInlined
	^ false
!

isMethod
	^ false
!

isSend
	^ false
!

isSequence
	^ false
!

isSuper
	^ false
!

isTempDeclaration
	^ false
!

isVariable
	^ false
!

needsBoxingAsReceiver
	self deprecatedAPI: 'Use asReceiver isNil instead.'.
	^ self asReceiver isNil
!

yieldsValue
	^ true
! !

!IRInstruction class methodsFor: 'instance creation'!

on: aBuilder
	^ self new
		builder: aBuilder;
		yourself
! !

IRInstruction subclass: #IRAssignment
	slots: {}
	package: 'Compiler-IR'!

!IRAssignment methodsFor: 'accessing'!

left
	^ self dagChildren first
!

right
	^ self dagChildren last
! !

!IRAssignment methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRAssignment: self
! !

IRInstruction subclass: #IRDynamicArray
	slots: {}
	package: 'Compiler-IR'!

!IRDynamicArray methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRDynamicArray: self
! !

IRInstruction subclass: #IRDynamicDictionary
	slots: {}
	package: 'Compiler-IR'!

!IRDynamicDictionary methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRDynamicDictionary: self
! !

IRInstruction subclass: #IRScopedInstruction
	slots: {#scope}
	package: 'Compiler-IR'!

!IRScopedInstruction methodsFor: 'accessing'!

scope
	^ scope
!

scope: aScope
	scope := aScope
! !

IRScopedInstruction subclass: #IRClosureInstruction
	slots: {#arguments. #requiresSmalltalkContext}
	package: 'Compiler-IR'!

!IRClosureInstruction methodsFor: 'accessing'!

arguments
	^ arguments ifNil: [ #() ]
!

arguments: aCollection
	arguments := aCollection
!

locals
	^ self arguments, (self tempDeclarations collect: [ :each | each name ])
!

requiresSmalltalkContext
	^ requiresSmalltalkContext ifNil: [ false ]
!

requiresSmalltalkContext: anObject
	requiresSmalltalkContext := anObject
!

scope: aScope
	super scope: aScope.
	aScope instruction: self
!

tempDeclarations
	^ self dagChildren select: [ :each |
		each isTempDeclaration ]
! !

IRClosureInstruction subclass: #IRClosure
	slots: {}
	package: 'Compiler-IR'!

!IRClosure methodsFor: 'accessing'!

sequence
	^ self dagChildren last
! !

!IRClosure methodsFor: 'testing'!

isClosure
	^ true
! !

!IRClosure methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRClosure: self
! !

IRClosureInstruction subclass: #IRMethod
	slots: {#theClass. #source. #compiledSource. #attachments. #selector. #pragmas. #classReferences. #sendIndexes. #internalVariables. #aliasFactory}
	package: 'Compiler-IR'!
!IRMethod commentStamp!
I am a method instruction!

!IRMethod methodsFor: 'accessing'!

aliasFactory
	^ aliasFactory ifNil: [ aliasFactory := IRAliasFactory new ]
!

attachments
	^ attachments ifNil: [ attachments := #{} ]
!

classReferences
	^ classReferences
!

classReferences: aCollection
	classReferences := aCollection
!

compiledSource
	^ compiledSource
!

compiledSource: anObject
	compiledSource := anObject
!

internalVariables
	^ internalVariables ifNil: [ internalVariables := Set new ]
!

messageSends
	^ self sendIndexes keys
!

method
	^ self
!

newAliasingOf: anIRInstruction
	| variable |

	variable := IRVariable new
		variable: self aliasFactory next;
		yourself.

	self internalVariables add: variable.

	^ IRAssignment new
		add: variable;
		add: anIRInstruction;
		yourself
!

pragmas
	^ pragmas
!

pragmas: aCollection
	pragmas := aCollection
!

selector
	^ selector
!

selector: aString
	selector := aString
!

sendIndexes
	^ sendIndexes
!

sendIndexes: aDictionary
	sendIndexes := aDictionary
!

source
	^ source
!

source: aString
	source := aString
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

!IRMethod methodsFor: 'testing'!

isMethod
	^ true
! !

!IRMethod methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRMethod: self
! !

IRScopedInstruction subclass: #IRReturn
	slots: {}
	package: 'Compiler-IR'!
!IRReturn commentStamp!
I am a local return instruction.!

!IRReturn methodsFor: 'accessing'!

expression
	^ self dagChildren single
!

scope
	^ scope ifNil: [ self parent scope ]
! !

!IRReturn methodsFor: 'testing'!

yieldsValue
	^ false
! !

!IRReturn methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRReturn: self
! !

IRReturn subclass: #IRBlockReturn
	slots: {}
	package: 'Compiler-IR'!
!IRBlockReturn commentStamp!
Smalltalk blocks return their last statement. I am a implicit block return instruction.!

!IRBlockReturn methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRBlockReturn: self
! !

IRReturn subclass: #IRNonLocalReturn
	slots: {}
	package: 'Compiler-IR'!
!IRNonLocalReturn commentStamp!
I am a non local return instruction.
Non local returns are handled using a try/catch JavaScript statement.

See `IRNonLocalReturnHandling` class.!

!IRNonLocalReturn methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRNonLocalReturn: self
! !

IRScopedInstruction subclass: #IRTempDeclaration
	slots: {#name}
	package: 'Compiler-IR'!

!IRTempDeclaration methodsFor: 'accessing'!

name
	^ name
!

name: aString
	name := aString
! !

!IRTempDeclaration methodsFor: 'testing'!

isTempDeclaration
	^ true
! !

!IRTempDeclaration methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRTempDeclaration: self
! !

IRInstruction subclass: #IRSend
	slots: {#selector. #javaScriptSelector. #index}
	package: 'Compiler-IR'!
!IRSend commentStamp!
I am a message send instruction.!

!IRSend methodsFor: 'accessing'!

arguments
	^ self dagChildren allButFirst
!

index
	^ index
!

index: anInteger
	index := anInteger
!

javaScriptSelector
	^ javaScriptSelector ifNil: [ javaScriptSelector := self selector asJavaScriptMethodName ]
!

javaScriptSelector: aString
	javaScriptSelector := aString
!

receiver
	^ self dagChildren first
!

selector
	^ selector
!

selector: aString
	selector := aString
! !

!IRSend methodsFor: 'testing'!

isSend
	^ true
! !

!IRSend methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRSend: self
! !

IRInstruction subclass: #IRSequence
	slots: {}
	package: 'Compiler-IR'!

!IRSequence methodsFor: 'testing'!

isSequence
	^ true
! !

!IRSequence methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRSequence: self
! !

IRSequence subclass: #IRBlockSequence
	slots: {}
	package: 'Compiler-IR'!

!IRBlockSequence methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRBlockSequence: self
! !

IRInstruction subclass: #IRValue
	slots: {#value}
	package: 'Compiler-IR'!
!IRValue commentStamp!
I am the simplest possible instruction. I represent a value.!

!IRValue methodsFor: 'accessing'!

value
	^ value
!

value: aString
	value := aString
! !

!IRValue methodsFor: 'converting'!

asReceiver
	^ self
! !

!IRValue methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRValue: self
! !

IRInstruction subclass: #IRVariable
	slots: {#variable}
	package: 'Compiler-IR'!
!IRVariable commentStamp!
I am a variable instruction.!

!IRVariable methodsFor: 'accessing'!

variable
	^ variable
!

variable: aScopeVariable
	variable := aScopeVariable
! !

!IRVariable methodsFor: 'converting'!

asReceiver
	self variable asReceiver
		ifNil: [ ^ super asReceiver ]
		ifNotNil: [ :receiverVar |
			self variable == receiverVar ifTrue: [ ^ self ].
			^ self copy variable: receiverVar; yourself ]
! !

!IRVariable methodsFor: 'testing'!

isSuper
	^ self variable isSuper
!

isVariable
	^ true
! !

!IRVariable methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRVariable: self
! !

IRInstruction subclass: #IRVerbatim
	slots: {#source}
	package: 'Compiler-IR'!

!IRVerbatim methodsFor: 'accessing'!

source
	^ source
!

source: aString
	source := aString
! !

!IRVerbatim methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitIRVerbatim: self
! !

Object subclass: #IRPragmator
	slots: {#irMethod}
	package: 'Compiler-IR'!

!IRPragmator methodsFor: 'accessing'!

irMethod
	^ irMethod
!

irMethod: anObject
	irMethod := anObject
! !

!IRPragmator methodsFor: 'visiting'!

value: anIRMethod
	self irMethod: anIRMethod.
	self processPragmas: anIRMethod pragmas.
	^ anIRMethod
! !

IRPragmator subclass: #IRLatePragmator
	slots: {}
	package: 'Compiler-IR'!

!IRLatePragmator methodsFor: 'pragmas'!

jsOverride: aString
	(IRJSSuperSendVisitor new property: aString; yourself)
		visit: self irMethod.
	self irMethod attachments
		at: aString
		put: (NativeFunction
			constructorNamed: #Function
			value: 'return this.', irMethod selector asJavaScriptMethodName, '()')
! !

ParentFakingPathDagVisitor subclass: #IRVisitor
	slots: {}
	package: 'Compiler-IR'!

!IRVisitor methodsFor: 'visiting'!

visitDagNode: aNode
	^ self visitDagNodeVariantSimple: aNode
!

visitIRAssignment: anIRAssignment
	^ self visitDagNode: anIRAssignment
!

visitIRBlockReturn: anIRBlockReturn
	^ self visitIRReturn: anIRBlockReturn
!

visitIRBlockSequence: anIRBlockSequence
	^ self visitIRSequence: anIRBlockSequence
!

visitIRClosure: anIRClosure
	^ self visitDagNode: anIRClosure
!

visitIRDynamicArray: anIRDynamicArray
	^ self visitDagNode: anIRDynamicArray
!

visitIRDynamicDictionary: anIRDynamicDictionary
	^ self visitDagNode: anIRDynamicDictionary
!

visitIRMethod: anIRMethod
	^ self visitDagNode: anIRMethod
!

visitIRNonLocalReturn: anIRNonLocalReturn
	^ self visitDagNode: anIRNonLocalReturn
!

visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling
	^ self visitDagNode: anIRNonLocalReturnHandling
!

visitIRReturn: anIRReturn
	^ self visitDagNode: anIRReturn
!

visitIRSend: anIRSend
	^ self visitDagNode: anIRSend
!

visitIRSequence: anIRSequence
	^ self visitDagNode: anIRSequence
!

visitIRTempDeclaration: anIRTempDeclaration
	^ self visitDagNode: anIRTempDeclaration
!

visitIRValue: anIRValue
	^ self visitDagNode: anIRValue
!

visitIRVariable: anIRVariable
	^ self visitDagNode: anIRVariable
!

visitIRVerbatim: anIRVerbatim
	^ self visitDagNode: anIRVerbatim
! !

IRVisitor subclass: #IRJSSuperSendVisitor
	slots: {#selector. #property}
	package: 'Compiler-IR'!

!IRJSSuperSendVisitor methodsFor: 'accessing'!

property
	^ property
!

property: anObject
	property := anObject
!

selector
	^ selector
!

selector: anObject
	selector := anObject
!

visitIRMethod: anIRMethod
	self selector: anIRMethod selector.
	^ super visitIRMethod: anIRMethod
!

visitIRSend: anIRSend
	| receiver |
	receiver := anIRSend receiver.
	receiver isSuper ifTrue: [
		anIRSend selector = self selector ifTrue: [
			| old |
			old := receiver variable.
			receiver variable: (
				JavaScriptSuperVar new
					scope: old scope;
					name: old name;
					yourself ).
			anIRSend javaScriptSelector: self property ] ].
	^ super visitIRSend: anIRSend
! !

IRVisitor subclass: #IRJSTranslator
	slots: {#stream. #currentClass}
	package: 'Compiler-IR'!

!IRJSTranslator methodsFor: 'accessing'!

contents
	^ self stream contents
!

currentClass
	^ currentClass
!

currentClass: aClass
	currentClass := aClass
!

stream
	^ stream
!

stream: aStream
	stream := aStream
! !

!IRJSTranslator methodsFor: 'initialization'!

initialize
	super initialize.
	stream := JSStream new.
! !

!IRJSTranslator methodsFor: 'visiting'!

visitIRAssignment: anIRAssignment
	self stream
		nextPutAssignLhs: [self visit: anIRAssignment left]
		rhs: [self visit: anIRAssignment right].
!

visitIRClosure: anIRClosure
	self stream
		nextPutClosureWith: [
			self stream nextPutVars: (anIRClosure tempDeclarations collect: [ :each |
					each name asVariableName ]).
			self stream
				nextPutBlockContextFor: anIRClosure
				during: [ super visitIRClosure: anIRClosure ] ]
		arguments: anIRClosure arguments
!

visitIRDynamicArray: anIRDynamicArray
	self
		visitInstructionList: anIRDynamicArray dagChildren
		enclosedBetween: '[' and: ']'
!

visitIRDynamicDictionary: anIRDynamicDictionary
	self
		visitInstructionList: anIRDynamicDictionary dagChildren
		enclosedBetween: '$globals.HashedCollection._newFromPairs_([' and: '])'
!

visitIRMethod: anIRMethod

	self stream
			nextPutFunctionWith: [
				self stream nextPutVars: (anIRMethod tempDeclarations collect: [ :each |
					each name asVariableName ]).
				self stream nextPutContextFor: anIRMethod during: [
					anIRMethod internalVariables ifNotEmpty: [ :internalVars |
						self stream nextPutVars: 
							(internalVars collect: [ :each | each variable alias ]) asSet ].
				anIRMethod scope hasNonLocalReturn
					ifTrue: [
						self stream nextPutNonLocalReturnHandlingWith: [
							super visitIRMethod: anIRMethod ] ]
					ifFalse: [ super visitIRMethod: anIRMethod ] ]]
			arguments: anIRMethod arguments.
			
	^ anIRMethod compiledSource: self contents; yourself
!

visitIRNonLocalReturn: anIRNonLocalReturn
	self stream nextPutNonLocalReturnWith: [
		super visitIRNonLocalReturn: anIRNonLocalReturn ]
!

visitIRReturn: anIRReturn
	self stream nextPutReturnWith: [
		super visitIRReturn: anIRReturn ]
!

visitIRSend: anIRSend
	| prefixes suffixes workBlock |
	prefixes := #().
	suffixes := #().
	workBlock := [ self visitSend: anIRSend ].
	
	anIRSend index < (anIRSend method sendIndexes at: anIRSend selector) size ifTrue: [
		suffixes add:
			anIRSend scope alias,
			'.sendIdx[',
			anIRSend selector asJavaScriptSource,
			']=',
			anIRSend index asString ].
	
	anIRSend receiver isSuper ifTrue: [
		prefixes add: anIRSend scope alias, '.supercall = true'.
		suffixes add: anIRSend scope alias, '.supercall = false'.
		workBlock := [ self visitSuperSend: anIRSend ] ].

	self stream nextPutBefore: prefixes after: suffixes with: workBlock
!

visitIRSequence: anIRSequence
	anIRSequence dagChildren do: [ :each |
		self stream nextPutStatementWith: [ self visit: each ] ]
!

visitIRTempDeclaration: anIRTempDeclaration
	"self stream
		nextPutAll: 'var ', anIRTempDeclaration name asVariableName, ';';
		lf"
!

visitIRValue: anIRValue
	self stream nextPutAll: anIRValue value asJavaScriptSource
!

visitIRVariable: anIRVariable
	self stream nextPutAll: anIRVariable variable alias
!

visitIRVerbatim: anIRVerbatim
	self stream nextPutAll: anIRVerbatim source
!

visitInstructionList: anArray enclosedBetween: aString and: anotherString
	self stream nextPutAll: aString.
	anArray
		do: [ :each | self visit: each ]
		separatedBy: [ self stream nextPutAll: ',' ].
	stream nextPutAll: anotherString
!

visitReceiver: anIRInstruction
	anIRInstruction asReceiver
		ifNotNil: [ :instr | self visit: instr ]
		ifNil: [
			self stream nextPutAll: '$recv('.
			self visit: anIRInstruction.
			self stream nextPutAll: ')' ]
!

visitSend: anIRSend
	self visitReceiver: anIRSend receiver.
	self stream nextPutAll: '.', anIRSend javaScriptSelector.
	self
		visitInstructionList: anIRSend arguments
		enclosedBetween: '(' and: ')'
!

visitSuperSend: anIRSend
	self stream
		nextPutAll: anIRSend receiver variable lookupAsJavaScriptSource, '.';
		nextPutAll: anIRSend javaScriptSelector, '.call'.
	self
		visitInstructionList: {anIRSend receiver asReceiver}, anIRSend arguments
		enclosedBetween: '(' and: ')'
! !

Object subclass: #JSStream
	slots: {#stream. #omitSemicolon}
	package: 'Compiler-IR'!

!JSStream methodsFor: 'accessing'!

contents
	^ stream contents
!

omitSemicolon
	^ omitSemicolon
!

omitSemicolon: aBoolean
	omitSemicolon := aBoolean
! !

!JSStream methodsFor: 'initialization'!

initialize
	super initialize.
	stream := '' writeStream.
! !

!JSStream methodsFor: 'streaming'!

lf
	stream lf
!

nextPut: aString
	stream nextPut: aString
!

nextPutAll: aString
	stream nextPutAll: aString
!

nextPutAssignLhs: aBlock rhs: anotherBlock
	aBlock value.
	stream nextPutAll: '='.
	anotherBlock value
!

nextPutBefore: prefixCollection after: suffixCollection with: aBlock
	suffixCollection isEmpty
		ifTrue: [ self nextPutBefore: prefixCollection with: aBlock ]
		ifFalse: [
			self
				nextPutAll: '['; nextPutBefore: prefixCollection with: aBlock; lf;
				nextPutAll: '//>>excludeStart("ctx", pragmas.excludeDebugContexts);'; lf.
			suffixCollection do: [ :each | self nextPutAll: ','; nextPutAll: each ].
			self
				lf;
				nextPutAll: '//>>excludeEnd("ctx");'; lf;
				nextPutAll: '][0]' ]
!

nextPutBefore: aCollection with: aBlock
	aCollection isEmpty ifTrue: [ aBlock value ] ifFalse: [
		self nextPutAll: '('; lf; nextPutAll: '//>>excludeStart("ctx", pragmas.excludeDebugContexts);'; lf.
		aCollection do: [ :each | self nextPutAll: each; nextPutAll: ',' ].
		self lf; nextPutAll: '//>>excludeEnd("ctx");'; lf.
		aBlock value.
		self nextPutAll: ')' ]
!

nextPutBlockContextFor: anIRClosure during: aBlock
	anIRClosure requiresSmalltalkContext ifFalse: [ ^ aBlock value ].
	self
		nextPutAll: '//>>excludeStart("ctx", pragmas.excludeDebugContexts);';
		lf;
		nextPutAll: 'return $core.withContext(function(', anIRClosure scope alias, ') {';
		lf;
		nextPutAll: '//>>excludeEnd("ctx");';
		lf.
	
	aBlock value.
	
	self
		nextPutAll: '//>>excludeStart("ctx", pragmas.excludeDebugContexts);';
		lf;
		nextPutAll: '}, function(', anIRClosure scope alias, ') {';
		nextPutAll: anIRClosure scope alias, '.fillBlock({'.
	
	anIRClosure locals
		do: [ :each |
			self
				nextPutAll: each asVariableName;
				nextPutAll: ':';
				nextPutAll: each asVariableName ]
		separatedBy: [ self nextPutAll: ',' ].
	
	self
		nextPutAll: '},';
		nextPutAll: anIRClosure scope outerScope alias, ',', anIRClosure scope blockIndex asString, ')});';
		lf;
		nextPutAll: '//>>excludeEnd("ctx");'
!

nextPutClosureWith: aBlock arguments: anArray
	stream nextPutAll: '(function('.
	anArray
		do: [ :each | stream nextPutAll: each asVariableName ]
		separatedBy: [ stream nextPut: ',' ].
	stream nextPutAll: '){'; lf.
	aBlock value.
	stream lf; nextPutAll: '})'
!

nextPutContextFor: aMethod during: aBlock
	aMethod requiresSmalltalkContext ifFalse: [ ^ aBlock value ].
	
	self
		nextPutAll: '//>>excludeStart("ctx", pragmas.excludeDebugContexts);';
		lf;
		nextPutAll: 'return $core.withContext(function(', aMethod scope alias, ') {';
		lf;
		nextPutAll: '//>>excludeEnd("ctx");';
		lf.

	aBlock value.
	
	self
		nextPutAll: '//>>excludeStart("ctx", pragmas.excludeDebugContexts);';
		lf;
		nextPutAll: '}, function(', aMethod scope alias, ') {', aMethod scope alias;
		nextPutAll: '.fill(self,', aMethod selector asJavaScriptSource, ',{'.

	aMethod locals
		do: [ :each |
			self
				nextPutAll: each asVariableName;
				nextPutAll: ':';
				nextPutAll: each asVariableName ]
		separatedBy: [ self nextPutAll: ',' ].
	
	self
		nextPutAll: '})});';
		lf;
		nextPutAll: '//>>excludeEnd("ctx");'
!

nextPutFunctionWith: aBlock arguments: anArray
	stream nextPutAll: 'function ('.
	anArray
		do: [ :each | stream nextPutAll: each asVariableName ]
		separatedBy: [ stream nextPut: ',' ].
	stream nextPutAll: '){'; lf.
	stream nextPutAll: 'var self=this,$self=this;'; lf.
	aBlock value.
	stream lf; nextPutAll: '}'
!

nextPutIf: aBlock then: anotherBlock
	stream nextPutAll: 'if('.
	aBlock value.
	stream nextPutAll: '){'; lf.
	anotherBlock value.
	stream nextPutAll: '}'.
	self omitSemicolon: true
!

nextPutIf: aBlock then: ifBlock else: elseBlock
	stream nextPutAll: 'if('.
	aBlock value.
	stream nextPutAll: '){'; lf.
	ifBlock value.
	stream nextPutAll: '} else {'; lf.
	elseBlock value.
	stream nextPutAll: '}'.
	self omitSemicolon: true
!

nextPutNonLocalReturnHandlingWith: aBlock
	stream
		nextPutAll: 'var $early={};'; lf;
		nextPutAll: 'try {'; lf.
	aBlock value.
	stream
		nextPutAll: '}'; lf;
		nextPutAll: 'catch(e) {if(e===$early)return e[0]; throw e}'; lf
!

nextPutNonLocalReturnWith: aBlock
	stream nextPutAll: 'throw $early=['.
	aBlock value.
	stream nextPutAll: ']'
!

nextPutReturnWith: aBlock
	stream nextPutAll: 'return '.
	aBlock value
!

nextPutStatementWith: aBlock
	self omitSemicolon: false.
	aBlock value.
	self omitSemicolon ifFalse: [ stream nextPutAll: ';' ].
	self omitSemicolon: false.
	stream lf
!

nextPutVars: aCollection
	aCollection ifNotEmpty: [
		stream nextPutAll: 'var '.
		aCollection
			do: [ :each | stream nextPutAll: each ]
			separatedBy: [ stream nextPutAll: ',' ].
		stream nextPutAll: ';'; lf ]
! !

IRPragmator setTraitComposition: {TPragmator} asTraitComposition!
! !

!ASTNode methodsFor: '*Compiler-IR'!

requiresSmalltalkContext
	"Answer true if the receiver requires a smalltalk context.
	Only send nodes require a context.
	
	If no node requires a context, the method will be compiled without one.
	See `IRJSTranslator` and `JSStream` for context creation"
	
	^ self dagChildren anySatisfy: [ :each | each requiresSmalltalkContext ]
! !

!AssignmentNode methodsFor: '*Compiler-IR'!

hasOpeningStatements
	^ true
! !

!BlockNode methodsFor: '*Compiler-IR'!

subtreeNeedsAliasing
	^ false
! !

!CascadeNode methodsFor: '*Compiler-IR'!

hasOpeningStatements
	^ true
! !

!ExpressionNode methodsFor: '*Compiler-IR'!

hasOpeningStatements
	^ false
!

subtreeNeedsAliasing
	^ self dagChildren anySatisfy: [ :each |
		each shouldBeAliased ifTrue: [ true ] ifFalse: [
			each hasOpeningStatements ifTrue: [ true ] ifFalse: [
				each subtreeNeedsAliasing ] ] ]
! !

!JSStatementNode methodsFor: '*Compiler-IR'!

requiresSmalltalkContext
	^ true
! !

!PseudoVar methodsFor: '*Compiler-IR'!

asReceiver
	^ self class receiverNames
		at: self name
		ifPresent: [ :newName | self copy name: newName; yourself ]
		ifAbsent: [ self ]
! !

!ScopeVar methodsFor: '*Compiler-IR'!

asReceiver
	"Return customized copy to use as receiver,
	or self if suffices."
	^ nil
! !

!SendNode methodsFor: '*Compiler-IR'!

requiresSmalltalkContext
	^ true
! !

