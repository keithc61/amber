Smalltalk createPackage: 'Kernel-Objects'!
nil subclass: #ProtoObject
	slots: {}
	package: 'Kernel-Objects'!
!ProtoObject commentStamp!
I implement the basic behavior required for any object in Amber.

In most cases, subclassing `ProtoObject` is wrong and `Object` should be used instead. However subclassing `ProtoObject` can be useful in some special cases like proxy implementations.!

!ProtoObject methodsFor: 'accessing'!

class
	<inlineJS: 'return $self.a$cls'>
!

identityHash
	<inlineJS: '
		self._deprecatedAPI();
		var hash=self.identityHash;
		if (hash) return hash;
		hash=$core.nextId();
		Object.defineProperty(self, ''identityHash'', {value:hash});
		return hash;
	'>
!

instVarNamed: aString
	<inlineJS: 'return $self[aString]'>
!

instVarNamed: aString put: anObject
	<inlineJS: '$self[aString] = anObject'>
!

yourself
	^ self
! !

!ProtoObject methodsFor: 'comparing'!

= anObject
	^ self == anObject
!

== anObject
<inlineJS: 'return self === anObject'>
!

~= anObject
	^ (self = anObject) = false
!

~~ anObject
	^ (self == anObject) = false
! !

!ProtoObject methodsFor: 'converting'!

asString
	^ self printString
! !

!ProtoObject methodsFor: 'error handling'!

doesNotUnderstand: aMessage
	MessageNotUnderstood new
		receiver: self;
		message: aMessage;
		signal
! !

!ProtoObject methodsFor: 'evaluating'!

evaluate: aString on: anEvaluator
	^ anEvaluator evaluate: aString receiver: self
! !

!ProtoObject methodsFor: 'initialization'!

initialize
! !

!ProtoObject methodsFor: 'inspecting'!

inspect
	Inspector inspect: self
!

inspectOn: anInspector
! !

!ProtoObject methodsFor: 'message handling'!

perform: aString
	^ self perform: aString withArguments: #()
!

perform: aString with: anObject
	<inlineJS: 'return $core.send2(self, aString, [anObject])'>
!

perform: aString withArguments: aCollection
	<inlineJS: 'return $core.send2(self, aString, aCollection)'>
! !

!ProtoObject methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: (self class name first isVowel
		ifTrue: [ 'an ' ]
		ifFalse: [ 'a ' ]).
	aStream nextPutAll: self class name
!

printString
	^ String streamContents: [ :str | 
		self printOn: str ]
! !

!ProtoObject methodsFor: 'testing'!

ifNil: aBlock
	"inlined in the Compiler"
	^ self
!

ifNil: aBlock ifNotNil: anotherBlock
	"inlined in the Compiler"
	^ anotherBlock value: self
!

ifNotNil: aBlock
	"inlined in the Compiler"
	^ aBlock value: self
!

ifNotNil: aBlock ifNil: anotherBlock
	"inlined in the Compiler"
	^ aBlock value: self
!

isKindOf: aClass
	^ (self isMemberOf: aClass) or: [ self class inheritsFrom: aClass ]
!

isNil
	^ false
!

notNil
	^ true
! !

!ProtoObject class methodsFor: 'initialization'!

initialize
! !

ProtoObject subclass: #Object
	slots: {}
	package: 'Kernel-Objects'!
!Object commentStamp!
**I am the root of the Smalltalk class system**. With the exception of unual subclasses of `ProtoObject`, all other classes in the system are subclasses of me.

I provide default behavior common to all normal objects (some of it inherited from `ProtoObject`), such as:

- accessing
- copying
- comparison
- error handling
- message sending
- reflection

Also utility messages that all objects should respond to are defined here.

I have no instance variable.

##Access

Instance variables can be accessed with `#instVarAt:` and `#instVarAt:put:`. `#instanceVariableNames` answers a collection of all instance variable names.
Accessing JavaScript properties of an object is done through `#basicAt:`, `#basicAt:put:` and `basicDelete:`.

##Copying

Copying an object is handled by `#copy` and `#deepCopy`. The first one performs a shallow copy of the receiver, while the second one performs a deep copy.
The hook method `#postCopy` can be overriden in subclasses to copy fields as necessary to complete the full copy. It will be sent by the copy of the receiver.

##Comparison

I understand equality `#=` and identity `#==` comparison.

##Error handling

