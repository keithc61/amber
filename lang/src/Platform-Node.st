Smalltalk createPackage: 'Platform-Node'!
(Smalltalk packageAt: 'Platform-Node' ifAbsent: [ self error: 'Package not created: Platform-Node' ]) imports: {'amber/core/Platform-Services'}!
Object subclass: #NodePlatform
	slots: {}
	package: 'Platform-Node'!
!NodePlatform commentStamp!
I am `Platform` service implementation for node-like environment.!

!NodePlatform methodsFor: 'accessing'!

globals
	^ global
! !

!NodePlatform methodsFor: 'initialization'!

initialize
	process
		on: 'uncaughtException'
		do: [ :err | ErrorHandler handleError: err. process exit: 1 ];
		on: 'unhandledRejection'
		do: [ :err | ErrorHandler handleError: err. process exit: 2 ]
! !

!NodePlatform methodsFor: 'public API'!

fetch: aStringOrObject
	^ self globals at: #fetch
		ifPresent: [ :fetch | fetch value: aStringOrObject ]
		ifAbsent: [ Promise signal: 'fetch not available.' ]
!

fetchUrl: aString options: anObject
	^ self globals at: #fetch
		ifPresent: [ :fetch | fetch value: aString value: anObject ]
		ifAbsent: [ Promise signal: 'fetch not available.' ]
!

newXhr
	XMLHttpRequest
		ifNotNil: [ ^ XMLHttpRequest new ]
		ifNil: [ self error: 'XMLHttpRequest not available.' ]
! !

!NodePlatform class methodsFor: 'testing'!

initialize
	self isFeasible ifTrue: [ Platform registerIfNone: self new ]
!

isFeasible
<inlineJS: 'return typeof process !!== "undefined" && process && process.versions && process.versions.node !!= null'>
! !

