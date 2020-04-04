define(["amber/boot", "require", "amber/core/Kernel-Collections", "amber/core/Kernel-Helpers", "amber/core/Kernel-Objects", "amber/core/Kernel-Promises"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Kernel-Infrastructure");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("AmberBootstrapInitialization", $globals.Object, [], "Kernel-Infrastructure");

$core.addMethod(
$core.method({
selector: "organizeClasses",
protocol: "organization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "organizeClasses\x0a\x09Smalltalk classes do: [ :each | each enterOrganization ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "classes", "enterOrganization"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Smalltalk)._classes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._enterOrganization();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"organizeClasses",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AmberBootstrapInitialization.a$cls);

$core.addMethod(
$core.method({
selector: "organizeMethods",
protocol: "organization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "organizeMethods\x0a\x09Smalltalk classes do: [ :eachClass |\x0a\x09\x09eachClass definedMethods do: [ :eachMethod |\x0a\x09\x09\x09eachMethod methodClass methodOrganizationEnter: eachMethod andLeave: nil ] ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "classes", "definedMethods", "methodOrganizationEnter:andLeave:", "methodClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($recv($globals.Smalltalk)._classes())._do_((function(eachClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(eachClass)._definedMethods())._do_((function(eachMethod){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(eachMethod)._methodClass())._methodOrganizationEnter_andLeave_(eachMethod,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({eachMethod:eachMethod},$ctx2,2)});
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
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"organizeMethods",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AmberBootstrapInitialization.a$cls);

$core.addMethod(
$core.method({
selector: "run",
protocol: "public api",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "run\x0a\x09SmalltalkImage initialize.\x0a\x09self\x0a\x09\x09organizeClasses;\x0a\x09\x09organizeMethods.\x0a\x09^ Smalltalk postLoad",
referencedClasses: ["SmalltalkImage", "Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "organizeClasses", "organizeMethods", "postLoad"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.SmalltalkImage)._initialize();
$self._organizeClasses();
$self._organizeMethods();
return $recv($globals.Smalltalk)._postLoad();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"run",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AmberBootstrapInitialization.a$cls);


$core.addClass("JSObjectProxy", $globals.ProtoObject, ["jsObject"], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.JSObjectProxy.comment="I handle sending messages to JavaScript objects, making  JavaScript object accessing from Amber fully transparent.\x0aMy instances make intensive use of `#doesNotUnderstand:`.\x0a\x0aMy instances are automatically created by Amber whenever a message is sent to a JavaScript object.\x0a\x0a## Usage examples\x0a\x0aJSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.\x0a\x0a\x09window alert: 'hello world'.\x0a\x09window inspect.\x0a\x09(window jQuery: 'body') append: 'hello world'\x0a\x0aAmber messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown.\x0a\x0a## Message conversion rules\x0a\x0a- `someUser name` becomes `someUser.name`\x0a- `someUser name: 'John'` becomes `someUser name = \x22John\x22`\x0a- `console log: 'hello world'` becomes `console.log('hello world')`\x0a- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`\x0a\x0a__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "= anObject\x0a\x09anObject class == self class ifFalse: [ ^ false ].\x0a\x09^ JSObjectProxy compareJSObjectOfProxy: self withProxy: anObject",
referencedClasses: ["JSObjectProxy"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "==", "class", "compareJSObjectOfProxy:withProxy:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv([$recv(anObject)._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0]).__eq_eq($self._class());
if(!$core.assert($1)){
return false;
}
return $recv($globals.JSObjectProxy)._compareJSObjectOfProxy_withProxy_(self,anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09\x22Answers the receiver in a stringify-friendly fashion\x22\x0a\x0a\x09^ jsObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.jsObject;

}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "at: aString\x0a\x09<inlineJS: 'return $self.jsObject[aString]'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $self.jsObject[aString]"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.jsObject[aString];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "at: aString ifAbsent: aBlock\x0a\x09\x22return the aString property or evaluate aBlock if the property is not defined on the object\x22\x0a\x09<inlineJS: '\x0a\x09\x09var obj = $self.jsObject;\x0a\x09\x09return aString in obj ? obj[aString] : aBlock._value();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var obj = $self.jsObject;\x0a\x09\x09return aString in obj ? obj[aString] : aBlock._value();\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var obj = $self.jsObject;
		return aString in obj ? obj[aString] : aBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:ifPresent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "at: aString ifPresent: aBlock\x0a\x09\x22return the evaluation of aBlock with the value if the property is defined or return nil\x22\x0a\x09<inlineJS: '\x0a\x09\x09var obj = $self.jsObject;\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : nil;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var obj = $self.jsObject;\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : nil;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var obj = $self.jsObject;
		return aString in obj ? aBlock._value_(obj[aString]) : nil;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{aString:aString,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock", "anotherBlock"],
source: "at: aString ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22return the evaluation of aBlock with the value if the property is defined\x0a\x09or return value of anotherBlock\x22\x0a\x09<inlineJS: '\x0a\x09\x09var obj = $self.jsObject;\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var obj = $self.jsObject;\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var obj = $self.jsObject;
		return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "at: aString put: anObject\x0a\x09<inlineJS: 'return $self.jsObject[aString] = anObject'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $self.jsObject[aString] = anObject"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.jsObject[aString] = anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "catch:",
protocol: "promises",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "catch: aBlock\x0a(NativeFunction isNativeFunction: (self at: #then))\x0a\x09ifTrue: [ ^ (TThenable >> #catch:) sendTo: jsObject arguments: {aBlock} ]\x0a\x09ifFalse: [ ^ super catch: aBlock ]",
referencedClasses: ["NativeFunction", "TThenable"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isNativeFunction:", "at:", "sendTo:arguments:", ">>", "catch:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.NativeFunction)._isNativeFunction_($self._at_("then"));
if($core.assert($1)){
return $recv($recv($globals.TThenable).__gt_gt("catch:"))._sendTo_arguments_($self.jsObject,[aBlock]);
} else {
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._catch_.call($self,aBlock))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"catch:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: "proxy",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ (JSObjectProxy lookupProperty: aMessage selector asJavaScriptPropertyName ofProxy: self)\x0a\x09\x09ifNil: [ super doesNotUnderstand: aMessage ]\x0a\x09\x09ifNotNil: [ :jsSelector | \x0a\x09\x09\x09JSObjectProxy \x0a\x09\x09\x09\x09forwardMessage: jsSelector \x0a\x09\x09\x09\x09withArguments: aMessage arguments\x0a\x09\x09\x09\x09ofProxy: self ]",
referencedClasses: ["JSObjectProxy"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "lookupProperty:ofProxy:", "asJavaScriptPropertyName", "selector", "doesNotUnderstand:", "forwardMessage:withArguments:ofProxy:", "arguments"]
}, function ($methodClass){ return function (aMessage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.JSObjectProxy)._lookupProperty_ofProxy_($recv($recv(aMessage)._selector())._asJavaScriptPropertyName(),self);
if($1 == null || $1.a$nil){
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._doesNotUnderstand_.call($self,aMessage))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
} else {
var jsSelector;
jsSelector=$1;
return $recv($globals.JSObjectProxy)._forwardMessage_withArguments_ofProxy_(jsSelector,$recv(aMessage)._arguments(),self);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "in:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValuable"],
source: "in: aValuable\x0a\x09^ aValuable value: jsObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:"]
}, function ($methodClass){ return function (aValuable){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aValuable)._value_($self.jsObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"in:",{aValuable:aValuable})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "jsObject",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsObject\x0a\x09^ jsObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.jsObject;

}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "keysAndValuesDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09var o = $self.jsObject;\x0a\x09\x09for(var i in o) {\x0a\x09\x09\x09aBlock._value_value_(i, o[i]);\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var o = $self.jsObject;\x0a\x09\x09for(var i in o) {\x0a\x09\x09\x09aBlock._value_value_(i, o[i]);\x0a\x09\x09}\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var o = $self.jsObject;
		for(var i in o) {
			aBlock._value_value_(i, o[i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "on:do:",
protocol: "promises",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a(NativeFunction isNativeFunction: (self at: #then))\x0a\x09ifTrue: [ ^ (TThenable >> #on:do:) sendTo: jsObject arguments: {aClass. aBlock} ]\x0a\x09ifFalse: [ ^ super on: aClass do: aBlock ]",
referencedClasses: ["NativeFunction", "TThenable"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isNativeFunction:", "at:", "sendTo:arguments:", ">>", "on:do:"]
}, function ($methodClass){ return function (aClass,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.NativeFunction)._isNativeFunction_($self._at_("then"));
if($core.assert($1)){
return $recv($recv($globals.TThenable).__gt_gt("on:do:"))._sendTo_arguments_($self.jsObject,[aClass,aBlock]);
} else {
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._on_do_.call($self,aClass,aBlock))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:",{aClass:aClass,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self printString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "printString"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($self._printString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "printString",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printString\x0a\x09<inlineJS: '\x0a\x09\x09var js = $self.jsObject;\x0a\x09\x09return !js ? \x22<<malformed JS object proxy>>\x22 : js.toString\x0a\x09\x09\x09? js.toString()\x0a\x09\x09\x09: Object.prototype.toString.call(js)\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var js = $self.jsObject;\x0a\x09\x09return !js ? \x22<<malformed JS object proxy>>\x22 : js.toString\x0a\x09\x09\x09? js.toString()\x0a\x09\x09\x09: Object.prototype.toString.call(js)\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var js = $self.jsObject;
		return !js ? "<<malformed JS object proxy>>" : js.toString
			? js.toString()
			: Object.prototype.toString.call(js)
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "putOn:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPutJSObject: jsObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutJSObject:"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutJSObject_($self.jsObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "removeKey:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "removeKey: aString\x0a\x09<inlineJS: 'delete $self.jsObject[aString]; return aString'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["delete $self.jsObject[aString]; return aString"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
delete $self.jsObject[aString]; return aString;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeKey:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "then:",
protocol: "promises",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray"],
source: "then: aBlockOrArray\x0a(NativeFunction isNativeFunction: (self at: #then))\x0a\x09ifTrue: [ ^ (TThenable >> #then:) sendTo: jsObject arguments: {aBlockOrArray} ]\x0a\x09ifFalse: [ ^ super then: aBlockOrArray ]",
referencedClasses: ["NativeFunction", "TThenable"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isNativeFunction:", "at:", "sendTo:arguments:", ">>", "then:"]
}, function ($methodClass){ return function (aBlockOrArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.NativeFunction)._isNativeFunction_($self._at_("then"));
if($core.assert($1)){
return $recv($recv($globals.TThenable).__gt_gt("then:"))._sendTo_arguments_($self.jsObject,[aBlockOrArray]);
} else {
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._then_.call($self,aBlockOrArray))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:",{aBlockOrArray:aBlockOrArray})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);


$core.addMethod(
$core.method({
selector: "addObjectVariablesTo:ofProxy:",
protocol: "proxy",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary", "aProxy"],
source: "addObjectVariablesTo: aDictionary ofProxy: aProxy\x0a\x09<inlineJS: '\x0a\x09\x09var jsObject = aProxy.jsObject;\x0a\x09\x09for(var i in jsObject) {\x0a\x09\x09\x09aDictionary._at_put_(i, jsObject[i]);\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var jsObject = aProxy.jsObject;\x0a\x09\x09for(var i in jsObject) {\x0a\x09\x09\x09aDictionary._at_put_(i, jsObject[i]);\x0a\x09\x09}\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aDictionary,aProxy){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var jsObject = aProxy.jsObject;
		for(var i in jsObject) {
			aDictionary._at_put_(i, jsObject[i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addObjectVariablesTo:ofProxy:",{aDictionary:aDictionary,aProxy:aProxy})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "compareJSObjectOfProxy:withProxy:",
protocol: "proxy",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProxy", "anotherProxy"],
source: "compareJSObjectOfProxy: aProxy withProxy: anotherProxy\x0a<inlineJS: '\x0a\x09var anotherJSObject = anotherProxy.a$cls ? anotherProxy.jsObject : anotherProxy;\x0a\x09return aProxy.jsObject === anotherJSObject\x0a'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09var anotherJSObject = anotherProxy.a$cls ? anotherProxy.jsObject : anotherProxy;\x0a\x09return aProxy.jsObject === anotherJSObject"]]],
messageSends: []
}, function ($methodClass){ return function (aProxy,anotherProxy){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	var anotherJSObject = anotherProxy.a$cls ? anotherProxy.jsObject : anotherProxy;
	return aProxy.jsObject === anotherJSObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compareJSObjectOfProxy:withProxy:",{aProxy:aProxy,anotherProxy:anotherProxy})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "forwardMessage:withArguments:ofProxy:",
protocol: "proxy",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anArray", "aProxy"],
source: "forwardMessage: aString withArguments: anArray ofProxy: aProxy\x0a\x09<inlineJS: '\x0a\x09\x09return $core.accessJavaScript(aProxy._jsObject(), aString, anArray);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return $core.accessJavaScript(aProxy._jsObject(), aString, anArray);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anArray,aProxy){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return $core.accessJavaScript(aProxy._jsObject(), aString, anArray);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forwardMessage:withArguments:ofProxy:",{aString:aString,anArray:anArray,aProxy:aProxy})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "jsObject:ofProxy:",
protocol: "proxy",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject", "aProxy"],
source: "jsObject: aJSObject ofProxy: aProxy\x0a\x09<inlineJS: 'aProxy.jsObject = aJSObject'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["aProxy.jsObject = aJSObject"]]],
messageSends: []
}, function ($methodClass){ return function (aJSObject,aProxy){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
aProxy.jsObject = aJSObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsObject:ofProxy:",{aJSObject:aJSObject,aProxy:aProxy})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "lookupProperty:ofProxy:",
protocol: "proxy",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aProxy"],
source: "lookupProperty: aString ofProxy: aProxy\x0a\x09\x22Looks up a property in JS object.\x0a\x09Answer the property if it is present, or nil if it is not present.\x22\x0a\x09\x0a\x09<inlineJS: 'return aString in aProxy._jsObject() ? aString : nil'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aString in aProxy._jsObject() ? aString : nil"]]],
messageSends: []
}, function ($methodClass){ return function (aString,aProxy){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aString in aProxy._jsObject() ? aString : nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupProperty:ofProxy:",{aString:aString,aProxy:aProxy})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "null",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "null\x0a\x09<inlineJS: 'return null'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return null"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return null;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"null",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "on: aJSObject\x0a\x09| instance |\x0a\x09instance := self new.\x0a\x09self jsObject: aJSObject ofProxy: instance.\x0a\x09^ instance",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "jsObject:ofProxy:"]
}, function ($methodClass){ return function (aJSObject){
var self=this,$self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
instance=$self._new();
$self._jsObject_ofProxy_(aJSObject,instance);
return instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aJSObject:aJSObject,instance:instance})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "undefined",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "undefined\x0a\x09<inlineJS: 'return undefined'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return undefined"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return undefined;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"undefined",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy.a$cls);


$core.addClass("Organizer", $globals.Object, ["elements"], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Organizer.comment="I represent categorization information. \x0a\x0a## API\x0a\x0aUse `#addElement:` and `#removeElement:` to manipulate instances.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addElement:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "addElement: anObject\x0a\x09self elements add: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "elements"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._elements())._add_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addElement:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Organizer);

$core.addMethod(
$core.method({
selector: "elements",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "elements\x0a\x09^ elements",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.elements;

}; }),
$globals.Organizer);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := Set new",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "new"]
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
$self.elements=$recv($globals.Set)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Organizer);

$core.addMethod(
$core.method({
selector: "removeElement:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "removeElement: anObject\x0a\x09self elements remove: anObject ifAbsent: []",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["remove:ifAbsent:", "elements"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._elements())._remove_ifAbsent_(anObject,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeElement:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Organizer);



$core.addClass("ClassOrganizer", $globals.Organizer, ["traitOrBehavior"], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassOrganizer.comment="I am an organizer specific to classes. I hold method categorization information for classes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addElement:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addElement: aString\x0a\x09super addElement: aString.\x0a\x0a\x09SystemAnnouncer current announce: (ProtocolAdded new\x0a\x09\x09protocol: aString;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ProtocolAdded"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addElement:", "announce:", "current", "protocol:", "new", "theClass:", "theClass", "yourself"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._addElement_.call($self,aString))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$1=$recv($globals.SystemAnnouncer)._current();
$2=$recv($globals.ProtocolAdded)._new();
$recv($2)._protocol_(aString);
$recv($2)._theClass_($self._theClass());
$3=$recv($2)._yourself();
$recv($1)._announce_($3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addElement:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassOrganizer);

$core.addMethod(
$core.method({
selector: "removeElement:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "removeElement: aString\x0a\x09super removeElement: aString.\x0a\x0a\x09SystemAnnouncer current announce: (ProtocolRemoved new\x0a\x09\x09protocol: aString;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ProtocolRemoved"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["removeElement:", "announce:", "current", "protocol:", "new", "theClass:", "theClass", "yourself"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._removeElement_.call($self,aString))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$1=$recv($globals.SystemAnnouncer)._current();
$2=$recv($globals.ProtocolRemoved)._new();
$recv($2)._protocol_(aString);
$recv($2)._theClass_($self._theClass());
$3=$recv($2)._yourself();
$recv($1)._announce_($3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeElement:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassOrganizer);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ traitOrBehavior",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.traitOrBehavior;

}; }),
$globals.ClassOrganizer);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09traitOrBehavior := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
$self.traitOrBehavior=aClass;
return self;

}; }),
$globals.ClassOrganizer);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "on: aClass\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["theClass:", "new", "yourself"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._theClass_(aClass);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassOrganizer.a$cls);


$core.addClass("PackageOrganizer", $globals.Organizer, [], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageOrganizer.comment="I am an organizer specific to packages. I hold classes categorization information.";
//>>excludeEnd("ide");


$core.addClass("Package", $globals.Object, ["evalBlock", "basicTransport", "name", "transport", "imports", "dirty", "organization", "isReady"], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Package.comment="I am similar to a \x22class category\x22 typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.\x0a\x0aEach package has a name and can be queried for its classes, but it will then resort to a reverse scan of all classes to find them.\x0a\x0a## API\x0a\x0aPackages are manipulated through \x22Smalltalk current\x22, like for example finding one based on a name or with `Package class >> #name` directly:\x0a\x0a    Smalltalk current packageAt: 'Kernel'\x0a    Package named: 'Kernel'\x0a\x0aA package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a package supports \x22class extensions\x22 so a package can define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows.\x0a\x0aYou can fetch a package from the server:\x0a\x0a\x09Package load: 'Additional-Examples'";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "basicTransport",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicTransport\x0a\x09\x22Answer the transport literal JavaScript object as setup in the JavaScript file, if any\x22\x0a\x09\x0a\x09^ basicTransport",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.basicTransport;

}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "beClean",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beClean\x0a\x09dirty := false.\x0a\x09\x0a\x09SystemAnnouncer current announce: (PackageClean new\x0a\x09\x09package: self;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "PackageClean"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["announce:", "current", "package:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$self.dirty=false;
$1=$recv($globals.SystemAnnouncer)._current();
$2=$recv($globals.PackageClean)._new();
$recv($2)._package_(self);
$3=$recv($2)._yourself();
$recv($1)._announce_($3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beClean",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "beDirty",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beDirty\x0a\x09dirty := true.\x0a\x09\x0a\x09SystemAnnouncer current announce: (PackageDirty new\x0a\x09\x09package: self;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "PackageDirty"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["announce:", "current", "package:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$self.dirty=true;
$1=$recv($globals.SystemAnnouncer)._current();
$2=$recv($globals.PackageDirty)._new();
$recv($2)._package_(self);
$3=$recv($2)._yourself();
$recv($1)._announce_($3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beDirty",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "classTemplate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTemplate\x0a\x09^ String streamContents: [ :stream | stream\x0a\x09\x09write: 'Object subclass: #NameOfSubclass'; lf;\x0a\x09\x09tab; write: 'instanceVariableNames: '''''; lf;\x0a\x09\x09tab; write: 'package: '; print: self name ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "write:", "lf", "tab", "print:", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(stream)._write_("Object subclass: #NameOfSubclass")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(stream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
[$recv(stream)._tab()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["tab"]=1
//>>excludeEnd("ctx");
][0];
[$recv(stream)._write_("instanceVariableNames: ''")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
$recv(stream)._lf();
$recv(stream)._tab();
$recv(stream)._write_("package: ");
return $recv(stream)._print_($self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classTemplate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "classes",
protocol: "classes",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09^ self organization elements copy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copy", "elements", "organization"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._organization())._elements())._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream | stream\x0a\x09\x09write: self class name; lf;\x0a\x09\x09tab; write: 'named: '; print: self name; lf;\x0a\x09\x09tab; write: { 'imports: '. self importsDefinition }; lf;\x0a\x09\x09tab; write: { 'transport: ('. self transport definition. ')' } ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "write:", "name", "class", "lf", "tab", "print:", "importsDefinition", "definition", "transport"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(stream)._write_([$recv($self._class())._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(stream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
[$recv(stream)._tab()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["tab"]=1
//>>excludeEnd("ctx");
][0];
[$recv(stream)._write_("named: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
$recv(stream)._print_($self._name());
[$recv(stream)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
[$recv(stream)._tab()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["tab"]=2
//>>excludeEnd("ctx");
][0];
[$recv(stream)._write_(["imports: ",$self._importsDefinition()])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=3
//>>excludeEnd("ctx");
][0];
$recv(stream)._lf();
$recv(stream)._tab();
return $recv(stream)._write_(["transport: (",$recv($self._transport())._definition(),")"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "eval:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09^ evalBlock\x0a\x09\x09ifNotNil: [ evalBlock value: aString ]\x0a\x09\x09ifNil: [ Compiler eval: aString ]",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:ifNil:", "value:", "eval:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.evalBlock;
if($1 == null || $1.a$nil){
return $recv($globals.Compiler)._eval_(aString);
} else {
return $recv($self.evalBlock)._value_(aString);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "evalBlock",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "evalBlock\x0a\x09^ evalBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.evalBlock;

}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "evalBlock:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "evalBlock: aBlock\x0a\x09evalBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
$self.evalBlock=aBlock;
return self;

}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "imports",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "imports\x0a\x09^ imports ifNil: [\x0a\x09\x09self imports: #().\x0a\x09\x09imports ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "imports:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.imports;
if($1 == null || $1.a$nil){
$self._imports_([]);
return $self.imports;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imports",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "imports:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "imports: anArray\x0a\x09self validateImports: anArray.\x0a\x09imports := anArray asSet",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["validateImports:", "asSet"]
}, function ($methodClass){ return function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._validateImports_(anArray);
$self.imports=$recv(anArray)._asSet();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imports:",{anArray:anArray})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "importsAsJson",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "importsAsJson\x0a\x0a\x09^ self sortedImportsAsArray collect: [ :each |\x0a\x09\x09each isString\x0a\x09\x09\x09ifTrue: [ each ]\x0a\x09\x09\x09ifFalse: [ each key, '=', each value ]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "sortedImportsAsArray", "ifTrue:ifFalse:", "isString", ",", "key", "value"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv($self._sortedImportsAsArray())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._isString();
if($core.assert($1)){
return each;
} else {
return [$recv($recv($recv(each)._key()).__comma("=")).__comma($recv(each)._value())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsAsJson",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "importsDefinition",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "importsDefinition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream write: '{'.\x0a\x09\x09self sortedImportsAsArray\x0a\x09\x09\x09do: [ :each | stream print: each ]\x0a\x09\x09\x09separatedBy: [ stream write: '. ' ].\x0a\x09\x09stream write: '}' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "write:", "do:separatedBy:", "sortedImportsAsArray", "print:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(stream)._write_("{")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["write:"]=1
//>>excludeEnd("ctx");
][0];
$recv($self._sortedImportsAsArray())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._print_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(stream)._write_(". ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["write:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $recv(stream)._write_("}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsDefinition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "importsFromJson:",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "importsFromJson: anArray\x0a\x09\x22Parses array of string, eg. #('asdf' 'qwer=tyuo')\x0a\x09into array of Strings and Associations,\x0a\x09eg. {'asdf'. 'qwer'->'tyuo'}\x22\x0a\x0a\x09^ anArray collect: [ :each |\x0a\x09\x09| split |\x0a\x09\x09split := each tokenize: '='.\x0a\x09\x09split size = 1\x0a\x09\x09\x09ifTrue: [ split first ]\x0a\x09\x09\x09ifFalse: [ split first -> split second ]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "tokenize:", "ifTrue:ifFalse:", "=", "size", "first", "->", "second"]
}, function ($methodClass){ return function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv(anArray)._collect_((function(each){
var split;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
split=$recv(each)._tokenize_("=");
$1=$recv($recv(split)._size()).__eq((1));
if($core.assert($1)){
return [$recv(split)._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["first"]=1
//>>excludeEnd("ctx");
][0];
} else {
return $recv($recv(split)._first()).__minus_gt($recv(split)._second());
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,split:split},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsFromJson:",{anArray:anArray})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09organization := PackageOrganizer new.\x0a\x09evalBlock := nil.\x0a\x09dirty := nil.\x0a\x09imports := nil.\x0a\x09isReady := Promise new.\x0a\x09transport := nil",
referencedClasses: ["PackageOrganizer", "Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "new"]
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
$self.organization=[$recv($globals.PackageOrganizer)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$self.evalBlock=nil;
$self.dirty=nil;
$self.imports=nil;
$self.isReady=$recv($globals.Promise)._new();
$self.transport=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "isDirty",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDirty\x0a\x09^ dirty ifNil: [ false ]",
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
$1=$self.dirty;
if($1 == null || $1.a$nil){
return false;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDirty",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "isPackage",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPackage\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "isReady",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isReady\x0a\x09^ isReady",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.isReady;

}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "isReady:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPromise"],
source: "isReady: aPromise\x0a\x09isReady := aPromise",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aPromise){
var self=this,$self=this;
$self.isReady=aPromise;
return self;

}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "javaScriptDescriptor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "javaScriptDescriptor: anObject\x0a\x09| basicEval basicImports |\x0a\x0a\x09basicEval := anObject at: 'innerEval' ifAbsent: [ nil asJavaScriptObject ].\x0a\x09basicImports := anObject at: 'imports' ifAbsent: [ #() ].\x0a\x09basicTransport := anObject at: 'transport' ifAbsent: [].\x0a\x09anObject at: 'isReady' ifPresent: [ :aPromise | self isReady: aPromise ].\x0a\x0a\x09self\x0a\x09\x09evalBlock: basicEval;\x0a\x09\x09imports: (self importsFromJson: basicImports)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "asJavaScriptObject", "at:ifPresent:", "isReady:", "evalBlock:", "imports:", "importsFromJson:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
var basicEval,basicImports;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
basicEval=[$recv(anObject)._at_ifAbsent_("innerEval",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $nil._asJavaScriptObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifAbsent:"]=1
//>>excludeEnd("ctx");
][0];
basicImports=[$recv(anObject)._at_ifAbsent_("imports",(function(){
return [];

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifAbsent:"]=2
//>>excludeEnd("ctx");
][0];
$self.basicTransport=$recv(anObject)._at_ifAbsent_("transport",(function(){

}));
$recv(anObject)._at_ifPresent_("isReady",(function(aPromise){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._isReady_(aPromise);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aPromise:aPromise},$ctx1,4)});
//>>excludeEnd("ctx");
}));
$self._evalBlock_(basicEval);
$self._imports_($self._importsFromJson_(basicImports));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"javaScriptDescriptor:",{anObject:anObject,basicEval:basicEval,basicImports:basicImports})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "loadDependencies",
protocol: "dependencies",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadDependencies\x0a\x09\x22Returns list of packages that need to be loaded\x0a\x09before loading this package.\x22\x0a\x09\x0a\x09| classes packages |\x0a\x09classes := self loadDependencyClasses.\x0a\x09^ (classes collect: [ :each | each package ]) asSet\x0a\x09\x09remove: self ifAbsent: [];\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["loadDependencyClasses", "remove:ifAbsent:", "asSet", "collect:", "package", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var classes,packages;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
classes=$self._loadDependencyClasses();
$1=$recv($recv(classes)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._asSet();
$recv($1)._remove_ifAbsent_(self,(function(){

}));
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadDependencies",{classes:classes,packages:packages})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "loadDependencyClasses",
protocol: "dependencies",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadDependencyClasses\x0a\x09\x22Returns classes needed at the time of loading a package.\x0a\x09These are all that are used to subclass\x0a\x09and to define an extension method\x0a\x09as well as all traits used\x22\x0a\x09\x0a\x09| starCategoryName |\x0a\x09starCategoryName := '*', self name.\x0a\x09^ (self classes collect: [ :each | each superclass ]) asSet\x0a\x09\x09addAll: (Smalltalk classes select: [ :each |\x0a\x09\x09\x09({each. each theMetaClass} copyWithout: nil) anySatisfy: [ :any |\x0a\x09\x09\x09\x09(any protocols includes: starCategoryName) and: [\x0a\x09\x09\x09\x09\x09(any ownMethodsInProtocol: starCategoryName) notEmpty ]]]);\x0a\x09\x09addAll: (Array streamContents: [ :as | self traitCompositions valuesDo: [ :each | as write: (each collect: [ :eachTT | eachTT trait ])]]);\x0a\x09\x09remove: nil ifAbsent: [];\x0a\x09\x09yourself",
referencedClasses: ["Smalltalk", "Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "name", "addAll:", "asSet", "collect:", "classes", "superclass", "select:", "anySatisfy:", "copyWithout:", "theMetaClass", "and:", "includes:", "protocols", "notEmpty", "ownMethodsInProtocol:", "streamContents:", "valuesDo:", "traitCompositions", "write:", "trait", "remove:ifAbsent:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var starCategoryName;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
starCategoryName="*".__comma($self._name());
$1=$recv([$recv([$self._classes()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["classes"]=1
//>>excludeEnd("ctx");
][0])._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["collect:"]=1
//>>excludeEnd("ctx");
][0])._asSet();
[$recv($1)._addAll_($recv($recv($globals.Smalltalk)._classes())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv([each,$recv(each)._theMetaClass()])._copyWithout_(nil))._anySatisfy_((function(any){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($recv(any)._protocols())._includes_(starCategoryName))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv(any)._ownMethodsInProtocol_(starCategoryName))._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({any:any},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
})))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["addAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._addAll_($recv($globals.Array)._streamContents_((function(as){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._traitCompositions())._valuesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(as)._write_($recv(each)._collect_((function(eachTT){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(eachTT)._trait();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({eachTT:eachTT},$ctx3,7)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({as:as},$ctx1,5)});
//>>excludeEnd("ctx");
})));
$recv($1)._remove_ifAbsent_(nil,(function(){

}));
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadDependencyClasses",{starCategoryName:starCategoryName})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

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
$globals.Package);

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
$globals.Package);

$core.addMethod(
$core.method({
selector: "organization",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "organization\x0a\x09^ organization",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.organization;

}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream \x0a\x09\x09nextPutAll: ' (';\x0a\x09\x09nextPutAll: self name;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:", "nextPutAll:", "name"]
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
[$recv(aStream)._nextPutAll_(" (")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_($self._name())
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
$globals.Package);

$core.addMethod(
$core.method({
selector: "setupClasses",
protocol: "classes",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupClasses\x0a\x09self classes do: [ :each | each initialize ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "classes", "initialize"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._classes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._initialize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupClasses",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "sortedClasses",
protocol: "classes",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sortedClasses\x0a\x09\x22Answer all classes in the receiver, sorted by superclass/subclasses and by class name for common subclasses (Issue #143).\x22\x0a\x0a\x09^ self class sortedClasses: self classes",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sortedClasses:", "class", "classes"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._sortedClasses_($self._classes());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortedClasses",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "sortedImportsAsArray",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sortedImportsAsArray\x0a\x09\x22Answer imports sorted first by type (associations first),\x0a\x09then by value\x22\x0a\x0a\x09^ self imports asArray\x0a\x09\x09sorted: [ :a :b |\x0a\x09\x09\x09a isString not & b isString or: [\x0a\x09\x09\x09\x09a isString = b isString and: [\x0a\x09\x09\x09\x09\x09a value <= b value ]]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sorted:", "asArray", "imports", "or:", "&", "not", "isString", "and:", "=", "<=", "value"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._imports())._asArray())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv([$recv(a)._isString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["isString"]=1
//>>excludeEnd("ctx");
][0])._not()).__and([$recv(b)._isString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["isString"]=2
//>>excludeEnd("ctx");
][0]))._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv([$recv(a)._isString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["isString"]=3
//>>excludeEnd("ctx");
][0]).__eq($recv(b)._isString()))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv([$recv(a)._value()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["value"]=1
//>>excludeEnd("ctx");
][0]).__lt_eq($recv(b)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortedImportsAsArray",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "traitCompositions",
protocol: "dependencies",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "traitCompositions\x0a\x09| traitCompositions |\x0a\x09traitCompositions := Dictionary new.\x0a\x09self classes do: [ :eachClass | eachClass includingPossibleMetaDo: [ :each |\x0a\x09\x09traitCompositions at: each put: each traitComposition ] ].\x0a\x09^ traitCompositions reject: [ :each | each isEmpty ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "classes", "includingPossibleMetaDo:", "at:put:", "traitComposition", "reject:", "isEmpty"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var traitCompositions;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
traitCompositions=$recv($globals.Dictionary)._new();
$recv($self._classes())._do_((function(eachClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(eachClass)._includingPossibleMetaDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(traitCompositions)._at_put_(each,$recv(each)._traitComposition());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachClass:eachClass},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(traitCompositions)._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"traitCompositions",{traitCompositions:traitCompositions})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "transport",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transport\x0a\x09^ transport ifNil: [ \x0a\x09\x09self transport: (PackageTransport fromJson: self basicTransport).\x0a\x09\x09transport ]",
referencedClasses: ["PackageTransport"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "transport:", "fromJson:", "basicTransport"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.transport;
if($1 == null || $1.a$nil){
$self._transport_($recv($globals.PackageTransport)._fromJson_($self._basicTransport()));
return $self.transport;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transport",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "transport:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageTransport"],
source: "transport: aPackageTransport\x0a\x09transport := aPackageTransport.\x0a\x09aPackageTransport package: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["package:"]
}, function ($methodClass){ return function (aPackageTransport){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.transport=aPackageTransport;
$recv(aPackageTransport)._package_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transport:",{aPackageTransport:aPackageTransport})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "validateImports:",
protocol: "validation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "validateImports: aCollection\x0a\x0a\x09aCollection do: [ :import |\x0a\x09\x09import isString ifFalse: [\x0a\x09\x09\x09(import respondsTo: #key) ifFalse: [\x0a\x09\x09\x09\x09self error: 'Imports must be Strings or Associations' ].\x0a\x09\x09\x09import key isString & import value isString ifFalse: [\x0a\x09\x09\x09\x09self error: 'Key and value must be Strings' ].\x0a\x09\x09\x09(import key match: '^[a-zA-Z][a-zA-Z0-9]*$') ifFalse: [\x0a\x09\x09\x09\x09self error: 'Keys must be identifiers' ]]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "ifFalse:", "isString", "respondsTo:", "error:", "&", "key", "value", "match:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$recv(aCollection)._do_((function(import_){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=[$recv(import_)._isString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["isString"]=1
//>>excludeEnd("ctx");
][0];
if(!$core.assert($1)){
$2=$recv(import_)._respondsTo_("key");
if(!$core.assert($2)){
[$self._error_("Imports must be Strings or Associations")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["error:"]=1
//>>excludeEnd("ctx");
][0];
}
$3=$recv([$recv([$recv(import_)._key()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["key"]=1
//>>excludeEnd("ctx");
][0])._isString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["isString"]=2
//>>excludeEnd("ctx");
][0]).__and($recv($recv(import_)._value())._isString());
if(!$core.assert($3)){
[$self._error_("Key and value must be Strings")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["error:"]=2
//>>excludeEnd("ctx");
][0];
}
$4=$recv($recv(import_)._key())._match_("^[a-zA-Z][a-zA-Z0-9]*$");
if(!$core.assert($4)){
return $self._error_("Keys must be identifiers");
}
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({import_:import_},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"validateImports:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);


$core.setSlots($globals.Package.a$cls, ["defaultCommitPathJs", "defaultCommitPathSt"]);
$core.addMethod(
$core.method({
selector: "named:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName"],
source: "named: aPackageName\x0a\x09^ Smalltalk \x0a\x09\x09packageAt: aPackageName\x0a\x09\x09ifAbsent: [ \x0a\x09\x09\x09Smalltalk createPackage: aPackageName ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["packageAt:ifAbsent:", "createPackage:"]
}, function ($methodClass){ return function (aPackageName){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._packageAt_ifAbsent_(aPackageName,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._createPackage_(aPackageName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:",{aPackageName:aPackageName})});
//>>excludeEnd("ctx");
}; }),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "named:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aBlock"],
source: "named: aPackageName ifAbsent: aBlock\x0a\x09^ Smalltalk packageAt: aPackageName ifAbsent: aBlock",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["packageAt:ifAbsent:"]
}, function ($methodClass){ return function (aPackageName,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._packageAt_ifAbsent_(aPackageName,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:ifAbsent:",{aPackageName:aPackageName,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "named:imports:transport:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "anArray", "aTransport"],
source: "named: aPackageName imports: anArray transport: aTransport\x0a\x09| pkg |\x0a\x09\x0a\x09pkg := self named: aPackageName.\x0a\x09pkg imports: anArray.\x0a\x09pkg transport: aTransport.\x0a\x09\x0a\x09^ pkg",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["named:", "imports:", "transport:"]
}, function ($methodClass){ return function (aPackageName,anArray,aTransport){
var self=this,$self=this;
var pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
pkg=$self._named_(aPackageName);
$recv(pkg)._imports_(anArray);
$recv(pkg)._transport_(aTransport);
return pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:imports:transport:",{aPackageName:aPackageName,anArray:anArray,aTransport:aTransport,pkg:pkg})});
//>>excludeEnd("ctx");
}; }),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "named:javaScriptDescriptor:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "named: aString javaScriptDescriptor: anObject\x0a\x09| pkg |\x0a\x09\x0a\x09pkg := Smalltalk createPackage: aString.\x0a\x09pkg javaScriptDescriptor: anObject.\x0a\x09^ pkg",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["createPackage:", "javaScriptDescriptor:"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
var pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
pkg=$recv($globals.Smalltalk)._createPackage_(aString);
$recv(pkg)._javaScriptDescriptor_(anObject);
return pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:javaScriptDescriptor:",{aString:aString,anObject:anObject,pkg:pkg})});
//>>excludeEnd("ctx");
}; }),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "named:transport:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aTransport"],
source: "named: aPackageName transport: aTransport\x0a\x09| pkg |\x0a\x09\x0a\x09pkg := self named: aPackageName.\x0a\x09pkg transport: aTransport.\x0a\x09\x0a\x09^ pkg",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["named:", "transport:"]
}, function ($methodClass){ return function (aPackageName,aTransport){
var self=this,$self=this;
var pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
pkg=$self._named_(aPackageName);
$recv(pkg)._transport_(aTransport);
return pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:transport:",{aPackageName:aPackageName,aTransport:aTransport,pkg:pkg})});
//>>excludeEnd("ctx");
}; }),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "new:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "new: aString\x0a\x09^ Package new\x0a\x09\x09name: aString;\x0a\x09\x09yourself",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name:", "new", "yourself"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Package)._new();
$recv($1)._name_(aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "sortedClasses:",
protocol: "sorting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["classes"],
source: "sortedClasses: classes\x0a\x09^ Array streamContents: [ :stream | stream << (ClassBuilder sortClasses: classes) ]",
referencedClasses: ["Array", "ClassBuilder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "<<", "sortClasses:"]
}, function ($methodClass){ return function (classes){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Array)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream).__lt_lt($recv($globals.ClassBuilder)._sortClasses_(classes));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortedClasses:",{classes:classes})});
//>>excludeEnd("ctx");
}; }),
$globals.Package.a$cls);


$core.addClass("PackageStateObserver", $globals.Object, [], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageStateObserver.comment="My current instance listens for any changes in the system that might affect the state of a package (being dirty).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announcer",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ SystemAnnouncer current",
referencedClasses: ["SystemAnnouncer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["current"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.SystemAnnouncer)._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a\x09self announcer\x0a\x09\x09on: PackageAdded\x0a\x09\x09send: #onPackageAdded:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ClassAnnouncement\x0a\x09\x09send: #onClassModification:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: MethodAnnouncement\x0a\x09\x09send: #onMethodModification:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ProtocolAnnouncement\x0a\x09\x09send: #onProtocolModification:\x0a\x09\x09to: self",
referencedClasses: ["PackageAdded", "ClassAnnouncement", "MethodAnnouncement", "ProtocolAnnouncement"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:send:to:", "announcer"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._announcer();
[$recv($1)._on_send_to_($globals.PackageAdded,"onPackageAdded:",self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:send:to:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._on_send_to_($globals.ClassAnnouncement,"onClassModification:",self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:send:to:"]=2
//>>excludeEnd("ctx");
][0];
[$recv($1)._on_send_to_($globals.MethodAnnouncement,"onMethodModification:",self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:send:to:"]=3
//>>excludeEnd("ctx");
][0];
$recv($1)._on_send_to_($globals.ProtocolAnnouncement,"onProtocolModification:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "onClassModification:",
protocol: "reactions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassModification: anAnnouncement\x0a\x09anAnnouncement theClass ifNotNil: [ :theClass | theClass package beDirty ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "theClass", "beDirty", "package"]
}, function ($methodClass){ return function (anAnnouncement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anAnnouncement)._theClass();
if($1 == null || $1.a$nil){
$1;
} else {
var theClass;
theClass=$1;
$recv($recv(theClass)._package())._beDirty();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassModification:",{anAnnouncement:anAnnouncement})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "onMethodModification:",
protocol: "reactions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onMethodModification: anAnnouncement\x0a\x09anAnnouncement method package ifNotNil: [ :package | package beDirty ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "package", "method", "beDirty"]
}, function ($methodClass){ return function (anAnnouncement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(anAnnouncement)._method())._package();
if($1 == null || $1.a$nil){
$1;
} else {
var package_;
package_=$1;
$recv(package_)._beDirty();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodModification:",{anAnnouncement:anAnnouncement})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "onPackageAdded:",
protocol: "reactions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageAdded: anAnnouncement\x0a\x09anAnnouncement package beDirty",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["beDirty", "package"]
}, function ($methodClass){ return function (anAnnouncement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(anAnnouncement)._package())._beDirty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageAdded:",{anAnnouncement:anAnnouncement})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "onProtocolModification:",
protocol: "reactions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onProtocolModification: anAnnouncement\x0a\x09anAnnouncement package ifNotNil: [ :package | package beDirty ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "package", "beDirty"]
}, function ($methodClass){ return function (anAnnouncement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anAnnouncement)._package();
if($1 == null || $1.a$nil){
$1;
} else {
var package_;
package_=$1;
$recv(package_)._beDirty();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onProtocolModification:",{anAnnouncement:anAnnouncement})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageStateObserver);


$core.setSlots($globals.PackageStateObserver.a$cls, ["current"]);
$core.addMethod(
$core.method({
selector: "current",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.current;
if($1 == null || $1.a$nil){
$self.current=$self._new();
return $self.current;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageStateObserver.a$cls);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self current observeSystem",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["observeSystem", "current"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._current())._observeSystem();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PackageStateObserver.a$cls);


$core.addClass("Setting", $globals.Object, ["key", "defaultValue"], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Setting.comment="I represent a setting **stored** at `Smalltalk settings`. \x0aIn the current implementation, `Smalltalk settings` is an object persisted in the localStorage.\x0a\x0a## API\x0a\x0aA `Setting` value can be read using `value` and set using `value:`.\x0a\x0aSettings are accessed with `'key' asSetting` or `'key' asSettingIfAbsent: aDefaultValue`.\x0a\x0aTo read the value of a setting you can also use the convenience:\x0a\x0a`theValueSet :=  'any.characteristic' settingValue` \x0a\x0aor with a default using:\x0a\x0a `theEnsuredValueSet := 'any.characteristic' settingValueIfAbsent: true`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "defaultValue",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultValue\x0a\x09^ defaultValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.defaultValue;

}; }),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "defaultValue:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStringifiableObject"],
source: "defaultValue: aStringifiableObject\x0a\x09defaultValue := aStringifiableObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aStringifiableObject){
var self=this,$self=this;
$self.defaultValue=aStringifiableObject;
return self;

}; }),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "key",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ key",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.key;

}; }),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "key:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "key: aString\x0a\x09key := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.key=aString;
return self;

}; }),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "value",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ Smalltalk settings at: self key ifAbsent: [ self defaultValue ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "settings", "key", "defaultValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Smalltalk)._settings())._at_ifAbsent_($self._key(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._defaultValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStringifiableObject"],
source: "value: aStringifiableObject\x0a\x09^ Smalltalk settings at: self key put: aStringifiableObject",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "settings", "key"]
}, function ($methodClass){ return function (aStringifiableObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Smalltalk)._settings())._at_put_($self._key(),aStringifiableObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{aStringifiableObject:aStringifiableObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Setting);


$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDefaultValue"],
source: "at: aString ifAbsent: aDefaultValue\x0a\x09\x0a\x09^ super new\x0a\x09\x09key: aString;\x0a\x09\x09defaultValue: aDefaultValue;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["key:", "new", "defaultValue:", "yourself"]
}, function ($methodClass){ return function (aString,aDefaultValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._new.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$recv($1)._key_(aString);
$recv($1)._defaultValue_(aDefaultValue);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aDefaultValue:aDefaultValue})});
//>>excludeEnd("ctx");
}; }),
$globals.Setting.a$cls);

$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldNotImplement"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Setting.a$cls);


$core.addClass("SmalltalkImage", $globals.Object, ["globalJsVariables", "packageDictionary"], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SmalltalkImage.comment="I represent the Smalltalk system, wrapping\x0aoperations of variable `$core` declared in `base/boot.js`.\x0a\x0a## API\x0a\x0aI have only one instance, accessed with global variable `Smalltalk`.\x0a\x0a## Classes\x0a\x0aClasses can be accessed using the following methods:\x0a\x0a- `#classes` answers the full list of Smalltalk classes in the system\x0a- `#globals #at:` answers a specific global (usually, a class) or `nil`\x0a\x0a## Packages\x0a\x0aPackages can be accessed using the following methods:\x0a\x0a- `#packages` answers the full list of packages\x0a- `#packageAt:` answers a specific package or `nil`\x0a\x0a## Parsing\x0a\x0aThe `#parse:` method is used to parse Amber source code.\x0aIt requires the `Compiler` package and the `base/parser.js` parser file in order to work.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addGlobalJsVariable:",
protocol: "globals",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addGlobalJsVariable: aString\x0a\x09self globalJsVariables add: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "globalJsVariables"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._globalJsVariables())._add_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addGlobalJsVariable:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "adoptPackageDescriptors",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "adoptPackageDescriptors\x0a\x09^ self tryAdoptPackageDescriptorsBeyond: Set new",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["tryAdoptPackageDescriptorsBeyond:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._tryAdoptPackageDescriptorsBeyond_($recv($globals.Set)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"adoptPackageDescriptors",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "amdRequire",
protocol: "accessing amd",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "amdRequire\x0a\x09^ self core at: 'amdRequire'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:", "core"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._core())._at_("amdRequire");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"amdRequire",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "asSmalltalkException:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asSmalltalkException: anObject\x0a\x09\x22A JavaScript exception may be thrown.\x0a\x09We then need to convert it back to a Smalltalk object\x22\x0a\x09\x0a\x09^ (self isError: anObject)\x0a\x09\x09ifTrue: [ anObject ]\x0a\x09\x09ifFalse: [ JavaScriptException on: anObject ]",
referencedClasses: ["JavaScriptException"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isError:", "on:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._isError_(anObject);
if($core.assert($1)){
return anObject;
} else {
return $recv($globals.JavaScriptException)._on_(anObject);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSmalltalkException:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "basicCreatePackage:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "basicCreatePackage: packageName\x0a\x09\x22Create and bind a new bare package with given name and return it.\x22\x0a\x09^ self packageDictionary at: packageName ifAbsentPut: [ Package new: packageName ]",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsentPut:", "packageDictionary", "new:"]
}, function ($methodClass){ return function (packageName){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._packageDictionary())._at_ifAbsentPut_(packageName,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Package)._new_(packageName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicCreatePackage:",{packageName:packageName})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "beClean",
protocol: "packages",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beClean\x0a\x09\x22Marks all packages clean.\x22\x0a\x0a\x09self packages do: #beClean",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "packages"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._packages())._do_("beClean");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beClean",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "cancelOptOut:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "cancelOptOut: anObject\x0a\x09\x22A Smalltalk object has a 'a$cls' property.\x0a\x09If this property is shadowed for anObject by optOut:,\x0a\x09the object is treated as plain JS object.\x0a\x09This removes the shadow and anObject is Smalltalk object\x0a\x09again if it was before.\x22\x0a\x09\x0a\x09<inlineJS: 'delete anObject.a$cls;'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["delete anObject.a$cls;"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
delete anObject.a$cls;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cancelOptOut:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "classes",
protocol: "classes",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09^ self core traitsOrClasses copy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copy", "traitsOrClasses", "core"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._core())._traitsOrClasses())._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "core",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "core\x0a\x09<inlineJS: 'return $core'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $core"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"core",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "createPackage:",
protocol: "packages",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "createPackage: packageName\x0a\x09| package announcement |\x0a\x09\x0a\x09package := self basicCreatePackage: packageName.\x0a\x09\x0a\x09announcement := PackageAdded new\x0a\x09\x09package: package;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09SystemAnnouncer current announce: announcement.\x0a\x09\x0a\x09^ package",
referencedClasses: ["PackageAdded", "SystemAnnouncer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["basicCreatePackage:", "package:", "new", "yourself", "announce:", "current"]
}, function ($methodClass){ return function (packageName){
var self=this,$self=this;
var package_,announcement;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
package_=$self._basicCreatePackage_(packageName);
$1=$recv($globals.PackageAdded)._new();
$recv($1)._package_(package_);
announcement=$recv($1)._yourself();
$recv($recv($globals.SystemAnnouncer)._current())._announce_(announcement);
return package_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPackage:",{packageName:packageName,package_:package_,announcement:announcement})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "defaultAmdNamespace",
protocol: "accessing amd",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultAmdNamespace\x0a\x09^ 'transport.defaultAmdNamespace' settingValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValue"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return "transport.defaultAmdNamespace"._settingValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultAmdNamespace",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "defaultAmdNamespace:",
protocol: "accessing amd",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "defaultAmdNamespace: aString\x0a\x09'transport.defaultAmdNamespace' settingValue: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["settingValue:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
"transport.defaultAmdNamespace"._settingValue_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultAmdNamespace:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "deleteClass:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "deleteClass: aClass\x0a\x09\x22Deletes a class by deleting its binding only. Use #removeClass instead\x22\x0a\x09\x0a\x09<inlineJS: '$core.removeClass(aClass)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["$core.removeClass(aClass)"]]],
messageSends: []
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.removeClass(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deleteClass:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "deleteGlobalJsVariable:",
protocol: "globals",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "deleteGlobalJsVariable: aString\x0a\x09self globalJsVariables remove: aString ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["remove:ifAbsent:", "globalJsVariables"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._globalJsVariables())._remove_ifAbsent_(aString,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deleteGlobalJsVariable:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "existsJsGlobal:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "existsJsGlobal: aString\x0a\x09self deprecatedAPI: 'Use Platform >> includesGlobal: instead'.\x0a\x09^ Platform includesGlobal: aString",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deprecatedAPI:", "includesGlobal:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._deprecatedAPI_("Use Platform >> includesGlobal: instead");
return $recv($globals.Platform)._includesGlobal_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"existsJsGlobal:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "globalJsVariables",
protocol: "globals",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalJsVariables\x0a\x09^ globalJsVariables ifNil: [\x0a\x09\x09globalJsVariables := #(window document process global) ]",
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
$1=$self.globalJsVariables;
if($1 == null || $1.a$nil){
$self.globalJsVariables=["window", "document", "process", "global"];
return $self.globalJsVariables;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalJsVariables",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "globals",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09<inlineJS: 'return $globals'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $globals"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $globals;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globals",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "isError:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isError: anObject\x0a\x09^ (self isSmalltalkObject: anObject) and: [ anObject isError ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "isSmalltalkObject:", "isError"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._isSmalltalkObject_(anObject))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anObject)._isError();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isError:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "isSmalltalkObject:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isSmalltalkObject: anObject\x0a\x09\x22Consider anObject a Smalltalk object if it has a 'a$cls' property.\x0a\x09Note that this may be unaccurate\x22\x0a\x09\x0a\x09<inlineJS: 'return anObject.a$cls != null'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return anObject.a$cls != null"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return anObject.a$cls != null;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSmalltalkObject:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "optOut:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "optOut: anObject\x0a\x09\x22A Smalltalk object has a 'a$cls' property.\x0a\x09This shadows the property for anObject.\x0a\x09The object is treated as plain JS object following this.\x22\x0a\x09\x0a\x09<inlineJS: 'anObject.a$cls = null'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["anObject.a$cls = null"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
anObject.a$cls = null;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"optOut:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "packageAt:ifAbsent:",
protocol: "packages",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName", "aBlock"],
source: "packageAt: packageName ifAbsent: aBlock\x0a\x09^ self packageDictionary at: packageName ifAbsent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "packageDictionary"]
}, function ($methodClass){ return function (packageName,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._packageDictionary())._at_ifAbsent_(packageName,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageAt:ifAbsent:",{packageName:packageName,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "packageAt:ifPresent:",
protocol: "packages",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName", "aBlock"],
source: "packageAt: packageName ifPresent: aBlock\x0a\x09^ self packageDictionary at: packageName ifPresent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifPresent:", "packageDictionary"]
}, function ($methodClass){ return function (packageName,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._packageDictionary())._at_ifPresent_(packageName,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageAt:ifPresent:",{packageName:packageName,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "packageDictionary",
protocol: "packages",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packageDictionary\x0a\x09^ packageDictionary ifNil: [ packageDictionary := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.packageDictionary;
if($1 == null || $1.a$nil){
$self.packageDictionary=$recv($globals.Dictionary)._new();
return $self.packageDictionary;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageDictionary",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "packages",
protocol: "packages",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packages\x0a\x09\x22Return all Package instances in the system.\x22\x0a\x0a\x09^ self packageDictionary values copy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copy", "values", "packageDictionary"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._packageDictionary())._values())._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packages",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "parse:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parse: aString\x0a\x09^ Compiler new parse: aString",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "new"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Compiler)._new())._parse_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "postLoad",
protocol: "image",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "postLoad\x0a\x09^ self adoptPackageDescriptors then: [ :pkgs |\x0a\x09\x09| classes |\x0a\x09\x09pkgs do: #beClean.\x0a\x09\x09classes := Smalltalk classes select:\x0a\x09\x09\x09[ :each | pkgs includes: each package ].\x0a\x09\x09classes do: [ :each |\x0a\x09\x09\x09each = self class ifFalse: [ each initialize ] ].\x0a\x09\x09self sweepPackageDescriptors: pkgs ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:", "adoptPackageDescriptors", "do:", "select:", "classes", "includes:", "package", "ifFalse:", "=", "class", "initialize", "sweepPackageDescriptors:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv($self._adoptPackageDescriptors())._then_((function(pkgs){
var classes;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(pkgs)._do_("beClean")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["do:"]=1
//>>excludeEnd("ctx");
][0];
classes=$recv($recv($globals.Smalltalk)._classes())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(pkgs)._includes_($recv(each)._package());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv(classes)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(each).__eq($self._class());
if(!$core.assert($1)){
return $recv(each)._initialize();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $self._sweepPackageDescriptors_(pkgs);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({pkgs:pkgs,classes:classes},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"postLoad",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "pseudoVariableNames",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pseudoVariableNames\x0a\x09^ Compiler pseudoVariableNames",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["pseudoVariableNames"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Compiler)._pseudoVariableNames();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pseudoVariableNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "readJSObject:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "readJSObject: anObject\x0a\x09<inlineJS: 'return $core.readJSObject(anObject)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $core.readJSObject(anObject)"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.readJSObject(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readJSObject:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "removeClass:",
protocol: "classes",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "removeClass: aClass\x0a\x09aClass isMetaclass ifTrue: [ self error: aClass asString, ' is a Metaclass and cannot be removed!' ].\x0a\x09aClass allSubclassesDo: [ :subclass | self error: aClass name, ' has a subclass: ', subclass name ].\x0a\x09aClass traitUsers ifNotEmpty: [ self error: aClass name, ' has trait users.' ].\x0a\x09\x0a\x09self deleteClass: aClass.\x0a\x09aClass includingPossibleMetaDo: [ :each | each setTraitComposition: #() ].\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassRemoved new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassRemoved"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isMetaclass", "error:", ",", "asString", "allSubclassesDo:", "name", "ifNotEmpty:", "traitUsers", "deleteClass:", "includingPossibleMetaDo:", "setTraitComposition:", "announce:", "current", "theClass:", "new", "yourself"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(aClass)._isMetaclass();
if($core.assert($1)){
[$self._error_([$recv($recv(aClass)._asString()).__comma(" is a Metaclass and cannot be removed!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["error:"]=1
//>>excludeEnd("ctx");
][0];
}
$recv(aClass)._allSubclassesDo_((function(subclass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$self._error_([$recv([$recv([$recv(aClass)._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0]).__comma(" has a subclass: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=3
//>>excludeEnd("ctx");
][0]).__comma([$recv(subclass)._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["name"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["error:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({subclass:subclass},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($recv(aClass)._traitUsers())._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._error_($recv($recv(aClass)._name()).__comma(" has trait users."));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$self._deleteClass_(aClass);
$recv(aClass)._includingPossibleMetaDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._setTraitComposition_([]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
$2=$recv($globals.SystemAnnouncer)._current();
$3=$recv($globals.ClassRemoved)._new();
$recv($3)._theClass_(aClass);
$4=$recv($3)._yourself();
$recv($2)._announce_($4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "removePackage:",
protocol: "packages",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "removePackage: packageName\x0a\x09\x22Removes a package and all its classes.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].\x0a\x09pkg classes do: [ :each |\x0a\x09\x09\x09self removeClass: each ].\x0a\x09self packageDictionary removeKey: packageName",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["packageAt:ifAbsent:", "error:", ",", "do:", "classes", "removeClass:", "removeKey:", "packageDictionary"]
}, function ($methodClass){ return function (packageName){
var self=this,$self=this;
var pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
pkg=$self._packageAt_ifAbsent_(packageName,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._error_("Missing package: ".__comma(packageName));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv(pkg)._classes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._removeClass_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($self._packageDictionary())._removeKey_(packageName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removePackage:",{packageName:packageName,pkg:pkg})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "renamePackage:to:",
protocol: "packages",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName", "newName"],
source: "renamePackage: packageName to: newName\x0a\x09\x22Rename a package.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].\x0a\x09self packageAt: newName ifPresent: [ self error: 'Already exists a package called: ', newName ].\x0a\x09pkg name: newName; beDirty.\x0a\x09self packageDictionary\x0a\x09\x09at: newName put: pkg;\x0a\x09\x09removeKey: packageName",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["packageAt:ifAbsent:", "error:", ",", "packageAt:ifPresent:", "name:", "beDirty", "at:put:", "packageDictionary", "removeKey:"]
}, function ($methodClass){ return function (packageName,newName){
var self=this,$self=this;
var pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
pkg=$self._packageAt_ifAbsent_(packageName,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$self._error_(["Missing package: ".__comma(packageName)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["error:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._packageAt_ifPresent_(newName,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._error_("Already exists a package called: ".__comma(newName));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=pkg;
$recv($1)._name_(newName);
$recv($1)._beDirty();
$2=$self._packageDictionary();
$recv($2)._at_put_(newName,pkg);
$recv($2)._removeKey_(packageName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renamePackage:to:",{packageName:packageName,newName:newName,pkg:pkg})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "reservedWords",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reservedWords\x0a\x09^ #(\x0a\x09\x09\x22http://www.ecma-international.org/ecma-262/6.0/#sec-keywords\x22\x0a\x09\x09break case catch class const continue debugger\x0a\x09\x09default delete do else export extends finally\x0a\x09\x09for function if import in instanceof new\x0a\x09\x09return super switch this throw try typeof\x0a\x09\x09var void while with yield\x0a\x09\x09\x22in strict mode\x22\x0a\x09\x09let static\x0a\x09\x09\x22Amber protected words: these should not be compiled as-is when in code\x22\x0a\x09\x09arguments\x0a\x09\x09\x22http://www.ecma-international.org/ecma-262/6.0/#sec-future-reserved-words\x22\x0a\x09\x09await enum\x0a\x09\x09\x22in strict mode\x22\x0a\x09\x09implements interface package private protected public\x0a\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "return", "super", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "yield", "let", "static", "arguments", "await", "enum", "implements", "interface", "package", "private", "protected", "public"];

}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "settings",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "settings\x0a\x09^ SmalltalkSettings",
referencedClasses: ["SmalltalkSettings"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.SmalltalkSettings;

}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "sweepPackageDescriptors:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pkgs"],
source: "sweepPackageDescriptors: pkgs\x0a\x09| pd |\x09\x0a\x09pd := self core packageDescriptors.\x0a\x09pkgs do: [ :each | pd removeKey: each name ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["packageDescriptors", "core", "do:", "removeKey:", "name"]
}, function ($methodClass){ return function (pkgs){
var self=this,$self=this;
var pd;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
pd=$recv($self._core())._packageDescriptors();
$recv(pkgs)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(pd)._removeKey_($recv(each)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sweepPackageDescriptors:",{pkgs:pkgs,pd:pd})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "try:ifTrue:catch:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["actionBlock", "aBlock", "anotherBlock"],
source: "try: actionBlock ifTrue: aBlock catch: anotherBlock\x0a\x09\x22Similar to BlockClosure >> tryifTrue:catch:, but\x0a\x09converts all JS exceptions to JavaScriptException instances.\x22\x0a\x09\x0a\x09| smalltalkError |\x0a\x09^ actionBlock\x0a\x09\x09tryIfTrue: [ :error |\x0a\x09\x09\x09smalltalkError := self asSmalltalkException: error.\x0a\x09\x09\x09aBlock value: smalltalkError ]\x0a\x09\x09catch: [ anotherBlock value: smalltalkError ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["tryIfTrue:catch:", "asSmalltalkException:", "value:"]
}, function ($methodClass){ return function (actionBlock,aBlock,anotherBlock){
var self=this,$self=this;
var smalltalkError;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(actionBlock)._tryIfTrue_catch_((function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
smalltalkError=$self._asSmalltalkException_(error);
return [$recv(aBlock)._value_(smalltalkError)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anotherBlock)._value_(smalltalkError);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"try:ifTrue:catch:",{actionBlock:actionBlock,aBlock:aBlock,anotherBlock:anotherBlock,smalltalkError:smalltalkError})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "tryAdoptPackageDescriptorsBeyond:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSet"],
source: "tryAdoptPackageDescriptorsBeyond: aSet\x0a\x09| original |\x0a\x09original := aSet copy.\x0a\x09self core packageDescriptors keysAndValuesDo: [ :key :value |\x0a\x09\x09aSet add: (Package named: key javaScriptDescriptor: value) ].\x0a\x09^ (aSet allSatisfy: [ :each | original includes: each ])\x0a\x09\x09ifFalse: [ (Promise all: (aSet collect: #isReady)) then: [ self tryAdoptPackageDescriptorsBeyond: aSet ] ]\x0a\x09\x09ifTrue: [ Promise value: aSet ]",
referencedClasses: ["Package", "Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copy", "keysAndValuesDo:", "packageDescriptors", "core", "add:", "named:javaScriptDescriptor:", "ifFalse:ifTrue:", "allSatisfy:", "includes:", "then:", "all:", "collect:", "tryAdoptPackageDescriptorsBeyond:", "value:"]
}, function ($methodClass){ return function (aSet){
var self=this,$self=this;
var original;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
original=$recv(aSet)._copy();
$recv($recv($self._core())._packageDescriptors())._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aSet)._add_($recv($globals.Package)._named_javaScriptDescriptor_(key,value));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv(aSet)._allSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(original)._includes_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return $recv($globals.Promise)._value_(aSet);
} else {
return $recv($recv($globals.Promise)._all_($recv(aSet)._collect_("isReady")))._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._tryAdoptPackageDescriptorsBeyond_(aSet);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tryAdoptPackageDescriptorsBeyond:",{aSet:aSet,original:original})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "version",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "version\x0a\x09\x22Answer the version string of Amber\x22\x0a\x09\x0a\x09^ '0.25.0-pre'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "0.25.0-pre";

}; }),
$globals.SmalltalkImage);


$core.setSlots($globals.SmalltalkImage.a$cls, ["current"]);
$core.addMethod(
$core.method({
selector: "current",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ] ifNotNil: [ self deprecatedAPI. current ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "new", "deprecatedAPI"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.current;
if($1 == null || $1.a$nil){
$self.current=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._new.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return $self.current;
} else {
$self._deprecatedAPI();
return $self.current;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage.a$cls);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09| st |\x0a\x09st := self current.\x0a\x09st globals at: 'Smalltalk' put: st",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["current", "at:put:", "globals"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var st;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
st=$self._current();
$recv($recv(st)._globals())._at_put_("Smalltalk",st);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{st:st})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage.a$cls);

$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldNotImplement"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SmalltalkImage.a$cls);

$core.setTraitComposition([{trait: $globals.TIsInGroup}, {trait: $globals.TThenable}], $globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "nextPutJSObject:",
protocol: "*Kernel-Infrastructure",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "nextPutJSObject: aJSObject\x0a\x09self nextPut: aJSObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPut:"]
}, function ($methodClass){ return function (aJSObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._nextPut_(aJSObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutJSObject:",{aJSObject:aJSObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "asJavaScriptPropertyName",
protocol: "*Kernel-Infrastructure",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptPropertyName\x0a<inlineJS: 'return $core.st2prop(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $core.st2prop(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.st2prop(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptPropertyName",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "asSetting",
protocol: "*Kernel-Infrastructure",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSetting\x0a\x09\x22Answer aSetting dedicated to locally store a value using this string as key.\x0a\x09Nil will be the default value.\x22\x0a\x09^ Setting at: self ifAbsent: nil",
referencedClasses: ["Setting"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Setting)._at_ifAbsent_(self,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSetting",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "asSettingIfAbsent:",
protocol: "*Kernel-Infrastructure",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDefaultValue"],
source: "asSettingIfAbsent: aDefaultValue\x0a\x09\x22Answer aSetting dedicated to locally store a value using this string as key.\x0a\x09Make this setting to have aDefaultValue.\x22\x0a\x09^ Setting at: self ifAbsent: aDefaultValue",
referencedClasses: ["Setting"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:"]
}, function ($methodClass){ return function (aDefaultValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Setting)._at_ifAbsent_(self,aDefaultValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSettingIfAbsent:",{aDefaultValue:aDefaultValue})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "settingValue",
protocol: "*Kernel-Infrastructure",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "settingValue\x0a\x09^ self asSetting value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value", "asSetting"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asSetting())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"settingValue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "settingValue:",
protocol: "*Kernel-Infrastructure",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "settingValue: aValue\x0a\x09\x22Sets the value of the setting that will be locally stored using this string as key.\x0a\x09Note that aValue can be any object that can be stringifyed\x22\x0a\x09^ self asSetting value: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:", "asSetting"]
}, function ($methodClass){ return function (aValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asSetting())._value_(aValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"settingValue:",{aValue:aValue})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "settingValueIfAbsent:",
protocol: "*Kernel-Infrastructure",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDefaultValue"],
source: "settingValueIfAbsent: aDefaultValue\x0a\x09\x22Answer the value of the locally stored setting using this string as key.\x0a\x09Use aDefaultValue in case no setting is found\x22\x0a\x09^ (self asSettingIfAbsent: aDefaultValue) value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value", "asSettingIfAbsent:"]
}, function ($methodClass){ return function (aDefaultValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asSettingIfAbsent_(aDefaultValue))._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"settingValueIfAbsent:",{aDefaultValue:aDefaultValue})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

});