- `#halt` is the typical message to use for inserting breakpoints during debugging.
- `#error:` throws a generic error exception
- `#doesNotUnderstand:` handles the fact that there was an attempt to send the given message to the receiver but the receiver does not understand this message.
	Overriding this message can be useful to implement proxies for example.!

!Object methodsFor: 'accessing'!

basicAt: aString
	<inlineJS: 'return self[aString]'>
!

basicAt: aString put: anObject
	<inlineJS: 'return self[aString] = anObject'>
!

basicDelete: aString
	<inlineJS: 'delete self[aString]; return aString'>
!

divideBySelfToNumber: aNumber
	self error: 'I am not a number.'
!

divisionRemainderBySelfToNumber: aNumber
	self error: 'I am not a number.'
!

minusSelfToNumber: aNumber
	self error: 'I am not a number.'
!

plusSelfToNumber: aNumber
	self error: 'I am not a number.'
!

size
	self error: 'Object not indexable'
!

timesSelfToNumber: aNumber
	self error: 'I am not a number.'
! !

!Object methodsFor: 'browsing'!

browse
	Finder findClass: self class
! !

!Object methodsFor: 'comparing'!

isNumberEqualToSelf: aNumber
	^ false
!

isNumberGreaterThanOrEqualToSelf: aNumber
	^ false
!

isNumberGreaterThanSelf: aNumber
	^ false
!

isNumberLessThanOrEqualToSelf: aNumber
	^ false
!

isNumberLessThanSelf: aNumber
	^ false
!

isStringEqualToSelf: aString
	^ false
!

isStringGreaterThanOrEqualToSelf: aString
	^ false
!

isStringGreaterThanSelf: aString
	^ false
!

isStringLessThanOrEqualToSelf: aString
	^ false
!

isStringLessThanSelf: aString
	^ false
! !

!Object methodsFor: 'converting'!

-> anObject
	^ Association key: self value: anObject
!

andSelfToNumber: aNumber
	self error: 'I am not a number.'
!

asJSONString
	^ JSON stringify: self asJavaScriptObject
!

asJavaScriptObject
	| variables |
	self deprecatedAPI: 'Implement domain-specific #asJavaScriptObject on your classes instead.'.
	variables := HashedCollection new.
	self class allInstanceVariableNames do: [ :each |
		variables at: each put: (self instVarNamed: each) asJavaScriptObject ].
	^ variables
!

asJavaScriptSource
	self deprecatedAPI: 'Implement domain-specific #asJavaScriptSource on your classes instead.'.
	^ self asString
!

orSelfToNumber: aNumber
	self error: 'I am not a number.'
!

xorSelfToNumber: aNumber
	self error: 'I am not a number.'
! !

!Object methodsFor: 'copying'!

appendToString: aString
	self error: 'Cannot add self to a string.'
!

copy
	^ self shallowCopy postCopy
!

deepCopy
	<inlineJS: '
		var copy = self.a$cls._new();
		Object.keys(self).forEach(function (i) {
			copy[i] = $recv(self[i])._deepCopy();
		});
		return copy;
	'>
!

postCopy
!

shallowCopy
	<inlineJS: '
		var copy = self.a$cls._new();
		Object.keys(self).forEach(function(i) {
			copy[i] = self[i];
		});
		return copy;
	'>
! !

!Object methodsFor: 'error handling'!

deprecatedAPI
	"Just a simple way to deprecate methods.
	#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,
	but it could in the future."
	console warn: thisContext home asString, ' is deprecated!! (in ', thisContext home home asString, ')'.
!

deprecatedAPI: aString
	"Just a simple way to deprecate methods.
	#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,
	but it could in the future."
	console warn: thisContext home asString, ' is deprecated!! (in ', thisContext home home asString, ')'.
	console warn: aString
!

error: aString
	Error signal: aString
!

halt
	Halt signal
!

shouldNotImplement
	self error: 'This method should not be implemented in ', self class name
!

subclassResponsibility
	self error: 'This method is a responsibility of a subclass'
! !

!Object methodsFor: 'evaluating'!

in: aValuable
	^ aValuable value: self
!

value
	<inlineJS: 'return self.valueOf()'>
! !

!Object methodsFor: 'message handling'!

basicPerform: aString
	^ self basicPerform: aString withArguments: #()
!

basicPerform: aString withArguments: aCollection
	<inlineJS: 'return self[aString].apply(self, aCollection);'>
! !

!Object methodsFor: 'streaming'!

putOn: aStream
	aStream nextPut: self
! !

!Object methodsFor: 'testing'!

isImmutable
	^ false
