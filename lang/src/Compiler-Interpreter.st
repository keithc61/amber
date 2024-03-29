Smalltalk createPackage: 'Compiler-Interpreter'!
BlockClosure subclass: #AIBlockClosure
	slots: {#node. #outerContext}
	package: 'Compiler-Interpreter'!
!AIBlockClosure commentStamp!
I am a special `BlockClosure` subclass used by an interpreter to interpret a block node.

While I am polymorphic with `BlockClosure`, some methods such as `#new` will raise interpretation errors. Unlike a `BlockClosure`, my instance are not JavaScript functions.

Evaluating an instance will result in interpreting the `node` instance variable (instance of `BlockNode`).!

!AIBlockClosure methodsFor: 'accessing'!

compiledSource
	"Unlike blocks, the receiver doesn't represent a JS function"
	
	^ '[ AST Block closure ]'
!

numArgs
	^ node temps size
! !

!AIBlockClosure methodsFor: 'converting'!

currySelf
	self interpreterError
! !

!AIBlockClosure methodsFor: 'error handling'!

interpreterError
	ASTInterpreterError signal: 'Method cannot be interpreted by the interpreter.'
! !

!AIBlockClosure methodsFor: 'evaluating'!

applyTo: anObject arguments: aCollection
	self interpreterError
!

value
	^ self valueWithPossibleArguments: #()
!

value: anArgument
	^ self valueWithPossibleArguments: {anArgument}
!

value: firstArgument value: secondArgument
	^ self valueWithPossibleArguments: {firstArgument . secondArgument}
!

value: firstArgument value: secondArgument value: thirdArgument
	^ self valueWithPossibleArguments: {firstArgument . secondArgument . thirdArgument}
!

valueWithPossibleArguments: aCollection
	| context sequenceNode |
	context := outerContext newInnerContext.

	"Interpret a copy of the sequence node to avoid creating a new AIBlockClosure"
	sequenceNode := node sequenceNode copy
		parent: nil;
		yourself.
		
	"Define locals in the context"
	sequenceNode temps do: [ :each |
		context defineLocal: each ].
		
	"Populate the arguments into the context locals"	
	node parameters withIndexDo: [ :each :index |
		context defineLocal: each.
		context localAt: each put: (aCollection at: index ifAbsent: [ nil ]) ].

	"Interpret the first node of the BlockSequenceNode"
	context interpreter
		node: sequenceNode;
		enterNode;
		proceed.
		
	outerContext interpreter
		setNonLocalReturnFromContext: context.
		
	^ context interpreter pop
! !

!AIBlockClosure methodsFor: 'initialization'!

initializeWithContext: aContext node: aNode
	node := aNode.
	outerContext := aContext
! !

!AIBlockClosure class methodsFor: 'instance creation'!

forContext: aContext node: aNode
	^ self new
		initializeWithContext: aContext node: aNode;
		yourself
! !

Object subclass: #AIContext
	slots: {#outerContext. #innerContext. #pc. #locals. #selector. #index. #sendIndexes. #evaluatedSelector. #ast. #interpreter. #supercall}
	package: 'Compiler-Interpreter'!
!AIContext commentStamp!
I am like a `MethodContext`, used by the `ASTInterpreter`.
Unlike a `MethodContext`, my instances are not read-only.

When debugging, my instances are created by copying the current `MethodContext` (thisContext)!

!AIContext methodsFor: 'accessing'!

defineLocal: aString
	self locals at: aString put: nil
!

evaluatedSelector
	^ evaluatedSelector
!

evaluatedSelector: aString
	evaluatedSelector := aString
!

home
	^ nil
!

index
	^ index ifNil: [ 0 ]
!

index: anInteger
	index := anInteger
!

innerContext
	^ innerContext
!

innerContext: anAIContext
	innerContext := anAIContext
!

localAt: aString
	"Lookup the local value up to the method context"

	| context |
	
	context := self lookupContextForLocal: aString.
	^ context basicLocalAt: aString
!

localAt: aString ifAbsent: aBlock
	"Lookup the local value up to the method context"

	| context |
	
	context := self 	
		lookupContextForLocal: aString 
		ifNone: [ ^ aBlock value ].
	
	^ context basicLocalAt: aString
!

localAt: aString put: anObject
	| context |
	
	context := self lookupContextForLocal: aString.
	context basicLocalAt: aString put: anObject
!

locals
	locals ifNil: [ self initializeLocals ].
	
	^ locals
!

outerContext
	^ outerContext
!

outerContext: anAIContext
	outerContext := anAIContext.
	outerContext ifNotNil: [ :context | 
		context innerContext: self ]
!

selector
	^ selector
!

selector: aString
	selector := aString
!

sendIndexAt: aString
	^ self sendIndexes at: aString ifAbsent: [ 0 ]
!

sendIndexes
	^ sendIndexes ifNil: [ Dictionary new ]
!

sendIndexes: aDictionary
	sendIndexes := aDictionary
! !

!AIContext methodsFor: 'error handling'!

variableNotFound
	"Error thrown whenever a variable lookup fails"
	
	self error: 'Variable missing'
! !

!AIContext methodsFor: 'evaluating'!

evaluate: aString on: anEvaluator
	^ anEvaluator evaluate: aString context: self
!

evaluateNode: aNode
	^ ASTInterpreter new
		context: self;
		node: aNode;
		enterNode;
		proceed;
		result
! !

!AIContext methodsFor: 'factory'!

newInnerContext
	^ self class new
		outerContext: self;
		yourself
! !

!AIContext methodsFor: 'initialization'!

initializeAST
	ast := self method ast.
	(SemanticAnalyzer on: self method origin)
		visit: ast
!

initializeFromMethodContext: aMethodContext

	self
		evaluatedSelector: aMethodContext evaluatedSelector;
		index: aMethodContext index;
		sendIndexes: aMethodContext sendIndexes;
		receiver: aMethodContext receiver;
		supercall: aMethodContext supercall;
		selector: aMethodContext selector.
		
	aMethodContext outerContext ifNotNil: [ :outer |
		"If the method context is nil, the block was defined in JS, so ignore it"
		outer methodContext ifNotNil: [
			self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].
			aMethodContext locals keysAndValuesDo: [ :key :value |
				self locals at: key put: value ] ]
!

initializeInterpreter
	interpreter := ASTInterpreter new
		context: self;
		yourself.
	
	self innerContext ifNotNil: [
		self setupInterpreter: interpreter ]
!

initializeLocals
	locals := Dictionary new.
	locals at: 'thisContext' put: self.
! !

!AIContext methodsFor: 'interpreting'!

arguments
	^ self ast arguments collect: [ :each |
		self localAt: each ifAbsent: [ self error: 'Argument not in context' ] ]
!

ast
	self isBlockContext ifTrue: [ 
		^ self outerContext ifNotNil: [ :context | context ast ] ].

	ast ifNil: [ self initializeAST ].
	^ ast
!

basicReceiver
	^ self localAt: 'self'
!

interpreter
	interpreter ifNil: [ self initializeInterpreter ].
	^ interpreter
!

interpreter: anInterpreter
	interpreter := anInterpreter
!

receiver: anObject
	self locals at: 'self' put: anObject
!

setupInterpreter: anInterpreter
	| currentNode |
	
	"Retrieve the current node"
	currentNode := ASTPCNodeVisitor new
			selector: self evaluatedSelector;
			index: (self sendIndexAt: self evaluatedSelector);
			visit: self ast;
			currentNode.
	
	"Define locals for the context"
	self ast sequenceNode ifNotNil: [ :sequence |
		sequence temps do: [ :each |
			self defineLocal: each ] ].
	
	anInterpreter node: currentNode.

	"Push the send args and receiver to the interpreter stack"	
	self innerContext arguments reversed do: [ :each | 
		anInterpreter push: each ].
		
	anInterpreter push: (self innerContext receiver)
!

supercall
	^ supercall ifNil: [ false ]
!

supercall: aBoolean
	supercall := aBoolean
! !

!AIContext methodsFor: 'private'!

basicLocalAt: aString
	^ self locals at: aString
!

basicLocalAt: aString put: anObject
	self locals at: aString put: anObject
!

lookupContextForLocal: aString
	"Lookup the context defining the local named `aString` 
	up to the method context"

	^ self 
		lookupContextForLocal: aString 
		ifNone: [ self variableNotFound ]
!

lookupContextForLocal: aString ifNone: aBlock
	"Lookup the context defining the local named `aString` 
	up to the method context"

	^ self locals 
		at: aString
		ifPresent: [ self ]
		ifAbsent: [ 
			self outerContext 
				ifNil: aBlock
				ifNotNil: [ :context | 
					context lookupContextForLocal: aString ifNone: aBlock ] ]
! !

!AIContext methodsFor: 'testing'!

isTopContext
	^ self innerContext isNil
! !

!AIContext class methodsFor: 'instance creation'!

fromMethodContext: aMethodContext
	^ self new
		initializeFromMethodContext: aMethodContext;
		yourself
! !

SemanticAnalyzer subclass: #AISemanticAnalyzer
	slots: {#context}
	package: 'Compiler-Interpreter'!
!AISemanticAnalyzer commentStamp!
I perform the same semantic analysis than `SemanticAnalyzer`, with the difference that provided an `AIContext` context, variables are bound with the context variables.!

!AISemanticAnalyzer methodsFor: 'accessing'!

context
	^ context
!

context: anAIContext
	context := anAIContext
! !

!AISemanticAnalyzer methodsFor: 'visiting'!

visitVariableNode: aNode
	self context 
		localAt: aNode identifier 
		ifAbsent: [ ^ super visitVariableNode: aNode ].

	aNode binding: ASTContextVar new
! !

ScopeVar subclass: #ASTContextVar
	slots: {#context}
	package: 'Compiler-Interpreter'!
!ASTContextVar commentStamp!
I am a variable defined in a `context`.!

!ASTContextVar methodsFor: 'accessing'!

context
	^ context
!

context: anObject
	context := anObject
! !

Object subclass: #ASTDebugger
	slots: {#interpreter. #context. #result}
	package: 'Compiler-Interpreter'!
!ASTDebugger commentStamp!
I am a stepping debugger interface for Amber code.
I internally use an instance of `ASTInterpreter` to actually step through node and interpret them.

My instances are created from an `AIContext` with `ASTDebugger class >> context:`.
They hold an `AIContext` instance internally, recursive copy of the `MethodContext`.

## API

Use the methods of the `'stepping'` protocol to do stepping.!

!ASTDebugger methodsFor: 'accessing'!

context
	^ context
!

context: aContext
	context := aContext
!

interpreter
	^ self context ifNotNil: [ :ctx | 
		ctx interpreter ]
!

node
	^ self interpreter ifNotNil: [
		self interpreter node ]
!

result
	^ result
! !

!ASTDebugger methodsFor: 'actions'!

flushInnerContexts
	"When stepping, the inner contexts are not relevent anymore,
	and can be flushed"
	
	self context ifNotNil: [ :cxt | 
		cxt innerContext: nil ]
! !

!ASTDebugger methodsFor: 'private'!

onStep
	"After each step, check if the interpreter is at the end,
	and if it is move to its outer context if any, skipping its 
	current node (which was just evaluated by the current 
	interpreter).
	
	After each step we also flush inner contexts."
	
	result := self interpreter result.
	
	self interpreter atEnd ifTrue: [
		self context outerContext ifNotNil: [ :outerContext | 
			self context: outerContext ].
		self interpreter atEnd ifFalse: [ self interpreter skip ] ].
		
	self flushInnerContexts
! !

!ASTDebugger methodsFor: 'stepping'!

proceed
	[ self atEnd ] whileFalse: [ self stepOver ]
!

restart
	self interpreter restart.
	self flushInnerContexts
!

stepInto
	self shouldBeImplemented
!

stepOver
	self context isTopContext 
		ifFalse: [ self interpreter skip ]
		ifTrue: [ self interpreter stepOver ].
	self onStep
! !

!ASTDebugger methodsFor: 'testing'!

atEnd	
	self context ifNil: [ ^ true ].
	
	^ self interpreter atEnd and: [ 
		self context isTopContext ]
! !

!ASTDebugger class methodsFor: 'instance creation'!

context: aContext
	^ self new
		context: aContext;
		yourself
! !

NodeVisitor subclass: #ASTEnterNode
	slots: {#interpreter}
	package: 'Compiler-Interpreter'!

!ASTEnterNode methodsFor: 'accessing'!

interpreter
	^ interpreter
!

interpreter: anObject
	interpreter := anObject
! !

!ASTEnterNode methodsFor: 'visiting'!

visitBlockNode: aNode
	"Answer the node as we want to avoid eager evaluation"
	
	^ aNode
!

visitDagNode: aNode
	^ aNode dagChildren
		ifEmpty: [ aNode ]
		ifNotEmpty: [ :nodes | self visit: nodes first ]
!

visitSequenceNode: aNode
	aNode temps do: [ :each |
		self interpreter context defineLocal: each ].
	^ super visitSequenceNode: aNode
! !

!ASTEnterNode class methodsFor: 'instance creation'!

on: anInterpreter
	^ self new
		interpreter: anInterpreter;
		yourself
! !

NodeVisitor subclass: #ASTInterpreter
	slots: {#node. #context. #stack. #returnValue. #returned. #forceAtEnd}
	package: 'Compiler-Interpreter'!
!ASTInterpreter commentStamp!
I visit an AST, interpreting (evaluating) nodes one after the other, using a small stack machine.

## API

While my instances should be used from within an `ASTDebugger`, which provides a more high level interface,
you can use methods from the `interpreting` protocol:

- `#step` evaluates the current `node` only
- `#stepOver` evaluates the AST from the current `node` up to the next stepping node (most likely the next send node)
- `#proceed` evaluates eagerly the AST
- `#restart` select the first node of the AST
- `#skip` skips the current node, moving to the next one if any!

!ASTInterpreter methodsFor: 'accessing'!

context
	^ context
!

context: aContext
	context := aContext
!

node
	"Answer the next node, ie the node to be evaluated in the next step"
	
	^ node
!

node: aNode
	node := aNode
!

result
	^ self hasReturned 
		ifTrue: [ self returnValue ] 
		ifFalse: [ self context receiver ]
!

returnValue
	^ returnValue
!

returnValue: anObject
	returnValue := anObject
!

stack
	^ stack ifNil: [ stack := OrderedCollection new ]
! !

!ASTInterpreter methodsFor: 'initialization'!

initialize
	super initialize.

	forceAtEnd := false
! !

!ASTInterpreter methodsFor: 'interpreting'!

enterNode
	self node: ((ASTEnterNode on: self) visit: self node)
!

interpret
	"Interpret the next node to be evaluated"
	
	self visit: self node
!

next
	| nd parent |
	nd := self node.
	parent := nd parent.
	(parent ifNotNil: [ parent nextSiblingNode: nd ])
		ifNil: [ self node: parent ]
		ifNotNil: [ :sibling | self node: sibling; enterNode ]
!

proceed
	"Eagerly evaluate the ast"
	
	[ self atEnd ] 
		whileFalse: [ self step ]
!

restart
	self node: self context ast; enterNode
!

setNonLocalReturnFromContext: aContext
	aContext interpreter hasReturned ifTrue: [
		returned := true.
		self returnValue: aContext interpreter returnValue ]
!

skip
	self next
!

step
	self 
		interpret; 
		next
!

stepOver
	self step.
	
	[ self node isNil or: [ self node isSteppingNode ] ] whileFalse: [ 
		self step ]
! !

!ASTInterpreter methodsFor: 'private'!

assign: aNode to: anObject
	aNode binding inContext: self context put: anObject
!

eval: aString
	"Evaluate aString as JS source inside an JS function.
	aString is not sandboxed."
	
	| source function |
	
	source := String streamContents: [ :str |
		str nextPutAll: '0,(function('.
		self context locals keys
			do: [ :each | str nextPutAll: each ]
			separatedBy: [ str nextPutAll: ',' ].
		str
			nextPutAll: '){ return (function() {';
			nextPutAll: aString;
			nextPutAll: '})()})' ].
			
	function := Compiler eval: source.
	
	^ function valueWithPossibleArguments: self context locals values
!

messageFromSendNode: aSendNode arguments: anArray
	^ Message selector: aSendNode selector arguments: anArray
!

messageNotUnderstood: aMessage receiver: anObject
	MessageNotUnderstood new
		message: aMessage;
		receiver: anObject;
		signal
!

sendJavaScript: aString superMessage: aMessage switcher: aJSFunction to: anObject
	| methodBlock parent |
	
	parent := self context method methodClass superPrototype.
	parent ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].
	
	methodBlock := (parent at: aString)
		ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].
		
	^ methodBlock applyTo: anObject arguments: (aJSFunction applyTo: nil arguments: aMessage arguments)
!

sendJavaScript: aString superMessage: aMessage to: anObject
	| methodBlock parent |
	
	parent := self context method methodClass superPrototype.
	parent ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].
	
	methodBlock := (parent at: aString)
		ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].
		
	^ methodBlock applyTo: anObject arguments: aMessage arguments
!

sendSuperMessage: aMessage to: anObject
	| method parent |
	
	parent := self context method methodClass superclass.
	parent ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].
	
	method := (parent lookupSelector: aMessage selector)
		ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].
		
	^ method sendTo: anObject arguments: aMessage arguments
! !

!ASTInterpreter methodsFor: 'stack'!

peek
	"Peek the top object of the context stack"
	
	self stack ifEmpty: [ ^ nil ].
	
	^ self stack last
!

pop
	"Pop an object from the context stack"
	
	| peekedValue |
	
	peekedValue := self peek.
	self stack removeLast.
	^ peekedValue
!

push: anObject
	"Push an object to the context stack"
	
	^ self stack add: anObject
! !

!ASTInterpreter methodsFor: 'testing'!

atEnd
	^ forceAtEnd or: [ self hasReturned or: [ self node isNil ] ]
!

hasReturned
	^ returned ifNil: [ false ]
! !

!ASTInterpreter methodsFor: 'visiting'!

visit: aNode
	self hasReturned ifFalse: [ super visit: aNode ]
!

visitAssignmentNode: aNode
	| poppedValue |
	
	poppedValue := self pop.
	
	"Pop the left side of the assignment.
	It already has been visited, and we don't need its value."
	self pop.
	
	self push: poppedValue.
	self assign: aNode left to: poppedValue
!

visitBlockNode: aNode
	"Do not evaluate the block node.
	Instead, put all instructions into a block that we push to the stack for later evaluation"
	
	| block |
	
	block := AIBlockClosure forContext: self context node: aNode.
	
	self push: block
!

visitBlockSequenceNode: aNode
	"If the receiver is actually visiting a BlockSequenceNode,
	it means the the context is a block context. Evaluation should 
	stop right after evaluating the block sequence and the outer
	context's interpreter should take over. 
	Therefore we force #atEnd."
	
	super visitBlockSequenceNode: aNode.
	forceAtEnd := true
!

visitDagNode: aNode
	"Do nothing by default. Especially, do not visit children recursively."
!

visitDynamicArrayNode: aNode
	| array |
	
	array := #().
	aNode dagChildren do: [ :each |
		array addFirst: self pop ].
	
	self push: array
!

visitDynamicDictionaryNode: aNode
	| keyValueList |
	
	keyValueList := OrderedCollection new.
	
	aNode dagChildren do: [ :each | 
		keyValueList add: self pop ].
	
	self push: (HashedCollection newFromPairs: keyValueList reversed)
!

visitJSStatementNode: aNode
	returned := true.
	self returnValue: (self eval: aNode source)
!

visitReturnNode: aNode
	returned := true.
	self returnValue: self pop
!

visitSendNode: aNode
	| receiver args message result |
	
	args := aNode arguments collect: [ :each | self pop ].
	receiver := self peek.
	
	message := self
		messageFromSendNode: aNode
		arguments: args reversed.
	
	result := aNode superSend
		ifFalse: [ message sendTo: receiver ]
		ifTrue: [ aNode receiver binding isJavaScriptSuper
			ifFalse: [ self sendSuperMessage: message to: receiver ]
			ifTrue: [ aNode argumentSwitcher
				ifNil: [ self sendJavaScript: aNode javaScriptSelector superMessage: message to: receiver ]
				ifNotNil: [ :switcher | self sendJavaScript: aNode javaScriptSelector superMessage: message switcher: switcher to: receiver ] ] ].
	
	"For cascade sends, push the reciever if the send is not the last one"
	aNode isSideEffect ifFalse: [ self pop; push: result ]
!

visitValueNode: aNode
	self push: aNode value
!

visitVariableNode: aNode
	self push: (aNode binding inContext: self context)
! !

Error subclass: #ASTInterpreterError
	slots: {}
	package: 'Compiler-Interpreter'!
!ASTInterpreterError commentStamp!
I get signaled when an AST interpreter is unable to interpret a node.!

NodeVisitor subclass: #ASTPCNodeVisitor
	slots: {#index. #trackedIndex. #selector. #currentNode}
	package: 'Compiler-Interpreter'!
!ASTPCNodeVisitor commentStamp!
I visit an AST until I get to the current node for the `context` and answer it.

## API

My instances must be filled with a context object using `#context:`.

After visiting the AST the current node is answered by `#currentNode`!

!ASTPCNodeVisitor methodsFor: 'accessing'!

currentNode
	^ currentNode
!

increaseTrackedIndex
	trackedIndex := self trackedIndex + 1
!

index
	^ index
!

index: aNumber
	index := aNumber
!

selector
	^ selector
!

selector: aString
	selector := aString
!

trackedIndex
	^ trackedIndex ifNil: [ trackedIndex := 0 ]
! !

!ASTPCNodeVisitor methodsFor: 'visiting'!

visitJSStatementNode: aNode
	"If a JSStatementNode is encountered, it always is the current node.
	Stop visiting the AST there"
	
	currentNode := aNode
!

visitSendNode: aNode
	super visitSendNode: aNode.
	
	self selector = aNode selector ifTrue: [
		self trackedIndex = self index ifTrue: [ currentNode := aNode ].
		self increaseTrackedIndex ]
! !

AIContext setTraitComposition: {TMethodContext} asTraitComposition!
! !

!ASTNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ false
!

nextSiblingNode: aNode
	"Answer the next node after aNode or nil"
	
	^ self dagChildren 
		at: (self dagChildren indexOf: aNode) + 1
		ifAbsent: [ nil ]
! !

!AliasVar methodsFor: '*Compiler-Interpreter'!

inContext: aContext
	self error: 'Alias variable is internal, it should never appear in normal variable context.'
! !

!AssignmentNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ true
! !

!BlockNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ true
!

nextSiblingNode: aNode
	"Answer nil as we want to avoid eager evaluation"
	
	"In fact, this should not have been called, ever. IMO. -- herby"
	
	^ nil
! !

!ClassRefVar methodsFor: '*Compiler-Interpreter'!

inContext: aContext
	^ Smalltalk globals 
		at: self name 
		ifAbsent: [ Platform globals at: self name ]
! !

!DynamicArrayNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ true
! !

!DynamicDictionaryNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ true
! !

!Evaluator methodsFor: '*Compiler-Interpreter'!

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
! !

!ExternallyKnownVar methodsFor: '*Compiler-Interpreter'!

inContext: aContext
	^ Platform globals at: self name ifAbsent: [ self error: 'Unknown variable' ]
! !

!JSStatementNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ true
! !

!JavaScriptSuperVar methodsFor: '*Compiler-Interpreter'!

isJavaScriptSuper
	^ true
! !

!PseudoVar methodsFor: '*Compiler-Interpreter'!

inContext: aContext
	^ #{'nil'->nil. 'true'->true. 'false'->false}
		at: self name
		ifAbsent: [ super inContext: aContext ]
! !

!ScopeVar methodsFor: '*Compiler-Interpreter'!

inContext: aContext
	^ aContext localAt: self name
!

inContext: aContext put: anObject
	self error: 'Non-assignable variables should not be changed.'
! !

!SendNode methodsFor: '*Compiler-Interpreter'!

isSteppingNode
	^ true
! !

!SlotVar methodsFor: '*Compiler-Interpreter'!

inContext: aContext
	^ aContext receiver instVarNamed: self name
!

inContext: aContext put: anObject
	aContext receiver instVarNamed: self name put: anObject
! !

!SuperVar methodsFor: '*Compiler-Interpreter'!

inContext: aContext
	^ aContext localAt: 'self'
!

isJavaScriptSuper
	^ false
! !

!TempVar methodsFor: '*Compiler-Interpreter'!

inContext: aContext put: anObject
	aContext localAt: self name put: anObject
! !

