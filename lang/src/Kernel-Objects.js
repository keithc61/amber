define(["amber/boot", "require", "amber/core/Kernel-Helpers"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Kernel-Objects");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("ProtoObject", null, [], "Kernel-Objects");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProtoObject.comment="I implement the basic behavior required for any object in Amber.\x0a\x0aIn most cases, subclassing `ProtoObject` is wrong and `Object` should be used instead. However subclassing `ProtoObject` can be useful in some special cases like proxy implementations.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "= anObject\x0a\x09^ self == anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=="]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.__eq_eq(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "==",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "== anObject\x0a<inlineJS: 'return self === anObject'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self === anObject"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self === anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"==",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "asString",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09^ self printString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printString"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "class",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "class\x0a\x09<inlineJS: 'return $self.a$cls'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $self.a$cls"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.a$cls;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"class",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09MessageNotUnderstood new\x0a\x09\x09receiver: self;\x0a\x09\x09message: aMessage;\x0a\x09\x09signal",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["receiver:", "new", "message:", "signal"]
}, function ($methodClass){ return function (aMessage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.MessageNotUnderstood)._new();
$recv($1)._receiver_(self);
$recv($1)._message_(aMessage);
$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "evaluate:on:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anEvaluator"],
source: "evaluate: aString on: anEvaluator\x0a\x09^ anEvaluator evaluate: aString receiver: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["evaluate:receiver:"]
}, function ($methodClass){ return function (aString,anEvaluator){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anEvaluator)._evaluate_receiver_(aString,self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:on:",{aString:aString,anEvaluator:anEvaluator})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "identityHash",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "identityHash\x0a\x09<inlineJS: '\x0a\x09\x09self._deprecatedAPI();\x0a\x09\x09var hash=self.identityHash;\x0a\x09\x09if (hash) return hash;\x0a\x09\x09hash=$core.nextId();\x0a\x09\x09Object.defineProperty(self, ''identityHash'', {value:hash});\x0a\x09\x09return hash;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09self._deprecatedAPI();\x0a\x09\x09var hash=self.identityHash;\x0a\x09\x09if (hash) return hash;\x0a\x09\x09hash=$core.nextId();\x0a\x09\x09Object.defineProperty(self, 'identityHash', {value:hash});\x0a\x09\x09return hash;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		self._deprecatedAPI();
		var hash=self.identityHash;
		if (hash) return hash;
		hash=$core.nextId();
		Object.defineProperty(self, 'identityHash', {value:hash});
		return hash;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"identityHash",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "ifNil:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
return self;

}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "ifNil:ifNotNil:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ anotherBlock value: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anotherBlock)._value_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "ifNotNil:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ aBlock value: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "ifNotNil:ifNil:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ aBlock value: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "inspect",
protocol: "inspecting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspect\x0a\x09Inspector inspect: self",
referencedClasses: ["Inspector"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inspect:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Inspector)._inspect_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: "inspecting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anInspector){
var self=this,$self=this;
return self;

}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "instVarNamed:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "instVarNamed: aString\x0a\x09<inlineJS: 'return $self[aString]'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $self[aString]"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self[aString];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instVarNamed:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "instVarNamed:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "instVarNamed: aString put: anObject\x0a\x09<inlineJS: '$self[aString] = anObject'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["$self[aString] = anObject"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self[aString] = anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instVarNamed:put:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "isKindOf:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "isKindOf: aClass\x0a\x09^ (self isMemberOf: aClass)\x0a\x09\x09ifTrue: [ true ]\x0a\x09\x09ifFalse: [ self class inheritsFrom: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isMemberOf:", "inheritsFrom:", "class"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._isMemberOf_(aClass))){
return true;
} else {
return $recv($self._class())._inheritsFrom_(aClass);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isKindOf:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "isNil",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNil\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "notNil",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notNil\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "perform:",
protocol: "message handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "perform: aString\x0a\x09^ self perform: aString withArguments: #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["perform:withArguments:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._perform_withArguments_(aString,[]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"perform:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "perform:withArguments:",
protocol: "message handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCollection"],
source: "perform: aString withArguments: aCollection\x0a\x09<inlineJS: 'return $core.send2(self, aString, aCollection)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $core.send2(self, aString, aCollection)"]]],
messageSends: []
}, function ($methodClass){ return function (aString,aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.send2(self, aString, aCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"perform:withArguments:",{aString:aString,aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: (self class name first isVowel\x0a\x09\x09ifTrue: [ 'an ' ]\x0a\x09\x09ifFalse: [ 'a ' ]).\x0a\x09aStream nextPutAll: self class name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "ifTrue:ifFalse:", "isVowel", "first", "name", "class"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
if($core.assert($recv($recv([$recv([$self._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0])._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0])._first())._isVowel())){
$1="an ";
} else {
$1="a ";
}
[$recv(aStream)._nextPutAll_($1)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._nextPutAll_($recv($self._class())._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "printString",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printString\x0a\x09^ String streamContents: [ :str | \x0a\x09\x09self printOn: str ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "printOn:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._printOn_(str);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "yourself",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "yourself\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "~=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "~= anObject\x0a\x09^ (self = anObject) = false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["="]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($self.__eq(anObject)).__eq(false)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"~=",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "~~",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "~~ anObject\x0a\x09^ (self == anObject) = false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=", "=="]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.__eq_eq(anObject)).__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"~~",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoObject);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.ProtoObject.a$cls);


$core.addClass("Object", $globals.ProtoObject, [], "Kernel-Objects");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Object.comment="**I am the root of the Smalltalk class system**. With the exception of unual subclasses of `ProtoObject`, all other classes in the system are subclasses of me.\x0a\x0aI provide default behavior common to all normal objects (some of it inherited from `ProtoObject`), such as:\x0a\x0a- accessing\x0a- copying\x0a- comparison\x0a- error handling\x0a- message sending\x0a- reflection\x0a\x0aAlso utility messages that all objects should respond to are defined here.\x0a\x0aI have no instance variable.\x0a\x0a##Access\x0a\x0aInstance variables can be accessed with `#instVarAt:` and `#instVarAt:put:`. `#instanceVariableNames` answers a collection of all instance variable names.\x0aAccessing JavaScript properties of an object is done through `#basicAt:`, `#basicAt:put:` and `basicDelete:`.\x0a\x0a##Copying\x0a\x0aCopying an object is handled by `#copy` and `#deepCopy`. The first one performs a shallow copy of the receiver, while the second one performs a deep copy.\x0aThe hook method `#postCopy` can be overriden in subclasses to copy fields as necessary to complete the full copy. It will be sent by the copy of the receiver.\x0a\x0a##Comparison\x0a\x0aI understand equality `#=` and identity `#==` comparison.\x0a\x0a##Error handling\x0a\x0a- `#halt` is the typical message to use for inserting breakpoints during debugging.\x0a- `#error:` throws a generic error exception\x0a- `#doesNotUnderstand:` handles the fact that there was an attempt to send the given message to the receiver but the receiver does not understand this message.\x0a\x09Overriding this message can be useful to implement proxies for example.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "->",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "-> anObject\x0a\x09^ Association key: self value: anObject",
referencedClasses: ["Association"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["key:value:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Association)._key_value_(self,anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"->",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "appendToString:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "appendToString: aString\x0a\x09self error: 'Cannot add self to a string.'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("Cannot add self to a string.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToString:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asJSONString",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSONString\x0a\x09^ JSON stringify: self asJavaScriptObject",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["stringify:", "asJavaScriptObject"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.JSON)._stringify_($self._asJavaScriptObject());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSONString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09| variables |\x0a\x09variables := HashedCollection new.\x0a\x09self class allInstanceVariableNames do: [ :each |\x0a\x09\x09variables at: each put: (self instVarNamed: each) asJavaScriptObject ].\x0a\x09^ variables",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "allInstanceVariableNames", "class", "at:put:", "asJavaScriptObject", "instVarNamed:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var variables;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
variables=$recv($globals.HashedCollection)._new();
$recv($recv($self._class())._allInstanceVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(variables)._at_put_(each,$recv($self._instVarNamed_(each))._asJavaScriptObject());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return variables;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptObject",{variables:variables})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asJavaScriptSource",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSource\x0a\x09^ self asString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asString"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSource",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "basicAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicAt: aString\x0a\x09<inlineJS: 'return self[aString]'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self[aString]"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self[aString];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAt:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "basicAt:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "basicAt: aString put: anObject\x0a\x09<inlineJS: 'return self[aString] = anObject'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self[aString] = anObject"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self[aString] = anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAt:put:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "basicDelete:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicDelete: aString\x0a\x09<inlineJS: 'delete self[aString]; return aString'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["delete self[aString]; return aString"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
delete self[aString]; return aString;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicDelete:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "basicPerform:",
protocol: "message handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicPerform: aString\x0a\x09^ self basicPerform: aString withArguments: #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["basicPerform:withArguments:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._basicPerform_withArguments_(aString,[]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicPerform:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "basicPerform:withArguments:",
protocol: "message handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCollection"],
source: "basicPerform: aString withArguments: aCollection\x0a\x09<inlineJS: 'return self[aString].apply(self, aCollection);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self[aString].apply(self, aCollection);"]]],
messageSends: []
}, function ($methodClass){ return function (aString,aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self[aString].apply(self, aCollection);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicPerform:withArguments:",{aString:aString,aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "browse",
protocol: "browsing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "browse\x0a\x09Finder findClass: self class",
referencedClasses: ["Finder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["findClass:", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Finder)._findClass_($self._class());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"browse",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "copy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "copy\x0a\x09^ self shallowCopy postCopy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["postCopy", "shallowCopy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._shallowCopy())._postCopy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09<inlineJS: '\x0a\x09\x09var copy = self.a$cls._new();\x0a\x09\x09Object.keys(self).forEach(function (i) {\x0a\x09\x09\x09copy[i] = $recv(self[i])._deepCopy();\x0a\x09\x09});\x0a\x09\x09return copy;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var copy = self.a$cls._new();\x0a\x09\x09Object.keys(self).forEach(function (i) {\x0a\x09\x09\x09copy[i] = $recv(self[i])._deepCopy();\x0a\x09\x09});\x0a\x09\x09return copy;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var copy = self.a$cls._new();
		Object.keys(self).forEach(function (i) {
			copy[i] = $recv(self[i])._deepCopy();
		});
		return copy;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "deprecatedAPI",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deprecatedAPI\x0a\x09\x22Just a simple way to deprecate methods.\x0a\x09#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,\x0a\x09but it could in the future.\x22\x0a\x09console warn: thisContext home asString, ' is deprecated! (in ', thisContext home home asString, ')'.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["warn:", ",", "asString", "home"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(console)._warn_([$recv([$recv($recv([$recv([$core.getThisContext()._home()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["home"]=1
//>>excludeEnd("ctx");
][0])._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(" is deprecated! (in ")).__comma($recv([$recv($core.getThisContext()._home())._home()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["home"]=2
//>>excludeEnd("ctx");
][0])._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(")")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deprecatedAPI",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "deprecatedAPI:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "deprecatedAPI: aString\x0a\x09\x22Just a simple way to deprecate methods.\x0a\x09#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,\x0a\x09but it could in the future.\x22\x0a\x09console warn: thisContext home asString, ' is deprecated! (in ', thisContext home home asString, ')'.\x0a\x09console warn: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["warn:", ",", "asString", "home"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(console)._warn_([$recv([$recv($recv([$recv([$core.getThisContext()._home()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["home"]=1
//>>excludeEnd("ctx");
][0])._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(" is deprecated! (in ")).__comma($recv([$recv($core.getThisContext()._home())._home()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["home"]=2
//>>excludeEnd("ctx");
][0])._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(")")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["warn:"]=1
//>>excludeEnd("ctx");
][0];
$recv(console)._warn_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deprecatedAPI:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "divideBySelfToNumber:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "divideBySelfToNumber: aNumber\x0a\x09self error: 'I am not a number.'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("I am not a number.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"divideBySelfToNumber:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "divisionRemainderBySelfToNumber:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "divisionRemainderBySelfToNumber: aNumber\x0a\x09self error: 'I am not a number.'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("I am not a number.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"divisionRemainderBySelfToNumber:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "error:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "error: aString\x0a\x09Error signal: aString",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["signal:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Error)._signal_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"error:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "halt",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "halt\x0a\x09Halt signal",
referencedClasses: ["Halt"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["signal"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Halt)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"halt",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "in:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValuable"],
source: "in: aValuable\x0a\x09^ aValuable value: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:"]
}, function ($methodClass){ return function (aValuable){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aValuable)._value_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"in:",{aValuable:aValuable})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isMemberOf:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "isMemberOf: aClass\x0a\x09^ self class = aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=", "class"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class()).__eq(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isMemberOf:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isNumberEqualToSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "isNumberEqualToSelf: aNumber\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
return false;

}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isNumberGreaterThanOrEqualToSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "isNumberGreaterThanOrEqualToSelf: aNumber\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
return false;

}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isNumberGreaterThanSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "isNumberGreaterThanSelf: aNumber\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
return false;

}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isNumberLessThanOrEqualToSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "isNumberLessThanOrEqualToSelf: aNumber\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
return false;

}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isNumberLessThanSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "isNumberLessThanSelf: aNumber\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
return false;

}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isParseFailure",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isParseFailure\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "minusSelfToNumber:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "minusSelfToNumber: aNumber\x0a\x09self error: 'I am not a number.'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("I am not a number.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"minusSelfToNumber:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "plusSelfToNumber:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "plusSelfToNumber: aNumber\x0a\x09self error: 'I am not a number.'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("I am not a number.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"plusSelfToNumber:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "postCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "postCopy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "putOn:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPut: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPut:"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPut_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "respondsTo:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "respondsTo: aSelector\x0a\x09^ self class canUnderstand: aSelector",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["canUnderstand:", "class"]
}, function ($methodClass){ return function (aSelector){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._canUnderstand_(aSelector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"respondsTo:",{aSelector:aSelector})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09<inlineJS: '\x0a\x09\x09var copy = self.a$cls._new();\x0a\x09\x09Object.keys(self).forEach(function(i) {\x0a\x09\x09\x09copy[i] = self[i];\x0a\x09\x09});\x0a\x09\x09return copy;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var copy = self.a$cls._new();\x0a\x09\x09Object.keys(self).forEach(function(i) {\x0a\x09\x09\x09copy[i] = self[i];\x0a\x09\x09});\x0a\x09\x09return copy;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var copy = self.a$cls._new();
		Object.keys(self).forEach(function(i) {
			copy[i] = self[i];
		});
		return copy;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "shouldNotImplement",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldNotImplement\x0a\x09self error: 'This method should not be implemented in ', self class name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:", ",", "name", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("This method should not be implemented in ".__comma($recv($self._class())._name()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldNotImplement",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "size",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09self error: 'Object not indexable'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("Object not indexable");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "subclassResponsibility",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subclassResponsibility\x0a\x09self error: 'This method is a responsibility of a subclass'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("This method is a responsibility of a subclass");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclassResponsibility",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "timesSelfToNumber:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "timesSelfToNumber: aNumber\x0a\x09self error: 'I am not a number.'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("I am not a number.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"timesSelfToNumber:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "value",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09<inlineJS: 'return self.valueOf()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.valueOf()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.valueOf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);


$core.addMethod(
$core.method({
selector: "accessorProtocolWith:",
protocol: "helios",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGenerator"],
source: "accessorProtocolWith: aGenerator\x0a\x09aGenerator accessorProtocolForObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["accessorProtocolForObject"]
}, function ($methodClass){ return function (aGenerator){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aGenerator)._accessorProtocolForObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accessorProtocolWith:",{aGenerator:aGenerator})});
//>>excludeEnd("ctx");
}; }),
$globals.Object.a$cls);

$core.addMethod(
$core.method({
selector: "accessorsSourceCodesWith:",
protocol: "helios",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGenerator"],
source: "accessorsSourceCodesWith: aGenerator\x0a\x09aGenerator accessorsForObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["accessorsForObject"]
}, function ($methodClass){ return function (aGenerator){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aGenerator)._accessorsForObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accessorsSourceCodesWith:",{aGenerator:aGenerator})});
//>>excludeEnd("ctx");
}; }),
$globals.Object.a$cls);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22no op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Object.a$cls);