!

isMemberOf: aClass
	^ self class = aClass
!

isParseFailure
	^ false
!

respondsTo: aSelector
	^ self class canUnderstand: aSelector
! !

!Object class methodsFor: 'helios'!

accessorProtocolWith: aGenerator
	aGenerator accessorProtocolForObject
!

accessorsSourceCodesWith: aGenerator
	aGenerator accessorsForObject
!

initializeProtocolWith: aGenerator
	aGenerator initializeProtocolForObject
!

initializeSourceCodesWith: aGenerator
	aGenerator initializeForObject
! !

!Object class methodsFor: 'initialization'!

initialize
	"no op"
! !

Object subclass: #Boolean
	slots: {}
	package: 'Kernel-Objects'!
!Boolean commentStamp!
I define the protocol for logic testing operations and conditional control structures for the logical values (see the `controlling` protocol).

I have two instances, `true` and `false`.

I am directly mapped to JavaScript Boolean. The `true` and `false` objects are the JavaScript boolean objects.

## Usage Example:

    aBoolean not ifTrue: [ ... ] ifFalse: [ ... ]!

!Boolean methodsFor: 'comparing'!

== aBoolean
<inlineJS: '
	if (typeof aBoolean === "boolean") return (self == true) === aBoolean;
	else if (aBoolean !!= null && typeof aBoolean === "object") return (self == true) === aBoolean.valueOf();
	else return false;
'>
! !

!Boolean methodsFor: 'controlling'!

& aBoolean
	<inlineJS: '
		if(self == true) {
		return aBoolean;
		} else {
		return false;
		}
	'>
!

and: aBlock
	^ self
		ifTrue: "aBlock" [ aBlock value ]
		ifFalse: [ false ]
!

ifFalse: aBlock
	"inlined in the Compiler"
	^ self ifTrue: [] ifFalse: aBlock
!

ifFalse: aBlock ifTrue: anotherBlock
	"inlined in the Compiler"
	^ self ifTrue: anotherBlock ifFalse: aBlock
!

ifTrue: aBlock
	"inlined in the Compiler"
	^ self ifTrue: aBlock ifFalse: []
!

ifTrue: aBlock ifFalse: anotherBlock
	"inlined in the Compiler"
	<inlineJS: '
		if(self == true) {
		return aBlock._value();
		} else {
		return anotherBlock._value();
		}
	'>
!

not
	^ self = false
!

or: aBlock
	^ self
		ifTrue: [ true ]
		ifFalse: "aBlock" [ aBlock value ]
!

| aBoolean
	<inlineJS: '
		if(self == true) {
		return true;
		} else {
		return aBoolean;
		}
	'>
! !

!Boolean methodsFor: 'converting'!

asBit
	^ self ifTrue: [ 1 ] ifFalse: [ 0 ]
!

asJavaScriptObject
	^ self
!

asJavaScriptSource
	^ self asString
!

asString
	<inlineJS: 'return self.toString()'>
! !

!Boolean methodsFor: 'copying'!

deepCopy
	^ self
!

shallowCopy
	^ self
! !

!Boolean methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self asString
! !

!Boolean methodsFor: 'testing'!

isBoolean
	^ true
!

isImmutable
	^ true
! !

Object subclass: #Date
	slots: {}
	package: 'Kernel-Objects'!
!Date commentStamp!
I am used to work with both dates and times. Therefore `Date today` and `Date now` are both valid in
Amber and answer the same date object.

Date directly maps to the `Date()` JavaScript constructor, and Amber date objects are JavaScript date objects.

## API

The class-side `instance creation` protocol contains some convenience methods for creating date/time objects such as `#fromSeconds:`.

Arithmetic and comparison is supported (see the `comparing` and `arithmetic` protocols).

The `converting` protocol provides convenience methods for various convertions (to numbers, strings, etc.).!

!Date methodsFor: 'accessing'!

day
	^ self dayOfWeek
!

day: aNumber
	self dayOfWeek: aNumber
!

dayOfMonth
	<inlineJS: 'return self.getDate()'>
!

dayOfMonth: aNumber
	<inlineJS: 'self.setDate(aNumber)'>
!

dayOfWeek
	<inlineJS: 'return self.getDay() + 1'>
!

dayOfWeek: aNumber
	<inlineJS: 'return self.setDay(aNumber - 1)'>
!

hours
	<inlineJS: 'return self.getHours()'>
!

hours: aNumber
	<inlineJS: 'self.setHours(aNumber)'>
