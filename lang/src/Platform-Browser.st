Smalltalk createPackage: 'Platform-Browser'!
(Smalltalk packageAt: 'Platform-Browser' ifAbsent: [ self error: 'Package not created: Platform-Browser' ]) imports: {'amber/core/Platform-Services'}!
Object subclass: #BrowserPlatform
	slots: {}
	package: 'Platform-Browser'!
!BrowserPlatform commentStamp!
I am `Platform` service implementation for browser.!

!BrowserPlatform methodsFor: 'accessing'!

globals
	^ window
! !

!BrowserPlatform methodsFor: 'public API'!

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
		ifNotNil: [ ^ NativeFunction constructorOf: XMLHttpRequest ]
		ifNil: [ self error: 'XMLHttpRequest not available.' ]
! !

!BrowserPlatform class methodsFor: 'testing'!

initialize
	self isFeasible ifTrue: [ Platform registerIfNone: self new ]
!

isFeasible
<inlineJS: 'return typeof window !!== "undefined"'>
! !

Object subclass: #BrowserTerminal
	slots: {}
	package: 'Platform-Browser'!
!BrowserTerminal commentStamp!
I am `Terminal` service implementation for browser.!

!BrowserTerminal methodsFor: 'actions'!

alert: aString
	^ window alert: aString
!

confirm: aString
	^ window confirm: aString
!

prompt: aString
	^ window prompt: aString
!

prompt: aString default: defaultString
	^ window prompt: aString default: defaultString
! !

!BrowserTerminal class methodsFor: 'testing'!

initialize
	self isFeasible ifTrue: [ Terminal registerIfNone: self new ]
!

isFeasible
<inlineJS: 'return typeof window !!== "undefined"'>
! !

!Object methodsFor: '*Platform-Browser'!

postMessageTo: aFrame
^ self postMessageTo: aFrame origin: '*'
!

postMessageTo: aFrame origin: aString
<inlineJS: 'return aFrame.postMessage(self, aString)'>
! !