$core.addMethod(
$core.method({
selector: "initializeProtocolWith:",
protocol: "helios",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGenerator"],
source: "initializeProtocolWith: aGenerator\x0a\x09aGenerator initializeProtocolForObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initializeProtocolForObject"]
}, function ($methodClass){ return function (aGenerator){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aGenerator)._initializeProtocolForObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeProtocolWith:",{aGenerator:aGenerator})});
//>>excludeEnd("ctx");
}; }),
$globals.Object.a$cls);

$core.addMethod(
$core.method({
selector: "initializeSourceCodesWith:",
protocol: "helios",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGenerator"],
source: "initializeSourceCodesWith: aGenerator\x0a\x09aGenerator initializeForObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initializeForObject"]
}, function ($methodClass){ return function (aGenerator){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aGenerator)._initializeForObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeSourceCodesWith:",{aGenerator:aGenerator})});
//>>excludeEnd("ctx");
}; }),
$globals.Object.a$cls);


$core.addClass("Boolean", $globals.Object, [], "Kernel-Objects");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Boolean.comment="I define the protocol for logic testing operations and conditional control structures for the logical values (see the `controlling` protocol).\x0a\x0aI have two instances, `true` and `false`.\x0a\x0aI am directly mapped to JavaScript Boolean. The `true` and `false` objects are the JavaScript boolean objects.\x0a\x0a## Usage Example:\x0a\x0a    aBoolean not ifTrue: [ ... ] ifFalse: [ ... ]";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "&",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "& aBoolean\x0a\x09<inlineJS: '\x0a\x09\x09if(self == true) {\x0a\x09\x09return aBoolean;\x0a\x09\x09} else {\x0a\x09\x09return false;\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09if(self == true) {\x0a\x09\x09return aBoolean;\x0a\x09\x09} else {\x0a\x09\x09return false;\x0a\x09\x09}\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		if(self == true) {
		return aBoolean;
		} else {
		return false;
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"&",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "==",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "== aBoolean\x0a<inlineJS: '\x0a\x09if (typeof aBoolean === \x22boolean\x22) return (self == true) === aBoolean;\x0a\x09else if (aBoolean != null && typeof aBoolean === \x22object\x22) return (self == true) === aBoolean.valueOf();\x0a\x09else return false;\x0a'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09if (typeof aBoolean === \x22boolean\x22) return (self == true) === aBoolean;\x0a\x09else if (aBoolean != null && typeof aBoolean === \x22object\x22) return (self == true) === aBoolean.valueOf();\x0a\x09else return false;"]]],
messageSends: []
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	if (typeof aBoolean === "boolean") return (self == true) === aBoolean;
	else if (aBoolean != null && typeof aBoolean === "object") return (self == true) === aBoolean.valueOf();
	else return false;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"==",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "and:",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "and: aBlock\x0a\x09^ self\x0a\x09\x09ifTrue: \x22aBlock\x22 [ aBlock value ]\x0a\x09\x09ifFalse: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "value"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert(self)){
