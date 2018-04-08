define(["amber/boot", "amber_core/Kernel-Collections", "amber_core/Kernel-Exceptions", "amber_core/Kernel-Objects", "amber_core/Kernel-Promises"], function($boot){"use strict";
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage("Kernel-Infrastructure");
($core.packageDescriptors||$core.packages)["Kernel-Infrastructure"].innerEval = function (expr) { return eval(expr); };
($core.packageDescriptors||$core.packages)["Kernel-Infrastructure"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass("AmberBootstrapInitialization", $globals.Object, [], "Kernel-Infrastructure");

$core.addMethod(
$core.method({
selector: "initializeClasses",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($recv($globals.Smalltalk)._classes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each).__eq($globals.SmalltalkImage);
if(!$core.assert($1)){
return $recv(each)._initialize();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeClasses",{},$globals.AmberBootstrapInitialization.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeClasses\x0a\x09Smalltalk classes do: [ :each |\x0a\x09\x09each = SmalltalkImage ifFalse: [ each initialize ] ]",
referencedClasses: ["Smalltalk", "SmalltalkImage"],
//>>excludeEnd("ide");
messageSends: ["do:", "classes", "ifFalse:", "=", "initialize"]
}),
$globals.AmberBootstrapInitialization.a$cls);

$core.addMethod(
$core.method({
selector: "organizeClasses",
protocol: "organization",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"organizeClasses",{},$globals.AmberBootstrapInitialization.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "organizeClasses\x0a\x09Smalltalk classes do: [ :each | each enterOrganization ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["do:", "classes", "enterOrganization"]
}),
$globals.AmberBootstrapInitialization.a$cls);

$core.addMethod(
$core.method({
selector: "organizeMethods",
protocol: "organization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Smalltalk)._classes())._do_((function(eachClass){
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
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"organizeMethods",{},$globals.AmberBootstrapInitialization.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "organizeMethods\x0a\x09Smalltalk classes do: [ :eachClass |\x0a\x09\x09eachClass definedMethods do: [ :eachMethod |\x0a\x09\x09\x09eachMethod methodClass methodOrganizationEnter: eachMethod andLeave: nil ] ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["do:", "classes", "definedMethods", "methodOrganizationEnter:andLeave:", "methodClass"]
}),
$globals.AmberBootstrapInitialization.a$cls);

$core.addMethod(
$core.method({
selector: "run",
protocol: "public api",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.SmalltalkImage)._initialize();
$recv($globals.Smalltalk)._adoptPackageDictionary();
$self._organizeClasses();
$self._organizeMethods();
$self._initializeClasses();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"run",{},$globals.AmberBootstrapInitialization.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "run\x0a\x09SmalltalkImage initialize.\x0a\x09Smalltalk adoptPackageDictionary.\x0a\x09self\x0a\x09\x09organizeClasses;\x0a\x09\x09organizeMethods;\x0a\x09\x09initializeClasses",
referencedClasses: ["SmalltalkImage", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["initialize", "adoptPackageDictionary", "organizeClasses", "organizeMethods", "initializeClasses"]
}),
$globals.AmberBootstrapInitialization.a$cls);


$core.addClass("JSObjectProxy", $globals.ProtoObject, ["jsObject"], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.JSObjectProxy.comment="I handle sending messages to JavaScript objects, making  JavaScript object accessing from Amber fully transparent.\x0aMy instances make intensive use of `#doesNotUnderstand:`.\x0a\x0aMy instances are automatically created by Amber whenever a message is sent to a JavaScript object.\x0a\x0a## Usage examples\x0a\x0aJSObjectProxy objects are instanciated by Amber when a Smalltalk message is sent to a JavaScript object.\x0a\x0a\x09window alert: 'hello world'.\x0a\x09window inspect.\x0a\x09(window jQuery: 'body') append: 'hello world'\x0a\x0aAmber messages sends are converted to JavaScript function calls or object property access _(in this order)_. If n one of them match, a `MessageNotUnderstood` error will be thrown.\x0a\x0a## Message conversion rules\x0a\x0a- `someUser name` becomes `someUser.name`\x0a- `someUser name: 'John'` becomes `someUser name = \x22John\x22`\x0a- `console log: 'hello world'` becomes `console.log('hello world')`\x0a- `(window jQuery: 'foo') css: 'background' color: 'red'` becomes `window.jQuery('foo').css('background', 'red')`\x0a\x0a__Note:__ For keyword-based messages, only the first keyword is kept: `window foo: 1 bar: 2` is equivalent to `window foo: 1 baz: 2`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: "comparing",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(anObject)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq_eq($self._class());
if(!$core.assert($1)){
return false;
}
return $recv($globals.JSObjectProxy)._compareJSObjectOfProxy_withProxy_(self,anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "= anObject\x0a\x09anObject class == self class ifFalse: [ ^ false ].\x0a\x09^ JSObjectProxy compareJSObjectOfProxy: self withProxy: anObject",
referencedClasses: ["JSObjectProxy"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "==", "class", "compareJSObjectOfProxy:withProxy:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
fn: function (){
var self=this,$self=this;
return $self["@jsObject"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09\x22Answers the receiver in a stringify-friendly fashion\x22\x0a\x0a\x09^ jsObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self['@jsObject'][aString];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "at: aString\x0a\x09<inlineJS: 'return $self[''@jsObject''][aString]'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: "accessing",
fn: function (aString,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var obj = $self['@jsObject'];
		return aString in obj ? obj[aString] : aBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aBlock:aBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "at: aString ifAbsent: aBlock\x0a\x09\x22return the aString property or evaluate aBlock if the property is not defined on the object\x22\x0a\x09<inlineJS: '\x0a\x09\x09var obj = $self[''@jsObject''];\x0a\x09\x09return aString in obj ? obj[aString] : aBlock._value();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:ifPresent:",
protocol: "accessing",
fn: function (aString,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var obj = $self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : nil;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{aString:aString,aBlock:aBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "at: aString ifPresent: aBlock\x0a\x09\x22return the evaluation of aBlock with the value if the property is defined or return nil\x22\x0a\x09<inlineJS: '\x0a\x09\x09var obj = $self[''@jsObject''];\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : nil;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: "accessing",
fn: function (aString,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var obj = $self['@jsObject'];
		return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aString:aString,aBlock:aBlock,anotherBlock:anotherBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock", "anotherBlock"],
source: "at: aString ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22return the evaluation of aBlock with the value if the property is defined\x0a\x09or return value of anotherBlock\x22\x0a\x09<inlineJS: '\x0a\x09\x09var obj = $self[''@jsObject''];\x0a\x09\x09return aString in obj ? aBlock._value_(obj[aString]) : anotherBlock._value();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
fn: function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self['@jsObject'][aString] = anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aString:aString,anObject:anObject},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "at: aString put: anObject\x0a\x09<inlineJS: 'return $self[''@jsObject''][aString] = anObject'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "catch:",
protocol: "promises",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($globals.NativeFunction)._isNativeFunction_($self._at_("then"));
if($core.assert($1)){
return $recv($recv($globals.TThenable).__gt_gt("catch:"))._sendTo_arguments_($self["@jsObject"],[aBlock]);
} else {
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.JSObjectProxy.superclass||$boot.nilAsClass).fn.prototype._catch_.apply($self, [aBlock]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"catch:",{aBlock:aBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "catch: aBlock\x0a(NativeFunction isNativeFunction: (self at: #then))\x0a\x09ifTrue: [ ^ (TThenable >> #catch:) sendTo: jsObject arguments: {aBlock} ]\x0a\x09ifFalse: [ ^ super catch: aBlock ]",
referencedClasses: ["NativeFunction", "TThenable"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isNativeFunction:", "at:", "sendTo:arguments:", ">>", "catch:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: "proxy",
fn: function (aMessage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv($globals.JSObjectProxy)._lookupProperty_ofProxy_($recv($recv(aMessage)._selector())._asJavaScriptPropertyName(),self);
if(($receiver = $1) == null || $receiver.a$nil){
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.JSObjectProxy.superclass||$boot.nilAsClass).fn.prototype._doesNotUnderstand_.apply($self, [aMessage]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
} else {
var jsSelector;
jsSelector=$receiver;
return $recv($globals.JSObjectProxy)._forwardMessage_withArguments_ofProxy_(jsSelector,$recv(aMessage)._arguments(),self);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ (JSObjectProxy lookupProperty: aMessage selector asJavaScriptPropertyName ofProxy: self)\x0a\x09\x09ifNil: [ super doesNotUnderstand: aMessage ]\x0a\x09\x09ifNotNil: [ :jsSelector | \x0a\x09\x09\x09JSObjectProxy \x0a\x09\x09\x09\x09forwardMessage: jsSelector \x0a\x09\x09\x09\x09withArguments: aMessage arguments\x0a\x09\x09\x09\x09ofProxy: self ]",
referencedClasses: ["JSObjectProxy"],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "lookupProperty:ofProxy:", "asJavaScriptPropertyName", "selector", "doesNotUnderstand:", "forwardMessage:withArguments:ofProxy:", "arguments"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "in:",
protocol: "accessing",
fn: function (aValuable){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aValuable)._value_($self["@jsObject"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"in:",{aValuable:aValuable},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValuable"],
source: "in: aValuable\x0a\x09^ aValuable value: jsObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "jsObject",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@jsObject"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsObject\x0a\x09^ jsObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "keysAndValuesDo:",
protocol: "enumerating",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var o = $self['@jsObject'];
		for(var i in o) {
			aBlock._value_value_(i, o[i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09var o = $self[''@jsObject''];\x0a\x09\x09for(var i in o) {\x0a\x09\x09\x09aBlock._value_value_(i, o[i]);\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "on:do:",
protocol: "promises",
fn: function (aClass,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($globals.NativeFunction)._isNativeFunction_($self._at_("then"));
if($core.assert($1)){
return $recv($recv($globals.TThenable).__gt_gt("on:do:"))._sendTo_arguments_($self["@jsObject"],[aClass,aBlock]);
} else {
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.JSObjectProxy.superclass||$boot.nilAsClass).fn.prototype._on_do_.apply($self, [aClass,aBlock]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:",{aClass:aClass,aBlock:aBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a(NativeFunction isNativeFunction: (self at: #then))\x0a\x09ifTrue: [ ^ (TThenable >> #on:do:) sendTo: jsObject arguments: {aClass. aBlock} ]\x0a\x09ifFalse: [ ^ super on: aClass do: aBlock ]",
referencedClasses: ["NativeFunction", "TThenable"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isNativeFunction:", "at:", "sendTo:arguments:", ">>", "on:do:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
fn: function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($self._printString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self printString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "printString"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "printString",
protocol: "printing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var js = $self['@jsObject'];
		return js.toString
			? js.toString()
			: Object.prototype.toString.call(js)
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printString",{},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printString\x0a\x09<inlineJS: '\x0a\x09\x09var js = $self[''@jsObject''];\x0a\x09\x09return js.toString\x0a\x09\x09\x09? js.toString()\x0a\x09\x09\x09: Object.prototype.toString.call(js)\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "putOn:",
protocol: "streaming",
fn: function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutJSObject_($self["@jsObject"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPutJSObject: jsObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutJSObject:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "then:",
protocol: "promises",
fn: function (aBlockOrArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($globals.NativeFunction)._isNativeFunction_($self._at_("then"));
if($core.assert($1)){
return $recv($recv($globals.TThenable).__gt_gt("then:"))._sendTo_arguments_($self["@jsObject"],[aBlockOrArray]);
} else {
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.JSObjectProxy.superclass||$boot.nilAsClass).fn.prototype._then_.apply($self, [aBlockOrArray]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:",{aBlockOrArray:aBlockOrArray},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray"],
source: "then: aBlockOrArray\x0a(NativeFunction isNativeFunction: (self at: #then))\x0a\x09ifTrue: [ ^ (TThenable >> #then:) sendTo: jsObject arguments: {aBlockOrArray} ]\x0a\x09ifFalse: [ ^ super then: aBlockOrArray ]",
referencedClasses: ["NativeFunction", "TThenable"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isNativeFunction:", "at:", "sendTo:arguments:", ">>", "then:"]
}),
$globals.JSObjectProxy);


$core.addMethod(
$core.method({
selector: "addObjectVariablesTo:ofProxy:",
protocol: "proxy",
fn: function (aDictionary,aProxy){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var jsObject = aProxy['@jsObject'];
		for(var i in jsObject) {
			aDictionary._at_put_(i, jsObject[i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addObjectVariablesTo:ofProxy:",{aDictionary:aDictionary,aProxy:aProxy},$globals.JSObjectProxy.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary", "aProxy"],
source: "addObjectVariablesTo: aDictionary ofProxy: aProxy\x0a\x09<inlineJS: '\x0a\x09\x09var jsObject = aProxy[''@jsObject''];\x0a\x09\x09for(var i in jsObject) {\x0a\x09\x09\x09aDictionary._at_put_(i, jsObject[i]);\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "compareJSObjectOfProxy:withProxy:",
protocol: "proxy",
fn: function (aProxy,anotherProxy){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	var anotherJSObject = anotherProxy.a$cls ? anotherProxy["@jsObject"] : anotherProxy;
	return aProxy["@jsObject"] === anotherJSObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compareJSObjectOfProxy:withProxy:",{aProxy:aProxy,anotherProxy:anotherProxy},$globals.JSObjectProxy.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProxy", "anotherProxy"],
source: "compareJSObjectOfProxy: aProxy withProxy: anotherProxy\x0a<inlineJS: '\x0a\x09var anotherJSObject = anotherProxy.a$cls ? anotherProxy[\x22@jsObject\x22] : anotherProxy;\x0a\x09return aProxy[\x22@jsObject\x22] === anotherJSObject\x0a'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "forwardMessage:withArguments:ofProxy:",
protocol: "proxy",
fn: function (aString,anArray,aProxy){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return $core.accessJavaScript(aProxy._jsObject(), aString, anArray);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forwardMessage:withArguments:ofProxy:",{aString:aString,anArray:anArray,aProxy:aProxy},$globals.JSObjectProxy.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anArray", "aProxy"],
source: "forwardMessage: aString withArguments: anArray ofProxy: aProxy\x0a\x09<inlineJS: '\x0a\x09\x09return $core.accessJavaScript(aProxy._jsObject(), aString, anArray);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "jsObject:ofProxy:",
protocol: "proxy",
fn: function (aJSObject,aProxy){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
aProxy['@jsObject'] = aJSObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsObject:ofProxy:",{aJSObject:aJSObject,aProxy:aProxy},$globals.JSObjectProxy.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject", "aProxy"],
source: "jsObject: aJSObject ofProxy: aProxy\x0a\x09<inlineJS: 'aProxy[''@jsObject''] = aJSObject'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "lookupProperty:ofProxy:",
protocol: "proxy",
fn: function (aString,aProxy){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aString in aProxy._jsObject() ? aString : nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupProperty:ofProxy:",{aString:aString,aProxy:aProxy},$globals.JSObjectProxy.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aProxy"],
source: "lookupProperty: aString ofProxy: aProxy\x0a\x09\x22Looks up a property in JS object.\x0a\x09Answer the property if it is present, or nil if it is not present.\x22\x0a\x09\x0a\x09<inlineJS: 'return aString in aProxy._jsObject() ? aString : nil'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "null",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return null;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"null",{},$globals.JSObjectProxy.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "null\x0a\x09<inlineJS: 'return null'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
fn: function (aJSObject){
var self=this,$self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
instance=$self._new();
$self._jsObject_ofProxy_(aJSObject,instance);
return instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aJSObject:aJSObject,instance:instance},$globals.JSObjectProxy.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "on: aJSObject\x0a\x09| instance |\x0a\x09instance := self new.\x0a\x09self jsObject: aJSObject ofProxy: instance.\x0a\x09^ instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "jsObject:ofProxy:"]
}),
$globals.JSObjectProxy.a$cls);

$core.addMethod(
$core.method({
selector: "undefined",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return undefined;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"undefined",{},$globals.JSObjectProxy.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "undefined\x0a\x09<inlineJS: 'return undefined'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy.a$cls);


$core.addClass("Organizer", $globals.Object, ["elements"], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Organizer.comment="I represent categorization information. \x0a\x0a## API\x0a\x0aUse `#addElement:` and `#removeElement:` to manipulate instances.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addElement:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._elements())._add_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addElement:",{anObject:anObject},$globals.Organizer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "addElement: anObject\x0a\x09self elements add: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "elements"]
}),
$globals.Organizer);

$core.addMethod(
$core.method({
selector: "elements",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@elements"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "elements\x0a\x09^ elements",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Organizer);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Organizer.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@elements"]=$recv($globals.Set)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Organizer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := Set new",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.Organizer);

$core.addMethod(
$core.method({
selector: "removeElement:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._elements())._remove_ifAbsent_(anObject,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeElement:",{anObject:anObject},$globals.Organizer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "removeElement: anObject\x0a\x09self elements remove: anObject ifAbsent: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "elements"]
}),
$globals.Organizer);



$core.addClass("ClassOrganizer", $globals.Organizer, ["traitOrBehavior"], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassOrganizer.comment="I am an organizer specific to classes. I hold method categorization information for classes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addElement:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.ClassOrganizer.superclass||$boot.nilAsClass).fn.prototype._addElement_.apply($self, [aString]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($globals.SystemAnnouncer)._current();
$3=$recv($globals.ProtocolAdded)._new();
$recv($3)._protocol_(aString);
$recv($3)._theClass_($self._theClass());
$2=$recv($3)._yourself();
$recv($1)._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addElement:",{aString:aString},$globals.ClassOrganizer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addElement: aString\x0a\x09super addElement: aString.\x0a\x0a\x09SystemAnnouncer current announce: (ProtocolAdded new\x0a\x09\x09protocol: aString;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ProtocolAdded"],
//>>excludeEnd("ide");
messageSends: ["addElement:", "announce:", "current", "protocol:", "new", "theClass:", "theClass", "yourself"]
}),
$globals.ClassOrganizer);

$core.addMethod(
$core.method({
selector: "removeElement:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.ClassOrganizer.superclass||$boot.nilAsClass).fn.prototype._removeElement_.apply($self, [aString]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($globals.SystemAnnouncer)._current();
$3=$recv($globals.ProtocolRemoved)._new();
$recv($3)._protocol_(aString);
$recv($3)._theClass_($self._theClass());
$2=$recv($3)._yourself();
$recv($1)._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeElement:",{aString:aString},$globals.ClassOrganizer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "removeElement: aString\x0a\x09super removeElement: aString.\x0a\x0a\x09SystemAnnouncer current announce: (ProtocolRemoved new\x0a\x09\x09protocol: aString;\x0a\x09\x09theClass: self theClass;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ProtocolRemoved"],
//>>excludeEnd("ide");
messageSends: ["removeElement:", "announce:", "current", "protocol:", "new", "theClass:", "theClass", "yourself"]
}),
$globals.ClassOrganizer);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@traitOrBehavior"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ traitOrBehavior",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassOrganizer);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: "accessing",
fn: function (aClass){
var self=this,$self=this;
$self["@traitOrBehavior"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09traitOrBehavior := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassOrganizer);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
fn: function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._theClass_(aClass);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aClass:aClass},$globals.ClassOrganizer.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "on: aClass\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass:", "new", "yourself"]
}),
$globals.ClassOrganizer.a$cls);


$core.addClass("PackageOrganizer", $globals.Organizer, [], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageOrganizer.comment="I am an organizer specific to packages. I hold classes categorization information.";
//>>excludeEnd("ide");


$core.addClass("Package", $globals.Object, ["evalBlock", "basicTransport", "name", "transport", "imports", "dirty", "organization"], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Package.comment="I am similar to a \x22class category\x22 typically found in other Smalltalks like Pharo or Squeak. Amber does not have class categories anymore, it had in the beginning but now each class in the system knows which package it belongs to.\x0a\x0aEach package has a name and can be queried for its classes, but it will then resort to a reverse scan of all classes to find them.\x0a\x0a## API\x0a\x0aPackages are manipulated through \x22Smalltalk current\x22, like for example finding one based on a name or with `Package class >> #name` directly:\x0a\x0a    Smalltalk current packageAt: 'Kernel'\x0a    Package named: 'Kernel'\x0a\x0aA package differs slightly from a Monticello package which can span multiple class categories using a naming convention based on hyphenation. But just as in Monticello a package supports \x22class extensions\x22 so a package can define behaviors in foreign classes using a naming convention for method categories where the category starts with an asterisk and then the name of the owning package follows.\x0a\x0aYou can fetch a package from the server:\x0a\x0a\x09Package load: 'Additional-Examples'";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "basicTransport",
protocol: "private",
fn: function (){
var self=this,$self=this;
return $self["@basicTransport"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicTransport\x0a\x09\x22Answer the transport literal JavaScript object as setup in the JavaScript file, if any\x22\x0a\x09\x0a\x09^ basicTransport",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "beClean",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$self["@dirty"]=false;
$1=$recv($globals.SystemAnnouncer)._current();
$3=$recv($globals.PackageClean)._new();
$recv($3)._package_(self);
$2=$recv($3)._yourself();
$recv($1)._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beClean",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beClean\x0a\x09dirty := false.\x0a\x09\x0a\x09SystemAnnouncer current announce: (PackageClean new\x0a\x09\x09package: self;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "PackageClean"],
//>>excludeEnd("ide");
messageSends: ["announce:", "current", "package:", "new", "yourself"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "beDirty",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$self["@dirty"]=true;
$1=$recv($globals.SystemAnnouncer)._current();
$3=$recv($globals.PackageDirty)._new();
$recv($3)._package_(self);
$2=$recv($3)._yourself();
$recv($1)._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beDirty",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beDirty\x0a\x09dirty := true.\x0a\x09\x0a\x09SystemAnnouncer current announce: (PackageDirty new\x0a\x09\x09package: self;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "PackageDirty"],
//>>excludeEnd("ide");
messageSends: ["announce:", "current", "package:", "new", "yourself"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "classTemplate",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._write_("Object subclass: #NameOfSubclass");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(stream)._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$recv(stream)._write_("instanceVariableNames: ''");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._lf();
$recv(stream)._tab();
$recv(stream)._write_("package: ");
return $recv(stream)._print_($self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classTemplate",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTemplate\x0a\x09^ String streamContents: [ :stream | stream\x0a\x09\x09write: 'Object subclass: #NameOfSubclass'; lf;\x0a\x09\x09tab; write: 'instanceVariableNames: '''''; lf;\x0a\x09\x09tab; write: 'package: '; print: self name ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "write:", "lf", "tab", "print:", "name"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "classes",
protocol: "classes",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._organization())._elements())._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09^ self organization elements copy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy", "elements", "organization"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($self._class())._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$recv(stream)._write_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(stream)._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$recv(stream)._write_("named: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._print_($self._name());
$recv(stream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$recv(stream)._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=2;
//>>excludeEnd("ctx");
$recv(stream)._write_(["imports: ",$self._importsDefinition()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
$recv(stream)._lf();
$recv(stream)._tab();
return $recv(stream)._write_(["transport: (",$recv($self._transport())._definition(),")"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream | stream\x0a\x09\x09write: self class name; lf;\x0a\x09\x09tab; write: 'named: '; print: self name; lf;\x0a\x09\x09tab; write: { 'imports: '. self importsDefinition }; lf;\x0a\x09\x09tab; write: { 'transport: ('. self transport definition. ')' } ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "write:", "name", "class", "lf", "tab", "print:", "importsDefinition", "definition", "transport"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "eval:",
protocol: "evaluating",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@evalBlock"];
if(($receiver = $1) == null || $receiver.a$nil){
return $recv($globals.Compiler)._eval_(aString);
} else {
return $recv($self["@evalBlock"])._value_(aString);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09^ evalBlock\x0a\x09\x09ifNotNil: [ evalBlock value: aString ]\x0a\x09\x09ifNil: [ Compiler eval: aString ]",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:ifNil:", "value:", "eval:"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "evalBlock",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@evalBlock"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "evalBlock\x0a\x09^ evalBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "evalBlock:",
protocol: "accessing",
fn: function (aBlock){
var self=this,$self=this;
$self["@evalBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "evalBlock: aBlock\x0a\x09evalBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "imports",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@imports"];
if(($receiver = $1) == null || $receiver.a$nil){
$self._imports_([]);
return $self["@imports"];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imports",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "imports\x0a\x09^ imports ifNil: [\x0a\x09\x09self imports: #().\x0a\x09\x09imports ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "imports:"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "imports:",
protocol: "accessing",
fn: function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._validateImports_(anArray);
$self["@imports"]=$recv(anArray)._asSet();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imports:",{anArray:anArray},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "imports: anArray\x0a\x09self validateImports: anArray.\x0a\x09imports := anArray asSet",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["validateImports:", "asSet"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "importsAsJson",
protocol: "converting",
fn: function (){
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
return $recv($recv($recv(each)._key()).__comma("=")).__comma($recv(each)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsAsJson",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "importsAsJson\x0a\x0a\x09^ self sortedImportsAsArray collect: [ :each |\x0a\x09\x09each isString\x0a\x09\x09\x09ifTrue: [ each ]\x0a\x09\x09\x09ifFalse: [ each key, '=', each value ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "sortedImportsAsArray", "ifTrue:ifFalse:", "isString", ",", "key", "value"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "importsDefinition",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._write_("{");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
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
return $recv(stream)._write_(". ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
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
}, function($ctx1) {$ctx1.fill(self,"importsDefinition",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "importsDefinition\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream write: '{'.\x0a\x09\x09self sortedImportsAsArray\x0a\x09\x09\x09do: [ :each | stream print: each ]\x0a\x09\x09\x09separatedBy: [ stream write: '. ' ].\x0a\x09\x09stream write: '}' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "write:", "do:separatedBy:", "sortedImportsAsArray", "print:"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "importsFromJson:",
protocol: "converting",
fn: function (anArray){
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
split;
$1=$recv($recv(split)._size()).__eq((1));
if($core.assert($1)){
return $recv(split)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["first"]=1;
//>>excludeEnd("ctx");
} else {
return $recv($recv(split)._first()).__minus_gt($recv(split)._second());
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,split:split},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"importsFromJson:",{anArray:anArray},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "importsFromJson: anArray\x0a\x09\x22Parses array of string, eg. #('asdf' 'qwer=tyuo')\x0a\x09into array of Strings and Associations,\x0a\x09eg. {'asdf'. 'qwer'->'tyuo'}\x22\x0a\x0a\x09^ anArray collect: [ :each |\x0a\x09\x09| split |\x0a\x09\x09split := each tokenize: '='.\x0a\x09\x09split size = 1\x0a\x09\x09\x09ifTrue: [ split first ]\x0a\x09\x09\x09ifFalse: [ split first -> split second ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "tokenize:", "ifTrue:ifFalse:", "=", "size", "first", "->", "second"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Package.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@organization"]=$recv($globals.PackageOrganizer)._new();
$self["@evalBlock"]=nil;
$self["@dirty"]=nil;
$self["@imports"]=nil;
$self["@transport"]=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09organization := PackageOrganizer new.\x0a\x09evalBlock := nil.\x0a\x09dirty := nil.\x0a\x09imports := nil.\x0a\x09transport := nil",
referencedClasses: ["PackageOrganizer"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "isDirty",
protocol: "testing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@dirty"];
if(($receiver = $1) == null || $receiver.a$nil){
return false;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDirty",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDirty\x0a\x09^ dirty ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "isPackage",
protocol: "testing",
fn: function (){
var self=this,$self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPackage\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "javaScriptDescriptor:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
var basicEval,basicImports;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
basicEval=$recv(anObject)._at_ifAbsent_("innerEval",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return nil._asJavaScriptObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
basicImports=$recv(anObject)._at_ifAbsent_("imports",(function(){
return [];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=2;
//>>excludeEnd("ctx");
$self["@basicTransport"]=$recv(anObject)._at_ifAbsent_("transport",(function(){

}));
$self._evalBlock_(basicEval);
$self._imports_($self._importsFromJson_(basicImports));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"javaScriptDescriptor:",{anObject:anObject,basicEval:basicEval,basicImports:basicImports},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "javaScriptDescriptor: anObject\x0a\x09| basicEval basicImports |\x0a\x0a\x09basicEval := (anObject at: 'innerEval' ifAbsent: [ nil asJavaScriptObject ]).\x0a\x09basicImports := (anObject at: 'imports' ifAbsent: [ #() ]).\x0a\x09basicTransport := (anObject at: 'transport' ifAbsent: []).\x0a\x09\x09\x09\x0a\x09self\x0a\x09\x09evalBlock: basicEval;\x0a\x09\x09imports: (self importsFromJson: basicImports)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "asJavaScriptObject", "evalBlock:", "imports:", "importsFromJson:"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "loadDependencies",
protocol: "dependencies",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"loadDependencies",{classes:classes,packages:packages},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadDependencies\x0a\x09\x22Returns list of packages that need to be loaded\x0a\x09before loading this package.\x22\x0a\x09\x0a\x09| classes packages |\x0a\x09classes := self loadDependencyClasses.\x0a\x09^ (classes collect: [ :each | each package ]) asSet\x0a\x09\x09remove: self ifAbsent: [];\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["loadDependencyClasses", "remove:ifAbsent:", "asSet", "collect:", "package", "yourself"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "loadDependencyClasses",
protocol: "dependencies",
fn: function (){
var self=this,$self=this;
var starCategoryName;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$7,$6,$4,$receiver;
starCategoryName="*".__comma($self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$3=$self._classes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["classes"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._asSet();
$recv($1)._addAll_($recv($recv($globals.Smalltalk)._classes())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(each)._protocols();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["protocols"]=1;
//>>excludeEnd("ctx");
$7=$recv(each)._theMetaClass();
if(($receiver = $7) == null || $receiver.a$nil){
$6=[];
} else {
var meta;
meta=$receiver;
$6=$recv(meta)._protocols();
}
$4=$recv($5).__comma($6);
return $recv($4)._includes_(starCategoryName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addAll:"]=1;
//>>excludeEnd("ctx");
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
}, function($ctx1) {$ctx1.fill(self,"loadDependencyClasses",{starCategoryName:starCategoryName},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadDependencyClasses\x0a\x09\x22Returns classes needed at the time of loading a package.\x0a\x09These are all that are used to subclass\x0a\x09and to define an extension method\x0a\x09as well as all traits used\x22\x0a\x09\x0a\x09| starCategoryName |\x0a\x09starCategoryName := '*', self name.\x0a\x09^ (self classes collect: [ :each | each superclass ]) asSet\x0a\x09\x09addAll: (Smalltalk classes select: [ :each |\x0a\x09\x09\x09each protocols, (each theMetaClass ifNil: [ #() ] ifNotNil: [ :meta | meta protocols])\x0a\x09\x09\x09\x09includes: starCategoryName ]);\x0a\x09\x09addAll: (Array streamContents: [ :as | self traitCompositions valuesDo: [ :each | as write: (each collect: [ :eachTT | eachTT trait ])]]);\x0a\x09\x09remove: nil ifAbsent: [];\x0a\x09\x09yourself",
referencedClasses: ["Smalltalk", "Array"],
//>>excludeEnd("ide");
messageSends: [",", "name", "addAll:", "asSet", "collect:", "classes", "superclass", "select:", "includes:", "protocols", "ifNil:ifNotNil:", "theMetaClass", "streamContents:", "valuesDo:", "traitCompositions", "write:", "trait", "remove:ifAbsent:", "yourself"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@name"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "name:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
$self["@name"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "organization",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@organization"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "organization\x0a\x09^ organization",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
fn: function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Package.superclass||$boot.nilAsClass).fn.prototype._printOn_.apply($self, [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aStream)._nextPutAll_(" (");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream \x0a\x09\x09nextPutAll: ' (';\x0a\x09\x09nextPutAll: self name;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", "name"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "setupClasses",
protocol: "classes",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"setupClasses",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupClasses\x0a\x09self classes do: [ :each | each initialize ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "classes", "initialize"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "sortedClasses",
protocol: "classes",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._sortedClasses_($self._classes());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortedClasses",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sortedClasses\x0a\x09\x22Answer all classes in the receiver, sorted by superclass/subclasses and by class name for common subclasses (Issue #143).\x22\x0a\x0a\x09^ self class sortedClasses: self classes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sortedClasses:", "class", "classes"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "sortedImportsAsArray",
protocol: "private",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1,$6,$5,$7;
return $recv($recv($self._imports())._asArray())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(a)._isString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._not();
$4=$recv(b)._isString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isString"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__and($4);
return $recv($1)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$6=$recv(a)._isString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["isString"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__eq($recv(b)._isString());
return $recv($5)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$7=$recv(a)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["value"]=1;
//>>excludeEnd("ctx");
return $recv($7).__lt_eq($recv(b)._value());
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
}, function($ctx1) {$ctx1.fill(self,"sortedImportsAsArray",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sortedImportsAsArray\x0a\x09\x22Answer imports sorted first by type (associations first),\x0a\x09then by value\x22\x0a\x0a\x09^ self imports asArray\x0a\x09\x09sorted: [ :a :b |\x0a\x09\x09\x09a isString not & b isString or: [\x0a\x09\x09\x09\x09a isString = b isString and: [\x0a\x09\x09\x09\x09\x09a value <= b value ]]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sorted:", "asArray", "imports", "or:", "&", "not", "isString", "and:", "=", "<=", "value"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "traitCompositions",
protocol: "dependencies",
fn: function (){
var self=this,$self=this;
var traitCompositions;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
traitCompositions=$recv($globals.Dictionary)._new();
$recv($self._classes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=traitCompositions;
$2=$recv(each)._traitComposition();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["traitComposition"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_(each,$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$3=$recv(each)._theMetaClass();
if(($receiver = $3) == null || $receiver.a$nil){
return $3;
} else {
var meta;
meta=$receiver;
return $recv(traitCompositions)._at_put_(meta,$recv(meta)._traitComposition());
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
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
}, function($ctx1) {$ctx1.fill(self,"traitCompositions",{traitCompositions:traitCompositions},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "traitCompositions\x0a\x09| traitCompositions |\x0a\x09traitCompositions := Dictionary new.\x0a\x09self classes do: [ :each |\x0a\x09\x09traitCompositions at: each put: each traitComposition.\x0a\x09\x09each theMetaClass ifNotNil: [ :meta | traitCompositions at: meta put: meta traitComposition ] ].\x0a\x09^ traitCompositions reject: [ :each | each isEmpty ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "classes", "at:put:", "traitComposition", "ifNotNil:", "theMetaClass", "reject:", "isEmpty"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "transport",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@transport"];
if(($receiver = $1) == null || $receiver.a$nil){
$self._transport_($recv($globals.PackageTransport)._fromJson_($self._basicTransport()));
return $self["@transport"];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transport",{},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transport\x0a\x09^ transport ifNil: [ \x0a\x09\x09self transport: (PackageTransport fromJson: self basicTransport).\x0a\x09\x09transport ]",
referencedClasses: ["PackageTransport"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "transport:", "fromJson:", "basicTransport"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "transport:",
protocol: "accessing",
fn: function (aPackageTransport){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@transport"]=aPackageTransport;
$recv(aPackageTransport)._package_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transport:",{aPackageTransport:aPackageTransport},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageTransport"],
source: "transport: aPackageTransport\x0a\x09transport := aPackageTransport.\x0a\x09aPackageTransport package: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["package:"]
}),
$globals.Package);

$core.addMethod(
$core.method({
selector: "validateImports:",
protocol: "validation",
fn: function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$3,$6;
$recv(aCollection)._do_((function(import_){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(import_)._isString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isString"]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
$2=$recv(import_)._respondsTo_("key");
if(!$core.assert($2)){
$self._error_("Imports must be Strings or Associations");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["error:"]=1;
//>>excludeEnd("ctx");
}
$5=$recv(import_)._key();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["key"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._isString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isString"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__and($recv($recv(import_)._value())._isString());
if(!$core.assert($3)){
$self._error_("Key and value must be Strings");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["error:"]=2;
//>>excludeEnd("ctx");
}
$6=$recv($recv(import_)._key())._match_("^[a-zA-Z][a-zA-Z0-9]*$");
if(!$core.assert($6)){
return $self._error_("Keys must be identifiers");
}
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({import_:import_},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"validateImports:",{aCollection:aCollection},$globals.Package)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "validateImports: aCollection\x0a\x0a\x09aCollection do: [ :import |\x0a\x09\x09import isString ifFalse: [\x0a\x09\x09\x09(import respondsTo: #key) ifFalse: [\x0a\x09\x09\x09\x09self error: 'Imports must be Strings or Associations' ].\x0a\x09\x09\x09import key isString & import value isString ifFalse: [\x0a\x09\x09\x09\x09self error: 'Key and value must be Strings' ].\x0a\x09\x09\x09(import key match: '^[a-zA-Z][a-zA-Z0-9]*$') ifFalse: [\x0a\x09\x09\x09\x09self error: 'Keys must be identifiers' ]]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifFalse:", "isString", "respondsTo:", "error:", "&", "key", "value", "match:"]
}),
$globals.Package);


$globals.Package.a$cls.iVarNames = ["defaultCommitPathJs", "defaultCommitPathSt"];
$core.addMethod(
$core.method({
selector: "named:",
protocol: "accessing",
fn: function (aPackageName){
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
}, function($ctx1) {$ctx1.fill(self,"named:",{aPackageName:aPackageName},$globals.Package.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName"],
source: "named: aPackageName\x0a\x09^ Smalltalk \x0a\x09\x09packageAt: aPackageName\x0a\x09\x09ifAbsent: [ \x0a\x09\x09\x09Smalltalk createPackage: aPackageName ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["packageAt:ifAbsent:", "createPackage:"]
}),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "named:ifAbsent:",
protocol: "accessing",
fn: function (aPackageName,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._packageAt_ifAbsent_(aPackageName,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:ifAbsent:",{aPackageName:aPackageName,aBlock:aBlock},$globals.Package.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aBlock"],
source: "named: aPackageName ifAbsent: aBlock\x0a\x09^ Smalltalk packageAt: aPackageName ifAbsent: aBlock",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["packageAt:ifAbsent:"]
}),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "named:imports:transport:",
protocol: "accessing",
fn: function (aPackageName,anArray,aTransport){
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
}, function($ctx1) {$ctx1.fill(self,"named:imports:transport:",{aPackageName:aPackageName,anArray:anArray,aTransport:aTransport,pkg:pkg},$globals.Package.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "anArray", "aTransport"],
source: "named: aPackageName imports: anArray transport: aTransport\x0a\x09| pkg |\x0a\x09\x0a\x09pkg := self named: aPackageName.\x0a\x09pkg imports: anArray.\x0a\x09pkg transport: aTransport.\x0a\x09\x0a\x09^ pkg",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["named:", "imports:", "transport:"]
}),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "named:javaScriptDescriptor:",
protocol: "instance creation",
fn: function (aString,anObject){
var self=this,$self=this;
var pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
pkg=$recv($globals.Smalltalk)._createPackage_(aString);
$recv(pkg)._javaScriptDescriptor_(anObject);
return pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:javaScriptDescriptor:",{aString:aString,anObject:anObject,pkg:pkg},$globals.Package.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "named: aString javaScriptDescriptor: anObject\x0a\x09| pkg |\x0a\x09\x0a\x09pkg := Smalltalk createPackage: aString.\x0a\x09pkg javaScriptDescriptor: anObject.\x0a\x09^ pkg",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["createPackage:", "javaScriptDescriptor:"]
}),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "named:transport:",
protocol: "accessing",
fn: function (aPackageName,aTransport){
var self=this,$self=this;
var pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
pkg=$self._named_(aPackageName);
$recv(pkg)._transport_(aTransport);
return pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:transport:",{aPackageName:aPackageName,aTransport:aTransport,pkg:pkg},$globals.Package.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aTransport"],
source: "named: aPackageName transport: aTransport\x0a\x09| pkg |\x0a\x09\x0a\x09pkg := self named: aPackageName.\x0a\x09pkg transport: aTransport.\x0a\x09\x0a\x09^ pkg",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["named:", "transport:"]
}),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "new:",
protocol: "instance creation",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Package)._new();
$recv($1)._name_(aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{aString:aString},$globals.Package.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "new: aString\x0a\x09^ Package new\x0a\x09\x09name: aString;\x0a\x09\x09yourself",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
messageSends: ["name:", "new", "yourself"]
}),
$globals.Package.a$cls);

$core.addMethod(
$core.method({
selector: "sortedClasses:",
protocol: "sorting",
fn: function (classes){
var self=this,$self=this;
var children,others,nodes,expandedClasses;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
children=[];
others=[];
$recv(classes)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(classes)._includes_($recv(each)._superclass());
if($core.assert($1)){
return $recv(others)._add_(each);
} else {
return $recv(children)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
nodes=$recv(children)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.ClassSorterNode)._on_classes_level_(each,others,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
nodes=$recv(nodes)._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(a)._theClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["theClass"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($2).__lt_eq($recv($recv(b)._theClass())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,5)});
//>>excludeEnd("ctx");
}));
expandedClasses=$recv($globals.Array)._new();
$recv(nodes)._do_((function(aNode){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aNode)._traverseClassesWith_(expandedClasses);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1,6)});
//>>excludeEnd("ctx");
}));
return expandedClasses;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortedClasses:",{classes:classes,children:children,others:others,nodes:nodes,expandedClasses:expandedClasses},$globals.Package.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["classes"],
source: "sortedClasses: classes\x0a\x09\x22Answer classes, sorted by superclass/subclasses and by class name for common subclasses (Issue #143)\x22\x0a\x0a\x09| children others nodes expandedClasses |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09classes do: [ :each |\x0a\x09\x09(classes includes: each superclass)\x0a\x09\x09\x09ifFalse: [ children add: each ]\x0a\x09\x09\x09ifTrue: [ others add: each ]].\x0a\x09nodes := children collect: [ :each |\x0a\x09\x09ClassSorterNode on: each classes: others level: 0 ].\x0a\x09nodes := nodes sorted: [ :a :b | a theClass name <= b theClass name ].\x0a\x09expandedClasses := Array new.\x0a\x09nodes do: [ :aNode |\x0a\x09\x09aNode traverseClassesWith: expandedClasses ].\x0a\x09^ expandedClasses",
referencedClasses: ["ClassSorterNode", "Array"],
//>>excludeEnd("ide");
messageSends: ["do:", "ifFalse:ifTrue:", "includes:", "superclass", "add:", "collect:", "on:classes:level:", "sorted:", "<=", "name", "theClass", "new", "traverseClassesWith:"]
}),
$globals.Package.a$cls);


$core.addClass("PackageStateObserver", $globals.Object, [], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageStateObserver.comment="My current instance listens for any changes in the system that might affect the state of a package (being dirty).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announcer",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.SystemAnnouncer)._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ SystemAnnouncer current",
referencedClasses: ["SystemAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "observeSystem",
protocol: "actions",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._announcer();
$recv($1)._on_send_to_($globals.PackageAdded,"onPackageAdded:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($globals.ClassAnnouncement,"onClassModification:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=2;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($globals.MethodAnnouncement,"onMethodModification:",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:send:to:"]=3;
//>>excludeEnd("ctx");
$recv($1)._on_send_to_($globals.ProtocolAnnouncement,"onProtocolModification:",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeSystem",{},$globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeSystem\x0a\x09self announcer\x0a\x09\x09on: PackageAdded\x0a\x09\x09send: #onPackageAdded:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ClassAnnouncement\x0a\x09\x09send: #onClassModification:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: MethodAnnouncement\x0a\x09\x09send: #onMethodModification:\x0a\x09\x09to: self;\x0a\x09\x09\x0a\x09\x09on: ProtocolAnnouncement\x0a\x09\x09send: #onProtocolModification:\x0a\x09\x09to: self",
referencedClasses: ["PackageAdded", "ClassAnnouncement", "MethodAnnouncement", "ProtocolAnnouncement"],
//>>excludeEnd("ide");
messageSends: ["on:send:to:", "announcer"]
}),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "onClassModification:",
protocol: "reactions",
fn: function (anAnnouncement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(anAnnouncement)._theClass();
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
var theClass;
theClass=$receiver;
$recv($recv(theClass)._package())._beDirty();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClassModification:",{anAnnouncement:anAnnouncement},$globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onClassModification: anAnnouncement\x0a\x09anAnnouncement theClass ifNotNil: [ :theClass | theClass package beDirty ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "theClass", "beDirty", "package"]
}),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "onMethodModification:",
protocol: "reactions",
fn: function (anAnnouncement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv($recv(anAnnouncement)._method())._package();
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
var package_;
package_=$receiver;
$recv(package_)._beDirty();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMethodModification:",{anAnnouncement:anAnnouncement},$globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onMethodModification: anAnnouncement\x0a\x09anAnnouncement method package ifNotNil: [ :package | package beDirty ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "package", "method", "beDirty"]
}),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "onPackageAdded:",
protocol: "reactions",
fn: function (anAnnouncement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(anAnnouncement)._package())._beDirty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPackageAdded:",{anAnnouncement:anAnnouncement},$globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onPackageAdded: anAnnouncement\x0a\x09anAnnouncement package beDirty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["beDirty", "package"]
}),
$globals.PackageStateObserver);

$core.addMethod(
$core.method({
selector: "onProtocolModification:",
protocol: "reactions",
fn: function (anAnnouncement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(anAnnouncement)._package();
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
var package_;
package_=$receiver;
$recv(package_)._beDirty();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onProtocolModification:",{anAnnouncement:anAnnouncement},$globals.PackageStateObserver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "onProtocolModification: anAnnouncement\x0a\x09anAnnouncement package ifNotNil: [ :package | package beDirty ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "package", "beDirty"]
}),
$globals.PackageStateObserver);


$globals.PackageStateObserver.a$cls.iVarNames = ["current"];
$core.addMethod(
$core.method({
selector: "current",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@current"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@current"]=$self._new();
return $self["@current"];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.PackageStateObserver.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.PackageStateObserver.a$cls);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._current())._observeSystem();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PackageStateObserver.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self current observeSystem",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["observeSystem", "current"]
}),
$globals.PackageStateObserver.a$cls);


$core.addClass("ParseError", $globals.Error, [], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ParseError.comment="Instance of ParseError are signaled on any parsing error.\x0aSee `Smalltalk >> #parse:`";
//>>excludeEnd("ide");


$core.addClass("Setting", $globals.Object, ["key", "value", "defaultValue"], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Setting.comment="I represent a setting **stored** at `Smalltalk settings`. \x0aIn the current implementation, `Smalltalk settings` is an object persisted in the localStorage.\x0a\x0a## API\x0a\x0aA `Setting` value can be read using `value` and set using `value:`.\x0a\x0aSettings are accessed with `'key' asSetting` or `'key' asSettingIfAbsent: aDefaultValue`.\x0a\x0aTo read the value of a setting you can also use the convenience:\x0a\x0a`theValueSet :=  'any.characteristic' settingValue` \x0a\x0aor with a default using:\x0a\x0a `theEnsuredValueSet := 'any.characteristic' settingValueIfAbsent: true`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "defaultValue",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@defaultValue"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultValue\x0a\x09^ defaultValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "defaultValue:",
protocol: "accessing",
fn: function (aStringifiableObject){
var self=this,$self=this;
$self["@defaultValue"]=aStringifiableObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStringifiableObject"],
source: "defaultValue: aStringifiableObject\x0a\x09defaultValue := aStringifiableObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "key",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@key"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ key",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "key:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
$self["@key"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "key: aString\x0a\x09key := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "value",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"value",{},$globals.Setting)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ Smalltalk settings at: self key ifAbsent: [ self defaultValue ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "settings", "key", "defaultValue"]
}),
$globals.Setting);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "accessing",
fn: function (aStringifiableObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Smalltalk)._settings())._at_put_($self._key(),aStringifiableObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{aStringifiableObject:aStringifiableObject},$globals.Setting)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStringifiableObject"],
source: "value: aStringifiableObject\x0a\x09^ Smalltalk settings at: self key put: aStringifiableObject",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "settings", "key"]
}),
$globals.Setting);


$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: "instance creation",
fn: function (aString,aDefaultValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Setting.a$cls.superclass||$boot.nilAsClass).fn.prototype._new.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($1)._key_(aString);
$recv($1)._defaultValue_(aDefaultValue);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aString:aString,aDefaultValue:aDefaultValue},$globals.Setting.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aDefaultValue"],
source: "at: aString ifAbsent: aDefaultValue\x0a\x09\x0a\x09^ super new\x0a\x09\x09key: aString;\x0a\x09\x09defaultValue: aDefaultValue;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["key:", "new", "defaultValue:", "yourself"]
}),
$globals.Setting.a$cls);

$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.Setting.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.Setting.a$cls);


$core.addClass("SmalltalkImage", $globals.Object, ["globalJsVariables", "packageDictionary"], "Kernel-Infrastructure");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SmalltalkImage.comment="I represent the Smalltalk system, wrapping\x0aoperations of variable `$core` declared in `support/boot.js`.\x0a\x0a## API\x0a\x0aI have only one instance, accessed with global variable `Smalltalk`.\x0a\x0a## Classes\x0a\x0aClasses can be accessed using the following methods:\x0a\x0a- `#classes` answers the full list of Smalltalk classes in the system\x0a- `#globals #at:` answers a specific global (usually, a class) or `nil`\x0a\x0a## Packages\x0a\x0aPackages can be accessed using the following methods:\x0a\x0a- `#packages` answers the full list of packages\x0a- `#packageAt:` answers a specific package or `nil`\x0a\x0a## Parsing\x0a\x0aThe `#parse:` method is used to parse Amber source code.\x0aIt requires the `Compiler` package and the `support/parser.js` parser file in order to work.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addGlobalJsVariable:",
protocol: "globals",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._globalJsVariables())._add_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addGlobalJsVariable:",{aString:aString},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addGlobalJsVariable: aString\x0a\x09self globalJsVariables add: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "globalJsVariables"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "adoptPackageDictionary",
protocol: "private",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._core())._packageDescriptors())._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Package)._named_javaScriptDescriptor_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"adoptPackageDictionary",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "adoptPackageDictionary\x0a\x09self core packageDescriptors keysAndValuesDo: [ :key :value | Package named: key javaScriptDescriptor: value ]",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "packageDescriptors", "core", "named:javaScriptDescriptor:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "amdRequire",
protocol: "accessing amd",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._core())._at_("amdRequire");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"amdRequire",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "amdRequire\x0a\x09^ self core at: 'amdRequire'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "core"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "asSmalltalkException:",
protocol: "error handling",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._isSmalltalkObject_(anObject))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anObject)._isKindOf_($globals.Error);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return anObject;
} else {
return $recv($globals.JavaScriptException)._on_(anObject);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSmalltalkException:",{anObject:anObject},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asSmalltalkException: anObject\x0a\x09\x22A JavaScript exception may be thrown.\x0a\x09We then need to convert it back to a Smalltalk object\x22\x0a\x09\x0a\x09^ ((self isSmalltalkObject: anObject) and: [ anObject isKindOf: Error ])\x0a\x09\x09ifTrue: [ anObject ]\x0a\x09\x09ifFalse: [ JavaScriptException on: anObject ]",
referencedClasses: ["Error", "JavaScriptException"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "isSmalltalkObject:", "isKindOf:", "on:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "basicCreatePackage:",
protocol: "private",
fn: function (packageName){
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
}, function($ctx1) {$ctx1.fill(self,"basicCreatePackage:",{packageName:packageName},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "basicCreatePackage: packageName\x0a\x09\x22Create and bind a new bare package with given name and return it.\x22\x0a\x09^ self packageDictionary at: packageName ifAbsentPut: [ Package new: packageName ]",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsentPut:", "packageDictionary", "new:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "basicParse:",
protocol: "private",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.SmalltalkParser)._parse_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicParse:",{aString:aString},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicParse: aString\x0a\x09^ SmalltalkParser parse: aString",
referencedClasses: ["SmalltalkParser"],
//>>excludeEnd("ide");
messageSends: ["parse:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "cancelOptOut:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
delete anObject.klass; delete anObject.a$cls;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cancelOptOut:",{anObject:anObject},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "cancelOptOut: anObject\x0a\x09\x22A Smalltalk object has a 'a$cls' property.\x0a\x09If this property is shadowed for anObject by optOut:,\x0a\x09the object is treated as plain JS object.\x0a\x09This removes the shadow and anObject is Smalltalk object\x0a\x09again if it was before.\x22\x0a\x09\x0a\x09<inlineJS: 'delete anObject.klass; delete anObject.a$cls;'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "classes",
protocol: "classes",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._core())._traitsOrClasses())._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09^ self core traitsOrClasses copy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy", "traitsOrClasses", "core"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "core",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"core",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "core\x0a\x09<inlineJS: 'return $core'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "createPackage:",
protocol: "packages",
fn: function (packageName){
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
}, function($ctx1) {$ctx1.fill(self,"createPackage:",{packageName:packageName,package_:package_,announcement:announcement},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "createPackage: packageName\x0a\x09| package announcement |\x0a\x09\x0a\x09package := self basicCreatePackage: packageName.\x0a\x09\x0a\x09announcement := PackageAdded new\x0a\x09\x09package: package;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09SystemAnnouncer current announce: announcement.\x0a\x09\x0a\x09^ package",
referencedClasses: ["PackageAdded", "SystemAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["basicCreatePackage:", "package:", "new", "yourself", "announce:", "current"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "defaultAmdNamespace",
protocol: "accessing amd",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return "transport.defaultAmdNamespace"._settingValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultAmdNamespace",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultAmdNamespace\x0a\x09^ 'transport.defaultAmdNamespace' settingValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["settingValue"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "defaultAmdNamespace:",
protocol: "accessing amd",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
"transport.defaultAmdNamespace"._settingValue_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultAmdNamespace:",{aString:aString},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "defaultAmdNamespace: aString\x0a\x09'transport.defaultAmdNamespace' settingValue: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["settingValue:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "deleteClass:",
protocol: "private",
fn: function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.removeClass(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deleteClass:",{aClass:aClass},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "deleteClass: aClass\x0a\x09\x22Deletes a class by deleting its binding only. Use #removeClass instead\x22\x0a\x09\x0a\x09<inlineJS: '$core.removeClass(aClass)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "deleteGlobalJsVariable:",
protocol: "globals",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._globalJsVariables())._remove_ifAbsent_(aString,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deleteGlobalJsVariable:",{aString:aString},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "deleteGlobalJsVariable: aString\x0a\x09self globalJsVariables remove: aString ifAbsent:[]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "globalJsVariables"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "existsJsGlobal:",
protocol: "testing",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._deprecatedAPI_("Use Platform >> includesGlobal: instead");
return $recv($globals.Platform)._includesGlobal_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"existsJsGlobal:",{aString:aString},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "existsJsGlobal: aString\x0a\x09self deprecatedAPI: 'Use Platform >> includesGlobal: instead'.\x0a\x09^ Platform includesGlobal: aString",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI:", "includesGlobal:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "globalJsVariables",
protocol: "globals",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@globalJsVariables"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@globalJsVariables"]=["window", "document", "process", "global"];
return $self["@globalJsVariables"];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globalJsVariables",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globalJsVariables\x0a\x09^ globalJsVariables ifNil: [\x0a\x09\x09globalJsVariables := #(window document process global) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "globals",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $globals;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globals",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09<inlineJS: 'return $globals'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "includesKey:",
protocol: "accessing",
fn: function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.hasOwnProperty(aKey);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "includesKey: aKey\x0a\x09<inlineJS: 'return $core.hasOwnProperty(aKey)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "isSmalltalkObject:",
protocol: "testing",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return anObject.a$cls != null;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSmalltalkObject:",{anObject:anObject},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isSmalltalkObject: anObject\x0a\x09\x22Consider anObject a Smalltalk object if it has a 'a$cls' property.\x0a\x09Note that this may be unaccurate\x22\x0a\x09\x0a\x09<inlineJS: 'return anObject.a$cls != null'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "optOut:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
anObject.klass = null; anObject.a$cls = null;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"optOut:",{anObject:anObject},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "optOut: anObject\x0a\x09\x22A Smalltalk object has a 'a$cls' property.\x0a\x09This shadows the property for anObject.\x0a\x09The object is treated as plain JS object following this.\x22\x0a\x09\x0a\x09<inlineJS: 'anObject.klass = null; anObject.a$cls = null'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "packageAt:",
protocol: "packages",
fn: function (packageName){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._deprecatedAPI_("Use #packageAt:ifAbsent: directly.");
return $self._packageAt_ifAbsent_(packageName,(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageAt:",{packageName:packageName},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "packageAt: packageName\x0a\x09self deprecatedAPI: 'Use #packageAt:ifAbsent: directly.'.\x0a\x09^ self packageAt: packageName ifAbsent: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deprecatedAPI:", "packageAt:ifAbsent:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "packageAt:ifAbsent:",
protocol: "packages",
fn: function (packageName,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._packageDictionary())._at_ifAbsent_(packageName,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageAt:ifAbsent:",{packageName:packageName,aBlock:aBlock},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName", "aBlock"],
source: "packageAt: packageName ifAbsent: aBlock\x0a\x09^ self packageDictionary at: packageName ifAbsent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "packageDictionary"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "packageAt:ifPresent:",
protocol: "packages",
fn: function (packageName,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._packageDictionary())._at_ifPresent_(packageName,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageAt:ifPresent:",{packageName:packageName,aBlock:aBlock},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName", "aBlock"],
source: "packageAt: packageName ifPresent: aBlock\x0a\x09^ self packageDictionary at: packageName ifPresent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:", "packageDictionary"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "packageDictionary",
protocol: "packages",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@packageDictionary"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@packageDictionary"]=$recv($globals.Dictionary)._new();
return $self["@packageDictionary"];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageDictionary",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packageDictionary\x0a\x09^ packageDictionary ifNil: [ packageDictionary := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "packages",
protocol: "packages",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._packageDictionary())._values())._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packages",{},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packages\x0a\x09\x22Return all Package instances in the system.\x22\x0a\x0a\x09^ self packageDictionary values copy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy", "values", "packageDictionary"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "parse:",
protocol: "accessing",
fn: function (aString){
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
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString,result:result},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parse: aString\x0a\x09| result |\x0a\x09\x0a\x09[ result := self basicParse: aString ] \x0a\x09\x09tryCatch: [ :ex | (self parseError: ex parsing: aString) signal ].\x0a\x09\x09\x0a\x09^ result\x0a\x09\x09source: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tryCatch:", "basicParse:", "signal", "parseError:parsing:", "source:", "yourself"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "parseError:parsing:",
protocol: "error handling",
fn: function (anException,aString){
var self=this,$self=this;
var pos;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$6,$5,$4,$3;
$1=$recv(anException)._basicAt_("location");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicAt:"]=1;
//>>excludeEnd("ctx");
pos=$recv($1)._start();
$2=$recv($globals.ParseError)._new();
$6=$recv("Parse error on line ".__comma($recv(pos)._line())).__comma(" column ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$5=$recv($6).__comma($recv(pos)._column());
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
return $recv($2)._messageText_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseError:parsing:",{anException:anException,aString:aString,pos:pos},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anException", "aString"],
source: "parseError: anException parsing: aString\x0a\x09| pos |\x0a\x09pos := (anException basicAt: 'location') start.\x0a\x09^ ParseError new messageText: 'Parse error on line ', pos line ,' column ' , pos column ,' : Unexpected character ', (anException basicAt: 'found')",
referencedClasses: ["ParseError"],
//>>excludeEnd("ide");
messageSends: ["start", "basicAt:", "messageText:", "new", ",", "line", "column"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "pseudoVariableNames",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return ["self", "super", "nil", "true", "false", "thisContext"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pseudoVariableNames\x0a\x09^ #('self' 'super' 'nil' 'true' 'false' 'thisContext')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "readJSObject:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.readJSObject(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readJSObject:",{anObject:anObject},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "readJSObject: anObject\x0a\x09<inlineJS: 'return $core.readJSObject(anObject)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "removeClass:",
protocol: "classes",
fn: function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$6,$3,$7,$8,$10,$9,$receiver;
$1=$recv(aClass)._isMetaclass();
if($core.assert($1)){
$2=$recv($recv(aClass)._asString()).__comma(" is a Metaclass and cannot be removed!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._error_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["error:"]=1;
//>>excludeEnd("ctx");
}
$recv(aClass)._allSubclassesDo_((function(subclass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(aClass)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__comma(" has a subclass: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$6=$recv(subclass)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
return $self._error_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["error:"]=2;
//>>excludeEnd("ctx");
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
$recv(aClass)._setTraitComposition_([]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["setTraitComposition:"]=1;
//>>excludeEnd("ctx");
$7=$recv(aClass)._theMetaClass();
if(($receiver = $7) == null || $receiver.a$nil){
$7;
} else {
var meta;
meta=$receiver;
$recv(meta)._setTraitComposition_([]);
}
$8=$recv($globals.SystemAnnouncer)._current();
$10=$recv($globals.ClassRemoved)._new();
$recv($10)._theClass_(aClass);
$9=$recv($10)._yourself();
$recv($8)._announce_($9);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "removeClass: aClass\x0a\x09aClass isMetaclass ifTrue: [ self error: aClass asString, ' is a Metaclass and cannot be removed!' ].\x0a\x09aClass allSubclassesDo: [ :subclass | self error: aClass name, ' has a subclass: ', subclass name ].\x0a\x09aClass traitUsers ifNotEmpty: [ self error: aClass name, ' has trait users.' ].\x0a\x09\x0a\x09self deleteClass: aClass.\x0a\x09aClass setTraitComposition: #().\x0a\x09aClass theMetaClass ifNotNil: [ :meta | meta setTraitComposition: #() ].\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassRemoved new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassRemoved"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isMetaclass", "error:", ",", "asString", "allSubclassesDo:", "name", "ifNotEmpty:", "traitUsers", "deleteClass:", "setTraitComposition:", "ifNotNil:", "theMetaClass", "announce:", "current", "theClass:", "new", "yourself"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "removePackage:",
protocol: "packages",
fn: function (packageName){
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
}, function($ctx1) {$ctx1.fill(self,"removePackage:",{packageName:packageName,pkg:pkg},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName"],
source: "removePackage: packageName\x0a\x09\x22Removes a package and all its classes.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].\x0a\x09pkg classes do: [ :each |\x0a\x09\x09\x09self removeClass: each ].\x0a\x09self packageDictionary removeKey: packageName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["packageAt:ifAbsent:", "error:", ",", "do:", "classes", "removeClass:", "removeKey:", "packageDictionary"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "renamePackage:to:",
protocol: "packages",
fn: function (packageName,newName){
var self=this,$self=this;
var pkg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
pkg=$self._packageAt_ifAbsent_(packageName,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1="Missing package: ".__comma(packageName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $self._error_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["error:"]=1;
//>>excludeEnd("ctx");
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
$2=pkg;
$recv($2)._name_(newName);
$recv($2)._beDirty();
$3=$self._packageDictionary();
$recv($3)._at_put_(newName,pkg);
$recv($3)._removeKey_(packageName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renamePackage:to:",{packageName:packageName,newName:newName,pkg:pkg},$globals.SmalltalkImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["packageName", "newName"],
source: "renamePackage: packageName to: newName\x0a\x09\x22Rename a package.\x22\x0a\x0a\x09| pkg |\x0a\x09pkg := self packageAt: packageName ifAbsent: [ self error: 'Missing package: ', packageName ].\x0a\x09self packageAt: newName ifPresent: [ self error: 'Already exists a package called: ', newName ].\x0a\x09pkg name: newName; beDirty.\x0a\x09self packageDictionary\x0a\x09\x09at: newName put: pkg;\x0a\x09\x09removeKey: packageName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["packageAt:ifAbsent:", "error:", ",", "packageAt:ifPresent:", "name:", "beDirty", "at:put:", "packageDictionary", "removeKey:"]
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "reservedWords",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return ["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "return", "super", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "yield", "let", "static", "arguments", "await", "enum", "implements", "interface", "package", "private", "protected", "public"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reservedWords\x0a\x09^ #(\x0a\x09\x09\x22http://www.ecma-international.org/ecma-262/6.0/#sec-keywords\x22\x0a\x09\x09break case catch class const continue debugger\x0a\x09\x09default delete do else export extends finally\x0a\x09\x09for function if import in instanceof new\x0a\x09\x09return super switch this throw try typeof\x0a\x09\x09var void while with yield\x0a\x09\x09\x22in strict mode\x22\x0a\x09\x09let static\x0a\x09\x09\x22Amber protected words: these should not be compiled as-is when in code\x22\x0a\x09\x09arguments\x0a\x09\x09\x22http://www.ecma-international.org/ecma-262/6.0/#sec-future-reserved-words\x22\x0a\x09\x09await enum\x0a\x09\x09\x22in strict mode\x22\x0a\x09\x09implements interface package private protected public\x0a\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "settings",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $globals.SmalltalkSettings;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "settings\x0a\x09^ SmalltalkSettings",
referencedClasses: ["SmalltalkSettings"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);

$core.addMethod(
$core.method({
selector: "version",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return "0.21.1";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "version\x0a\x09\x22Answer the version string of Amber\x22\x0a\x09\x0a\x09^ '0.21.1'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkImage);


$globals.SmalltalkImage.a$cls.iVarNames = ["current"];
$core.addMethod(
$core.method({
selector: "current",
protocol: "instance creation",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@current"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@current"]=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.SmalltalkImage.a$cls.superclass||$boot.nilAsClass).fn.prototype._new.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $self["@current"];
} else {
$self._deprecatedAPI();
return $self["@current"];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.SmalltalkImage.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ] ifNotNil: [ self deprecatedAPI. current ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "new", "deprecatedAPI"]
}),
$globals.SmalltalkImage.a$cls);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
var st;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
st=$self._current();
$recv($recv(st)._globals())._at_put_("Smalltalk",st);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{st:st},$globals.SmalltalkImage.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09| st |\x0a\x09st := self current.\x0a\x09st globals at: 'Smalltalk' put: st",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["current", "at:put:", "globals"]
}),
$globals.SmalltalkImage.a$cls);

$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.SmalltalkImage.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.SmalltalkImage.a$cls);

$core.setTraitComposition([{trait: $globals.TThenable}], $globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "nextPutJSObject:",
protocol: "*Kernel-Infrastructure",
fn: function (aJSObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._nextPut_(aJSObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutJSObject:",{aJSObject:aJSObject},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "nextPutJSObject: aJSObject\x0a\x09self nextPut: aJSObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:"]
}),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "asJavaScriptPropertyName",
protocol: "*Kernel-Infrastructure",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.st2prop(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptPropertyName",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptPropertyName\x0a<inlineJS: 'return $core.st2prop(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asSetting",
protocol: "*Kernel-Infrastructure",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Setting)._at_ifAbsent_(self,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSetting",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSetting\x0a\x09\x22Answer aSetting dedicated to locally store a value using this string as key.\x0a\x09Nil will be the default value.\x22\x0a\x09^ Setting at: self ifAbsent: nil",
referencedClasses: ["Setting"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asSettingIfAbsent:",
protocol: "*Kernel-Infrastructure",
fn: function (aDefaultValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Setting)._at_ifAbsent_(self,aDefaultValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSettingIfAbsent:",{aDefaultValue:aDefaultValue},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDefaultValue"],
source: "asSettingIfAbsent: aDefaultValue\x0a\x09\x22Answer aSetting dedicated to locally store a value using this string as key.\x0a\x09Make this setting to have aDefaultValue.\x22\x0a\x09^ Setting at: self ifAbsent: aDefaultValue",
referencedClasses: ["Setting"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "settingValue",
protocol: "*Kernel-Infrastructure",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asSetting())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"settingValue",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "settingValue\x0a\x09^ self asSetting value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "asSetting"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "settingValue:",
protocol: "*Kernel-Infrastructure",
fn: function (aValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asSetting())._value_(aValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"settingValue:",{aValue:aValue},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "settingValue: aValue\x0a\x09\x22Sets the value of the setting that will be locally stored using this string as key.\x0a\x09Note that aValue can be any object that can be stringifyed\x22\x0a\x09^ self asSetting value: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "asSetting"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "settingValueIfAbsent:",
protocol: "*Kernel-Infrastructure",
fn: function (aDefaultValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asSettingIfAbsent_(aDefaultValue))._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"settingValueIfAbsent:",{aDefaultValue:aDefaultValue},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDefaultValue"],
source: "settingValueIfAbsent: aDefaultValue\x0a\x09\x22Answer the value of the locally stored setting using this string as key.\x0a\x09Use aDefaultValue in case no setting is found\x22\x0a\x09^ (self asSettingIfAbsent: aDefaultValue) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "asSettingIfAbsent:"]
}),
$globals.String);

});
