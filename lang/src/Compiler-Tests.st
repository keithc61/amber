Smalltalk createPackage: 'Compiler-Tests'!
TestCase subclass: #ASTMethodRunningTest
	slots: {#receiver. #arguments}
	package: 'Compiler-Tests'!

!ASTMethodRunningTest methodsFor: 'accessing'!

arguments
	^ arguments
!

receiver
	^ receiver
! !

!ASTMethodRunningTest methodsFor: 'initialization'!

setUp
	arguments := #().
	receiver := DoIt new
! !

!ASTMethodRunningTest methodsFor: 'testing'!

should: aString class: aClass receiver: anObject return: aResult
	receiver := anObject.
	self while: aString inClass: aClass should: [ :runBlock |
		self assert: runBlock value equals: aResult ]
!

should: aString receiver: anObject raise: anErrorClass
	receiver := anObject.
	self while: aString should: [ :runBlock |
		self should: runBlock raise: anErrorClass ]
!

should: aString receiver: anObject return: aResult
	receiver := anObject.
	self should: aString return: aResult
!

should: aString return: anObject
	self while: aString should: [ :runBlock |
		self assert: runBlock value equals: anObject ]
! !

ASTMethodRunningTest subclass: #AbstractCompilerTest
	slots: {}
	package: 'Compiler-Tests'!

!AbstractCompilerTest methodsFor: 'tests'!

testAfterInliningNonLocalBlockReturnIndexSend
	self should: 'foo [ ^ true ifTrue: [ self class ] ] value. self class' return: DoIt.
!

testAfterInliningNonLocalBlockReturnSuperSend
	self should: 'foo [ ^ true ifTrue: [ super class ] ] value' return: DoIt.
!

testAssignment
	self should: 'foo | a | a := true ifTrue: [ 1 ]. ^ a' return: 1.
	self should: 'foo | a | a := false ifTrue: [ 1 ]. ^ a' return: nil.

	self should: 'foo | a | ^ a := true ifTrue: [ 1 ]' return: 1
!

testBackslashSelectors
	
	self should: '\ arg ^ 4' return: 4.
	self should: '\\ arg ^ 42' return: 42
!

testBlockReturn
	self should: 'foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]' return: #(2 3 4).
	self should: 'foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]' return: #(2 3 4).
	self should: 'foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]' return: #(2 1 4).
!

testCascades
	
	self should: 'foo ^ Array new add: 3; add: 4; yourself' return: #(3 4)
!

testCascadesInDynamicArray
	self should: 'foo | x | x := 1. ^ {x. [x:=2] value; in: [x]}' return: #(1 2)
!

testCascadesInDynamicDictioary
	self should: 'foo | x | x := 1. ^ #{''one'' -> x. ''two'' -> ([x:=2] value; in: [x])}' return: #{'one' -> 1. 'two' -> 2}
!

testCascadesInSend
	self should: 'foo | x | x := 1. ^ Array with: x with: ([x:=2] value; in: [x])' return: #(1 2)
!

testCascadesWithInlining
	
	self should: 'foo ^ true class; ifTrue: [ 1 ] ifFalse: [ 2 ]' return: 1.
	self should: 'foo ^ false class; ifTrue: [ 1 ] ifFalse: [ 2 ]' return: 2
!

testDynamicArrayElementsOrdered
	self should: 'foo
	| x |
	x := 1.
	^ { x. x := 2 }
' return: #(1 2).

	self should: 'foo
	| x |
	x := 1.
	^ { x. true ifTrue: [ x := 2 ] }
' return: #(1 2).
!

testDynamicDictionaryElementsOrdered
	self should: 'foo
	| x |
	x := ''foo''.
	^ #{ x->1. ''bar''->(true ifTrue: [ 2 ]) }
' return: #{'foo'->1. 'bar'->2}.
!

testDynamicDictionaryWithMoreArrows
	self should: 'foo ^ #{1->2->3}' return: (HashedCollection with: 1->2->3)
!

testGlobalVar
	self should: 'foo ^ eval class' return: BlockClosure.
	self should: 'foo ^ Math cos: 0' return: 1.
	self should: 'foo ^ NonExistingVar' return: nil
!

testInnerTemporalDependentElementsOrdered
	self should: 'foo
	| x |
	x := Array.
	^ x with: ''foo''->x with: ''bar''->(x := 2)
' return: {'foo'->Array. 'bar'->2}.

	self should: 'foo
	| x |
	x := Array.
	^ x with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])
' return: {'foo'->Array. 'bar'->2}.

	self should: 'foo
	| x |
	x := 1.
	^ Array with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])
' return: {'foo'->1. 'bar'->2}.

	self should: 'foo
	| x |
	x := 1.
	^ { ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }
' return: {'foo'->1. 'bar'->2}.

	self should: 'foo
	| x |
	x := 1.
	^ #{ ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }
' return: #{'foo'->1. 'bar'->2}.
!

testLexicalScope
	self should: 'foo | a | a := 1. [ a := 2 ] value. ^ a' return: 2
!

testLiterals
	self should: 'foo ^ 1' return: 1.
	self should: 'foo ^ ''hello''' return: 'hello'.
	self should: 'foo ^ #(1 2 3 4)' return: #(1 2 3 4).
	self should: 'foo ^ {1. [:x | x ] value: 2. 3. [4] value}' return: #(1 2 3 4).
	self should: 'foo ^ true' return: true.
	self should: 'foo ^ false' return: false.
	self should: 'foo ^ #{1->2. 3->4}' return: #{1->2. 3->4}.
	self should: 'foo ^ #hello' return: #hello.
	self should: 'foo ^ $h' return: 'h'.
	self should: 'foo ^ -123.456' return: -123.456.
	self should: 'foo ^ -2.5e4' return: -25000.
