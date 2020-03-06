Smalltalk createPackage: 'Compiler-AST'!
DagParentNode subclass: #ASTNode
	slots: {#parent. #position. #source}
	package: 'Compiler-AST'!
!ASTNode commentStamp!
I am the abstract root class of the abstract syntax tree.

Concrete classes should implement `#accept:` to allow visiting.

`position` holds a point containing line and column number of the symbol location in the original source file.!

!ASTNode methodsFor: 'accessing'!

location: aLocation
	self position: aLocation start line @ aLocation start column
!

navigationNodeAt: aPoint ifAbsent: aBlock
	"Answer the navigation node in the receiver's tree at aPoint 
	or nil if no navigation node was found.
	
	See `node >> isNaviationNode`"
	
	| children |
	
	children := self allDagChildren select: [ :each | 
		each isNavigationNode and: [ each inPosition: aPoint ] ].
	
	children ifEmpty: [ ^ aBlock value ].
	
	^ (children asArray sort: [ :a :b | 
		(a positionStart dist: aPoint) <= 
		(b positionStart dist: aPoint) ]) first
!

parent
	^ parent
!

parent: aNode
	parent := aNode
!

position
	"answer the line and column of the receiver in the source code"
	
	^ position ifNil: [ 
		self parent ifNotNil: [ :node | node position ] ]
!

position: aPosition
	position := aPosition
!

positionEnd
	^ self positionStart + ((self source lines size - 1) @ (self source lines last size - 1))
!

positionStart
	^ self position
!

size
	^ self source size
!

source
	^ source ifNil: [ '' ]
!

source: aString
	source := aString
! !

!ASTNode methodsFor: 'testing'!

inPosition: aPoint
	^ (self positionStart <= aPoint and: [
		self positionEnd >= aPoint ])
!

isNavigationNode
	"Answer true if the node can be navigated to"
	
	^ false
!

isReturnNode
	^ false
! !

ASTNode subclass: #ExpressionNode
	slots: {#shouldBeAliased}
	package: 'Compiler-AST'!
!ExpressionNode commentStamp!
I am the abstract root class for expression nodes.!

!ExpressionNode methodsFor: 'accessing'!

shouldBeAliased
	^ shouldBeAliased ifNil: [ false ]
!

shouldBeAliased: aBoolean
	shouldBeAliased := aBoolean
! !

!ExpressionNode methodsFor: 'building'!

withTail: aCollection
	^ aCollection inject: self into: [
		:receiver :send | SendNode new
			position: send position;
			source: send source;
			receiver: receiver;
			selector: send selector;
			arguments: send arguments;
			yourself ]
! !

!ExpressionNode methodsFor: 'testing'!

isImmutable
	^ false
!

isSuper
	^ false
! !

ExpressionNode subclass: #AssignmentNode
	slots: {#left. #right}
	package: 'Compiler-AST'!
!AssignmentNode commentStamp!
I represent an assignment node.!

!AssignmentNode methodsFor: 'accessing'!

dagChildren
	^ { self left. self right }
!

left
	^ left
!

left: aNode
	left := aNode
!

right
	^ right
!

right: aNode
	right := aNode
! !

!AssignmentNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitAssignmentNode: self
! !

ExpressionNode subclass: #BlockNode
	slots: {#parameters. #scope. #sequenceNode}
	package: 'Compiler-AST'!
!BlockNode commentStamp!
I represent an block closure node.!

!BlockNode methodsFor: 'accessing'!

dagChild
	^ self sequenceNode
!

parameters
	^ parameters ifNil: [ parameters := Array new ]
!

parameters: aCollection
	parameters := aCollection
!

scope
	^ scope
!

scope: aLexicalScope
	scope := aLexicalScope
!

sequenceNode
	^ sequenceNode
!

sequenceNode: anObject
	sequenceNode := anObject
! !

!BlockNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitBlockNode: self
! !

ExpressionNode subclass: #CascadeNode
	slots: {#receiver}
	package: 'Compiler-AST'!
!CascadeNode commentStamp!
I represent an cascade node.!

!CascadeNode methodsFor: 'accessing'!

receiver
	^ receiver
!

receiver: aNode
	receiver := aNode
! !

!CascadeNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitCascadeNode: self
! !

ExpressionNode subclass: #DynamicArrayNode
	slots: {}
	package: 'Compiler-AST'!
!DynamicArrayNode commentStamp!
I represent an dynamic array node.!

!DynamicArrayNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitDynamicArrayNode: self
! !

ExpressionNode subclass: #DynamicDictionaryNode
	slots: {}
	package: 'Compiler-AST'!
!DynamicDictionaryNode commentStamp!
I represent an dynamic dictionary node.!

!DynamicDictionaryNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitDynamicDictionaryNode: self
! !

ExpressionNode subclass: #SendNode
	slots: {#selector. #arguments. #receiver. #index. #isSideEffect}
	package: 'Compiler-AST'!
!SendNode commentStamp!
I represent an message send node.!

!SendNode methodsFor: 'accessing'!

arguments
	^ arguments ifNil: [ arguments := #() ]
!

arguments: aCollection
	arguments := aCollection
!

beSideEffect
	isSideEffect := true
!

dagChildren
	self receiver ifNil: [ ^ self arguments copy ].
	
	^ self arguments copyWithFirst: self receiver
!

index
	^ index
!

index: anInteger
	index := anInteger
!

isSideEffect
	^ isSideEffect ifNil: [ false ]
!

navigationLink
	^ self selector
!

receiver
	^ receiver
!

receiver: aNode
	receiver := aNode
!

selector
	^ selector
!

selector: aString
	selector := aString
!

superSend
	^ self receiver ifNil: [ false ] ifNotNil: [ :recv | recv isSuper ]
! !

!SendNode methodsFor: 'testing'!

isNavigationNode
	^ true
! !

!SendNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitSendNode: self
! !

ExpressionNode subclass: #ValueNode
	slots: {#value}
	package: 'Compiler-AST'!
!ValueNode commentStamp!
I represent a value node.!

!ValueNode methodsFor: 'accessing'!

value
	^ value
!

value: anObject
	value := anObject
! !

!ValueNode methodsFor: 'testing'!

isImmutable
	^ self value isImmutable
! !

!ValueNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitValueNode: self
! !

ExpressionNode subclass: #VariableNode
	slots: {#identifier. #assigned. #binding}
	package: 'Compiler-AST'!
!VariableNode commentStamp!
I represent an variable node.!

!VariableNode methodsFor: 'accessing'!

alias
	^ self binding alias
!

assigned
	^ assigned ifNil: [ false ]
!

assigned: aBoolean
	assigned := aBoolean
!

binding
	^ binding
!

binding: aScopeVar
	binding := aScopeVar
!

identifier
	^ identifier
!

identifier: anObject
	identifier := anObject
!

navigationLink
	^ self identifier
!

value
	self deprecatedAPI: 'Use #identifier instead.'.
	^ self identifier
!

value: anObject
	self deprecatedAPI: 'Use #identifier: instead.'.
	self identifier: anObject
! !

!VariableNode methodsFor: 'testing'!

isAssignable
	^ self binding isAssignable
!

isImmutable
	^ self binding isImmutable
!

isNavigationNode
	^ true
!

isSuper
	^ self binding isSuper
! !

!VariableNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitVariableNode: self
! !

ASTNode subclass: #JSStatementNode
	slots: {}
	package: 'Compiler-AST'!
!JSStatementNode commentStamp!
I represent an JavaScript statement node.!

!JSStatementNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitJSStatementNode: self
! !

ASTNode subclass: #MethodNode
	slots: {#selector. #arguments. #pragmas. #scope. #classReferences. #sendIndexes. #sequenceNode}
	package: 'Compiler-AST'!
!MethodNode commentStamp!
I represent an method node.

A method node must be the root and only method node of a valid AST.!

!MethodNode methodsFor: 'accessing'!

arguments
	^ arguments ifNil: [ #() ]
!

arguments: aCollection
	arguments := aCollection
!

classReferences
	^ classReferences
!

classReferences: aCollection
	classReferences := aCollection
!

dagChild
	^ self sequenceNode
!

messageSends
	^ self sendIndexes keys
!

method
	^ self
!

pragmas
	^ pragmas ifNil: [ #() ]
!

pragmas: aCollection
	pragmas := aCollection
!

scope
	^ scope
!

scope: aMethodScope
	scope := aMethodScope
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

sequenceNode
	^ sequenceNode
!

sequenceNode: aSequenceNode
	sequenceNode := aSequenceNode
! !

!MethodNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitMethodNode: self
! !

ASTNode subclass: #ReturnNode
	slots: {#scope. #expression}
	package: 'Compiler-AST'!
!ReturnNode commentStamp!
I represent an return node. At the AST level, there is not difference between a local return or non-local return.!

!ReturnNode methodsFor: 'accessing'!

dagChild
	^ self expression
!

expression
	^ expression ifNil: [ nodes first ]
!

expression: anObject
	expression := anObject
!

scope
	^ scope
!

scope: aLexicalScope
	scope := aLexicalScope
! !

!ReturnNode methodsFor: 'testing'!

isReturnNode
	^ true
!

nonLocalReturn
	^ self scope isMethodScope not
! !

!ReturnNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitReturnNode: self
! !

ASTNode subclass: #SequenceNode
	slots: {#temps}
	package: 'Compiler-AST'!
!SequenceNode commentStamp!
I represent an sequence node. A sequence represent a set of instructions inside the same scope (the method scope or a block scope).!

!SequenceNode methodsFor: 'accessing'!

temps
	^ temps ifNil: [ #() ]
!

temps: aCollection
	temps := aCollection
! !

!SequenceNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitSequenceNode: self
! !

SequenceNode subclass: #BlockSequenceNode
	slots: {}
	package: 'Compiler-AST'!
!BlockSequenceNode commentStamp!
I represent an special sequence node for block scopes.!

!BlockSequenceNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitBlockSequenceNode: self
! !

Object subclass: #AstPragmator
	slots: {#methodNode}
	package: 'Compiler-AST'!
!AstPragmator commentStamp!
I am abstract superclass for pragma-processing transformer.

My subclasses should implement messages for each pragma
they process. Pragma processing checks if a message is known
to a class but not to its superclass. IOW, each and only those
pragmas are processed which are defined as methods in the subclass.

These messages can access sequence node in which
a pragma occurred and its containing method node
as `self sequenceNode` and `self methodNode`.

See `EarlyPragmator` for an example.!

!AstPragmator methodsFor: 'accessing'!

methodNode
	^ methodNode
!

methodNode: anObject
	methodNode := anObject
! !

!AstPragmator methodsFor: 'visiting'!

value: aMethodNode
	self methodNode: aMethodNode.
	self processPragmas: aMethodNode pragmas.
	^ aMethodNode
! !

AstPragmator subclass: #AstEarlyPragmator
	slots: {}
	package: 'Compiler-AST'!

!AstEarlyPragmator methodsFor: 'pragmas'!

inlineJS: aString
	self methodNode sequenceNode dagChildren ifNotEmpty: [
		CompilerError signal: 'There must be no other code or code generator pragma than a lone inlineJS:' ].
	self methodNode sequenceNode addDagChild: (
		JSStatementNode new
			source: aString;
			yourself)
! !

Error subclass: #CompilerError
	slots: {}
	package: 'Compiler-AST'!
!CompilerError commentStamp!
I am the common superclass of all compiling errors.!

PathDagVisitor subclass: #ParentFakingPathDagVisitor
	slots: {#setParentSelector}
	package: 'Compiler-AST'!
!ParentFakingPathDagVisitor commentStamp!
I am base class of `DagNode` visitor.

I hold the path of ancestors up to actual node
in `self path`.!

!ParentFakingPathDagVisitor methodsFor: 'visiting'!

visit: aNode
	self path ifNotEmpty: [ :p | aNode parent: p last ].
	^ super visit: aNode
! !

ParentFakingPathDagVisitor subclass: #NodeVisitor
	slots: {}
	package: 'Compiler-AST'!
!NodeVisitor commentStamp!
I am the abstract super class of all AST node visitors.!

!NodeVisitor methodsFor: 'visiting'!

visitAssignmentNode: aNode
	^ self visitDagNode: aNode
!

visitBlockNode: aNode
	^ self visitDagNode: aNode
!

visitBlockSequenceNode: aNode
	^ self visitSequenceNode: aNode
!

visitCascadeNode: aNode
	^ self visitDagNode: aNode
!

visitDagNode: aNode
	^ self visitDagNodeVariantSimple: aNode
!

visitDynamicArrayNode: aNode
	^ self visitDagNode: aNode
!

visitDynamicDictionaryNode: aNode
	^ self visitDagNode: aNode
!

visitJSStatementNode: aNode
	^ self visitDagNode: aNode
!

visitMethodNode: aNode
	^ self visitDagNode: aNode
!

visitReturnNode: aNode
	^ self visitDagNode: aNode
!

visitSendNode: aNode
	^ self visitDagNode: aNode
!

visitSequenceNode: aNode
	^ self visitDagNode: aNode
!

visitValueNode: aNode
	^ self visitDagNode: aNode
!

visitVariableNode: aNode
	^ self visitDagNode: aNode
! !

AssignmentNode setTraitComposition: {TDerivedDagChildren} asTraitComposition!
BlockNode setTraitComposition: {TSingleDagChild} asTraitComposition!
SendNode setTraitComposition: {TDerivedDagChildren} asTraitComposition!
ValueNode setTraitComposition: {TDagSink} asTraitComposition!
VariableNode setTraitComposition: {TDagSink} asTraitComposition!
JSStatementNode setTraitComposition: {TDagSink} asTraitComposition!
MethodNode setTraitComposition: {TSingleDagChild} asTraitComposition!
ReturnNode setTraitComposition: {TSingleDagChild} asTraitComposition!
AstPragmator setTraitComposition: {TPragmator} asTraitComposition!
! !

!CompiledMethod methodsFor: '*Compiler-AST'!

ast
	self source ifEmpty: [ CompilerError signal: 'Method source is empty' ].
	
	^ Compiler new
		ast: self source
		forClass: self origin
		protocol: self protocol
! !

