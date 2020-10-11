define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Kernel-Exceptions");
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("Error", $globals.Object, "Kernel-Exceptions");
$core.setSlots($globals.Error, ["message", "stack", "amberHandled", "context", "smalltalkError"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Error.comment="From the ANSI standard:\x0a\x0aThis protocol describes the behavior of instances of class `Error`.\x0aThese are used to represent error conditions that prevent the normal continuation of processing.\x0aActual error exceptions used by an application may be subclasses of this class.\x0aAs `Error` is explicitly specified to be subclassable, conforming implementations must implement its behavior in a non-fragile manner.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "basicSignal",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicSignal\x0a\x09<inlineJS: 'throw self;'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["throw self;"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
throw self;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicSignal",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "beHandled",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beHandled\x0a\x09amberHandled := true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
$self.amberHandled=true;
return self;

}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "beUnhandled",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beUnhandled\x0a\x09amberHandled := false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
$self.amberHandled=false;
return self;

}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "context",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.context;

}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "context:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethodContext"],
source: "context: aMethodContext\x0a\x09context := aMethodContext",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aMethodContext){
var self=this,$self=this;
$self.context=aMethodContext;
return self;

}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self messageText: 'Errorclass: ', self class name.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["messageText:", ",", "name", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._messageText_("Errorclass: ".__comma($recv($self._class())._name()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "isError",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isError\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "jsStack",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsStack\x0a\x09^ stack",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.stack;

}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "messageText",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ message",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.message;

}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "messageText:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "messageText: aString\x0a\x09message := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.message=aString;
return self;

}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "outer",
protocol: "signaling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "outer\x0a\x09\x22Pharo compatibility. Just sends #pass.\x22\x0a\x09\x0a\x09^ self pass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["pass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._pass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"outer",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "pass",
protocol: "signaling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pass\x0a\x09\x22Let outer handler take care of this.\x22\x0a\x0a\x09self beUnhandled; basicSignal",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["beUnhandled", "basicSignal"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._beUnhandled();
$self._basicSignal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "resignal",
protocol: "signaling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resignal\x0a\x09self deprecatedAPI: 'Use #pass.'.\x0a\x09^ self pass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deprecatedAPI:", "pass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._deprecatedAPI_("Use #pass.");
return $self._pass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resignal",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "signal",
protocol: "signaling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "signal\x0a\x09self beUnhandled; context: thisContext; basicSignal",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["beUnhandled", "context:", "basicSignal"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._beUnhandled();
$self._context_($core.getThisContext());
$self._basicSignal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signal",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "signal:",
protocol: "signaling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "signal: aString\x0a\x09self messageText: aString; signal",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["messageText:", "signal"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._messageText_(aString);
$self._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "signalerContext",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "signalerContext\x0a\x09^ self signalerContextFrom: self context",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["signalerContextFrom:", "context"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._signalerContextFrom_($self._context());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signalerContext",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "signalerContextFrom:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "signalerContextFrom: aContext\x0a\x09\x22Find the first sender of signal(:), the first context which is neither \x0a\x09for an instance method nor for a class side method of Exception (or subclass).\x0a\x09This will make sure that the same context is found for both, `Error signal` \x0a\x09and `Error new signal`\x22\x0a\x0a\x09^ aContext findContextSuchThat: [ :one |\x0a\x09\x09(one receiver == self \x0a\x09\x09or: [ one receiver == self class ]) not ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["findContextSuchThat:", "not", "or:", "==", "receiver", "class"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv(aContext)._findContextSuchThat_((function(one){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv([$recv(one)._receiver()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["receiver"]=1
//>>excludeEnd("ctx");
][0]).__eq_eq(self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["=="]=1
//>>excludeEnd("ctx");
][0])){
$1=true;
} else {
$1=$recv($recv(one)._receiver()).__eq_eq($self._class());
}
return $recv($1)._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({one:one},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signalerContextFrom:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.Error);

$core.addMethod(
$core.method({
selector: "wasHandled",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wasHandled\x0a\x09^ amberHandled == true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.amberHandled).__eq_eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wasHandled",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Error);


$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Returns a tag or general category for this class.\x0a\x09Typically used to help tools do some reflection.\x0a\x09Helios, for example, uses this to decide what icon the class should display.\x22\x0a\x09\x0a\x09^ 'exception'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "exception";

}; }),
$globals.Error.a$cls);

