define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Platform-Node");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["amber/core/Platform-Services"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/core/Platform-Services"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("NodePlatform", $globals.Object, [], "Platform-Node");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.NodePlatform.comment="I am `Platform` service implementation for node-like environment.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "globals",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return global;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09^ global",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}),
$globals.NodePlatform);

$core.addMethod(
$core.method({
selector: "newXhr",
protocol: "public API",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $receiver;
if(($receiver = $globals.XMLHttpRequest) == null || $receiver.a$nil){
$self._error_("XMLHttpRequest not available.");
} else {
return $recv($globals.XMLHttpRequest)._new();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newXhr",{})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newXhr\x0a\x09XMLHttpRequest\x0a\x09\x09ifNotNil: [ ^ XMLHttpRequest new ]\x0a\x09\x09ifNil: [ self error: 'XMLHttpRequest not available.' ]",
referencedClasses: ["XMLHttpRequest"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:ifNil:", "new", "error:"]
}),
$globals.NodePlatform);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: "testing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._isFeasible();
if($core.assert($1)){
$recv($globals.Platform)._registerIfNone_($self._new());
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self isFeasible ifTrue: [ Platform registerIfNone: self new ]",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isFeasible", "registerIfNone:", "new"]
}),
$globals.NodePlatform.a$cls);

$core.addMethod(
$core.method({
selector: "isFeasible",
protocol: "testing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof process !== "undefined" && process && process.versions && process.versions.node != null;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFeasible",{})});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFeasible\x0a<inlineJS: 'return typeof process !== \x22undefined\x22 && process && process.versions && process.versions.node != null'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof process !== \x22undefined\x22 && process && process.versions && process.versions.node != null"]]],
messageSends: []
}),
$globals.NodePlatform.a$cls);

});