!

testLocalReturn
	self should: 'foo ^ 1' return: 1.
	self should: 'foo ^ 1 + 1' return: 2.
	self should: 'foo ' return: receiver.
	self should: 'foo self asString' return: receiver.
	self should: 'foo | a b | a := 1. b := 2. ^ a + b' return: 3
!

testMessageSends
	self should: 'foo ^ 1 asString' return: '1'.

	self should: 'foo ^ 1 + 1' return: 2.
	self should: 'foo ^ 1 + 2 * 3' return: 9.

	self should: 'foo ^ 1 to: 3' return: #(1 2 3).
	self should: 'foo ^ 1 to: 5 by: 2' return: #(1 3 5)
!

testMultipleSequences
	self should: 'foo | a b c | a := 2. b := 3. c := a + b. ^ c * 6' return: 30
!

testMutableLiterals
	"Mutable literals must be aliased in cascades.
	See https://lolg.it/amber/amber/issues/428"
	
	self 
		should: 'foo ^ #( 1 2 ) at: 1 put: 3; yourself' 
		return: #(3 2)
!

testNestedIfTrue
	self should: 'foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]' return: 1.
	self should: 'foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]' return: nil.

	self should: 'foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]' return: 1.
	self should: 'foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]' return: receiver.
!

testNestedSends
	self should: 'foo ^ (Point x: (Point x: 2 y: 3) y: 4) asString' return: (Point x: (2@3) y: 4) asString
!

testNilPerform
	self should: 'foo ^ nil perform: #yourself' return: nil
!

testNonLocalReturn
	self should: 'foo [ ^ 1 ] value' return: 1.
	self should: 'foo [ ^ 1 + 1 ] value' return: 2.
	self should: 'foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt' return: 3.
	self should: 'foo [ :x | ^ x + x ] value: 4. ^ 2' return: 8
!

testNonLocalReturnWithCatch
	self should: 'foo [ ^ 1 ] on: Error do: [ 2 ]' return: 1.
	self should: 'foo [ ^ 1 ] tryIfTrue: [ true ] catch: [ 2 ]' return: 1.
	self should: 'foo [ ^ 1 ] on: Error do: [ ^ 2 ]' return: 1.
	self should: 'foo [ ^ 1 ] tryIfTrue: [ true ] catch: [ ^ 2 ]' return: 1.
!

testPascalCaseGlobal
	self should: 'foo ^Object' return: (Smalltalk globals at: 'Object').
	self should: 'foo ^NonExistent' return: nil
!

testPragmaJSStatement
	self should: 'foo < inlineJS: ''return 2+3'' >' return: 5
!

testPromiseWithAsyncExecutorAndLocalReturn
	self
		should: 'foo ^ Promise new: [ :m | [ 3 + 4 ] fork. ^ 5 ]'
		return: 5
!

testReceiverEvaluatedOnceInSpecials
	self should: 'foo |x| x := 1. ^ {[ x := x+1 ] value ifNil: []. x}' return: {2. 2}.
	self should: 'foo |xs| xs := {nil. nil}. ^ {[ xs removeLast ] value ifNotNil: []. xs}' return: {nil. {nil}}.
!

testRegression1242
	self should: '
		foo
			|x|
			x := 2.
			x := nil ifNil: [].
			^ x
	' return: nil.
	
	self should: '
		foo
			|x|
			x := 2.
			x := 1 ifNotNil: [].
			^ x
	' return: nil.
	
	self should: '
		foo
			|x|
			x := 2.
			x := false ifFalse: [].
			^ x
	' return: nil.
	
	self should: '
		foo
			|x|
			x := 2.
			x := true ifTrue: [].
			^ x
	' return: nil.
!

testRegression1242ForReturn
	self should: 'foo [ ^ nil ifNil: [] ] value' return: nil.
	self should: 'foo [ ^ 1 ifNotNil: [] ] value' return: nil.
	self should: 'foo [ ^ false ifFalse: [] ] value' return: nil.
	self should: 'foo [ ^ true ifTrue: [] ] value' return: nil.
!

testRegression1244
	self should: 'foo [ ^ true ifTrue: [1] ifFalse: [2] ] value' return: 1
!

testRootSuperSend
	self 
		should: 'foo ^ super class' 
		receiver: ProtoObject new
		raise: MessageNotUnderstood
!

testSendReceiverAndArgumentsOrdered
	self should: 'foo
	| x |
	x := 1.
	^ Array with: x with: (true ifTrue: [ x := 2 ])
' return: #(1 2).

	self should: 'foo
	| x |
	x := Array.
	^ x with: x with: (true ifTrue: [ x := 2 ])
' return: {Array. 2}.
!

testSuperSend
	self 
		should: 'foo ^ super isBoolean' 
		receiver: true
		return: false
!

testSuperSend2
	self 
		should: 'foo ^ super isNil'
		receiver: nil
		return: false
!

testSuperSend3
	self 
		should: 'doo ^ super isNil'
		class: Object
		receiver: nil
		return: false
!

