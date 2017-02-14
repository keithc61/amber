Smalltalk createPackage: 'Kernel-Classes'!
Object subclass: #BehaviorBody
	instanceVariableNames: ''
	package: 'Kernel-Classes'!
!BehaviorBody commentStamp!
I am the superclass of all behaviors.

My instances hold the method dictionary.

I also provides methods for compiling methods and examining the method dictionary.!

!BehaviorBody methodsFor: 'accessing'!

>> aString
	^ self methodAt: aString
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

definition
	^ ''
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

name
	<inlineJS: 'return self.className || nil'>
!

organization
	^ self basicAt: 'organization'
!

ownMethods
	"Answer the methods of the receiver that are not package extensions"

	^ (self ownProtocols 
		inject: OrderedCollection new
		into: [ :acc :each | acc, (self methodsInProtocol: each) ])
			sorted: [ :a :b | a selector <= b selector ]
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
	^ self organization elements sorted
!

removeProtocolIfEmpty: aString
	self methods
		detect: [ :each | each protocol = aString ]
		ifNone: [ self organization removeElement: aString ]
!

selectors
	^ self methodDictionary keys
!

theMetaClass
	self subclassResponsibility
!

theNonMetaClass
	self subclassResponsibility
! !

!BehaviorBody methodsFor: 'compiling'!

addCompiledMethod: aMethod
	| oldMethod announcement |
	
	oldMethod := self methodDictionary
		at: aMethod selector
		ifAbsent: [ nil ].
	
	(self protocols includes: aMethod protocol)
		ifFalse: [ self organization addElement: aMethod protocol ].

	self basicAddCompiledMethod: aMethod.
	
	oldMethod ifNotNil: [
		self removeProtocolIfEmpty: oldMethod protocol ].
	
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
	
	self removeProtocolIfEmpty: aMethod protocol.
	
	SystemAnnouncer current
		announce: (MethodRemoved new
			method: aMethod;
			yourself)
!

setTraitComposition: aTraitComposition
	"not implemented yet, noop atm"
! !

!BehaviorBody methodsFor: 'enumerating'!

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

!BehaviorBody methodsFor: 'printing'!

printOn: aStream
	self name
		ifNil: [ super printOn: aStream ]
		ifNotNil: [ :name | aStream nextPutAll: name ]
! !

!BehaviorBody methodsFor: 'private'!

basicAddCompiledMethod: aMethod
	<inlineJS: '$core.addMethod(aMethod, self)'>
!

basicRemoveCompiledMethod: aMethod
	<inlineJS: '$core.removeMethod(aMethod,self)'>
! !

!BehaviorBody methodsFor: 'testing'!

includesSelector: aString
	^ self methodDictionary includesKey: aString
! !

BehaviorBody subclass: #Behavior
	instanceVariableNames: ''
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

definition
	^ ''
!

instanceVariableNames
	<inlineJS: 'return self.iVarNames'>
!

javascriptConstructor
	"Answer the JS constructor used to instantiate. See boot.js"
	
	<inlineJS: 'return self.fn'>
!

