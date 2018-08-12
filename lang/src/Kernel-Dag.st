Smalltalk createPackage: 'Kernel-Dag'!
Object subclass: #AbstractDagVisitor
	instanceVariableNames: ''
	package: 'Kernel-Dag'!
!AbstractDagVisitor commentStamp!
I am base class of `DagNode` visitor.

Concrete classes should implement `visitDagNode:`,
they can reuse possible variants of implementation
offered directly: `visitDagNodeVariantSimple:`
and `visitDagNodeVariantRedux:`.!

!AbstractDagVisitor methodsFor: 'evaluating'!

value: anObject
	^ self visit: anObject
! !

!AbstractDagVisitor methodsFor: 'visiting'!

visit: aNode
	^ aNode acceptDagVisitor: self
!

visitAll: aCollection
	^ aCollection collect: [ :each | self visit: each ]
!

visitAllChildren: aDagNode
	^ self visitAll: aDagNode dagChildren
!

visitDagNode: aNode
	self subclassResponsibility
!

visitDagNodeVariantRedux: aNode
	"Immutable-guarded implementation of visitDagNode:.
	Visits all children and checks if there were changes.
	If not, returns aNode.
	If yes, returns copy of aNode with new children."

	| newChildren oldChildren |
	oldChildren := aNode dagChildren.
	newChildren := self visitAllChildren: aNode.
	oldChildren size = newChildren size ifTrue: [
		(1 to: oldChildren size) detect: [ :i |
			(oldChildren at: i) ~= (newChildren at: i)
		] ifNone: [ "no change" ^ aNode ] ].
	^ aNode copy dagChildren: newChildren; yourself
!

visitDagNodeVariantSimple: aNode
	"Simple implementation of visitDagNode:.
	Visits children, then returns aNode"

	self visitAllChildren: aNode.
	^ aNode
! !

AbstractDagVisitor subclass: #PathDagVisitor
	instanceVariableNames: 'path'
	package: 'Kernel-Dag'!
!PathDagVisitor commentStamp!
I am base class of `DagNode` visitor.

I hold the path of ancestors up to actual node
in `self path`.!

!PathDagVisitor methodsFor: 'accessing'!

path
	^ path
! !

!PathDagVisitor methodsFor: 'initialization'!

initialize
	super initialize.

	path := #()
! !

!PathDagVisitor methodsFor: 'visiting'!

visit: aNode
	| oldPath result |
	result := aNode.
	oldPath := path.
	[
		path := path, {aNode}.
		result := super visit: aNode
	] ensure: [ path := oldPath ].
	^ result
!

visitDagNodeVariantRedux: aNode
	| newNode |
	newNode := super visitDagNodeVariantRedux: aNode.
	aNode == newNode ifFalse: [ path at: path size put: newNode ].
	^ newNode
! !

Object subclass: #DagNode
	instanceVariableNames: ''
	package: 'Kernel-Dag'!
!DagNode commentStamp!
I am the abstract root class of any directed acyclic graph.

Concrete classes should implement `dagChildren` and `dagChildren:`
to get / set direct successor nodes (aka child nodes / subnodes).!

!DagNode methodsFor: 'accessing'!

allDagChildren
	| allNodes |
	
	allNodes := self dagChildren asSet.
	self dagChildren do: [ :each | 
		allNodes addAll: each allDagChildren ].
	
	^ allNodes
!

dagChildren
	self subclassResponsibility
!

dagChildren: aCollection
	self subclassResponsibility
! !

!DagNode methodsFor: 'testing'!

isDagNode
	^ true
! !

!DagNode methodsFor: 'visiting'!

acceptDagVisitor: aVisitor
	^ aVisitor visitDagNode: self
! !

DagNode subclass: #DagParentNode
	instanceVariableNames: 'nodes'
	package: 'Kernel-Dag'!
!DagParentNode commentStamp!
I am `DagNode` that stores a collection of its children,
lazy initialized to empty array.

I can `addDagChild:` to add a child.!

!DagParentNode methodsFor: 'accessing'!

addDagChild: aDagNode
	self dagChildren add: aDagNode
!

dagChildren
	^ nodes ifNil: [ nodes := Array new ]
!

dagChildren: aCollection
	nodes := aCollection
! !

DagNode subclass: #DagSink
	instanceVariableNames: 'nodes'
	package: 'Kernel-Dag'!
!DagSink commentStamp!
I am `DagNode` with no direct successors.

Sending `dagChildren:` with empty collection is legal.!

!DagSink methodsFor: 'accessing'!

dagChildren
	^ #()
!

dagChildren: aCollection
	aCollection ifNotEmpty: [ self error: 'A DagSink cannot have children.' ]
! !

!Object methodsFor: '*Kernel-Dag'!

isDagNode
	^ false
! !

