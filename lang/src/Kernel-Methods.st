Smalltalk createPackage: 'Kernel-Methods'!
Object subclass: #BlockClosure
	slots: {#prototype. #length}
	package: 'Kernel-Methods'!
!BlockClosure commentStamp!
I represent a lexical closure.
I am is directly mapped to JavaScript Function.

## API

1. Evaluation

    My instances get evaluated with the `#value*` methods in the 'evaluating' protocol.

    Example: ` [ :x | x + 1 ] value: 3 "Answers 4" `

2. Control structures

    Blocks are used (together with `Boolean`) for control structures (methods in the `controlling` protocol).

    Example: `aBlock whileTrue: [ ... ]`

3. Error handling

    I provide the `#on:do:` method for handling exceptions.

    Example: ` aBlock on: MessageNotUnderstood do: [ :ex | ... ] `!

!BlockClosure methodsFor: 'accessing'!

compiledSource
	<inlineJS: 'return self.toString()'>
!

numArgs
	^ length
!

prototype
	^ prototype
!

receiver
	^ nil
! !

!BlockClosure methodsFor: 'controlling'!

whileFalse
	self whileFalse: []
!

whileFalse: aBlock
	<inlineJS: 'while(!!$core.assert($self._value())) {aBlock._value()}'>
!

whileTrue
	self whileTrue: []
!

whileTrue: aBlock
	<inlineJS: 'while($core.assert($self._value())) {aBlock._value()}'>
! !

!BlockClosure methodsFor: 'converting'!

asCompiledMethod: aString
	<inlineJS: 'return $core.method({selector:aString, fn:self});'>
!

asJavaScriptObject
	^ self
!

asJavaScriptSource
	<inlineJS: 'return $self.toString();'>
!

currySelf
	"Transforms [ :selfarg :x :y | stcode ] block
	which represents JS function (selfarg, x, y, ...) {jscode}
	into function (x, y, ...) {jscode} that takes selfarg from 'this'.
	IOW, it is usable as JS method and first arg takes the receiver."
	
	<inlineJS: '
		return function () {
			var args = [ this ];
			args.push.apply(args, arguments);
			return self.apply(null, args);
		}
	'>
!

provided
	"Returns JS proxy that allows to access 'static API', as in
	  require provided resolve: ...
	or
	  XMLHttpRequest provided DONE"
	
	^ JSObjectProxy on: self
! !

!BlockClosure methodsFor: 'error handling'!

on: anErrorClass do: aBlock
	"All exceptions thrown in the Smalltalk stack are cought.
	Convert all JS exceptions to JavaScriptException instances."
	
	^ self tryCatch: [ :error | | smalltalkError |
		smalltalkError := Smalltalk asSmalltalkException: error.
		(smalltalkError isKindOf: anErrorClass)
		ifTrue: [ aBlock value: smalltalkError ]
		ifFalse: [ smalltalkError pass ] ]
!

tryCatch: aBlock
	<inlineJS: '
		try {
			return $self._value();
		} catch(error) {
			// pass non-local returns undetected
			if (Array.isArray(error) && error.length === 1) throw error;
			return aBlock._value_(error);
		}
	'>
! !

!BlockClosure methodsFor: 'evaluating'!

applyTo: anObject arguments: aCollection
	<inlineJS: 'return self.apply(anObject, aCollection)'>
!

ensure: aBlock
	<inlineJS: 'try{return $self._value()}finally{aBlock._value()}'>
!

new
	"Use the receiver as a JS constructor.
	*Do not* use this method to instanciate Smalltalk objects!!"
	<inlineJS: 'return new self()'>
!

newValue: anObject
	^ self newWithValues: { anObject }
!

newValue: anObject value: anObject2
	^ self newWithValues: { anObject. anObject2 }.
!

newValue: anObject value: anObject2 value: anObject3
	^ self newWithValues: { anObject. anObject2. anObject3 }.
!

newWithValues: aCollection
	"Simulates JS new operator by combination of Object.create and .apply"
	<inlineJS: '
		var object = Object.create(self.prototype);
		var result = self.apply(object, aCollection);
		return typeof result === "object" ? result : object;
	'>
!

timeToRun
	"Answer the number of milliseconds taken to execute this block."

	^ Date millisecondsToRun: self
!

value
	<inlineJS: 'return self();'>
!

value: anArg
	<inlineJS: 'return self(anArg);'>
!

value: firstArg value: secondArg
	<inlineJS: 'return self(firstArg, secondArg);'>
!

value: firstArg value: secondArg value: thirdArg
	<inlineJS: 'return self(firstArg, secondArg, thirdArg);'>
!

valueWithPossibleArguments: aCollection
	<inlineJS: 'return self.apply(null, aCollection);'>
! !

!BlockClosure methodsFor: 'timeout/interval'!

fork
	ForkPool default fork: self
!

valueWithInterval: aNumber
	<inlineJS: '
		var interval = setInterval(self, aNumber);
		return $globals.Timeout._on_(interval);
	'>
!

valueWithTimeout: aNumber
	<inlineJS: '
		var timeout = setTimeout(self, aNumber);
		return $globals.Timeout._on_(timeout);
	'>
! !

!BlockClosure class methodsFor: 'instance creation'!

javaScriptConstructorFor: aPrototype initializingVia: aMethodBlock
	<inlineJS: '
		function Ctr () {
			aMethodBlock.apply(this, arguments);
		}
		Ctr.prototype = aPrototype;
		return Ctr;
	'>
! !

Object subclass: #CompiledMethod
	slots: {#args. #instantiateFn. #fn. #messageSends. #pragmas. #owner. #methodClass. #protocol. #referencedClasses. #selector. #source}
	package: 'Kernel-Methods'!
!CompiledMethod commentStamp!
I represent a class method of the system. I hold the source and compiled code of a class method.

## API
My instances can be accessed using `Behavior >> #methodAt:`

    Object methodAt: 'asString'

Source code access:

	(String methodAt: 'lines') source

Referenced classes:

	(String methodAt: 'lines') referencedClasses

Messages sent from an instance:
	
	(String methodAt: 'lines') messageSends!

!CompiledMethod methodsFor: 'accessing'!

arguments
	^ args ifNil: [ #() ]
!

basicPragmas
	^ pragmas ifNil: [ #() ]
!

category
	^ self protocol
!

fn
	^ fn
!

instantiateFn
	^ instantiateFn
!

instantiateFn: anObject
	instantiateFn := anObject
!

messageSends
	^ messageSends
!

methodClass
	^ methodClass
!

origin
	^ owner
!

package
	"Answer the package the receiver belongs to:
	- if it is an extension method, answer the corresponding package
	- else answer the `methodClass` package"
	
	^ self origin ifNotNil: [ :class | class packageOfProtocol: self protocol ]
!

pragmas
	^ self basicPragmas collect: [ :each | Message selector: each first arguments: each second ]
!

pragmas: anArrayOfMessages
	pragmas := anArrayOfMessages collect: [ :each | { each selector. each arguments } ]
!

protocol
	^ protocol ifNil: [ self defaultProtocol ]
!

protocol: aString
	| oldProtocol |
	oldProtocol := self protocol.
	protocol := aString.

	oldProtocol ifNotNil: [
		SystemAnnouncer current announce: (MethodMoved new
			method: self;
			oldProtocol: oldProtocol;
			yourself) ].

	self origin ifNotNil: [ :origin |
		origin organization addElement: aString.
		origin removeProtocolIfEmpty: oldProtocol ]
!

referencedClasses
	^ referencedClasses
!

selector
	^ selector
!

selector: aString
	selector := aString
!

source
	^ source ifNil: [ '' ]
!

source: aString
	source := aString
! !

!CompiledMethod methodsFor: 'browsing'!

browse
	Finder findMethod: self
! !

!CompiledMethod methodsFor: 'converting'!

asString
	^ self asStringForClass: self methodClass
!

asStringForClass: aClass
	| result |
	result := aClass name.
	self methodClass = aClass 
		ifFalse: [ result := result, ' (', (self methodClass ifNil: [ 'nil' ] ifNotNil: [ self methodClass name ]), ')'].
	(self origin = aClass | (self origin = self methodClass)) 
		ifFalse: [ result := result, ' /', (self origin ifNil: [ 'nil' ] ifNotNil: [ self origin name ]), '/'].
	^ result, ' >> ', self selector symbolPrintString
! !

!CompiledMethod methodsFor: 'defaults'!

defaultProtocol
	^ 'as yet unclassified'
! !

!CompiledMethod methodsFor: 'evaluating'!

sendTo: anObject arguments: aCollection
	^ self fn applyTo: anObject arguments: aCollection
! !

!CompiledMethod methodsFor: 'testing'!

isCompiledMethod
	^ true
!

isOverridden
    self methodClass allSubclassesDo: [ :each |
	    (each includesSelector: selector)
        	ifTrue: [ ^ true ] ].
	^ false
!

isOverride
	| superclass |
    
    superclass := self methodClass superclass.
	superclass ifNil: [ ^ false ].
	
    ^ (self methodClass superclass lookupSelector: self selector) notNil
! !

Object subclass: #ForkPool
	slots: {#poolSize. #maxPoolSize. #queue. #worker}
	package: 'Kernel-Methods'!
!ForkPool commentStamp!
I am responsible for handling forked blocks.
The pool size sets the maximum concurrent forked blocks.

## API

The default instance is accessed with `#default`.
The maximum concurrent forked blocks can be set with `#maxPoolSize:`.

Forking is done via `BlockClosure >> #fork`!

!ForkPool methodsFor: 'accessing'!

maxPoolSize
	^ maxPoolSize ifNil: [ self defaultMaxPoolSize ]
!

maxPoolSize: anInteger
	maxPoolSize := anInteger
! !

!ForkPool methodsFor: 'actions'!

fork: aBlock
	poolSize < self maxPoolSize ifTrue: [ self addWorker ].
	queue nextPut: aBlock
! !

!ForkPool methodsFor: 'defaults'!

defaultMaxPoolSize
	^ self class defaultMaxPoolSize
! !

!ForkPool methodsFor: 'initialization'!

initialize
	super initialize.
	
	poolSize := 0.
	queue := Queue new.
	worker := self makeWorker
!

makeWorker
	| sentinel |
	sentinel := Object new.
	^ [ | block |
		poolSize := poolSize - 1.
		block := queue nextIfAbsent: [ sentinel ].
		block == sentinel ifFalse: [
			[ block value ] ensure: [ self addWorker ] ]]
! !

!ForkPool methodsFor: 'private'!

addWorker
	worker valueWithTimeout: 0.
	poolSize := poolSize + 1
! !

ForkPool class slots: {#default}!

!ForkPool class methodsFor: 'accessing'!

default
	^ default ifNil: [ default := self new ]
!

defaultMaxPoolSize
	^ 100
!

resetDefault
	default := nil
! !

Object subclass: #Message
	slots: {#selector. #arguments}
	package: 'Kernel-Methods'!
!Message commentStamp!
In general, the system does not use instances of me for efficiency reasons.
However, when a message is not understood by its receiver, the interpreter will make up an instance of it in order to capture the information involved in an actual message transmission.
This instance is sent it as an argument with the message `#doesNotUnderstand:` to the receiver.

See boot.js, `messageNotUnderstood` and its counterpart `Object >> #doesNotUnderstand:`

## API

Besides accessing methods, `#sendTo:` provides a convenient way to send a message to an object.!

!Message methodsFor: 'accessing'!

arguments
	^ arguments
!

arguments: anArray
	arguments := anArray
!

selector
	^ selector
!

selector: aString
	selector := aString
! !

!Message methodsFor: 'actions'!

sendTo: anObject
	^ anObject perform: self selector withArguments: self arguments
! !

!Message methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream
		nextPutAll: '(';
		nextPutAll: self selector;
		nextPutAll: ')'
! !

!Message class methodsFor: 'dnu handling'!

selector: aString arguments: anArray notUnderstoodBy: anObject
	"Creates the message and passes it to #doesNotUnderstand:.
	Used by kernel to handle MNU."
	^ anObject doesNotUnderstand:
		(self selector: aString arguments: anArray)
! !

!Message class methodsFor: 'instance creation'!

selector: aString arguments: anArray
	^ self new
		selector: aString;
		arguments: anArray;
		yourself
! !

Object subclass: #MessageSend
	slots: {#receiver. #message}
	package: 'Kernel-Methods'!
!MessageSend commentStamp!
I encapsulate message sends to objects. Arguments can be either predefined or supplied when the message send is performed. 

## API

Use `#value` to perform a message send with its predefined arguments and `#value:*` if additonal arguments have to supplied.!

!MessageSend methodsFor: 'accessing'!

arguments
	^ message arguments
!

arguments: anArray
	message arguments: anArray
!

receiver
	^ receiver
!

receiver: anObject
	receiver := anObject
!

selector
	^ message selector
!

selector: aString
	message selector: aString
! !

!MessageSend methodsFor: 'evaluating'!

value
	^ message sendTo: self receiver
!

value: anObject
	^ message 
		arguments: { anObject };
		sendTo: self receiver
!

value: firstArgument value: secondArgument
	^ message 
		arguments: { firstArgument. secondArgument };
		sendTo: self receiver
!

value: firstArgument value: secondArgument value: thirdArgument
	^ message 
		arguments: { firstArgument. secondArgument. thirdArgument };
		sendTo: self receiver
!

valueWithPossibleArguments: anArray
	self arguments: anArray.
	^ self value
! !

!MessageSend methodsFor: 'initialization'!

initialize
	super initialize.
	message := Message new
! !

!MessageSend methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream
		nextPutAll: '(';
		nextPutAll: self receiver;
		nextPutAll: ' >> ';
		nextPutAll: self selector;
		nextPutAll: ')'
! !

Object subclass: #MethodContext
	slots: {#receiver. #evaluatedSelector. #homeContext. #index. #locals. #outerContext. #selector. #sendIdx. #supercall}
	package: 'Kernel-Methods'!
!MethodContext commentStamp!
I hold all the dynamic state associated with the execution of either a method activation resulting from a message send. I am used to build the call stack while debugging.

My instances are JavaScript `SmalltalkMethodContext` objects defined in `boot.js`.!

!MethodContext methodsFor: 'accessing'!

basicReceiver
	^ receiver
!

evaluatedSelector
	^ evaluatedSelector
!

home
	^ homeContext
!

index
	^ index ifNil: [ 0 ]
!

locals
	^ locals
!

outerContext
	^ outerContext ifNil: [ self home ]
!

selector
	^ selector ifNotNil: [ Smalltalk core js2st: selector ]
!

sendIndexes
	^ sendIdx
!

stubHere
	homeContext := JSObjectProxy undefined
!

supercall
	^ supercall = true
! !

!MethodContext methodsFor: 'error handling'!

stubToAtMost: anInteger
	| context |
	context := self.
	anInteger timesRepeat: [ context := context ifNotNil: [ context home ] ].
	context ifNotNil: [ context stubHere ]
! !

Object subclass: #NativeFunction
	slots: {}
	package: 'Kernel-Methods'!
!NativeFunction commentStamp!
I am a wrapper around native functions, such as `WebSocket`.
For 'normal' functions (whose constructor is the JavaScript `Function` object), use `BlockClosure`.

## API

See the class-side `instance creation` methods for instance creation.

Created instances will most probably be instance of `JSObjectProxy`.

## Usage example:

	| ws |
	ws := NativeFunction constructor: 'WebSocket' value: 'ws://localhost'.
	ws at: 'onopen' put: [ ws send: 'hey there from Amber' ]!

!NativeFunction class methodsFor: 'function calling'!

functionNamed: aString
	<inlineJS: '
		var nativeFunc=$globals.Platform._globals[aString];
		return nativeFunc();
	'>
!

functionNamed: aString value: anObject
	<inlineJS: '
		var nativeFunc=$globals.Platform._globals()[aString];
		return nativeFunc(anObject);
	'>
!

functionNamed: aString value: anObject value: anObject2
	<inlineJS: '
		var nativeFunc=$globals.Platform._globals()[aString];
		return nativeFunc(anObject,anObject2);
	'>
!

functionNamed: aString value: anObject value: anObject2 value: anObject3
	<inlineJS: '
		var nativeFunc=$globals.Platform._globals()[aString];
		return nativeFunc(anObject,anObject2, anObject3);
	'>
!

functionNamed: aString valueWithArgs: args
	<inlineJS: '
		var nativeFunc=$globals.Platform._globals()[aString];
		return Function.prototype.apply.call(nativeFunc, null, args);
	'>
!

functionOf: nativeFunc
	<inlineJS: '
		return nativeFunc();
	'>
!

functionOf: nativeFunc value: anObject
	<inlineJS: '
		return nativeFunc(anObject);
	'>
!

functionOf: nativeFunc value: anObject value: anObject2
	<inlineJS: '
		return nativeFunc(anObject,anObject2);
	'>
!

functionOf: nativeFunc value: anObject value: anObject2 value: anObject3
	<inlineJS: '
		return nativeFunc(anObject,anObject2, anObject3);
	'>
!

functionOf: nativeFunc valueWithArgs: args
	<inlineJS: '
		return Function.prototype.apply.call(nativeFunc, null, args);
	'>
! !

!NativeFunction class methodsFor: 'instance creation'!

constructorNamed: aString
	<inlineJS: '
		var nativeFunc=$globals.Platform._globals()[aString];
		return new nativeFunc();
	'>
!

constructorNamed: aString value: anObject
	<inlineJS: '
		var nativeFunc=$globals.Platform._globals()[aString];
		return new nativeFunc(anObject);
	'>
!

constructorNamed: aString value: anObject value: anObject2
	<inlineJS: '
		var nativeFunc=$globals.Platform._globals[aString];
		return new nativeFunc(anObject,anObject2);
	'>
!

constructorNamed: aString value: anObject value: anObject2 value: anObject3
	<inlineJS: '
		var nativeFunc=$globals.Platform._globals[aString];
		return new nativeFunc(anObject,anObject2, anObject3);
	'>
!

constructorOf: nativeFunc
	<inlineJS: '
		return new nativeFunc();
	'>
!

constructorOf: nativeFunc value: anObject
	<inlineJS: '
		return new nativeFunc(anObject);
	'>
!

constructorOf: nativeFunc value: anObject value: anObject2
	<inlineJS: '
		return new nativeFunc(anObject,anObject2);
	'>
!

constructorOf: nativeFunc value: anObject value: anObject2 value: anObject3
	<inlineJS: '
		return new nativeFunc(anObject,anObject2, anObject3);
	'>
! !

!NativeFunction class methodsFor: 'method calling'!

methodOf: nativeFunc this: thisObject
	<inlineJS: '
		return Function.prototype.call.call(nativeFunc, thisObject);
	'>
!

methodOf: nativeFunc this: thisObject value: anObject
	<inlineJS: '
		return Function.prototype.call.call(nativeFunc, thisObject, anObject);
	'>
!

methodOf: nativeFunc this: thisObject value: anObject value: anObject2
	<inlineJS: '
		return Function.prototype.call.call(nativeFunc, thisObject,anObject,anObject2);
	'>
!

methodOf: nativeFunc this: thisObject value: anObject value: anObject2 value: anObject3
	<inlineJS: '
		return Function.prototype.call.call(nativeFunc, thisObject,anObject,anObject2, anObject3);
	'>
!

methodOf: nativeFunc this: thisObject valueWithArgs: args
	<inlineJS: '
		return Function.prototype.apply.call(nativeFunc, thisObject, args);
	'>
! !

!NativeFunction class methodsFor: 'testing'!

exists: aString
	^ Platform includesGlobal: aString
!

isNativeFunction: anObject
	<inlineJS: 'return typeof anObject === "function"'>
! !

Trait named: #TMethodContext
	package: 'Kernel-Methods'!

!TMethodContext methodsFor: 'accessing'!

basicReceiver
	self subclassResponsibility
!

findContextSuchThat: testBlock
	"Search self and my sender chain for first one that satisfies `testBlock`.  
	Answer `nil` if none satisfy"

	| context |
	
	context := self.
	[ context isNil] whileFalse: [
		(testBlock value: context) 
			ifTrue: [ ^ context ].
		context := context outerContext ].

	^ nil
!

home
	self subclassResponsibility
!

index
	self subclassResponsibility
!

locals
	self subclassResponsibility
!

method
	| method lookupClass receiverClass supercall |
	
	self methodContext ifNil: [ ^ nil ].

	receiverClass := self methodContext receiver class.
	method := receiverClass lookupSelector: self methodContext selector.
	supercall := self outerContext 
		ifNil: [ false ]
		ifNotNil: [ :outer | outer supercall ].

	^ supercall
		ifFalse: [ method ]
		ifTrue: [ method methodClass superclass lookupSelector: self methodContext selector ]
!

methodContext
	self isBlockContext ifFalse: [ ^ self ].
	
	^ self outerContext ifNotNil: [ :outer |
		outer methodContext ]
!

outerContext
	self subclassResponsibility
!

receiver
	^ (self isBlockContext and: [ self outerContext notNil ])
		ifTrue: [ self outerContext receiver ]
		ifFalse: [ self basicReceiver ]
!

selector
	self subclassResponsibility
!

sendIndexes
	self subclassResponsibility
!

supercall
	self subclassResponsibility
! !

!TMethodContext methodsFor: 'converting'!

asString
	^ self isBlockContext
		ifTrue: [ 'a block (in ', self methodContext asString, ')' ]
		ifFalse: [ self method
			ifNotNil: [ :method | method asStringForClass: self receiver class ]
			ifNil: [ 'missing method ', self selector symbolPrintString ] ]
! !

!TMethodContext methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream 
		nextPutAll: '(';
		nextPutAll: self asString;
		nextPutAll: ')'
! !

!TMethodContext methodsFor: 'testing'!

isBlockContext
	"Block context do not have selectors."
	
	^ self selector isNil
! !

Object subclass: #Timeout
	slots: {#rawTimeout}
	package: 'Kernel-Methods'!
!Timeout commentStamp!
I am wrapping the returns from `set{Timeout,Interval}`.

## Motivation

Number suffices in browsers, but node.js returns an object.!

!Timeout methodsFor: 'accessing'!

rawTimeout: anObject
	rawTimeout := anObject
! !

!Timeout methodsFor: 'timeout/interval'!

clearInterval
	<inlineJS: '
		var interval = $self.rawTimeout;
		clearInterval(interval);
	'>
!

clearTimeout
	<inlineJS: '
		var timeout = $self.rawTimeout;
		clearTimeout(timeout);
	'>
! !

!Timeout class methodsFor: 'instance creation'!

on: anObject
	^ self new rawTimeout: anObject; yourself
! !

MethodContext setTraitComposition: {TMethodContext} asTraitComposition!
! !

