Smalltalk createPackage: 'Kernel-Exceptions'!
Object subclass: #Error
	slots: {#message. #stack. #amberHandled. #context. #smalltalkError}
	package: 'Kernel-Exceptions'!
!Error commentStamp!
From the ANSI standard:

This protocol describes the behavior of instances of class `Error`.
These are used to represent error conditions that prevent the normal continuation of processing.
Actual error exceptions used by an application may be subclasses of this class.
As `Error` is explicitly specified to be subclassable, conforming implementations must implement its behavior in a non-fragile manner.!

!Error methodsFor: 'accessing'!

beHandled
	amberHandled := true
!

beSmalltalkError
	smalltalkError := true
!

beUnhandled
	amberHandled := false
!

context
	^ context
!

context: aMethodContext
	context := aMethodContext
!

jsStack
	^ stack
!

messageText
	^ message
!

messageText: aString
	message := aString
!

signalerContext
	^ self signalerContextFrom: self context
!

signalerContextFrom: aContext
	"Find the first sender of signal(:), the first context which is neither 
	for an instance method nor for a class side method of Exception (or subclass).
	This will make sure that the same context is found for both, `Error signal` 
	and `Error new signal`"

	^ aContext findContextSuchThat: [ :one |
		(one receiver == self 
		or: [ one receiver == self class ]) not ]
! !

!Error methodsFor: 'initialization'!

initialize
	self messageText: 'Errorclass: ', (self class name).
! !

!Error methodsFor: 'private'!

basicSignal
	<inlineJS: 'throw self;'>
! !

!Error methodsFor: 'signaling'!

outer
	"Pharo compatibility. Just sends #pass."
	
	^ self pass
!

pass
	"Let outer handler take care of this."

	self beUnhandled; basicSignal
!

resignal
	self deprecatedAPI: 'Use #pass.'.
	^ self pass
!

signal
	self beUnhandled; context: thisContext; beSmalltalkError; basicSignal
!

signal: aString
	self messageText: aString; signal
! !

!Error methodsFor: 'testing'!

isError
	^ true
!

isSmalltalkError
	^ smalltalkError == true
!

wasHandled
	^ amberHandled == true
! !

!Error class methodsFor: 'accessing'!

classTag
	"Returns a tag or general category for this class.
	Typically used to help tools do some reflection.
	Helios, for example, uses this to decide what icon the class should display."
	
	^ 'exception'
! !

!Error class methodsFor: 'instance creation'!

signal
	^ self new signal
!

signal: aString
	^ self new
		signal: aString
! !

Error subclass: #Halt
	slots: {}
	package: 'Kernel-Exceptions'!
!Halt commentStamp!
I am provided to support `Object>>#halt`.!

!Halt methodsFor: 'accessing'!

messageText
	^ 'Halt encountered'
!

signalerContextFrom: aContext
	"specialized version to find the proper context to open the debugger on.
	This will find the first context whose method is no longer on `Halt` or 
	`Halt class` nor is `#halt` method itself."
	
	^ aContext findContextSuchThat: [ :one |
		(one receiver == self 
		or: [ (one receiver == self class) 
		or: [ one method selector = #halt ]]) not ]
! !

Error subclass: #JavaScriptException
	slots: {#exception}
	package: 'Kernel-Exceptions'!
!JavaScriptException commentStamp!
A JavaScriptException is thrown when a non-Smalltalk exception occurs while in the Smalltalk stack.
See `boot.js` `inContext()` and `BlockClosure >> on:do:`!

!JavaScriptException methodsFor: 'accessing'!

exception
	^ exception
!

exception: anException
	exception := anException
!

messageText
	<inlineJS: 'return "JavaScript exception: " + $self.exception.toString()'>
! !

!JavaScriptException methodsFor: 'error handling'!

wrap
	[ self signal ] tryCatch:
		[ self shouldBeStubbed ifTrue: [ self context stubToAtMost: 100 ] ]
! !

!JavaScriptException methodsFor: 'testing'!

shouldBeStubbed
	<inlineJS: 'return $self.exception instanceof RangeError'>
! !

!JavaScriptException class methodsFor: 'instance creation'!

on: anException
	^ self new
		exception: anException;
		yourself
!

on: anException context: aMethodContext
	^ self new
		exception: anException;
		context: aMethodContext;
		yourself
! !

Error subclass: #MessageNotUnderstood
	slots: {#smalltalkMessage. #receiver}
	package: 'Kernel-Exceptions'!
!MessageNotUnderstood commentStamp!
This exception is provided to support `Object>>doesNotUnderstand:`.!

!MessageNotUnderstood methodsFor: 'accessing'!

message
	^ smalltalkMessage
!

message: aMessage
	smalltalkMessage := aMessage
!

messageText
	^ self receiver asString, ' does not understand #', self message selector
!

receiver
	^ receiver
!

receiver: anObject
	receiver := anObject
! !

Error subclass: #NonBooleanReceiver
	slots: {#object}
	package: 'Kernel-Exceptions'!
!NonBooleanReceiver commentStamp!
NonBooleanReceiver exceptions may be thrown when executing inlined methods such as `#ifTrue:` with a non boolean receiver.!

!NonBooleanReceiver methodsFor: 'accessing'!

object
	^ object
!

object: anObject
	object := anObject
! !

!NonBooleanReceiver class methodsFor: 'instance creation'!

signalOn: anObject
	^ self new
		object: anObject;
		signal
! !

