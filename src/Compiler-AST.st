Smalltalk createPackage: 'Compiler-AST'!
DagParentNode subclass: #ASTNode
	instanceVariableNames: 'parent position source shouldBeInlined shouldBeAliased'
	package: 'Compiler-AST'!
!ASTNode commentStamp!
I am the abstract root class of the abstract syntax tree.

Concrete classes should implement `#accept:` to allow visiting.

`position` holds a point containing line and column number of the symbol location in the original source file.!

!ASTNode methodsFor: 'accessing'!

location: aLocation
	self position: aLocation start line @ aLocation start column
!

method
	^ self parent ifNotNil: [ :node | node method ]
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

shouldBeAliased
	^ shouldBeAliased ifNil: [ false ]
!

shouldBeAliased: aBoolean
	shouldBeAliased := aBoolean
!

shouldBeInlined
	^ shouldBeInlined ifNil: [ false ]
!

shouldBeInlined: aBoolean
	shouldBeInlined := aBoolean
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

isAssignmentNode
	^ false
!

isBlockNode
	^ false
!

isBlockSequenceNode
	^ false
!

isCascadeNode
	^ false
!

isImmutable
	^ false
!

isJSStatementNode
	^ false
!

isLastChild
	^ self parent dagChildren last = self
!

isNavigationNode
	"Answer true if the node can be navigated to"
	
	^ false
!

isReferenced
	"Answer true if the receiver is referenced by other nodes.
	Do not take sequences or assignments into account"
	
	^ (self parent isSequenceNode or: [
		self parent isAssignmentNode ]) not
!

isReturnNode
	^ false
!

isSendNode
	^ false
!

isSequenceNode
	^ false
!

isSuperKeyword
	^ false
!

isValueNode
	^ false
!

isVariableNode
	^ false
!

requiresSmalltalkContext
	"Answer true if the receiver requires a smalltalk context.
	Only send nodes require a context.
	
	If no node requires a context, the method will be compiled without one.
	See `IRJSTranslator` and `JSStream` for context creation"
	
	^ (self dagChildren 
		detect: [ :each | each requiresSmalltalkContext ]
		ifNone: [ nil ]) notNil
!

subtreeNeedsAliasing
	^ (self shouldBeAliased or: [ self shouldBeInlined ]) or: [
		self dagChildren anySatisfy: [ :each | each subtreeNeedsAliasing ] ]
! !

ASTNode subclass: #AssignmentNode
	instanceVariableNames: 'left right'
	package: 'Compiler-AST'!
!AssignmentNode commentStamp!
I represent an assignment node.!

!AssignmentNode methodsFor: 'accessing'!

dagChildren
	^ Array with: self left with: self right
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

!AssignmentNode methodsFor: 'testing'!

isAssignmentNode
	^ true
!

shouldBeAliased
	^ super shouldBeAliased or: [ self isReferenced ]
! !

!AssignmentNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitAssignmentNode: self
! !

ASTNode subclass: #BlockNode
	instanceVariableNames: 'parameters scope'
	package: 'Compiler-AST'!
!BlockNode commentStamp!
I represent an block closure node.!

!BlockNode methodsFor: 'accessing'!

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
! !

!BlockNode methodsFor: 'testing'!

isBlockNode
	^ true
!

subtreeNeedsAliasing
	^ self shouldBeAliased or: [ self shouldBeInlined ]
! !

!BlockNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitBlockNode: self
! !

ASTNode subclass: #CascadeNode
	instanceVariableNames: 'receiver'
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

!CascadeNode methodsFor: 'testing'!

isCascadeNode
	^ true
!

subtreeNeedsAliasing
	^ self parent isSequenceNode not
! !

!CascadeNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitCascadeNode: self
! !

ASTNode subclass: #DynamicArrayNode
	instanceVariableNames: ''
	package: 'Compiler-AST'!
!DynamicArrayNode commentStamp!
I represent an dynamic array node.!

!DynamicArrayNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitDynamicArrayNode: self
! !

ASTNode subclass: #DynamicDictionaryNode
	instanceVariableNames: ''
	package: 'Compiler-AST'!
!DynamicDictionaryNode commentStamp!
I represent an dynamic dictionary node.!

!DynamicDictionaryNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitDynamicDictionaryNode: self
! !

ASTNode subclass: #JSStatementNode
	instanceVariableNames: ''
	package: 'Compiler-AST'!
!JSStatementNode commentStamp!
I represent an JavaScript statement node.!

!JSStatementNode methodsFor: 'testing'!

isJSStatementNode
	^ true
!

requiresSmalltalkContext
	^ true
