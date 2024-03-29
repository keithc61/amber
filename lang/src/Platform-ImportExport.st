Smalltalk createPackage: 'Platform-ImportExport'!
Object subclass: #AbstractExporter
	slots: {}
	package: 'Platform-ImportExport'!
!AbstractExporter commentStamp!
I am an abstract exporter for Amber source code.

## API

Use `#exportPackage:on:` to export a given package on a Stream.!

!AbstractExporter methodsFor: 'accessing'!

extensionMethodsOfPackage: aPackage
	| result |
	
	result := OrderedCollection new.
	
	(self extensionProtocolsOfPackage: aPackage) do: [ :each |
		result addAll: each ownMethods ].
		
	^ result
!

extensionProtocolsOfPackage: aPackage
	| extensionName result |
	
	extensionName := '*', aPackage name.
	result := OrderedCollection new.
	
	"The classes must be loaded since it is extensions only.
	Therefore topological sorting (dependency resolution) does not matter here.
	Not sorting topologically improves the speed by a number of magnitude.
	
	Not to shuffle diffs, classes are sorted by their name."
	
	(Smalltalk classes asArray sorted: [ :a :b | a name < b name ]) do: [ :each |
		each includingPossibleMetaDo: [ :behavior |
			(behavior protocols includes: extensionName) ifTrue: [
				result add: (ExportMethodProtocol name: extensionName theClass: behavior) ] ] ].

	^ result
! !

!AbstractExporter methodsFor: 'output'!

exportPackage: aPackage on: aStream
	self subclassResponsibility
! !

AbstractExporter subclass: #ChunkExporter
	slots: {}
	package: 'Platform-ImportExport'!
!ChunkExporter commentStamp!
I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.

I do not output any compiled code.!

!ChunkExporter methodsFor: 'accessing'!

extensionCategoriesOfPackage: aPackage
	"Issue #143: sort protocol alphabetically"

	| name map result |
	name := aPackage name.
	result := OrderedCollection new.
	(Package sortedClasses: Smalltalk classes) do: [ :each |
		each includingPossibleMetaDo: [ :aClass |
			map := Dictionary new.
			aClass protocolsDo: [ :category :methods |
				category = ('*', name) ifTrue: [ map at: category put: methods ] ].
			result addAll: ((map keys sorted: [ :a :b | a <= b ]) collect: [ :category |
				MethodCategory name: category theClass: aClass methods: (map at: category) ]) ] ].
	^ result
!

ownCategoriesOfClass: aClass
	"Answer the protocols of aClass that are not package extensions"
	
	"Issue #143: sort protocol alphabetically"

	| map |
	map := Dictionary new.
	aClass protocolsDo: [ :each :methods |
		(each match: '^\*') ifFalse: [ map at: each put: methods ] ].
	^ (map keys sorted: [ :a :b | a <= b ]) collect: [ :each |
		MethodCategory name: each theClass: aClass methods: (map at: each) ]
!

ownCategoriesOfMetaClass: aClass
	"Issue #143: sort protocol alphabetically"

	^ self ownCategoriesOfClass: aClass theMetaClass
!

ownMethodProtocolsOfClass: aClass
	"Answer a collection of ExportMethodProtocol object of aClass that are not package extensions"
	
	^ aClass ownProtocols collect: [ :each |
		ExportMethodProtocol name: each theClass: aClass ]
! !

!ChunkExporter methodsFor: 'convenience'!

chunkEscape: aString
	"Replace all occurrences of !! with !!!! and trim at both ends."

	^ (aString replace: '!!' with: '!!!!') trimBoth
! !

!ChunkExporter methodsFor: 'output'!

exportBehavior: aBehavior on: aStream
	aBehavior exportBehaviorDefinitionTo: aStream using: self.
	self 
		exportProtocols: (self ownMethodProtocolsOfClass: aBehavior)
		on: aStream
!

exportCategoryEpilogueOf: aCategory on: aStream
	aStream write: ' !!'; lf; lf
!

exportCategoryPrologueOf: aCategory on: aStream
	aStream
		write: '!!';
		print: aCategory theClass;
		write: ' methodsFor: ';
		print: aCategory;
		write: '!!'
!

