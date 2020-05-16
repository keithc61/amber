define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Platform-Browser");
$pkg.imports = ["amber/core/Platform-Services"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/core/Platform-Services"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("BrowserPlatform", $globals.Object, "Platform-Browser");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BrowserPlatform.comment="I am `Platform` service implementation for browser.";
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
$globals.BrowserPlatform);

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
$globals.BrowserPlatform);

$core.addMethod(
$core.method({
selector: "globals",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09^ window",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return window;

}; }),
$globals.BrowserPlatform);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "public API",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09window\x0a\x09\x09addEventListener: 'error'\x0a\x09\x09do: [ :event | ErrorHandler handleError: event error ];\x0a\x09\x09addEventListener: 'unhandledrejection'\x0a\x09\x09do: [ :event | ErrorHandler handleError: event reason ]",
referencedClasses: ["ErrorHandler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addEventListener:do:", "handleError:", "error", "reason"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=window;
[$recv($1)._addEventListener_do_("error",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv($globals.ErrorHandler)._handleError_($recv(event)._error())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["handleError:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["addEventListener:do:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._addEventListener_do_("unhandledrejection",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.ErrorHandler)._handleError_($recv(event)._reason());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BrowserPlatform);

$core.addMethod(
$core.method({
selector: "newXhr",
protocol: "public API",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newXhr\x0a\x09XMLHttpRequest\x0a\x09\x09ifNotNil: [ ^ NativeFunction constructorOf: XMLHttpRequest ]\x0a\x09\x09ifNil: [ self error: 'XMLHttpRequest not available.' ]",
referencedClasses: ["XMLHttpRequest", "NativeFunction"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:ifNil:", "constructorOf:", "error:"]
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
return $recv($globals.NativeFunction)._constructorOf_($globals.XMLHttpRequest);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newXhr",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BrowserPlatform);


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
$globals.BrowserPlatform.a$cls);

$core.addMethod(
$core.method({
selector: "isFeasible",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFeasible\x0a<inlineJS: 'return typeof window !== \x22undefined\x22'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof window !== \x22undefined\x22"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof window !== "undefined";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFeasible",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BrowserPlatform.a$cls);


$core.addClass("BrowserTerminal", $globals.Object, "Platform-Browser");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BrowserTerminal.comment="I am `Terminal` service implementation for browser.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alert:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "alert: aString\x0a\x09^ window alert: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["alert:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(window)._alert_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.BrowserTerminal);

$core.addMethod(
$core.method({
selector: "confirm:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "confirm: aString\x0a\x09^ window confirm: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["confirm:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(window)._confirm_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.BrowserTerminal);

$core.addMethod(
$core.method({
selector: "prompt:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "prompt: aString\x0a\x09^ window prompt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["prompt:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(window)._prompt_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.BrowserTerminal);

$core.addMethod(
$core.method({
selector: "prompt:default:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "defaultString"],
source: "prompt: aString default: defaultString\x0a\x09^ window prompt: aString default: defaultString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["prompt:default:"]
}, function ($methodClass){ return function (aString,defaultString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(window)._prompt_default_(aString,defaultString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:default:",{aString:aString,defaultString:defaultString})});
//>>excludeEnd("ctx");
}; }),
$globals.BrowserTerminal);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self isFeasible ifTrue: [ Terminal registerIfNone: self new ]",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isFeasible", "registerIfNone:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._isFeasible())){
$recv($globals.Terminal)._registerIfNone_($self._new());
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BrowserTerminal.a$cls);

$core.addMethod(
$core.method({
selector: "isFeasible",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFeasible\x0a<inlineJS: 'return typeof window !== \x22undefined\x22'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof window !== \x22undefined\x22"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof window !== "undefined";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFeasible",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BrowserTerminal.a$cls);

$core.addMethod(
$core.method({
selector: "postMessageTo:",
protocol: "*Platform-Browser",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFrame"],
source: "postMessageTo: aFrame\x0a^ self postMessageTo: aFrame origin: '*'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["postMessageTo:origin:"]
}, function ($methodClass){ return function (aFrame){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._postMessageTo_origin_(aFrame,"*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"postMessageTo:",{aFrame:aFrame})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "postMessageTo:origin:",
protocol: "*Platform-Browser",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFrame", "aString"],
source: "postMessageTo: aFrame origin: aString\x0a<inlineJS: 'return aFrame.postMessage(self, aString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aFrame.postMessage(self, aString)"]]],
messageSends: []
}, function ($methodClass){ return function (aFrame,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aFrame.postMessage(self, aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"postMessageTo:origin:",{aFrame:aFrame,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

});
