define(["amber/boot", "require", "amber/core/Kernel-Collections", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Compiler-Core");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("AbstractCodeGenerator", $globals.Object, ["currentClass", "currentPackage", "source"], "Compiler-Core");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AbstractCodeGenerator.comment="I am the abstract super class of all code generators and provide their common API.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "compileNode:",
protocol: "compiling",
fn: function (aNode){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "compileNode: aNode\x0a\x09^ self transformers\x0a\x09\x09inject: aNode\x0a\x09\x09into: [ :input :transformer | transformer value: input ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "transformers", "value:"]
}),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "currentClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.currentClass;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentClass\x0a\x09^ currentClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "currentClass:",
protocol: "accessing",
fn: function (aClass){
var self=this,$self=this;
$self.currentClass=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "currentPackage",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.currentPackage;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentPackage\x0a\x09^ currentPackage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "currentPackage:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.currentPackage=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "currentPackage: anObject\x0a\x09currentPackage := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "pseudoVariables",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._pseudoVariableNames();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pseudoVariables",{})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pseudoVariables\x0a\x09^ Smalltalk pseudoVariableNames",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["pseudoVariableNames"]
}),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "source",
protocol: "accessing",
fn: function (){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "source:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
$self.source=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "transformers",
protocol: "compiling",
fn: function (){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transformers\x0a\x09| dict |\x0a\x09dict := self transformersDictionary.\x0a\x09^ dict keys asArray sort collect: [ :each | dict at: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["transformersDictionary", "collect:", "sort", "asArray", "keys", "at:"]
}),
$globals.AbstractCodeGenerator);

$core.addMethod(
$core.method({
selector: "transformersDictionary",
protocol: "compiling",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transformersDictionary",{})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transformersDictionary\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}),
$globals.AbstractCodeGenerator);



$core.addClass("CodeGenerator", $globals.AbstractCodeGenerator, ["transformersDictionary"], "Compiler-Core");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CodeGenerator.comment="I am a basic code generator. I generate a valid JavaScript output, but no not perform any inlining.\x0aSee `InliningCodeGenerator` for an optimized JavaScript code generation.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "earlyAstPragmator",
protocol: "compiling",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.AstEarlyPragmator)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"earlyAstPragmator",{})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "earlyAstPragmator\x0a\x09^ AstEarlyPragmator new",
referencedClasses: ["AstEarlyPragmator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}),
$globals.CodeGenerator);

