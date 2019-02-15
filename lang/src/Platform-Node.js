define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber_core/Platform-Services"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Platform-Node");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["amber_core/Platform-Services"];
$pkg.transport = {"type":"amd","amdNamespace":"amber_core"};

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
messageSends: []
}),
$globals.NodePlatform);

$core.addMethod(
$core.method({
selector: "newXhr",
protocol: "accessing",
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
}, function($ctx1) {$ctx1.fill(self,"newXhr",{},$globals.NodePlatform)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newXhr\x0a\x09XMLHttpRequest\x0a\x09\x09ifNotNil: [ ^ XMLHttpRequest new ]\x0a\x09\x09ifNil: [ self error: 'XMLHttpRequest not available.' ]",
referencedClasses: ["XMLHttpRequest"],
//>>excludeEnd("ide");
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
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.NodePlatform.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self isFeasible ifTrue: [ Platform registerIfNone: self new ]",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
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
return typeof process !== "undefined" && process && process.versions && process.versions.node;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFeasible",{},$globals.NodePlatform.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFeasible\x0a<inlineJS: 'return typeof process !== \x22undefined\x22 && process && process.versions && process.versions.node'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NodePlatform.a$cls);

});