!

milliseconds
	<inlineJS: 'return self.getMilliseconds()'>
!

milliseconds: aNumber
	<inlineJS: 'self.setMilliseconds(aNumber)'>
!

minutes
	<inlineJS: 'return self.getMinutes()'>
!

minutes: aNumber
	<inlineJS: 'self.setMinutes(aNumber)'>
!

month
	<inlineJS: 'return self.getMonth() + 1'>
!

month: aNumber
	<inlineJS: 'self.setMonth(aNumber - 1)'>
!

seconds
	<inlineJS: 'return self.getSeconds()'>
!

seconds: aNumber
	<inlineJS: 'self.setSeconds(aNumber)'>
!

time
	<inlineJS: 'return self.getTime()'>
!

time: aNumber
	<inlineJS: 'self.setTime(aNumber)'>
!

year
	<inlineJS: 'return self.getFullYear()'>
!

year: aNumber
	<inlineJS: 'self.setFullYear(aNumber)'>
! !

!Date methodsFor: 'arithmetic'!

+ aNumber
	<inlineJS: 'return new Date($self.getTime() + aNumber)'>
!

- aDate
	<inlineJS: 'return self - aDate'>
! !

!Date methodsFor: 'comparing'!

< aDate
	<inlineJS: 'return self < aDate'>
!

<= aDate
	<inlineJS: 'return self <= aDate'>
!

= aDate
	^ (aDate class == self class) and: [ self asMilliseconds == aDate asMilliseconds ]
!

> aDate
	<inlineJS: 'return self > aDate'>
!

>= aDate
	<inlineJS: 'return self >= aDate'>
! !

!Date methodsFor: 'converting'!

asDateString
	<inlineJS: 'return self.toDateString()'>
!

asLocaleString
	<inlineJS: 'return self.toLocaleString()'>
!

asMilliseconds
	^ self time
!

asNumber
	^ self asMilliseconds
!

asString
	<inlineJS: 'return self.toString()'>
!

asTimeString
	<inlineJS: 'return self.toTimeString()'>
! !

!Date methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self asString
! !

!Date class methodsFor: 'accessing'!

classTag
	"Returns a tag or general category for this class.
	Typically used to help tools do some reflection.
	Helios, for example, uses this to decide what icon the class should display."
	
	^ 'magnitude'
! !

!Date class methodsFor: 'instance creation'!

fromMilliseconds: aNumber
	^ self new: aNumber
!

fromSeconds: aNumber
	^ self fromMilliseconds: aNumber * 1000
!

fromString: aString
	"Example: Date fromString('2011/04/15 00:00:00')"
	^ self new: aString
!

millisecondsToRun: aBlock
	| t |
	t := Date now.
	aBlock value.
	^ Date now - t
!

new: anObject
	<inlineJS: 'return new Date(anObject)'>
!

now
	^ self today
!

today
	^ self new
! !

Object subclass: #Number
	slots: {}
	package: 'Kernel-Objects'!
!Number commentStamp!
I am the Amber representation for all numbers.
I am directly mapped to JavaScript Number.

## API

I provide all necessary methods for arithmetic operations, comparison, conversion and so on with numbers.

My instances can also be used to evaluate a block a fixed number of times:

	5 timesRepeat: [ Transcript show: 'This will be printed 5 times'; cr ].
	
	1 to: 5 do: [ :aNumber| Transcript show: aNumber asString; cr ].
	
	1 to: 10 by: 2 do: [ :aNumber| Transcript show: aNumber asString; cr ].!

!Number methodsFor: 'arithmetic'!

* aNumber
	<inlineJS: 'return typeof aNumber === "number" ?
		self * aNumber :
		$recv(aNumber)._timesSelfToNumber_(self)'>
!

+ aNumber
	<inlineJS: 'return typeof aNumber === "number" ?
		self + aNumber :
		$recv(aNumber)._plusSelfToNumber_(self)'>
!

- aNumber
	<inlineJS: 'return typeof aNumber === "number" ?
		self - aNumber :
		$recv(aNumber)._minusSelfToNumber_(self)'>
!

/ aNumber
	<inlineJS: 'return typeof aNumber === "number" ?
		self / aNumber :
		$recv(aNumber)._divideBySelfToNumber_(self)'>
!

// aNumber
	^ (self / aNumber) floor
!

\\ aNumber
	<inlineJS: 'return typeof aNumber === "number" ?
		self % aNumber :
		$recv(aNumber)._divisionRemainderBySelfToNumber_(self)'>