return $recv(aBlock)._value();
} else {
return false;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"and:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "asBit",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asBit\x0a\x09^ self ifTrue: [ 1 ] ifFalse: [ 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert(self)){
return (1);
} else {
return (0);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asBit",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "asString",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09<inlineJS: 'return self.toString()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toString()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "ifFalse:",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifFalse: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self ifTrue: [] ifFalse: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._ifTrue_ifFalse_((function(){

}),aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "ifFalse:ifTrue:",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifFalse: aBlock ifTrue: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self ifTrue: anotherBlock ifFalse: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._ifTrue_ifFalse_(anotherBlock,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "ifTrue:",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifTrue: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self ifTrue: aBlock ifFalse: []",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._ifTrue_ifFalse_(aBlock,(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "ifTrue:ifFalse:",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifTrue: aBlock ifFalse: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<inlineJS: '\x0a\x09\x09if(self == true) {\x0a\x09\x09return aBlock._value();\x0a\x09\x09} else {\x0a\x09\x09return anotherBlock._value();\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09if(self == true) {\x0a\x09\x09return aBlock._value();\x0a\x09\x09} else {\x0a\x09\x09return anotherBlock._value();\x0a\x09\x09}\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		if(self == true) {
		return aBlock._value();
		} else {
		return anotherBlock._value();
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "isBoolean",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBoolean\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "not",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "not\x0a\x09^ self = false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"not",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "or:",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "or: aBlock\x0a\x09^ self\x0a\x09\x09ifTrue: [ true ]\x0a\x09\x09ifFalse: \x22aBlock\x22 [ aBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "value"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert(self)){
return true;
} else {
return $recv(aBlock)._value();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"or:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self asString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "asString"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($self._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Boolean);

$core.addMethod(
$core.method({
selector: "|",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "| aBoolean\x0a\x09<inlineJS: '\x0a\x09\x09if(self == true) {\x0a\x09\x09return true;\x0a\x09\x09} else {\x0a\x09\x09return aBoolean;\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09if(self == true) {\x0a\x09\x09return true;\x0a\x09\x09} else {\x0a\x09\x09return aBoolean;\x0a\x09\x09}\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		if(self == true) {
		return true;
		} else {
		return aBoolean;
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"|",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.Boolean);



$core.addClass("Date", $globals.Object, [], "Kernel-Objects");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Date.comment="I am used to work with both dates and times. Therefore `Date today` and `Date now` are both valid in\x0aAmber and answer the same date object.\x0a\x0aDate directly maps to the `Date()` JavaScript constructor, and Amber date objects are JavaScript date objects.\x0a\x0a## API\x0a\x0aThe class-side `instance creation` protocol contains some convenience methods for creating date/time objects such as `#fromSeconds:`.\x0a\x0aArithmetic and comparison is supported (see the `comparing` and `arithmetic` protocols).\x0a\x0aThe `converting` protocol provides convenience methods for various convertions (to numbers, strings, etc.).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "+ aNumber\x0a\x09<inlineJS: 'return new Date($self.getTime() + aNumber)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return new Date($self.getTime() + aNumber)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new Date($self.getTime() + aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "-",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "- aDate\x0a\x09<inlineJS: 'return self - aDate'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self - aDate"]]],
messageSends: []
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self - aDate;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"-",{aDate:aDate})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "<",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "< aDate\x0a\x09<inlineJS: 'return self < aDate'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self < aDate"]]],
messageSends: []
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self < aDate;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<",{aDate:aDate})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "<=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "<= aDate\x0a\x09<inlineJS: 'return self <= aDate'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self <= aDate"]]],
messageSends: []
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self <= aDate;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<=",{aDate:aDate})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "= aDate\x0a\x09^ (aDate class == self class) and: [ self asMilliseconds == aDate asMilliseconds ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "==", "class", "asMilliseconds"]
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv([$recv(aDate)._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0]).__eq_eq($self._class())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["=="]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$self._asMilliseconds()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asMilliseconds"]=1
//>>excludeEnd("ctx");
][0]).__eq_eq($recv(aDate)._asMilliseconds());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aDate:aDate})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: ">",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "> aDate\x0a\x09<inlineJS: 'return self > aDate'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self > aDate"]]],
messageSends: []
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self > aDate;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">",{aDate:aDate})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: ">=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: ">= aDate\x0a\x09<inlineJS: 'return self >= aDate'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self >= aDate"]]],
messageSends: []
}, function ($methodClass){ return function (aDate){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self >= aDate;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">=",{aDate:aDate})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "asDateString",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asDateString\x0a\x09<inlineJS: 'return self.toDateString()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toDateString()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toDateString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asDateString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "asLocaleString",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asLocaleString\x0a\x09<inlineJS: 'return self.toLocaleString()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toLocaleString()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toLocaleString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asLocaleString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "asMilliseconds",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asMilliseconds\x0a\x09^ self time",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["time"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._time();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asMilliseconds",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "asNumber",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asNumber\x0a\x09^ self asMilliseconds",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asMilliseconds"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._asMilliseconds();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asNumber",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "asString",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09<inlineJS: 'return self.toString()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toString()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "asTimeString",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTimeString\x0a\x09<inlineJS: 'return self.toTimeString()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toTimeString()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toTimeString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTimeString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "day",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "day\x0a\x09^ self dayOfWeek",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["dayOfWeek"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._dayOfWeek();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"day",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "day:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "day: aNumber\x0a\x09self dayOfWeek: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["dayOfWeek:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dayOfWeek_(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"day:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "dayOfMonth",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dayOfMonth\x0a\x09<inlineJS: 'return self.getDate()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.getDate()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.getDate();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dayOfMonth",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "dayOfMonth:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "dayOfMonth: aNumber\x0a\x09<inlineJS: 'self.setDate(aNumber)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.setDate(aNumber)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.setDate(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dayOfMonth:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "dayOfWeek",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dayOfWeek\x0a\x09<inlineJS: 'return self.getDay() + 1'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.getDay() + 1"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.getDay() + 1;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dayOfWeek",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "dayOfWeek:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "dayOfWeek: aNumber\x0a\x09<inlineJS: 'return self.setDay(aNumber - 1)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.setDay(aNumber - 1)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.setDay(aNumber - 1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dayOfWeek:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "hours",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hours\x0a\x09<inlineJS: 'return self.getHours()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.getHours()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.getHours();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hours",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "hours:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "hours: aNumber\x0a\x09<inlineJS: 'self.setHours(aNumber)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.setHours(aNumber)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.setHours(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hours:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "milliseconds",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "milliseconds\x0a\x09<inlineJS: 'return self.getMilliseconds()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.getMilliseconds()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.getMilliseconds();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"milliseconds",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "milliseconds:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "milliseconds: aNumber\x0a\x09<inlineJS: 'self.setMilliseconds(aNumber)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.setMilliseconds(aNumber)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.setMilliseconds(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"milliseconds:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "minutes",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "minutes\x0a\x09<inlineJS: 'return self.getMinutes()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.getMinutes()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.getMinutes();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"minutes",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "minutes:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "minutes: aNumber\x0a\x09<inlineJS: 'self.setMinutes(aNumber)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.setMinutes(aNumber)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.setMinutes(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"minutes:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "month",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "month\x0a\x09<inlineJS: 'return self.getMonth() + 1'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.getMonth() + 1"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.getMonth() + 1;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"month",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "month:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "month: aNumber\x0a\x09<inlineJS: 'self.setMonth(aNumber - 1)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.setMonth(aNumber - 1)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.setMonth(aNumber - 1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"month:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self asString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "asString"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($self._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "seconds",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "seconds\x0a\x09<inlineJS: 'return self.getSeconds()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.getSeconds()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.getSeconds();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"seconds",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "seconds:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "seconds: aNumber\x0a\x09<inlineJS: 'self.setSeconds(aNumber)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.setSeconds(aNumber)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.setSeconds(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"seconds:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "time",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "time\x0a\x09<inlineJS: 'return self.getTime()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.getTime()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.getTime();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"time",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "time:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "time: aNumber\x0a\x09<inlineJS: 'self.setTime(aNumber)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.setTime(aNumber)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.setTime(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"time:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "year",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "year\x0a\x09<inlineJS: 'return self.getFullYear()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.getFullYear()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.getFullYear();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"year",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "year:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "year: aNumber\x0a\x09<inlineJS: 'self.setFullYear(aNumber)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.setFullYear(aNumber)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.setFullYear(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"year:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);


$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Returns a tag or general category for this class.\x0a\x09Typically used to help tools do some reflection.\x0a\x09Helios, for example, uses this to decide what icon the class should display.\x22\x0a\x09\x0a\x09^ 'magnitude'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "magnitude";

}; }),
$globals.Date.a$cls);

