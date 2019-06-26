Smalltalk createPackage: 'Kernel-Classes'!
Object subclass: #Behavior
	slots: {#organization. #slots. #fn. #superclass}
	package: 'Kernel-Classes'!
!Behavior commentStamp!
I am the superclass of all class objects.

In addition to BehaviorBody, I define superclass/subclass relationships and instantiation.

I define the protocol for creating instances of a class with `#basicNew` and `#new` (see `boot.js` for class constructors details).

My instances know about the subclass/superclass relationships between classes and contain the description that instances are created from.

I also provide iterating over the class hierarchy.!

!Behavior methodsFor: 'accessing'!

allInstanceVariableNames
	| result |
	result := self instanceVariableNames copy.
	self superclass ifNotNil: [
		result addAll: self superclass allInstanceVariableNames ].
	^ result
!

allSelectors
	^ self allSuperclasses
		inject: self selectors
		into: [ :acc :each | acc addAll: each selectors; yourself ]
!

allSubclasses
	"Answer an collection of the receiver's and the receiver's descendent's subclasses. "

	^ Array streamContents: [ :str | self allSubclassesDo: [ :each | str nextPut: each ] ]
!

allSuperclasses
	
	self superclass ifNil: [ ^ #() ].
	
	^ (OrderedCollection with: self superclass)
		addAll: self superclass allSuperclasses;
		yourself
!

basicOrganization
	^ organization
!

basicOrganization: aClassOrganizer
	organization := aClassOrganizer
!

beJavaScriptSubclassOf: aJavaScriptFunction
	"Reparent the JS constructor's prototype to aJavaScriptFunction's one,
	plus bookkeeping. That way I stay part of (simulated) Smalltalk hierarchy,
	but my instances will physically be instanceof aJavaScriptFunction."

	self makeJavaScriptConstructorSubclassOf: aJavaScriptFunction.
	Smalltalk core detachClass: self
!

instanceVariableNames
	^ slots
!

javaScriptConstructor
	"Answer the JS constructor used to instantiate. See kernel-language.js"
	
	^ fn
!

javaScriptConstructor: aJavaScriptFunction
	"Set the JS constructor used to instantiate.
	See the JS counter-part in boot.js `$core.setClassConstructor'"
	
	Smalltalk core setClassConstructor: self to: aJavaScriptFunction
!

javascriptConstructor
	self deprecatedAPI: 'Use #javaScriptConstructor instead.'.
	^ self javaScriptConstructor
!

javascriptConstructor: aJavaScriptFunction
	self deprecatedAPI: 'Use #javaScriptConstructor: instead.'.
	^ self javaScriptConstructor: aJavaScriptFunction
!

lookupSelector: selector
	"Look up the given selector in my methodDictionary.
	Return the corresponding method if found.
	Otherwise chase the superclass chain and try again.
	Return nil if no method is found."
	
	| lookupClass |
	
	lookupClass := self.
	[ lookupClass = nil ] whileFalse: [
		(lookupClass includesSelector: selector)
				ifTrue: [ ^ lookupClass methodAt: selector ].
			lookupClass := lookupClass superclass ].
	^ nil
!

prototype
	^ self javaScriptConstructor prototype
!

subclasses
	self subclassResponsibility
!

superclass
	^ superclass
!

theMetaClass
	self subclassResponsibility
!

theNonMetaClass
	self subclassResponsibility
!

withAllSubclasses
	^ (Array with: self) addAll: self allSubclasses; yourself
! !

!Behavior methodsFor: 'enumerating'!

allSubclassesDo: aBlock
	"Evaluate the argument, aBlock, for each of the receiver's subclasses."

<inlineJS: '$core.traverseClassTree(self, function(subclass) {
	if (subclass !!== self) aBlock._value_(subclass);
})'>
! !

!Behavior methodsFor: 'instance creation'!

alternateConstructorViaSelector: aSelector
	^ BlockClosure
		javaScriptConstructorFor: self prototype
		initializingVia: (self >> aSelector) fn
!

basicNew
	<inlineJS: 'return new self.fn()'>
!

new
	^ self basicNew initialize
! !

!Behavior methodsFor: 'private'!

makeJavaScriptConstructorSubclassOf: javaScriptClass
	<inlineJS: '
		Object.setPrototypeOf($self.fn.prototype, javaScriptClass.prototype);
	'>
! !

!Behavior methodsFor: 'testing'!

canUnderstand: aSelector
	^ (self includesSelector: aSelector asString) or: [
		self superclass notNil and: [ self superclass canUnderstand: aSelector ]]
!

includesBehavior: aClass
	^ self == aClass or: [
			self inheritsFrom: aClass ]
!

inheritsFrom: aClass
	self superclass ifNil: [ ^ false ].

	^ aClass == self superclass or: [ 
		self superclass inheritsFrom: aClass ]
!

isBehavior
	^ true
! !

Behavior subclass: #Class
	slots: {#package. #subclasses}
	package: 'Kernel-Classes'!
!Class commentStamp!
I am __the__ class object.

My instances are the classes of the system.
Class creation is done throught a `ClassBuilder` instance.!

!Class methodsFor: 'accessing'!

basicPackage: aPackage
	package := aPackage
!

classTag
	"Returns a tag or general category for this class.
	Typically used to help tools do some reflection.
	Helios, for example, uses this to decide what icon the class should display."
	
	^ 'class'
!

definition
	^ String streamContents: [ :stream | stream
		print: self superclass; write: ' subclass: '; printSymbol: self name; lf;
		write: (self traitCompositionDefinition ifNotEmpty: [ :tcd | { String tab. 'uses: '. tcd. String lf }]);
		tab; write: {'slots: {'. ('. ' join: (self instanceVariableNames collect: #symbolPrintString)). '}'}; lf;
		tab; write: 'package: '; print: self category ]
!

package
	^ package
!

rename: aString
	ClassBuilder new renameClass: self to: aString
!

subclasses
	^ subclasses copy
!

theMetaClass
	^ self class
! !

!Class methodsFor: 'converting'!

provided
	"Returns JS proxy that allows to access 'static API', as in
	  Number provided EPSILON
	that forwards to (wrapped JS) constructor function."
	
	^ self javaScriptConstructor provided
! !

!Class methodsFor: 'enumerating'!

includingPossibleMetaDo: aBlock

	aBlock value: self.
	aBlock value: self theMetaClass
! !

!Class methodsFor: 'testing'!

isClass
	^ true
! !

Behavior subclass: #Metaclass
	slots: {#instanceClass}
	package: 'Kernel-Classes'!
!Metaclass commentStamp!
I am the root of the class hierarchy.

My instances are metaclasses, one for each real class, and have a single instance, which they hold onto: the class that they are the metaclass of.!

!Metaclass methodsFor: 'accessing'!

definition
	^ String streamContents: [ :stream | stream
		print: self;
		write: (self traitCompositionDefinition
			ifEmpty: [' ']
			ifNotEmpty: [ :tcd | { String lf. String tab. 'uses: '. tcd. String lf. String tab }]);
		write: {'slots: {'. ('. ' join: (self instanceVariableNames collect: #symbolPrintString)). '}'} ]
!

instanceClass
	^ instanceClass
!

instanceVariableNames: aString
	"Kept for file-in compatibility."
	^ self slots: aString instanceVariablesStringAsSlotList
!

name
	^ self instanceClass name, ' class'
!

package
	^ self instanceClass package
!

slots: aCollection
	ClassBuilder new
		class: self slots: aCollection.
	^ self
!

subclasses
	^ Smalltalk core metaSubclasses: self
!

theMetaClass
	^ self
!

theNonMetaClass
	^ self instanceClass
!

uses: aTraitCompositionDescription instanceVariableNames: aString
	"Kept for file-in compatibility."
	^ self uses: aTraitCompositionDescription slots: aString instanceVariablesStringAsSlotList
!

uses: aTraitCompositionDescription slots: aCollection
	self
		slots: aCollection;
		setTraitComposition: aTraitCompositionDescription asTraitComposition.
	^ self
! !

!Metaclass methodsFor: 'converting'!

asJavaScriptSource
	^ '$globals.', self instanceClass name, '.a$cls'
! !

!Metaclass methodsFor: 'testing'!

isMetaclass
	^ true
! !

Object subclass: #ClassBuilder
	slots: {}
	package: 'Kernel-Classes'!
!ClassBuilder commentStamp!
I am responsible for compiling new classes or modifying existing classes in the system.

Rather than using me directly to compile a class, use `Class >> subclass:instanceVariableNames:package:`.!

!ClassBuilder methodsFor: 'class definition'!

addSubclassOf: aClass named: className instanceVariableNames: aCollection package: packageName
	| theClass thePackage |
	
	theClass := Smalltalk globals at: className.
	thePackage := Package named: packageName.
	
	theClass ifNotNil: [
		theClass package: thePackage.
		theClass superclass == aClass
			ifFalse: [ ^ self
				migrateClassNamed: className
				superclass: aClass
				instanceVariableNames: aCollection
				package: packageName ] ].
		
	^ (self
		basicAddSubclassOf: aClass
		named: className
		instanceVariableNames: aCollection
		package: packageName) recompile; yourself
!

addTraitNamed: traitName package: packageName
	| theTrait thePackage |
	
	theTrait := Smalltalk globals at: traitName.
	thePackage := Package named: packageName.
	
	theTrait ifNotNil: [ ^ theTrait package: thePackage; recompile; yourself ].
		
	^ self
		basicAddTraitNamed: traitName
		package: packageName
!

class: aClass slots: aCollection
	self basicClass: aClass instanceVariables: aCollection.
	
	SystemAnnouncer current
		announce: (ClassDefinitionChanged new
			theClass: aClass;
			yourself)
!

superclass: aClass subclass: className
	^ self superclass: aClass subclass: className slots: #() package: nil
!

superclass: aClass subclass: className slots: aCollection package: packageName
	| newClass |
	
	newClass := self addSubclassOf: aClass
		named: className instanceVariableNames: aCollection
		package: (packageName ifNil: [ 'unclassified' ]).
	
	SystemAnnouncer current
		announce: (ClassAdded new
			theClass: newClass;
			yourself).
	
	^ newClass
! !

!ClassBuilder methodsFor: 'class migration'!

migrateClass: aClass superclass: anotherClass
	^ self
		migrateClassNamed: aClass name
		superclass: anotherClass
		instanceVariableNames: aClass instanceVariableNames
		package: aClass package name
!

migrateClassNamed: className superclass: aClass instanceVariableNames: aCollection package: packageName
	| oldClass newClass tmp |
	
	tmp := 'new*', className.
	oldClass := Smalltalk globals at: className.
	
	newClass := self
		addSubclassOf: aClass
		named: tmp
		instanceVariableNames: aCollection
		package: packageName.

	self basicSwapClassNames: oldClass with: newClass.

	[ self copyClass: oldClass to: newClass ]
		on: Error
		do: [ :exception |
			self
				basicSwapClassNames: oldClass with: newClass;
				basicRemoveClass: newClass.
				exception pass ].

	self
		rawRenameClass: oldClass to: tmp;
		rawRenameClass: newClass to: className.

	oldClass subclasses 
		do: [ :each | self migrateClass: each superclass: newClass ].

	self basicRemoveClass: oldClass.
	
	SystemAnnouncer current announce: (ClassMigrated new
		theClass: newClass;
		oldClass: oldClass;
		yourself).
	
	^ newClass
!

renameClass: aClass to: className
	self basicRenameClass: aClass to: className.
	
	"Recompile the class to fix potential issues with super sends"
	aClass recompile.
	
	SystemAnnouncer current
		announce: (ClassRenamed new
			theClass: aClass;
			yourself)
! !

!ClassBuilder methodsFor: 'copying'!

copyClass: aClass named: className
	| newClass |

	newClass := self
		addSubclassOf: aClass superclass
		named: className
		instanceVariableNames: aClass instanceVariableNames
		package: aClass package name.

	self copyClass: aClass to: newClass.
	
	SystemAnnouncer current
		announce: (ClassAdded new
			theClass: newClass;
			yourself).
	
	^ newClass
!

copyClass: aClass to: anotherClass

	anotherClass comment: aClass comment.

	aClass methodDictionary valuesDo: [ :each |
		each origin = aClass ifTrue: [
			Compiler new install: each source forClass: anotherClass protocol: each protocol ] ].
	anotherClass setTraitComposition: aClass traitComposition.

	self basicClass: anotherClass class instanceVariables: aClass class instanceVariableNames.

	aClass class methodDictionary valuesDo: [ :each |
		each origin = aClass class ifTrue: [
			Compiler new install: each source forClass: anotherClass class protocol: each protocol ] ].
	anotherClass class setTraitComposition: aClass class traitComposition
! !

!ClassBuilder methodsFor: 'private'!

basicAddSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName
	<inlineJS: '
		return $core.addClass(aString, aClass, aCollection, packageName);
	'>
!

basicAddTraitNamed: aString package: anotherString
	<inlineJS: 'return $core.addTrait(aString, anotherString)'>
!

basicClass: aClass instanceVariables: aCollection

	aClass isMetaclass ifFalse: [ self error: aClass name, ' is not a metaclass' ].
	Smalltalk core setSlots: aClass to: aCollection
!

basicRemoveClass: aClass
	<inlineJS: '$core.removeClass(aClass)'>
!

basicRenameClass: aClass to: aString
	<inlineJS: '
		$globals[aString] = aClass;
		delete $globals[aClass.name];
		aClass.name = aString;
	'>
!

basicSwapClassNames: aClass with: anotherClass
	<inlineJS: '
		var tmp = aClass.name;
		aClass.name = anotherClass.name;
		anotherClass.name = tmp;
	'>
!

rawRenameClass: aClass to: aString
	<inlineJS: '
		$globals[aString] = aClass;
	'>
! !

!ClassBuilder class methodsFor: 'as yet unclassified'!

sortClasses: aCollection
	| root members |
	root := {nil. {}}.
	members := HashedCollection new.
	aCollection do: [ :each | members at: each name put: {each. {}} ].
	(aCollection asArray sorted: [ :a :b | a name <= b name ]) do: [ :each |
		| target |
		target := members
			at: (each superclass ifNotNil: [ :superklass | superklass name ])
			ifAbsent: [ root ].
		target second add: (members at: each name) ].
	^ root second
! !

Trait named: #TBehaviorDefaults
	package: 'Kernel-Classes'!

!TBehaviorDefaults methodsFor: 'accessing'!

allInstanceVariableNames
	"Default for non-classes; to be able to send #allInstanceVariableNames to any class / trait."
	^ #()
!

name
	^ nil
!

superclass
	"Default for non-classes; to be able to send #superclass to any class / trait."
	^ nil
!

traitUsers
	"Default for non-traits; to be able to send #traitUsers to any class / trait"
	^ #()
! !

!TBehaviorDefaults methodsFor: 'enumerating'!

allSubclassesDo: aBlock
	"Default for non-classes; to be able to send #allSubclassesDo: to any class / trait."
!

includingPossibleMetaDo: aBlock
	"Default for non-classes."
	aBlock value: self
! !

!TBehaviorDefaults methodsFor: 'printing'!

printOn: aStream
	self name
		ifNil: [ super printOn: aStream ]
		ifNotNil: [ :name | aStream nextPutAll: name ]
! !

Trait named: #TBehaviorProvider
	package: 'Kernel-Classes'!
!TBehaviorProvider commentStamp!
I have method dictionary and organization.!

!TBehaviorProvider methodsFor: 'accessing'!

>> aString
	^ self methodAt: aString
!

methodAt: aString
	^ self methodDictionary at: aString
!

methodDictionary
	<inlineJS: 'var dict = $globals.HashedCollection._new();
	var methods = self.methods;
	Object.keys(methods).forEach(function(i) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	});
	return dict'>
!

methodOrganizationEnter: aMethod andLeave: oldMethod
	aMethod ifNotNil: [
		self organization addElement: aMethod protocol ].
	
	oldMethod ifNotNil: [
		self removeProtocolIfEmpty: oldMethod protocol ]
!

methodTemplate
	^ String streamContents: [ :stream | stream 
		write: 'messageSelectorAndArgumentNames'; lf;
		tab; write: '"comment stating purpose of message"'; lf;
		lf;
		tab; write: '| temporary variable names |'; lf;
		tab; write: 'statements' ]
!

methods
	^ self methodDictionary values
!

methodsInProtocol: aString
	^ self methods select: [ :each | each protocol = aString ]
!

organization
	^ self basicOrganization ifNil: [
		self basicOrganization: (ClassOrganizer on: self).
		self basicOrganization ]
!

ownMethods
	"Answer the methods of the receiver that are not package extensions
	nor obtained via trait composition"

	^ (self ownProtocols 
		inject: OrderedCollection new
		into: [ :acc :each | acc, (self ownMethodsInProtocol: each) ])
			sorted: [ :a :b | a selector <= b selector ]
!

ownMethodsInProtocol: aString
	^ (self methodsInProtocol: aString) select: [ :each | each origin = self ]
!

ownProtocols
	"Answer the protocols of the receiver that are not package extensions"

	^ self protocols reject: [ :each |
		each match: '^\*' ]
!

packageOfProtocol: aString
	"Answer the package the method of receiver belongs to:
	- if it is an extension method, answer the corresponding package
	- else answer the receiver's package"
	
	(aString beginsWith: '*') ifFalse: [
		^ self package ].
		
	^ Package 
		named: aString allButFirst
		ifAbsent: [ nil ]
!

protocols
	^ self organization elements asArray sorted
!

removeProtocolIfEmpty: aString
	self methods
		detect: [ :each | each protocol = aString ]
		ifNone: [ self organization removeElement: aString ]
!

selectors
	^ self methodDictionary keys
!

traitComposition
	^ (self basicAt: 'traitComposition')
		ifNil: [ #() ]
		ifNotNil: [ :aCollection | aCollection collect: [ :each | TraitTransformation fromJSON: each ] ]
!

traitCompositionDefinition
	^ self traitComposition ifNotEmpty: [ :traitComposition |
		String streamContents: [ :str |
			str write: '{'.
			traitComposition
				do: [ :each | str write: each definition ]
				separatedBy: [ str write: '. ' ].
			str write: '}' ] ]
! !

!TBehaviorProvider methodsFor: 'compiling'!

addCompiledMethod: aMethod
	| oldMethod announcement |
	
	oldMethod := self methodDictionary
		at: aMethod selector
		ifAbsent: [ nil ].
	
	self basicAddCompiledMethod: aMethod.
	
	announcement := oldMethod
		ifNil: [
			MethodAdded new
					method: aMethod;
					yourself ]
		ifNotNil: [
			MethodModified new
					oldMethod: oldMethod;
					method: aMethod;
					yourself ].
					
					
	SystemAnnouncer current
				announce: announcement
!

compile: aString protocol: anotherString
	^ Compiler new
		install: aString
		forClass: self
		protocol: anotherString
!

recompile
	^ Compiler new recompile: self
!

removeCompiledMethod: aMethod
	self basicRemoveCompiledMethod: aMethod.
	
	SystemAnnouncer current
		announce: (MethodRemoved new
			method: aMethod;
			yourself)
!

setTraitComposition: aTraitComposition
	<inlineJS: '$core.setTraitComposition(aTraitComposition._asJavaScriptObject(), self)'>
! !

!TBehaviorProvider methodsFor: 'enumerating'!

protocolsDo: aBlock
	"Execute aBlock for each method protocol with
	its collection of methods in the sort order of protocol name."

	| methodsByProtocol |
	methodsByProtocol := HashedCollection new.
	self methodDictionary valuesDo: [ :m |
		(methodsByProtocol at: m protocol ifAbsentPut: [ Array new ])
			add: m ].
	self protocols do: [ :protocol |
		aBlock value: protocol value: (methodsByProtocol at: protocol) ]
! !

!TBehaviorProvider methodsFor: 'private'!

basicAddCompiledMethod: aMethod
	<inlineJS: '$core.addMethod(aMethod, self)'>
!

basicRemoveCompiledMethod: aMethod
	<inlineJS: '$core.removeMethod(aMethod,self)'>
! !

!TBehaviorProvider methodsFor: 'testing'!

includesSelector: aString
	^ self methodDictionary includesKey: aString
! !

Trait named: #TMasterBehavior
	package: 'Kernel-Classes'!
!TMasterBehavior commentStamp!
I am the behavior on the instance-side of the browser.

I define things like package, category, name, comment etc.
as opposed to derived behaviors (metaclass, class trait, ...)
that relate to me.!

!TMasterBehavior methodsFor: 'accessing'!

category
	^ self package ifNil: [ 'Unclassified' ] ifNotNil: [ self package name ]
!

classTag
	"Every master behavior should define a class tag."
	^ self subclassResponsibility
!

comment
	^ (self basicAt: 'comment') ifNil: [ '' ]
!

comment: aString
	self basicAt: 'comment' put: aString.
	SystemAnnouncer current
		announce: (ClassCommentChanged new
			theClass: self;
			yourself)
!

definedMethods
	"Answers methods of me and derived 'meta' part if present"
	| methods |
	methods := self methods.
	self theMetaClass
		ifNil: [ ^ methods ]
		ifNotNil: [ :meta | ^ methods, meta methods ]
!

enterOrganization
	Smalltalk ifNotNil: [
		(self basicAt: 'category')
			ifNil: [ self basicPackage: nil ]
			ifNotNil: [ :category |
				"Amber has 1-1 correspondence between cat and pkg, atm"
				self basicPackage: (Package named: category).
				self package organization addElement: self ] ]
!

leaveOrganization
	Smalltalk ifNotNil: [
		self package organization removeElement: self ]
!

name
	<inlineJS: 'return self.name'>
!

package: aPackage
	| oldPackage |
	
	self package = aPackage ifTrue: [ ^ self ].
	
	oldPackage := self package.
	
	self
		leaveOrganization;
		basicAt: 'category' put: aPackage name;
		enterOrganization.

	SystemAnnouncer current announce: (ClassMoved new
		theClass: self;
		oldPackage: oldPackage;
		yourself)
!

theNonMetaClass
	^ self
! !

!TMasterBehavior methodsFor: 'browsing'!

browse
	Finder findClass: self
! !

!TMasterBehavior methodsFor: 'converting'!

asJavaScriptSource
	^ '$globals.', self name
! !

Object subclass: #Trait
	slots: {#organization. #package. #traitUsers}
	package: 'Kernel-Classes'!

!Trait methodsFor: 'accessing'!

basicOrganization
	^ organization
!

basicOrganization: aClassOrganizer
	organization := aClassOrganizer
!

basicPackage: aPackage
	package := aPackage
!

classTag
	^ 'trait'
!

definition
	^ String streamContents: [ :stream | stream
		write: 'Trait named: '; printSymbol: self name; lf;
		write: (self traitCompositionDefinition ifNotEmpty: [ :tcd | { String tab. 'uses: '. tcd. String lf }]);
		tab; write: 'package: '; print: self category ]
!

package
	^ package
!

theMetaClass
	^ nil
!

traitUsers
	^ traitUsers copy
! !

!Trait methodsFor: 'composition'!

- anArray
	^ self asTraitTransformation - anArray
!

@ anArrayOfAssociations
	^ self asTraitTransformation @ anArrayOfAssociations
! !

!Trait methodsFor: 'converting'!

asTraitComposition
	^ self asTraitTransformation asTraitComposition
!

asTraitTransformation
	^ TraitTransformation on: self
! !

!Trait class methodsFor: 'instance creation'!

named: aString package: anotherString
	^ ClassBuilder new addTraitNamed: aString package: anotherString
!

named: aString uses: aTraitCompositionDescription package: anotherString
	| trait |
	trait := self named: aString package: anotherString.
	trait setTraitComposition: aTraitCompositionDescription asTraitComposition.
	^ trait
! !

Object subclass: #TraitTransformation
	slots: {#trait. #aliases. #exclusions}
	package: 'Kernel-Classes'!
!TraitTransformation commentStamp!
I am a single step in trait composition.

I represent one trait including its aliases and exclusions.!

!TraitTransformation methodsFor: 'accessing'!

addAliases: anArrayOfAssociations
	anArrayOfAssociations do: [ :each |
		| key |
		key := each key.
		aliases at: key
			ifPresent: [ self error: 'Cannot use same alias name twice.' ]
			ifAbsent: [ aliases at: key put: each value ] ].
	^ anArrayOfAssociations
!

addExclusions: anArray
	exclusions addAll: anArray.
	^ anArray
!

aliases
	^ aliases
!

definition
	^ String streamContents: [ :str |
		str print: self trait.
		self aliases ifNotEmpty: [ :al |
			str write: ' @ {'.
			al associations
				do: [ :each | str printSymbol: each key; write: ' -> '; printSymbol: each value ]
				separatedBy: [ str write: '. ' ].
			str write: '}' ].
		self exclusions ifNotEmpty: [ :ex |
			str write: ' - #('.
			ex asArray sorted 
				do: [ :each | str write: each symbolPrintString allButFirst ]
				separatedBy: [ str space ].
			str write: ')' ] ]
!

exclusions
	^ exclusions
!

trait
	^ trait
!

trait: anObject
	trait := anObject
! !

!TraitTransformation methodsFor: 'composition'!

- anArray
	^ self copy addExclusions: anArray; yourself
!

@ anArrayOfAssociations
	^ self copy addAliases: anArrayOfAssociations; yourself
! !

!TraitTransformation methodsFor: 'converting'!

asJavaScriptObject
	^ #{
		'trait' -> self trait.
		'aliases' -> self aliases.
		'exclusions' -> self exclusions asArray sorted }
!

asJavaScriptSource
	^ String streamContents: [ :str | str write: {
		'{trait: '. self trait asJavaScriptSource.
		self aliases ifNotEmpty: [ :al |
			{', aliases: '. al asJSONString} ].
		self exclusions ifNotEmpty: [ :ex |
			{', exclusions: '. ex asArray sorted asJavaScriptSource} ].
		'}' } ]
!

asTraitComposition
	^ { self }
!

asTraitTransformation
	^ self
! !

!TraitTransformation methodsFor: 'copying'!

postCopy
	aliases := aliases copy.
	exclusions := exclusions copy
! !

!TraitTransformation methodsFor: 'initialization'!

initialize
	super initialize.

	aliases := #{}.
	exclusions := Set new.
	trait := nil
! !

!TraitTransformation class methodsFor: 'instance creation'!

fromJSON: aJSObject
	^ super new
		trait: (aJSObject at: #trait);
		addAliases: (Smalltalk readJSObject: (aJSObject at: #aliases ifAbsent: [#{}])) associations;
		addExclusions: (aJSObject at: #exclusions ifAbsent: [#()]);
		yourself
!

on: aTrait
	^ super new trait: aTrait; yourself
! !

Behavior setTraitComposition: {TBehaviorDefaults. TBehaviorProvider} asTraitComposition!
Class setTraitComposition: {TMasterBehavior. TSubclassable} asTraitComposition!
Trait setTraitComposition: {TBehaviorDefaults. TBehaviorProvider. TMasterBehavior} asTraitComposition!
! !

!Array methodsFor: '*Kernel-Classes'!

asTraitComposition
	"not implemented yet, noop atm"
	^ self collect: [ :each | each asTraitTransformation ]
! !

!String methodsFor: '*Kernel-Classes'!

instanceVariablesStringAsSlotList
	^ (self tokenize: ' ') reject: [ :each | each isEmpty ]
! !