!

abs
	<inlineJS: 'return Math.abs(self);'>
!

divideBySelfToNumber: aNumber
	<inlineJS: 'return aNumber / self'>
!

divisionRemainderBySelfToNumber: aNumber
	<inlineJS: 'return aNumber % self'>
!

max: aNumber
	<inlineJS: 'return Math.max(self, aNumber);'>
!

min: aNumber
	<inlineJS: 'return Math.min(self, aNumber);'>
!

min: aMin max: aMax
	^ (self min: aMin) max: aMax
!

minusSelfToNumber: aNumber
	<inlineJS: 'return aNumber - self'>
!

negated
	^ 0 - self
!

plusSelfToNumber: aNumber
	<inlineJS: 'return aNumber + self'>
!

timesSelfToNumber: aNumber
	<inlineJS: 'return aNumber * self'>
! !

!Number methodsFor: 'comparing'!

< aNumber
<inlineJS: 'return typeof aNumber === "number" ?
	Number(self) < aNumber :
	$recv(aNumber)._isNumberLessThanSelf_(self)'>
!

<= aNumber
<inlineJS: 'return typeof aNumber === "number" ?
	Number(self) <= aNumber :
	$recv(aNumber)._isNumberLessThanOrEqualToSelf_(self)'>
!

== aNumber
<inlineJS: 'return typeof aNumber === "number" ?
	Number(self) === aNumber :
	$recv(aNumber)._isNumberEqualToSelf_(self)'>
!

> aNumber
<inlineJS: 'return typeof aNumber === "number" ?
	Number(self) > aNumber :
	$recv(aNumber)._isNumberGreaterThanSelf_(self)'>
!

>= aNumber
<inlineJS: 'return typeof aNumber === "number" ?
	Number(self) >= aNumber :
	$recv(aNumber)._isNumberGreaterThanOrEqualToSelf_(self)'>
!

isNumberEqualToSelf: aNumber
	<inlineJS: 'return aNumber === Number(self)'>
!

isNumberGreaterThanOrEqualToSelf: aNumber
	<inlineJS: 'return aNumber >= self'>
!

isNumberGreaterThanSelf: aNumber
	<inlineJS: 'return aNumber > self'>
!

isNumberLessThanOrEqualToSelf: aNumber
	<inlineJS: 'return aNumber <= self'>
!

isNumberLessThanSelf: aNumber
	<inlineJS: 'return aNumber < self'>
! !

!Number methodsFor: 'converting'!

& aNumber
	^ self bitAnd: aNumber
!

@ aNumber
	^ Point x: self y: aNumber
!

andSelfToNumber: aNumber
	<inlineJS: 'return aNumber & self'>
!

asJavaScriptObject
	^ self
!

asJavaScriptSource
	^ '(', self printString, ')'
!

asNumber
	^ self
!

asPoint
	^ Point x: self y: self
!

asString
	<inlineJS: 'return String(self)'>
!

atRandom
	^ (Random new next * self) truncated + 1
!

bitAnd: aNumber
	<inlineJS: 'return typeof aNumber === "number" ?
		self & aNumber :
		$recv(aNumber)._andSelfToNumber_(self)'>
!

bitNot
	<inlineJS: 'return ~self'>
!

bitOr: aNumber
	<inlineJS: 'return typeof aNumber === "number" ?
		self | aNumber :
		$recv(aNumber)._orSelfToNumber_(self)'>
!

bitXor: aNumber
	<inlineJS: 'return typeof aNumber === "number" ?
		self ^ aNumber :
		$recv(aNumber)._xorSelfToNumber_(self)'>
!

ceiling
	<inlineJS: 'return Math.ceil(self);'>
!

degreesToRadians
	^ self * Number radiansPerDegree
!

floor
	<inlineJS: 'return Math.floor(self);'>
!

orSelfToNumber: aNumber
	<inlineJS: 'return aNumber | self'>
!

printStringBase: aBase
	<inlineJS: 'return self.toString(aBase)'>
!

radiansToDegrees
	^ self / Number radiansPerDegree
!

rounded
	<inlineJS: 'return Math.round(self);'>
!

to: aNumber
	| array first last count |
	first := self truncated.
	last := aNumber truncated + 1.
	count := 1.
	array := Array new.
	(last - first) timesRepeat: [
		array at: count put: first.
		count := count + 1.
		first := first + 1 ].
	^ array
!

