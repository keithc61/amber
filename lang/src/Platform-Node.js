define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Platform-Node");
$pkg.imports = ["amber/core/Platform-Services"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/core/Platform-Services"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("NodePlatform", $globals.Object, "Platform-Node");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.NodePlatform.comment="I am `Platform` service implementation for node-like environment.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "fetch:",
protocol: "public API",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStringOrObject"],
source: "fetch: aStringOrObject\x0a\x09^ self globals at: #fetch\x0a\x09\x09ifPresent: [ :fetch | fetch value: aStringOrObject ]\x0a\x09\x09ifAbsent: [ Promise signal: 'fetch not available.' ]",
referencedClasses: ["Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifPresent:ifAbsent:", "globals", "value:", "signal:"]
}, function ($methodClass){ return function (aStringOrObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._globals())._at_ifPresent_ifAbsent_("fetch",(function(fetch){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(fetch)._value_(aStringOrObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({fetch:fetch},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Promise)._signal_("fetch not available.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fetch:",{aStringOrObject:aStringOrObject})});
//>>excludeEnd("ctx");
}; }),
$globals.NodePlatform);

$core.addMethod(
$core.method({
selector: "fetchUrl:options:",
protocol: "public API",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "fetchUrl: aString options: anObject\x0a\x09^ self globals at: #fetch\x0a\x09\x09ifPresent: [ :fetch | fetch value: aString value: anObject ]\x0a\x09\x09ifAbsent: [ Promise signal: 'fetch not available.' ]",
referencedClasses: ["Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifPresent:ifAbsent:", "globals", "value:value:", "signal:"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._globals())._at_ifPresent_ifAbsent_("fetch",(function(fetch){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(fetch)._value_value_(aString,anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({fetch:fetch},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Promise)._signal_("fetch not available.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fetchUrl:options:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.NodePlatform);

$core.addMethod(
$core.method({
selector: "globals",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09^ global",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return global;

}; }),
$globals.NodePlatform);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09process\x0a\x09\x09on: 'uncaughtException'\x0a\x09\x09do: [ :err | ErrorHandler handleError: err. process exit: 1 ];\x0a\x09\x09on: 'unhandledRejection'\x0a\x09\x09do: [ :err | ErrorHandler handleError: err. process exit: 2 ]",
referencedClasses: ["ErrorHandler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:", "handleError:", "exit:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=process;
[$recv($1)._on_do_("uncaughtException",(function(err){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv($globals.ErrorHandler)._handleError_(err)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["handleError:"]=1
//>>excludeEnd("ctx");
][0];
return [$recv(process)._exit_((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["exit:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:do:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._on_do_("unhandledRejection",(function(err){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($globals.ErrorHandler)._handleError_(err);
return $recv(process)._exit_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NodePlatform);

$core.addMethod(
$core.method({
selector: "newXhr",
protocol: "public API",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newXhr\x0a\x09XMLHttpRequest\x0a\x09\x09ifNotNil: [ ^ XMLHttpRequest new ]\x0a\x09\x09ifNil: [ self error: 'XMLHttpRequest not available.' ]",
referencedClasses: ["XMLHttpRequest"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:ifNil:", "new", "error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$globals.XMLHttpRequest;
if($1 == null || $1.a$nil){
$self._error_("XMLHttpRequest not available.");
} else {
return $recv($globals.XMLHttpRequest)._new();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newXhr",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NodePlatform);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self isFeasible ifTrue: [ Platform registerIfNone: self new ]",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isFeasible", "registerIfNone:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._isFeasible())){
$recv($globals.Platform)._registerIfNone_($self._new());
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NodePlatform.a$cls);

$core.addMethod(
$core.method({
selector: "isFeasible",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFeasible\x0a<inlineJS: 'return typeof process !== \x22undefined\x22 && process && process.versions && process.versions.node != null'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof process !== \x22undefined\x22 && process && process.versions && process.versions.node != null"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof process !== "undefined" && process && process.versions && process.versions.node != null;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFeasible",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NodePlatform.a$cls);

});