$core.addMethod(
$core.method({
selector: "irTranslator",
protocol: "compiling",
fn: function (){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "irTranslator\x0a\x09^ self irTranslatorClass new\x0a\x09\x09currentClass: self currentClass;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["currentClass:", "new", "irTranslatorClass", "currentClass", "yourself"]
}),
$globals.CodeGenerator);

$core.addMethod(
$core.method({
selector: "irTranslatorClass",
protocol: "compiling",
fn: function (){
var self=this,$self=this;
return $globals.IRJSTranslator;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "irTranslatorClass\x0a\x09^ IRJSTranslator",
referencedClasses: ["IRJSTranslator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.CodeGenerator);

$core.addMethod(
$core.method({
selector: "semanticAnalyzer",
protocol: "compiling",
fn: function (){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "semanticAnalyzer\x0a\x09^ (SemanticAnalyzer on: self currentClass)\x0a\x09\x09thePackage: self currentPackage;\x0a\x09\x09yourself",
referencedClasses: ["SemanticAnalyzer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["thePackage:", "on:", "currentClass", "currentPackage", "yourself"]
}),
$globals.CodeGenerator);

$core.addMethod(
$core.method({
selector: "transformersDictionary",
protocol: "compiling",
fn: function (){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transformersDictionary\x0a\x09^ transformersDictionary ifNil: [ transformersDictionary := Dictionary new\x0a\x09\x09at: '1000-earlyPragmas' put: self earlyAstPragmator;\x0a\x09\x09at: '2000-semantic' put: self semanticAnalyzer;\x0a\x09\x09at: '5000-astToIr' put: self translator;\x0a\x09\x09at: '8000-irToJs' put: self irTranslator;\x0a\x09\x09yourself ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "at:put:", "new", "earlyAstPragmator", "semanticAnalyzer", "translator", "irTranslator", "yourself"]
}),
$globals.CodeGenerator);

$core.addMethod(
$core.method({
selector: "translator",
protocol: "compiling",
fn: function (){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "translator\x0a\x09^ IRASTTranslator new\x0a\x09\x09source: self source;\x0a\x09\x09theClass: self currentClass;\x0a\x09\x09yourself",
referencedClasses: ["IRASTTranslator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["source:", "new", "source", "theClass:", "currentClass", "yourself"]
}),
$globals.CodeGenerator);



$core.addClass("Compiler", $globals.Object, ["currentClass", "currentPackage", "source", "codeGeneratorClass", "codeGenerator"], "Compiler-Core");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Compiler.comment="I provide the public interface for compiling Amber source code into JavaScript.\x0a\x0aThe code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`.\x0aThe default code generator is an instance of `InlinedCodeGenerator`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "ast:forClass:protocol:",
protocol: "compiling",
fn: function (aString,aClass,anotherString){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "anotherString"],
source: "ast: aString forClass: aClass protocol: anotherString\x0a\x09self\x0a\x09\x09source: aString;\x0a\x09\x09forClass: aClass protocol: anotherString.\x0a\x0a\x09self codeGenerator transformersDictionary at: '2500-astCheckpoint' put: [ :x | ^x ].\x0a\x09\x0a\x09self compileNode: (self parse: aString).\x0a\x0a\x09CompilerError signal: 'AST transformation failed.'",
referencedClasses: ["CompilerError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["source:", "forClass:protocol:", "at:put:", "transformersDictionary", "codeGenerator", "compileNode:", "parse:", "signal:"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "cleanCodeGenerator",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
$self.codeGenerator=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cleanCodeGenerator\x0a\x09codeGenerator := nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "codeGenerator",
protocol: "accessing",
fn: function (){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeGenerator\x0a\x09^ codeGenerator ifNil: [ codeGenerator := self codeGeneratorClass new\x0a\x09\x09\x09source: self source;\x0a\x09\x09\x09currentClass: self currentClass;\x0a\x09\x09\x09currentPackage: self currentPackage;\x0a\x09\x09\x09yourself ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "source:", "new", "codeGeneratorClass", "source", "currentClass:", "currentClass", "currentPackage:", "currentPackage", "yourself"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "codeGeneratorClass",
protocol: "accessing",
fn: function (){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeGeneratorClass\x0a\x09^ codeGeneratorClass ifNil: [ InliningCodeGenerator ]",
referencedClasses: ["InliningCodeGenerator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "codeGeneratorClass:",
protocol: "accessing",
fn: function (aClass){
var self=this,$self=this;
$self.codeGeneratorClass=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "codeGeneratorClass: aClass\x0a\x09codeGeneratorClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "compile:forClass:protocol:",
protocol: "compiling",
fn: function (aString,aClass,anotherString){
var self=this,$self=this;
var compilationResult,result,pragmas,closure;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
compilationResult=$self._compileSource_forClass_protocol_(aString,aClass,anotherString);
pragmas=$recv(compilationResult)._at_("pragmas");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
closure=$self._eval_forPackage_($recv(compilationResult)._at_("fn"),$self._currentPackage());
$1=compilationResult;
$recv($1)._removeKey_("fn");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeKey:"]=1;
//>>excludeEnd("ctx");
$recv($1)._removeKey_("pragmas");
result=$recv($recv($globals.Smalltalk)._core())._method_(compilationResult);
$2=result;
$recv($2)._protocol_(anotherString);
$recv($2)._pragmas_(pragmas);
$recv($2)._fn_(closure);
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile:forClass:protocol:",{aString:aString,aClass:aClass,anotherString:anotherString,compilationResult:compilationResult,result:result,pragmas:pragmas,closure:closure})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "anotherString"],
source: "compile: aString forClass: aClass protocol: anotherString\x0a\x09| compilationResult result pragmas closure |\x0a\x09compilationResult :=\x0a\x09\x09self compileSource: aString forClass: aClass protocol: anotherString.\x0a\x09pragmas := compilationResult at: #pragmas.\x0a\x09closure := self eval: (compilationResult at: #fn) forPackage: self currentPackage.\x0a\x09compilationResult removeKey: #fn; removeKey: #pragmas.\x0a\x09result := Smalltalk core method: compilationResult.\x0a\x09result protocol: anotherString; pragmas: pragmas; fn: closure.\x0a\x09^ result",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["compileSource:forClass:protocol:", "at:", "eval:forPackage:", "currentPackage", "removeKey:", "method:", "core", "protocol:", "pragmas:", "fn:"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "compileExpression:on:",
protocol: "compiling",
fn: function (aString,anObject){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "compileExpression: aString on: anObject\x0a\x09^ self\x0a\x09\x09compile: 'xxxDoIt ^ [ ', aString, ' ] value'\x0a\x09\x09forClass: anObject class\x0a\x09\x09protocol: '**xxxDoIt'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["compile:forClass:protocol:", ",", "class"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "compileNode:",
protocol: "compiling",
fn: function (aNode){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "compileNode: aNode\x0a    | result |\x0a\x09result := self codeGenerator compileNode: aNode.\x0a\x09self cleanCodeGenerator.\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["compileNode:", "codeGenerator", "cleanCodeGenerator"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "compileSource:forClass:protocol:",
protocol: "compiling",
fn: function (aString,aClass,anotherString){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "anotherString"],
source: "compileSource: aString forClass: aClass protocol: anotherString\x0a\x09^ self\x0a\x09\x09source: aString;\x0a\x09\x09forClass: aClass protocol: anotherString;\x0a\x09\x09compileNode: (self parse: aString)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["source:", "forClass:protocol:", "compileNode:", "parse:"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "currentClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.currentClass;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentClass\x0a\x09^ currentClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "currentClass:",
protocol: "accessing",
fn: function (aClass){
var self=this,$self=this;
$self.currentClass=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "currentPackage",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self.currentPackage;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentPackage\x0a\x09^ currentPackage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "currentPackage:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self.currentPackage=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "currentPackage: anObject\x0a\x09currentPackage := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "eval:",
protocol: "compiling",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return eval(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09<inlineJS: 'return eval(aString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return eval(aString)"]]],
messageSends: []
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "eval:forPackage:",
protocol: "compiling",
fn: function (aString,aPackage){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aPackage"],
source: "eval: aString forPackage: aPackage\x0a\x09^ aPackage\x0a\x09\x09ifNil: [ self eval: aString ]\x0a\x09\x09ifNotNil: [ aPackage eval: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "eval:"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "evaluateExpression:",
protocol: "compiling",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._evaluateExpression_on_(aString,$recv($globals.DoIt)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluateExpression:",{aString:aString})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "evaluateExpression: aString\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression and answer the returned object\x22\x0a\x09^ self evaluateExpression: aString on: DoIt new",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["evaluateExpression:on:", "new"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "evaluateExpression:on:",
protocol: "compiling",
fn: function (aString,anObject){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluateExpression: aString on: anObject\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression with anObject as the receiver and answer the returned object\x22\x0a\x09| result method |\x0a\x09method := self compileExpression: aString on: anObject.\x0a\x09anObject class addCompiledMethod: method.\x0a\x09result := anObject xxxDoIt.\x0a\x09anObject class removeCompiledMethod: method.\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["compileExpression:on:", "addCompiledMethod:", "class", "xxxDoIt", "removeCompiledMethod:"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "forClass:protocol:",
protocol: "compiling",
fn: function (aClass,anotherString){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anotherString"],
source: "forClass: aClass protocol: anotherString\x0a\x09self\x0a\x09\x09currentPackage: (aClass packageOfProtocol: anotherString);\x0a\x09\x09currentClass: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["currentPackage:", "packageOfProtocol:", "currentClass:"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "install:forClass:protocol:",
protocol: "compiling",
fn: function (aString,aBehavior,anotherString){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBehavior", "anotherString"],
source: "install: aString forClass: aBehavior protocol: anotherString\x0a\x09| compiledMethod |\x0a\x09compiledMethod := self compile: aString forClass: aBehavior protocol: anotherString.\x0a\x09aBehavior addCompiledMethod: compiledMethod.\x0a\x09^ compiledMethod",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["compile:forClass:protocol:", "addCompiledMethod:"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "parse:",
protocol: "compiling",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._parse_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parse: aString\x0a\x09^ Smalltalk parse: aString",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "parseExpression:",
protocol: "compiling",
fn: function (aString){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parseExpression: aString\x0a\x09^ self parse: 'doIt ^ [ ', aString, ' ] value'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", ","]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "recompile:",
protocol: "compiling",
fn: function (aClass){
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
$1=$recv($recv(each)._methodClass()).__eq(eachSide);
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "recompile: aClass\x0a\x09aClass includingPossibleMetaDo: [ :eachSide |\x0a\x09\x09eachSide methodDictionary values\x0a\x09\x09\x09do: [ :each | each methodClass = eachSide ifTrue: [ \x0a\x09\x09\x09\x09self \x0a\x09\x09\x09\x09\x09install: each source \x0a\x09\x09\x09\x09\x09forClass: eachSide \x0a\x09\x09\x09\x09\x09protocol: each protocol ] ]\x0a\x09\x09\x09displayingProgress: 'Recompiling ', eachSide name ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["includingPossibleMetaDo:", "do:displayingProgress:", "values", "methodDictionary", "ifTrue:", "=", "methodClass", "install:forClass:protocol:", "source", "protocol", ",", "name"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "recompileAll",
protocol: "compiling",
fn: function (){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recompileAll\x0a\x09Smalltalk classes \x0a\x09\x09do: [ :each | self recompile: each ]\x0a\x09\x09displayingProgress: 'Compiling all classes...'",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:displayingProgress:", "classes", "recompile:"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "source",
protocol: "accessing",
fn: function (){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}),
$globals.Compiler);

$core.addMethod(
$core.method({
selector: "source:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
$self.source=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.Compiler);


$core.addMethod(
$core.method({
selector: "eval:",
protocol: "evaluating",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._eval_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09^ self new eval: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["eval:", "new"]
}),
$globals.Compiler.a$cls);

$core.addMethod(
$core.method({
selector: "recompile:",
protocol: "compiling",
fn: function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._recompile_(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recompile:",{aClass:aClass})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "recompile: aClass\x0a\x09self new recompile: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["recompile:", "new"]
}),
$globals.Compiler.a$cls);

$core.addMethod(
$core.method({
selector: "recompileAll",
protocol: "compiling",
fn: function (){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recompileAll\x0a\x09Smalltalk classes do: [ :each |\x0a\x09\x09self recompile: each ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "classes", "recompile:"]
}),
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
fn: function (aString,aContext){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aContext"],
source: "evaluate: aString context: aContext\x0a\x09\x22Similar to #evaluate:for:, with the following differences:\x0a\x09- instead of compiling and running `aString`, `aString` is interpreted using an `ASTInterpreter`\x0a\x09- instead of evaluating against a receiver, evaluate in the context of `aContext`\x22\x0a\x0a\x09| compiler ast |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ ast := compiler parseExpression: aString ] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :ex | ^ Terminal alert: ex messageText ].\x0a\x09\x09\x0a\x09(AISemanticAnalyzer on: aContext receiver class)\x0a\x09\x09context: aContext;\x0a\x09\x09visit: ast.\x0a\x0a\x09^ aContext evaluateNode: ast",
referencedClasses: ["Compiler", "Error", "Terminal", "AISemanticAnalyzer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "context:", "on:", "class", "receiver", "visit:", "evaluateNode:"]
}),
$globals.Evaluator);

$core.addMethod(
$core.method({
selector: "evaluate:for:",
protocol: "evaluating",
fn: function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anObject)._evaluate_on_(aString,self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:for:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluate: aString for: anObject\x0a\x09^ anObject evaluate: aString on: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["evaluate:on:"]
}),
$globals.Evaluator);

$core.addMethod(
$core.method({
selector: "evaluate:receiver:",
protocol: "evaluating",
fn: function (aString,anObject){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluate: aString receiver: anObject\x0a\x09| compiler |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :ex | ^ Terminal alert: ex messageText ].\x0a\x0a\x09^ compiler evaluateExpression: aString on: anObject",
referencedClasses: ["Compiler", "Error", "Terminal"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "evaluateExpression:on:"]
}),
$globals.Evaluator);


$core.addMethod(
$core.method({
selector: "evaluate:for:",
protocol: "instance creation",
fn: function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._evaluate_for_(aString,anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:for:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluate: aString for: anObject\x0a\x09^ self new evaluate: aString for: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["evaluate:for:", "new"]
}),
$globals.Evaluator.a$cls);

$core.addMethod(
$core.method({
selector: "asVariableName",
protocol: "*Compiler-Core",
fn: function (){
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
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asVariableName\x0a\x09^ (Smalltalk reservedWords includes: self)\x0a\x09\x09ifTrue: [ self, '_' ]\x0a\x09\x09ifFalse: [ self ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "includes:", "reservedWords", ","]
}),
$globals.String);

});
