define(["amber/boot", "require", "amber/core/Kernel-Classes", "amber/core/Kernel-Exceptions", "amber/core/Kernel-Infrastructure", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Platform-ImportExport");
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("AbstractExporter", $globals.Object, "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AbstractExporter.comment="I am an abstract exporter for Amber source code.\x0a\x0a## API\x0a\x0aUse `#exportPackage:on:` to export a given package on a Stream.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "exportPackage:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractExporter);

$core.addMethod(
$core.method({
selector: "extensionMethodsOfPackage:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "extensionMethodsOfPackage: aPackage\x0a\x09| result |\x0a\x09\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09(self extensionProtocolsOfPackage: aPackage) do: [ :each |\x0a\x09\x09result addAll: each ownMethods ].\x0a\x09\x09\x0a\x09^ result",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "extensionProtocolsOfPackage:", "addAll:", "ownMethods"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=$recv($globals.OrderedCollection)._new();
$recv($self._extensionProtocolsOfPackage_(aPackage))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(result)._addAll_($recv(each)._ownMethods());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extensionMethodsOfPackage:",{aPackage:aPackage,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractExporter);

$core.addMethod(
$core.method({
selector: "extensionProtocolsOfPackage:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "extensionProtocolsOfPackage: aPackage\x0a\x09| extensionName result |\x0a\x09\x0a\x09extensionName := '*', aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09\x0a\x09\x22The classes must be loaded since it is extensions only.\x0a\x09Therefore topological sorting (dependency resolution) does not matter here.\x0a\x09Not sorting topologically improves the speed by a number of magnitude.\x0a\x09\x0a\x09Not to shuffle diffs, classes are sorted by their name.\x22\x0a\x09\x0a\x09(Smalltalk classes asArray sorted: [ :a :b | a name < b name ]) do: [ :each |\x0a\x09\x09each includingPossibleMetaDo: [ :behavior |\x0a\x09\x09\x09(behavior protocols includes: extensionName) ifTrue: [\x0a\x09\x09\x09\x09result add: (ExportMethodProtocol name: extensionName theClass: behavior) ] ] ].\x0a\x0a\x09^ result",
referencedClasses: ["OrderedCollection", "Smalltalk", "ExportMethodProtocol"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "name", "new", "do:", "sorted:", "asArray", "classes", "<", "includingPossibleMetaDo:", "ifTrue:", "includes:", "protocols", "add:", "name:theClass:"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
var extensionName,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
extensionName="*".__comma([$recv(aPackage)._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0]);
result=$recv($globals.OrderedCollection)._new();
$recv($recv($recv($recv($globals.Smalltalk)._classes())._asArray())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$recv(a)._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["name"]=2
//>>excludeEnd("ctx");
][0]).__lt($recv(b)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
})))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._includingPossibleMetaDo_((function(behavior){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(behavior)._protocols())._includes_(extensionName))){
return $recv(result)._add_($recv($globals.ExportMethodProtocol)._name_theClass_(extensionName,behavior));
} else {
return nil;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({behavior:behavior},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extensionProtocolsOfPackage:",{aPackage:aPackage,extensionName:extensionName,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractExporter);



$core.addClass("ChunkExporter", $globals.AbstractExporter, "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ChunkExporter.comment="I am an exporter dedicated to outputting Amber source code in the classic Smalltalk chunk format.\x0a\x0aI do not output any compiled code.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "chunkEscape:",
protocol: "convenience",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "chunkEscape: aString\x0a\x09\x22Replace all occurrences of ! with !! and trim at both ends.\x22\x0a\x0a\x09^ (aString replace: '!' with: '!!') trimBoth",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["trimBoth", "replace:with:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aString)._replace_with_("!","!!"))._trimBoth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chunkEscape:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportBehavior:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBehavior", "aStream"],
source: "exportBehavior: aBehavior on: aStream\x0a\x09aBehavior exportBehaviorDefinitionTo: aStream using: self.\x0a\x09self \x0a\x09\x09exportProtocols: (self ownMethodProtocolsOfClass: aBehavior)\x0a\x09\x09on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["exportBehaviorDefinitionTo:using:", "exportProtocols:on:", "ownMethodProtocolsOfClass:"]
}, function ($methodClass){ return function (aBehavior,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBehavior)._exportBehaviorDefinitionTo_using_(aStream,self);
$self._exportProtocols_on_($self._ownMethodProtocolsOfClass_(aBehavior),aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportBehavior:on:",{aBehavior:aBehavior,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportCategoryEpilogueOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCategory", "aStream"],
source: "exportCategoryEpilogueOf: aCategory on: aStream\x0a\x09aStream write: ' !'; lf; lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "lf"]
}, function ($methodClass){ return function (aCategory,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(" !");
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportCategoryEpilogueOf:on:",{aCategory:aCategory,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportCategoryPrologueOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCategory", "aStream"],
source: "exportCategoryPrologueOf: aCategory on: aStream\x0a\x09aStream\x0a\x09\x09write: '!';\x0a\x09\x09print: aCategory theClass;\x0a\x09\x09write: ' methodsFor: ';\x0a\x09\x09print: aCategory;\x0a\x09\x09write: '!'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "print:", "theClass"]
}, function ($methodClass){ return function (aCategory,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aStream)._write_("!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._print_($recv(aCategory)._theClass())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["print:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(" methodsFor: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
$recv(aStream)._print_(aCategory);
$recv(aStream)._write_("!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportCategoryPrologueOf:on:",{aCategory:aCategory,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportDefinitionOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream\x0a\x09\x09print: aClass superclass;\x0a\x09\x09write: ' subclass: ';\x0a\x09\x09printSymbol: aClass name;\x0a\x09\x09lf.\x0a\x09\x22aClass traitComposition\x0a\x09\x09ifNotEmpty: [ aStream tab; write: {'uses: '. aClass traitCompositionDefinition}; lf ].\x22\x0a\x09aStream\x0a\x09\x09tab;\x0a\x09\x09write: {'slots: {'. ('. ' join: (aClass instanceVariableNames collect: #symbolPrintString)). '}'};\x0a\x09\x09lf;\x0a\x09\x09tab;\x0a\x09\x09write: 'package: ';\x0a\x09\x09print: aClass category;\x0a\x09\x09write: '!';\x0a\x09\x09lf.\x0a\x09aClass comment ifNotEmpty: [ aStream\x0a\x09\x09write: '!'; print: aClass; write: ' commentStamp!'; lf;\x0a\x09\x09write: { self chunkEscape: aClass comment. '!' }; lf ].\x0a\x09aStream lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["print:", "superclass", "write:", "printSymbol:", "name", "lf", "tab", "join:", "collect:", "instanceVariableNames", "category", "ifNotEmpty:", "comment", "chunkEscape:"]
}, function ($methodClass){ return function (aClass,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aStream)._print_($recv(aClass)._superclass())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["print:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(" subclass: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._printSymbol_($recv(aClass)._name());
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._tab()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["tab"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(["slots: {",". "._join_($recv($recv(aClass)._instanceVariableNames())._collect_("symbolPrintString")),"}"])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
$recv(aStream)._tab();
[$recv(aStream)._write_("package: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=3
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._print_($recv(aClass)._category())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["print:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_("!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=4
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=3
//>>excludeEnd("ctx");
][0];
$recv([$recv(aClass)._comment()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["comment"]=1
//>>excludeEnd("ctx");
][0])._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(aStream)._write_("!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=5
//>>excludeEnd("ctx");
][0];
$recv(aStream)._print_(aClass);
[$recv(aStream)._write_(" commentStamp!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=6
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=4
//>>excludeEnd("ctx");
][0];
$recv(aStream)._write_([$self._chunkEscape_($recv(aClass)._comment()),"!"]);
return [$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=5
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportMetaDefinitionOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x0a\x09| classIvars classTraitComposition |\x0a\x09classIvars := aClass class instanceVariableNames.\x0a\x09classTraitComposition := aClass class traitComposition.\x0a\x0a\x09(classIvars notEmpty \x22or: [classTraitComposition notEmpty]\x22) ifTrue: [\x0a\x09\x09aStream\x0a\x09\x09\x09print: aClass theMetaClass.\x0a\x09\x09aStream space. \x22classTraitComposition\x0a\x09\x09\x09ifEmpty: [ aStream space ]\x0a\x09\x09\x09ifNotEmpty: [ aStream lf; tab; write: {'uses: '. aClass class traitCompositionDefinition}; lf; tab ].\x22\x0a\x09\x09aStream\x0a\x09\x09\x09write: {'slots: {'. ('. ' join: (classIvars collect: #symbolPrintString)). '}!'}; lf; lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["instanceVariableNames", "class", "traitComposition", "ifTrue:", "notEmpty", "print:", "theMetaClass", "space", "write:", "join:", "collect:", "lf"]
}, function ($methodClass){ return function (aClass,aStream){
var self=this,$self=this;
var classIvars,classTraitComposition;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
classIvars=$recv([$recv(aClass)._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0])._instanceVariableNames();
classTraitComposition=$recv($recv(aClass)._class())._traitComposition();
if($core.assert($recv(classIvars)._notEmpty())){
$recv(aStream)._print_($recv(aClass)._theMetaClass());
$recv(aStream)._space();
$recv(aStream)._write_(["slots: {",". "._join_($recv(classIvars)._collect_("symbolPrintString")),"}!"]);
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._lf();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream,classIvars:classIvars,classTraitComposition:classTraitComposition})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportMethod:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09lf; lf; write: (self chunkEscape: aMethod source); lf;\x0a\x09\x09write: '!'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lf", "write:", "chunkEscape:", "source"]
}, function ($methodClass){ return function (aMethod,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_($self._chunkEscape_($recv(aMethod)._source()))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._lf();
$recv(aStream)._write_("!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportPackage:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x0a\x09self\x0a\x09\x09exportPackageDefinitionOf: aPackage on: aStream;\x0a\x09\x09exportPackageImportsOf: aPackage on: aStream.\x0a\x09\x0a\x09aPackage sortedClasses do: [ :eachClass | eachClass includingPossibleMetaDo: [ :each |\x0a\x09\x09self exportBehavior: each on: aStream ] ].\x0a\x09\x0a\x09self exportPackageTraitCompositionsOf: aPackage on: aStream.\x0a\x0a\x09self \x0a\x09\x09exportProtocols: (self extensionProtocolsOfPackage: aPackage)\x0a\x09\x09on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["exportPackageDefinitionOf:on:", "exportPackageImportsOf:on:", "do:", "sortedClasses", "includingPossibleMetaDo:", "exportBehavior:on:", "exportPackageTraitCompositionsOf:on:", "exportProtocols:on:", "extensionProtocolsOfPackage:"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._exportPackageDefinitionOf_on_(aPackage,aStream);
$self._exportPackageImportsOf_on_(aPackage,aStream);
$recv($recv(aPackage)._sortedClasses())._do_((function(eachClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(eachClass)._includingPossibleMetaDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._exportBehavior_on_(each,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachClass:eachClass},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._exportPackageTraitCompositionsOf_on_(aPackage,aStream);
$self._exportProtocols_on_($self._extensionProtocolsOfPackage_(aPackage),aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportPackageDefinitionOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09write: 'Smalltalk createPackage: ';\x0a\x09\x09print: aPackage name;\x0a\x09\x09write: '!';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "print:", "name", "lf"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aStream)._write_("Smalltalk createPackage: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._print_($recv(aPackage)._name());
$recv(aStream)._write_("!");
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportPackageImportsOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageImportsOf: aPackage on: aStream\x0a\x09aPackage imports ifNotEmpty: [ :imports | aStream\x0a\x09\x09write: '(Smalltalk packageAt: ';\x0a\x09\x09print: aPackage name;\x0a\x09\x09write: ' ifAbsent: [ self error: ';\x0a\x09\x09print: 'Package not created: ', aPackage name;\x0a\x09\x09write: { ' ]) imports: '. self chunkEscape: aPackage importsDefinition. '!' };\x0a\x09\x09lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotEmpty:", "imports", "write:", "print:", "name", ",", "chunkEscape:", "importsDefinition", "lf"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aPackage)._imports())._ifNotEmpty_((function(imports){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(aStream)._write_("(Smalltalk packageAt: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._print_([$recv(aPackage)._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["print:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(" ifAbsent: [ self error: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
$recv(aStream)._print_("Package not created: ".__comma($recv(aPackage)._name()));
$recv(aStream)._write_([" ]) imports: ",$self._chunkEscape_($recv(aPackage)._importsDefinition()),"!"]);
return $recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({imports:imports},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageImportsOf:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportPackageTraitCompositionsOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageTraitCompositionsOf: aPackage on: aStream\x0a\x09aPackage traitCompositions ifNotEmpty: [ :traitCompositions |\x0a\x09\x09traitCompositions keysAndValuesDo: [ :key :value | self exportTraitComposition: value of: key on: aStream ].\x0a\x09\x09aStream write: '! !'; lf; lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotEmpty:", "traitCompositions", "keysAndValuesDo:", "exportTraitComposition:of:on:", "write:", "lf"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aPackage)._traitCompositions())._ifNotEmpty_((function(traitCompositions){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(traitCompositions)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._exportTraitComposition_of_on_(value,key,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._write_("! !");
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
return $recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({traitCompositions:traitCompositions},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageTraitCompositionsOf:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportProtocol:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol", "aStream"],
source: "exportProtocol: aProtocol on: aStream\x0a\x09aProtocol ownMethods ifNotEmpty: [ :methods |\x0a\x09\x09self exportProtocolPrologueOf: aProtocol on: aStream.\x0a\x09\x09methods do: [ :method | \x0a\x09\x09\x09self exportMethod: method on: aStream ].\x0a\x09\x09self exportProtocolEpilogueOf: aProtocol on: aStream ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotEmpty:", "ownMethods", "exportProtocolPrologueOf:on:", "do:", "exportMethod:on:", "exportProtocolEpilogueOf:on:"]
}, function ($methodClass){ return function (aProtocol,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aProtocol)._ownMethods())._ifNotEmpty_((function(methods){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._exportProtocolPrologueOf_on_(aProtocol,aStream);
$recv(methods)._do_((function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._exportMethod_on_(method,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({method:method},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $self._exportProtocolEpilogueOf_on_(aProtocol,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({methods:methods},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportProtocol:on:",{aProtocol:aProtocol,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportProtocolEpilogueOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol", "aStream"],
source: "exportProtocolEpilogueOf: aProtocol on: aStream\x0a\x09aStream write: ' !'; lf; lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "lf"]
}, function ($methodClass){ return function (aProtocol,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(" !");
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportProtocolEpilogueOf:on:",{aProtocol:aProtocol,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportProtocolPrologueOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProtocol", "aStream"],
source: "exportProtocolPrologueOf: aProtocol on: aStream\x0a\x09aStream\x0a\x09\x09write: '!';\x0a\x09\x09print: aProtocol theClass;\x0a\x09\x09write: ' methodsFor: ';\x0a\x09\x09print: aProtocol name;\x0a\x09\x09write: '!'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "print:", "theClass", "name"]
}, function ($methodClass){ return function (aProtocol,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aStream)._write_("!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._print_($recv(aProtocol)._theClass())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["print:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(" methodsFor: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
$recv(aStream)._print_($recv(aProtocol)._name());
$recv(aStream)._write_("!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportProtocolPrologueOf:on:",{aProtocol:aProtocol,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportProtocols:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "aStream"],
source: "exportProtocols: aCollection on: aStream\x0a\x09aCollection do: [ :each |\x0a\x09\x09self exportProtocol: each on: aStream ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "exportProtocol:on:"]
}, function ($methodClass){ return function (aCollection,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._exportProtocol_on_(each,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportProtocols:on:",{aCollection:aCollection,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportTraitComposition:of:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTraitComposition", "aBehavior", "aStream"],
source: "exportTraitComposition: aTraitComposition of: aBehavior on: aStream\x0a\x09aStream \x0a\x09\x09print: aBehavior;\x0a\x09\x09write: ' setTraitComposition: ';\x0a\x09\x09write: aBehavior traitCompositionDefinition;\x0a\x09\x09write: ' asTraitComposition!';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["print:", "write:", "traitCompositionDefinition", "lf"]
}, function ($methodClass){ return function (aTraitComposition,aBehavior,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._print_(aBehavior);
[$recv(aStream)._write_(" setTraitComposition: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_($recv(aBehavior)._traitCompositionDefinition())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
$recv(aStream)._write_(" asTraitComposition!");
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportTraitComposition:of:on:",{aTraitComposition:aTraitComposition,aBehavior:aBehavior,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "exportTraitDefinitionOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportTraitDefinitionOf: aClass on: aStream\x0a\x09\x22Chunk format.\x22\x0a\x0a\x09aStream\x0a\x09\x09write: 'Trait named: '; printSymbol: aClass name; lf.\x0a\x09\x22aClass traitComposition\x0a\x09\x09ifNotEmpty: [ aStream tab; write: {'uses: '. aClass traitCompositionDefinition}; lf ].\x22\x0a\x09aStream\x0a\x09\x09tab; write: 'package: '; print:\x09aClass category; write: '!'; lf.\x0a\x09aClass comment ifNotEmpty: [\x0a\x09\x09aStream\x0a\x09\x09write: '!'; print: aClass; write: ' commentStamp!'; lf;\x0a\x09\x09write: { self chunkEscape: aClass comment. '!' }; lf ].\x0a\x09aStream lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "printSymbol:", "name", "lf", "tab", "print:", "category", "ifNotEmpty:", "comment", "chunkEscape:"]
}, function ($methodClass){ return function (aClass,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aStream)._write_("Trait named: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._printSymbol_($recv(aClass)._name());
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._tab();
[$recv(aStream)._write_("package: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._print_($recv(aClass)._category())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["print:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_("!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=3
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
$recv([$recv(aClass)._comment()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["comment"]=1
//>>excludeEnd("ctx");
][0])._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(aStream)._write_("!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=4
//>>excludeEnd("ctx");
][0];
$recv(aStream)._print_(aClass);
[$recv(aStream)._write_(" commentStamp!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=5
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=3
//>>excludeEnd("ctx");
][0];
$recv(aStream)._write_([$self._chunkEscape_($recv(aClass)._comment()),"!"]);
return [$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=4
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportTraitDefinitionOf:on:",{aClass:aClass,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "extensionCategoriesOfPackage:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "extensionCategoriesOfPackage: aPackage\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| name map result |\x0a\x09name := aPackage name.\x0a\x09result := OrderedCollection new.\x0a\x09(Package sortedClasses: Smalltalk classes) do: [ :each |\x0a\x09\x09each includingPossibleMetaDo: [ :aClass |\x0a\x09\x09\x09map := Dictionary new.\x0a\x09\x09\x09aClass protocolsDo: [ :category :methods |\x0a\x09\x09\x09\x09category = ('*', name) ifTrue: [ map at: category put: methods ] ].\x0a\x09\x09\x09result addAll: ((map keys sorted: [ :a :b | a <= b ]) collect: [ :category |\x0a\x09\x09\x09\x09MethodCategory name: category theClass: aClass methods: (map at: category) ]) ] ].\x0a\x09^ result",
referencedClasses: ["OrderedCollection", "Package", "Smalltalk", "Dictionary", "MethodCategory"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name", "new", "do:", "sortedClasses:", "classes", "includingPossibleMetaDo:", "protocolsDo:", "ifTrue:", "=", ",", "at:put:", "addAll:", "collect:", "sorted:", "keys", "<=", "name:theClass:methods:", "at:"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
var name,map,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
name=$recv(aPackage)._name();
result=[$recv($globals.OrderedCollection)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv($globals.Package)._sortedClasses_($recv($globals.Smalltalk)._classes()))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._includingPossibleMetaDo_((function(aClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
map=$recv($globals.Dictionary)._new();
$recv(aClass)._protocolsDo_((function(category,methods){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
if($core.assert($recv(category).__eq("*".__comma(name)))){
return $recv(map)._at_put_(category,methods);
} else {
return nil;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({category:category,methods:methods},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return $recv(result)._addAll_($recv($recv($recv(map)._keys())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(a).__lt_eq(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({a:a,b:b},$ctx3,5)});
//>>excludeEnd("ctx");
})))._collect_((function(category){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($globals.MethodCategory)._name_theClass_methods_(category,aClass,$recv(map)._at_(category));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({category:category},$ctx3,6)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({aClass:aClass},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extensionCategoriesOfPackage:",{aPackage:aPackage,name:name,map:map,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "ownCategoriesOfClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownCategoriesOfClass: aClass\x0a\x09\x22Answer the protocols of aClass that are not package extensions\x22\x0a\x09\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09| map |\x0a\x09map := Dictionary new.\x0a\x09aClass protocolsDo: [ :each :methods |\x0a\x09\x09(each match: '^\x5c*') ifFalse: [ map at: each put: methods ] ].\x0a\x09^ (map keys sorted: [ :a :b | a <= b ]) collect: [ :each |\x0a\x09\x09MethodCategory name: each theClass: aClass methods: (map at: each) ]",
referencedClasses: ["Dictionary", "MethodCategory"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "protocolsDo:", "ifFalse:", "match:", "at:put:", "collect:", "sorted:", "keys", "<=", "name:theClass:methods:", "at:"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
var map;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
map=$recv($globals.Dictionary)._new();
$recv(aClass)._protocolsDo_((function(each,methods){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(each)._match_("^\x5c*"))){
return nil;
} else {
return $recv(map)._at_put_(each,methods);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,methods:methods},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv($recv($recv(map)._keys())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__lt_eq(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,3)});
//>>excludeEnd("ctx");
})))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.MethodCategory)._name_theClass_methods_(each,aClass,$recv(map)._at_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfClass:",{aClass:aClass,map:map})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "ownCategoriesOfMetaClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownCategoriesOfMetaClass: aClass\x0a\x09\x22Issue #143: sort protocol alphabetically\x22\x0a\x0a\x09^ self ownCategoriesOfClass: aClass theMetaClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ownCategoriesOfClass:", "theMetaClass"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._ownCategoriesOfClass_($recv(aClass)._theMetaClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownCategoriesOfMetaClass:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);

$core.addMethod(
$core.method({
selector: "ownMethodProtocolsOfClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownMethodProtocolsOfClass: aClass\x0a\x09\x22Answer a collection of ExportMethodProtocol object of aClass that are not package extensions\x22\x0a\x09\x0a\x09^ aClass ownProtocols collect: [ :each |\x0a\x09\x09ExportMethodProtocol name: each theClass: aClass ]",
referencedClasses: ["ExportMethodProtocol"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "ownProtocols", "name:theClass:"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aClass)._ownProtocols())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.ExportMethodProtocol)._name_theClass_(each,aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethodProtocolsOfClass:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkExporter);



$core.addClass("Exporter", $globals.AbstractExporter, "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Exporter.comment="I am responsible for outputting Amber code into a JavaScript string.\x0a\x0aThe generated output is enough to reconstruct the exported data, including Smalltalk source code and other metadata.\x0a\x0a## Use case\x0a\x0aI am typically used to save code outside of the Amber runtime (committing to disk, etc.).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "exportBehavior:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBehavior", "aStream"],
source: "exportBehavior: aBehavior on: aStream\x0a\x09aBehavior exportBehaviorDefinitionTo: aStream using: self.\x0a\x09aBehavior ownMethods do: [ :method |\x0a\x09\x09self exportMethod: method on: aStream ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["exportBehaviorDefinitionTo:using:", "do:", "ownMethods", "exportMethod:on:"]
}, function ($methodClass){ return function (aBehavior,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBehavior)._exportBehaviorDefinitionTo_using_(aStream,self);
$recv($recv(aBehavior)._ownMethods())._do_((function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._exportMethod_on_(method,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({method:method},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportBehavior:on:",{aBehavior:aBehavior,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportDefinitionOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportDefinitionOf: aClass on: aStream\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09write: {\x0a\x09\x09\x09'$core.addClass('.\x0a\x09\x09\x09aClass name asJavaScriptSource. ', '.\x0a\x09\x09\x09aClass superclass ifNil: [ 'null' ] ifNotNil: [ :superclass | superclass asJavaScriptSource ]. ', '.\x0a\x09\x09\x09aClass category asJavaScriptSource.\x0a\x09\x09\x09');' };\x0a\x09\x09lf.\x0a\x09aClass instanceVariableNames ifNotEmpty: [ :ivars | aStream\x0a\x09\x09write: { '$core.setSlots('. aClass asJavaScriptSource. ', '. ivars asJavaScriptSource. ');' };\x0a\x09\x09lf ].\x0a\x09aClass comment ifNotEmpty: [\x0a\x09\x09aStream\x0a\x09\x09\x09write: '//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);'; lf;\x0a\x09\x09\x09write: { aClass asJavaScriptSource. '.comment='. aClass comment crlfSanitized asJavaScriptSource. ';' }; lf;\x0a\x09\x09\x09write: '//>>excludeEnd(\x22ide\x22);';\x0a\x09\x09\x09lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lf", "write:", "asJavaScriptSource", "name", "ifNil:ifNotNil:", "superclass", "category", "ifNotEmpty:", "instanceVariableNames", "comment", "crlfSanitized"]
}, function ($methodClass){ return function (aClass,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
$1=[$recv($recv(aClass)._name())._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=1
//>>excludeEnd("ctx");
][0];
$2=$recv(aClass)._superclass();
if($2 == null || $2.a$nil){
$3="null";
} else {
var superclass;
superclass=$2;
$3=[$recv(superclass)._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=2
//>>excludeEnd("ctx");
][0];
}
[$recv(aStream)._write_(["$core.addClass(",$1,", ",$3,", ",[$recv($recv(aClass)._category())._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=3
//>>excludeEnd("ctx");
][0],");"])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
[$recv($recv(aClass)._instanceVariableNames())._ifNotEmpty_((function(ivars){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(aStream)._write_(["$core.setSlots(",[$recv(aClass)._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asJavaScriptSource"]=4
//>>excludeEnd("ctx");
][0],", ",[$recv(ivars)._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asJavaScriptSource"]=5
//>>excludeEnd("ctx");
][0],");"])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
return [$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=3
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ivars:ivars},$ctx1,3)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["ifNotEmpty:"]=1
//>>excludeEnd("ctx");
][0];
$recv([$recv(aClass)._comment()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["comment"]=1
//>>excludeEnd("ctx");
][0])._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(aStream)._write_("//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=3
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=4
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_([[$recv(aClass)._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asJavaScriptSource"]=6
//>>excludeEnd("ctx");
][0],".comment=",$recv($recv($recv(aClass)._comment())._crlfSanitized())._asJavaScriptSource(),";"])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=4
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=5
//>>excludeEnd("ctx");
][0];
$recv(aStream)._write_("//>>excludeEnd(\x22ide\x22);");
return $recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportDefinitionOf:on:",{aClass:aClass,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportMetaDefinitionOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportMetaDefinitionOf: aClass on: aStream\x0a\x09aStream lf.\x0a\x09aClass theMetaClass instanceVariableNames ifNotEmpty: [ :classIvars | aStream\x0a\x09\x09write: { '$core.setSlots('. aClass theMetaClass asJavaScriptSource. ', '. classIvars asJavaScriptSource. ');' };\x0a\x09\x09lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lf", "ifNotEmpty:", "instanceVariableNames", "theMetaClass", "write:", "asJavaScriptSource"]
}, function ($methodClass){ return function (aClass,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv([$recv(aClass)._theMetaClass()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["theMetaClass"]=1
//>>excludeEnd("ctx");
][0])._instanceVariableNames())._ifNotEmpty_((function(classIvars){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(["$core.setSlots(",[$recv($recv(aClass)._theMetaClass())._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asJavaScriptSource"]=1
//>>excludeEnd("ctx");
][0],", ",$recv(classIvars)._asJavaScriptSource(),");"]);
return $recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({classIvars:classIvars},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMetaDefinitionOf:on:",{aClass:aClass,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportMethod:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aStream"],
source: "exportMethod: aMethod on: aStream\x0a\x09aStream\x0a\x09\x09write: '$core.addMethod('; lf;\x0a\x09\x09write: '$core.method({'; lf;\x0a\x09\x09write: { 'selector: '. aMethod selector asJavaScriptSource. ',' }; lf;\x0a\x09\x09write: { 'protocol: '. aMethod protocol asJavaScriptSource. ',' }; lf.\x0a\x09aMethod instantiateFn ifNil: [ aStream write: { 'fn: '. aMethod fn compiledSource. ',' }; lf ].\x0a\x09aStream\x0a\x09\x09write: '//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);'; lf;\x0a\x09\x09write: { 'args: '. aMethod arguments asJavaScriptSource. ',' }; lf;\x0a\x09\x09write: { 'source: '. aMethod source asJavaScriptSource. ',' }; lf;\x0a\x09\x09write: { 'referencedClasses: '. aMethod referencedClasses asJavaScriptSource. ',' }; lf;\x0a\x09\x09write: '//>>excludeEnd(\x22ide\x22);'; lf;\x0a\x09\x09write: { 'pragmas: '. aMethod basicPragmas asJavaScriptSource. ',' }; lf;\x0a\x09\x09write: { 'messageSends: '. aMethod messageSends asJavaScriptSource }; lf;\x0a\x09\x09write: '}'.\x0a\x09aMethod instantiateFn ifNotNil: [ :ifn | aStream write: { ', '. ifn compiledSource } ].\x0a\x09aStream\x0a\x09\x09write: '),'; lf;\x0a\x09\x09write: { aMethod origin asJavaScriptSource. ');' }; lf; lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "lf", "asJavaScriptSource", "selector", "protocol", "ifNil:", "instantiateFn", "compiledSource", "fn", "arguments", "source", "referencedClasses", "basicPragmas", "messageSends", "ifNotNil:", "origin"]
}, function ($methodClass){ return function (aMethod,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
[$recv(aStream)._write_("$core.addMethod(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_("$core.method({")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(["selector: ",[$recv($recv(aMethod)._selector())._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=1
//>>excludeEnd("ctx");
][0],","])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=3
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=3
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(["protocol: ",[$recv($recv(aMethod)._protocol())._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=2
//>>excludeEnd("ctx");
][0],","])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=4
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=4
//>>excludeEnd("ctx");
][0];
$1=[$recv(aMethod)._instantiateFn()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["instantiateFn"]=1
//>>excludeEnd("ctx");
][0];
if($1 == null || $1.a$nil){
[$recv(aStream)._write_(["fn: ",[$recv($recv(aMethod)._fn())._compiledSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["compiledSource"]=1
//>>excludeEnd("ctx");
][0],","])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=5
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=5
//>>excludeEnd("ctx");
][0];
}
[$recv(aStream)._write_("//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=6
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=6
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(["args: ",[$recv($recv(aMethod)._arguments())._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=3
//>>excludeEnd("ctx");
][0],","])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=7
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=7
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(["source: ",[$recv($recv(aMethod)._source())._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=4
//>>excludeEnd("ctx");
][0],","])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=8
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=8
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(["referencedClasses: ",[$recv($recv(aMethod)._referencedClasses())._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=5
//>>excludeEnd("ctx");
][0],","])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=9
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=9
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_("//>>excludeEnd(\x22ide\x22);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=10
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=10
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(["pragmas: ",[$recv($recv(aMethod)._basicPragmas())._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=6
//>>excludeEnd("ctx");
][0],","])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=11
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=11
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(["messageSends: ",[$recv($recv(aMethod)._messageSends())._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=7
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=12
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=12
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_("}")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=13
//>>excludeEnd("ctx");
][0];
$2=$recv(aMethod)._instantiateFn();
if($2 != null && !$2.a$nil){
var ifn;
ifn=$2;
[$recv(aStream)._write_([", ",$recv(ifn)._compiledSource()])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=14
//>>excludeEnd("ctx");
][0];
}
[$recv(aStream)._write_("),")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=15
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=13
//>>excludeEnd("ctx");
][0];
$recv(aStream)._write_([$recv($recv(aMethod)._origin())._asJavaScriptSource(),");"]);
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=14
//>>excludeEnd("ctx");
][0];
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportMethod:on:",{aMethod:aMethod,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackage:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackage: aPackage on: aStream\x0a\x09\x0a\x09self \x0a\x09\x09exportPackagePrologueOf: aPackage on: aStream;\x0a\x09\x09exportPackageDefinitionOf: aPackage on: aStream;\x0a\x09\x09exportPackageContextOf: aPackage on: aStream;\x0a\x09\x09exportPackageImportsOf: aPackage on: aStream;\x0a\x09\x09exportPackageTransportOf: aPackage on: aStream.\x0a\x09\x0a\x09aPackage sortedClasses do: [ :eachClass | eachClass includingPossibleMetaDo: [ :each |\x0a\x09\x09self exportBehavior: each on: aStream ] ].\x0a\x09\x09\x09\x0a\x09self exportPackageTraitCompositionsOf: aPackage on: aStream.\x0a\x0a\x09(self extensionMethodsOfPackage: aPackage) do: [ :each |\x0a\x09\x09self exportMethod: each on: aStream ].\x0a\x09\x09\x0a\x09self exportPackageEpilogueOf: aPackage on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["exportPackagePrologueOf:on:", "exportPackageDefinitionOf:on:", "exportPackageContextOf:on:", "exportPackageImportsOf:on:", "exportPackageTransportOf:on:", "do:", "sortedClasses", "includingPossibleMetaDo:", "exportBehavior:on:", "exportPackageTraitCompositionsOf:on:", "extensionMethodsOfPackage:", "exportMethod:on:", "exportPackageEpilogueOf:on:"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._exportPackagePrologueOf_on_(aPackage,aStream);
$self._exportPackageDefinitionOf_on_(aPackage,aStream);
$self._exportPackageContextOf_on_(aPackage,aStream);
$self._exportPackageImportsOf_on_(aPackage,aStream);
$self._exportPackageTransportOf_on_(aPackage,aStream);
[$recv($recv(aPackage)._sortedClasses())._do_((function(eachClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(eachClass)._includingPossibleMetaDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._exportBehavior_on_(each,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachClass:eachClass},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["do:"]=1
//>>excludeEnd("ctx");
][0];
$self._exportPackageTraitCompositionsOf_on_(aPackage,aStream);
$recv($self._extensionMethodsOfPackage_(aPackage))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._exportMethod_on_(each,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$self._exportPackageEpilogueOf_on_(aPackage,aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackage:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageBodyBlockPrologueOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageBodyBlockPrologueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09write: 'var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;'; lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "lf"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_("var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;");
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageBodyBlockPrologueOf:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageContextOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageContextOf: aPackage on: aStream\x0a\x09aPackage contextFunctionSource ifNotNil: [ :source |\x0a\x09\x09aStream\x0a\x09\x09\x09write: { '$pkg.context = '. source. ';' };\x0a\x09\x09\x09lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "contextFunctionSource", "write:", "lf"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aPackage)._contextFunctionSource();
if($1 != null && !$1.a$nil){
var source;
source=$1;
$recv(aStream)._write_(["$pkg.context = ",source,";"]);
$recv(aStream)._lf();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageContextOf:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageDefinitionOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageDefinitionOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09write: { 'var $pkg = $core.addPackage('. aPackage name asJavaScriptSource. ');' };\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "asJavaScriptSource", "name", "lf"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(["var $pkg = $core.addPackage(",$recv($recv(aPackage)._name())._asJavaScriptSource(),");"]);
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageDefinitionOf:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageEpilogueOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageImportsOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageImportsOf: aPackage on: aStream\x0a\x09aPackage importsAsJson ifNotEmpty: [ :imports |\x0a\x09\x09aStream\x0a\x09\x09\x09write: { '$pkg.imports = '. imports asJavaScriptSource. ';' };\x0a\x09\x09\x09lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotEmpty:", "importsAsJson", "write:", "asJavaScriptSource", "lf"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aPackage)._importsAsJson())._ifNotEmpty_((function(imports){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(["$pkg.imports = ",$recv(imports)._asJavaScriptSource(),";"]);
return $recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({imports:imports},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageImportsOf:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackagePrologueOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageTraitCompositionsOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageTraitCompositionsOf: aPackage on: aStream\x0a\x09aPackage traitCompositions ifNotEmpty: [ :traitCompositions |\x0a\x09\x09traitCompositions keysAndValuesDo: [ :key :value | self exportTraitComposition: value of: key on: aStream ].\x0a\x09\x09aStream lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotEmpty:", "traitCompositions", "keysAndValuesDo:", "exportTraitComposition:of:on:", "lf"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aPackage)._traitCompositions())._ifNotEmpty_((function(traitCompositions){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(traitCompositions)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._exportTraitComposition_of_on_(value,key,aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(aStream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({traitCompositions:traitCompositions},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageTraitCompositionsOf:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportPackageTransportOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageTransportOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09write: { '$pkg.transport = '. aPackage transport asJSONString. ';' };\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "asJSONString", "transport", "lf"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(["$pkg.transport = ",$recv($recv(aPackage)._transport())._asJSONString(),";"]);
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageTransportOf:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportTraitComposition:of:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTraitComposition", "aBehavior", "aStream"],
source: "exportTraitComposition: aTraitComposition of: aBehavior on: aStream\x0a\x09aStream write: {\x0a\x09\x09'$core.setTraitComposition('.\x0a\x09\x09aTraitComposition asJavaScriptSource.\x0a\x09\x09', '.\x0a\x09\x09aBehavior asJavaScriptSource.\x0a\x09\x09');' };\x0a\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "asJavaScriptSource", "lf"]
}, function ($methodClass){ return function (aTraitComposition,aBehavior,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_(["$core.setTraitComposition(",[$recv(aTraitComposition)._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=1
//>>excludeEnd("ctx");
][0],", ",$recv(aBehavior)._asJavaScriptSource(),");"]);
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportTraitComposition:of:on:",{aTraitComposition:aTraitComposition,aBehavior:aBehavior,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "exportTraitDefinitionOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aStream"],
source: "exportTraitDefinitionOf: aClass on: aStream\x0a\x09aStream\x0a\x09\x09lf;\x0a\x09\x09write: {\x0a\x09\x09\x09'$core.addTrait('.\x0a\x09\x09\x09aClass name asJavaScriptSource. ', '.\x0a\x09\x09\x09aClass category asJavaScriptSource.\x0a\x09\x09\x09');' }.\x0a\x09aClass comment ifNotEmpty: [\x0a\x09\x09aStream\x0a\x09\x09\x09lf;\x0a\x09\x09\x09write: '//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);'; lf;\x0a\x09\x09\x09write: { aClass asJavaScriptSource. '.comment='. aClass comment crlfSanitized asJavaScriptSource. ';' }; lf;\x0a\x09\x09\x09write: '//>>excludeEnd(\x22ide\x22);' ].\x0a\x09aStream lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lf", "write:", "asJavaScriptSource", "name", "category", "ifNotEmpty:", "comment", "crlfSanitized"]
}, function ($methodClass){ return function (aClass,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_(["$core.addTrait(",[$recv($recv(aClass)._name())._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=1
//>>excludeEnd("ctx");
][0],", ",[$recv($recv(aClass)._category())._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asJavaScriptSource"]=2
//>>excludeEnd("ctx");
][0],");"])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
$recv([$recv(aClass)._comment()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["comment"]=1
//>>excludeEnd("ctx");
][0])._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_("//>>excludeStart(\x22ide\x22, pragmas.excludeIdeData);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=3
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._write_([[$recv(aClass)._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asJavaScriptSource"]=3
//>>excludeEnd("ctx");
][0],".comment=",$recv($recv($recv(aClass)._comment())._crlfSanitized())._asJavaScriptSource(),";"])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=3
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=4
//>>excludeEnd("ctx");
][0];
return $recv(aStream)._write_("//>>excludeEnd(\x22ide\x22);");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportTraitDefinitionOf:on:",{aClass:aClass,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "ownMethodsOfClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownMethodsOfClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^ ((aClass methodDictionary values) sorted: [ :a :b | a selector <= b selector ])\x0a\x09\x09reject: [ :each | (each protocol match: '^\x5c*') ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reject:", "sorted:", "values", "methodDictionary", "<=", "selector", "match:", "protocol"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv($recv(aClass)._methodDictionary())._values())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$recv(a)._selector()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["selector"]=1
//>>excludeEnd("ctx");
][0]).__lt_eq($recv(b)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
})))._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._protocol())._match_("^\x5c*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfClass:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);

$core.addMethod(
$core.method({
selector: "ownMethodsOfMetaClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "ownMethodsOfMetaClass: aClass\x0a\x09\x22Issue #143: sort methods alphabetically\x22\x0a\x0a\x09^ self ownMethodsOfClass: aClass theMetaClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ownMethodsOfClass:", "theMetaClass"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._ownMethodsOfClass_($recv(aClass)._theMetaClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethodsOfMetaClass:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Exporter);



$core.addClass("AmdExporter", $globals.Exporter, "Platform-ImportExport");
$core.setSlots($globals.AmdExporter, ["namespace"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AmdExporter.comment="I am used to export Packages in an AMD (Asynchronous Module Definition) JavaScript format.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "amdNamesOfPackages:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "amdNamesOfPackages: anArray\x0a\x09^ (anArray\x0a\x09\x09select: [ :each | (self amdNamespaceOfPackage: each) notNil ])\x0a\x09\x09collect: [ :each | (self amdNamespaceOfPackage: each), '/', each name ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "select:", "notNil", "amdNamespaceOfPackage:", ",", "name"]
}, function ($methodClass){ return function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(anArray)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$self._amdNamespaceOfPackage_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["amdNamespaceOfPackage:"]=1
//>>excludeEnd("ctx");
][0])._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv($recv($self._amdNamespaceOfPackage_(each)).__comma("/")).__comma($recv(each)._name())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"amdNamesOfPackages:",{anArray:anArray})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "amdNamespaceOfPackage:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "amdNamespaceOfPackage: aPackage\x0a\x09^ (aPackage transport type = 'amd')\x0a\x09\x09ifTrue: [ aPackage transport namespace ]\x0a\x09\x09ifFalse: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "=", "type", "transport", "namespace"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv([$recv(aPackage)._transport()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["transport"]=1
//>>excludeEnd("ctx");
][0])._type()).__eq("amd"))){
return $recv($recv(aPackage)._transport())._namespace();
} else {
return nil;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"amdNamespaceOfPackage:",{aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "exportPackageEpilogueOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageEpilogueOf: aPackage on: aStream\x0a\x09aStream\x0a\x09\x09write: '});';\x0a\x09\x09lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:", "lf"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._write_("});");
$recv(aStream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageEpilogueOf:on:",{aPackage:aPackage,aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "exportPackageImportsOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackageImportsOf: aPackage on: aStream\x0a\x09| importsForOutput pragmaStart pragmaEnd |\x0a\x09pragmaStart := '//>>excludeStart(\x22imports\x22, pragmas.excludeImports);', String lf.\x0a\x09pragmaEnd := '//>>excludeEnd(\x22imports\x22);', String lf.\x0a\x09super exportPackageImportsOf: aPackage on: aStream.\x0a\x09importsForOutput := self importsForOutput: aPackage.\x0a\x09importsForOutput value ifNotEmpty: [ :imports |\x0a\x09\x09| vars |\x0a\x09\x09aStream write: pragmaStart.\x0a\x09\x09vars := importsForOutput key.\x0a\x09\x09vars ifNotEmpty: [ aStream write: { 'var '. ',' join: vars. ';' }; lf ]. \x0a\x09\x09aStream\x0a\x09\x09\x09write: {\x0a\x09\x09\x09\x09'$pkg.isReady = new Promise(function (resolve, reject) { requirejs('.\x0a\x09\x09\x09\x09imports asJavaScriptSource.\x0a\x09\x09\x09\x09', function ('.\x0a\x09\x09\x09\x09',' join: ((1 to: vars size) collect: [ :each | '$', each asString ]).\x0a\x09\x09\x09\x09') {'.\x0a\x09\x09\x09\x09(1 to: vars size) collect: [ :each | (vars at: each), '=$', each asString, '; ' ].\x0a\x09\x09\x09\x09'resolve();}, reject); });' };\x0a\x09\x09\x09lf;\x0a\x09\x09\x09write: pragmaEnd ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "lf", "exportPackageImportsOf:on:", "importsForOutput:", "ifNotEmpty:", "value", "write:", "key", "join:", "asJavaScriptSource", "collect:", "to:", "size", "asString", "at:"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
var importsForOutput,pragmaStart,pragmaEnd;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
pragmaStart=["//>>excludeStart(\x22imports\x22, pragmas.excludeImports);".__comma([$recv($globals.String)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
pragmaEnd=["//>>excludeEnd(\x22imports\x22);".__comma([$recv($globals.String)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0];
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._exportPackageImportsOf_on_.call($self,aPackage,aStream))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
importsForOutput=$self._importsForOutput_(aPackage);
[$recv($recv(importsForOutput)._value())._ifNotEmpty_((function(imports){
var vars;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(aStream)._write_(pragmaStart)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
vars=$recv(importsForOutput)._key();
$recv(vars)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
[$recv(aStream)._write_(["var ",[","._join_(vars)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["join:"]=1
//>>excludeEnd("ctx");
][0],";"])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
return [$recv(aStream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["lf"]=3
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
[$recv(aStream)._write_(["$pkg.isReady = new Promise(function (resolve, reject) { requirejs(",$recv(imports)._asJavaScriptSource(),", function (",","._join_([$recv([(1)._to_([$recv(vars)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["to:"]=1
//>>excludeEnd("ctx");
][0])._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return ["$".__comma([$recv(each)._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx[","]=3
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,3)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["collect:"]=1
//>>excludeEnd("ctx");
][0]),") {",$recv((1)._to_($recv(vars)._size()))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv([$recv($recv($recv(vars)._at_(each)).__comma("=$")).__comma($recv(each)._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx[","]=5
//>>excludeEnd("ctx");
][0]).__comma("; ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx[","]=4
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,4)});
//>>excludeEnd("ctx");
})),"resolve();}, reject); });"])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=3
//>>excludeEnd("ctx");
][0];
$recv(aStream)._lf();
return $recv(aStream)._write_(pragmaEnd);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({imports:imports,vars:vars},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["ifNotEmpty:"]=1
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackageImportsOf:on:",{aPackage:aPackage,aStream:aStream,importsForOutput:importsForOutput,pragmaStart:pragmaStart,pragmaEnd:pragmaEnd})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "exportPackagePrologueOf:on:",
protocol: "output",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aStream"],
source: "exportPackagePrologueOf: aPackage on: aStream\x0a\x09| loadDependencies pragmaStart pragmaEnd |\x0a\x09pragmaStart := '//>>excludeStart(\x22imports\x22, pragmas.excludeImports);', String lf.\x0a\x09pragmaEnd := '//>>excludeEnd(\x22imports\x22);', String lf.\x0a\x09loadDependencies := self amdNamesOfPackages: aPackage loadDependencies.\x0a\x09aStream\x0a\x09\x09write: {\x0a\x09\x09\x09'define('.\x0a\x09\x09\x09(#('amber/boot' 'require'), loadDependencies asArray sorted) asJavaScriptSource.\x0a\x09\x09\x09', function($boot,requirejs){\x22use strict\x22;' };\x0a\x09\x09lf.\x0a\x09self exportPackageBodyBlockPrologueOf: aPackage on: aStream",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "lf", "amdNamesOfPackages:", "loadDependencies", "write:", "asJavaScriptSource", "sorted", "asArray", "exportPackageBodyBlockPrologueOf:on:"]
}, function ($methodClass){ return function (aPackage,aStream){
var self=this,$self=this;
var loadDependencies,pragmaStart,pragmaEnd;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
pragmaStart=["//>>excludeStart(\x22imports\x22, pragmas.excludeImports);".__comma([$recv($globals.String)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
pragmaEnd=["//>>excludeEnd(\x22imports\x22);".__comma([$recv($globals.String)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0];
loadDependencies=$self._amdNamesOfPackages_($recv(aPackage)._loadDependencies());
$recv(aStream)._write_(["define(",$recv(["amber/boot", "require"].__comma($recv($recv(loadDependencies)._asArray())._sorted()))._asJavaScriptSource(),", function($boot,requirejs){\x22use strict\x22;"]);
$recv(aStream)._lf();
$self._exportPackageBodyBlockPrologueOf_on_(aPackage,aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportPackagePrologueOf:on:",{aPackage:aPackage,aStream:aStream,loadDependencies:loadDependencies,pragmaStart:pragmaStart,pragmaEnd:pragmaEnd})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdExporter);

$core.addMethod(
$core.method({
selector: "importsForOutput:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "importsForOutput: aPackage\x0a\x09\x22Returns an association where key is list of import variables\x0a\x09and value is list of external dependencies, with ones imported as variables\x0a\x09put at the beginning with same order as is in key.\x0a\x09\x0a\x09For example imports:{'jQuery'->'jquery'. 'bootstrap'} would yield\x0a\x09#('jQuery') -> #('jquery' 'bootstrap')\x22\x0a\x09| namedImports anonImports importVarNames |\x0a\x09namedImports := #().\x0a\x09anonImports := #().\x0a\x09importVarNames := #().\x0a\x09aPackage imports do: [ :each | each isString\x0a\x09\x09ifTrue: [ anonImports add: each ]\x0a\x09\x09ifFalse: [ namedImports add: each value.\x0a\x09\x09\x09importVarNames add: each key ]].\x0a\x09^ importVarNames -> (namedImports, anonImports)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "imports", "ifTrue:ifFalse:", "isString", "add:", "value", "key", "->", ","]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
var namedImports,anonImports,importVarNames;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
namedImports=[];
anonImports=[];
importVarNames=[];
$recv($recv(aPackage)._imports())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(each)._isString())){
return [$recv(anonImports)._add_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
} else {
[$recv(namedImports)._add_($recv(each)._value())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["add:"]=2
//>>excludeEnd("ctx");
][0];
return $recv(importVarNames)._add_($recv(each)._key());
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(importVarNames).__minus_gt($recv(namedImports).__comma(anonImports));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsForOutput:",{aPackage:aPackage,namedImports:namedImports,anonImports:anonImports,importVarNames:importVarNames})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdExporter);



$core.addClass("ChunkParser", $globals.Object, "Platform-ImportExport");
$core.setSlots($globals.ChunkParser, ["stream", "last"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ChunkParser.comment="I am responsible for parsing aStream contents in the chunk format.\x0a\x0a## API\x0a\x0a    ChunkParser new\x0a        stream: aStream;\x0a        nextChunk";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "last",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "last\x0a\x09^ last",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.last;

}; }),
$globals.ChunkParser);

$core.addMethod(
$core.method({
selector: "nextChunk",
protocol: "reading",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextChunk\x0a\x09\x22The chunk format (Smalltalk Interchange Format or Fileout format)\x0a\x09is a trivial format but can be a bit tricky to understand:\x0a\x09\x09- Uses the exclamation mark as delimiter of chunks.\x0a\x09\x09- Inside a chunk a normal exclamation mark must be doubled.\x0a\x09\x09- A non empty chunk must be a valid Smalltalk expression.\x0a\x09\x09- A chunk on top level with a preceding empty chunk is an instruction chunk:\x0a\x09\x09\x09- The object created by the expression then takes over reading chunks.\x0a\x0a\x09This method returns next chunk as a String (trimmed), empty String (all whitespace) or nil.\x22\x0a\x0a\x09| char result chunk |\x0a\x09result := '' writeStream.\x0a\x09\x09[ char := stream next.\x0a\x09\x09char notNil ] whileTrue: [\x0a\x09\x09\x09\x09char = '!' ifTrue: [\x0a\x09\x09\x09\x09\x09\x09stream peek = '!'\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ stream next \x22skipping the escape double\x22 ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ ^ last := result contents trimBoth \x22chunk end marker found\x22 ]].\x0a\x09\x09\x09\x09result nextPut: char ].\x0a\x09^ last := nil \x22a chunk needs to end with !\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["writeStream", "whileTrue:", "next", "notNil", "ifTrue:", "=", "ifTrue:ifFalse:", "peek", "trimBoth", "contents", "nextPut:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var char,result,chunk;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
result=""._writeStream();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
char=[$recv($self.stream)._next()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["next"]=1
//>>excludeEnd("ctx");
][0];
return $recv(char)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv(char).__eq("!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])){
if($core.assert($recv($recv($self.stream)._peek()).__eq("!"))){
$recv($self.stream)._next();
} else {
$self.last=$recv($recv(result)._contents())._trimBoth();
throw $early=[$self.last];
}
}
return $recv(result)._nextPut_(char);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self.last=nil;
return $self.last;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextChunk",{char:char,result:result,chunk:chunk})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkParser);

$core.addMethod(
$core.method({
selector: "stream:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
$self.stream=aStream;
return self;

}; }),
$globals.ChunkParser);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "on: aStream\x0a\x09^ self new stream: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["stream:", "new"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._stream_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ChunkParser.a$cls);


$core.addClass("ClassCommentReader", $globals.Object, "Platform-ImportExport");
$core.setSlots($globals.ClassCommentReader, ["class"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassCommentReader.comment="I provide a mechanism for retrieving class comments stored on a file.\x0a\x0aSee also `ClassCategoryReader`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "class:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "class: aClass\x0a\x09class := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
$self.class=aClass;
return self;

}; }),
$globals.ClassCommentReader);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._initialize.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassCommentReader);

$core.addMethod(
$core.method({
selector: "scanFrom:",
protocol: "fileIn",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09chunk := aChunkParser nextChunk.\x0a\x09chunk ifNotEmpty: [\x0a\x09\x09self setComment: chunk ].",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextChunk", "ifNotEmpty:", "setComment:"]
}, function ($methodClass){ return function (aChunkParser){
var self=this,$self=this;
var chunk;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
chunk=$recv(aChunkParser)._nextChunk();
$recv(chunk)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._setComment_(chunk);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassCommentReader);

$core.addMethod(
$core.method({
selector: "setComment:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setComment: aString\x0a\x09class comment: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["comment:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.class)._comment_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setComment:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassCommentReader);



$core.addClass("ClassProtocolReader", $globals.Object, "Platform-ImportExport");
$core.setSlots($globals.ClassProtocolReader, ["class", "category"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassProtocolReader.comment="I provide a mechanism for retrieving class descriptions stored on a file in the Smalltalk chunk format.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "class:category:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "class: aClass category: aString\x0a\x09class := aClass.\x0a\x09category := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClass,aString){
var self=this,$self=this;
$self.class=aClass;
$self.category=aString;
return self;

}; }),
$globals.ClassProtocolReader);

$core.addMethod(
$core.method({
selector: "compileMethod:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compileMethod: aString\x0a\x09Compiler new install: aString forClass: class protocol: category",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["install:forClass:protocol:", "new"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Compiler)._new())._install_forClass_protocol_(aString,$self.class,$self.category);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileMethod:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassProtocolReader);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._initialize.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassProtocolReader);

$core.addMethod(
$core.method({
selector: "scanFrom:",
protocol: "fileIn",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aChunkParser"],
source: "scanFrom: aChunkParser\x0a\x09| chunk |\x0a\x09[ chunk := aChunkParser nextChunk.\x0a\x09chunk isEmpty ] whileFalse: [\x0a\x09\x09self compileMethod: chunk ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileFalse:", "nextChunk", "isEmpty", "compileMethod:"]
}, function ($methodClass){ return function (aChunkParser){
var self=this,$self=this;
var chunk;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
chunk=$recv(aChunkParser)._nextChunk();
return $recv(chunk)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._compileMethod_(chunk);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scanFrom:",{aChunkParser:aChunkParser,chunk:chunk})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassProtocolReader);



$core.addClass("ExportMethodProtocol", $globals.Object, "Platform-ImportExport");
$core.setSlots($globals.ExportMethodProtocol, ["name", "theClass"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ExportMethodProtocol.comment="I am an abstraction for a method protocol in a class / metaclass.\x0a\x0aI know of my class, name and methods.\x0aI am used when exporting a package.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "methods",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methods\x0a\x09^ (self theClass methodsInProtocol: self name)\x0a\x09\x09sorted: [ :a :b | a selector <= b selector ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sorted:", "methodsInProtocol:", "theClass", "name", "<=", "selector"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._theClass())._methodsInProtocol_($self._name()))._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$recv(a)._selector()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["selector"]=1
//>>excludeEnd("ctx");
][0]).__lt_eq($recv(b)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methods",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.name;

}; }),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "name:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.name=aString;
return self;

}; }),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "ownMethods",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ownMethods\x0a\x09^ (self theClass ownMethodsInProtocol: self name)\x0a\x09\x09sorted: [ :a :b | a selector <= b selector ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sorted:", "ownMethodsInProtocol:", "theClass", "name", "<=", "selector"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._theClass())._ownMethodsInProtocol_($self._name()))._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$recv(a)._selector()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["selector"]=1
//>>excludeEnd("ctx");
][0]).__lt_eq($recv(b)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethods",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.theClass;

}; }),
$globals.ExportMethodProtocol);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
$self.theClass=aClass;
return self;

}; }),
$globals.ExportMethodProtocol);


$core.addMethod(
$core.method({
selector: "name:theClass:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "name: aString theClass: aClass\x0a\x09^ self new\x0a\x09\x09name: aString;\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name:", "new", "theClass:", "yourself"]
}, function ($methodClass){ return function (aString,aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._name_(aString);
$recv($1)._theClass_(aClass);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name:theClass:",{aString:aString,aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ExportMethodProtocol.a$cls);


$core.addClass("Importer", $globals.Object, "Platform-ImportExport");
$core.setSlots($globals.Importer, ["lastSection", "lastChunk"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Importer.comment="I can import Amber code from a string in the chunk format.\x0a\x0a## API\x0a\x0a    Importer new import: aString";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "import:",
protocol: "fileIn",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "import: aStream\x0a\x09| chunk result parser lastEmpty |\x0a\x09parser := ChunkParser on: aStream.\x0a\x09lastEmpty := false.\x0a\x09lastSection := 'n/a, not started'.\x0a\x09lastChunk := nil.\x0a\x09[\x0a\x09[ chunk := parser nextChunk.\x0a\x09chunk isNil ] whileFalse: [\x0a\x09\x09chunk\x0a\x09\x09\x09ifEmpty: [ lastEmpty := true ]\x0a\x09\x09\x09ifNotEmpty: [\x0a\x09\x09\x09\x09lastSection := chunk.\x0a\x09\x09\x09\x09result := Compiler new evaluateExpression: chunk.\x0a\x09\x09\x09\x09lastEmpty\x0a\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09lastEmpty := false.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09result scanFrom: parser ]] ].\x0a\x09lastSection := 'n/a, finished'\x0a\x09] on: Error do: [:e | lastChunk := parser last. e pass ].",
referencedClasses: ["ChunkParser", "Compiler", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:", "on:do:", "whileFalse:", "nextChunk", "isNil", "ifEmpty:ifNotEmpty:", "evaluateExpression:", "new", "ifTrue:", "scanFrom:", "last", "pass"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
var chunk,result,parser,lastEmpty;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
parser=$recv($globals.ChunkParser)._on_(aStream);
lastEmpty=false;
$self.lastSection="n/a, not started";
$self.lastChunk=nil;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
chunk=$recv(parser)._nextChunk();
return $recv(chunk)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(chunk)._ifEmpty_ifNotEmpty_((function(){
lastEmpty=true;
return lastEmpty;

}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$self.lastSection=chunk;
result=$recv($recv($globals.Compiler)._new())._evaluateExpression_(chunk);
if($core.assert(lastEmpty)){
lastEmpty=false;
return $recv(result)._scanFrom_(parser);
} else {
return nil;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$self.lastSection="n/a, finished";
return $self.lastSection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self.lastChunk=$recv(parser)._last();
return $recv(e)._pass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,7)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"import:",{aStream:aStream,chunk:chunk,result:result,parser:parser,lastEmpty:lastEmpty})});
//>>excludeEnd("ctx");
}; }),
$globals.Importer);

$core.addMethod(
$core.method({
selector: "lastChunk",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastChunk\x0a\x09^ lastChunk",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.lastChunk;

}; }),
$globals.Importer);

$core.addMethod(
$core.method({
selector: "lastSection",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastSection\x0a\x09^ lastSection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.lastSection;

}; }),
$globals.Importer);



$core.addClass("PackageCommitError", $globals.Error, "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageCommitError.comment="I get signaled when an attempt to commit a package has failed.";
//>>excludeEnd("ide");


$core.addClass("PackageHandler", $globals.Object, "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "ajaxPutAt:data:onSuccess:onError:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aURL", "aString", "aBlock", "anotherBlock"],
source: "ajaxPutAt: aURL data: aString onSuccess: aBlock onError: anotherBlock\x0a\x09| xhr |\x0a\x09xhr := Platform newXhr.\x0a\x09xhr open: 'PUT' url: aURL async: true.\x0a\x09xhr onreadystatechange: [\x0a\x09\x09xhr readyState = 4 ifTrue: [\x0a\x09\x09\x09(xhr status >= 200 and: [ xhr status < 300 ])\x0a\x09\x09\x09\x09ifTrue: aBlock\x0a\x09\x09\x09\x09ifFalse: anotherBlock ]].\x0a\x09xhr send: aString",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newXhr", "open:url:async:", "onreadystatechange:", "ifTrue:", "=", "readyState", "ifTrue:ifFalse:", "and:", ">=", "status", "<", "send:"]
}, function ($methodClass){ return function (aURL,aString,aBlock,anotherBlock){
var self=this,$self=this;
var xhr;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
xhr=$recv($globals.Platform)._newXhr();
$recv(xhr)._open_url_async_("PUT",aURL,true);
$recv(xhr)._onreadystatechange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(xhr)._readyState()).__eq((4)))){
if($core.assert($recv([$recv(xhr)._status()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["status"]=1
//>>excludeEnd("ctx");
][0]).__gt_eq((200)))){
$1=$recv($recv(xhr)._status()).__lt((300));
} else {
$1=false;
}
return $recv($1)._ifTrue_ifFalse_(aBlock,anotherBlock);
} else {
return nil;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(xhr)._send_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ajaxPutAt:data:onSuccess:onError:",{aURL:aURL,aString:aString,aBlock:aBlock,anotherBlock:anotherBlock,xhr:xhr})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "chunkContentsFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "chunkContentsFor: aPackage\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09self chunkExporter exportPackage: aPackage on: str ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "exportPackage:on:", "chunkExporter"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._chunkExporter())._exportPackage_on_(aPackage,str);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chunkContentsFor:",{aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "chunkExporter",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chunkExporter\x0a\x09^ self chunkExporterClass new",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "chunkExporterClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._chunkExporterClass())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chunkExporter",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "chunkExporterClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chunkExporterClass\x0a\x09^ ChunkExporter",
referencedClasses: ["ChunkExporter"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.ChunkExporter;

}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commit:",
protocol: "committing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commit: aPackage\x0a\x09self \x0a\x09\x09commit: aPackage\x0a\x09\x09onSuccess: []\x0a\x09\x09onError: [ :error |\x0a\x09\x09\x09PackageCommitError\x0a\x09\x09\x09\x09signal: 'Commiting failed with reason: \x22' , error responseText , '\x22' ]",
referencedClasses: ["PackageCommitError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["commit:onSuccess:onError:", "signal:", ",", "responseText"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._commit_onSuccess_onError_(aPackage,(function(){

}),(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.PackageCommitError)._signal_([$recv("Commiting failed with reason: \x22".__comma($recv(error)._responseText())).__comma("\x22")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commit:",{aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commit:onSuccess:onError:",
protocol: "committing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commit: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09commitJsFileFor: aPackage \x0a\x09\x09onSuccess: [\x0a\x09\x09\x09self \x0a\x09\x09\x09\x09commitStFileFor: aPackage \x0a\x09\x09\x09\x09onSuccess: [ aPackage beClean. aBlock value ]\x0a\x09\x09\x09\x09onError: anotherBlock ] \x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["commitJsFileFor:onSuccess:onError:", "commitStFileFor:onSuccess:onError:", "beClean", "value"]
}, function ($methodClass){ return function (aPackage,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._commitJsFileFor_onSuccess_onError_(aPackage,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._commitStFileFor_onSuccess_onError_(aPackage,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(aPackage)._beClean();
return $recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commit:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commitJsFileFor:onSuccess:onError:",
protocol: "committing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitJsFileFor: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09ajaxPutAt: (self commitPathJsFor: aPackage), '/', aPackage name, '.js'\x0a\x09\x09data: (self contentsFor: aPackage)\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ajaxPutAt:data:onSuccess:onError:", ",", "commitPathJsFor:", "name", "contentsFor:"]
}, function ($methodClass){ return function (aPackage,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._ajaxPutAt_data_onSuccess_onError_([$recv([$recv($recv($self._commitPathJsFor_(aPackage)).__comma("/")).__comma($recv(aPackage)._name())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(".js")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0],$self._contentsFor_(aPackage),aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitJsFileFor:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commitPathJsFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commitPathStFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "commitStFileFor:onSuccess:onError:",
protocol: "committing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitStFileFor: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09self \x0a\x09\x09ajaxPutAt: (self commitPathStFor: aPackage), '/', aPackage name, '.st'\x0a\x09\x09data: (self chunkContentsFor: aPackage)\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ajaxPutAt:data:onSuccess:onError:", ",", "commitPathStFor:", "name", "chunkContentsFor:"]
}, function ($methodClass){ return function (aPackage,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._ajaxPutAt_data_onSuccess_onError_([$recv([$recv($recv($self._commitPathStFor_(aPackage)).__comma("/")).__comma($recv(aPackage)._name())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(".st")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0],$self._chunkContentsFor_(aPackage),aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitStFileFor:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "contentsFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "contentsFor: aPackage\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09self exporter exportPackage: aPackage on: str ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "exportPackage:on:", "exporter"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._exporter())._exportPackage_on_(aPackage,str);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contentsFor:",{aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "exporter",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exporter\x0a\x09^ self exporterClass new",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "exporterClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._exporterClass())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exporter",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "exporterClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exporterClass\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exporterClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "load:",
protocol: "loading",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "load: aPackage\x0a\x09\x22Should return a TThenable\x22\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:",{aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);

$core.addMethod(
$core.method({
selector: "setPath:forPackage:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aPackage"],
source: "setPath: aString forPackage: aPackage\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aString,aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setPath:forPackage:",{aString:aString,aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageHandler);



$core.addClass("AmdPackageHandler", $globals.PackageHandler, "Platform-ImportExport");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AmdPackageHandler.comment="I am responsible for handling package loading and committing.\x0a\x0aI should not be used directly. Instead, use the corresponding `Package` methods.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "commitPathJsFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathJsFor: aPackage\x0a\x09^ self toUrl: (self namespaceFor: aPackage)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["toUrl:", "namespaceFor:"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._toUrl_($self._namespaceFor_(aPackage));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPathJsFor:",{aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "commitPathStFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "commitPathStFor: aPackage\x0a\x09\x22If _source is not mapped, .st will be committed to .js path.\x0a\x09It is recommended not to use _source as it can be deprecated.\x22\x0a\x09\x0a\x09| path pathWithout |\x0a\x09path := self toUrl: (self namespaceFor: aPackage), '/_source'.\x0a\x09pathWithout := self commitPathJsFor: aPackage.\x0a\x09^ path = (pathWithout, '/_source') ifTrue: [ pathWithout ] ifFalse: [ path ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["toUrl:", ",", "namespaceFor:", "commitPathJsFor:", "ifTrue:ifFalse:", "="]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
var path,pathWithout;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
path=$self._toUrl_([$recv($self._namespaceFor_(aPackage)).__comma("/_source")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]);
pathWithout=$self._commitPathJsFor_(aPackage);
if($core.assert($recv(path).__eq($recv(pathWithout).__comma("/_source")))){
return pathWithout;
} else {
return path;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPathStFor:",{aPackage:aPackage,path:path,pathWithout:pathWithout})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "exporterClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exporterClass\x0a\x09^ AmdExporter",
referencedClasses: ["AmdExporter"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.AmdExporter;

}; }),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "load:",
protocol: "loading",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "load: aPackage\x0a\x09^ Promise new: [ :model |\x0a\x09\x09Smalltalk amdRequire\x0a\x09\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09\x09ifNotNil: [ :require |\x0a\x09\x09\x09\x09require\x0a\x09\x09\x09\x09\x09value: { (self namespaceFor: aPackage), '/', aPackage name }\x0a\x09\x09\x09\x09\x09value: [ :result | model value: result ]\x0a\x09\x09\x09\x09\x09value: [ :error | model signal: error ] ] ]",
referencedClasses: ["Promise", "Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:", "ifNil:ifNotNil:", "amdRequire", "error:", "value:value:value:", ",", "namespaceFor:", "name", "value:", "signal:"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv($globals.Promise)._new_((function(model){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($globals.Smalltalk)._amdRequire();
if($1 == null || $1.a$nil){
return $self._error_("AMD loader not present");
} else {
var require;
require=$1;
return $recv(require)._value_value_value_([[$recv($recv($self._namespaceFor_(aPackage)).__comma("/")).__comma($recv(aPackage)._name())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]],(function(result){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(model)._value_(result);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({result:result},$ctx2,4)});
//>>excludeEnd("ctx");
}),(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(model)._signal_(error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({error:error},$ctx2,5)});
//>>excludeEnd("ctx");
}));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:",{aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "namespaceFor:",
protocol: "committing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "namespaceFor: aPackage\x0a\x09^ aPackage transport namespace",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["namespace", "transport"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aPackage)._transport())._namespace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"namespaceFor:",{aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "setPath:forPackage:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aPackage"],
source: "setPath: aString forPackage: aPackage\x0a\x09\x22Set the path the the package's `namespace`\x22\x0a\x09\x0a\x09\x22Smalltalk amdRequire\x0a\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09ifNotNil: [ :require |\x22\x0a\x09\x09\x09require provided config: #{\x0a\x09\x09\x09\x09'paths' -> #{\x0a\x09\x09\x09\x09\x09(self namespaceFor: aPackage) -> aString\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x22]\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["config:", "provided", "namespaceFor:"]
}, function ($methodClass){ return function (aString,aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(require)._provided())._config_($globals.HashedCollection._newFromPairs_(["paths",$globals.HashedCollection._newFromPairs_([$self._namespaceFor_(aPackage),aString])]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setPath:forPackage:",{aString:aString,aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageHandler);

$core.addMethod(
$core.method({
selector: "toUrl:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "toUrl: aString\x0a\x09^ Smalltalk amdRequire\x0a\x09\x09ifNil: [ self error: 'AMD loader not present' ]\x0a\x09\x09ifNotNil: [ :require | require provided toUrl: aString ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "amdRequire", "error:", "toUrl:", "provided"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Smalltalk)._amdRequire();
if($1 == null || $1.a$nil){
return $self._error_("AMD loader not present");
} else {
var require;
require=$1;
return $recv($recv(require)._provided())._toUrl_(aString);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toUrl:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageHandler);


$core.addMethod(
$core.method({
selector: "defaultNamespace",
protocol: "commit paths",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultNamespace\x0a\x09^ Smalltalk defaultAmdNamespace",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["defaultAmdNamespace"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._defaultAmdNamespace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageHandler.a$cls);

$core.addMethod(
$core.method({
selector: "defaultNamespace:",
protocol: "commit paths",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "defaultNamespace: aString\x0a\x09Smalltalk defaultAmdNamespace: aString",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["defaultAmdNamespace:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Smalltalk)._defaultAmdNamespace_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageHandler.a$cls);


$core.addClass("PackageTransport", $globals.Object, "Platform-ImportExport");
$core.setSlots($globals.PackageTransport, ["package"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageTransport.comment="I represent the transport mechanism used to commit a package.\x0a\x0aMy concrete subclasses have a `#handler` to which committing is delegated.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09^ #{ 'type' -> self type }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["type"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $globals.HashedCollection._newFromPairs_(["type",$self._type()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptObject",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "commit",
protocol: "committing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commit\x0a\x09self commitHandler commit: self package",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["commit:", "commitHandler", "package"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._commitHandler())._commit_($self._package());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commit",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "commitHandler",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitHandler\x0a\x09^ self commitHandlerClass new",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "commitHandlerClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._commitHandlerClass())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitHandler",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "commitHandlerClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitHandlerClass\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitHandlerClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "commitOnSuccess:onError:",
protocol: "committing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "commitOnSuccess: aBlock onError: anotherBlock\x0a\x09self commitHandler \x0a\x09\x09commit: self package\x0a\x09\x09onSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["commit:onSuccess:onError:", "commitHandler", "package"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._commitHandler())._commit_onSuccess_onError_($self._package(),aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitOnSuccess:onError:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "";

}; }),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "load",
protocol: "loading",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "load\x0a\x09^ ((self commitHandler load: self package)\x0a\x09\x09then: [ Smalltalk postLoad ])\x0a\x09\x09catch: [ :e | Smalltalk postFailedLoad: self package. e pass ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["catch:", "then:", "load:", "commitHandler", "package", "postLoad", "postFailedLoad:", "pass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv($self._commitHandler())._load_([$self._package()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["package"]=1
//>>excludeEnd("ctx");
][0]))._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._postLoad();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._catch_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($globals.Smalltalk)._postFailedLoad_($self._package());
return $recv(e)._pass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "package",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ package",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.package;

}; }),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "package:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "package: aPackage\x0a\x09package := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
$self.package=aPackage;
return self;

}; }),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "setPath:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setPath: aString\x0a\x09\x22Set the commit path for the package\x22\x0a\x0a\x09self commitHandler setPath: aString forPackage: package",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["setPath:forPackage:", "commitHandler"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._commitHandler())._setPath_forPackage_(aString,$self.package);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setPath:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "setupFromJson:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "setupFromJson: anObject\x0a\x09\x22no op. override if needed in subclasses\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
return self;

}; }),
$globals.PackageTransport);

$core.addMethod(
$core.method({
selector: "type",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^ self class type",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["type", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._type();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport);


$core.setSlots($globals.PackageTransport.a$cls, ["registry"]);
$core.addMethod(
$core.method({
selector: "classRegisteredFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "classRegisteredFor: aString\x0a\x09^ registry at: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.registry)._at_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classRegisteredFor:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "defaultType",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultType\x0a\x09^ AmdPackageTransport type",
referencedClasses: ["AmdPackageTransport"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["type"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.AmdPackageTransport)._type();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultType",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "for:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "for: aString\x0a\x09^ (self classRegisteredFor: aString) new",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "classRegisteredFor:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._classRegisteredFor_(aString))._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "fromJson: anObject\x0a\x09anObject ifNil: [ ^ self for: self defaultType ].\x0a\x09\x0a\x09^ (self for: anObject type)\x0a\x09\x09setupFromJson: anObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "for:", "defaultType", "setupFromJson:", "type", "yourself"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
if(anObject == null || anObject.a$nil){
return [$self._for_($self._defaultType())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["for:"]=1
//>>excludeEnd("ctx");
][0];
}
$1=$self._for_($recv(anObject)._type());
$recv($1)._setupFromJson_(anObject);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self == PackageTransport\x0a\x09\x09ifTrue: [ registry := #{} ]\x0a\x09\x09ifFalse: [ self register ]",
referencedClasses: ["PackageTransport"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "ifTrue:ifFalse:", "==", "register"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._initialize.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
if($core.assert($self.__eq_eq($globals.PackageTransport))){
$self.registry=$globals.HashedCollection._newFromPairs_([]);
$self.registry;
} else {
$self._register();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "register",
protocol: "registration",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "register\x0a\x09PackageTransport register: self",
referencedClasses: ["PackageTransport"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["register:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.PackageTransport)._register_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "register:",
protocol: "registration",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "register: aClass\x0a\x09aClass type ifNotNil: [\x0a\x09\x09registry at: aClass type put: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "type", "at:put:"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=[$recv(aClass)._type()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["type"]=1
//>>excludeEnd("ctx");
][0];
if($1 != null && !$1.a$nil){
$recv($self.registry)._at_put_($recv(aClass)._type(),aClass);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "type",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09\x22Override in subclasses\x22\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return nil;

}; }),
$globals.PackageTransport.a$cls);


$core.addClass("AmdPackageTransport", $globals.PackageTransport, "Platform-ImportExport");
$core.setSlots($globals.AmdPackageTransport, ["namespace"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AmdPackageTransport.comment="I am the default transport for committing packages.\x0a\x0aSee `AmdExporter` and `AmdPackageHandler`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09^ super asJavaScriptObject\x0a\x09\x09at: 'amdNamespace' put: self namespace;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "asJavaScriptObject", "namespace", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._asJavaScriptObject.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$recv($1)._at_put_("amdNamespace",$self._namespace());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptObject",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "commitHandlerClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commitHandlerClass\x0a\x09^ AmdPackageHandler",
referencedClasses: ["AmdPackageHandler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.AmdPackageHandler;

}; }),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "defaultNamespace",
protocol: "defaults",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultNamespace\x0a\x09^ Smalltalk defaultAmdNamespace",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["defaultAmdNamespace"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._defaultAmdNamespace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultNamespace",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream | stream \x0a\x09\x09write: { self class name. ' namespace: ' }; print: self namespace ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "write:", "name", "class", "print:", "namespace"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._write_([$recv($self._class())._name()," namespace: "]);
return $recv(stream)._print_($self._namespace());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "namespace",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "namespace\x0a\x09^ namespace ifNil: [ self defaultNamespace ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "defaultNamespace"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.namespace;
if($1 == null || $1.a$nil){
return $self._defaultNamespace();
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"namespace",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "namespace:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "namespace: aString\x0a\x09namespace := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.namespace=aString;
return self;

}; }),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: ' (AMD Namespace: ';\x0a\x09\x09nextPutAll: self namespace;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:", "nextPutAll:", "namespace"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._printOn_.call($self,aStream))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_(" (AMD Namespace: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_($self._namespace())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageTransport);

$core.addMethod(
$core.method({
selector: "setupFromJson:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "setupFromJson: anObject\x0a\x09self namespace: (anObject at: 'amdNamespace')",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["namespace:", "at:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._namespace_($recv(anObject)._at_("amdNamespace"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupFromJson:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageTransport);


$core.addMethod(
$core.method({
selector: "namespace:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "namespace: aString\x0a\x09^ self new\x0a\x09\x09namespace: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["namespace:", "new", "yourself"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._namespace_(aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"namespace:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.AmdPackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "type",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^ 'amd'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "amd";

}; }),
$globals.AmdPackageTransport.a$cls);

$core.addMethod(
$core.method({
selector: "exportBehaviorDefinitionTo:using:",
protocol: "*Platform-ImportExport",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream", "anExporter"],
source: "exportBehaviorDefinitionTo: aStream using: anExporter\x0a\x09anExporter exportDefinitionOf: self on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["exportDefinitionOf:on:"]
}, function ($methodClass){ return function (aStream,anExporter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anExporter)._exportDefinitionOf_on_(self,aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportBehaviorDefinitionTo:using:",{aStream:aStream,anExporter:anExporter})});
//>>excludeEnd("ctx");
}; }),
$globals.Class);

$core.addMethod(
$core.method({
selector: "exportBehaviorDefinitionTo:using:",
protocol: "*Platform-ImportExport",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream", "anExporter"],
source: "exportBehaviorDefinitionTo: aStream using: anExporter\x0a\x09anExporter exportMetaDefinitionOf: self instanceClass on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["exportMetaDefinitionOf:on:", "instanceClass"]
}, function ($methodClass){ return function (aStream,anExporter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anExporter)._exportMetaDefinitionOf_on_($self._instanceClass(),aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportBehaviorDefinitionTo:using:",{aStream:aStream,anExporter:anExporter})});
//>>excludeEnd("ctx");
}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "commit",
protocol: "*Platform-ImportExport",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commit\x0a\x09^ self transport commit",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["commit", "transport"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._transport())._commit();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commit",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "load",
protocol: "*Platform-ImportExport",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "load\x0a\x09^ self transport load",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["load", "transport"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._transport())._load();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "loadFromNamespace:",
protocol: "*Platform-ImportExport",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "loadFromNamespace: aString\x0a\x09^ self transport\x0a\x09\x09namespace: aString;\x0a\x09\x09load",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["namespace:", "transport", "load"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._transport();
$recv($1)._namespace_(aString);
return $recv($1)._load();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadFromNamespace:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "load:",
protocol: "*Platform-ImportExport",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName"],
source: "load: aPackageName\x0a\x09^ (self named: aPackageName) load",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["load", "named:"]
}, function ($methodClass){ return function (aPackageName){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._named_(aPackageName))._load();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:",{aPackageName:aPackageName})});
//>>excludeEnd("ctx");
}; }),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "load:fromNamespace:",
protocol: "*Platform-ImportExport",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aString"],
source: "load: aPackageName fromNamespace: aString\x0a\x09^ (self named: aPackageName) loadFromNamespace: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["loadFromNamespace:", "named:"]
}, function ($methodClass){ return function (aPackageName,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._named_(aPackageName))._loadFromNamespace_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:fromNamespace:",{aPackageName:aPackageName,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "methodsFor:",
protocol: "*Platform-ImportExport",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "methodsFor: aString\x0a\x09^ ClassProtocolReader new\x0a\x09\x09class: self category: aString;\x0a\x09\x09yourself",
referencedClasses: ["ClassProtocolReader"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["class:category:", "new", "yourself"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.ClassProtocolReader)._new();
$recv($1)._class_category_(self,aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodsFor:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methodsFor:stamp:",
protocol: "*Platform-ImportExport",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aStamp"],
source: "methodsFor: aString stamp: aStamp\x0a\x09\x22Added for file-in compatibility, ignores stamp.\x22\x0a\x09^ self methodsFor: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["methodsFor:"]
}, function ($methodClass){ return function (aString,aStamp){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._methodsFor_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodsFor:stamp:",{aString:aString,aStamp:aStamp})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "commentStamp",
protocol: "*Platform-ImportExport",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "commentStamp\x0a\x09^ ClassCommentReader new\x0a\x09class: self;\x0a\x09yourself",
referencedClasses: ["ClassCommentReader"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["class:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.ClassCommentReader)._new();
$recv($1)._class_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commentStamp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "commentStamp:prior:",
protocol: "*Platform-ImportExport",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStamp", "prior"],
source: "commentStamp: aStamp prior: prior\x0a\x09\x09^ self commentStamp",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["commentStamp"]
}, function ($methodClass){ return function (aStamp,prior){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._commentStamp();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commentStamp:prior:",{aStamp:aStamp,prior:prior})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "exportBehaviorDefinitionTo:using:",
protocol: "*Platform-ImportExport",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream", "anExporter"],
source: "exportBehaviorDefinitionTo: aStream using: anExporter\x0a\x09anExporter exportTraitDefinitionOf: self on: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["exportTraitDefinitionOf:on:"]
}, function ($methodClass){ return function (aStream,anExporter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anExporter)._exportTraitDefinitionOf_on_(self,aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exportBehaviorDefinitionTo:using:",{aStream:aStream,anExporter:anExporter})});
//>>excludeEnd("ctx");
}; }),
$globals.Trait);

});