! !

!JSStatementNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitJSStatementNode: self
! !

ASTNode subclass: #MethodNode
	instanceVariableNames: 'selector arguments source scope classReferences sendIndexes'
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

messageSends
	^ self sendIndexes keys
!

method
	^ self
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
	self dagChildren do: [ :each |
		each isSequenceNode ifTrue: [ ^ each ] ].
		
	^ nil
!

source
	^ source
!

source: aString
	source := aString
! !

!MethodNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitMethodNode: self
! !

ASTNode subclass: #ReturnNode
	instanceVariableNames: 'scope'
	package: 'Compiler-AST'!
!ReturnNode commentStamp!
I represent an return node. At the AST level, there is not difference between a local return or non-local return.!

!ReturnNode methodsFor: 'accessing'!

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

ASTNode subclass: #SendNode
	instanceVariableNames: 'selector arguments receiver index'
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

dagChildren
	self receiver ifNil: [ ^ self arguments copy ].
	
	^ (Array with: self receiver)
		addAll: self arguments;
		yourself
!

index
	^ index
!

index: anInteger
	index := anInteger
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
	^ self receiver notNil and: [ self receiver isSuperKeyword ]
! !

!SendNode methodsFor: 'building'!

valueForReceiver: anObject
	^ SendNode new
		position: self position;
		source: self source;
		receiver: (self receiver
		ifNil: [ anObject ] 
		ifNotNil: [ self receiver valueForReceiver: anObject ]);
		selector: self selector;
		arguments: self arguments;
		yourself
! !

!SendNode methodsFor: 'testing'!

isCascadeSendNode
	^ self parent isCascadeNode
!

isNavigationNode
	^ true
!

isSendNode
	^ true
!

requiresSmalltalkContext
	^ true
!

shouldBeAliased
	"Because we keep track of send indexes, some send nodes need additional care for aliasing. 
	See IRJSVisitor >> visitIRSend:"
	
	| sends |
	
	sends := (self method sendIndexes at: self selector) size.
	
	^ (super shouldBeAliased or: [
		self isReferenced and: [
			self index < sends or: [
				self superSend ] ] ])
! !

!SendNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitSendNode: self
! !

ASTNode subclass: #SequenceNode
	instanceVariableNames: 'temps scope'
	package: 'Compiler-AST'!
!SequenceNode commentStamp!
I represent an sequence node. A sequence represent a set of instructions inside the same scope (the method scope or a block scope).!

!SequenceNode methodsFor: 'accessing'!

scope
	^ scope
!

scope: aLexicalScope
	scope := aLexicalScope
!

temps
	^ temps ifNil: [ #() ]
!

temps: aCollection
	temps := aCollection
! !

!SequenceNode methodsFor: 'building'!

asBlockSequenceNode
	^ BlockSequenceNode new
		position: self position;
		source: self source;
		dagChildren: self dagChildren;
		temps: self temps;
		yourself
! !

!SequenceNode methodsFor: 'testing'!

isSequenceNode
	^ true
! !

!SequenceNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitSequenceNode: self
! !

SequenceNode subclass: #BlockSequenceNode
	instanceVariableNames: ''
	package: 'Compiler-AST'!
!BlockSequenceNode commentStamp!
I represent an special sequence node for block scopes.!

!BlockSequenceNode methodsFor: 'testing'!

isBlockSequenceNode
	^ true
! !

!BlockSequenceNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitBlockSequenceNode: self
! !

ASTNode subclass: #ValueNode
	instanceVariableNames: 'value'
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
!

isValueNode
	^ true
! !

!ValueNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitValueNode: self
! !

ValueNode subclass: #VariableNode
	instanceVariableNames: 'assigned binding'
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

beAssigned
	self binding validateAssignment.
	assigned := true
!

binding
	^ binding
!

binding: aScopeVar
	binding := aScopeVar
!

navigationLink
	^ self value
! !

!VariableNode methodsFor: 'testing'!

isArgument
	^ self binding isArgVar
!

isImmutable
	^ self binding isImmutable
!

isNavigationNode
	^ true
!

isSuperKeyword
	^ self value = 'super'
!

isVariableNode
	^ true
! !

!VariableNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitVariableNode: self
! !

PathDagVisitor subclass: #ParentFakingPathDagVisitor
	instanceVariableNames: 'setParentSelector'
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
	instanceVariableNames: ''
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

!CompiledMethod methodsFor: '*Compiler-AST'!

ast
	self source ifEmpty: [ self error: 'Method source is empty' ].
	
	^ Smalltalk parse: self source
! !

