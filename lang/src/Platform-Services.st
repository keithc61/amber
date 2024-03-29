Smalltalk createPackage: 'Platform-Services'!
Object subclass: #ConsoleErrorHandler
	slots: {}
	package: 'Platform-Services'!
!ConsoleErrorHandler commentStamp!
I am manage Smalltalk errors, displaying the stack in the console.!

!ConsoleErrorHandler methodsFor: 'error handling'!

handleError: anError
	anError context ifNotNil: [ self logErrorContext: anError context ].
	self logError: anError
! !

!ConsoleErrorHandler methodsFor: 'private'!

log: aString
	console log: aString
!

logContext: aContext
	aContext home ifNotNil: [
		self logContext: aContext home ].
	self log: aContext asString
!

logError: anError
	self log: anError messageText
!

logErrorContext: aContext
	aContext ifNotNil: [
		aContext home ifNotNil: [
			self logContext: aContext home ]]
! !

ConsoleErrorHandler class slots: {#current}!

!ConsoleErrorHandler class methodsFor: 'initialization'!

initialize
	ErrorHandler registerIfNone: self new
! !

Object subclass: #ConsoleTranscript
	slots: {#textarea}
	package: 'Platform-Services'!
!ConsoleTranscript commentStamp!
I am a specific transcript emitting to the JavaScript console.

If no other transcript is registered, I am the default.!

!ConsoleTranscript methodsFor: 'actions'!

open
! !

!ConsoleTranscript methodsFor: 'printing'!

clear
	"no op"
!

cr
	"no op"
!

show: anObject
"Smalltalk objects should have no trouble displaying themselves on the Transcript; Javascript objects don't know how, so must be wrapped in a JSObectProxy."
<inlineJS: 'console.log(String($recv(anObject)._asString()))'>
! !

!ConsoleTranscript class methodsFor: 'initialization'!

initialize
	Transcript registerIfNone: self new
! !

Object subclass: #Environment
	slots: {}
	package: 'Platform-Services'!
!Environment commentStamp!
I provide an unified entry point to manipulate Amber packages, classes and methods.

Typical use cases include IDEs, remote access and restricting browsing.!

!Environment methodsFor: 'accessing'!

allSelectors
	^ Smalltalk core allSelectors
!

availableClassNames
	^ Smalltalk classes 
		collect: [ :each | each name ]
!

availablePackageNames
	^ Smalltalk packages 
		collect: [ :each | each name ]
!

availableProtocolsFor: aClass
	| protocols |
	
	protocols := aClass protocols.
	aClass superclass ifNotNil: [ protocols addAll: (self availableProtocolsFor: aClass superclass) ].
	^ protocols asSet asArray sort
!

classBuilder
	^ ClassBuilder new
!

classNamed: aString
	^ (Smalltalk globals at: aString asSymbol)
		ifNil: [ self error: 'Invalid class name' ]
!

classes
	^ Smalltalk classes
!

doItReceiver
	^ DoIt new
!

packages
	^ Smalltalk packages
!

systemAnnouncer
	^ (Smalltalk globals at: #SystemAnnouncer) current
! !

!Environment methodsFor: 'actions'!

commitPackage: aPackage onSuccess: aBlock onError: anotherBlock
	aPackage transport
		commitOnSuccess: aBlock
		onError: anotherBlock
!

copyClass: aClass to: aClassName
	(Smalltalk globals at: aClassName)
		ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].
		
	ClassBuilder new copyClass: aClass named: aClassName
!

inspect: anObject
	Inspector inspect: anObject
!

moveClass: aClass toPackage: aPackageName
	| package |
	
	package := Package named: aPackageName.
	package ifNil: [ self error: 'Invalid package name' ].
	package == aClass package ifTrue: [ ^ self ].
	
	aClass package: package.
	aClass recompile
!

moveMethod: aMethod toClass: aClassName
	| destinationClass |
	
	destinationClass := self classNamed: aClassName.
	destinationClass == aMethod origin ifTrue: [ ^ self ].
	
	aMethod origin isMetaclass ifTrue: [ 
		destinationClass := destinationClass theMetaClass ].
	
	destinationClass 
		compile: aMethod source
		protocol: aMethod protocol.
	aMethod origin 
		removeCompiledMethod: aMethod
!

moveMethod: aMethod toProtocol: aProtocol
	aMethod protocol: aProtocol.

	aMethod origin
		compile: aMethod source
		protocol: aMethod protocol
!

removeClass: aClass
	Smalltalk removeClass: aClass
!

removeMethod: aMethod
	aMethod origin removeCompiledMethod: aMethod
!

removeProtocol: aString from: aClass
	(aClass methodsInProtocol: aString)
		do: [ :each | aClass removeCompiledMethod: each ]
!

renameClass: aClass to: aClassName
	(Smalltalk globals at: aClassName)
		ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].
		
	ClassBuilder new renameClass: aClass to: aClassName
!

renamePackage: aPackageName to: aNewPackageName
        Smalltalk renamePackage: aPackageName to: aNewPackageName
!

renameProtocol: aString to: anotherString in: aClass
	(aClass methodsInProtocol: aString)
		do: [ :each | each protocol: anotherString ]
!

setClassCommentOf: aClass to: aString
	aClass comment: aString
! !

!Environment methodsFor: 'compiling'!

addInstVarNamed: aString to: aClass
	| newSlots |
	newSlots := aClass slots copyWith: aString.

	aClass isMetaclass
		ifTrue: [ self classBuilder
			class: aClass slots: newSlots ]
		ifFalse: [ self classBuilder
			addSubclassOf: aClass superclass 
			named: aClass name 
			slots: newSlots
			package: aClass package name ]
!

compileClassComment: aString for: aClass
	aClass comment: aString
!

compileClassDefinition: aString
	[ self evaluate: aString for: DoIt new ]
		on: Error
		do: [ :error | Terminal alert: error messageText ]
!

compileMethod: sourceCode for: class protocol: protocol
	^ class
		compile: sourceCode
		protocol: protocol
! !

!Environment methodsFor: 'error handling'!

evaluate: aBlock on: anErrorClass do: exceptionBlock
	"Evaluate a block and catch exceptions happening on the environment stack"
	
	^ aBlock on: (self classNamed: anErrorClass name) do: exceptionBlock
! !

!Environment methodsFor: 'evaluating'!

evaluate: aString for: anObject
	^ Evaluator evaluate: aString for: anObject
! !

!Environment methodsFor: 'services'!

registerErrorHandler: anErrorHandler
	ErrorHandler register: anErrorHandler
!

registerFinder: aFinder
	Finder register: aFinder
!

registerInspector: anInspector
	Inspector register: anInspector
!

registerProgressHandler: aProgressHandler
	ProgressHandler register: aProgressHandler
!

registerTranscript: aTranscript
	Transcript register: aTranscript
! !

Object subclass: #NullProgressHandler
	slots: {}
	package: 'Platform-Services'!
!NullProgressHandler commentStamp!
I am the default progress handler. I do not display any progress, and simply iterate over the collection.!

!NullProgressHandler methodsFor: 'progress handling'!

do: aBlock on: aCollection displaying: aString
	aCollection do: aBlock
! !

NullProgressHandler class slots: {#current}!

!NullProgressHandler class methodsFor: 'initialization'!

initialize
	ProgressHandler registerIfNone: self new
! !

Object subclass: #Service
	slots: {}
	package: 'Platform-Services'!
!Service commentStamp!
I implement the basic behavior for class registration to a service.

See the `Transcript` class for a concrete service.

## API

Use class-side methods `#register:` and `#registerIfNone:` to register classes to a specific service.!

Service class slots: {#current}!

!Service class methodsFor: 'accessing'!

current
	^ current
! !

!Service class methodsFor: 'instance creation'!

new
	self shouldNotImplement
! !

!Service class methodsFor: 'registration'!

register: anObject
	current := anObject
!

registerIfNone: anObject
	self current ifNil: [ self register: anObject ]
! !

Service subclass: #ErrorHandler
	slots: {}
	package: 'Platform-Services'!
!ErrorHandler commentStamp!
I am the service used to handle Smalltalk errors.
See `boot.js` `handleError()` function.

Registered service instances must implement `#handleError:` to perform an action on the thrown exception.!

!ErrorHandler class methodsFor: 'error handling'!

handleError: anError
	| smalltalkError |
	smalltalkError := Smalltalk asSmalltalkException: anError.
	smalltalkError context ifNil: [ smalltalkError context: thisContext ].
	self handleUnhandledError: smalltalkError
!

handleUnhandledError: anError
	anError wasHandled ifFalse: [
		self current handleError: anError.
		anError beHandled ]
! !

Service subclass: #Finder
	slots: {}
	package: 'Platform-Services'!
!Finder commentStamp!
I am the service responsible for finding classes/methods.
__There is no default finder.__

## API

Use `#browse` on an object to find it.!

!Finder class methodsFor: 'finding'!

findClass: aClass
	^ self current findClass: aClass
!

findMethod: aCompiledMethod
	^ self current findMethod: aCompiledMethod
!

findString: aString
	^ self current findString: aString
! !

Service subclass: #Inspector
	slots: {}
	package: 'Platform-Services'!
!Inspector commentStamp!
I am the service responsible for inspecting objects.

The default inspector object is the transcript.!

!Inspector class methodsFor: 'inspecting'!

inspect: anObject
	^ self current inspect: anObject
! !

Service subclass: #Platform
	slots: {}
	package: 'Platform-Services'!
!Platform commentStamp!
I am bridge to JS environment.

## API

    Platform globals. "JS global object"
    Platform newXHR "new XMLHttpRequest() or its shim"!

!Platform class methodsFor: 'accessing'!

fetch: aStringOrObject
	^ self current fetch: aStringOrObject
!

fetchUrl: aString options: anObject
	^ self current fetchUrl: aString options: anObject
!

globals
	^ self current globals
!

newXhr
	^ self current newXhr
! !

!Platform class methodsFor: 'testing'!

includesGlobal: aString
	^ self globals 
		at: aString 
		ifPresent: [ true ] 
		ifAbsent: [ false ]
! !

Service subclass: #ProgressHandler
	slots: {}
	package: 'Platform-Services'!
!ProgressHandler commentStamp!
I am used to manage progress in collection iterations, see `SequenceableCollection >> #do:displayingProgress:`.

Registered instances must implement `#do:on:displaying:`.

The default behavior is to simply iterate over the collection, using `NullProgressHandler`.!

!ProgressHandler class methodsFor: 'progress handling'!

do: aBlock on: aCollection displaying: aString
	self current do: aBlock on: aCollection displaying: aString
! !

Service subclass: #Terminal
	slots: {}
	package: 'Platform-Services'!
!Terminal commentStamp!
I am UI interface service.

## API

    Terminal alert: 'Hey, there is a problem'.
    Terminal confirm: 'Affirmative?'.
    Terminal prompt: 'Your name:'.!

!Terminal class methodsFor: 'dialogs'!

alert: aString
	^ self current alert: aString
!

confirm: aString
	^ self current confirm: aString
!

prompt: aString
	^ self current prompt: aString
!

prompt: aString default: defaultString
	^ self current prompt: aString default: defaultString
! !

Service subclass: #Transcript
	slots: {}
	package: 'Platform-Services'!
!Transcript commentStamp!
I am a facade for Transcript actions.

I delegate actions to the currently registered transcript.

## API

    Transcript 
        show: 'hello world';
        cr;
        show: anObject.!

!Transcript class methodsFor: 'instance creation'!

open
	self current open
! !

!Transcript class methodsFor: 'printing'!

clear
	self current clear
!

cr
	self current show: String cr
!

inspect: anObject
	self show: anObject
!

show: anObject
	self current show: anObject
! !

!AssociativeCollection methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables |
	variables := Array streamContents: [ :stream |
		stream
			nextPut: '#self' -> self;
			nextPut: '#keys' -> self keys;
			nextPutAll: self associations ].
	anInspector
		setLabel: self shortenedPrintString;
		setVariables: variables
! !

!Collection methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables |
	variables := Array streamContents: [ :stream |
		| i |
		stream nextPut: '#self' -> self.
		i := 1.
		self do: [ :each |
			stream nextPut: i -> each.
			i := i + 1 ] ].
	anInspector
		setLabel: self shortenedPrintString;
		setVariables: variables
! !

!Date methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables |
	variables := Array streamContents: [ :stream |
		stream
			nextPut: '#self' -> self;
			nextPut: '#year' -> self year;
			nextPut: '#month' -> self month;
			nextPut: '#day' -> self day;
			nextPut: '#hours' -> self hours;
			nextPut: '#minutes' -> self minutes;
			nextPut: '#seconds' -> self seconds;
			nextPut: '#milliseconds' -> self milliseconds ].
	anInspector
		setLabel: self printString;
		setVariables: variables
! !

!JSObjectProxy methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables |
	variables := Array streamContents: [ :stream |
		stream
			nextPut: '#self' -> self jsObject;
			nextPutAll: (JSObjectProxy associationsOfProxy: self) ].
	anInspector setLabel: self printString.
	anInspector setVariables: variables
! !

!Object methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables |
	variables := Array streamContents: [ :stream |
		stream nextPut: '#self' -> self.
		self class allInstanceVariableNames do: [ :each |
			stream nextPut: each -> (self instVarNamed: each) ] ].
	anInspector
		setLabel: self printString;
		setVariables: variables
! !

!SequenceableCollection methodsFor: '*Platform-Services'!

do: aBlock displayingProgress: aString
	ProgressHandler 
		do: aBlock 
		on: self 
		displaying: aString
!

inspectOn: anInspector
	| variables |
	variables := Array streamContents: [ :stream |
		stream nextPut: '#self' -> self.
		self withIndexDo: [ :each :i |
			stream nextPut: i -> each ] ].
	anInspector
		setLabel: self shortenedPrintString;
		setVariables: variables
! !

!TMethodContext methodsFor: '*Platform-Services'!

inspectOn: anInspector
	| variables |
	variables := Array streamContents: [ :stream |
		stream
			nextPut: '#self' -> self;
			nextPut: '#home' -> self home;
			nextPut: '#receiver' -> self receiver;
			nextPut: '#selector' -> self selector;
			nextPut: '#locals' -> self locals.
	self class instanceVariableNames do: [ :each |
		stream nextPut: each -> (self instVarNamed: each) ] ].
	anInspector
		setLabel: self printString;
		setVariables: variables
! !