javascriptConstructor: aJavaScriptFunction
	"Set the JS constructor used to instantiate.
	See the JS counter-part in boot.js `$core.setClassConstructor'"
	
	<inlineJS: '$core.setClassConstructor(self, aJavaScriptFunction);'>
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
	<inlineJS: 'return self.fn.prototype'>
!

subclasses
	self subclassResponsibility
!

superclass
	<inlineJS: 'return self.superclass'>
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

basicNew
	<inlineJS: 'return new self.fn()'>
!

new
	^ self basicNew initialize
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
	instanceVariableNames: ''
	package: 'Kernel-Classes'!
!Class commentStamp!
I am __the__ class object.

My instances are the classes of the system.
Class creation is done throught a `ClassBuilder` instance.!

!Class methodsFor: 'accessing'!

category
	^ self package ifNil: [ 'Unclassified' ] ifNotNil: [ self package name ]
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
		tab; write: 'instanceVariableNames: '; print: (' ' join: self instanceVariableNames); lf;
		tab; write: 'package: '; print: self category ]
!

package
	^ self basicAt: 'pkg'
!

package: aPackage
	| oldPackage |
	
	self package = aPackage ifTrue: [ ^ self ].
	
	oldPackage := self package.
	
	self basicAt: 'pkg' put: aPackage.
	oldPackage organization removeElement: self.
	aPackage organization addElement: self.

	SystemAnnouncer current announce: (ClassMoved new
		theClass: self;
		oldPackage: oldPackage;
		yourself)
!

rename: aString
	ClassBuilder new renameClass: self to: aString
!

subclasses
	<inlineJS: 'return self.subclasses._copy()'>
!

theMetaClass
	^ self class
!

theNonMetaClass
	^ self
! !

!Class methodsFor: 'browsing'!

browse
	Finder findClass: self
! !

!Class methodsFor: 'class creation'!

subclass: aString 
	"Kept for file-in compatibility."
	^ self subclass: aString instanceVariableNames: '' package: nil
!

subclass: aString instanceVariableNames: anotherString
	"Kept for file-in compatibility."
	^ self subclass: aString instanceVariableNames: anotherString package: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	"Kept for file-in compatibility."
	^ self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3
	"Kept for file-in compatibility. ignores class variables and pools."
	^ self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 package: aString3
	^ ClassBuilder new
		superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3
!

subclass: aString uses: aTraitCompositionDescription 
	"Kept for file-in compatibility."
	^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: '' package: nil
!

subclass: aString uses: aTraitCompositionDescription instanceVariableNames: anotherString
	"Kept for file-in compatibility."
	^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: anotherString package: nil
!

subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 category: aString3
	"Kept for file-in compatibility."
	^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3
!

subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3
	"Kept for file-in compatibility. ignores class variables and pools."
	^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3
!

subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3
	| cls |
	cls := self subclass: aString instanceVariableNames: aString2 package: aString3.
	cls setTraitComposition: aTraitCompositionDescription asTraitComposition.
	^ cls
! !

!Class methodsFor: 'converting'!

asJavascript
	^ '$globals.', self name
! !

!Class methodsFor: 'testing'!

isClass
	^ true
! !

Behavior subclass: #Metaclass
	instanceVariableNames: ''
	package: 'Kernel-Classes'!
!Metaclass commentStamp!
I am the root of the class hierarchy.

My instances are metaclasses, one for each real class, and have a single instance, which they hold onto: the class that they are the metaclass of.!

!Metaclass methodsFor: 'accessing'!

definition
	^ String streamContents: [ :stream | stream
		print: self;
		write: ' instanceVariableNames: ';
		print: (' ' join: self instanceVariableNames) ]
!

instanceClass
	<inlineJS: 'return self.instanceClass'>
!

instanceVariableNames: aCollection
	ClassBuilder new
		class: self instanceVariableNames: aCollection
!

name
	^ self instanceClass name, ' class'
!

package
	^ self instanceClass package
!

subclasses
	<inlineJS: 'return $core.metaSubclasses(self)'>
!

theMetaClass
	^ self
!

theNonMetaClass
	^ self instanceClass
! !

!Metaclass methodsFor: 'converting'!

asJavascript
	^ '$globals.', self instanceClass name, '.klass'
! !

!Metaclass methodsFor: 'testing'!

isMetaclass
	^ true
! !

BehaviorBody subclass: #Trait
	instanceVariableNames: ''
	package: 'Kernel-Classes'!

!Trait methodsFor: 'IDE compatibility'!

allSubclassesDo: aBlock
!

superclass
	^ nil
! !

!Trait methodsFor: 'accessing'!

category
	^ self package ifNil: [ 'Unclassified' ] ifNotNil: [ self package name ]
!

classTag
	^ 'trait'
!

definition
	^ String streamContents: [ :stream | stream
		write: 'Trait named: '; printSymbol: self name; lf;
		tab; write: 'package: '; print: self category ]
!

package
	^ self basicAt: 'pkg'
!

theMetaClass
	^ nil
!

theNonMetaClass
	^ self
! !

!Trait methodsFor: 'compiler compatibility'!

allInstanceVariableNames
	^ #()
! !

!Trait methodsFor: 'composition'!

- anArray
	^ self asTraitTransformation - anArray
!

@ anArrayOfAssociations
	^ self asTraitTransformation @ anArrayOfAssociations
! !

!Trait methodsFor: 'converting'!

asJavascript
	^ '$globals.', self name
!

asTraitComposition
	^ self asTraitTransformation asTraitComposition
!

asTraitTransformation
	^ TraitTransformation on: self
! !

!Trait class methodsFor: 'instance creation'!

named: aString package: anotherString
	<inlineJS: 'return $core.addTrait(aString, anotherString)'>
! !

Object subclass: #ClassBuilder
	instanceVariableNames: ''
	package: 'Kernel-Classes'!
!ClassBuilder commentStamp!
I am responsible for compiling new classes or modifying existing classes in the system.

Rather than using me directly to compile a class, use `Class >> subclass:instanceVariableNames:package:`.!

!ClassBuilder methodsFor: 'accessing'!

instanceVariableNamesFor: aString
	^ (aString tokenize: ' ') reject: [ :each | each isEmpty ]
! !

!ClassBuilder methodsFor: 'class definition'!

addSubclassOf: aClass named: className instanceVariableNames: aCollection package: packageName
	| theClass thePackage |
	
	theClass := Smalltalk globals at: className.
	thePackage := Package named: packageName.
	
	theClass ifNotNil: [
		theClass package: thePackage.
		theClass superclass == aClass ifFalse: [
			^ self
				migrateClassNamed: className
				superclass: aClass
				instanceVariableNames: aCollection
				package: packageName ] ].
		
	^ self
		basicAddSubclassOf: aClass
		named: className
		instanceVariableNames: aCollection
		package: packageName
!

class: aClass instanceVariableNames: ivarNames
	self basicClass: aClass instanceVariableNames: ivarNames.
	
	SystemAnnouncer current
		announce: (ClassDefinitionChanged new
			theClass: aClass;
			yourself)
!

superclass: aClass subclass: className
	^ self superclass: aClass subclass: className instanceVariableNames: '' package: nil
!

superclass: aClass subclass: className instanceVariableNames: ivarNames package: packageName
	| newClass |
	
	newClass := self addSubclassOf: aClass
		named: className instanceVariableNames: (self instanceVariableNamesFor: ivarNames)
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
				exception resignal ].

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
		Compiler new install: each source forClass: anotherClass protocol: each protocol ].

	self basicClass: anotherClass class instanceVariables: aClass class instanceVariableNames.

	aClass class methodDictionary valuesDo: [ :each |
		Compiler new install: each source forClass: anotherClass class protocol: each protocol ]
! !

!ClassBuilder methodsFor: 'method definition'!

installMethod: aCompiledMethod forClass: aBehavior protocol: aString
	aCompiledMethod protocol: aString.
	aBehavior addCompiledMethod: aCompiledMethod.
	^ aCompiledMethod
! !

!ClassBuilder methodsFor: 'private'!

basicAddSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName
	<inlineJS: '
		return $core.addClass(aString, aClass, aCollection, packageName);
	'>
!

basicClass: aClass instanceVariableNames: aString
	self basicClass: aClass instanceVariables: (self instanceVariableNamesFor: aString)
!

basicClass: aClass instanceVariables: aCollection

	aClass isMetaclass ifFalse: [ self error: aClass name, ' is not a metaclass' ].
	aClass basicAt: 'iVarNames' put: aCollection
!

basicRemoveClass: aClass
	<inlineJS: '$core.removeClass(aClass)'>
!

basicRenameClass: aClass to: aString
	<inlineJS: '
		$globals[aString] = aClass;
		delete $globals[aClass.className];
		aClass.className = aString;
	'>
!

basicSwapClassNames: aClass with: anotherClass
	<inlineJS: '
		var tmp = aClass.className;
		aClass.className = anotherClass.className;
		anotherClass.className = tmp;
	'>
!

rawRenameClass: aClass to: aString
	<inlineJS: '
		$globals[aString] = aClass;
	'>
! !

!ClassBuilder methodsFor: 'public'!

setupClass: aClass
	self deprecatedAPI: 'Classes are now auto-inited.'
! !

Object subclass: #ClassSorterNode
	instanceVariableNames: 'theClass level nodes'
	package: 'Kernel-Classes'!
!ClassSorterNode commentStamp!
I provide an algorithm for sorting classes alphabetically.

See [Issue #143](https://lolg.it/amber/amber/issues/143).!

!ClassSorterNode methodsFor: 'accessing'!

getNodesFrom: aCollection
	| children others |
	children := #().
	others := #().
	aCollection do: [ :each |
		(each superclass = self theClass)
			ifTrue: [ children add: each ]
			ifFalse: [ others add: each ]].
	nodes:= children collect: [ :each |
		ClassSorterNode on: each classes: others level: self level + 1 ]
!

level
	^ level
!

level: anInteger
	level := anInteger
!

nodes
	^ nodes
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

!ClassSorterNode methodsFor: 'visiting'!

traverseClassesWith: aCollection
	"sort classes alphabetically Issue #143"

	aCollection add: self theClass.
	(self nodes sorted: [ :a :b | a theClass name <= b theClass name ]) do: [ :aNode |
		aNode traverseClassesWith: aCollection ].
! !

!ClassSorterNode class methodsFor: 'instance creation'!

on: aClass classes: aCollection level: anInteger
	^ self new
		theClass: aClass;
		level: anInteger;
		getNodesFrom: aCollection;
		yourself
! !

Object subclass: #TraitTransformation
	instanceVariableNames: 'trait aliases exclusions'
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
		str write: '('; print: self trait.
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
			str write: ')' ].
		str write: ')' ]
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

asJSON
	^ #{
		'trait' -> self trait.
		'aliases' -> self aliases.
		'exclusions' -> self exclusions asArray sorted }
!

asJavascript
	^ String streamContents: [ :str | str write: {
		'{trait: ' . self trait asJavascript.
		self aliases ifNotEmpty: [ :al |
			{', aliases: '. al asJSONString} ].
		self exclusions ifNotEmpty: [ :ex |
			{', exclusions: '. ex asArray sorted asJavascript} ].
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

!Array methodsFor: '*Kernel-Classes'!

asTraitComposition
	"not implemented yet, noop atm"
	^ self collect: [ :each | each asTraitTransformation ]
! !

!UndefinedObject methodsFor: '*Kernel-Classes'!

subclass: aString 
	"Kept for file-in compatibility."
	^ self subclass: aString instanceVariableNames: '' package: nil
!

subclass: aString instanceVariableNames: anotherString
	"Kept for file-in compatibility."
	^ self subclass: aString instanceVariableNames: anotherString package: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	"Kept for file-in compatibility."
	^ self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3
	"Kept for file-in compatibility. ignores class variables and pools."
	^ self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 package: aString3
	^ ClassBuilder new
		superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3
!

subclass: aString uses: aTraitCompositionDescription 
	"Kept for file-in compatibility."
	^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: '' package: nil
!

subclass: aString uses: aTraitCompositionDescription instanceVariableNames: anotherString
	"Kept for file-in compatibility."
	^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: anotherString package: nil
!

subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 category: aString3
	"Kept for file-in compatibility."
	^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3
!

subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3
	"Kept for file-in compatibility. ignores class variables and pools."
	^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3
!

subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3
	| cls |
	cls := self subclass: aString instanceVariableNames: aString2 package: aString3.
	cls setTraitComposition: aTraitCompositionDescription asTraitComposition.
	^ cls
! !

