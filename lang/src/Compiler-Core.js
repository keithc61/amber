define(["amber/boot", "require", "amber/core/Kernel-Collections", "amber/core/Kernel-Exceptions", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
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
var $1,$receiver;
$1=$self.source;
if(($receiver = $1) == null || $receiver.a$nil){
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



$core.addClass("CodeGenerator", $globals.AbstractCodeGenerator, ["transformersDictionary"], "Compiler-Core");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CodeGenerator.comment="I am a basic code generator. I generate a valid JavaScript output, but no not perform any inlining.\x0aSee `InliningCodeGenerator` for an optimized JavaScript code generation.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "earlyAstPragmator",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "earlyAstPragmator\x0a\x09^ AstEarlyPragmator new",
referencedClasses: ["AstEarlyPragmator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.AstEarlyPragmator)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"earlyAstPragmator",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CodeGenerator);

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
$globals.CodeGenerator);

$core.addMethod(
$core.method({
selector: "transformersDictionary",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transformersDictionary\x0a\x09^ transformersDictionary ifNil: [ transformersDictionary := Dictionary new\x0a\x09\x09at: '1000-earlyPragmas' put: self earlyAstPragmator;\x0a\x09\x09at: '2000-semantic' put: self semanticAnalyzer;\x0a\x09\x09at: '5000-astToIr' put: self translator;\x0a\x09\x09at: '8000-irToJs' put: self irTranslator;\x0a\x09\x09yourself ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "at:put:", "new", "earlyAstPragmator", "semanticAnalyzer", "translator", "irTranslator", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$self.transformersDictionary;
if(($receiver = $1) == null || $receiver.a$nil){
$2=$recv($globals.Dictionary)._new();
$recv($2)._at_put_("1000-earlyPragmas",$self._earlyAstPragmator());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_("2000-semantic",$self._semanticAnalyzer());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($2)._at_put_("5000-astToIr",$self._translator());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
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



$core.addClass("Compiler", $globals.Object, ["currentClass", "currentPackage", "source", "codeGeneratorClass", "codeGenerator"], "Compiler-Core");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Compiler.comment="I provide the public interface for compiling Amber source code into JavaScript.\x0a\x0aThe code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`.\x0aThe default code generator is an instance of `InlinedCodeGenerator`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "ast:forClass:protocol:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "anotherString"],
source: "ast: aString forClass: aClass protocol: anotherString\x0a\x09self\x0a\x09\x09source: aString;\x0a\x09\x09forClass: aClass protocol: anotherString.\x0a\x0a\x09self codeGenerator transformersDictionary at: '2500-astCheckpoint' put: [ :x | ^x ].\x0a\x09\x0a\x09self compileNode: (self parse: aString).\x0a\x0a\x09CompilerError signal: 'AST transformation failed.'",
referencedClasses: ["CompilerError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["source:", "forClass:protocol:", "at:put:", "transformersDictionary", "codeGenerator", "compileNode:", "parse:", "signal:"]
}, function ($methodClass){ return function (aString,aClass,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$self._source_(aString);
$self._forClass_protocol_(aClass,anotherString);
$recv($recv($self._codeGenerator())._transformersDictionary())._at_put_("2500-astCheckpoint",(function(x){
throw $early=[x];

}));
$self._compileNode_($self._parse_(aString));
$recv($globals.CompilerError)._signal_("AST transformation failed.");
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
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
source: "codeGenerator\x0a\x09^ codeGenerator ifNil: [ codeGenerator := self codeGeneratorClass new\x0a\x09\x09\x09source: self source;\x0a\x09\x09\x09currentClass: self currentClass;\x0a\x09\x09\x09currentPackage: self currentPackage;\x0a\x09\x09\x09yourself ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "source:", "new", "codeGeneratorClass", "source", "currentClass:", "currentClass", "currentPackage:", "currentPackage", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$self.codeGenerator;
if(($receiver = $1) == null || $receiver.a$nil){
$2=$recv($self._codeGeneratorClass())._new();
$recv($2)._source_($self._source());
$recv($2)._currentClass_($self._currentClass());
$recv($2)._currentPackage_($self._currentPackage());
$self.codeGenerator=$recv($2)._yourself();
return $self.codeGenerator;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"codeGenerator",{})});
//>>excludeEnd("ctx");
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
var $1,$receiver;
$1=$self.codeGeneratorClass;
if(($receiver = $1) == null || $receiver.a$nil){
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
source: "compile: aString forClass: aClass protocol: anotherString\x0a\x09| compilationResult result pragmas closureFactory |\x0a\x09compilationResult :=\x0a\x09\x09self compileSource: aString forClass: aClass protocol: anotherString.\x0a\x09pragmas := compilationResult removeKey: #pragmas.\x0a\x09closureFactory := (compilationResult removeKey: #instantiateFn ifAbsent: [])\x0a\x09\x09ifNotNil: [ :js | self eval: js forPackage: self currentPackage ].\x0a\x09result := Smalltalk core method: compilationResult.\x0a\x09result protocol: anotherString; pragmas: pragmas.\x0a\x09closureFactory ifNotNil: [ result instantiateFn: closureFactory ].\x0a\x09^ result",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["compileSource:forClass:protocol:", "removeKey:", "ifNotNil:", "removeKey:ifAbsent:", "eval:forPackage:", "currentPackage", "method:", "core", "protocol:", "pragmas:", "instantiateFn:"]
}, function ($methodClass){ return function (aString,aClass,anotherString){
var self=this,$self=this;
var compilationResult,result,pragmas,closureFactory;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
compilationResult=$self._compileSource_forClass_protocol_(aString,aClass,anotherString);
pragmas=$recv(compilationResult)._removeKey_("pragmas");
$1=$recv(compilationResult)._removeKey_ifAbsent_("instantiateFn",(function(){

}));
if(($receiver = $1) == null || $receiver.a$nil){
closureFactory=$1;
} else {
var js;
js=$receiver;
closureFactory=$self._eval_forPackage_(js,$self._currentPackage());
}
result=$recv($recv($globals.Smalltalk)._core())._method_(compilationResult);
$2=result;
$recv($2)._protocol_(anotherString);
$recv($2)._pragmas_(pragmas);
$3=closureFactory;
if(($receiver = $3) == null || $receiver.a$nil){
$3;
} else {
$recv(result)._instantiateFn_(closureFactory);
}
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile:forClass:protocol:",{aString:aString,aClass:aClass,anotherString:anotherString,compilationResult:compilationResult,result:result,pragmas:pragmas,closureFactory:closureFactory})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "compileExpression:on:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "compileExpression: aString on: anObject\x0a\x09^ self\x0a\x09\x09compile: 'xxxDoIt ^ [ ', aString, ' ] value'\x0a\x09\x09forClass: anObject class\x0a\x09\x09protocol: '**xxxDoIt'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["compile:forClass:protocol:", ",", "class"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("xxxDoIt ^ [ ".__comma(aString)).__comma(" ] value");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $self._compile_forClass_protocol_($1,$recv(anObject)._class(),"**xxxDoIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileExpression:on:",{aString:aString,anObject:anObject})});
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
selector: "compileSource:forClass:protocol:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "anotherString"],
source: "compileSource: aString forClass: aClass protocol: anotherString\x0a\x09^ self\x0a\x09\x09source: aString;\x0a\x09\x09forClass: aClass protocol: anotherString;\x0a\x09\x09compileNode: (self parse: aString)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["source:", "forClass:protocol:", "compileNode:", "parse:"]
}, function ($methodClass){ return function (aString,aClass,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._source_(aString);
$self._forClass_protocol_(aClass,anotherString);
return $self._compileNode_($self._parse_(aString));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileSource:forClass:protocol:",{aString:aString,aClass:aClass,anotherString:anotherString})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

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
$globals.Compiler);

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
var $receiver;
if(($receiver = aPackage) == null || $receiver.a$nil){
return $self._eval_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["eval:"]=1;
//>>excludeEnd("ctx");
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
source: "evaluateExpression: aString on: anObject\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression with anObject as the receiver and answer the returned object\x22\x0a\x09| result method |\x0a\x09method := self compileExpression: aString on: anObject.\x0a\x09anObject class addCompiledMethod: method.\x0a\x09result := anObject xxxDoIt.\x0a\x09anObject class removeCompiledMethod: method.\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["compileExpression:on:", "addCompiledMethod:", "class", "xxxDoIt", "removeCompiledMethod:"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
var result,method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
method=$self._compileExpression_on_(aString,anObject);
$1=$recv(anObject)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($1)._addCompiledMethod_(method);
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
selector: "forClass:protocol:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anotherString"],
source: "forClass: aClass protocol: anotherString\x0a\x09self\x0a\x09\x09currentPackage: (aClass packageOfProtocol: anotherString);\x0a\x09\x09currentClass: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["currentPackage:", "packageOfProtocol:", "currentClass:"]
}, function ($methodClass){ return function (aClass,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._currentPackage_($recv(aClass)._packageOfProtocol_(anotherString));
$self._currentClass_(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forClass:protocol:",{aClass:aClass,anotherString:anotherString})});
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
source: "parse: aString\x0a\x09| result |\x0a\x09\x0a\x09[ result := self basicParse: aString ] \x0a\x09\x09tryCatch: [ :ex | (self parseError: ex parsing: aString) signal ].\x0a\x09\x09\x0a\x09^ result\x0a\x09\x09source: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["tryCatch:", "basicParse:", "signal", "parseError:parsing:", "source:", "yourself"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
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
$1=result;
$recv($1)._source_(aString);
return $recv($1)._yourself();
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
source: "parseError: anException parsing: aString\x0a\x09(anException basicAt: 'location')\x0a\x09\x09ifNil: [ ^ anException pass ]\x0a\x09\x09ifNotNil: [ :loc |\x0a\x09\x09\x09^ ParseError new \x0a\x09\x09\x09\x09messageText: \x0a\x09\x09\x09\x09\x09'Parse error on line ', loc start line ,\x0a\x09\x09\x09\x09\x09' column ' , loc start column ,\x0a\x09\x09\x09\x09\x09' : Unexpected character ', (anException basicAt: 'found');\x0a\x09\x09\x09\x09yourself ]",
referencedClasses: ["ParseError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "basicAt:", "pass", "messageText:", "new", ",", "line", "start", "column", "yourself"]
}, function ($methodClass){ return function (anException,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$9,$8,$7,$6,$5,$4,$3,$receiver;
$1=$recv(anException)._basicAt_("location");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.a$nil){
return $recv(anException)._pass();
} else {
var loc;
loc=$receiver;
$2=$recv($globals.ParseError)._new();
$9=$recv(loc)._start();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["start"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._line();
$7="Parse error on line ".__comma($8);
$6=$recv($7).__comma(" column ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$5=$recv($6).__comma($recv($recv(loc)._start())._column());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$4=$recv($5).__comma(" : Unexpected character ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($recv(anException)._basicAt_("found"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._messageText_($3);
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
source: "parseExpression: aString\x0a\x09^ self parse: 'doIt ^ [ ', aString, ' ] value'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", ","]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("doIt ^ [ ".__comma(aString)).__comma(" ] value");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $self._parse_($1);
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
var $1;
$recv(aClass)._includingPossibleMetaDo_((function(eachSide){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(eachSide)._methodDictionary())._values())._do_displayingProgress_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($recv(each)._origin()).__eq(eachSide);
if($core.assert($1)){
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
var $1,$receiver;
$1=$self.source;
if(($receiver = $1) == null || $receiver.a$nil){
return "";
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Compiler);

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
selector: "evaluate:context:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aContext"],
source: "evaluate: aString context: aContext\x0a\x09\x22Similar to #evaluate:for:, with the following differences:\x0a\x09- instead of compiling and running `aString`, `aString` is interpreted using an `ASTInterpreter`\x0a\x09- instead of evaluating against a receiver, evaluate in the context of `aContext`\x22\x0a\x0a\x09| compiler ast |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ ast := compiler parseExpression: aString ] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :ex | ^ Terminal alert: ex messageText ].\x0a\x09\x09\x0a\x09(AISemanticAnalyzer on: aContext receiver class)\x0a\x09\x09context: aContext;\x0a\x09\x09visit: ast.\x0a\x0a\x09^ aContext evaluateNode: ast",
referencedClasses: ["Compiler", "Error", "Terminal", "AISemanticAnalyzer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "context:", "on:", "class", "receiver", "visit:", "evaluateNode:"]
}, function ($methodClass){ return function (aString,aContext){
var self=this,$self=this;
var compiler,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
compiler=$recv($globals.Compiler)._new();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
ast=$recv(compiler)._parseExpression_(aString);
return ast;
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
$1=$recv($globals.AISemanticAnalyzer)._on_($recv($recv(aContext)._receiver())._class());
$recv($1)._context_(aContext);
$recv($1)._visit_(ast);
return $recv(aContext)._evaluateNode_(ast);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:context:",{aString:aString,aContext:aContext,compiler:compiler,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.Evaluator);

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
var $1;
$1=$recv($recv($globals.Smalltalk)._reservedWords())._includes_(self);
if($core.assert($1)){
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
