define(["amber/boot", "require", "amber/core/Kernel-Collections", "amber/core/Kernel-Exceptions", "amber/core/Kernel-Infrastructure", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Compiler-Core");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["smalltalkParser=amber/parser"];
//>>excludeStart("imports", pragmas.excludeImports);
var smalltalkParser;
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/parser"], function ($1) {smalltalkParser=$1; resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("AbstractCodeGenerator", $globals.Object, ["currentClass", "currentPackage", "source"], "Compiler-Core");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AbstractCodeGenerator.comment="I am the abstract super class of all code generators and provide their common API.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "compileNode:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "compileNode: aNode\x0a\x09^ self transformers\x0a\x09\x09inject: aNode\x0a\x09\x09into: [ :input :transformer | transformer value: input ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "transformers", "value:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._transformers())._inject_into_(aNode,(function(input,transformer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(transformer)._value_(input);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({input:input,transformer:transformer},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "currentClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentClass\x0a\x09^ currentClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.currentClass;

}; }),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "currentClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
$self.currentClass=aClass;
return self;

}; }),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "currentPackage",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentPackage\x0a\x09^ currentPackage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.currentPackage;

}; }),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "currentPackage:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "currentPackage: anObject\x0a\x09currentPackage := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.currentPackage=anObject;
return self;

}; }),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "pseudoVariables",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pseudoVariables\x0a\x09^ Smalltalk pseudoVariableNames",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["pseudoVariableNames"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._pseudoVariableNames();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pseudoVariables",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "source",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.source;
if($1 == null || $1.a$nil){
return "";
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "source:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.source=aString;
return self;

}; }),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "transformers",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transformers\x0a\x09| dict |\x0a\x09dict := self transformersDictionary.\x0a\x09^ dict keys asArray sort collect: [ :each | dict at: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["transformersDictionary", "collect:", "sort", "asArray", "keys", "at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var dict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
dict=$self._transformersDictionary();
return $recv($recv($recv($recv(dict)._keys())._asArray())._sort())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(dict)._at_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transformers",{dict:dict})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "transformersDictionary",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transformersDictionary\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"transformersDictionary",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGenerator);



$core.addClass("AstGenerator", $globals.AbstractCodeGenerator, ["transformersDictionary"], "Compiler-Core");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AstGenerator.comment="I am a very basic code generator.\x0aI generate semantically augmented abstract syntax tree,\x0aSome initial pragmas (eg. #inlineJS:) are applied to transform the tree.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "semanticAnalyzer",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "semanticAnalyzer\x0a\x09^ (SemanticAnalyzer on: self currentClass)\x0a\x09\x09thePackage: self currentPackage;\x0a\x09\x09yourself",
referencedClasses: ["SemanticAnalyzer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["thePackage:", "on:", "currentClass", "currentPackage", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.SemanticAnalyzer)._on_($self._currentClass());
$recv($1)._thePackage_($self._currentPackage());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"semanticAnalyzer",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AstGenerator);

$core.addMethod(
$core.method({
selector: "semanticAstPragmator",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "semanticAstPragmator\x0a\x09^ AstSemanticPragmator new",
referencedClasses: ["AstSemanticPragmator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.AstSemanticPragmator)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"semanticAstPragmator",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AstGenerator);

$core.addMethod(
$core.method({
selector: "transformersDictionary",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transformersDictionary\x0a\x09^ transformersDictionary ifNil: [ transformersDictionary := Dictionary new\x0a\x09\x09at: '2000-semantic' put: self semanticAnalyzer;\x0a\x09\x09at: '2500-semanticPragmas' put: self semanticAstPragmator;\x0a\x09\x09yourself ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "at:put:", "new", "semanticAnalyzer", "semanticAstPragmator", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$self.transformersDictionary;
if($1 == null || $1.a$nil){
$2=$recv($globals.Dictionary)._new();
[$recv($2)._at_put_("2000-semantic",$self._semanticAnalyzer())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
$recv($2)._at_put_("2500-semanticPragmas",$self._semanticAstPragmator());
$self.transformersDictionary=$recv($2)._yourself();
return $self.transformersDictionary;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transformersDictionary",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AstGenerator);



$core.addClass("CodeGenerator", $globals.AstGenerator, [], "Compiler-Core");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CodeGenerator.comment="I am a basic code generator. I generate a valid JavaScript output, but do not perform any inlining.\x0aSee `InliningCodeGenerator` for an optimized JavaScript code generation.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "irTranslator",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "irTranslator\x0a\x09^ self irTranslatorClass new\x0a\x09\x09currentClass: self currentClass;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["currentClass:", "new", "irTranslatorClass", "currentClass", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._irTranslatorClass())._new();
$recv($1)._currentClass_($self._currentClass());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CodeGenerator);

$core.addMethod(
$core.method({
selector: "irTranslatorClass",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "irTranslatorClass\x0a\x09^ IRJSTranslator",
referencedClasses: ["IRJSTranslator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.IRJSTranslator;

}; }),
$globals.CodeGenerator);

$core.addMethod(
$core.method({
selector: "lateIRPragmator",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lateIRPragmator\x0a\x09^ IRLatePragmator new",
referencedClasses: ["IRLatePragmator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.IRLatePragmator)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lateIRPragmator",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CodeGenerator);

$core.addMethod(
$core.method({
selector: "transformersDictionary",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transformersDictionary\x0a\x09^ transformersDictionary ifNil: [ transformersDictionary := super transformersDictionary\x0a\x09\x09at: '5000-astToIr' put: self translator;\x0a\x09\x09at: '7000-irLatePragmas' put: self lateIRPragmator;\x0a\x09\x09at: '8000-irToJs' put: self irTranslator;\x0a\x09\x09yourself ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "at:put:", "transformersDictionary", "translator", "lateIRPragmator", "irTranslator", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$self.transformersDictionary;
if($1 == null || $1.a$nil){
$2=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._transformersDictionary.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
[$recv($2)._at_put_("5000-astToIr",$self._translator())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($2)._at_put_("7000-irLatePragmas",$self._lateIRPragmator())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=2
//>>excludeEnd("ctx");
][0];
$recv($2)._at_put_("8000-irToJs",$self._irTranslator());
$self.transformersDictionary=$recv($2)._yourself();
return $self.transformersDictionary;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transformersDictionary",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CodeGenerator);

$core.addMethod(
$core.method({
selector: "translator",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "translator\x0a\x09^ IRASTTranslator new\x0a\x09\x09source: self source;\x0a\x09\x09theClass: self currentClass;\x0a\x09\x09yourself",
referencedClasses: ["IRASTTranslator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["source:", "new", "source", "theClass:", "currentClass", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRASTTranslator)._new();
$recv($1)._source_($self._source());
$recv($1)._theClass_($self._currentClass());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translator",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CodeGenerator);



$core.addClass("Compiler", $globals.Object, ["currentPackage", "codeGeneratorClass", "codeGenerator"], "Compiler-Core");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Compiler.comment="I provide the public interface for compiling Amber source code into JavaScript.\x0a\x0aThe code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`.\x0aThe default code generator is an instance of `InlinedCodeGenerator`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "ast:forClass:protocol:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "anotherString"],
source: "ast: aString forClass: aClass protocol: anotherString\x0a\x09^ self\x0a\x09\x09codeGeneratorClass: AstGenerator;\x0a\x09\x09start: aString forClass: aClass protocol: anotherString;\x0a\x09\x09compileNode: (self parse: aString)",
referencedClasses: ["AstGenerator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["codeGeneratorClass:", "start:forClass:protocol:", "compileNode:", "parse:"]
}, function ($methodClass){ return function (aString,aClass,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._codeGeneratorClass_($globals.AstGenerator);
$self._start_forClass_protocol_(aString,aClass,anotherString);
return $self._compileNode_($self._parse_(aString));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ast:forClass:protocol:",{aString:aString,aClass:aClass,anotherString:anotherString})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "basicParse:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicParse: aString\x0a\x09^ smalltalkParser parse: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(smalltalkParser)._parse_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicParse:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "cleanCodeGenerator",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cleanCodeGenerator\x0a\x09codeGenerator := nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
$self.codeGenerator=nil;
return self;

}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "codeGenerator",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeGenerator\x0a\x09^ codeGenerator",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.codeGenerator;

}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "codeGenerator:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "codeGenerator: anObject\x0a\x09codeGenerator := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.codeGenerator=anObject;
return self;

}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "codeGeneratorClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeGeneratorClass\x0a\x09^ codeGeneratorClass ifNil: [ InliningCodeGenerator ]",
referencedClasses: ["InliningCodeGenerator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.codeGeneratorClass;
if($1 == null || $1.a$nil){
return $globals.InliningCodeGenerator;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "codeGeneratorClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "codeGeneratorClass: aClass\x0a\x09codeGeneratorClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
$self.codeGeneratorClass=aClass;
return self;

}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "compile:forClass:protocol:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "anotherString"],
source: "compile: aString forClass: aClass protocol: anotherString\x0a\x09| sanitizedSource compilationResult result pragmas closureFactory |\x0a\x09sanitizedSource := aString crlfSanitized.\x0a\x09compilationResult := self\x0a\x09\x09start: sanitizedSource forClass: aClass protocol: anotherString;\x0a\x09\x09compileNode: (self parse: sanitizedSource).\x0a\x09closureFactory := self\x0a\x09\x09eval: (self wrappedSourceOf: compilationResult)\x0a\x09\x09forPackage: self currentPackage.\x0a\x09result := Smalltalk core method: #{\x0a\x09\x09#selector -> compilationResult selector.\x0a\x09\x09#protocol -> anotherString.\x0a\x09\x09#source -> sanitizedSource.\x0a\x09\x09#messageSends -> compilationResult messageSends asArray.\x0a\x09\x09#args -> compilationResult arguments.\x0a\x09\x09#referencedClasses -> compilationResult classReferences asArray.\x0a\x09} withFactory: closureFactory.\x0a\x09result pragmas: compilationResult pragmas.\x0a\x09^ result",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["crlfSanitized", "start:forClass:protocol:", "compileNode:", "parse:", "eval:forPackage:", "wrappedSourceOf:", "currentPackage", "method:withFactory:", "core", "selector", "asArray", "messageSends", "arguments", "classReferences", "pragmas:", "pragmas"]
}, function ($methodClass){ return function (aString,aClass,anotherString){
var self=this,$self=this;
var sanitizedSource,compilationResult,result,pragmas,closureFactory;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
sanitizedSource=$recv(aString)._crlfSanitized();
$self._start_forClass_protocol_(sanitizedSource,aClass,anotherString);
compilationResult=$self._compileNode_($self._parse_(sanitizedSource));
closureFactory=$self._eval_forPackage_($self._wrappedSourceOf_(compilationResult),$self._currentPackage());
result=$recv($recv($globals.Smalltalk)._core())._method_withFactory_($globals.HashedCollection._newFromPairs_(["selector",$recv(compilationResult)._selector(),"protocol",anotherString,"source",sanitizedSource,"messageSends",[$recv($recv(compilationResult)._messageSends())._asArray()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asArray"]=1
//>>excludeEnd("ctx");
][0],"args",$recv(compilationResult)._arguments(),"referencedClasses",$recv($recv(compilationResult)._classReferences())._asArray()]),closureFactory);
$recv(result)._pragmas_($recv(compilationResult)._pragmas());
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile:forClass:protocol:",{aString:aString,aClass:aClass,anotherString:anotherString,sanitizedSource:sanitizedSource,compilationResult:compilationResult,result:result,pragmas:pragmas,closureFactory:closureFactory})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "compileNode:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "compileNode: aNode\x0a    | result |\x0a\x09result := self codeGenerator compileNode: aNode.\x0a\x09self cleanCodeGenerator.\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["compileNode:", "codeGenerator", "cleanCodeGenerator"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=$recv($self._codeGenerator())._compileNode_(aNode);
$self._cleanCodeGenerator();
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "currentPackage",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentPackage\x0a\x09^ currentPackage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.currentPackage;

}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "currentPackage:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "currentPackage: anObject\x0a\x09currentPackage := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.currentPackage=anObject;
return self;

}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "error:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "error: aString\x0a\x09CompilerError signal: aString",
referencedClasses: ["CompilerError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["signal:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.CompilerError)._signal_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"error:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "eval:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09<inlineJS: 'return eval(aString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return eval(aString)"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return eval(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "eval:forPackage:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aPackage"],
source: "eval: aString forPackage: aPackage\x0a\x09^ aPackage\x0a\x09\x09ifNil: [ self eval: aString ]\x0a\x09\x09ifNotNil: [ aPackage eval: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "eval:"]
}, function ($methodClass){ return function (aString,aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(aPackage == null || aPackage.a$nil){
return [$self._eval_(aString)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["eval:"]=1
//>>excludeEnd("ctx");
][0];
} else {
return $recv(aPackage)._eval_(aString);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:forPackage:",{aString:aString,aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "evaluateExpression:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "evaluateExpression: aString\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression and answer the returned object\x22\x0a\x09^ self evaluateExpression: aString on: DoIt new",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["evaluateExpression:on:", "new"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._evaluateExpression_on_(aString,$recv($globals.DoIt)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluateExpression:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "evaluateExpression:on:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluateExpression: aString on: anObject\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression with anObject as the receiver and answer the returned object\x22\x0a\x09| result method |\x0a\x09method := self\x0a\x09\x09install: (self sourceForExpression: aString)\x0a\x09\x09forClass: anObject class\x0a\x09\x09protocol: '**xxxDoIt'.\x0a\x09result := anObject xxxDoIt.\x0a\x09anObject class removeCompiledMethod: method.\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["install:forClass:protocol:", "sourceForExpression:", "class", "xxxDoIt", "removeCompiledMethod:"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
var result,method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
method=$self._install_forClass_protocol_($self._sourceForExpression_(aString),[$recv(anObject)._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0],"**xxxDoIt");
result=$recv(anObject)._xxxDoIt();
$recv($recv(anObject)._class())._removeCompiledMethod_(method);
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluateExpression:on:",{aString:aString,anObject:anObject,result:result,method:method})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "install:forClass:protocol:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBehavior", "anotherString"],
source: "install: aString forClass: aBehavior protocol: anotherString\x0a\x09| compiledMethod |\x0a\x09compiledMethod := self compile: aString forClass: aBehavior protocol: anotherString.\x0a\x09aBehavior addCompiledMethod: compiledMethod.\x0a\x09^ compiledMethod",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["compile:forClass:protocol:", "addCompiledMethod:"]
}, function ($methodClass){ return function (aString,aBehavior,anotherString){
var self=this,$self=this;
var compiledMethod;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
compiledMethod=$self._compile_forClass_protocol_(aString,aBehavior,anotherString);
$recv(aBehavior)._addCompiledMethod_(compiledMethod);
return compiledMethod;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"install:forClass:protocol:",{aString:aString,aBehavior:aBehavior,anotherString:anotherString,compiledMethod:compiledMethod})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "parse:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parse: aString\x0a\x09| result |\x0a\x09\x0a\x09[ result := self basicParse: aString ] \x0a\x09\x09tryCatch: [ :ex | (self parseError: ex parsing: aString) signal ].\x0a\x09\x09\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["tryCatch:", "basicParse:", "signal", "parseError:parsing:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=$self._basicParse_(aString);
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._tryCatch_((function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._parseError_parsing_(ex,aString))._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "parseError:parsing:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anException", "aString"],
source: "parseError: anException parsing: aString\x0a\x09(anException basicAt: 'location')\x0a\x09\x09ifNil: [ ^ anException pass ]\x0a\x09\x09ifNotNil: [ :loc |\x0a\x09\x09\x09^ ParseError new \x0a\x09\x09\x09\x09messageText: \x0a\x09\x09\x09\x09\x09'Parse error on line ', loc start line asString,\x0a\x09\x09\x09\x09\x09' column ' , loc start column asString,\x0a\x09\x09\x09\x09\x09' : Unexpected character ', (anException basicAt: 'found');\x0a\x09\x09\x09\x09yourself ]",
referencedClasses: ["ParseError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "basicAt:", "pass", "messageText:", "new", ",", "asString", "line", "start", "column", "yourself"]
}, function ($methodClass){ return function (anException,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=[$recv(anException)._basicAt_("location")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["basicAt:"]=1
//>>excludeEnd("ctx");
][0];
if($1 == null || $1.a$nil){
return $recv(anException)._pass();
} else {
var loc;
loc=$1;
$2=$recv($globals.ParseError)._new();
$recv($2)._messageText_([$recv([$recv([$recv([$recv("Parse error on line ".__comma([$recv($recv([$recv(loc)._start()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["start"]=1
//>>excludeEnd("ctx");
][0])._line())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0])).__comma(" column ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=4
//>>excludeEnd("ctx");
][0]).__comma($recv($recv($recv(loc)._start())._column())._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=3
//>>excludeEnd("ctx");
][0]).__comma(" : Unexpected character ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma($recv(anException)._basicAt_("found"))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]);
return $recv($2)._yourself();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseError:parsing:",{anException:anException,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "parseExpression:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parseExpression: aString\x0a\x09^ self parse: (self sourceForExpression: aString)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "sourceForExpression:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._parse_($self._sourceForExpression_(aString));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseExpression:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "recompile:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "recompile: aClass\x0a\x09aClass includingPossibleMetaDo: [ :eachSide |\x0a\x09\x09eachSide methodDictionary values\x0a\x09\x09\x09do: [ :each | each origin = eachSide ifTrue: [ \x0a\x09\x09\x09\x09self \x0a\x09\x09\x09\x09\x09install: each source \x0a\x09\x09\x09\x09\x09forClass: eachSide \x0a\x09\x09\x09\x09\x09protocol: each protocol ] ]\x0a\x09\x09\x09displayingProgress: 'Recompiling ', eachSide name ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["includingPossibleMetaDo:", "do:displayingProgress:", "values", "methodDictionary", "ifTrue:", "=", "origin", "install:forClass:protocol:", "source", "protocol", ",", "name"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aClass)._includingPossibleMetaDo_((function(eachSide){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(eachSide)._methodDictionary())._values())._do_displayingProgress_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(each)._origin()).__eq(eachSide))){
return $self._install_forClass_protocol_($recv(each)._source(),eachSide,$recv(each)._protocol());
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}),"Recompiling ".__comma($recv(eachSide)._name()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachSide:eachSide},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recompile:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "recompileAll",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recompileAll\x0a\x09Smalltalk classes \x0a\x09\x09do: [ :each | self recompile: each ]\x0a\x09\x09displayingProgress: 'Compiling all classes...'",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:displayingProgress:", "classes", "recompile:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Smalltalk)._classes())._do_displayingProgress_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._recompile_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),"Compiling all classes...");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recompileAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "sourceForExpression:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "sourceForExpression: aString\x0a\x09^ 'xxxDoIt ^ [ ', aString, ' ] value'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [","]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv("xxxDoIt ^ [ ".__comma(aString)).__comma(" ] value")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sourceForExpression:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "start:forClass:protocol:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "anotherString"],
source: "start: aString forClass: aClass protocol: anotherString\x0a\x09| package |\x0a\x09package := aClass packageOfProtocol: anotherString.\x0a\x09self\x0a\x09\x09currentPackage: package;\x0a\x09\x09codeGenerator: (self codeGeneratorClass new\x0a\x09\x09\x09source: aString;\x0a\x09\x09\x09currentClass: aClass;\x0a\x09\x09\x09currentPackage: package;\x0a\x09\x09\x09yourself)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["packageOfProtocol:", "currentPackage:", "codeGenerator:", "source:", "new", "codeGeneratorClass", "currentClass:", "yourself"]
}, function ($methodClass){ return function (aString,aClass,anotherString){
var self=this,$self=this;
var package_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
package_=$recv(aClass)._packageOfProtocol_(anotherString);
[$self._currentPackage_(package_)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["currentPackage:"]=1
//>>excludeEnd("ctx");
][0];
$1=$recv($self._codeGeneratorClass())._new();
$recv($1)._source_(aString);
$recv($1)._currentClass_(aClass);
$recv($1)._currentPackage_(package_);
$self._codeGenerator_($recv($1)._yourself());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start:forClass:protocol:",{aString:aString,aClass:aClass,anotherString:anotherString,package_:package_})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "transformerAt:put:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "transformerAt: aString put: anObject\x0a\x09self codeGenerator transformersDictionary at: aString put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "transformersDictionary", "codeGenerator"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._codeGenerator())._transformersDictionary())._at_put_(aString,anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transformerAt:put:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "wrappedSourceOf:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRMethod"],
source: "wrappedSourceOf: anIRMethod\x0a\x09^ anIRMethod attachments\x0a\x09\x09ifEmpty: [\x0a\x09\x09\x09'(function ($methodClass){ return ',\x0a\x09\x09\x09anIRMethod compiledSource,\x0a\x09\x09\x09'; })' ]\x0a\x09\x09ifNotEmpty: [ :attachments |\x0a\x09\x09\x09'(function ($methodClass){ return Object.defineProperty(',\x0a\x09\x09\x09anIRMethod compiledSource,\x0a\x09\x09\x09',\x22a$atx\x22,{enumerable:false,configurable:true,writable:true,value:',\x0a\x09\x09\x09attachments asJavaScriptSource,\x0a\x09\x09\x09'}); })' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:ifNotEmpty:", "attachments", ",", "compiledSource", "asJavaScriptSource"]
}, function ($methodClass){ return function (anIRMethod){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(anIRMethod)._attachments())._ifEmpty_ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv(["(function ($methodClass){ return ".__comma([$recv(anIRMethod)._compiledSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["compiledSource"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma("; })")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(attachments){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv([$recv([$recv("(function ($methodClass){ return Object.defineProperty(".__comma($recv(anIRMethod)._compiledSource())).__comma(",\x22a$atx\x22,{enumerable:false,configurable:true,writable:true,value:")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=5
//>>excludeEnd("ctx");
][0]).__comma($recv(attachments)._asJavaScriptSource())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=4
//>>excludeEnd("ctx");
][0]).__comma("}); })")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=3
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({attachments:attachments},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wrappedSourceOf:",{anIRMethod:anIRMethod})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);


$core.addMethod(
$core.method({
selector: "eval:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09^ self new eval: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["eval:", "new"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._eval_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler.a$cls);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22TODO remove, backward compat\x22\x0a\x09Smalltalk globals at: #SmalltalkParser put: smalltalkParser",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "globals"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Smalltalk)._globals())._at_put_("SmalltalkParser",smalltalkParser);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler.a$cls);

$core.addMethod(
$core.method({
selector: "parse:",
protocol: "parsing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parse: aString\x0a\x09^ self new parse: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "new"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._parse_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler.a$cls);

$core.addMethod(
$core.method({
selector: "pseudoVariableNames",
protocol: "parsing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pseudoVariableNames\x0a\x09^ PseudoVar dictionary keys asArray",
referencedClasses: ["PseudoVar"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asArray", "keys", "dictionary"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv($globals.PseudoVar)._dictionary())._keys())._asArray();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pseudoVariableNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler.a$cls);

$core.addMethod(
$core.method({
selector: "recompile:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "recompile: aClass\x0a\x09self new recompile: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["recompile:", "new"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._recompile_(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recompile:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler.a$cls);

$core.addMethod(
$core.method({
selector: "recompileAll",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recompileAll\x0a\x09Smalltalk classes do: [ :each |\x0a\x09\x09self recompile: each ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "classes", "recompile:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Smalltalk)._classes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._recompile_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recompileAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler.a$cls);


$core.addClass("DoIt", $globals.Object, [], "Compiler-Core");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DoIt.comment="`DoIt` is the class used to compile and evaluate expressions. See `Compiler >> evaluateExpression:`.";
//>>excludeEnd("ide");


$core.addClass("Evaluator", $globals.Object, [], "Compiler-Core");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Evaluator.comment="I evaluate code against a receiver, dispatching #evaluate:on: to the receiver.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "evaluate:for:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluate: aString for: anObject\x0a\x09^ anObject evaluate: aString on: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["evaluate:on:"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anObject)._evaluate_on_(aString,self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:for:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Evaluator);

$core.addMethod(
$core.method({
selector: "evaluate:receiver:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluate: aString receiver: anObject\x0a\x09| compiler |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :ex | ^ Terminal alert: ex messageText ].\x0a\x0a\x09^ compiler evaluateExpression: aString on: anObject",
referencedClasses: ["Compiler", "Error", "Terminal"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "evaluateExpression:on:"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
var compiler;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
compiler=$recv($globals.Compiler)._new();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(compiler)._parseExpression_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[$recv($globals.Terminal)._alert_($recv(ex)._messageText())];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $recv(compiler)._evaluateExpression_on_(aString,anObject);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:receiver:",{aString:aString,anObject:anObject,compiler:compiler})});
//>>excludeEnd("ctx");
}; }),
$globals.Evaluator);


$core.addMethod(
$core.method({
selector: "evaluate:for:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluate: aString for: anObject\x0a\x09^ self new evaluate: aString for: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["evaluate:for:", "new"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._evaluate_for_(aString,anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:for:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Evaluator.a$cls);


$core.addClass("ParseError", $globals.Error, [], "Compiler-Core");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ParseError.comment="Instance of ParseError are signaled on any parsing error.\x0aSee `Compiler >> #parse:`";
//>>excludeEnd("ide");


$core.addTrait("TPragmator", "Compiler-Core");
$core.addMethod(
$core.method({
selector: "canProcessPragma:",
protocol: "pragma processing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "canProcessPragma: aMessage\x0a\x09^ self class includesSelector: aMessage selector",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["includesSelector:", "class", "selector"]
}, function ($methodClass){ return function (aMessage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._includesSelector_($recv(aMessage)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canProcessPragma:",{aMessage:aMessage})});
//>>excludeEnd("ctx");
}; }),
$globals.TPragmator);

$core.addMethod(
$core.method({
selector: "processPragma:",
protocol: "pragma processing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "processPragma: aMessage\x0a\x09(self canProcessPragma: aMessage) ifTrue: [\x0a\x09\x09^ aMessage sendTo: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "canProcessPragma:", "sendTo:"]
}, function ($methodClass){ return function (aMessage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._canProcessPragma_(aMessage))){
return $recv(aMessage)._sendTo_(self);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processPragma:",{aMessage:aMessage})});
//>>excludeEnd("ctx");
}; }),
$globals.TPragmator);

$core.addMethod(
$core.method({
selector: "processPragmas:",
protocol: "pragma processing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "processPragmas: aCollection\x0a\x09aCollection do: [ :each | self processPragma: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "processPragma:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._processPragma_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processPragmas:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.TPragmator);

$core.addMethod(
$core.method({
selector: "eval:",
protocol: "*Compiler-Core",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09^ self context\x0a\x09\x09ifEmpty: [ Compiler eval: aString ]\x0a\x09\x09ifNotEmpty: [ :context |\x0a\x09\x09\x09| wrapperSource |\x0a\x09\x09\x09wrapperSource :=\x0a\x09\x09\x09\x09'(function(', (',' join: context keys), '){return(', aString, ');})'.\x0a\x09\x09\x09(Compiler eval: wrapperSource)\x0a\x09\x09\x09\x09valueWithPossibleArguments: context values ]",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:ifNotEmpty:", "context", "eval:", ",", "join:", "keys", "valueWithPossibleArguments:", "values"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._context())._ifEmpty_ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv($globals.Compiler)._eval_(aString)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["eval:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(context){
var wrapperSource;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
wrapperSource=[$recv([$recv([$recv("(function(".__comma(","._join_($recv(context)._keys()))).__comma("){return(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=3
//>>excludeEnd("ctx");
][0]).__comma(aString)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(");})")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
return $recv($recv($globals.Compiler)._eval_(wrapperSource))._valueWithPossibleArguments_($recv(context)._values());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({context:context,wrapperSource:wrapperSource},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "asVariableName",
protocol: "*Compiler-Core",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asVariableName\x0a\x09^ (Smalltalk reservedWords includes: self)\x0a\x09\x09ifTrue: [ self, '_' ]\x0a\x09\x09ifFalse: [ self ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "includes:", "reservedWords", ","]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv($globals.Smalltalk)._reservedWords())._includes_(self))){
return $self.__comma("_");
} else {
return self;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asVariableName",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

});
