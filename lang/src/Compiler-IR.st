Smalltalk createPackage: 'Compiler-IR'!
NodeVisitor subclass: #IRASTTranslator
	slots: {#source. #theClass. #method. #sequence. #nextAlias}
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

nextAlias
	nextAlias ifNil: [ nextAlias := 0 ].
	nextAlias := nextAlias + 1.
	^ nextAlias asString
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

alias: aNode
	| variable |

	aNode isImmutable ifTrue: [ ^ self visit: aNode ].

	variable := IRVariable new
		variable: (AliasVar new name: '$', self nextAlias);
		yourself.

	self addToSequence: (IRAssignment new
		add: variable;
		add: (self visit: aNode);
		yourself).

	self method internalVariables add: variable.

	^ variable
!

aliasTemporally: aCollection
	"https://lolg.it/amber/amber/issues/296
	
	If a node is aliased, all preceding ones are aliased as well.
	The tree is iterated twice. First we get the aliasing dependency,
	then the aliasing itself is done"

	| threshold result |
	threshold := 0.
	
	aCollection withIndexDo: [ :each :i |
		each subtreeNeedsAliasing
			ifTrue: [ threshold := i ] ].

	result := OrderedCollection new.
	aCollection withIndexDo: [ :each :i |
		result add: (i <= threshold
			ifTrue: [ self alias: each ]
			ifFalse: [ self visit: each ]) ].

	^ result
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
	aNode dagChildren do: [ :each | closure add: (self visit: each) ].
	^ closure
!

visitBlockSequenceNode: aNode
	^ self
		withSequence: IRBlockSequence new
		do: [
			aNode dagChildren ifNotEmpty: [
				aNode dagChildren allButLast do: [ :each |
					self addToSequence: (self visitOrAlias: each) ].
				aNode dagChildren last isReturnNode
					ifFalse: [ self addToSequence: (IRBlockReturn new add: (self visitOrAlias: aNode dagChildren last); yourself) ]
					ifTrue: [ self addToSequence: (self visitOrAlias: aNode dagChildren last) ] ]]
!

visitCascadeNode: aNode
	| receiver |
	receiver := aNode receiver.
	receiver isImmutable ifFalse: [
		| alias |
		alias := self alias: receiver.
		receiver := VariableNode new binding: alias variable ].
	aNode dagChildren do: [ :each | each receiver: receiver ].

	aNode dagChildren allButLast do: [ :each |
		self addToSequence: (self visit: each) ].

	^ self visitOrAlias: aNode dagChildren last
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

	self method dagChildren addAll: (self visitAllChildren: aNode).

	aNode scope hasLocalReturn ifFalse: [self method
		add: (IRReturn new
			add: (IRVariable new
				variable: (aNode scope pseudoVars at: 'self');
				yourself);
			yourself);
		add: (IRVerbatim new source: ';', String lf; yourself) ].

	^ self method
!

visitOrAlias: aNode
	^ aNode shouldBeAliased
		ifTrue: [ self alias: aNode ]
		ifFalse: [ self visit: aNode ]
!

visitReturnNode: aNode
	| return |
	return := aNode nonLocalReturn
		ifTrue: [ IRNonLocalReturn new ]
		ifFalse: [ IRReturn new ].
	return scope: aNode scope.
	aNode dagChildren do: [ :each |
		return add: (self visitOrAlias: each) ].
	^ return
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
			self addToSequence: (self visitOrAlias: each) ] ]
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