$core.addMethod(
$core.method({
selector: "messageText:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "messageText: aString\x0a\x09^ self new\x0a\x09\x09messageText: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["messageText:", "new", "yourself"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._messageText_(aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Error.a$cls);

$core.addMethod(
$core.method({
selector: "signal",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "signal\x0a\x09^ self new signal",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["signal", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signal",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Error.a$cls);

$core.addMethod(
$core.method({
selector: "signal:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "signal: aString\x0a\x09^ self new\x0a\x09\x09signal: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["signal:", "new"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._signal_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Error.a$cls);


$core.addClass("Halt", $globals.Error, "Kernel-Exceptions");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Halt.comment="I am provided to support `Object>>#halt`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "messageText",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ 'Halt encountered'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "Halt encountered";

}; }),
$globals.Halt);

$core.addMethod(
$core.method({
selector: "signalerContextFrom:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "signalerContextFrom: aContext\x0a\x09\x22specialized version to find the proper context to open the debugger on.\x0a\x09This will find the first context whose method is no longer on `Halt` or \x0a\x09`Halt class` nor is `#halt` method itself.\x22\x0a\x09\x0a\x09^ aContext findContextSuchThat: [ :one |\x0a\x09\x09(one receiver == self \x0a\x09\x09or: [ (one receiver == self class) \x0a\x09\x09or: [ one method selector = #halt ]]) not ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["findContextSuchThat:", "not", "or:", "==", "receiver", "class", "=", "selector", "method"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv(aContext)._findContextSuchThat_((function(one){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv([$recv(one)._receiver()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["receiver"]=1
//>>excludeEnd("ctx");
][0]).__eq_eq(self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["=="]=1
//>>excludeEnd("ctx");
][0])){
$1=true;
} else {
if($core.assert($recv($recv(one)._receiver()).__eq_eq($self._class()))){
$1=true;
} else {
$1=$recv($recv($recv(one)._method())._selector()).__eq("halt");
}
}
return $recv($1)._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({one:one},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signalerContextFrom:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.Halt);



$core.addClass("JavaScriptException", $globals.Error, "Kernel-Exceptions");
$core.setSlots($globals.JavaScriptException, ["exception"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.JavaScriptException.comment="A JavaScriptException is thrown when a non-Smalltalk exception occurs while in the Smalltalk stack.\x0aSee `boot.js` `inContext()` and `BlockClosure >> on:do:`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "exception",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exception\x0a\x09^ exception",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.exception;

}; }),
$globals.JavaScriptException);

$core.addMethod(
$core.method({
selector: "exception:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anException"],
source: "exception: anException\x0a\x09exception := anException",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anException){
var self=this,$self=this;
$self.exception=anException;
return self;

}; }),
$globals.JavaScriptException);

$core.addMethod(
$core.method({
selector: "messageText",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09<inlineJS: 'return \x22JavaScript exception: \x22 + $self.exception.toString()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return \x22JavaScript exception: \x22 + $self.exception.toString()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return "JavaScript exception: " + $self.exception.toString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JavaScriptException);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anException"],
source: "on: anException\x0a\x09^ self new\x0a\x09\x09exception: anException;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["exception:", "new", "yourself"]
}, function ($methodClass){ return function (anException){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._exception_(anException);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anException:anException})});
//>>excludeEnd("ctx");
}; }),
$globals.JavaScriptException.a$cls);

$core.addMethod(
$core.method({
selector: "on:context:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anException", "aMethodContext"],
source: "on: anException context: aMethodContext\x0a\x09^ self new\x0a\x09\x09exception: anException;\x0a\x09\x09context: aMethodContext;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["exception:", "new", "context:", "yourself"]
}, function ($methodClass){ return function (anException,aMethodContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._exception_(anException);
$recv($1)._context_(aMethodContext);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:context:",{anException:anException,aMethodContext:aMethodContext})});
//>>excludeEnd("ctx");
}; }),
$globals.JavaScriptException.a$cls);


$core.addClass("MessageNotUnderstood", $globals.Error, "Kernel-Exceptions");
$core.setSlots($globals.MessageNotUnderstood, ["smalltalkMessage", "receiver"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MessageNotUnderstood.comment="This exception is provided to support `Object>>doesNotUnderstand:`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "message",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "message\x0a\x09^ smalltalkMessage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.smalltalkMessage;

}; }),
$globals.MessageNotUnderstood);

$core.addMethod(
$core.method({
selector: "message:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "message: aMessage\x0a\x09smalltalkMessage := aMessage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aMessage){
var self=this,$self=this;
$self.smalltalkMessage=aMessage;
return self;

}; }),
$globals.MessageNotUnderstood);

$core.addMethod(
$core.method({
selector: "messageText",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ self receiver asString, ' does not understand #', self message selector",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "asString", "receiver", "selector", "message"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($recv($recv($self._receiver())._asString()).__comma(" does not understand #")).__comma($recv($self._message())._selector())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageNotUnderstood);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ receiver",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.receiver;

}; }),
$globals.MessageNotUnderstood);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.receiver=anObject;
return self;

}; }),
$globals.MessageNotUnderstood);



$core.addClass("NonBooleanReceiver", $globals.Error, "Kernel-Exceptions");
$core.setSlots($globals.NonBooleanReceiver, ["object"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.NonBooleanReceiver.comment="NonBooleanReceiver exceptions may be thrown when executing inlined methods such as `#ifTrue:` with a non boolean receiver.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "object",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "object\x0a\x09^ object",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.object;

}; }),
$globals.NonBooleanReceiver);

$core.addMethod(
$core.method({
selector: "object:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "object: anObject\x0a\x09object := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.object=anObject;
return self;

}; }),
$globals.NonBooleanReceiver);


$core.addMethod(
$core.method({
selector: "signalOn:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "signalOn: anObject\x0a\x09^ self new\x0a\x09\x09object: anObject;\x0a\x09\x09signal",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["object:", "new", "signal"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._object_(anObject);
return $recv($1)._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signalOn:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.NonBooleanReceiver.a$cls);

});
