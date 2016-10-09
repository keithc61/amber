Smalltalk createPackage: 'Kernel-Dag'!
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