isSelf
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
	^ true
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
	^ self arguments copy
		addAll: (self tempDeclarations collect: [ :each | each name ]);
		yourself
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
	slots: {#theClass. #source. #compiledSource. #selector. #pragmas. #classReferences. #sendIndexes. #internalVariables}
	package: 'Compiler-IR'!
!IRMethod commentStamp!
I am a method instruction!

!IRMethod methodsFor: 'accessing'!

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

!IRValue methodsFor: 'testing'!

needsBoxingAsReceiver
	^ false
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

!IRVariable methodsFor: 'testing'!

isSelf
	^ self variable isSelf
!

isSuper
	^ self variable isSuper
!

isVariable
	^ true
!

needsBoxingAsReceiver
	^ self variable isPseudoVar not
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

visitIRInlinedClosure: anIRInlinedClosure
	^ self visitIRClosure: anIRInlinedClosure
!

visitIRInlinedSequence: anIRInlinedSequence
	^ self visitIRSequence: anIRInlinedSequence
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
	| sends superclass |
	sends := (anIRSend method sendIndexes at: anIRSend selector) size.
	
	anIRSend receiver isSuper
		ifTrue: [ self visitSuperSend: anIRSend ]
		ifFalse: [ self visitSend: anIRSend ].
		
	anIRSend index < sends
		ifTrue: [ self stream nextPutSendIndexFor: anIRSend ]
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
	| instr |

	anIRInstruction isSelf
		ifTrue: [ instr := anIRInstruction copy
			variable: (anIRInstruction variable copy name: '$self'; yourself);
			yourself ]
		ifFalse: [ instr := anIRInstruction ].
	
	instr needsBoxingAsReceiver ifFalse: [ ^ self visit: instr ].
	
	self stream nextPutAll: '$recv('.
	self visit: instr.
	self stream nextPutAll: ')'
!

visitSend: anIRSend
	self visitReceiver: anIRSend receiver.
	self stream nextPutAll: '.', anIRSend javaScriptSelector.
	self
		visitInstructionList: anIRSend arguments
		enclosedBetween: '(' and: ')'
!

visitSuperSend: anIRSend
	self stream nextPutSupercallFor: anIRSend with: [
		self stream
			nextPutAll: anIRSend receiver variable lookupAsJavaScriptSource, '.';
			nextPutAll: anIRSend javaScriptSelector, '.call'.
		self
			visitInstructionList: {anIRSend receiver}, anIRSend arguments
			enclosedBetween: '(' and: ')' ]
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

nextPutSendIndexFor: anIRSend
	self 
		nextPutAll: ';'; lf;
		nextPutAll: '//>>excludeStart("ctx", pragmas.excludeDebugContexts);'; lf;
		nextPutAll: anIRSend scope alias;
		nextPutAll: '.sendIdx[';
		nextPutAll: anIRSend selector asJavaScriptSource;
		nextPutAll: ']=';
		nextPutAll: anIRSend index asString;
		nextPutAll: ';'; lf;
		nextPutAll: '//>>excludeEnd("ctx")'
!

nextPutStatementWith: aBlock
	self omitSemicolon: false.
	aBlock value.
	self omitSemicolon ifFalse: [ stream nextPutAll: ';' ].
	self omitSemicolon: false.
	stream lf
!

nextPutSupercallFor: anIRSend with: aBlock
	self
		nextPutAll: '('; lf;
		nextPutAll: '//>>excludeStart("ctx", pragmas.excludeDebugContexts);'; lf;
		nextPutAll: anIRSend scope alias, '.supercall = true,'; lf;
		nextPutAll: '//>>excludeEnd("ctx");'; lf.
	aBlock value.
	self
		nextPutAll: ');'; lf;
		nextPutAll: '//>>excludeStart("ctx", pragmas.excludeDebugContexts);'; lf;
		nextPutAll: anIRSend scope alias, '.supercall = false;'; lf;
		nextPutAll: '//>>excludeEnd("ctx");'
!

nextPutVars: aCollection
	aCollection ifNotEmpty: [
		stream nextPutAll: 'var '.
		aCollection
			do: [ :each | stream nextPutAll: each ]
			separatedBy: [ stream nextPutAll: ',' ].
		stream nextPutAll: ';'; lf ]
! !

!ASTNode methodsFor: '*Compiler-IR'!

isReferenced
	"Answer true if the receiver is referenced by other nodes.
	Do not take sequences or assignments into account"
	
	self parent isSequenceNode ifTrue: [ ^ false ].
	self parent isAssignmentNode ifTrue: [ ^ false ].
	self parent isCascadeNode ifTrue: [ ^ self parent isReferenced ].
	
	^ true
!

subtreeNeedsAliasing
	^ self shouldBeAliased or: [
		self dagChildren anySatisfy: [ :each | each subtreeNeedsAliasing ] ]
! !

!AssignmentNode methodsFor: '*Compiler-IR'!

shouldBeAliased
	^ super shouldBeAliased or: [ self isReferenced ]
! !

!BlockClosure methodsFor: '*Compiler-IR'!

appendToInstruction: anIRInstruction
	anIRInstruction appendBlock: self
! !

!BlockNode methodsFor: '*Compiler-IR'!

subtreeNeedsAliasing
	^ self shouldBeAliased
! !

!CascadeNode methodsFor: '*Compiler-IR'!

subtreeNeedsAliasing
	^ self parent isSequenceNode not
! !

!SendNode methodsFor: '*Compiler-IR'!

shouldBeAliased
	"Because we keep track of send indexes, some send nodes need additional care for aliasing. 
	See IRJSVisitor >> visitIRSend:"
	
	| sends |
	
	sends := (self method sendIndexes at: self selector) size.
	
	^ (super shouldBeAliased or: [
		self isReferenced and: [
			self index < sends or: [
				self superSend ] ] ])
!

subtreeNeedsAliasing
	^ self shouldBeInlined or: [ super subtreeNeedsAliasing ]
! !

