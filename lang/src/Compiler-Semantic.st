Smalltalk createPackage: 'Compiler-Semantic'!
NodeVisitor subclass: #JSSuperSendVisitor
	slots: {#selector. #arguments. #property. #args}
	package: 'Compiler-Semantic'!

!JSSuperSendVisitor methodsFor: 'accessing'!

args
	^ args
!

args: aCollection
	args := aCollection
!

arguments
	^ arguments
!

arguments: aCollection
	arguments := aCollection
!

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

switcherFrom: aCollection to: anotherCollection
	^ NativeFunction
		constructorNamed: #Function
		value: (',' join: aCollection)
		value: 'return [', (',' join: anotherCollection), ']'
!

visitMethodNode: aNode
	self selector: aNode selector.
	self arguments: aNode arguments.
	^ super visitMethodNode: aNode
!

visitSendNode: aNode
	| receiver |
	receiver := aNode receiver.
	receiver isSuper ifTrue: [
		aNode selector = self selector ifTrue: [
			| old |
			old := receiver binding.
			receiver binding: (
				JavaScriptSuperVar new
					scope: old scope;
					name: old name;
					yourself ).
			self args ifNotNil: [ :myArgs |
				myArgs = self arguments ifFalse: [
					aNode argumentSwitcher:
						(self switcherFrom: self arguments to: myArgs) ] ].
			aNode javaScriptSelector: self property ] ].
	^ super visitSendNode: aNode
! !

Object subclass: #LexicalScope
	slots: {#node. #instruction. #temps. #args. #outerScope. #blockIndex}
	package: 'Compiler-Semantic'!
!LexicalScope commentStamp!
I represent a lexical scope where variable names are associated with ScopeVars
Instances are used for block scopes. Method scopes are instances of MethodLexicalScope.

I am attached to a ScopeVar and method/block nodes.
Each context (method/closure) get a fresh scope that inherits from its outer scope.!

!LexicalScope methodsFor: 'accessing'!

alias
	^ '$ctx', self scopeLevel asString
!

allVariableNames
	^ self args keys, self temps keys
!

args
	^ args ifNil: [ args := Dictionary new ]
!

bindingFor: aString
	^ self pseudoVars at: aString ifAbsent: [
		self args at: aString ifAbsent: [
			self temps at: aString ifAbsent: [ nil ]]]
!

blockIndex
	^ blockIndex ifNil: [ 0 ]
!

blockIndex: anInteger 
	blockIndex := anInteger
!

instruction
	^ instruction
!

instruction: anIRInstruction
	instruction := anIRInstruction
!

lookupVariable: aString
	| lookup |
	lookup := (self bindingFor: aString).
	lookup ifNil: [
		lookup := self outerScope ifNotNil: [
			(self outerScope lookupVariable: aString) ]].
	^ lookup
!

methodScope
	^ self outerScope ifNotNil: [
		self outerScope methodScope ]
!

node
	"Answer the node in which I am defined"
	
	^ node
!

node: aNode
	node := aNode
!

outerScope
	^ outerScope
!

outerScope: aLexicalScope
	outerScope := aLexicalScope
!

pseudoVars
	^ self methodScope pseudoVars
!

scopeLevel
	self outerScope ifNil: [ ^ 1 ].
	self isInlined ifTrue: [ ^ self outerScope scopeLevel ].
	
	^ self outerScope scopeLevel + 1
!

temps
	^ temps ifNil: [ temps := Dictionary new ]
! !

!LexicalScope methodsFor: 'adding'!

addArg: aString
	self args at: aString put: (ArgVar on: aString).
	(self args at: aString) scope: self
!

addTemp: aString
	self temps at: aString put: (TempVar on: aString).
	(self temps at: aString) scope: self
! !

!LexicalScope methodsFor: 'testing'!

canFlattenNonLocalReturns
	^ self isInlined and: [ self outerScope canFlattenNonLocalReturns ]
!

isBlockScope
	^ self isMethodScope not
!

isInlined
	^ self instruction ifNil: [ false ] ifNotNil: [ :instr | instr isInlined ]
!

isMethodScope
	^ false
! !

LexicalScope subclass: #MethodLexicalScope
	slots: {#iVars. #pseudoVars. #localReturn. #nonLocalReturns}
	package: 'Compiler-Semantic'!
!MethodLexicalScope commentStamp!
I represent a method scope.!

!MethodLexicalScope methodsFor: 'accessing'!

allVariableNames
	^ super allVariableNames, self iVars keys
!

bindingFor: aString
	^ (super bindingFor: aString) ifNil: [
		self iVars at: aString ifAbsent: [ nil ]]
!

iVars
	^ iVars ifNil: [ iVars := Dictionary new ]
!

localReturn
	^ localReturn ifNil: [ false ]
!

localReturn: aBoolean
	localReturn := aBoolean
!

methodScope
	^ self
!

nonLocalReturns
	^ nonLocalReturns ifNil: [ nonLocalReturns := OrderedCollection new ]
!

pseudoVars
	pseudoVars ifNil: [
		pseudoVars := Dictionary new.
		PseudoVar dictionary keysAndValuesDo: [ :each :impl |
			pseudoVars at: each put: ((impl on: each)
				scope: self methodScope;
				yourself) ] ].
	^ pseudoVars
! !

!MethodLexicalScope methodsFor: 'adding'!

addIVar: aString
	self iVars at: aString put: (InstanceVar on: aString).
	(self iVars at: aString) scope: self
!

addNonLocalReturn: aScope
	self nonLocalReturns add: aScope
!

removeNonLocalReturn: aScope
	self nonLocalReturns remove: aScope ifAbsent: []
! !

!MethodLexicalScope methodsFor: 'testing'!

canFlattenNonLocalReturns
	^ true
!

hasLocalReturn
	^ self localReturn
!

hasNonLocalReturn
	^ self nonLocalReturns notEmpty
!

isMethodScope
	^ true
! !

Object subclass: #ScopeVar
	slots: {#scope. #name}
	package: 'Compiler-Semantic'!
!ScopeVar commentStamp!
I am an entry in a LexicalScope that gets associated with variable nodes of the same name.
There are 4 different subclasses of vars: temp vars, local vars, args, and unknown/global vars.!

!ScopeVar methodsFor: 'accessing'!

alias
	^ self name asVariableName
!

name
	^ name
!

name: aString
	name := aString
!

scope
	^ scope
!

scope: aScope
	scope := aScope
! !

!ScopeVar methodsFor: 'testing'!

isAssignable
	^ false
!

isIdempotent
	^ false
!

isImmutable
	self deprecatedAPI: 'Use #isIdempotent / #isAssignable not instead.'.
	^ self isIdempotent
!

isSuper
	^ false
! !

!ScopeVar class methodsFor: 'instance creation'!

on: aString
	^ self new
		name: aString;
		yourself
! !

ScopeVar subclass: #AliasVar
	slots: {}
	package: 'Compiler-Semantic'!
!AliasVar commentStamp!
I am an internally defined variable by the compiler!

!AliasVar methodsFor: 'testing'!

isAssignable
	self error: 'Alias variable is internal, it should never appear in normal variable context.'
!

isIdempotent
	^ true
! !

ScopeVar subclass: #ArgVar
	slots: {}
	package: 'Compiler-Semantic'!
!ArgVar commentStamp!
I am an argument of a method or block.!

!ArgVar methodsFor: 'testing'!

isIdempotent
	^ true
! !

ScopeVar subclass: #ClassRefVar
	slots: {}
	package: 'Compiler-Semantic'!
!ClassRefVar commentStamp!
I am an class reference variable!

!ClassRefVar methodsFor: 'accessing'!

alias
	^ '$globals.', self name
! !

ScopeVar subclass: #ExternallyKnownVar
	slots: {}
	package: 'Compiler-Semantic'!
!ExternallyKnownVar commentStamp!
I am a variable known externally (not in method scope).!

ScopeVar subclass: #InstanceVar
	slots: {}
	package: 'Compiler-Semantic'!
!InstanceVar commentStamp!
I am an instance variable of a method or block.!

!InstanceVar methodsFor: 'testing'!

alias
	^ '$self.', self name
!

isAssignable
	^ true
! !

ScopeVar subclass: #PseudoVar
	slots: {}
	package: 'Compiler-Semantic'!
!PseudoVar commentStamp!
I am an pseudo variable.

The five Smalltalk pseudo variables are: 'self', 'super', 'nil', 'true' and 'false'!

!PseudoVar methodsFor: 'accessing'!

alias
	^ self name
! !

!PseudoVar methodsFor: 'testing'!

isIdempotent
	^ true
! !

PseudoVar class slots: {#dictionary. #receiverNames}!

!PseudoVar class methodsFor: 'accessing'!

dictionary
	^ dictionary ifNil: [ dictionary := Dictionary new
		at: #self put: PseudoVar;
		at: #super put: SuperVar;
		at: #nil put: PseudoVar;
		at: #false put: PseudoVar;
		at: #true put: PseudoVar;
		at: #thisContext put: ThisContextVar;
		yourself ]
!

receiverNames
	^ receiverNames ifNil: [ receiverNames := Dictionary new
		at: #self put: '$self';
		at: #super put: '$self';
		at: #nil put: '$nil';
		yourself ]
! !

PseudoVar subclass: #SuperVar
	slots: {}
	package: 'Compiler-Semantic'!
!SuperVar commentStamp!
I am a 'super' pseudo variable.!

!SuperVar methodsFor: 'accessing'!

lookupAsJavaScriptSource
	^ '($methodClass.superclass||$boot.nilAsClass).fn.prototype'
! !

!SuperVar methodsFor: 'testing'!

isSuper
	^ true
! !

SuperVar subclass: #JavaScriptSuperVar
	slots: {}
	package: 'Compiler-Semantic'!

!JavaScriptSuperVar methodsFor: 'accessing'!

lookupAsJavaScriptSource
	^ 'Object.getPrototypeOf($methodClass.fn.prototype)'
! !

PseudoVar subclass: #ThisContextVar
	slots: {}
	package: 'Compiler-Semantic'!
!ThisContextVar commentStamp!
I am a 'thisContext' pseudo variable.!

!ThisContextVar methodsFor: 'accessing'!

alias
	^ '$core.getThisContext()'
! !

ScopeVar subclass: #TempVar
	slots: {}
	package: 'Compiler-Semantic'!
!TempVar commentStamp!
I am an temporary variable of a method or block.!

!TempVar methodsFor: 'testing'!

isAssignable
	^ true
! !

NodeVisitor subclass: #SemanticAnalyzer
	slots: {#currentScope. #blockIndex. #thePackage. #theClass. #classReferences. #messageSends}
	package: 'Compiler-Semantic'!
!SemanticAnalyzer commentStamp!
I semantically analyze the abstract syntax tree and annotate it with informations such as non local returns and variable scopes.!

!SemanticAnalyzer methodsFor: 'accessing'!

classReferences
	^ classReferences ifNil: [ classReferences := Set new ]
!

messageSends
	^ messageSends ifNil: [ messageSends := Dictionary new ]
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
!

thePackage
	^ thePackage
!

thePackage: aPackage
	thePackage := aPackage
! !

!SemanticAnalyzer methodsFor: 'error handling'!

errorInvalidAssignment: aString
	InvalidAssignmentError new
		variableName: aString;
		signal
!

errorShadowingVariable: aString
	ShadowingVariableError new
		variableName: aString;
		signal
!

errorUnknownVariable: aString
	UnknownVariableError new
		variableName: aString;
		signal
! !

!SemanticAnalyzer methodsFor: 'factory'!

newBlockScope
	^ self newScopeOfClass: LexicalScope
!

newMethodScope
	^ self newScopeOfClass: MethodLexicalScope
!

newScopeOfClass: aLexicalScopeClass
	^ aLexicalScopeClass new
		outerScope: currentScope;
		yourself
! !

!SemanticAnalyzer methodsFor: 'private'!

bindUnscopedVariable: aString
	aString isCapitalized ifTrue: [ "Capital letter variables might be globals."
		self classReferences add: aString.
		^ ClassRefVar new name: aString; yourself ].

	"Throw an error if the variable is undeclared in the global JS scope (i.e. window).
	We allow all variables listed by Smalltalk>>#globalJsVariables.
	This list includes: `window`, `document`,  `process` and `global`
	for nodejs and browser environments.
	
	This is only to make sure compilation works on both browser-based and nodejs environments.
	The ideal solution would be to use a pragma instead"

	((Smalltalk globalJsVariables includes: aString)
		or: [ self isVariableKnown: aString inPackage: self thePackage ]) ifTrue: [
			^ ExternallyKnownVar new name: aString; yourself ].

	self errorUnknownVariable: aString
!

nextBlockIndex
	blockIndex ifNil: [ blockIndex := 0 ].
	
	blockIndex := blockIndex + 1.
	^ blockIndex
! !

!SemanticAnalyzer methodsFor: 'scope'!

popScope
	currentScope ifNotNil: [
		currentScope := currentScope outerScope ]
!

pushScope: aScope
	aScope outerScope: currentScope.
	currentScope := aScope
!

validateVariableScope: aString
	"Validate the variable scope in by doing a recursive lookup, up to the method scope"

	(currentScope lookupVariable: aString) ifNotNil: [
		self errorShadowingVariable: aString ]
! !

!SemanticAnalyzer methodsFor: 'testing'!

isVariableKnown: aString inPackage: aPackage
	aPackage ifNotNil: [
		| packageKnownVars |
		packageKnownVars := (aPackage imports reject: #isString) collect: #key.
		(packageKnownVars includes: aString) ifTrue: [ ^ true ] ].
	^ Compiler new
		eval: 'typeof(', aString, ')!!== "undefined"||(function(){try{return(', aString, ',true)}catch(_){return false}})()'
		forPackage: aPackage
! !

!SemanticAnalyzer methodsFor: 'visiting'!

visitAssignmentNode: aNode
	| lhs |
	super visitAssignmentNode: aNode.
	lhs := aNode left.
	lhs isAssignable ifFalse: [ self errorInvalidAssignment: lhs identifier ].
	lhs assigned: true
!

visitBlockNode: aNode
	self pushScope: self newBlockScope.
	aNode scope: currentScope.
	currentScope node: aNode.
	currentScope blockIndex: self nextBlockIndex.

	aNode parameters do: [ :each |
		self validateVariableScope: each.
		currentScope addArg: each ].

	super visitBlockNode: aNode.
	self popScope
!

visitCascadeNode: aNode
	aNode receiver: aNode dagChildren first receiver.
	aNode dagChildren allButLast do: [ :each | each beSideEffect ].
	super visitCascadeNode: aNode
!

visitMethodNode: aNode
	self pushScope: self newMethodScope.
	aNode scope: currentScope.
	currentScope node: aNode.

	self theClass allInstanceVariableNames do: [ :each |
		currentScope addIVar: each ].
	aNode arguments do: [ :each |
		self validateVariableScope: each.
		currentScope addArg: each ].

	super visitMethodNode: aNode.

	aNode
		classReferences: self classReferences;
		sendIndexes: self messageSends.
	self popScope.
	^ aNode
!

visitReturnNode: aNode
	aNode scope: currentScope.
	currentScope isMethodScope
		ifTrue: [ currentScope localReturn: true ]
		ifFalse: [ currentScope methodScope addNonLocalReturn: currentScope ].
	super visitReturnNode: aNode
!

visitSendNode: aNode

	| sends |
	sends := self messageSends at: aNode selector ifAbsentPut: [ OrderedCollection new ].
	sends add: aNode.

	aNode index: sends size.

	super visitSendNode: aNode
!

visitSequenceNode: aNode
	aNode temps do: [ :each |
		self validateVariableScope: each.
		currentScope addTemp: each ].

	super visitSequenceNode: aNode
!

visitVariableNode: aNode
	"Bind a ScopeVar to aNode by doing a lookup in the current scope.
	If no var is found in scope, represent an externally known variable or throw an error."

	aNode binding:
		((currentScope lookupVariable: aNode identifier) ifNil: [ self bindUnscopedVariable: aNode identifier ])
! !

!SemanticAnalyzer class methodsFor: 'instance creation'!

on: aClass
	^ self new
		theClass: aClass;
		yourself
! !

CompilerError subclass: #SemanticError
	slots: {}
	package: 'Compiler-Semantic'!
!SemanticError commentStamp!
I represent an abstract semantic error thrown by the SemanticAnalyzer.
Semantic errors can be unknown variable errors, etc.
See my subclasses for concrete errors.

The IDE should catch instances of Semantic error to deal with them when compiling!

SemanticError subclass: #InvalidAssignmentError
	slots: {#variableName}
	package: 'Compiler-Semantic'!
!InvalidAssignmentError commentStamp!
I get signaled when a pseudo variable gets assigned.!

!InvalidAssignmentError methodsFor: 'accessing'!

messageText
	^ ' Invalid assignment to variable: ', self variableName
!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

SemanticError subclass: #ShadowingVariableError
	slots: {#variableName}
	package: 'Compiler-Semantic'!
!ShadowingVariableError commentStamp!
I get signaled when a variable in a block or method scope shadows a variable of the same name in an outer scope.!

!ShadowingVariableError methodsFor: 'accessing'!

messageText
	^ 'Variable shadowing error: ', self variableName, ' is already defined'
!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

SemanticError subclass: #UnknownVariableError
	slots: {#variableName}
	package: 'Compiler-Semantic'!
!UnknownVariableError commentStamp!
I get signaled when a variable is not defined.
The default behavior is to allow it, as this is how Amber currently is able to seamlessly send messages to JavaScript objects.!

!UnknownVariableError methodsFor: 'accessing'!

messageText
	^ 'Unknown Variable error: ', self variableName, ' is not defined'
!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

!AstSemanticPragmator methodsFor: '*Compiler-Semantic'!

jsOverride: aString
	(JSSuperSendVisitor new property: aString; yourself)
		visit: self methodNode
!

jsOverride: aString args: aCollection
	(JSSuperSendVisitor new property: aString; args: aCollection; yourself)
		visit: self methodNode
! !