to: stop by: step
	| array value pos |
	value := self.
	array := Array new.
	pos := 1.
	step = 0 ifTrue: [ self error: 'step must be non-zero' ].
	step < 0
		ifTrue: [ [ value >= stop ] whileTrue: [
					array at: pos put: value.
					pos := pos + 1.
					value := value + step ]]
		ifFalse: [ [ value <= stop ] whileTrue: [
					array at: pos put: value.
				pos := pos + 1.
					value := value + step ]].
	^ array
!

truncated
	<inlineJS: '
		if(self >= 0) {
			return Math.floor(self);
		} else {
			return Math.floor(self * (-1)) * (-1);
		};
	'>
!

xorSelfToNumber: aNumber
	<inlineJS: 'return aNumber ^ self'>
!

| aNumber
	^ self bitOr: aNumber
! !

!Number methodsFor: 'copying'!

copy
	^ self
!

deepCopy
	^ self copy
! !

!Number methodsFor: 'enumerating'!

timesRepeat: aBlock
	| count |
	count := 1.
	[ count > self ] whileFalse: [
		aBlock value.
		count := count + 1 ]
!

to: stop by: step do: aBlock
	| value |
	value := self.
	step = 0 ifTrue: [ self error: 'step must be non-zero' ].
	step < 0
		ifTrue: [ [ value >= stop ] whileTrue: [
					aBlock value: value.
					value := value + step ]]
		ifFalse: [ [ value <= stop ] whileTrue: [
					aBlock value: value.
					value := value + step ]]
!

to: stop do: aBlock
	"Evaluate aBlock for each number from self to aNumber."
	| nextValue |
	nextValue := self.
	[ nextValue <= stop ]
		whileTrue:
			[ aBlock value: nextValue.
			nextValue := nextValue + 1 ]
! !

!Number methodsFor: 'mathematical functions'!

** exponent
	^ self raisedTo: exponent
!

arcCos
	<inlineJS: 'return Math.acos(self);'>
!

arcSin
	<inlineJS: 'return Math.asin(self);'>
!

arcTan
	<inlineJS: 'return Math.atan(self);'>
!

arcTan: aNumber
	<inlineJS: 'return Math.atan2(self, aNumber);'>
!

cos
	<inlineJS: 'return Math.cos(self);'>
!

ln
	<inlineJS: 'return Math.log(self);'>
!

ln1p
	<inlineJS: 'return Math.log1p(self);'>
!

log
	<inlineJS: 'return Math.log(self) / Math.LN10;'>
!

log: aNumber
	<inlineJS: 'return Math.log(self) / Math.log(aNumber);'>
!

raisedTo: exponent
	<inlineJS: 'return Math.pow(self, exponent);'>
!

sign
	self isZero 
		ifTrue: [ ^ 0 ].
	self positive
		ifTrue: [ ^ 1 ]
		ifFalse: [ ^ -1 ].
!

sin
	<inlineJS: 'return Math.sin(self);'>
!

sqrt
	<inlineJS: 'return Math.sqrt(self)'>
!

squared
	^ self * self
!

tan
	<inlineJS: 'return Math.tan(self);'>
! !

!Number methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self asString
!

printShowingDecimalPlaces: placesDesired
	<inlineJS: 'return self.toFixed(placesDesired)'>
! !

!Number methodsFor: 'testing'!

between: min and: max
 ^ self >= min and: [ self <= max ]
!

even
	^ 0 = (self \\ 2)
!

isFinite
	"Answer whether the receiver is finite"
	<inlineJS: 'return Number.isFinite(self)'>
!

isImmutable
	^ true
!

isNaN
	"Answer whether the receiver is IEEE-754 not-a-number"
	<inlineJS: 'return Number.isNaN(self)'>
!

isNumber
	^ true
!

isZero
	^ self = 0
!

negative
	"Answer whether the receiver is mathematically negative."

	^ self < 0
!

odd
	^ self even not
!

positive
	"Answer whether the receiver is positive or equal to 0. (ST-80 protocol)."

	^ self >= 0
! !

!Number class methodsFor: 'accessing'!

classTag
	"Returns a tag or general category for this class.
	Typically used to help tools do some reflection.
	Helios, for example, uses this to decide what icon the class should display."
	
	^ 'magnitude'
! !

!Number class methodsFor: 'instance creation'!

e
	<inlineJS: 'return Math.E;'>
!

negativeInfinity
	<inlineJS: 'return Number.NEGATIVE_INFINITY'>
!

pi
	<inlineJS: 'return Math.PI'>
