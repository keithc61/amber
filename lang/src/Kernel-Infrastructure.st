Smalltalk createPackage: 'Kernel-Infrastructure'!
Object subclass: #AmberBootstrapInitialization
	slots: {}
	package: 'Kernel-Infrastructure'!

!AmberBootstrapInitialization class methodsFor: 'organization'!

organizeClasses
	Smalltalk classes do: [ :each | each enterOrganization ]
!

organizeMethods
	Smalltalk classes do: [ :eachClass |
		eachClass definedMethods do: [ :eachMethod |
			eachMethod methodClass methodOrganizationEnter: eachMethod andLeave: nil ] ]
! !

!AmberBootstrapInitialization class methodsFor: 'public api'!

run
	SmalltalkImage initialize.
	self
		organizeClasses;
		organizeMethods.
	^ Smalltalk postLoad
! !

ProtoObject subclass: #JSObjectProxy
	slots: {#jsObject}
	package: 'Kernel-Infrastructure'!
!JSObjectProxy commentStamp!
I handle sending messages to JavaScript objects, making  JavaScript object accessing from Amber fully transparent.
My instances make intensive use of `#doesNotUnderstand:`.

My instances are automatically created by Amber whenever a message is sent to a JavaScript object.

## Usage examples

JSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.

	window alert: 'hello world'.
	window inspect.
	(window jQuery: 'body') append: 'hello world'

Amber messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown.

## Message conversion rules

- `someUser name` becomes `someUser.name`
- `someUser name: 'John'` becomes `someUser name = "John"`
- `console log: 'hello world'` becomes `console.log('hello world')`
- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`

__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`.!

!JSObjectProxy methodsFor: 'accessing'!

at: aString
	<inlineJS: 'return $self.jsObject[aString]'>
!

at: aString ifAbsent: aBlock
	"return the aString property or evaluate aBlock if the property is not defined on the object"
	<inlineJS: '
		var obj = $self.jsObject;
		return aString in obj ? obj[aString] : aBlock._value();
	'>
!

at: aString ifPresent: aBlock
	"return the evaluation of aBlock with the value if the property is defined or return nil"
	<inlineJS: '
		var obj = $self.jsObject;
		return aString in obj ? aBlock._value_(obj[aString]) : nil;
	'>
!

at: aString ifPresent: aBlock ifAbsent: anotherBlock
	"return the evaluation of aBlock with the value if the property is defined
	or return value of anotherBlock"
	<inlineJS: '
		var obj = $self.jsObject;
		return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();
	'>
!

at: aString put: anObject
	<inlineJS: 'return $self.jsObject[aString] = anObject'>
!

in: aValuable
	^ aValuable value: jsObject
!

jsObject
	^ jsObject
!

removeKey: aString
	<inlineJS: 'delete $self.jsObject[aString]; return aString'>
! !

!JSObjectProxy methodsFor: 'comparing'!

= anObject
	^ anObject class == self class and: [
		JSObjectProxy compareJSObjectOfProxy: self withProxy: anObject ]
! !

!JSObjectProxy methodsFor: 'converting'!

asJavaScriptObject
	"Answers the receiver in a stringify-friendly fashion"

	^ jsObject
! !

!JSObjectProxy methodsFor: 'enumerating'!

keysAndValuesDo: aBlock
	<inlineJS: '
		var o = $self.jsObject;
		for(var i in o) {
			aBlock._value_value_(i, o[i]);
		}
	'>
! !

!JSObjectProxy methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self printString
!

printString
	<inlineJS: '
		var js = $self.jsObject;
		return !!js ? "<<malformed JS object proxy>>" : js.toString
			? js.toString()
			: Object.prototype.toString.call(js)
	'>
! !

!JSObjectProxy methodsFor: 'promises'!

catch: aBlock
(NativeFunction isNativeFunction: (self at: #then))
	ifTrue: [ ^ (TThenable >> #catch:) sendTo: jsObject arguments: {aBlock} ]
	ifFalse: [ ^ super catch: aBlock ]
!

on: aClass do: aBlock
(NativeFunction isNativeFunction: (self at: #then))
	ifTrue: [ ^ (TThenable >> #on:do:) sendTo: jsObject arguments: {aClass. aBlock} ]
	ifFalse: [ ^ super on: aClass do: aBlock ]
!

then: aBlockOrArray
self isThenable
	ifTrue: [ ^ (TThenable >> #then:) sendTo: jsObject arguments: {aBlockOrArray} ]
	ifFalse: [ ^ super then: aBlockOrArray ]
! !

!JSObjectProxy methodsFor: 'proxy'!

doesNotUnderstand: aMessage
	^ (JSObjectProxy lookupProperty: aMessage selector asJavaScriptPropertyName ofProxy: self)
		ifNil: [ super doesNotUnderstand: aMessage ]
		ifNotNil: [ :jsSelector | 
			JSObjectProxy 
				forwardMessage: jsSelector 
				withArguments: aMessage arguments
				ofProxy: self ]
! !

!JSObjectProxy methodsFor: 'streaming'!

putOn: aStream
	aStream nextPutJSObject: jsObject
! !

!JSObjectProxy methodsFor: 'testing'!

isThenable
	^ NativeFunction isNativeFunction: (self at: #then)
! !

!JSObjectProxy class methodsFor: 'accessing'!

newObject
	<inlineJS: 'return {}'>
!

null
	<inlineJS: 'return null'>
!

undefined
	<inlineJS: 'return undefined'>
! !

!JSObjectProxy class methodsFor: 'instance creation'!

on: aJSObject
	| instance |
	instance := self new.
	self jsObject: aJSObject ofProxy: instance.
	^ instance
! !

!JSObjectProxy class methodsFor: 'proxy'!

addObjectVariablesTo: aDictionary ofProxy: aProxy
	<inlineJS: '
		var jsObject = aProxy.jsObject;
		for(var i in jsObject) {
			aDictionary._at_put_(i, jsObject[i]);
		}
	'>
!

associationsOfProxy: aProxy
	<inlineJS: '
		var jsObject = aProxy.jsObject, result = [];
		for(var i in jsObject) {
			result.push(i.__minus_gt(jsObject[i]));
		}
		return result;
	'>
!

compareJSObjectOfProxy: aProxy withProxy: anotherProxy
<inlineJS: '
	var anotherJSObject = anotherProxy.a$cls ? anotherProxy.jsObject : anotherProxy;
	return aProxy.jsObject === anotherJSObject
'>
!

forwardMessage: aString withArguments: anArray ofProxy: aProxy
	<inlineJS: '
		return $core.accessJavaScript(aProxy._jsObject(), aString, anArray);
	'>
!

jsObject: aJSObject ofProxy: aProxy
	<inlineJS: 'aProxy.jsObject = aJSObject'>
!

lookupProperty: aString ofProxy: aProxy
	"Looks up a property in JS object.
	Answer the property if it is present, or nil if it is not present."
	
	<inlineJS: 'return aString in aProxy._jsObject() ? aString : nil'>
! !

Object subclass: #Organizer
	slots: {#elements}
	package: 'Kernel-Infrastructure'!
!Organizer commentStamp!
I represent categorization information. 

## API

Use `#addElement:` and `#removeElement:` to manipulate instances.!

!Organizer methodsFor: 'accessing'!

addElement: anObject
	self elements add: anObject
!

elements
	^ elements
!

removeElement: anObject
	self elements remove: anObject ifAbsent: []
! !

!Organizer methodsFor: 'initialization'!

initialize
	super initialize.
	elements := Set new
! !

Organizer subclass: #ClassOrganizer
	slots: {#traitOrBehavior}
	package: 'Kernel-Infrastructure'!
!ClassOrganizer commentStamp!
I am an organizer specific to classes. I hold method categorization information for classes.!

!ClassOrganizer methodsFor: 'accessing'!

addElement: aString
	super addElement: aString.

	SystemAnnouncer current announce: (ProtocolAdded new
		protocol: aString;
		theClass: self theClass;
		yourself)
!

removeElement: aString
	super removeElement: aString.

	SystemAnnouncer current announce: (ProtocolRemoved new
		protocol: aString;
		theClass: self theClass;
		yourself)
!

theClass
	^ traitOrBehavior
!

theClass: aClass
	traitOrBehavior := aClass
! !

!ClassOrganizer class methodsFor: 'instance creation'!

on: aClass
	^ self new
		theClass: aClass;
		yourself
! !

Organizer subclass: #PackageOrganizer
	slots: {}
	package: 'Kernel-Infrastructure'!
!PackageOrganizer commentStamp!
I am an organizer specific to packages. I hold classes categorization information.!

Object subclass: #Package
	slots: {#contextBlock. #basicTransport. #name. #transport. #imports. #dirty. #organization. #isReady}
	package: 'Kernel-Infrastructure'!
!Package commentStamp!
I am similar to a "class category" typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.

Each package has a name and can be queried for its classes, but it will then resort to a reverse scan of all classes to find them.

## API

Packages are manipulated through "Smalltalk current", like for example finding one based on a name or with `Package class >> #name` directly:

    Smalltalk current packageAt: 'Kernel'
    Package named: 'Kernel'

A package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a package supports "class extensions" so a package can define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows.

You can fetch a package from the server:

	Package load: 'Additional-Examples'!

!Package methodsFor: 'accessing'!

beClean
	dirty := false.
	
	SystemAnnouncer current announce: (PackageClean new
		package: self;
		yourself)
!

beDirty
	dirty := true.
	
	SystemAnnouncer current announce: (PackageDirty new
		package: self;
		yourself)
!

classTemplate
	^ String streamContents: [ :stream | stream
		write: 'Object subclass: #NameOfSubclass'; lf;
		tab; write: 'instanceVariableNames: '''''; lf;
		tab; write: 'package: '; print: self name ]
!

context
	^ self contextBlock
		ifNil: [ #{} ]
		ifNotNil: [ :block |
			| result |
			result := Dictionary new.
			block value keysAndValuesDo: [ :key :value | result at: key put: value ].
			result ]
!

contextBlock
	^ contextBlock
!

contextBlock: aBlock
	contextBlock := aBlock
!

contextFunctionSource
	^ (self imports reject: #isString)
		ifEmpty: [ nil ]
		ifNotEmpty: [ :namedImports |
			'function () { return {',
			(',' join: (namedImports collect: [ :each | each key, ':', each key ])),
			'}; }' ]
!

definition
	^ String streamContents: [ :stream | stream
		write: self class name; lf;
		tab; write: 'named: '; print: self name; lf;
		tab; write: { 'imports: '. self importsDefinition }; lf;
		tab; write: { 'transport: ('. self transport definition. ')' } ]
!

imports
	^ imports ifNil: [
		self imports: #().
		imports ]
!

imports: anArray
	self validateImports: anArray.
	imports := anArray asSet
!

importsDefinition
	^ String streamContents: [ :stream |
		stream write: '{'.
		self sortedImportsAsArray
			do: [ :each | stream print: each ]
			separatedBy: [ stream write: '. ' ].
		stream write: '}' ]
!

isReady
	^ isReady
!

isReady: aPromise
	isReady := aPromise
!

javaScriptDescriptor: anObject
	| basicEval basicContext basicImports |

	basicImports := anObject at: 'imports' ifAbsent: [ #() ].
	self imports: (self importsFromJson: basicImports).

	basicTransport := anObject at: 'transport' ifAbsent: [].
	anObject at: 'isReady' ifPresent: [ :aPromise | self isReady: aPromise ].

	"TODO remove, backward compatibility"
	anObject at: 'innerEval' ifPresent: [ :evalBlock |
		self contextFunctionSource ifNotNil: [ :source |
			anObject at: 'context' put: (evalBlock value: '(', source, ')') ] ].

	basicContext := anObject at: 'context' ifAbsent: [ nil asJavaScriptObject ].
	self contextBlock: basicContext
!

name
	^ name
!

name: aString
	name := aString
!

organization
	^ organization
!

transport
	^ transport ifNil: [ 
		self transport: (PackageTransport fromJson: self basicTransport).
		transport ]
!

transport: aPackageTransport
	transport := aPackageTransport.
	aPackageTransport package: self
! !

!Package methodsFor: 'classes'!

classes
	^ self organization elements copy
!

setupClasses
	self classes do: [ :each | each initialize ]
!

sortedClasses
	"Answer all classes in the receiver, sorted by superclass/subclasses and by class name for common subclasses (Issue #143)."

	^ self class sortedClasses: self classes
! !

!Package methodsFor: 'converting'!

importsAsJson

	^ self sortedImportsAsArray collect: [ :each |
		each isString
			ifTrue: [ each ]
			ifFalse: [ each key, '=', each value ]]
!

importsFromJson: anArray
	"Parses array of string, eg. #('asdf' 'qwer=tyuo')
	into array of Strings and Associations,
	eg. {'asdf'. 'qwer'->'tyuo'}"

	^ anArray collect: [ :each |
		| split |
		split := each tokenize: '='.
		split size = 1
			ifTrue: [ split first ]
			ifFalse: [ split first -> split second ]]
! !

!Package methodsFor: 'dependencies'!

loadDependencies
	"Returns list of packages that need to be loaded
	before loading this package."
	
	| classes packages |
	classes := self loadDependencyClasses.
	^ (classes collect: [ :each | each package ]) asSet
		remove: self ifAbsent: [];
		yourself
!

loadDependencyClasses
	"Returns classes needed at the time of loading a package.
	These are all that are used to subclass
	and to define an extension method
	as well as all traits used"
	
	| starCategoryName |
	starCategoryName := '*', self name.
	^ (self classes collect: [ :each | each superclass ]) asSet
		addAll: (Smalltalk classes select: [ :each |
			({each. each theMetaClass} copyWithout: nil) anySatisfy: [ :any |
				(any protocols includes: starCategoryName) and: [
					(any ownMethodsInProtocol: starCategoryName) notEmpty ]]]);
		addAll: (Array streamContents: [ :as | self traitCompositions valuesDo: [ :each | as write: (each collect: [ :eachTT | eachTT trait ])]]);
		remove: nil ifAbsent: [];
		yourself
!

traitCompositions
	| traitCompositions |
	traitCompositions := Dictionary new.
	self classes do: [ :eachClass | eachClass includingPossibleMetaDo: [ :each |
		traitCompositions at: each put: each traitComposition ] ].
	^ traitCompositions reject: [ :each | each isEmpty ]
! !

!Package methodsFor: 'initialization'!

initialize
	super initialize.

	organization := PackageOrganizer new.
	contextBlock := nil.
	dirty := nil.
	imports := nil.
	isReady := Promise new.
	transport := nil
! !

!Package methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream 
		nextPutAll: ' (';
		nextPutAll: self name;
		nextPutAll: ')'
! !

!Package methodsFor: 'private'!

basicTransport
	"Answer the transport literal JavaScript object as setup in the JavaScript file, if any"
	
	^ basicTransport
!

sortedImportsAsArray
	"Answer imports sorted first by type (associations first),
	then by value"

	^ self imports asArray
		sorted: [ :a :b |
			a isString not & b isString or: [
				a isString = b isString and: [
					a value <= b value ]]]
! !

!Package methodsFor: 'testing'!

isDirty
	^ dirty ifNil: [ false ]
!

isPackage
	^ true
! !

!Package methodsFor: 'validation'!

validateImports: aCollection

	aCollection do: [ :import |
		import isString ifFalse: [
			(import respondsTo: #key) ifFalse: [
				self error: 'Imports must be Strings or Associations' ].
			import key isString & import value isString ifFalse: [
				self error: 'Key and value must be Strings' ].
			(import key match: '^[a-zA-Z][a-zA-Z0-9]*$') ifFalse: [
				self error: 'Keys must be identifiers' ]]]
! !

Package class slots: {#defaultCommitPathJs. #defaultCommitPathSt}!

!Package class methodsFor: 'accessing'!

named: aPackageName
	^ Smalltalk 
		packageAt: aPackageName
		ifAbsent: [ 
			Smalltalk createPackage: aPackageName ]
!

named: aPackageName ifAbsent: aBlock
	^ Smalltalk packageAt: aPackageName ifAbsent: aBlock
!

named: aPackageName imports: anArray transport: aTransport
	| pkg |
	
	pkg := self named: aPackageName.
	pkg
		imports: anArray;
		transport: aTransport;
		beDirty.
	
	^ pkg
!

named: aPackageName transport: aTransport
	| pkg |
	
	pkg := self named: aPackageName.
	pkg transport: aTransport; beDirty.
	
	^ pkg
! !

!Package class methodsFor: 'instance creation'!

named: aString javaScriptDescriptor: anObject
	| pkg |
	
	pkg := Smalltalk createPackage: aString.
	pkg javaScriptDescriptor: anObject.
	^ pkg
!

new: aString
	^ Package new
		name: aString;
		yourself
! !

!Package class methodsFor: 'sorting'!

sortedClasses: classes
	^ Array streamContents: [ :stream | stream << (ClassBuilder sortClasses: classes) ]
! !

Object subclass: #PackageStateObserver
	slots: {}
	package: 'Kernel-Infrastructure'!
!PackageStateObserver commentStamp!
My current instance listens for any changes in the system that might affect the state of a package (being dirty).!

!PackageStateObserver methodsFor: 'accessing'!

announcer
	^ SystemAnnouncer current
! !

!PackageStateObserver methodsFor: 'actions'!

observeSystem
	self announcer
		on: PackageAdded
		send: #onPackageAdded:
		to: self;
		
		on: ClassAnnouncement
		send: #onClassModification:
		to: self;
		
		on: MethodAnnouncement
		send: #onMethodModification:
		to: self
! !

!PackageStateObserver methodsFor: 'reactions'!

onClassModification: anAnnouncement
	anAnnouncement theClass ifNotNil: [ :theClass | theClass package beDirty ]
!

onMethodModification: anAnnouncement
	anAnnouncement method package ifNotNil: [ :package | package beDirty ]
!

onPackageAdded: anAnnouncement
	anAnnouncement package beDirty
! !

PackageStateObserver class slots: {#current}!

!PackageStateObserver class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := self new ]
! !

!PackageStateObserver class methodsFor: 'initialization'!

initialize
	self current observeSystem
! !

Object subclass: #Setting
	slots: {#key. #defaultValue}
	package: 'Kernel-Infrastructure'!
!Setting commentStamp!
I represent a setting **stored** at `Smalltalk settings`. 
In the current implementation, `Smalltalk settings` is an object persisted in the localStorage.

## API

A `Setting` value can be read using `value` and set using `value:`.

Settings are accessed with `'key' asSetting` or `'key' asSettingIfAbsent: aDefaultValue`.

To read the value of a setting you can also use the convenience:

`theValueSet :=  'any.characteristic' settingValue` 

or with a default using:

 `theEnsuredValueSet := 'any.characteristic' settingValueIfAbsent: true`!

!Setting methodsFor: 'accessing'!

defaultValue
	^ defaultValue
!

defaultValue: aStringifiableObject
	defaultValue := aStringifiableObject
!

key
	^ key
!

key: aString
	key := aString
!

value
	^ Smalltalk settings at: self key ifAbsent: [ self defaultValue ]
!

value: aStringifiableObject
	^ Smalltalk settings at: self key put: aStringifiableObject
! !

!Setting class methodsFor: 'instance creation'!

at: aString ifAbsent: aDefaultValue
	
	^ super new
		key: aString;
		defaultValue: aDefaultValue;
		yourself
!

new
	self shouldNotImplement
! !

Object subclass: #SmalltalkImage
	slots: {#globalJsVariables. #packageDictionary}
	package: 'Kernel-Infrastructure'!
!SmalltalkImage commentStamp!
I represent the Smalltalk system, wrapping
operations of variable `$core` declared in `base/boot.js`.

## API

I have only one instance, accessed with global variable `Smalltalk`.

## Classes

Classes can be accessed using the following methods:

- `#classes` answers the full list of Smalltalk classes in the system
- `#globals #at:` answers a specific global (usually, a class) or `nil`

## Packages

Packages can be accessed using the following methods:

- `#packages` answers the full list of packages
- `#packageAt:` answers a specific package or `nil`

## Parsing

The `#parse:` method is used to parse Amber source code.
It requires the `Compiler` package and the `base/parser.js` parser file in order to work.!

!SmalltalkImage methodsFor: 'accessing'!

cancelOptOut: anObject
	"A Smalltalk object has a 'a$cls' property.
	If this property is shadowed for anObject by optOut:,
	the object is treated as plain JS object.
	This removes the shadow and anObject is Smalltalk object
	again if it was before."
	
	<inlineJS: 'delete anObject.a$cls;'>
!

core
	<inlineJS: 'return $core'>
!

globals
	<inlineJS: 'return $globals'>
!

optOut: anObject
	"A Smalltalk object has a 'a$cls' property.
	This shadows the property for anObject.
	The object is treated as plain JS object following this."
	
	<inlineJS: 'anObject.a$cls = null'>
!

parse: aString
	^ Compiler new parse: aString
!

pseudoVariableNames
	^ Compiler pseudoVariableNames
!

readJSObject: anObject
	<inlineJS: 'return $core.readJSObject(anObject)'>
!

reservedWords
	^ #(
		"http://www.ecma-international.org/ecma-262/6.0/#sec-keywords"
		break case catch class const continue debugger
		default delete do else export extends finally
		for function if import in instanceof new
		return super switch this throw try typeof
		var void while with yield
		"in strict mode"
		let static
		"Amber protected words: these should not be compiled as-is when in code"
		arguments
		"http://www.ecma-international.org/ecma-262/6.0/#sec-future-reserved-words"
		await enum
		"in strict mode"
		implements interface package private protected public
	)
!

settings
	^ SmalltalkSettings
!

version
	"Answer the version string of Amber"
	
	^ '0.30.4-pre'
! !

!SmalltalkImage methodsFor: 'accessing amd'!

amdRequire
	^ self core at: 'amdRequire'
!

defaultAmdNamespace
	^ 'transport.defaultAmdNamespace' settingValue
!

defaultAmdNamespace: aString
	'transport.defaultAmdNamespace' settingValue: aString
! !

!SmalltalkImage methodsFor: 'classes'!

classes
	^ self core traitsOrClasses copy
!

removeClass: aClass
	aClass isMetaclass ifTrue: [ self error: aClass asString, ' is a Metaclass and cannot be removed!!' ].
	aClass allSubclassesDo: [ :subclass | self error: aClass name, ' has a subclass: ', subclass name ].
	aClass traitUsers ifNotEmpty: [ self error: aClass name, ' has trait users.' ].
	
	self deleteClass: aClass.
	aClass includingPossibleMetaDo: [ :each | each setTraitComposition: #() ].
	
	SystemAnnouncer current
		announce: (ClassRemoved new
			theClass: aClass;
			yourself)
! !

!SmalltalkImage methodsFor: 'error handling'!

asSmalltalkException: anObject
	"A JavaScript exception may be thrown.
	We then need to convert it back to a Smalltalk object"
	
	^ anObject
		ifNil: [ [ self error: 'Error: nil' ] on: Error do: [ :e | e ] ]
		ifNotNil: [
			(self isError: anObject)
				ifTrue: [ anObject ]
				ifFalse: [
					| asNonLocalReturn |
					asNonLocalReturn := NonLifoReturn reifyIfFeasible: anObject.
					asNonLocalReturn == anObject
						ifFalse: [ asNonLocalReturn ]
						ifTrue: [ JavaScriptException on: anObject ] ] ]
!

try: actionBlock ifTrue: aBlock catch: anotherBlock
	"Similar to BlockClosure >> tryifTrue:catch:, but
	converts all JS exceptions to JavaScriptException instances."
	
	| smalltalkError |
	^ actionBlock
		tryIfTrue: [ :error |
			smalltalkError := self asSmalltalkException: error.
			aBlock value: smalltalkError ]
		catch: [ anotherBlock value: smalltalkError ]
! !

!SmalltalkImage methodsFor: 'globals'!

addGlobalJsVariable: aString
	self globalJsVariables add: aString
!

deleteGlobalJsVariable: aString
	self globalJsVariables remove: aString ifAbsent:[]
!

globalJsVariables
	^ globalJsVariables ifNil: [
		globalJsVariables := #(window document process global) ]
! !

!SmalltalkImage methodsFor: 'image'!

postFailedLoad: aPackage
	| keys descriptors |
	Smalltalk removePackage: aPackage name.
	keys := Set new.
	descriptors := self core packageDescriptors.
	descriptors keysAndValuesDo: [ :key :value | keys add: key ].
	keys do: [ :each |
		Smalltalk removePackage: each.
		descriptors removeKey: each ]
!

postLoad
	^ self adoptPackageDescriptors then: [ :pkgs |
		| classes |
		pkgs do: #beClean.
		classes := Smalltalk classes select:
			[ :each | pkgs includes: each package ].
		classes do: [ :each |
			each = self class ifFalse: [ each initialize ] ].
		self sweepPackageDescriptors: pkgs ]
! !

!SmalltalkImage methodsFor: 'packages'!

beClean
	"Marks all packages clean."

	self packages do: #beClean
!

createPackage: packageName
	| package announcement |
	
	package := self basicCreatePackage: packageName.
	
	announcement := PackageAdded new
		package: package;
		yourself.
		
	SystemAnnouncer current announce: announcement.
	
	^ package
!

packageAt: packageName ifAbsent: aBlock
	^ self packageDictionary at: packageName ifAbsent: aBlock
!

packageAt: packageName ifPresent: aBlock
	^ self packageDictionary at: packageName ifPresent: aBlock
!

packageDictionary
	^ packageDictionary ifNil: [ packageDictionary := Dictionary new ]
!

packages
	"Return all Package instances in the system."

	^ self packageDictionary values copy
!

removePackage: packageName
	"Removes a package and all its classes."

	| pkg |
	pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].
	pkg classes do: [ :each |
			self removeClass: each ].
	self packageDictionary removeKey: packageName.
	
	SystemAnnouncer current
	announce: (PackageRemoved new
		package: pkg;
		yourself)
!

renamePackage: packageName to: newName
	"Rename a package."

	| pkg |
	pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].
	self packageAt: newName ifPresent: [ self error: 'Already exists a package called: ', newName ].
	pkg name: newName; beDirty.
	self packageDictionary
		at: newName put: pkg;
		removeKey: packageName
! !

!SmalltalkImage methodsFor: 'private'!

adoptPackageDescriptors
	^ self tryAdoptPackageDescriptorsBeyond: Set new
!

basicCreatePackage: packageName
	"Create and bind a new bare package with given name and return it."
	^ self packageDictionary at: packageName ifAbsentPut: [ Package new: packageName ]
!

deleteClass: aClass
	"Deletes a class by deleting its binding only. Use #removeClass instead"
	
	<inlineJS: '$core.removeClass(aClass)'>
!

sweepPackageDescriptors: pkgs
	| pd |	
	pd := self core packageDescriptors.
	pkgs do: [ :each | pd removeKey: each name ]
!

tryAdoptPackageDescriptorsBeyond: aSet
	| original |
	original := aSet copy.
	self core packageDescriptors keysAndValuesDo: [ :key :value |
		aSet add: (Package named: key javaScriptDescriptor: value) ].
	^ (aSet allSatisfy: [ :each | original includes: each ])
		ifFalse: [ (Promise all: (aSet collect: #isReady)) then: [ self tryAdoptPackageDescriptorsBeyond: aSet ] ]
		ifTrue: [ Promise value: aSet ]
! !

!SmalltalkImage methodsFor: 'testing'!

existsJsGlobal: aString
	self deprecatedAPI: 'Use Platform >> includesGlobal: instead'.
	^ Platform includesGlobal: aString
!

isError: anObject
	^ (self isSmalltalkObject: anObject) and: [ anObject isError ]
!

isSmalltalkObject: anObject
	"Consider anObject a Smalltalk object if it has a 'a$cls' property.
	Note that this may be unaccurate"
	
	<inlineJS: 'return anObject.a$cls !!= null'>
! !

SmalltalkImage class slots: {#current}!

!SmalltalkImage class methodsFor: 'initialization'!

initialize
	| st |
	st := self current.
	st globals at: 'Smalltalk' put: st
! !

!SmalltalkImage class methodsFor: 'instance creation'!

current
	^ current ifNil: [ current := super new ] ifNotNil: [ self deprecatedAPI. current ]
!

new
	self shouldNotImplement
! !

JSObjectProxy setTraitComposition: {TIsInGroup. TThenable} asTraitComposition!
! !

!ProtoStream methodsFor: '*Kernel-Infrastructure'!

nextPutJSObject: aJSObject
	self nextPut: aJSObject
! !

!String methodsFor: '*Kernel-Infrastructure'!

asJavaScriptPropertyName
<inlineJS: 'return $core.st2prop(self)'>
!

asSetting
	"Answer aSetting dedicated to locally store a value using this string as key.
	Nil will be the default value."
	^ Setting at: self ifAbsent: nil
!

asSettingIfAbsent: aDefaultValue
	"Answer aSetting dedicated to locally store a value using this string as key.
	Make this setting to have aDefaultValue."
	^ Setting at: self ifAbsent: aDefaultValue
!

settingValue
	^ self asSetting value
!

settingValue: aValue
	"Sets the value of the setting that will be locally stored using this string as key.
	Note that aValue can be any object that can be stringifyed"
	^ self asSetting value: aValue
!

settingValueIfAbsent: aDefaultValue
	"Answer the value of the locally stored setting using this string as key.
	Use aDefaultValue in case no setting is found"
	^ (self asSettingIfAbsent: aDefaultValue) value
! !