testSuperSend4
	self 
		should: 'foo ^ super asJavaScriptObject'
		receiver: 'me'
		return: #('m' 'e')
!

testSuperSend5
	self 
		should: 'foo [super addLast: 4] on: Error do: [ self add: 5 ]. ^ self'
		class: SequenceableCollection
		receiver: #(1 2 3)
		return: #(1 2 3 5)
!

testSuperSend6
	self 
		should: 'foo ^ super ifTrue: [ true ] ifFalse: [ false ]' 
		receiver: true
		raise: Error
!

testTempVariables
	self should: 'foo | a | ^ a' return: nil.
	self should: 'foo | AVariable | ^ AVariable' return: nil.
	self should: 'foo | a b c | ^ c' return: nil.
	self should: 'foo | a | [ | d | ^ d ] value' return: nil.
	
	self should: 'foo | a | a:= 1. ^ a' return: 1.
	self should: 'foo | AVariable | AVariable := 1. ^ AVariable' return: 1.
!

testThisContext
	self should: 'foo ^ [ thisContext ] value outerContext == thisContext' return: true
!

testUnknownPragma
	self should: 'foo < fooBar: ''return 2+3'' > | x | ^ x := 6' return: 6.
	self should: 'foo | x | < fooBar: ''return 2+3'' > ^ x := 6' return: 6
!

testifFalse
	self should: 'foo true ifFalse: [ ^ 1 ]' return: receiver.
	self should: 'foo false ifFalse: [ ^ 2 ]' return: 2.
	
	self should: 'foo ^ true ifFalse: [ 1 ]' return: nil.
	self should: 'foo ^ false ifFalse: [ 2 ]' return: 2.
!

testifFalseIfTrue
	self should: 'foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]' return: 2.
	self should: 'foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]' return: 2.
	
	self should: 'foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]' return: 2.
	self should: 'foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]' return: 2.
!

testifNil
	self should: 'foo ^ 1 ifNil: [ 2 ]' return: 1.
	self should: 'foo ^ nil ifNil: [ 2 ]' return: 2.

	self should: 'foo 1 ifNil: [ ^ 2 ]' return: receiver.
	self should: 'foo nil ifNil: [ ^ 2 ]' return: 2.
!

testifNilIfNotNil
	self should: 'foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 3.
	self should: 'foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 2.

	self should: 'foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 3.
	self should: 'foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 2.
!

testifNotNil
	self should: 'foo ^ 1 ifNotNil: [ 2 ]' return: 2.
	self should: 'foo ^ nil ifNotNil: [ 2 ]' return: nil.

	self should: 'foo 1 ifNotNil: [ ^ 2 ]' return: 2.
	self should: 'foo nil ifNotNil: [ ^ 2 ]' return: receiver.
!

testifNotNilWithArgument
	self should: 'foo ^ 1 ifNotNil: [ :val | val + 2 ]' return: 3.
	self should: 'foo ^ nil ifNotNil: [ :val | val + 2 ]' return: nil.
	
	self should: 'foo ^ 1 ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]' return: 3.
	self should: 'foo ^ nil ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]' return: 5.
	
	self should: 'foo ^ 1 ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]' return: 3.
	self should: 'foo ^ nil ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]' return: 5
!

testifTrue
	self should: 'foo false ifTrue: [ ^ 1 ]' return: receiver.
	self should: 'foo true ifTrue: [ ^ 2 ]' return: 2.
	
	self should: 'foo ^ false ifTrue: [ 1 ]' return: nil.
	self should: 'foo ^ true ifTrue: [ 2 ]' return: 2.
!

testifTrueIfFalse
	self should: 'foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]' return: 2.
	self should: 'foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]' return: 1.
	
	self should: 'foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 1.
	self should: 'foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 2.
! !

!AbstractCompilerTest class methodsFor: 'testing'!

isAbstract
	^ self name = AbstractCompilerTest name
! !

AbstractCompilerTest subclass: #ASTDebuggerTest
	slots: {}
	package: 'Compiler-Tests'!

AbstractCompilerTest subclass: #ASTInterpreterTest
	slots: {}
	package: 'Compiler-Tests'!

AbstractCompilerTest subclass: #CodeGeneratorTest
	slots: {}
	package: 'Compiler-Tests'!

AbstractCompilerTest subclass: #InliningCodeGeneratorTest
	slots: {}
	package: 'Compiler-Tests'!