!

positiveInfinity
	<inlineJS: 'return Number.POSITIVE_INFINITY'>
!

radiansPerDegree
	^ (self pi) / 180
! !

Object subclass: #Point
	slots: {#x. #y}
	package: 'Kernel-Objects'!
!Point commentStamp!
I represent an x-y pair of numbers usually designating a geometric coordinate.

## API

Instances are traditionally created using the binary `#@` message to a number:

	100@120

Points can then be arithmetically manipulated:

	100@100 + (10@10)

...or for example:

	(100@100) * 2

**NOTE:** Creating a point with a negative y-value will need a space after `@` in order to avoid a parsing error:

	100@ -100 "but 100@-100 would not parse"!

!Point methodsFor: 'accessing'!

x
	^ x
!

x: aNumber
	x := aNumber
!

y
	^ y
!

y: aNumber
	y := aNumber
! !

!Point methodsFor: 'arithmetic'!

* aPoint
	^ Point x: self x * aPoint asPoint x y: self y * aPoint asPoint y
!

+ aPoint
	^ Point x: self x + aPoint asPoint x y: self y + aPoint asPoint y
!

- aPoint
	^ Point x: self x - aPoint asPoint x y: self y - aPoint asPoint y
!

/ aPoint
	^ Point x: self x / aPoint asPoint x y: self y / aPoint asPoint y
! !

!Point methodsFor: 'comparing'!

< aPoint
	^ self x < aPoint x and: [
		self y < aPoint y ]
!

<= aPoint
	^ self x <= aPoint x and: [
		self y <= aPoint y ]
!

= aPoint
	^ aPoint class = self class and: [
		(aPoint x = self x) & (aPoint y = self y) ]
!

> aPoint
	^ self x > aPoint x and: [
		self y > aPoint y ]
!

>= aPoint
	^ self x >= aPoint x and: [
		self y >= aPoint y ]
! !

!Point methodsFor: 'converting'!

asPoint
	^ self
! !

!Point methodsFor: 'geometry'!

angle
	^ self y arcTan: self x
! !

!Point methodsFor: 'point functions'!

dotProduct: aPoint
	^ (x * aPoint x) + (y * aPoint y)
!

normal
	"Answer a Point representing the unit vector rotated 90 deg clockwise. For the zero point return -1@0."

	| n d |
	n := y negated @ x.
	(d := (n x * n x + (n y * n y))) = 0
		 ifTrue: [ ^ -1 @0 ].
	^ n / d sqrt
!

normalized
	| r |
	r := self r.
	
	r = 0
		ifTrue: [ ^ Point x: 0 y: 0 ]
		ifFalse: [ ^ Point x: x / r y: y / r ]
! !

!Point methodsFor: 'polar coordinates'!

r
	^ ((x * x) + (y * y)) sqrt
! !

!Point methodsFor: 'printing'!

printOn: aStream
	"Print receiver in classic x@y notation."

	x printOn: aStream.
	
	aStream nextPutAll: '@'.
	(y notNil and: [ y negative ]) ifTrue: [
			"Avoid ambiguous @- construct"
			aStream space ].
	
	y printOn: aStream
! !

!Point methodsFor: 'rectangle creation'!

corner: aPoint
	^ Rectangle origin: self corner: aPoint
!

extent: aPoint
	^ Rectangle origin: self extent: aPoint
!

rectangle: aPoint
	^ Rectangle point: self point: aPoint
! !

!Point methodsFor: 'transforming'!

dist: aPoint 
	"Answer the distance between aPoint and the receiver."
	| dx dy |
	dx := aPoint x - x.
	dy := aPoint y - y.
	^ (dx * dx + (dy * dy)) sqrt
!

translateBy: delta
	"Answer a Point translated by delta (an instance of Point)."
	^ (delta x + x) @ (delta y + y)
! !

!Point class methodsFor: 'accessing'!

classTag
	"Returns a tag or general category for this class.
	Typically used to help tools do some reflection.
	Helios, for example, uses this to decide what icon the class should display."
	
	^ 'magnitude'
! !

!Point class methodsFor: 'instance creation'!

x: aNumber y: anotherNumber
	^ self new
		x: aNumber;
		y: anotherNumber;
		yourself
! !

Object subclass: #Random
	slots: {}
	package: 'Kernel-Objects'!
!Random commentStamp!
I an used to generate a random number and I am implemented as a trivial wrapper around javascript `Math.random()`.

## API

The typical use case it to use the `#next` method like the following:

	Random new next

This will return a float x where x < 1 and x > 0. If you want a random integer from 1 to 10 you can use `#atRandom`

	10 atRandom

A random number in a specific interval can be obtained with the following:

	(3 to: 7) atRandom

Be aware that `#to:` does not create an Interval as in other Smalltalk implementations but in fact an `Array` of numbers, so it's better to use:

	5 atRandom + 2

Since `#atRandom` is implemented in `SequencableCollection` you can easy pick an element at random:

	#('a' 'b' 'c') atRandom

As well as letter from a `String`:

	'abc' atRandom

Since Amber does not have Characters this will return a `String` of length 1 like for example `'b'`.!

!Random methodsFor: 'accessing'!

next
	<inlineJS: 'return Math.random()'>
!

next: anInteger
	^ (1 to: anInteger) collect: [ :each | self next ]
! !

Object subclass: #Rectangle
	slots: {#origin. #corner}
	package: 'Kernel-Objects'!
!Rectangle commentStamp!
I represent a Rectangle defined by my two corners.

The simplest way to create an instance is using Point methods:

    1@1 corner: 2@2

WIll create a rectangle with 1@1 as the top left and 2@2 at the bottom right.

    1@1 extent: 1@1

Will create the same rectangle, defining an origin and a size instead of an origin and a corner.!

!Rectangle methodsFor: 'accessing'!

corner
	^ corner
!

origin
	^ origin
! !

!Rectangle methodsFor: 'private'!

setPoint: pt1 point: pt2

	origin := (pt1 x min: pt2 x)@(pt1 y min: pt2 y).
	corner := (pt1 x max: pt2 x)@(pt1 y max: pt2 y).
! !

!Rectangle methodsFor: 'testing'!

= aRectangle
	^ origin = aRectangle origin and: [ corner = aRectangle corner ]
!

containsPoint: aPoint
	^ origin <= aPoint and: [ corner >= aPoint ]
!

containsRect: aRect
	^ aRect origin >= origin and: [ aRect corner <= corner ]
!

printOn: aStream
	origin printOn: aStream.
	aStream nextPutAll: ' corner: '.
	corner printOn: aStream.
! !

!Rectangle class methodsFor: 'instance creation'!

origin: anOrigin corner: aCorner
	^ self basicNew setPoint: anOrigin point: aCorner.
!

origin: anOrigin extent: anExtent
	^ self basicNew setPoint: anOrigin point: anOrigin + anExtent.
!

point: anOrigin point: aCorner
	^ self basicNew setPoint: anOrigin point: aCorner.
! !

Object subclass: #UndefinedObject
	slots: {}
	package: 'Kernel-Objects'!
!UndefinedObject commentStamp!
I describe the behavior of my sole instance, `nil`. `nil` represents a prior value for variables that have not been initialized, or for results which are meaningless.

`nil` is the Smalltalk equivalent of the `undefined` JavaScript object.

__note:__ When sending messages to the `undefined` JavaScript object, it will be replaced by `nil`.!

!UndefinedObject methodsFor: 'accessing'!

identityHash
	^ 'NIL'
! !

!UndefinedObject methodsFor: 'converting'!

asJavaScriptObject
	^ null
!

asJavaScriptSource
	^ 'null'
! !

!UndefinedObject methodsFor: 'copying'!

deepCopy
	^ self
!

shallowCopy
	^ self
! !

!UndefinedObject methodsFor: 'evaluating'!

value
	<inlineJS: 'return null'>
! !

!UndefinedObject methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: 'nil'
! !

!UndefinedObject methodsFor: 'testing'!

== anObject
	^ anObject isNil
!

ifNil: aBlock
	"inlined in the Compiler"
	^ self ifNil: aBlock ifNotNil: []
!

ifNil: aBlock ifNotNil: anotherBlock
	"inlined in the Compiler"
	^ aBlock value
!

ifNotNil: aBlock
	"inlined in the Compiler"
	^ self
!

ifNotNil: aBlock ifNil: anotherBlock
	"inlined in the Compiler"
	^ anotherBlock value
!

isImmutable
	^ true
!

isNil
	^ true
!

notNil
	^ false
! !

!UndefinedObject class methodsFor: 'instance creation'!

new
		self error: 'You cannot create new instances of UndefinedObject. Use nil'
! !

Object setTraitComposition: {TIsInGroup} asTraitComposition!
UndefinedObject setTraitComposition: {TSubclassable} asTraitComposition!
! !