exportDefinitionOf: aClass on: aStream
	"Chunk format."

	aStream
		print: aClass superclass;
		write: ' subclass: ';
		printSymbol: aClass name;
		lf.
	"aClass traitComposition
		ifNotEmpty: [ aStream tab; write: {'uses: '. aClass traitCompositionDefinition}; lf ]."
	aStream
		tab;
		write: {'slots: {'. ('. ' join: (aClass instanceVariableNames collect: #symbolPrintString)). '}'};
		lf;
		tab;
		write: 'package: ';
		print: aClass category;
		write: '!!';
		lf.
	aClass comment ifNotEmpty: [ aStream
		write: '!!'; print: aClass; write: ' commentStamp!!'; lf;
		write: { self chunkEscape: aClass comment. '!!' }; lf ].
	aStream lf
!

exportMetaDefinitionOf: aClass on: aStream

	| classIvars classTraitComposition |
	classIvars := aClass class instanceVariableNames.
	classTraitComposition := aClass class traitComposition.

	(classIvars notEmpty "or: [classTraitComposition notEmpty]") ifTrue: [
		aStream
			print: aClass theMetaClass.
		aStream space. "classTraitComposition
			ifEmpty: [ aStream space ]
			ifNotEmpty: [ aStream lf; tab; write: {'uses: '. aClass class traitCompositionDefinition}; lf; tab ]."
		aStream
			write: {'slots: {'. ('. ' join: (classIvars collect: #symbolPrintString)). '}!!'}; lf; lf ]
!

exportMethod: aMethod on: aStream
	aStream
		lf; lf; write: (self chunkEscape: aMethod source); lf;
		write: '!!'
!

exportPackage: aPackage on: aStream

	self
		exportPackageDefinitionOf: aPackage on: aStream;
		exportPackageImportsOf: aPackage on: aStream.
	
	aPackage sortedClasses do: [ :eachClass | eachClass includingPossibleMetaDo: [ :each |
		self exportBehavior: each on: aStream ] ].
	
	self exportPackageTraitCompositionsOf: aPackage on: aStream.

	self 
		exportProtocols: (self extensionProtocolsOfPackage: aPackage)
		on: aStream
!

exportPackageDefinitionOf: aPackage on: aStream
	aStream
		write: 'Smalltalk createPackage: ';
		print: aPackage name;
		write: '!!';
		lf
!

exportPackageImportsOf: aPackage on: aStream
	aPackage imports ifNotEmpty: [ :imports | aStream
		write: '(Smalltalk packageAt: ';
		print: aPackage name;
		write: ' ifAbsent: [ self error: ';
		print: 'Package not created: ', aPackage name;
		write: { ' ]) imports: '. self chunkEscape: aPackage importsDefinition. '!!' };
		lf ]
!

exportPackageTraitCompositionsOf: aPackage on: aStream
	aPackage traitCompositions ifNotEmpty: [ :traitCompositions |
		traitCompositions keysAndValuesDo: [ :key :value | self exportTraitComposition: value of: key on: aStream ].
		aStream write: '!! !!'; lf; lf ]
!

exportProtocol: aProtocol on: aStream
	aProtocol ownMethods ifNotEmpty: [ :methods |
		self exportProtocolPrologueOf: aProtocol on: aStream.
		methods do: [ :method | 
			self exportMethod: method on: aStream ].
		self exportProtocolEpilogueOf: aProtocol on: aStream ]
!

exportProtocolEpilogueOf: aProtocol on: aStream
	aStream write: ' !!'; lf; lf
!

exportProtocolPrologueOf: aProtocol on: aStream
	aStream
		write: '!!';
		print: aProtocol theClass;
		write: ' methodsFor: ';
		print: aProtocol name;
		write: '!!'
!

exportProtocols: aCollection on: aStream
	aCollection do: [ :each |
		self exportProtocol: each on: aStream ]
!

exportTraitComposition: aTraitComposition of: aBehavior on: aStream
	aStream 
		print: aBehavior;
		write: ' setTraitComposition: ';
		write: aBehavior traitCompositionDefinition;
		write: ' asTraitComposition!!';
		lf
!

exportTraitDefinitionOf: aClass on: aStream
	"Chunk format."

	aStream
		write: 'Trait named: '; printSymbol: aClass name; lf.
	"aClass traitComposition
		ifNotEmpty: [ aStream tab; write: {'uses: '. aClass traitCompositionDefinition}; lf ]."
	aStream
		tab; write: 'package: '; print:	aClass category; write: '!!'; lf.
	aClass comment ifNotEmpty: [
		aStream
		write: '!!'; print: aClass; write: ' commentStamp!!'; lf;
		write: { self chunkEscape: aClass comment. '!!' }; lf ].
	aStream lf
! !

AbstractExporter subclass: #Exporter
	slots: {}
	package: 'Platform-ImportExport'!
!Exporter commentStamp!
I am responsible for outputting Amber code into a JavaScript string.

The generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.

## Use case

I am typically used to save code outside of the Amber runtime (committing to disk, etc.).!

!Exporter methodsFor: 'accessing'!

ownMethodsOfClass: aClass
	"Issue #143: sort methods alphabetically"

	^ ((aClass methodDictionary values) sorted: [ :a :b | a selector <= b selector ])
		reject: [ :each | (each protocol match: '^\*') ]
!

ownMethodsOfMetaClass: aClass
	"Issue #143: sort methods alphabetically"

	^ self ownMethodsOfClass: aClass theMetaClass
! !

!Exporter methodsFor: 'output'!

exportBehavior: aBehavior on: aStream
	aBehavior exportBehaviorDefinitionTo: aStream using: self.
	aBehavior ownMethods do: [ :method |
		self exportMethod: method on: aStream ]
!

exportDefinitionOf: aClass on: aStream
	aStream
		lf;
		write: {
			'$core.addClass('.
			aClass name asJavaScriptSource. ', '.
			aClass superclass ifNil: [ 'null' ] ifNotNil: [ :superclass | superclass asJavaScriptSource ]. ', '.
			aClass category asJavaScriptSource.
			');' };
		lf.
	aClass instanceVariableNames ifNotEmpty: [ :ivars | aStream
		write: { '$core.setSlots('. aClass asJavaScriptSource. ', '. ivars asJavaScriptSource. ');' };
		lf ].
	aClass comment ifNotEmpty: [
		aStream
			write: '//>>excludeStart("ide", pragmas.excludeIdeData);'; lf;
			write: { aClass asJavaScriptSource. '.comment='. aClass comment crlfSanitized asJavaScriptSource. ';' }; lf;
			write: '//>>excludeEnd("ide");';
			lf ]
!

exportMetaDefinitionOf: aClass on: aStream
	aStream lf.
	aClass theMetaClass instanceVariableNames ifNotEmpty: [ :classIvars | aStream
		write: { '$core.setSlots('. aClass theMetaClass asJavaScriptSource. ', '. classIvars asJavaScriptSource. ');' };
		lf ]
!

exportMethod: aMethod on: aStream
	aStream
		write: '$core.addMethod('; lf;
		write: '$core.method({'; lf;
		write: { 'selector: '. aMethod selector asJavaScriptSource. ',' }; lf;
		write: { 'protocol: '. aMethod protocol asJavaScriptSource. ',' }; lf.
	aMethod instantiateFn ifNil: [ aStream write: { 'fn: '. aMethod fn compiledSource. ',' }; lf ].
	aStream
		write: '//>>excludeStart("ide", pragmas.excludeIdeData);'; lf;
		write: { 'args: '. aMethod arguments asJavaScriptSource. ',' }; lf;
		write: { 'source: '. aMethod source asJavaScriptSource. ',' }; lf;
		write: { 'referencedClasses: '. aMethod referencedClasses asJavaScriptSource. ',' }; lf;
		write: '//>>excludeEnd("ide");'; lf;
		write: { 'pragmas: '. aMethod basicPragmas asJavaScriptSource. ',' }; lf;
		write: { 'messageSends: '. aMethod messageSends asJavaScriptSource }; lf;
		write: '}'.
	aMethod instantiateFn ifNotNil: [ :ifn | aStream write: { ', '. ifn compiledSource } ].
	aStream
		write: '),'; lf;
		write: { aMethod origin asJavaScriptSource. ');' }; lf; lf
!

exportPackage: aPackage on: aStream
	
	self 
		exportPackagePrologueOf: aPackage on: aStream;
		exportPackageDefinitionOf: aPackage on: aStream;
		exportPackageContextOf: aPackage on: aStream;
		exportPackageImportsOf: aPackage on: aStream;
		exportPackageTransportOf: aPackage on: aStream.
	
	aPackage sortedClasses do: [ :eachClass | eachClass includingPossibleMetaDo: [ :each |
		self exportBehavior: each on: aStream ] ].
			
	self exportPackageTraitCompositionsOf: aPackage on: aStream.

	(self extensionMethodsOfPackage: aPackage) do: [ :each |
		self exportMethod: each on: aStream ].
		
	self exportPackageEpilogueOf: aPackage on: aStream
!

exportPackageBodyBlockPrologueOf: aPackage on: aStream
	aStream
		write: 'var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;'; lf
!

exportPackageContextOf: aPackage on: aStream
	aPackage contextFunctionSource ifNotNil: [ :source |
		aStream
			write: { '$pkg.context = '. source. ';' };
			lf ]
!

exportPackageDefinitionOf: aPackage on: aStream
	aStream
		write: { 'var $pkg = $core.addPackage('. aPackage name asJavaScriptSource. ');' };
		lf
!

exportPackageEpilogueOf: aPackage on: aStream
	self subclassResponsibility
!

exportPackageImportsOf: aPackage on: aStream
	aPackage importsAsJson ifNotEmpty: [ :imports |
		aStream
			write: { '$pkg.imports = '. imports asJavaScriptSource. ';' };
			lf ]
!

exportPackagePrologueOf: aPackage on: aStream
	self subclassResponsibility
!

exportPackageTraitCompositionsOf: aPackage on: aStream
	aPackage traitCompositions ifNotEmpty: [ :traitCompositions |
		traitCompositions keysAndValuesDo: [ :key :value | self exportTraitComposition: value of: key on: aStream ].
		aStream lf ]
!

exportPackageTransportOf: aPackage on: aStream
	aStream
		write: { '$pkg.transport = '. aPackage transport asJSONString. ';' };
		lf
!

exportTraitComposition: aTraitComposition of: aBehavior on: aStream
	aStream write: {
		'$core.setTraitComposition('.
		aTraitComposition asJavaScriptSource.
		', '.
		aBehavior asJavaScriptSource.
		');' };
	lf
!

exportTraitDefinitionOf: aClass on: aStream
	aStream
		lf;
		write: {
			'$core.addTrait('.
			aClass name asJavaScriptSource. ', '.
			aClass category asJavaScriptSource.
			');' }.
	aClass comment ifNotEmpty: [
		aStream
			lf;
			write: '//>>excludeStart("ide", pragmas.excludeIdeData);'; lf;
			write: { aClass asJavaScriptSource. '.comment='. aClass comment crlfSanitized asJavaScriptSource. ';' }; lf;
			write: '//>>excludeEnd("ide");' ].
	aStream lf
! !

Exporter subclass: #AmdExporter
	slots: {#namespace}
	package: 'Platform-ImportExport'!
!AmdExporter commentStamp!
I am used to export Packages in an AMD (Asynchronous Module Definition) JavaScript format.!

!AmdExporter methodsFor: 'output'!

exportPackageEpilogueOf: aPackage on: aStream
	aStream
		write: '});';
		lf
!

exportPackageImportsOf: aPackage on: aStream
	| importsForOutput pragmaStart pragmaEnd |
	pragmaStart := '//>>excludeStart("imports", pragmas.excludeImports);', String lf.
	pragmaEnd := '//>>excludeEnd("imports");', String lf.
	super exportPackageImportsOf: aPackage on: aStream.
	importsForOutput := self importsForOutput: aPackage.
	importsForOutput value ifNotEmpty: [ :imports |
		| vars |
		aStream write: pragmaStart.
		vars := importsForOutput key.
		vars ifNotEmpty: [ aStream write: { 'var '. ',' join: vars. ';' }; lf ]. 
		aStream
			write: {
				'$pkg.isReady = new Promise(function (resolve, reject) { requirejs('.
				imports asJavaScriptSource.
				', function ('.
				',' join: ((1 to: vars size) collect: [ :each | '$', each asString ]).
				') {'.
				(1 to: vars size) collect: [ :each | (vars at: each), '=$', each asString, '; ' ].
				'resolve();}, reject); });' };
			lf;
			write: pragmaEnd ]
!

exportPackagePrologueOf: aPackage on: aStream
	| loadDependencies pragmaStart pragmaEnd |
	pragmaStart := '//>>excludeStart("imports", pragmas.excludeImports);', String lf.
	pragmaEnd := '//>>excludeEnd("imports");', String lf.
	loadDependencies := self amdNamesOfPackages: aPackage loadDependencies.
	aStream
		write: {
			'define('.
			(#('amber/boot' 'require'), loadDependencies asArray sorted) asJavaScriptSource.
			', function($boot,requirejs){"use strict";' };
		lf.
	self exportPackageBodyBlockPrologueOf: aPackage on: aStream
! !

!AmdExporter methodsFor: 'private'!

amdNamesOfPackages: anArray
	^ (anArray
		select: [ :each | (self amdNamespaceOfPackage: each) notNil ])
		collect: [ :each | (self amdNamespaceOfPackage: each), '/', each name ]
!

amdNamespaceOfPackage: aPackage
	^ (aPackage transport type = 'amd')
		ifTrue: [ aPackage transport namespace ]
		ifFalse: [ nil ]
!

importsForOutput: aPackage
	"Returns an association where key is list of import variables
	and value is list of external dependencies, with ones imported as variables
	put at the beginning with same order as is in key.
	
	For example imports:{'jQuery'->'jquery'. 'bootstrap'} would yield
	#('jQuery') -> #('jquery' 'bootstrap')"
	| namedImports anonImports importVarNames |
	namedImports := #().
	anonImports := #().
	importVarNames := #().
	aPackage imports do: [ :each | each isString
		ifTrue: [ anonImports add: each ]
		ifFalse: [ namedImports add: each value.
			importVarNames add: each key ]].
	^ importVarNames -> (namedImports, anonImports)
! !

Object subclass: #ChunkParser
	slots: {#stream. #last}
	package: 'Platform-ImportExport'!
!ChunkParser commentStamp!
I am responsible for parsing aStream contents in the chunk format.

## API

    ChunkParser new
        stream: aStream;
        nextChunk!

!ChunkParser methodsFor: 'accessing'!

last
	^ last
!

stream: aStream
	stream := aStream
! !

!ChunkParser methodsFor: 'reading'!

nextChunk
	"The chunk format (Smalltalk Interchange Format or Fileout format)
	is a trivial format but can be a bit tricky to understand:
		- Uses the exclamation mark as delimiter of chunks.
		- Inside a chunk a normal exclamation mark must be doubled.
		- A non empty chunk must be a valid Smalltalk expression.
		- A chunk on top level with a preceding empty chunk is an instruction chunk:
			- The object created by the expression then takes over reading chunks.

	This method returns next chunk as a String (trimmed), empty String (all whitespace) or nil."

	| char result chunk |
	result := '' writeStream.
		[ char := stream next.
		char notNil ] whileTrue: [
				char = '!!' ifTrue: [
						stream peek = '!!'
								ifTrue: [ stream next "skipping the escape double" ]
								ifFalse: [ ^ last := result contents trimBoth "chunk end marker found" ]].
				result nextPut: char ].
	^ last := nil "a chunk needs to end with !!"
! !

!ChunkParser class methodsFor: 'instance creation'!

on: aStream
	^ self new stream: aStream
! !

Object subclass: #ClassCommentReader
	slots: {#class}
	package: 'Platform-ImportExport'!
!ClassCommentReader commentStamp!
I provide a mechanism for retrieving class comments stored on a file.

See also `ClassCategoryReader`.!

!ClassCommentReader methodsFor: 'accessing'!

class: aClass
	class := aClass
! !

!ClassCommentReader methodsFor: 'fileIn'!

scanFrom: aChunkParser
	| chunk |
	chunk := aChunkParser nextChunk.
	chunk ifNotEmpty: [
		self setComment: chunk ].
! !

!ClassCommentReader methodsFor: 'initialization'!

initialize
	super initialize.
! !

!ClassCommentReader methodsFor: 'private'!

setComment: aString
	class comment: aString
! !

Object subclass: #ClassProtocolReader
	slots: {#class. #category}
	package: 'Platform-ImportExport'!
!ClassProtocolReader commentStamp!
I provide a mechanism for retrieving class descriptions stored on a file in the Smalltalk chunk format.!

!ClassProtocolReader methodsFor: 'accessing'!

class: aClass category: aString
	class := aClass.
	category := aString
! !

!ClassProtocolReader methodsFor: 'fileIn'!

scanFrom: aChunkParser
	| chunk |
	[ chunk := aChunkParser nextChunk.
	chunk isEmpty ] whileFalse: [
		self compileMethod: chunk ]
! !

!ClassProtocolReader methodsFor: 'initialization'!

initialize
	super initialize.
! !

!ClassProtocolReader methodsFor: 'private'!

compileMethod: aString
	Compiler new install: aString forClass: class protocol: category
! !

Object subclass: #ExportMethodProtocol
	slots: {#name. #theClass}
	package: 'Platform-ImportExport'!
!ExportMethodProtocol commentStamp!
I am an abstraction for a method protocol in a class / metaclass.

I know of my class, name and methods.
I am used when exporting a package.!

!ExportMethodProtocol methodsFor: 'accessing'!

methods
	^ (self theClass methodsInProtocol: self name)
		sorted: [ :a :b | a selector <= b selector ]
!

name
	^ name
!

name: aString
	name := aString
!

ownMethods
	^ (self theClass ownMethodsInProtocol: self name)
		sorted: [ :a :b | a selector <= b selector ]
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
! !

!ExportMethodProtocol class methodsFor: 'instance creation'!

name: aString theClass: aClass
	^ self new
		name: aString;
		theClass: aClass;
		yourself
! !

Object subclass: #Importer
	slots: {#lastSection. #lastChunk}
	package: 'Platform-ImportExport'!
!Importer commentStamp!
I can import Amber code from a string in the chunk format.

## API

    Importer new import: aString!

!Importer methodsFor: 'accessing'!

lastChunk
	^ lastChunk
!

lastSection
	^ lastSection
! !

!Importer methodsFor: 'fileIn'!

import: aStream
	| chunk result parser lastEmpty |
	parser := ChunkParser on: aStream.
	lastEmpty := false.
	lastSection := 'n/a, not started'.
	lastChunk := nil.
	[
	[ chunk := parser nextChunk.
	chunk isNil ] whileFalse: [
		chunk
			ifEmpty: [ lastEmpty := true ]
			ifNotEmpty: [
				lastSection := chunk.
				result := Compiler new evaluateExpression: chunk.
				lastEmpty
						ifTrue: [
									lastEmpty := false.
									result scanFrom: parser ]] ].
	lastSection := 'n/a, finished'
	] on: Error do: [:e | lastChunk := parser last. e pass ].
! !

Error subclass: #PackageCommitError
	slots: {}
	package: 'Platform-ImportExport'!
!PackageCommitError commentStamp!
I get signaled when an attempt to commit a package has failed.!

Object subclass: #PackageHandler
	slots: {}
	package: 'Platform-ImportExport'!
!PackageHandler commentStamp!
I am responsible for handling package loading and committing.

I should not be used directly. Instead, use the corresponding `Package` methods.!

!PackageHandler methodsFor: 'accessing'!

chunkContentsFor: aPackage
	^ String streamContents: [ :str |
		self chunkExporter exportPackage: aPackage on: str ]
!

chunkExporterClass
	^ ChunkExporter
!

commitPathJsFor: aPackage
	self subclassResponsibility
!

commitPathStFor: aPackage
	self subclassResponsibility
!

contentsFor: aPackage
	^ String streamContents: [ :str |
		self exporter exportPackage: aPackage on: str ]
!

exporterClass
	self subclassResponsibility
!

setPath: aString forPackage: aPackage
	self subclassResponsibility
! !

!PackageHandler methodsFor: 'committing'!

commit: aPackage
	self 
		commit: aPackage
		onSuccess: []
		onError: [ :error |
			PackageCommitError
				signal: 'Commiting failed with reason: "' , error responseText , '"' ]
!

commit: aPackage onSuccess: aBlock onError: anotherBlock
	self 
		commitJsFileFor: aPackage 
		onSuccess: [
			self 
				commitStFileFor: aPackage 
				onSuccess: [ aPackage beClean. aBlock value ]
				onError: anotherBlock ] 
		onError: anotherBlock
!

commitJsFileFor: aPackage onSuccess: aBlock onError: anotherBlock
	self 
		ajaxPutAt: (self commitPathJsFor: aPackage), '/', aPackage name, '.js'
		data: (self contentsFor: aPackage)
		onSuccess: aBlock
		onError: anotherBlock
!

commitStFileFor: aPackage onSuccess: aBlock onError: anotherBlock
	self 
		ajaxPutAt: (self commitPathStFor: aPackage), '/', aPackage name, '.st'
		data: (self chunkContentsFor: aPackage)
		onSuccess: aBlock
		onError: anotherBlock
! !

!PackageHandler methodsFor: 'factory'!

chunkExporter
	^ self chunkExporterClass new
!

exporter
	^ self exporterClass new
! !

!PackageHandler methodsFor: 'loading'!

load: aPackage
	"Should return a TThenable"
	self subclassResponsibility
! !

!PackageHandler methodsFor: 'private'!

ajaxPutAt: aURL data: aString onSuccess: aBlock onError: anotherBlock
	| xhr |
	xhr := Platform newXhr.
	xhr open: 'PUT' url: aURL async: true.
	xhr onreadystatechange: [
		xhr readyState = 4 ifTrue: [
			(xhr status >= 200 and: [ xhr status < 300 ])
				ifTrue: aBlock
				ifFalse: anotherBlock ]].
	xhr send: aString
! !

PackageHandler subclass: #AmdPackageHandler
	slots: {}
	package: 'Platform-ImportExport'!
!AmdPackageHandler commentStamp!
I am responsible for handling package loading and committing.

I should not be used directly. Instead, use the corresponding `Package` methods.!

!AmdPackageHandler methodsFor: 'accessing'!

commitPathJsFor: aPackage
	^ self toUrl: (self namespaceFor: aPackage)
!

commitPathStFor: aPackage
	"If _source is not mapped, .st will be committed to .js path.
	It is recommended not to use _source as it can be deprecated."
	
	| path pathWithout |
	path := self toUrl: (self namespaceFor: aPackage), '/_source'.
	pathWithout := self commitPathJsFor: aPackage.
	^ path = (pathWithout, '/_source') ifTrue: [ pathWithout ] ifFalse: [ path ]
!

exporterClass
	^ AmdExporter
!

setPath: aString forPackage: aPackage
	"Set the path the the package's `namespace`"
	
	"Smalltalk amdRequire
		ifNil: [ self error: 'AMD loader not present' ]
		ifNotNil: [ :require |"
			require provided config: #{
				'paths' -> #{
					(self namespaceFor: aPackage) -> aString
				}
			}
		"]"
! !

!AmdPackageHandler methodsFor: 'committing'!

namespaceFor: aPackage
	^ aPackage transport namespace
! !

!AmdPackageHandler methodsFor: 'loading'!

load: aPackage
	^ Promise new: [ :model |
		Smalltalk amdRequire
			ifNil: [ self error: 'AMD loader not present' ]
			ifNotNil: [ :require |
				require
					value: { (self namespaceFor: aPackage), '/', aPackage name }
					value: [ :result | model value: result ]
					value: [ :error | model signal: error ] ] ]
! !

!AmdPackageHandler methodsFor: 'private'!

toUrl: aString
	^ Smalltalk amdRequire
		ifNil: [ self error: 'AMD loader not present' ]
		ifNotNil: [ :require | require provided toUrl: aString ]
! !

!AmdPackageHandler class methodsFor: 'commit paths'!

defaultNamespace
	^ Smalltalk defaultAmdNamespace
!

defaultNamespace: aString
	Smalltalk defaultAmdNamespace: aString
! !

Object subclass: #PackageTransport
	slots: {#package}
	package: 'Platform-ImportExport'!
!PackageTransport commentStamp!
I represent the transport mechanism used to commit a package.

My concrete subclasses have a `#handler` to which committing is delegated.!

!PackageTransport methodsFor: 'accessing'!

commitHandlerClass
	self subclassResponsibility
!

definition
	^ ''
!

package
	^ package
!

package: aPackage
	package := aPackage
!

type
	^ self class type
! !

!PackageTransport methodsFor: 'actions'!

setPath: aString
	"Set the commit path for the package"

	self commitHandler setPath: aString forPackage: package
! !

!PackageTransport methodsFor: 'committing'!

commit
	self commitHandler commit: self package
!

commitOnSuccess: aBlock onError: anotherBlock
	self commitHandler 
		commit: self package
		onSuccess: aBlock
		onError: anotherBlock
! !

!PackageTransport methodsFor: 'converting'!

asJavaScriptObject
	^ #{ 'type' -> self type }
! !

!PackageTransport methodsFor: 'factory'!

commitHandler
	^ self commitHandlerClass new
! !

!PackageTransport methodsFor: 'initialization'!

setupFromJson: anObject
	"no op. override if needed in subclasses"
! !

!PackageTransport methodsFor: 'loading'!

load
	^ ((self commitHandler load: self package)
		then: [ Smalltalk postLoad ])
		catch: [ :e | Smalltalk postFailedLoad: self package. e pass ]
! !

PackageTransport class slots: {#registry}!

!PackageTransport class methodsFor: 'accessing'!

classRegisteredFor: aString
	^ registry at: aString
!

defaultType
	^ AmdPackageTransport type
!

type
	"Override in subclasses"
	^ nil
! !

!PackageTransport class methodsFor: 'initialization'!

initialize
	super initialize.
	self == PackageTransport
		ifTrue: [ registry := #{} ]
		ifFalse: [ self register ]
! !

!PackageTransport class methodsFor: 'instance creation'!

for: aString
	^ (self classRegisteredFor: aString) new
!

fromJson: anObject
	anObject ifNil: [ ^ self for: self defaultType ].
	
	^ (self for: anObject type)
		setupFromJson: anObject;
		yourself
! !

!PackageTransport class methodsFor: 'registration'!

register
	PackageTransport register: self
!

register: aClass
	aClass type ifNotNil: [
		registry at: aClass type put: aClass ]
! !

PackageTransport subclass: #AmdPackageTransport
	slots: {#namespace}
	package: 'Platform-ImportExport'!
!AmdPackageTransport commentStamp!
I am the default transport for committing packages.

See `AmdExporter` and `AmdPackageHandler`.!

!AmdPackageTransport methodsFor: 'accessing'!

commitHandlerClass
	^ AmdPackageHandler
!

definition
	^ String streamContents: [ :stream | stream 
		write: { self class name. ' namespace: ' }; print: self namespace ]
!

namespace
	^ namespace ifNil: [ self defaultNamespace ]
!

namespace: aString
	namespace := aString
! !

!AmdPackageTransport methodsFor: 'converting'!

asJavaScriptObject
	^ super asJavaScriptObject
		at: 'amdNamespace' put: self namespace;
		yourself
! !

!AmdPackageTransport methodsFor: 'defaults'!

defaultNamespace
	^ Smalltalk defaultAmdNamespace
! !

!AmdPackageTransport methodsFor: 'initialization'!

setupFromJson: anObject
	self namespace: (anObject at: 'amdNamespace')
! !

!AmdPackageTransport methodsFor: 'printing'!

printOn: aStream
	super printOn: aStream.
	aStream
		nextPutAll: ' (AMD Namespace: ';
		nextPutAll: self namespace;
		nextPutAll: ')'
! !

!AmdPackageTransport class methodsFor: 'accessing'!

type
	^ 'amd'
! !

!AmdPackageTransport class methodsFor: 'instance creation'!

namespace: aString
	^ self new
		namespace: aString;
		yourself
! !

!Class methodsFor: '*Platform-ImportExport'!

exportBehaviorDefinitionTo: aStream using: anExporter
	anExporter exportDefinitionOf: self on: aStream
! !

!Metaclass methodsFor: '*Platform-ImportExport'!

exportBehaviorDefinitionTo: aStream using: anExporter
	anExporter exportMetaDefinitionOf: self instanceClass on: aStream
! !

!Package methodsFor: '*Platform-ImportExport'!

commit
	^ self transport commit
!

load
	^ self transport load
!

loadFromNamespace: aString
	^ self transport
		namespace: aString;
		load
! !

!Package class methodsFor: '*Platform-ImportExport'!

load: aPackageName
	^ (self named: aPackageName) load
!

load: aPackageName fromNamespace: aString
	^ (self named: aPackageName) loadFromNamespace: aString
! !

!TBehaviorProvider methodsFor: '*Platform-ImportExport'!

methodsFor: aString
	^ ClassProtocolReader new
		class: self category: aString;
		yourself
!

methodsFor: aString stamp: aStamp
	"Added for file-in compatibility, ignores stamp."
	^ self methodsFor: aString
! !

!TMasterBehavior methodsFor: '*Platform-ImportExport'!

commentStamp
	^ ClassCommentReader new
	class: self;
	yourself
!

commentStamp: aStamp prior: prior
		^ self commentStamp
! !

!Trait methodsFor: '*Platform-ImportExport'!

exportBehaviorDefinitionTo: aStream using: anExporter
	anExporter exportTraitDefinitionOf: self on: aStream
! !