ASTMethodRunningTest subclass: #AbstractJavaScriptGatewayTest
	slots: {#theClass}
	package: 'Compiler-Tests'!

!AbstractJavaScriptGatewayTest methodsFor: 'accessing'!

theClass
	^ theClass
! !

!AbstractJavaScriptGatewayTest methodsFor: 'running'!

jsConstructor
	<inlineJS: '
		var ctr = function () {};
		ctr.prototype.foo = function (a,b) {return a+","+b};
		return ctr;
	'>
! !

!AbstractJavaScriptGatewayTest methodsFor: 'tests'!

testDyadicSuperDifferentNames
	theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.
	theClass beJavaScriptSubclassOf: self jsConstructor.
	receiver := ObjectMock2 new foo: 'should be shadowed'; yourself.
	arguments := #(4 true).
	self
		should: 'bar: anObject baz: anotherObject
			<jsOverride: #foo args: #(anObject anotherObject)>
			^ super bar: anObject baz: anotherObject'
		return: '4,true'
!

testDyadicSuperDifferentNamesNested
	theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.
	theClass beJavaScriptSubclassOf: self jsConstructor.
	receiver := ObjectMock2 new foo: 'should be shadowed'; yourself.
	arguments := #(4 true).
	self
		should: 'bar: anObject baz: anotherObject
			<jsOverride: #foo args: #(anObject anotherObject)>
			^ [ super bar: anObject baz: anotherObject ] value'
		return: '4,true'
!

testDyadicSuperDifferentNamesPermutated
	theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.
	theClass beJavaScriptSubclassOf: self jsConstructor.
	receiver := ObjectMock2 new foo: 'should be shadowed'; yourself.
	arguments := #(4 true).
	self
		should: 'bar: anObject baz: anotherObject
			<jsOverride: #foo args: #(anotherObject anObject)>
			^ super bar: anObject baz: anotherObject'
		return: 'true,4'
!

testMonadicSuperDifferentNames
	theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.
	theClass beJavaScriptSubclassOf: self jsConstructor.
	receiver := ObjectMock2 new foo: 'should be shadowed'; yourself.
	arguments := #(4).
	self
		should: 'bar: anObject <jsOverride: #foo args: #(anObject)> ^ super bar: anObject'
		return: '4,undefined'
!

testNiladicSuper
	theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.
	theClass beJavaScriptSubclassOf: self jsConstructor.
	self
		should: 'foo <jsOverride: #foo> ^ super foo'
		receiver: (ObjectMock2 new foo: 'should be shadowed'; yourself)
		return: 'undefined,undefined'
!

testNiladicSuperDifferentNames
	theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.
	theClass beJavaScriptSubclassOf: self jsConstructor.
	self
		should: 'bar <jsOverride: #foo> ^ super bar'
		receiver: (ObjectMock2 new foo: 'should be shadowed'; yourself)
		return: 'undefined,undefined'
!

testNiladicSuperNested
	theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.
	theClass beJavaScriptSubclassOf: self jsConstructor.
	self
		should: 'foo <jsOverride: #foo> ^ [ super foo ] value'
		receiver: (ObjectMock2 new foo: 'should be shadowed'; yourself)
		return: 'undefined,undefined'
!

testTriadicSuperDifferentNamesPermutated
	theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.
	theClass beJavaScriptSubclassOf: self jsConstructor.
	receiver := ObjectMock2 new foo: 'should be shadowed'; yourself.
	arguments := #(4 true 'hello').
	self
		should: 'bar: anObject baz: anotherObject moo: yao
			<jsOverride: #foo args: #(yao anObject anotherObject)>
			^ super bar: anObject baz: anotherObject moo: yao'
		return: 'hello,4'
! !

!AbstractJavaScriptGatewayTest class methodsFor: 'testing'!

isAbstract
	^ self name = AbstractJavaScriptGatewayTest name
! !

AbstractJavaScriptGatewayTest subclass: #DebuggedJSGTest
	slots: {}
	package: 'Compiler-Tests'!

AbstractJavaScriptGatewayTest subclass: #InlinedJSGTest
	slots: {}
	package: 'Compiler-Tests'!

AbstractJavaScriptGatewayTest subclass: #InterpretedJSGTest
	slots: {}
	package: 'Compiler-Tests'!

AbstractJavaScriptGatewayTest subclass: #PlainJSGTest
	slots: {}
	package: 'Compiler-Tests'!

TestCase subclass: #ASTPCNodeVisitorTest
	slots: {}
	package: 'Compiler-Tests'!

!ASTPCNodeVisitorTest methodsFor: 'factory'!

astPCNodeVisitor
	^ ASTPCNodeVisitor new
		index: 0;
		yourself
!

astPCNodeVisitorForSelector: aString
	^ ASTPCNodeVisitor new
		selector: aString;
		index: 0;
		yourself
!

newTeachableVisitor
	| result |
	result := Teachable new
		whenSend: #visit: evaluate: [ :one | one acceptDagVisitor: result ];
		acceptSend: #visitDagNode:.
	^ result
! !

!ASTPCNodeVisitorTest methodsFor: 'tests'!

testJSStatementNode
	| ast result |
	
	ast := self parse: 'foo <inlineJS: ''consolee.log(1)''>' forClass: Object.
	result := self astPCNodeVisitor visit: ast; currentNode.
	self
		assert: ((self newTeachableVisitor whenSend: #visitJSStatementNode: return: 'JS'; yourself) visit: result)
		equals: 'JS'
!

testMessageSend
	| ast |
	
	ast := self parse: 'foo self asString yourself. ^ self asBoolean' forClass: Object.
	self assert: ((self astPCNodeVisitorForSelector: 'yourself')
		visit: ast;
		currentNode) selector equals: 'yourself'
!

testMessageSendWithBlocks
	| ast |
	
	ast := self parse: 'foo true ifTrue: [ [ self asString yourself ] value.  ]. ^ self asBoolean' forClass: Object.
	self assert: ((self astPCNodeVisitorForSelector: 'yourself')
		visit: ast;
		currentNode) selector equals: 'yourself'
!

testMessageSendWithInlining
	| ast |
	
	ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.
	self assert: ((self astPCNodeVisitorForSelector: 'yourself')
		visit: ast;
		currentNode) selector equals: 'yourself'.
		
	ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.
	self assert: ((self astPCNodeVisitorForSelector: 'asBoolean')
		visit: ast;
		currentNode) selector equals: 'asBoolean'
!

testNoMessageSend
	| ast |
	
	ast := self parse: 'foo ^ self' forClass: Object.
	self assert: (self astPCNodeVisitor
		visit: ast;
		currentNode) isNil
! !

TestCase subclass: #ASTPositionTest
	slots: {}
	package: 'Compiler-Tests'!

!ASTPositionTest methodsFor: 'tests'!

testNodeAtPosition
	| node |
	
	node := self parse: 'yourself
	^ self' forClass: Object.
	
	self assert: (node navigationNodeAt: 2@4 ifAbsent: [ nil ]) source equals: 'self'.
	
	node := self parse: 'foo
	true ifTrue: [ 1 ]' forClass: Object.
	
	self assert: (node navigationNodeAt: 2@7 ifAbsent: [ nil ]) selector equals: 'ifTrue:'.
	
	node := self parse: 'foo
	self foo; bar; baz' forClass: Object.
	
	self assert: (node navigationNodeAt: 2@8 ifAbsent: [ nil ]) selector equals: 'foo'
! !

TestCase subclass: #AbstractCodeGeneratorInstallTest
	slots: {#receiver}
	package: 'Compiler-Tests'!

!AbstractCodeGeneratorInstallTest methodsFor: 'accessing'!

receiver
	^ receiver
! !

!AbstractCodeGeneratorInstallTest methodsFor: 'testing'!

shouldntInstall: aString andRaise: anErrorClass
	| method |

	[ self
		should: [ method := self install: aString forClass: receiver class ]
		raise: anErrorClass ]
	ensure: [ method ifNotNil: [ receiver class removeCompiledMethod: method ] ]
! !

!AbstractCodeGeneratorInstallTest methodsFor: 'tests'!

testDyadicJSOverrideArgMismatch
	receiver := ObjectMock new.
	self
		shouldntInstall: 'quux: aNumber foo: anotherNumber
		<jsOverride: #mux args: #(anInteger anotherNumber)>
		^ (foo := foo * aNumber + anotherNumber)'
		andRaise: CompilerError.
	self
		shouldntInstall: 'quux: aNumber foo: anotherNumber
		<jsOverride: #mux args: #(aNumber anotherInteger)>
		^ (foo := foo * aNumber + anotherNumber)'
		andRaise: CompilerError.
	self
		shouldntInstall: 'quux: aNumber foo: anotherNumber
		<jsOverride: #mux args: #(anotherNumber anInteger)>
		^ (foo := foo * aNumber + anotherNumber)'
		andRaise: CompilerError
!

testDyadicJSOverrideDifferentNames
	receiver := ObjectMock new.
	receiver foo: 4.
	self while: 'quux: anInteger foo: anotherInteger
		<jsOverride: #mux args: #(anInteger anotherInteger)>
		^ (foo := foo * anInteger + anotherInteger)' should: [
		self should: [ receiver mux ] raise: MessageNotUnderstood.
		self should: [ receiver mux: 2 and: -1 ] raise: MessageNotUnderstood.
		self assert: (receiver basicPerform: #mux withArguments: #(2 -2)) equals: 6.
		self assert: (receiver quux: 1 foo: 4) equals: 10.
		self should: [ receiver basicPerform: #quux ] raise: Error.
		self assert: receiver foo equals: 10 ]
!

testDyadicJSOverrideDifferentNamesPermutated
	receiver := ObjectMock new.
	receiver foo: 4.
	self while: 'quux: anInteger foo: anotherInteger
		<jsOverride: #mux args: #(anotherInteger anInteger)>
		^ (foo := foo * anInteger + anotherInteger)' should: [
		self should: [ receiver mux ] raise: MessageNotUnderstood.
		self should: [ receiver mux: 2 and: -1 ] raise: MessageNotUnderstood.
		self assert: (receiver basicPerform: #mux withArguments: #(-2 2)) equals: 6.
		self assert: (receiver quux: 1 foo: 4) equals: 10.
		self should: [ receiver basicPerform: #quux ] raise: Error.
		self assert: receiver foo equals: 10 ]
!

testDyadicJSOverrideInOneArg
	receiver := ObjectMock new.
	self
		shouldntInstall: 'quux: anInteger
		<jsOverride: #mux args: #(anInteger anotherInteger)>
		^ (foo := foo + anInteger)'
		andRaise: CompilerError.
	self
		shouldntInstall: 'quux: anInteger
		<jsOverride: #mux args: #(anotherInteger anInteger)>
		^ (foo := foo + anInteger)'
		andRaise: CompilerError
!

testDyadicJSOverrideInUnary
	receiver := ObjectMock new.
	self
		shouldntInstall: 'quux <jsOverride: #mux args: #(anInteger anotherInteger)> ^ (foo := foo + 3)'
		andRaise: CompilerError
!

testDyadicJSOverrideRepeatedArgs
	receiver := ObjectMock new.
	self
		shouldntInstall: 'quux: anInteger
		<jsOverride: #mux args: #(anInteger anInteger)>
		^ (foo := foo + anInteger)'
		andRaise: CompilerError.
	self
		shouldntInstall: 'quux: anInteger foo: anotherInteger
		<jsOverride: #mux args: #(anInteger anInteger)>
		^ (foo := foo * anInteger + anotherInteger)'
		andRaise: CompilerError
!

testInvalidAssignment
	self shouldntInstall: 'foo:a a:=1' andRaise: InvalidAssignmentError.
	self shouldntInstall: 'foo false:=1' andRaise: InvalidAssignmentError.
	self shouldntInstall: 'foo console:=1' andRaise: InvalidAssignmentError.
	self shouldntInstall: 'foo Number:=1' andRaise: InvalidAssignmentError
!

testMistypedPragmaJSStatement
	self shouldntInstall: 'foo < inlineJS: ''return ''foo'''' >' andRaise: ParseError
!

testMonadicJSOverrideArgMismatch
	receiver := ObjectMock new.
	self
		shouldntInstall: 'quux: aNumber <jsOverride: #mux args: #(anInteger)> ^ (foo := foo + aNumber)'
		andRaise: CompilerError
!

testMonadicJSOverrideDifferentNames
	receiver := ObjectMock new.
	receiver foo: 4.
	self while: 'quux: anInteger <jsOverride: #mux args: #(anInteger)> ^ (foo := foo + anInteger)' should: [
		self should: [ receiver mux ] raise: MessageNotUnderstood.
		self should: [ receiver mux: 2 ] raise: MessageNotUnderstood.
		self assert: (receiver basicPerform: #mux withArguments: #(2)) equals: 6.
		self assert: (receiver quux: 4) equals: 10.
		self should: [ receiver basicPerform: #quux ] raise: Error.
		self assert: receiver foo equals: 10 ]
!

testMonadicJSOverrideInUnary
	receiver := ObjectMock new.
	self
		shouldntInstall: 'quux <jsOverride: #mux args: #(anInteger)> ^ (foo := foo + 3)'
		andRaise: CompilerError
!

testNiladicJSOverride
	receiver := ObjectMock new.
	receiver foo: 4.
	self while: 'baz <jsOverride: #baz> ^ (foo := foo + 3)' should: [
		self assert: receiver baz equals: 7.
		self assert: (receiver basicPerform: #baz) equals: 10.
		self assert: receiver baz equals: 13.
		self assert: receiver foo equals: 13 ]
!

testNiladicJSOverrideDifferentNames
	receiver := ObjectMock new.
	receiver foo: 4.
	self while: 'quux <jsOverride: #mux> ^ (foo := foo + 3)' should: [
		self should: [ receiver mux ] raise: MessageNotUnderstood.
		self assert: (receiver basicPerform: #mux) equals: 7.
		self assert: receiver quux equals: 10.
		self should: [ receiver basicPerform: #quux ] raise: Error.
		self assert: receiver foo equals: 10 ]
!

testNiladicJSOverrideInOneArg
	receiver := ObjectMock new.
	self
		shouldntInstall: 'quux: anInteger <jsOverride: #mux> ^ (foo := foo + anInteger)'
		andRaise: CompilerError
!

testPragmaInBlock
	self shouldntInstall: 'foo ^ [ < fooBar > 4 ] value' andRaise: ParseError
!

testTriadicJSOverrideDifferentNamesPermutated
	receiver := ObjectMock new.
	receiver foo: 4.
	self while: 'quux: anInteger foo: anotherInteger bar: yaInt
		<jsOverride: #mux args: #(yaInt anInteger anotherInteger)>
		^ (foo := foo * anInteger + anotherInteger - yaInt)' should: [
		self should: [ receiver mux ] raise: MessageNotUnderstood.
		self should: [ receiver mux: 2 and: -1 and: 0 ] raise: MessageNotUnderstood.
		self assert: (receiver basicPerform: #mux withArguments: #(5 2 3)) equals: 6.
		self assert: (receiver quux: 1 foo: 4 bar: 20) equals: -10.
		self should: [ receiver basicPerform: #quux ] raise: Error.
		self assert: receiver foo equals: -10 ]
! !

!AbstractCodeGeneratorInstallTest class methodsFor: 'testing'!

isAbstract
	^ self name = AbstractCodeGeneratorInstallTest name
! !

AbstractCodeGeneratorInstallTest subclass: #CodeGeneratorInstallTest
	slots: {}
	package: 'Compiler-Tests'!

AbstractCodeGeneratorInstallTest subclass: #InliningCodeGeneratorInstallTest
	slots: {}
	package: 'Compiler-Tests'!

TestCase subclass: #ScopeVarTest
	slots: {}
	package: 'Compiler-Tests'!

!ScopeVarTest methodsFor: 'tests'!

testClassRefVar
	| node binding |
	node := VariableNode new
		identifier: 'Object';
		yourself.
	SemanticAnalyzer new 
		pushScope: MethodLexicalScope new;
		visit: node.
	binding := node binding.
	self deny: binding isAssignable.
	self deny: binding isIdempotent.
	self assert: (binding alias includesSubString: 'Object').
	self assert: (binding alias ~= 'Object')
!

testExternallyKnownVar
	| node binding |
	node := VariableNode new
		identifier: 'console';
		yourself.
	SemanticAnalyzer new 
		pushScope: MethodLexicalScope new;
		visit: node.
	binding := node binding.
	self deny: binding isAssignable.
	self deny: binding isIdempotent.
	self assert: binding alias equals: 'console'
!

testExternallyUnknownVar
	| node |
	node := VariableNode new
		identifier: 'bzzz';
		yourself.
	self 
		should: [
			SemanticAnalyzer new 
			pushScope: MethodLexicalScope new;
			visit: node ]
		raise: UnknownVariableError
!

testPseudoVar
	#('self' 'super' 'true' 'false' 'nil' 'thisContext') do: [ :each |
		| binding |
		binding := MethodLexicalScope new bindingFor: each.
		self deny: binding isAssignable.
		self assert: binding isIdempotent ]
!

testSlotVar
	| binding |
	binding := MethodLexicalScope new
		addSlotVar: 'bzzz';
		bindingFor: 'bzzz'.
	self assert: binding isAssignable.
	self deny: binding isIdempotent.
	self assert: (binding alias includesSubString: 'bzzz').
	self assert: (binding alias ~= 'bzzz')
!

testTempVar
	| binding |
	binding := MethodLexicalScope new
		addTemp: 'bzzz';
		bindingFor: 'bzzz'.
	self assert: binding isAssignable.
	self deny: binding isIdempotent.
	self assert: binding alias equals: 'bzzz'
!

testUnknownVar
	self assert: (MethodLexicalScope new bindingFor: 'bzzz') isNil
! !

TestCase subclass: #SemanticAnalyzerTest
	slots: {#analyzer}
	package: 'Compiler-Tests'!

!SemanticAnalyzerTest methodsFor: 'running'!

setUp
	analyzer := SemanticAnalyzer on: Object
! !

!SemanticAnalyzerTest methodsFor: 'tests'!

testAssignment
	| src ast |

	src := 'foo self := 1'.
	ast := Smalltalk parse: src.
	self should: [analyzer visit: ast] raise: InvalidAssignmentError
!

testNonLocalReturn
	| src ast |

	src := 'foo | a | a + 1. ^ a'.
	ast := Smalltalk parse: src.
	analyzer visit: ast.

	self deny: ast scope hasNonLocalReturn
!

testNonLocalReturn2
	| src ast |

	src := 'foo | a | a + 1. [ [ ^ a] ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast.

	self assert: ast scope hasNonLocalReturn
!

testScope
	| src ast |

	src := 'foo | a | a + 1. [ | b | b := a ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast.

	self deny: ast sequenceNode dagChildren last scope == ast scope.
!

testScope2
	| src ast |

	src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast.

	self deny: ast sequenceNode dagChildren last sequenceNode dagChildren first scope == ast scope.
!

testScopeLevel
	| src ast |

	src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast.

	self assert: ast scope scopeLevel equals: 1.
	self assert: ast sequenceNode dagChildren last sequenceNode dagChildren first scope scopeLevel equals: 3
!

testUnknownVariables
	| src ast |

	src := 'foo | a | b + a'.
	ast := Smalltalk parse: src.

	self should: [ analyzer visit: ast ] raise: UnknownVariableError
!

testUnknownVariablesWithScope
	| src ast |

	src := 'foo | a b | [ c + 1. [ a + 1. d + 1 ]]'.
	ast := Smalltalk parse: src.
	
	self should: [ analyzer visit: ast ] raise: UnknownVariableError
!

testVariableShadowing
	| src ast |
	src := 'foo | a | a + 1'.
	ast := Smalltalk parse: src.
	analyzer visit: ast
!

testVariableShadowing2
	| src ast |
	src := 'foo | a | a + 1. [ | a | a := 2 ]'.
	ast := Smalltalk parse: src.
	self should: [analyzer visit: ast] raise: ShadowingVariableError
!

testVariableShadowing3
	| src ast |
	src := 'foo | a | a + 1. [ | b | b := 2 ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast
!

testVariableShadowing4
	| src ast |
	src := 'foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast
!

testVariableShadowing5
	| src ast |
	src := 'foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]'.
	ast := Smalltalk parse: src.
	self should: [analyzer visit: ast] raise: ShadowingVariableError
!

testVariablesLookup
	| src ast |

	src := 'foo | a | a + 1. [ | b | b := a ]'.
	ast := Smalltalk parse: src.
	analyzer visit: ast.

	"Binding for `a` in the message send"
	self assert: ast sequenceNode dagChildren first receiver binding isAssignable.
	self assert: ast sequenceNode dagChildren first receiver binding alias equals: 'a'.
	self assert: ast sequenceNode dagChildren first receiver binding scope == ast scope.

	"Binding for `b`"
	self assert: ast sequenceNode dagChildren last sequenceNode dagChildren first left binding isAssignable.
	self assert: ast sequenceNode dagChildren last sequenceNode dagChildren first left binding alias equals: 'b'.
	self assert: ast sequenceNode dagChildren last sequenceNode dagChildren first left binding scope == ast sequenceNode dagChildren last scope.
! !

SemanticAnalyzerTest subclass: #AISemanticAnalyzerTest
	slots: {}
	package: 'Compiler-Tests'!

!AISemanticAnalyzerTest methodsFor: 'running'!

setUp
	analyzer := (AISemanticAnalyzer on: Object)
		context: (AIContext new
			defineLocal: 'local';
			localAt: 'local' put: 3;
			yourself);
		yourself
! !

!AISemanticAnalyzerTest methodsFor: 'tests'!

testContextVariables
	| src ast |
	
	src := 'foo | a | local + a'.
	ast := Smalltalk parse: src.

	self shouldnt: [ analyzer visit: ast ] raise: UnknownVariableError
! !

Trait named: #TASTCompilingTest
	package: 'Compiler-Tests'!

!TASTCompilingTest methodsFor: 'accessing'!

codeGeneratorClass
	self subclassResponsibility
! !

!TASTCompilingTest methodsFor: 'compiling'!

install: aString forClass: aClass
	^ self compiler
		install: aString
		forClass: aClass
		protocol: 'tests'
! !

!TASTCompilingTest methodsFor: 'factory'!

compiler
	^ Compiler new
		codeGeneratorClass: self codeGeneratorClass;
		yourself
! !

!TASTCompilingTest methodsFor: 'testing'!

while: aString inClass: aClass should: aBlock
	| method |

	[
		method := self install: aString forClass: aClass.
		aBlock value: method ]
	ensure: [ method ifNotNil: [ aClass removeCompiledMethod: method ] ]
!

while: aString should: aBlock
	self while: aString inClass: self receiver class should: aBlock
! !

Trait named: #TASTParsingTest
	package: 'Compiler-Tests'!

!TASTParsingTest methodsFor: 'parsing'!

parse: aString forClass: aClass
	^ Compiler new
		ast: aString
		forClass: aClass
		protocol: 'test'
! !

Trait named: #TCTDebugged
	package: 'Compiler-Tests'!

!TCTDebugged methodsFor: 'private'!

interpret: aString forClass: aClass receiver: anObject withArguments: aDictionary
	"The food is a methodNode. Interpret the sequenceNode only"
	
	| ctx |
	
	ctx := self prepareContextFor: aString class: aClass receiver: anObject withArguments: aDictionary.
	
	^ (ASTDebugger context: ctx) proceed; result
! !

Trait named: #TCTExecuted
	package: 'Compiler-Tests'!

!TCTExecuted methodsFor: 'testing'!

while: aString inClass: aClass should: aBlock
	super
		while: aString
		inClass: aClass
		should: [ :method | aBlock value: [
			self receiver perform: method selector withArguments: self arguments ] ]
! !

Trait named: #TCTInlined
	package: 'Compiler-Tests'!

!TCTInlined methodsFor: 'accessing'!

codeGeneratorClass
	^ InliningCodeGenerator
! !

Trait named: #TCTInterpreted
	package: 'Compiler-Tests'!

!TCTInterpreted methodsFor: 'private'!

interpret: aString forClass: aClass receiver: anObject withArguments: aDictionary
	"The food is a methodNode. Interpret the sequenceNode only"
	
	| ctx |
	
	ctx := self prepareContextFor: aString class: aClass receiver: anObject withArguments: aDictionary.
	
	^ ctx interpreter proceed; result
!

prepareContextFor: aString class: aClass receiver: anObject withArguments: anArray
	"The food is a methodNode. Interpret the sequenceNode only"
	
	| ctx ast |
	
	ast := self parse: aString forClass: aClass.
	
	ctx := AIContext new
		receiver: anObject;
		selector: ast selector;
		interpreter: ASTInterpreter new;
		yourself.
		
	"Define locals for the context"
	ast sequenceNode ifNotNil: [ :sequence |
		sequence temps do: [ :each |
			ctx defineLocal: each ] ].

	ast arguments with: anArray do: [ :key :value |
		ctx defineLocal: key; localAt: key put: value ].
	
	ctx interpreter
		context: ctx;
		node: ast;
		enterNode.
	
	^ctx
! !

!TCTInterpreted methodsFor: 'testing'!

while: aString inClass: aClass should: aBlock
	super
		while: aString
		inClass: aClass
		should: [ aBlock value: [
			self
				interpret: aString
				forClass: aClass
				receiver: self receiver
				withArguments: self arguments ] ]
! !

Trait named: #TCTNonInlined
	package: 'Compiler-Tests'!

!TCTNonInlined methodsFor: 'accessing'!

codeGeneratorClass
	^ CodeGenerator
! !

TASTCompilingTest setTraitComposition: {TASTParsingTest} asTraitComposition!
TCTDebugged setTraitComposition: {TCTInterpreted} asTraitComposition!
ASTMethodRunningTest setTraitComposition: {TASTCompilingTest} asTraitComposition!
ASTDebuggerTest setTraitComposition: {TCTNonInlined. TCTDebugged} asTraitComposition!
ASTInterpreterTest setTraitComposition: {TCTNonInlined. TCTInterpreted} asTraitComposition!
CodeGeneratorTest setTraitComposition: {TCTNonInlined. TCTExecuted} asTraitComposition!
InliningCodeGeneratorTest setTraitComposition: {TCTInlined. TCTExecuted} asTraitComposition!
AbstractJavaScriptGatewayTest setTraitComposition: {TClassBuildingTest} asTraitComposition!
DebuggedJSGTest setTraitComposition: {TCTNonInlined. TCTDebugged} asTraitComposition!
InlinedJSGTest setTraitComposition: {TCTInlined. TCTExecuted} asTraitComposition!
InterpretedJSGTest setTraitComposition: {TCTNonInlined. TCTInterpreted} asTraitComposition!
PlainJSGTest setTraitComposition: {TCTNonInlined. TCTExecuted} asTraitComposition!
ASTPCNodeVisitorTest setTraitComposition: {TASTParsingTest} asTraitComposition!
ASTPositionTest setTraitComposition: {TASTParsingTest} asTraitComposition!
AbstractCodeGeneratorInstallTest setTraitComposition: {TASTCompilingTest} asTraitComposition!
CodeGeneratorInstallTest setTraitComposition: {TCTNonInlined} asTraitComposition!
InliningCodeGeneratorInstallTest setTraitComposition: {TCTInlined} asTraitComposition!
! !