$core.addMethod(
$core.method({
selector: "fromMilliseconds:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "fromMilliseconds: aNumber\x0a\x09^ self new: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._new_(aNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromMilliseconds:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date.a$cls);

$core.addMethod(
$core.method({
selector: "fromSeconds:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "fromSeconds: aNumber\x0a\x09^ self fromMilliseconds: aNumber * 1000",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fromMilliseconds:", "*"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._fromMilliseconds_($recv(aNumber).__star((1000)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromSeconds:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Date.a$cls);

$core.addMethod(
$core.method({
selector: "fromString:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "fromString: aString\x0a\x09\x22Example: Date fromString('2011/04/15 00:00:00')\x22\x0a\x09^ self new: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._new_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Date.a$cls);

$core.addMethod(
$core.method({
selector: "millisecondsToRun:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "millisecondsToRun: aBlock\x0a\x09| t |\x0a\x09t := Date now.\x0a\x09aBlock value.\x0a\x09^ Date now - t",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["now", "value", "-"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var t;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
t=[$recv($globals.Date)._now()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["now"]=1
//>>excludeEnd("ctx");
][0];
$recv(aBlock)._value();
return $recv($recv($globals.Date)._now()).__minus(t);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"millisecondsToRun:",{aBlock:aBlock,t:t})});
//>>excludeEnd("ctx");
}; }),
$globals.Date.a$cls);

$core.addMethod(
$core.method({
selector: "new:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "new: anObject\x0a\x09<inlineJS: 'return new Date(anObject)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return new Date(anObject)"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new Date(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Date.a$cls);

$core.addMethod(
$core.method({
selector: "now",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "now\x0a\x09^ self today",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["today"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._today();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"now",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date.a$cls);

$core.addMethod(
$core.method({
selector: "today",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "today\x0a\x09^ self new",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"today",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Date.a$cls);


$core.addClass("Number", $globals.Object, [], "Kernel-Objects");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Number.comment="I am the Amber representation for all numbers.\x0aI am directly mapped to JavaScript Number.\x0a\x0a## API\x0a\x0aI provide all necessary methods for arithmetic operations, comparison, conversion and so on with numbers.\x0a\x0aMy instances can also be used to evaluate a block a fixed number of times:\x0a\x0a\x095 timesRepeat: [ Transcript show: 'This will be printed 5 times'; cr ].\x0a\x09\x0a\x091 to: 5 do: [ :aNumber| Transcript show: aNumber asString; cr ].\x0a\x09\x0a\x091 to: 10 by: 2 do: [ :aNumber| Transcript show: aNumber asString; cr ].";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "&",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "& aNumber\x0a\x09^ self bitAnd: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["bitAnd:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._bitAnd_(aNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"&",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "*",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "* aNumber\x0a\x09<inlineJS: 'return typeof aNumber === \x22number\x22 ?\x0a\x09\x09self * aNumber :\x0a\x09\x09$recv(aNumber)._timesSelfToNumber_(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aNumber === \x22number\x22 ?\x0a\x09\x09self * aNumber :\x0a\x09\x09$recv(aNumber)._timesSelfToNumber_(self)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aNumber === "number" ?
		self * aNumber :
		$recv(aNumber)._timesSelfToNumber_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"*",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "**",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["exponent"],
source: "** exponent\x0a\x09^ self raisedTo: exponent",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["raisedTo:"]
}, function ($methodClass){ return function (exponent){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._raisedTo_(exponent);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"**",{exponent:exponent})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "+ aNumber\x0a\x09<inlineJS: 'return typeof aNumber === \x22number\x22 ?\x0a\x09\x09self + aNumber :\x0a\x09\x09$recv(aNumber)._plusSelfToNumber_(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aNumber === \x22number\x22 ?\x0a\x09\x09self + aNumber :\x0a\x09\x09$recv(aNumber)._plusSelfToNumber_(self)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aNumber === "number" ?
		self + aNumber :
		$recv(aNumber)._plusSelfToNumber_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "-",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "- aNumber\x0a\x09<inlineJS: 'return typeof aNumber === \x22number\x22 ?\x0a\x09\x09self - aNumber :\x0a\x09\x09$recv(aNumber)._minusSelfToNumber_(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aNumber === \x22number\x22 ?\x0a\x09\x09self - aNumber :\x0a\x09\x09$recv(aNumber)._minusSelfToNumber_(self)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aNumber === "number" ?
		self - aNumber :
		$recv(aNumber)._minusSelfToNumber_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"-",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "/",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "/ aNumber\x0a\x09<inlineJS: 'return typeof aNumber === \x22number\x22 ?\x0a\x09\x09self / aNumber :\x0a\x09\x09$recv(aNumber)._divideBySelfToNumber_(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aNumber === \x22number\x22 ?\x0a\x09\x09self / aNumber :\x0a\x09\x09$recv(aNumber)._divideBySelfToNumber_(self)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aNumber === "number" ?
		self / aNumber :
		$recv(aNumber)._divideBySelfToNumber_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"/",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "//",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "// aNumber\x0a\x09^ (self / aNumber) floor",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["floor", "/"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.__slash(aNumber))._floor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"//",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "<",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "< aNumber\x0a<inlineJS: 'return typeof aNumber === \x22number\x22 ?\x0a\x09Number(self) < aNumber :\x0a\x09$recv(aNumber)._isNumberLessThanSelf_(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aNumber === \x22number\x22 ?\x0a\x09Number(self) < aNumber :\x0a\x09$recv(aNumber)._isNumberLessThanSelf_(self)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aNumber === "number" ?
	Number(self) < aNumber :
	$recv(aNumber)._isNumberLessThanSelf_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "<=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "<= aNumber\x0a<inlineJS: 'return typeof aNumber === \x22number\x22 ?\x0a\x09Number(self) <= aNumber :\x0a\x09$recv(aNumber)._isNumberLessThanOrEqualToSelf_(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aNumber === \x22number\x22 ?\x0a\x09Number(self) <= aNumber :\x0a\x09$recv(aNumber)._isNumberLessThanOrEqualToSelf_(self)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aNumber === "number" ?
	Number(self) <= aNumber :
	$recv(aNumber)._isNumberLessThanOrEqualToSelf_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<=",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "==",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "== aNumber\x0a<inlineJS: 'return typeof aNumber === \x22number\x22 ?\x0a\x09Number(self) === aNumber :\x0a\x09$recv(aNumber)._isNumberEqualToSelf_(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aNumber === \x22number\x22 ?\x0a\x09Number(self) === aNumber :\x0a\x09$recv(aNumber)._isNumberEqualToSelf_(self)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aNumber === "number" ?
	Number(self) === aNumber :
	$recv(aNumber)._isNumberEqualToSelf_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"==",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: ">",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "> aNumber\x0a<inlineJS: 'return typeof aNumber === \x22number\x22 ?\x0a\x09Number(self) > aNumber :\x0a\x09$recv(aNumber)._isNumberGreaterThanSelf_(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aNumber === \x22number\x22 ?\x0a\x09Number(self) > aNumber :\x0a\x09$recv(aNumber)._isNumberGreaterThanSelf_(self)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aNumber === "number" ?
	Number(self) > aNumber :
	$recv(aNumber)._isNumberGreaterThanSelf_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: ">=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: ">= aNumber\x0a<inlineJS: 'return typeof aNumber === \x22number\x22 ?\x0a\x09Number(self) >= aNumber :\x0a\x09$recv(aNumber)._isNumberGreaterThanOrEqualToSelf_(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aNumber === \x22number\x22 ?\x0a\x09Number(self) >= aNumber :\x0a\x09$recv(aNumber)._isNumberGreaterThanOrEqualToSelf_(self)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aNumber === "number" ?
	Number(self) >= aNumber :
	$recv(aNumber)._isNumberGreaterThanOrEqualToSelf_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">=",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "@",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "@ aNumber\x0a\x09^ Point x: self y: aNumber",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["x:y:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Point)._x_y_(self,aNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"@",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "\x5c\x5c",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "\x5c\x5c aNumber\x0a\x09<inlineJS: 'return typeof aNumber === \x22number\x22 ?\x0a\x09\x09self % aNumber :\x0a\x09\x09$recv(aNumber)._divisionRemainderBySelfToNumber_(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aNumber === \x22number\x22 ?\x0a\x09\x09self % aNumber :\x0a\x09\x09$recv(aNumber)._divisionRemainderBySelfToNumber_(self)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aNumber === "number" ?
		self % aNumber :
		$recv(aNumber)._divisionRemainderBySelfToNumber_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"\x5c\x5c",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "abs",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "abs\x0a\x09<inlineJS: 'return Math.abs(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.abs(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.abs(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"abs",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "arcCos",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arcCos\x0a\x09<inlineJS: 'return Math.acos(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.acos(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.acos(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcCos",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "arcSin",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arcSin\x0a\x09<inlineJS: 'return Math.asin(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.asin(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.asin(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcSin",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "arcTan",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arcTan\x0a\x09<inlineJS: 'return Math.atan(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.atan(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.atan(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcTan",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "arcTan:",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "arcTan: aNumber\x0a\x09<inlineJS: 'return Math.atan2(self, aNumber);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.atan2(self, aNumber);"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.atan2(self, aNumber);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcTan:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asJavaScriptSource",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSource\x0a\x09^ '(', self printString, ')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "printString"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv("(".__comma($self._printString())).__comma(")")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSource",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asNumber",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asNumber\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asPoint",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asPoint\x0a\x09^ Point x: self y: self",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["x:y:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Point)._x_y_(self,self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asPoint",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asString",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09<inlineJS: 'return String(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return String(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "atRandom",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atRandom\x0a\x09^ (Random new next * self) truncated + 1",
referencedClasses: ["Random"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["+", "truncated", "*", "next", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv($recv($recv($globals.Random)._new())._next()).__star(self))._truncated()).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atRandom",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "between:and:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["min", "max"],
source: "between: min and: max\x0a ^ self >= min and: [ self <= max ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", ">=", "<="]
}, function ($methodClass){ return function (min,max){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.__gt_eq(min))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self.__lt_eq(max);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"between:and:",{min:min,max:max})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "bitAnd:",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "bitAnd: aNumber\x0a\x09<inlineJS: 'return self & aNumber'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self & aNumber"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self & aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bitAnd:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "bitNot",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bitNot\x0a\x09<inlineJS: 'return ~self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return ~self"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return ~self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bitNot",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "bitOr:",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "bitOr: aNumber\x0a\x09<inlineJS: 'return self | aNumber'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self | aNumber"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self | aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bitOr:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "bitXor:",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "bitXor: aNumber\x0a\x09<inlineJS: 'return self ^ aNumber'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self ^ aNumber"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self ^ aNumber;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bitXor:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "ceiling",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ceiling\x0a\x09<inlineJS: 'return Math.ceil(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.ceil(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.ceil(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ceiling",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "copy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "copy\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "cos",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cos\x0a\x09<inlineJS: 'return Math.cos(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.cos(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.cos(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cos",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09^ self copy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "degreesToRadians",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "degreesToRadians\x0a\x09^ self * Number radiansPerDegree",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["*", "radiansPerDegree"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.__star($recv($globals.Number)._radiansPerDegree());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"degreesToRadians",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "divideBySelfToNumber:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "divideBySelfToNumber: aNumber\x0a\x09<inlineJS: 'return aNumber / self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aNumber / self"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aNumber / self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"divideBySelfToNumber:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "divisionRemainderBySelfToNumber:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "divisionRemainderBySelfToNumber: aNumber\x0a\x09<inlineJS: 'return aNumber % self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aNumber % self"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aNumber % self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"divisionRemainderBySelfToNumber:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "even",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "even\x0a\x09^ 0 = (self \x5c\x5c 2)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=", "\x5c\x5c"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (0).__eq($self.__backslash_backslash((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"even",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "floor",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "floor\x0a\x09<inlineJS: 'return Math.floor(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.floor(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.floor(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"floor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isFinite",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFinite\x0a\x09\x22Answer whether the receiver is finite\x22\x0a\x09<inlineJS: 'return Number.isFinite(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Number.isFinite(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Number.isFinite(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFinite",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isNaN",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNaN\x0a\x09\x22Answer whether the receiver is IEEE-754 not-a-number\x22\x0a\x09<inlineJS: 'return Number.isNaN(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Number.isNaN(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Number.isNaN(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isNaN",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isNumber",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNumber\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isNumberEqualToSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "isNumberEqualToSelf: aNumber\x0a\x09<inlineJS: 'return aNumber === Number(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aNumber === Number(self)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aNumber === Number(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isNumberEqualToSelf:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isNumberGreaterThanOrEqualToSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "isNumberGreaterThanOrEqualToSelf: aNumber\x0a\x09<inlineJS: 'return aNumber >= self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aNumber >= self"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aNumber >= self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isNumberGreaterThanOrEqualToSelf:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isNumberGreaterThanSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "isNumberGreaterThanSelf: aNumber\x0a\x09<inlineJS: 'return aNumber > self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aNumber > self"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aNumber > self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isNumberGreaterThanSelf:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isNumberLessThanOrEqualToSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "isNumberLessThanOrEqualToSelf: aNumber\x0a\x09<inlineJS: 'return aNumber <= self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aNumber <= self"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aNumber <= self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isNumberLessThanOrEqualToSelf:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isNumberLessThanSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "isNumberLessThanSelf: aNumber\x0a\x09<inlineJS: 'return aNumber < self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aNumber < self"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aNumber < self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isNumberLessThanSelf:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "isZero",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isZero\x0a\x09^ self = 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isZero",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "ln",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ln\x0a\x09<inlineJS: 'return Math.log(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.log(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.log(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ln",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "ln1p",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ln1p\x0a\x09<inlineJS: 'return Math.log1p(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.log1p(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.log1p(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ln1p",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "log",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "log\x0a\x09<inlineJS: 'return Math.log(self) / Math.LN10;'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.log(self) / Math.LN10;"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.log(self) / Math.LN10;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"log",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "log:",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "log: aNumber\x0a\x09<inlineJS: 'return Math.log(self) / Math.log(aNumber);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.log(self) / Math.log(aNumber);"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.log(self) / Math.log(aNumber);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"log:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "max:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "max: aNumber\x0a\x09<inlineJS: 'return Math.max(self, aNumber);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.max(self, aNumber);"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.max(self, aNumber);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"max:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "min:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "min: aNumber\x0a\x09<inlineJS: 'return Math.min(self, aNumber);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.min(self, aNumber);"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.min(self, aNumber);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"min:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "min:max:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMin", "aMax"],
source: "min: aMin max: aMax\x0a\x09^ (self min: aMin) max: aMax",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["max:", "min:"]
}, function ($methodClass){ return function (aMin,aMax){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._min_(aMin))._max_(aMax);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"min:max:",{aMin:aMin,aMax:aMax})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "minusSelfToNumber:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "minusSelfToNumber: aNumber\x0a\x09<inlineJS: 'return aNumber - self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aNumber - self"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aNumber - self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"minusSelfToNumber:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "negated",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "negated\x0a\x09^ 0 - self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (0).__minus(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"negated",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "negative",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "negative\x0a\x09\x22Answer whether the receiver is mathematically negative.\x22\x0a\x0a\x09^ self < 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["<"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.__lt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"negative",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "odd",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "odd\x0a\x09^ self even not",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["not", "even"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._even())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"odd",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "plusSelfToNumber:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "plusSelfToNumber: aNumber\x0a\x09<inlineJS: 'return aNumber + self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aNumber + self"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aNumber + self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"plusSelfToNumber:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "positive",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "positive\x0a\x09\x22Answer whether the receiver is positive or equal to 0. (ST-80 protocol).\x22\x0a\x0a\x09^ self >= 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [">="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.__gt_eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positive",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self asString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "asString"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($self._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "printShowingDecimalPlaces:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["placesDesired"],
source: "printShowingDecimalPlaces: placesDesired\x0a\x09<inlineJS: 'return self.toFixed(placesDesired)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toFixed(placesDesired)"]]],
messageSends: []
}, function ($methodClass){ return function (placesDesired){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toFixed(placesDesired);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printShowingDecimalPlaces:",{placesDesired:placesDesired})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "printStringBase:",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBase"],
source: "printStringBase: aBase\x0a\x09<inlineJS: 'return self.toString(aBase)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toString(aBase)"]]],
messageSends: []
}, function ($methodClass){ return function (aBase){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toString(aBase);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printStringBase:",{aBase:aBase})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "radiansToDegrees",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "radiansToDegrees\x0a\x09^ self / Number radiansPerDegree",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["/", "radiansPerDegree"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.__slash($recv($globals.Number)._radiansPerDegree());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"radiansToDegrees",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "raisedTo:",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["exponent"],
source: "raisedTo: exponent\x0a\x09<inlineJS: 'return Math.pow(self, exponent);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.pow(self, exponent);"]]],
messageSends: []
}, function ($methodClass){ return function (exponent){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.pow(self, exponent);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"raisedTo:",{exponent:exponent})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "rounded",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rounded\x0a\x09<inlineJS: 'return Math.round(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.round(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.round(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rounded",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "sign",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sign\x0a\x09self isZero \x0a\x09\x09ifTrue: [ ^ 0 ].\x0a\x09self positive\x0a\x09\x09ifTrue: [ ^ 1 ]\x0a\x09\x09ifFalse: [ ^ -1 ].",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isZero", "ifTrue:ifFalse:", "positive"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._isZero())){
return (0);
}
if($core.assert($self._positive())){
return (1);
} else {
return (-1);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sign",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "sin",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sin\x0a\x09<inlineJS: 'return Math.sin(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.sin(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.sin(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sin",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "sqrt",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sqrt\x0a\x09<inlineJS: 'return Math.sqrt(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.sqrt(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.sqrt(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sqrt",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "squared",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "squared\x0a\x09^ self * self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["*"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.__star(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"squared",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "tan",
protocol: "mathematical functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tan\x0a\x09<inlineJS: 'return Math.tan(self);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.tan(self);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.tan(self);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tan",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "timesRepeat:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "timesRepeat: aBlock\x0a\x09| count |\x0a\x09count := 1.\x0a\x09[ count > self ] whileFalse: [\x0a\x09\x09aBlock value.\x0a\x09\x09count := count + 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileFalse:", ">", "value", "+"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var count;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
count=(1);
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(count).__gt(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value();
count=$recv(count).__plus((1));
return count;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"timesRepeat:",{aBlock:aBlock,count:count})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "timesSelfToNumber:",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "timesSelfToNumber: aNumber\x0a\x09<inlineJS: 'return aNumber * self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aNumber * self"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aNumber * self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"timesSelfToNumber:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "to:",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "to: aNumber\x0a\x09| array first last count |\x0a\x09first := self truncated.\x0a\x09last := aNumber truncated + 1.\x0a\x09count := 1.\x0a\x09array := Array new.\x0a\x09(last - first) timesRepeat: [\x0a\x09\x09array at: count put: first.\x0a\x09\x09count := count + 1.\x0a\x09\x09first := first + 1 ].\x0a\x09^ array",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["truncated", "+", "new", "timesRepeat:", "-", "at:put:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
var array,first,last,count;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
first=[$self._truncated()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["truncated"]=1
//>>excludeEnd("ctx");
][0];
last=[$recv($recv(aNumber)._truncated()).__plus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0];
count=(1);
array=$recv($globals.Array)._new();
$recv($recv(last).__minus(first))._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(array)._at_put_(count,first);
count=[$recv(count).__plus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=2
//>>excludeEnd("ctx");
][0];
first=$recv(first).__plus((1));
return first;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"to:",{aNumber:aNumber,array:array,first:first,last:last,count:count})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "to:by:",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stop", "step"],
source: "to: stop by: step\x0a\x09| array value pos |\x0a\x09value := self.\x0a\x09array := Array new.\x0a\x09pos := 1.\x0a\x09step = 0 ifTrue: [ self error: 'step must be non-zero' ].\x0a\x09step < 0\x0a\x09\x09ifTrue: [ [ value >= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09array at: pos put: value.\x0a\x09\x09\x09\x09\x09pos := pos + 1.\x0a\x09\x09\x09\x09\x09value := value + step ]]\x0a\x09\x09ifFalse: [ [ value <= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09array at: pos put: value.\x0a\x09\x09\x09\x09pos := pos + 1.\x0a\x09\x09\x09\x09\x09value := value + step ]].\x0a\x09^ array",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "ifTrue:", "=", "error:", "ifTrue:ifFalse:", "<", "whileTrue:", ">=", "at:put:", "+", "<="]
}, function ($methodClass){ return function (stop,step){
var self=this,$self=this;
var array,value,pos;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
value=self;
array=$recv($globals.Array)._new();
pos=(1);
if($core.assert($recv(step).__eq((0)))){
$self._error_("step must be non-zero");
}
if($core.assert($recv(step).__lt((0)))){
[$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(value).__gt_eq(stop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(array)._at_put_(pos,value)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
pos=[$recv(pos).__plus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0];
value=[$recv(value).__plus(step)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=2
//>>excludeEnd("ctx");
][0];
return value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["whileTrue:"]=1
//>>excludeEnd("ctx");
][0];
} else {
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(value).__lt_eq(stop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(array)._at_put_(pos,value);
pos=[$recv(pos).__plus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=3
//>>excludeEnd("ctx");
][0];
value=$recv(value).__plus(step);
return value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}));
}
return array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"to:by:",{stop:stop,step:step,array:array,value:value,pos:pos})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "to:by:do:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stop", "step", "aBlock"],
source: "to: stop by: step do: aBlock\x0a\x09| value |\x0a\x09value := self.\x0a\x09step = 0 ifTrue: [ self error: 'step must be non-zero' ].\x0a\x09step < 0\x0a\x09\x09ifTrue: [ [ value >= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09aBlock value: value.\x0a\x09\x09\x09\x09\x09value := value + step ]]\x0a\x09\x09ifFalse: [ [ value <= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09aBlock value: value.\x0a\x09\x09\x09\x09\x09value := value + step ]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "=", "error:", "ifTrue:ifFalse:", "<", "whileTrue:", ">=", "value:", "+", "<="]
}, function ($methodClass){ return function (stop,step,aBlock){
var self=this,$self=this;
var value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
value=self;
if($core.assert($recv(step).__eq((0)))){
$self._error_("step must be non-zero");
}
if($core.assert($recv(step).__lt((0)))){
[$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(value).__gt_eq(stop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(aBlock)._value_(value)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:"]=1
//>>excludeEnd("ctx");
][0];
value=[$recv(value).__plus(step)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0];
return value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["whileTrue:"]=1
//>>excludeEnd("ctx");
][0];
} else {
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(value).__lt_eq(stop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_(value);
value=$recv(value).__plus(step);
return value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}));
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"to:by:do:",{stop:stop,step:step,aBlock:aBlock,value:value})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "to:do:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stop", "aBlock"],
source: "to: stop do: aBlock\x0a\x09\x22Evaluate aBlock for each number from self to aNumber.\x22\x0a\x09| nextValue |\x0a\x09nextValue := self.\x0a\x09[ nextValue <= stop ]\x0a\x09\x09whileTrue:\x0a\x09\x09\x09[ aBlock value: nextValue.\x0a\x09\x09\x09nextValue := nextValue + 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileTrue:", "<=", "value:", "+"]
}, function ($methodClass){ return function (stop,aBlock){
var self=this,$self=this;
var nextValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
nextValue=self;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(nextValue).__lt_eq(stop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_(nextValue);
nextValue=$recv(nextValue).__plus((1));
return nextValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"to:do:",{stop:stop,aBlock:aBlock,nextValue:nextValue})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "truncated",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "truncated\x0a\x09<inlineJS: '\x0a\x09\x09if(self >= 0) {\x0a\x09\x09\x09return Math.floor(self);\x0a\x09\x09} else {\x0a\x09\x09\x09return Math.floor(self * (-1)) * (-1);\x0a\x09\x09};\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09if(self >= 0) {\x0a\x09\x09\x09return Math.floor(self);\x0a\x09\x09} else {\x0a\x09\x09\x09return Math.floor(self * (-1)) * (-1);\x0a\x09\x09};\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		if(self >= 0) {
			return Math.floor(self);
		} else {
			return Math.floor(self * (-1)) * (-1);
		};
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"truncated",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);

$core.addMethod(
$core.method({
selector: "|",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "| aNumber\x0a\x09^ self bitOr: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["bitOr:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._bitOr_(aNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"|",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Number);


$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Returns a tag or general category for this class.\x0a\x09Typically used to help tools do some reflection.\x0a\x09Helios, for example, uses this to decide what icon the class should display.\x22\x0a\x09\x0a\x09^ 'magnitude'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "magnitude";

}; }),
$globals.Number.a$cls);

$core.addMethod(
$core.method({
selector: "e",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "e\x0a\x09<inlineJS: 'return Math.E;'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.E;"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.E;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"e",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number.a$cls);

$core.addMethod(
$core.method({
selector: "negativeInfinity",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "negativeInfinity\x0a\x09<inlineJS: 'return Number.NEGATIVE_INFINITY'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Number.NEGATIVE_INFINITY"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Number.NEGATIVE_INFINITY;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"negativeInfinity",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number.a$cls);

$core.addMethod(
$core.method({
selector: "pi",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pi\x0a\x09<inlineJS: 'return Math.PI'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.PI"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.PI;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pi",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number.a$cls);

$core.addMethod(
$core.method({
selector: "positiveInfinity",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "positiveInfinity\x0a\x09<inlineJS: 'return Number.POSITIVE_INFINITY'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Number.POSITIVE_INFINITY"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Number.POSITIVE_INFINITY;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positiveInfinity",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number.a$cls);

$core.addMethod(
$core.method({
selector: "radiansPerDegree",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "radiansPerDegree\x0a\x09^ (self pi) / 180",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["/", "pi"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._pi()).__slash((180));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"radiansPerDegree",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Number.a$cls);


$core.addClass("Point", $globals.Object, ["x", "y"], "Kernel-Objects");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Point.comment="I represent an x-y pair of numbers usually designating a geometric coordinate.\x0a\x0a## API\x0a\x0aInstances are traditionally created using the binary `#@` message to a number:\x0a\x0a\x09100@120\x0a\x0aPoints can then be arithmetically manipulated:\x0a\x0a\x09100@100 + (10@10)\x0a\x0a...or for example:\x0a\x0a\x09(100@100) * 2\x0a\x0a**NOTE:** Creating a point with a negative y-value will need a space after `@` in order to avoid a parsing error:\x0a\x0a\x09100@ -100 \x22but 100@-100 would not parse\x22";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "*",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "* aPoint\x0a\x09^ Point x: self x * aPoint asPoint x y: self y * aPoint asPoint y",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["x:y:", "*", "x", "asPoint", "y"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Point)._x_y_([$recv([$self._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0]).__star($recv([$recv(aPoint)._asPoint()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asPoint"]=1
//>>excludeEnd("ctx");
][0])._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["*"]=1
//>>excludeEnd("ctx");
][0],$recv([$self._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0]).__star($recv($recv(aPoint)._asPoint())._y()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"*",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "+",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "+ aPoint\x0a\x09^ Point x: self x + aPoint asPoint x y: self y + aPoint asPoint y",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["x:y:", "+", "x", "asPoint", "y"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Point)._x_y_([$recv([$self._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv([$recv(aPoint)._asPoint()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asPoint"]=1
//>>excludeEnd("ctx");
][0])._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0],$recv([$self._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv($recv(aPoint)._asPoint())._y()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"+",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "-",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "- aPoint\x0a\x09^ Point x: self x - aPoint asPoint x y: self y - aPoint asPoint y",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["x:y:", "-", "x", "asPoint", "y"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Point)._x_y_([$recv([$self._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv([$recv(aPoint)._asPoint()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asPoint"]=1
//>>excludeEnd("ctx");
][0])._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0],$recv([$self._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0]).__minus($recv($recv(aPoint)._asPoint())._y()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"-",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "/",
protocol: "arithmetic",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "/ aPoint\x0a\x09^ Point x: self x / aPoint asPoint x y: self y / aPoint asPoint y",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["x:y:", "/", "x", "asPoint", "y"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Point)._x_y_([$recv([$self._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0]).__slash($recv([$recv(aPoint)._asPoint()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asPoint"]=1
//>>excludeEnd("ctx");
][0])._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=1
//>>excludeEnd("ctx");
][0],$recv([$self._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0]).__slash($recv($recv(aPoint)._asPoint())._y()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"/",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "<",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "< aPoint\x0a\x09^ self x < aPoint x and: [\x0a\x09\x09self y < aPoint y ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "<", "x", "y"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv([$self._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0]).__lt($recv(aPoint)._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<"]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$self._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0]).__lt($recv(aPoint)._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "<=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "<= aPoint\x0a\x09^ self x <= aPoint x and: [\x0a\x09\x09self y <= aPoint y ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "<=", "x", "y"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv([$self._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0]).__lt_eq($recv(aPoint)._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["<="]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$self._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0]).__lt_eq($recv(aPoint)._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<=",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "= aPoint\x0a\x09^ aPoint class = self class and: [\x0a\x09\x09(aPoint x = self x) & (aPoint y = self y) ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "=", "class", "&", "x", "y"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv([$recv(aPoint)._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0]).__eq($self._class())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$recv([$recv(aPoint)._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0]).__eq($self._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["="]=2
//>>excludeEnd("ctx");
][0]).__and($recv([$recv(aPoint)._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0]).__eq($self._y()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: ">",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "> aPoint\x0a\x09^ self x > aPoint x and: [\x0a\x09\x09self y > aPoint y ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", ">", "x", "y"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv([$self._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0]).__gt($recv(aPoint)._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[">"]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$self._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0]).__gt($recv(aPoint)._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: ">=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: ">= aPoint\x0a\x09^ self x >= aPoint x and: [\x0a\x09\x09self y >= aPoint y ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", ">=", "x", "y"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv([$self._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0]).__gt_eq($recv(aPoint)._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[">="]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$self._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0]).__gt_eq($recv(aPoint)._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">=",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "angle",
protocol: "geometry",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "angle\x0a\x09^ self y arcTan: self x",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["arcTan:", "y", "x"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._y())._arcTan_($self._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"angle",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "asPoint",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asPoint\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "corner:",
protocol: "rectangle creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "corner: aPoint\x0a\x09^ Rectangle origin: self corner: aPoint",
referencedClasses: ["Rectangle"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["origin:corner:"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Rectangle)._origin_corner_(self,aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"corner:",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "dist:",
protocol: "transforming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "dist: aPoint \x0a\x09\x22Answer the distance between aPoint and the receiver.\x22\x0a\x09| dx dy |\x0a\x09dx := aPoint x - x.\x0a\x09dy := aPoint y - y.\x0a\x09^ (dx * dx + (dy * dy)) sqrt",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "x", "y", "sqrt", "+", "*"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
var dx,dy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
dx=[$recv($recv(aPoint)._x()).__minus($self.x)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0];
dy=$recv($recv(aPoint)._y()).__minus($self.y);
return $recv($recv([$recv(dx).__star(dx)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["*"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv(dy).__star(dy)))._sqrt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dist:",{aPoint:aPoint,dx:dx,dy:dy})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "dotProduct:",
protocol: "point functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "dotProduct: aPoint\x0a\x09^ (x * aPoint x) + (y * aPoint y)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["+", "*", "x", "y"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($self.x).__star($recv(aPoint)._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["*"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv($self.y).__star($recv(aPoint)._y()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dotProduct:",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "extent:",
protocol: "rectangle creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "extent: aPoint\x0a\x09^ Rectangle origin: self extent: aPoint",
referencedClasses: ["Rectangle"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["origin:extent:"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Rectangle)._origin_extent_(self,aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "normal",
protocol: "point functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "normal\x0a\x09\x22Answer a Point representing the unit vector rotated 90 deg clockwise. For the zero point return -1@0.\x22\x0a\x0a\x09| n d |\x0a\x09n := y negated @ x.\x0a\x09(d := (n x * n x + (n y * n y))) = 0\x0a\x09\x09 ifTrue: [ ^ -1 @0 ].\x0a\x09^ n / d sqrt",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["@", "negated", "ifTrue:", "=", "+", "*", "x", "y", "/", "sqrt"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var n,d;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
n=[$recv($recv($self.y)._negated()).__at($self.x)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["@"]=1
//>>excludeEnd("ctx");
][0];
d=$recv([$recv([$recv(n)._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0]).__star($recv(n)._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["*"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv([$recv(n)._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0]).__star($recv(n)._y()));
if($core.assert($recv(d).__eq((0)))){
return (-1).__at((0));
}
return $recv(n).__slash($recv(d)._sqrt());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"normal",{n:n,d:d})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "normalized",
protocol: "point functions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "normalized\x0a\x09| r |\x0a\x09r := self r.\x0a\x09\x0a\x09r = 0\x0a\x09\x09ifTrue: [ ^ Point x: 0 y: 0 ]\x0a\x09\x09ifFalse: [ ^ Point x: x / r y: y / r ]",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["r", "ifTrue:ifFalse:", "=", "x:y:", "/"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var r;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
r=$self._r();
if($core.assert($recv(r).__eq((0)))){
return [$recv($globals.Point)._x_y_((0),(0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x:y:"]=1
//>>excludeEnd("ctx");
][0];
} else {
return $recv($globals.Point)._x_y_([$recv($self.x).__slash(r)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["/"]=1
//>>excludeEnd("ctx");
][0],$recv($self.y).__slash(r));
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"normalized",{r:r})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09\x22Print receiver in classic x@y notation.\x22\x0a\x0a\x09x printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: '@'.\x0a\x09(y notNil and: [ y negative ]) ifTrue: [\x0a\x09\x09\x09\x22Avoid ambiguous @- construct\x22\x0a\x09\x09\x09aStream space ].\x0a\x09\x0a\x09y printOn: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:", "nextPutAll:", "ifTrue:", "and:", "notNil", "negative", "space"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($self.x)._printOn_(aStream)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printOn:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._nextPutAll_("@");
if($core.assert($recv($recv($self.y)._notNil())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.y)._negative();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))){
$recv(aStream)._space();
}
$recv($self.y)._printOn_(aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "r",
protocol: "polar coordinates",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "r\x0a\x09^ ((x * x) + (y * y)) sqrt",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sqrt", "+", "*"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv([$recv($self.x).__star($self.x)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["*"]=1
//>>excludeEnd("ctx");
][0]).__plus($recv($self.y).__star($self.y)))._sqrt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"r",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "rectangle:",
protocol: "rectangle creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "rectangle: aPoint\x0a\x09^ Rectangle point: self point: aPoint",
referencedClasses: ["Rectangle"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["point:point:"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Rectangle)._point_point_(self,aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rectangle:",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "translateBy:",
protocol: "transforming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["delta"],
source: "translateBy: delta\x0a\x09\x22Answer a Point translated by delta (an instance of Point).\x22\x0a\x09^ (delta x + x) @ (delta y + y)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["@", "+", "x", "y"]
}, function ($methodClass){ return function (delta){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($recv(delta)._x()).__plus($self.x)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0]).__at($recv($recv(delta)._y()).__plus($self.y));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateBy:",{delta:delta})});
//>>excludeEnd("ctx");
}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "x",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "x\x0a\x09^ x",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.x;

}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "x:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "x: aNumber\x0a\x09x := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
$self.x=aNumber;
return self;

}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "y",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "y\x0a\x09^ y",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.y;

}; }),
$globals.Point);

$core.addMethod(
$core.method({
selector: "y:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "y: aNumber\x0a\x09y := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
$self.y=aNumber;
return self;

}; }),
$globals.Point);


$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Returns a tag or general category for this class.\x0a\x09Typically used to help tools do some reflection.\x0a\x09Helios, for example, uses this to decide what icon the class should display.\x22\x0a\x09\x0a\x09^ 'magnitude'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "magnitude";

}; }),
$globals.Point.a$cls);

$core.addMethod(
$core.method({
selector: "x:y:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber", "anotherNumber"],
source: "x: aNumber y: anotherNumber\x0a\x09^ self new\x0a\x09\x09x: aNumber;\x0a\x09\x09y: anotherNumber;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["x:", "new", "y:", "yourself"]
}, function ($methodClass){ return function (aNumber,anotherNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._x_(aNumber);
$recv($1)._y_(anotherNumber);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"x:y:",{aNumber:aNumber,anotherNumber:anotherNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Point.a$cls);


$core.addClass("Random", $globals.Object, [], "Kernel-Objects");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Random.comment="I an used to generate a random number and I am implemented as a trivial wrapper around javascript `Math.random()`.\x0a\x0a## API\x0a\x0aThe typical use case it to use the `#next` method like the following:\x0a\x0a\x09Random new next\x0a\x0aThis will return a float x where x < 1 and x > 0. If you want a random integer from 1 to 10 you can use `#atRandom`\x0a\x0a\x0910 atRandom\x0a\x0aA random number in a specific interval can be obtained with the following:\x0a\x0a\x09(3 to: 7) atRandom\x0a\x0aBe aware that `#to:` does not create an Interval as in other Smalltalk implementations but in fact an `Array` of numbers, so it's better to use:\x0a\x0a\x095 atRandom + 2\x0a\x0aSince `#atRandom` is implemented in `SequencableCollection` you can easy pick an element at random:\x0a\x0a\x09#('a' 'b' 'c') atRandom\x0a\x0aAs well as letter from a `String`:\x0a\x0a\x09'abc' atRandom\x0a\x0aSince Amber does not have Characters this will return a `String` of length 1 like for example `'b'`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "next",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09<inlineJS: 'return Math.random()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Math.random()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Math.random();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Random);

$core.addMethod(
$core.method({
selector: "next:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "next: anInteger\x0a\x09^ (1 to: anInteger) collect: [ :each | self next ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "to:", "next"]
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv((1)._to_(anInteger))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.Random);



$core.addClass("Rectangle", $globals.Object, ["origin", "corner"], "Kernel-Objects");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Rectangle.comment="I represent a Rectangle defined by my two corners.\x0a\x0aThe simplest way to create an instance is using Point methods:\x0a\x0a    1@1 corner: 2@2\x0a\x0aWIll create a rectangle with 1@1 as the top left and 2@2 at the bottom right.\x0a\x0a    1@1 extent: 1@1\x0a\x0aWill create the same rectangle, defining an origin and a size instead of an origin and a corner.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle"],
source: "= aRectangle\x0a\x09^ origin = aRectangle origin and: [ corner = aRectangle corner ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "=", "origin", "corner"]
}, function ($methodClass){ return function (aRectangle){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($self.origin).__eq($recv(aRectangle)._origin())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.corner).__eq($recv(aRectangle)._corner());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aRectangle:aRectangle})});
//>>excludeEnd("ctx");
}; }),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "containsPoint:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "containsPoint: aPoint\x0a\x09^ origin <= aPoint and: [ corner >= aPoint ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "<=", ">="]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self.origin).__lt_eq(aPoint))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.corner).__gt_eq(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"containsPoint:",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "containsRect:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRect"],
source: "containsRect: aRect\x0a\x09^ aRect origin >= origin and: [ aRect corner <= corner ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", ">=", "origin", "<=", "corner"]
}, function ($methodClass){ return function (aRect){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv(aRect)._origin()).__gt_eq($self.origin))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aRect)._corner()).__lt_eq($self.corner);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"containsRect:",{aRect:aRect})});
//>>excludeEnd("ctx");
}; }),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "corner",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "corner\x0a\x09^ corner",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.corner;

}; }),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "origin",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "origin\x0a\x09^ origin",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.origin;

}; }),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09origin printOn: aStream.\x0a\x09aStream nextPutAll: ' corner: '.\x0a\x09corner printOn: aStream.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:", "nextPutAll:"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($self.origin)._printOn_(aStream)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printOn:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._nextPutAll_(" corner: ");
$recv($self.corner)._printOn_(aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "setPoint:point:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["pt1", "pt2"],
source: "setPoint: pt1 point: pt2\x0a\x0a\x09origin := (pt1 x min: pt2 x)@(pt1 y min: pt2 y).\x0a\x09corner := (pt1 x max: pt2 x)@(pt1 y max: pt2 y).",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["@", "min:", "x", "y", "max:"]
}, function ($methodClass){ return function (pt1,pt2){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.origin=[$recv([$recv([$recv(pt1)._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=1
//>>excludeEnd("ctx");
][0])._min_([$recv(pt2)._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["min:"]=1
//>>excludeEnd("ctx");
][0]).__at($recv([$recv(pt1)._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["y"]=1
//>>excludeEnd("ctx");
][0])._min_([$recv(pt2)._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["y"]=2
//>>excludeEnd("ctx");
][0]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["@"]=1
//>>excludeEnd("ctx");
][0];
$self.corner=$recv([$recv([$recv(pt1)._x()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x"]=3
//>>excludeEnd("ctx");
][0])._max_($recv(pt2)._x())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["max:"]=1
//>>excludeEnd("ctx");
][0]).__at($recv([$recv(pt1)._y()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["y"]=3
//>>excludeEnd("ctx");
][0])._max_($recv(pt2)._y()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setPoint:point:",{pt1:pt1,pt2:pt2})});
//>>excludeEnd("ctx");
}; }),
$globals.Rectangle);


$core.addMethod(
$core.method({
selector: "origin:corner:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anOrigin", "aCorner"],
source: "origin: anOrigin corner: aCorner\x0a\x09^ self basicNew setPoint: anOrigin point: aCorner.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["setPoint:point:", "basicNew"]
}, function ($methodClass){ return function (anOrigin,aCorner){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._basicNew())._setPoint_point_(anOrigin,aCorner);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"origin:corner:",{anOrigin:anOrigin,aCorner:aCorner})});
//>>excludeEnd("ctx");
}; }),
$globals.Rectangle.a$cls);

$core.addMethod(
$core.method({
selector: "origin:extent:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anOrigin", "anExtent"],
source: "origin: anOrigin extent: anExtent\x0a\x09^ self basicNew setPoint: anOrigin point: anOrigin + anExtent.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["setPoint:point:", "basicNew", "+"]
}, function ($methodClass){ return function (anOrigin,anExtent){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._basicNew())._setPoint_point_(anOrigin,$recv(anOrigin).__plus(anExtent));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"origin:extent:",{anOrigin:anOrigin,anExtent:anExtent})});
//>>excludeEnd("ctx");
}; }),
$globals.Rectangle.a$cls);

$core.addMethod(
$core.method({
selector: "point:point:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anOrigin", "aCorner"],
source: "point: anOrigin point: aCorner\x0a\x09^ self basicNew setPoint: anOrigin point: aCorner.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["setPoint:point:", "basicNew"]
}, function ($methodClass){ return function (anOrigin,aCorner){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._basicNew())._setPoint_point_(anOrigin,aCorner);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"point:point:",{anOrigin:anOrigin,aCorner:aCorner})});
//>>excludeEnd("ctx");
}; }),
$globals.Rectangle.a$cls);


$core.addClass("UndefinedObject", $globals.Object, [], "Kernel-Objects");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.UndefinedObject.comment="I describe the behavior of my sole instance, `nil`. `nil` represents a prior value for variables that have not been initialized, or for results which are meaningless.\x0a\x0a`nil` is the Smalltalk equivalent of the `undefined` JavaScript object.\x0a\x0a__note:__ When sending messages to the `undefined` JavaScript object, it will be replaced by `nil`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "==",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "== anObject\x0a\x09^ anObject isNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isNil"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anObject)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"==",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09^ null",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return null;

}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "identityHash",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "identityHash\x0a\x09^ 'NIL'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "NIL";

}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "ifNil:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self ifNil: aBlock ifNotNil: []",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._ifNil_ifNotNil_(aBlock,(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "ifNil:ifNotNil:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ aBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "ifNotNil:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
return self;

}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "ifNotNil:ifNil:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ anotherBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anotherBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "isNil",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNil\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "notNil",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notNil\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: 'nil'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("nil");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.UndefinedObject);

$core.addMethod(
$core.method({
selector: "value",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09<inlineJS: 'return null'>",
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
}, function($ctx1) {$ctx1.fill(self,"value",{})});
//>>excludeEnd("ctx");
}; }),
$globals.UndefinedObject);


$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09\x09self error: 'You cannot create new instances of UndefinedObject. Use nil'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("You cannot create new instances of UndefinedObject. Use nil");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{})});
//>>excludeEnd("ctx");
}; }),
$globals.UndefinedObject.a$cls);

$core.setTraitComposition([{trait: $globals.TIsInGroup}], $globals.Object);
$core.setTraitComposition([{trait: $globals.TSubclassable}], $globals.UndefinedObject);

});
