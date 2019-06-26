define(["amber/boot", "require", "amber/core/Kernel-Collections", "amber/core/Kernel-Helpers", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Kernel-Classes");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("Behavior", $globals.Object, ["organization", "slots", "fn", "superclass"], "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Behavior.comment="I am the superclass of all class objects.\x0a\x0aIn addition to BehaviorBody, I define superclass/subclass relationships and instantiation.\x0a\x0aI define the protocol for creating instances of a class with `#basicNew` and `#new` (see `boot.js` for class constructors details).\x0a\x0aMy instances know about the subclass/superclass relationships between classes and contain the description that instances are created from.\x0a\x0aI also provide iterating over the class hierarchy.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "allInstanceVariableNames",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allInstanceVariableNames\x0a\x09| result |\x0a\x09result := self instanceVariableNames copy.\x0a\x09self superclass ifNotNil: [\x0a\x09\x09result addAll: self superclass allInstanceVariableNames ].\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copy", "instanceVariableNames", "ifNotNil:", "superclass", "addAll:", "allInstanceVariableNames"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
result=$recv($self._instanceVariableNames())._copy();
$1=$self._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
$recv(result)._addAll_($recv($self._superclass())._allInstanceVariableNames());
}
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allInstanceVariableNames",{result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allSelectors",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSelectors\x0a\x09^ self allSuperclasses\x0a\x09\x09inject: self selectors\x0a\x09\x09into: [ :acc :each | acc addAll: each selectors; yourself ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "allSuperclasses", "selectors", "addAll:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$self._allSuperclasses();
$2=$self._selectors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selectors"]=1;
//>>excludeEnd("ctx");
return $recv($1)._inject_into_($2,(function(acc,each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(acc)._addAll_($recv(each)._selectors());
return $recv(acc)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({acc:acc,each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allSubclasses",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSubclasses\x0a\x09\x22Answer an collection of the receiver's and the receiver's descendent's subclasses. \x22\x0a\x0a\x09^ Array streamContents: [ :str | self allSubclassesDo: [ :each | str nextPut: each ] ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "allSubclassesDo:", "nextPut:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Array)._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._allSubclassesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(str)._nextPut_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSubclasses",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allSubclassesDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "allSubclassesDo: aBlock\x0a\x09\x22Evaluate the argument, aBlock, for each of the receiver's subclasses.\x22\x0a\x0a<inlineJS: '$core.traverseClassTree(self, function(subclass) {\x0a\x09if (subclass !== self) aBlock._value_(subclass);\x0a})'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["$core.traverseClassTree(self, function(subclass) {\x0a\x09if (subclass !== self) aBlock._value_(subclass);\x0a})"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.traverseClassTree(self, function(subclass) {
	if (subclass !== self) aBlock._value_(subclass);
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSubclassesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allSuperclasses",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSuperclasses\x0a\x09\x0a\x09self superclass ifNil: [ ^ #() ].\x0a\x09\x0a\x09^ (OrderedCollection with: self superclass)\x0a\x09\x09addAll: self superclass allSuperclasses;\x0a\x09\x09yourself",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "superclass", "addAll:", "with:", "allSuperclasses", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
$1=$self._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.a$nil){
return [];
} else {
$1;
}
$3=$self._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=2;
//>>excludeEnd("ctx");
$2=$recv($globals.OrderedCollection)._with_($3);
$recv($2)._addAll_($recv($self._superclass())._allSuperclasses());
return $recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSuperclasses",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "alternateConstructorFromSelector:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "alternateConstructorFromSelector: aSelector\x0a\x09^ self\x0a\x09\x09javaScriptConstructorFor: self prototype\x0a\x09\x09initializingVia: (self >> aSelector) fn",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["javaScriptConstructorFor:initializingVia:", "prototype", "fn", ">>"]
}, function ($methodClass){ return function (aSelector){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._javaScriptConstructorFor_initializingVia_($self._prototype(),$recv($self.__gt_gt(aSelector))._fn());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alternateConstructorFromSelector:",{aSelector:aSelector})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "basicNew",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicNew\x0a\x09<inlineJS: 'return new self.fn()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return new self.fn()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new self.fn();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicNew",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "basicOrganization",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicOrganization\x0a\x09^ organization",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.organization;

}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "basicOrganization:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassOrganizer"],
source: "basicOrganization: aClassOrganizer\x0a\x09organization := aClassOrganizer",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClassOrganizer){
var self=this,$self=this;
$self.organization=aClassOrganizer;
return self;

}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "beJavaScriptSubclassOf:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJavaScriptFunction"],
source: "beJavaScriptSubclassOf: aJavaScriptFunction\x0a\x09\x22Reparent the JS constructor's prototype to aJavaScriptFunction's one,\x0a\x09plus bookkeeping. That way I stay part of (simulated) Smalltalk hierarchy,\x0a\x09but my instances will physically be instanceof aJavaScriptFunction.\x22\x0a\x0a\x09self makeJavaScriptConstructorSubclassOf: aJavaScriptFunction.\x0a\x09Smalltalk core detachClass: self",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["makeJavaScriptConstructorSubclassOf:", "detachClass:", "core"]
}, function ($methodClass){ return function (aJavaScriptFunction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._makeJavaScriptConstructorSubclassOf_(aJavaScriptFunction);
$recv($recv($globals.Smalltalk)._core())._detachClass_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beJavaScriptSubclassOf:",{aJavaScriptFunction:aJavaScriptFunction})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "canUnderstand:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "canUnderstand: aSelector\x0a\x09^ (self includesSelector: aSelector asString) or: [\x0a\x09\x09self superclass notNil and: [ self superclass canUnderstand: aSelector ]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["or:", "includesSelector:", "asString", "and:", "notNil", "superclass", "canUnderstand:"]
}, function ($methodClass){ return function (aSelector){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
return $recv($self._includesSelector_($recv(aSelector)._asString()))._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$self._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._notNil();
return $recv($1)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self._superclass())._canUnderstand_(aSelector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canUnderstand:",{aSelector:aSelector})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "includesBehavior:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "includesBehavior: aClass\x0a\x09^ self == aClass or: [\x0a\x09\x09\x09self inheritsFrom: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["or:", "==", "inheritsFrom:"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.__eq_eq(aClass))._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._inheritsFrom_(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesBehavior:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "inheritsFrom:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "inheritsFrom: aClass\x0a\x09self superclass ifNil: [ ^ false ].\x0a\x0a\x09^ aClass == self superclass or: [ \x0a\x09\x09self superclass inheritsFrom: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "superclass", "or:", "==", "inheritsFrom:"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
$1=$self._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.a$nil){
return false;
} else {
$1;
}
$3=$self._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=2;
//>>excludeEnd("ctx");
$2=$recv(aClass).__eq_eq($3);
return $recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._superclass())._inheritsFrom_(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inheritsFrom:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "instanceVariableNames",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instanceVariableNames\x0a\x09^ slots",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.slots;

}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "isBehavior",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBehavior\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "javaScriptConstructor",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "javaScriptConstructor\x0a\x09\x22Answer the JS constructor used to instantiate. See kernel-language.js\x22\x0a\x09\x0a\x09^ fn",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.fn;

}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "javaScriptConstructor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJavaScriptFunction"],
source: "javaScriptConstructor: aJavaScriptFunction\x0a\x09\x22Set the JS constructor used to instantiate.\x0a\x09See the JS counter-part in boot.js `$core.setClassConstructor'\x22\x0a\x09\x0a\x09Smalltalk core setClassConstructor: self to: aJavaScriptFunction",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["setClassConstructor:to:", "core"]
}, function ($methodClass){ return function (aJavaScriptFunction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Smalltalk)._core())._setClassConstructor_to_(self,aJavaScriptFunction);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"javaScriptConstructor:",{aJavaScriptFunction:aJavaScriptFunction})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "javaScriptConstructorFor:initializingVia:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPrototype", "aMethodBlock"],
source: "javaScriptConstructorFor: aPrototype initializingVia: aMethodBlock\x0a\x09<inlineJS: '\x0a\x09\x09function Ctr () {\x0a\x09\x09\x09aMethodBlock.apply(this, arguments);\x0a\x09\x09}\x0a\x09\x09Ctr.prototype = aPrototype;\x0a\x09\x09return Ctr;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09function Ctr () {\x0a\x09\x09\x09aMethodBlock.apply(this, arguments);\x0a\x09\x09}\x0a\x09\x09Ctr.prototype = aPrototype;\x0a\x09\x09return Ctr;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aPrototype,aMethodBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		function Ctr () {
			aMethodBlock.apply(this, arguments);
		}
		Ctr.prototype = aPrototype;
		return Ctr;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"javaScriptConstructorFor:initializingVia:",{aPrototype:aPrototype,aMethodBlock:aMethodBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "javascriptConstructor",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "javascriptConstructor\x0a\x09self deprecatedAPI: 'Use #javaScriptConstructor instead.'.\x0a\x09^ self javaScriptConstructor",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deprecatedAPI:", "javaScriptConstructor"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._deprecatedAPI_("Use #javaScriptConstructor instead.");
return $self._javaScriptConstructor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"javascriptConstructor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "javascriptConstructor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJavaScriptFunction"],
source: "javascriptConstructor: aJavaScriptFunction\x0a\x09self deprecatedAPI: 'Use #javaScriptConstructor: instead.'.\x0a\x09^ self javaScriptConstructor: aJavaScriptFunction",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deprecatedAPI:", "javaScriptConstructor:"]
}, function ($methodClass){ return function (aJavaScriptFunction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._deprecatedAPI_("Use #javaScriptConstructor: instead.");
return $self._javaScriptConstructor_(aJavaScriptFunction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"javascriptConstructor:",{aJavaScriptFunction:aJavaScriptFunction})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "lookupSelector:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector"],
source: "lookupSelector: selector\x0a\x09\x22Look up the given selector in my methodDictionary.\x0a\x09Return the corresponding method if found.\x0a\x09Otherwise chase the superclass chain and try again.\x0a\x09Return nil if no method is found.\x22\x0a\x09\x0a\x09| lookupClass |\x0a\x09\x0a\x09lookupClass := self.\x0a\x09[ lookupClass = nil ] whileFalse: [\x0a\x09\x09(lookupClass includesSelector: selector)\x0a\x09\x09\x09\x09ifTrue: [ ^ lookupClass methodAt: selector ].\x0a\x09\x09\x09lookupClass := lookupClass superclass ].\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileFalse:", "=", "ifTrue:", "includesSelector:", "methodAt:", "superclass"]
}, function ($methodClass){ return function (selector){
var self=this,$self=this;
var lookupClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
lookupClass=self;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(lookupClass).__eq(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(lookupClass)._includesSelector_(selector);
if($core.assert($1)){
throw $early=[$recv(lookupClass)._methodAt_(selector)];
}
lookupClass=$recv(lookupClass)._superclass();
return lookupClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupSelector:",{selector:selector,lookupClass:lookupClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "makeJavaScriptConstructorSubclassOf:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["javaScriptClass"],
source: "makeJavaScriptConstructorSubclassOf: javaScriptClass\x0a\x09<inlineJS: '\x0a\x09\x09Object.setPrototypeOf($self.fn.prototype, javaScriptClass.prototype);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09Object.setPrototypeOf($self.fn.prototype, javaScriptClass.prototype);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (javaScriptClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		Object.setPrototypeOf($self.fn.prototype, javaScriptClass.prototype);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeJavaScriptConstructorSubclassOf:",{javaScriptClass:javaScriptClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09^ self basicNew initialize",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "basicNew"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._basicNew())._initialize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "prototype",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prototype\x0a\x09^ self javaScriptConstructor prototype",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["prototype", "javaScriptConstructor"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._javaScriptConstructor())._prototype();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prototype",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "subclasses",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subclasses\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"subclasses",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "superclass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "superclass\x0a\x09^ superclass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.superclass;

}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "theMetaClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theMetaClass\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"theMetaClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "theNonMetaClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theNonMetaClass\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"theNonMetaClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "withAllSubclasses",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "withAllSubclasses\x0a\x09^ (Array with: self) addAll: self allSubclasses; yourself",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addAll:", "with:", "allSubclasses", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Array)._with_(self);
$recv($1)._addAll_($self._allSubclasses());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withAllSubclasses",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Behavior);



$core.addClass("Class", $globals.Behavior, ["package", "subclasses"], "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Class.comment="I am __the__ class object.\x0a\x0aMy instances are the classes of the system.\x0aClass creation is done throught a `ClassBuilder` instance.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "basicPackage:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "basicPackage: aPackage\x0a\x09package := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
$self.package=aPackage;
return self;

}; }),
$globals.Class);

$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Returns a tag or general category for this class.\x0a\x09Typically used to help tools do some reflection.\x0a\x09Helios, for example, uses this to decide what icon the class should display.\x22\x0a\x09\x0a\x09^ 'class'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "class";

}; }),
$globals.Class);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream | stream\x0a\x09\x09print: self superclass; write: ' subclass: '; printSymbol: self name; lf;\x0a\x09\x09write: (self traitCompositionDefinition ifNotEmpty: [ :tcd | { String tab. 'uses: '. tcd. String lf }]);\x0a\x09\x09tab; write: {'slots: {'. ('. ' join: (self instanceVariableNames collect: #symbolPrintString)). '}'}; lf;\x0a\x09\x09tab; write: 'package: '; print: self category ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "print:", "superclass", "write:", "printSymbol:", "name", "lf", "ifNotEmpty:", "traitCompositionDefinition", "tab", "join:", "collect:", "instanceVariableNames", "category"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._print_($self._superclass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["print:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._write_(" subclass: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._printSymbol_($self._name());
$recv(stream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(stream)._write_($recv($self._traitCompositionDefinition())._ifNotEmpty_((function(tcd){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($globals.String)._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
return [$1,"uses: ",tcd,$2];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({tcd:tcd},$ctx2,2)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=2;
//>>excludeEnd("ctx");
$recv(stream)._write_(["slots: {",". "._join_($recv($self._instanceVariableNames())._collect_("symbolPrintString")),"}"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
$recv(stream)._lf();
$recv(stream)._tab();
$recv(stream)._write_("package: ");
return $recv(stream)._print_($self._category());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Class);

$core.addMethod(
$core.method({
selector: "includingPossibleMetaDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "includingPossibleMetaDo: aBlock\x0a\x0a\x09aBlock value: self.\x0a\x09aBlock value: self theMetaClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:", "theMetaClass"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._value_($self._theMetaClass());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includingPossibleMetaDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Class);

$core.addMethod(
$core.method({
selector: "isClass",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isClass\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.Class);

$core.addMethod(
$core.method({
selector: "package",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ package",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.package;

}; }),
$globals.Class);

$core.addMethod(
$core.method({
selector: "provided",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "provided\x0a\x09\x22Returns JS proxy that allows to access 'static API', as in\x0a\x09  Number provided EPSILON\x0a\x09that forwards to (wrapped JS) constructor function.\x22\x0a\x09\x0a\x09^ self javaScriptConstructor provided",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["provided", "javaScriptConstructor"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._javaScriptConstructor())._provided();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"provided",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Class);

$core.addMethod(
$core.method({
selector: "rename:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "rename: aString\x0a\x09ClassBuilder new renameClass: self to: aString",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["renameClass:to:", "new"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.ClassBuilder)._new())._renameClass_to_(self,aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rename:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Class);

$core.addMethod(
$core.method({
selector: "subclasses",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subclasses\x0a\x09^ subclasses copy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.subclasses)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclasses",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Class);

$core.addMethod(
$core.method({
selector: "theMetaClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theMetaClass\x0a\x09^ self class",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theMetaClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Class);



$core.addClass("Metaclass", $globals.Behavior, ["instanceClass"], "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Metaclass.comment="I am the root of the class hierarchy.\x0a\x0aMy instances are metaclasses, one for each real class, and have a single instance, which they hold onto: the class that they are the metaclass of.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJavaScriptSource",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSource\x0a\x09^ '$globals.', self instanceClass name, '.a$cls'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "name", "instanceClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("$globals.".__comma($recv($self._instanceClass())._name())).__comma(".a$cls");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSource",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream | stream\x0a\x09\x09print: self;\x0a\x09\x09write: (self traitCompositionDefinition\x0a\x09\x09\x09ifEmpty: [' ']\x0a\x09\x09\x09ifNotEmpty: [ :tcd | { String lf. String tab. 'uses: '. tcd. String lf. String tab }]);\x0a\x09\x09write: {'slots: {'. ('. ' join: (self instanceVariableNames collect: #symbolPrintString)). '}'} ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "print:", "write:", "ifEmpty:ifNotEmpty:", "traitCompositionDefinition", "lf", "tab", "join:", "collect:", "instanceVariableNames"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._print_(self);
$recv(stream)._write_($recv($self._traitCompositionDefinition())._ifEmpty_ifNotEmpty_((function(){
return " ";

}),(function(tcd){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($globals.String)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.String)._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
return [$1,$2,"uses: ",tcd,$recv($globals.String)._lf(),$recv($globals.String)._tab()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({tcd:tcd},$ctx2,3)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
return $recv(stream)._write_(["slots: {",". "._join_($recv($self._instanceVariableNames())._collect_("symbolPrintString")),"}"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "instanceClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instanceClass\x0a\x09^ instanceClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.instanceClass;

}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "instanceVariableNames:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "instanceVariableNames: aString\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self slots: aString instanceVariablesStringAsSlotList",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["slots:", "instanceVariablesStringAsSlotList"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._slots_($recv(aString)._instanceVariablesStringAsSlotList());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "isMetaclass",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMetaclass\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ self instanceClass name, ' class'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "name", "instanceClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._instanceClass())._name()).__comma(" class");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "package",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ self instanceClass package",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["package", "instanceClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._instanceClass())._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"package",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "slots:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "slots: aCollection\x0a\x09ClassBuilder new\x0a\x09\x09class: self slots: aCollection.\x0a\x09^ self",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["class:slots:", "new"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.ClassBuilder)._new())._class_slots_(self,aCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"slots:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "subclasses",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subclasses\x0a\x09^ Smalltalk core metaSubclasses: self",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["metaSubclasses:", "core"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Smalltalk)._core())._metaSubclasses_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclasses",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "theMetaClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theMetaClass\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "theNonMetaClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theNonMetaClass\x0a\x09^ self instanceClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["instanceClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._instanceClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theNonMetaClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "uses:instanceVariableNames:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTraitCompositionDescription", "aString"],
source: "uses: aTraitCompositionDescription instanceVariableNames: aString\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self uses: aTraitCompositionDescription slots: aString instanceVariablesStringAsSlotList",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["uses:slots:", "instanceVariablesStringAsSlotList"]
}, function ($methodClass){ return function (aTraitCompositionDescription,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._uses_slots_(aTraitCompositionDescription,$recv(aString)._instanceVariablesStringAsSlotList());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uses:instanceVariableNames:",{aTraitCompositionDescription:aTraitCompositionDescription,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "uses:slots:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTraitCompositionDescription", "aCollection"],
source: "uses: aTraitCompositionDescription slots: aCollection\x0a\x09self\x0a\x09\x09slots: aCollection;\x0a\x09\x09setTraitComposition: aTraitCompositionDescription asTraitComposition.\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["slots:", "setTraitComposition:", "asTraitComposition"]
}, function ($methodClass){ return function (aTraitCompositionDescription,aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._slots_(aCollection);
$self._setTraitComposition_($recv(aTraitCompositionDescription)._asTraitComposition());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uses:slots:",{aTraitCompositionDescription:aTraitCompositionDescription,aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Metaclass);



$core.addClass("ClassBuilder", $globals.Object, [], "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassBuilder.comment="I am responsible for compiling new classes or modifying existing classes in the system.\x0a\x0aRather than using me directly to compile a class, use `Class >> subclass:instanceVariableNames:package:`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addSubclassOf:named:instanceVariableNames:package:",
protocol: "class definition",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className", "aCollection", "packageName"],
source: "addSubclassOf: aClass named: className instanceVariableNames: aCollection package: packageName\x0a\x09| theClass thePackage |\x0a\x09\x0a\x09theClass := Smalltalk globals at: className.\x0a\x09thePackage := Package named: packageName.\x0a\x09\x0a\x09theClass ifNotNil: [\x0a\x09\x09theClass package: thePackage.\x0a\x09\x09theClass superclass == aClass\x0a\x09\x09\x09ifFalse: [ ^ self\x0a\x09\x09\x09\x09migrateClassNamed: className\x0a\x09\x09\x09\x09superclass: aClass\x0a\x09\x09\x09\x09instanceVariableNames: aCollection\x0a\x09\x09\x09\x09package: packageName ] ].\x0a\x09\x09\x0a\x09^ (self\x0a\x09\x09basicAddSubclassOf: aClass\x0a\x09\x09named: className\x0a\x09\x09instanceVariableNames: aCollection\x0a\x09\x09package: packageName) recompile; yourself",
referencedClasses: ["Smalltalk", "Package"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:", "globals", "named:", "ifNotNil:", "package:", "ifFalse:", "==", "superclass", "migrateClassNamed:superclass:instanceVariableNames:package:", "recompile", "basicAddSubclassOf:named:instanceVariableNames:package:", "yourself"]
}, function ($methodClass){ return function (aClass,className,aCollection,packageName){
var self=this,$self=this;
var theClass,thePackage;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
theClass=$recv($recv($globals.Smalltalk)._globals())._at_(className);
thePackage=$recv($globals.Package)._named_(packageName);
$1=theClass;
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
$recv(theClass)._package_(thePackage);
$2=$recv($recv(theClass)._superclass()).__eq_eq(aClass);
if(!$core.assert($2)){
return $self._migrateClassNamed_superclass_instanceVariableNames_package_(className,aClass,aCollection,packageName);
}
}
$3=$self._basicAddSubclassOf_named_instanceVariableNames_package_(aClass,className,aCollection,packageName);
$recv($3)._recompile();
return $recv($3)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSubclassOf:named:instanceVariableNames:package:",{aClass:aClass,className:className,aCollection:aCollection,packageName:packageName,theClass:theClass,thePackage:thePackage})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "addTraitNamed:package:",
protocol: "class definition",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["traitName", "packageName"],
source: "addTraitNamed: traitName package: packageName\x0a\x09| theTrait thePackage |\x0a\x09\x0a\x09theTrait := Smalltalk globals at: traitName.\x0a\x09thePackage := Package named: packageName.\x0a\x09\x0a\x09theTrait ifNotNil: [ ^ theTrait package: thePackage; recompile; yourself ].\x0a\x09\x09\x0a\x09^ self\x0a\x09\x09basicAddTraitNamed: traitName\x0a\x09\x09package: packageName",
referencedClasses: ["Smalltalk", "Package"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:", "globals", "named:", "ifNotNil:", "package:", "recompile", "yourself", "basicAddTraitNamed:package:"]
}, function ($methodClass){ return function (traitName,packageName){
var self=this,$self=this;
var theTrait,thePackage;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
theTrait=$recv($recv($globals.Smalltalk)._globals())._at_(traitName);
thePackage=$recv($globals.Package)._named_(packageName);
$1=theTrait;
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
$2=theTrait;
$recv($2)._package_(thePackage);
$recv($2)._recompile();
return $recv($2)._yourself();
}
return $self._basicAddTraitNamed_package_(traitName,packageName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTraitNamed:package:",{traitName:traitName,packageName:packageName,theTrait:theTrait,thePackage:thePackage})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicAddSubclassOf:named:instanceVariableNames:package:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString", "aCollection", "packageName"],
source: "basicAddSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName\x0a\x09<inlineJS: '\x0a\x09\x09return $core.addClass(aString, aClass, aCollection, packageName);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return $core.addClass(aString, aClass, aCollection, packageName);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aClass,aString,aCollection,packageName){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return $core.addClass(aString, aClass, aCollection, packageName);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAddSubclassOf:named:instanceVariableNames:package:",{aClass:aClass,aString:aString,aCollection:aCollection,packageName:packageName})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicAddTraitNamed:package:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "basicAddTraitNamed: aString package: anotherString\x0a\x09<inlineJS: 'return $core.addTrait(aString, anotherString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $core.addTrait(aString, anotherString)"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.addTrait(aString, anotherString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAddTraitNamed:package:",{aString:aString,anotherString:anotherString})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicClass:instanceVariables:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aCollection"],
source: "basicClass: aClass instanceVariables: aCollection\x0a\x0a\x09aClass isMetaclass ifFalse: [ self error: aClass name, ' is not a metaclass' ].\x0a\x09Smalltalk core setSlots: aClass to: aCollection",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "isMetaclass", "error:", ",", "name", "setSlots:to:", "core"]
}, function ($methodClass){ return function (aClass,aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aClass)._isMetaclass();
if(!$core.assert($1)){
$self._error_($recv($recv(aClass)._name()).__comma(" is not a metaclass"));
}
$recv($recv($globals.Smalltalk)._core())._setSlots_to_(aClass,aCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicClass:instanceVariables:",{aClass:aClass,aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicRemoveClass:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "basicRemoveClass: aClass\x0a\x09<inlineJS: '$core.removeClass(aClass)'>",
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
}, function($ctx1) {$ctx1.fill(self,"basicRemoveClass:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicRenameClass:to:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "basicRenameClass: aClass to: aString\x0a\x09<inlineJS: '\x0a\x09\x09$globals[aString] = aClass;\x0a\x09\x09delete $globals[aClass.name];\x0a\x09\x09aClass.name = aString;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09$globals[aString] = aClass;\x0a\x09\x09delete $globals[aClass.name];\x0a\x09\x09aClass.name = aString;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aClass,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		$globals[aString] = aClass;
		delete $globals[aClass.name];
		aClass.name = aString;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicRenameClass:to:",{aClass:aClass,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicSwapClassNames:with:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anotherClass"],
source: "basicSwapClassNames: aClass with: anotherClass\x0a\x09<inlineJS: '\x0a\x09\x09var tmp = aClass.name;\x0a\x09\x09aClass.name = anotherClass.name;\x0a\x09\x09anotherClass.name = tmp;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var tmp = aClass.name;\x0a\x09\x09aClass.name = anotherClass.name;\x0a\x09\x09anotherClass.name = tmp;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aClass,anotherClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var tmp = aClass.name;
		aClass.name = anotherClass.name;
		anotherClass.name = tmp;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicSwapClassNames:with:",{aClass:aClass,anotherClass:anotherClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "class:slots:",
protocol: "class definition",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aCollection"],
source: "class: aClass slots: aCollection\x0a\x09self basicClass: aClass instanceVariables: aCollection.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassDefinitionChanged new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassDefinitionChanged"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["basicClass:instanceVariables:", "announce:", "current", "theClass:", "new", "yourself"]
}, function ($methodClass){ return function (aClass,aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$self._basicClass_instanceVariables_(aClass,aCollection);
$1=$recv($globals.SystemAnnouncer)._current();
$3=$recv($globals.ClassDefinitionChanged)._new();
$recv($3)._theClass_(aClass);
$2=$recv($3)._yourself();
$recv($1)._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"class:slots:",{aClass:aClass,aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "copyClass:named:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className"],
source: "copyClass: aClass named: className\x0a\x09| newClass |\x0a\x0a\x09newClass := self\x0a\x09\x09addSubclassOf: aClass superclass\x0a\x09\x09named: className\x0a\x09\x09instanceVariableNames: aClass instanceVariableNames\x0a\x09\x09package: aClass package name.\x0a\x0a\x09self copyClass: aClass to: newClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassAdded new\x0a\x09\x09\x09theClass: newClass;\x0a\x09\x09\x09yourself).\x0a\x09\x0a\x09^ newClass",
referencedClasses: ["SystemAnnouncer", "ClassAdded"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "instanceVariableNames", "name", "package", "copyClass:to:", "announce:", "current", "theClass:", "new", "yourself"]
}, function ($methodClass){ return function (aClass,className){
var self=this,$self=this;
var newClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
newClass=$self._addSubclassOf_named_instanceVariableNames_package_($recv(aClass)._superclass(),className,$recv(aClass)._instanceVariableNames(),$recv($recv(aClass)._package())._name());
$self._copyClass_to_(aClass,newClass);
$1=$recv($globals.SystemAnnouncer)._current();
$3=$recv($globals.ClassAdded)._new();
$recv($3)._theClass_(newClass);
$2=$recv($3)._yourself();
$recv($1)._announce_($2);
return newClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyClass:named:",{aClass:aClass,className:className,newClass:newClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "copyClass:to:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anotherClass"],
source: "copyClass: aClass to: anotherClass\x0a\x0a\x09anotherClass comment: aClass comment.\x0a\x0a\x09aClass methodDictionary valuesDo: [ :each |\x0a\x09\x09each origin = aClass ifTrue: [\x0a\x09\x09\x09Compiler new install: each source forClass: anotherClass protocol: each protocol ] ].\x0a\x09anotherClass setTraitComposition: aClass traitComposition.\x0a\x0a\x09self basicClass: anotherClass class instanceVariables: aClass class instanceVariableNames.\x0a\x0a\x09aClass class methodDictionary valuesDo: [ :each |\x0a\x09\x09each origin = aClass class ifTrue: [\x0a\x09\x09\x09Compiler new install: each source forClass: anotherClass class protocol: each protocol ] ].\x0a\x09anotherClass class setTraitComposition: aClass class traitComposition",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["comment:", "comment", "valuesDo:", "methodDictionary", "ifTrue:", "=", "origin", "install:forClass:protocol:", "new", "source", "protocol", "setTraitComposition:", "traitComposition", "basicClass:instanceVariables:", "class", "instanceVariableNames"]
}, function ($methodClass){ return function (aClass,anotherClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5,$6,$7,$8,$10,$9,$12,$11,$14,$15,$13,$16,$17,$18,$19;
$recv(anotherClass)._comment_($recv(aClass)._comment());
$1=$recv(aClass)._methodDictionary();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodDictionary"]=1;
//>>excludeEnd("ctx");
$recv($1)._valuesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(each)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["origin"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$4=$recv($globals.Compiler)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$5=$recv(each)._source();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["source"]=1;
//>>excludeEnd("ctx");
$6=$recv(each)._protocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["protocol"]=1;
//>>excludeEnd("ctx");
return $recv($4)._install_forClass_protocol_($5,anotherClass,$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["install:forClass:protocol:"]=1;
//>>excludeEnd("ctx");
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["valuesDo:"]=1;
//>>excludeEnd("ctx");
$7=$recv(aClass)._traitComposition();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["traitComposition"]=1;
//>>excludeEnd("ctx");
$recv(anotherClass)._setTraitComposition_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["setTraitComposition:"]=1;
//>>excludeEnd("ctx");
$8=$recv(anotherClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$10=$recv(aClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._instanceVariableNames();
$self._basicClass_instanceVariables_($8,$9);
$12=$recv(aClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=3;
//>>excludeEnd("ctx");
$11=$recv($12)._methodDictionary();
$recv($11)._valuesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$14=$recv(each)._origin();
$15=$recv(aClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=4;
//>>excludeEnd("ctx");
$13=$recv($14).__eq($15);
if($core.assert($13)){
$16=$recv($globals.Compiler)._new();
$17=$recv(each)._source();
$18=$recv(anotherClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=5;
//>>excludeEnd("ctx");
return $recv($16)._install_forClass_protocol_($17,$18,$recv(each)._protocol());
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$19=$recv(anotherClass)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=6;
//>>excludeEnd("ctx");
$recv($19)._setTraitComposition_($recv($recv(aClass)._class())._traitComposition());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,anotherClass:anotherClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "migrateClass:superclass:",
protocol: "class migration",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anotherClass"],
source: "migrateClass: aClass superclass: anotherClass\x0a\x09^ self\x0a\x09\x09migrateClassNamed: aClass name\x0a\x09\x09superclass: anotherClass\x0a\x09\x09instanceVariableNames: aClass instanceVariableNames\x0a\x09\x09package: aClass package name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["migrateClassNamed:superclass:instanceVariableNames:package:", "name", "instanceVariableNames", "package"]
}, function ($methodClass){ return function (aClass,anotherClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aClass)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $self._migrateClassNamed_superclass_instanceVariableNames_package_($1,anotherClass,$recv(aClass)._instanceVariableNames(),$recv($recv(aClass)._package())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"migrateClass:superclass:",{aClass:aClass,anotherClass:anotherClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "migrateClassNamed:superclass:instanceVariableNames:package:",
protocol: "class migration",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["className", "aClass", "aCollection", "packageName"],
source: "migrateClassNamed: className superclass: aClass instanceVariableNames: aCollection package: packageName\x0a\x09| oldClass newClass tmp |\x0a\x09\x0a\x09tmp := 'new*', className.\x0a\x09oldClass := Smalltalk globals at: className.\x0a\x09\x0a\x09newClass := self\x0a\x09\x09addSubclassOf: aClass\x0a\x09\x09named: tmp\x0a\x09\x09instanceVariableNames: aCollection\x0a\x09\x09package: packageName.\x0a\x0a\x09self basicSwapClassNames: oldClass with: newClass.\x0a\x0a\x09[ self copyClass: oldClass to: newClass ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :exception |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09basicSwapClassNames: oldClass with: newClass;\x0a\x09\x09\x09\x09basicRemoveClass: newClass.\x0a\x09\x09\x09\x09exception pass ].\x0a\x0a\x09self\x0a\x09\x09rawRenameClass: oldClass to: tmp;\x0a\x09\x09rawRenameClass: newClass to: className.\x0a\x0a\x09oldClass subclasses \x0a\x09\x09do: [ :each | self migrateClass: each superclass: newClass ].\x0a\x0a\x09self basicRemoveClass: oldClass.\x0a\x09\x0a\x09SystemAnnouncer current announce: (ClassMigrated new\x0a\x09\x09theClass: newClass;\x0a\x09\x09oldClass: oldClass;\x0a\x09\x09yourself).\x0a\x09\x0a\x09^ newClass",
referencedClasses: ["Smalltalk", "Error", "SystemAnnouncer", "ClassMigrated"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "at:", "globals", "addSubclassOf:named:instanceVariableNames:package:", "basicSwapClassNames:with:", "on:do:", "copyClass:to:", "basicRemoveClass:", "pass", "rawRenameClass:to:", "do:", "subclasses", "migrateClass:superclass:", "announce:", "current", "theClass:", "new", "oldClass:", "yourself"]
}, function ($methodClass){ return function (className,aClass,aCollection,packageName){
var self=this,$self=this;
var oldClass,newClass,tmp;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
tmp="new*".__comma(className);
oldClass=$recv($recv($globals.Smalltalk)._globals())._at_(className);
newClass=$self._addSubclassOf_named_instanceVariableNames_package_(aClass,tmp,aCollection,packageName);
$self._basicSwapClassNames_with_(oldClass,newClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicSwapClassNames:with:"]=1;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._copyClass_to_(oldClass,newClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(exception){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._basicSwapClassNames_with_(oldClass,newClass);
$self._basicRemoveClass_(newClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["basicRemoveClass:"]=1;
//>>excludeEnd("ctx");
return $recv(exception)._pass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({exception:exception},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self._rawRenameClass_to_(oldClass,tmp);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rawRenameClass:to:"]=1;
//>>excludeEnd("ctx");
$self._rawRenameClass_to_(newClass,className);
$recv($recv(oldClass)._subclasses())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._migrateClass_superclass_(each,newClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$self._basicRemoveClass_(oldClass);
$1=$recv($globals.SystemAnnouncer)._current();
$3=$recv($globals.ClassMigrated)._new();
$recv($3)._theClass_(newClass);
$recv($3)._oldClass_(oldClass);
$2=$recv($3)._yourself();
$recv($1)._announce_($2);
return newClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"migrateClassNamed:superclass:instanceVariableNames:package:",{className:className,aClass:aClass,aCollection:aCollection,packageName:packageName,oldClass:oldClass,newClass:newClass,tmp:tmp})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "rawRenameClass:to:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "rawRenameClass: aClass to: aString\x0a\x09<inlineJS: '\x0a\x09\x09$globals[aString] = aClass;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09$globals[aString] = aClass;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aClass,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		$globals[aString] = aClass;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rawRenameClass:to:",{aClass:aClass,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "renameClass:to:",
protocol: "class migration",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className"],
source: "renameClass: aClass to: className\x0a\x09self basicRenameClass: aClass to: className.\x0a\x09\x0a\x09\x22Recompile the class to fix potential issues with super sends\x22\x0a\x09aClass recompile.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassRenamed new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassRenamed"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["basicRenameClass:to:", "recompile", "announce:", "current", "theClass:", "new", "yourself"]
}, function ($methodClass){ return function (aClass,className){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$self._basicRenameClass_to_(aClass,className);
$recv(aClass)._recompile();
$1=$recv($globals.SystemAnnouncer)._current();
$3=$recv($globals.ClassRenamed)._new();
$recv($3)._theClass_(aClass);
$2=$recv($3)._yourself();
$recv($1)._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,className:className})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "superclass:subclass:",
protocol: "class definition",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className"],
source: "superclass: aClass subclass: className\x0a\x09^ self superclass: aClass subclass: className slots: #() package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["superclass:subclass:slots:package:"]
}, function ($methodClass){ return function (aClass,className){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._superclass_subclass_slots_package_(aClass,className,[],nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:",{aClass:aClass,className:className})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "superclass:subclass:slots:package:",
protocol: "class definition",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className", "aCollection", "packageName"],
source: "superclass: aClass subclass: className slots: aCollection package: packageName\x0a\x09| newClass |\x0a\x09\x0a\x09newClass := self addSubclassOf: aClass\x0a\x09\x09named: className instanceVariableNames: aCollection\x0a\x09\x09package: (packageName ifNil: [ 'unclassified' ]).\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassAdded new\x0a\x09\x09\x09theClass: newClass;\x0a\x09\x09\x09yourself).\x0a\x09\x0a\x09^ newClass",
referencedClasses: ["SystemAnnouncer", "ClassAdded"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "ifNil:", "announce:", "current", "theClass:", "new", "yourself"]
}, function ($methodClass){ return function (aClass,className,aCollection,packageName){
var self=this,$self=this;
var newClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$receiver;
if(($receiver = packageName) == null || $receiver.a$nil){
$1="unclassified";
} else {
$1=packageName;
}
newClass=$self._addSubclassOf_named_instanceVariableNames_package_(aClass,className,aCollection,$1);
$2=$recv($globals.SystemAnnouncer)._current();
$4=$recv($globals.ClassAdded)._new();
$recv($4)._theClass_(newClass);
$3=$recv($4)._yourself();
$recv($2)._announce_($3);
return newClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:slots:package:",{aClass:aClass,className:className,aCollection:aCollection,packageName:packageName,newClass:newClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder);


$core.addMethod(
$core.method({
selector: "sortClasses:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "sortClasses: aCollection\x0a\x09| root members |\x0a\x09root := {nil. {}}.\x0a\x09members := HashedCollection new.\x0a\x09aCollection do: [ :each | members at: each name put: {each. {}} ].\x0a\x09(aCollection asArray sorted: [ :a :b | a name <= b name ]) do: [ :each |\x0a\x09\x09| target |\x0a\x09\x09target := members\x0a\x09\x09\x09at: (each superclass ifNotNil: [ :superklass | superklass name ])\x0a\x09\x09\x09ifAbsent: [ root ].\x0a\x09\x09target second add: (members at: each name) ].\x0a\x09^ root second",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "at:put:", "name", "sorted:", "asArray", "<=", "at:ifAbsent:", "ifNotNil:", "superclass", "add:", "second", "at:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
var root,members;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$7,$6,$8,$receiver;
root=[nil,[]];
members=$recv($globals.HashedCollection)._new();
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=members;
$2=$recv(each)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($1)._at_put_($2,[each,[]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv($recv($recv(aCollection)._asArray())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(a)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=2;
//>>excludeEnd("ctx");
$4=$recv(b)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=3;
//>>excludeEnd("ctx");
return $recv($3).__lt_eq($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,2)});
//>>excludeEnd("ctx");
})))._do_((function(each){
var target;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=members;
$7=$recv(each)._superclass();
if(($receiver = $7) == null || $receiver.a$nil){
$6=$7;
} else {
var superklass;
superklass=$receiver;
$6=$recv(superklass)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=4;
//>>excludeEnd("ctx");
}
target=$recv($5)._at_ifAbsent_($6,(function(){
return root;

}));
$8=$recv(target)._second();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["second"]=1;
//>>excludeEnd("ctx");
return $recv($8)._add_($recv(members)._at_($recv(each)._name()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,target:target},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return $recv(root)._second();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sortClasses:",{aCollection:aCollection,root:root,members:members})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassBuilder.a$cls);


$core.addTrait("TBehaviorDefaults", "Kernel-Classes");
$core.addMethod(
$core.method({
selector: "allInstanceVariableNames",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allInstanceVariableNames\x0a\x09\x22Default for non-classes; to be able to send #allInstanceVariableNames to any class / trait.\x22\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [];

}; }),
$globals.TBehaviorDefaults);

$core.addMethod(
$core.method({
selector: "allSubclassesDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "allSubclassesDo: aBlock\x0a\x09\x22Default for non-classes; to be able to send #allSubclassesDo: to any class / trait.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
return self;

}; }),
$globals.TBehaviorDefaults);

$core.addMethod(
$core.method({
selector: "includingPossibleMetaDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "includingPossibleMetaDo: aBlock\x0a\x09\x22Default for non-classes.\x22\x0a\x09aBlock value: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includingPossibleMetaDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorDefaults);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return nil;

}; }),
$globals.TBehaviorDefaults);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09self name\x0a\x09\x09ifNil: [ super printOn: aStream ]\x0a\x09\x09ifNotNil: [ :name | aStream nextPutAll: name ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "name", "printOn:", "nextPutAll:"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self._name();
if(($receiver = $1) == null || $receiver.a$nil){
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._printOn_.call($self,aStream));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
} else {
var name;
name=$receiver;
$recv(aStream)._nextPutAll_(name);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorDefaults);

$core.addMethod(
$core.method({
selector: "superclass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "superclass\x0a\x09\x22Default for non-classes; to be able to send #superclass to any class / trait.\x22\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return nil;

}; }),
$globals.TBehaviorDefaults);

$core.addMethod(
$core.method({
selector: "traitUsers",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "traitUsers\x0a\x09\x22Default for non-traits; to be able to send #traitUsers to any class / trait\x22\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [];

}; }),
$globals.TBehaviorDefaults);


$core.addTrait("TBehaviorProvider", "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TBehaviorProvider.comment="I have method dictionary and organization.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: ">>",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: ">> aString\x0a\x09^ self methodAt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["methodAt:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._methodAt_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">>",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "addCompiledMethod:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "addCompiledMethod: aMethod\x0a\x09| oldMethod announcement |\x0a\x09\x0a\x09oldMethod := self methodDictionary\x0a\x09\x09at: aMethod selector\x0a\x09\x09ifAbsent: [ nil ].\x0a\x09\x0a\x09self basicAddCompiledMethod: aMethod.\x0a\x09\x0a\x09announcement := oldMethod\x0a\x09\x09ifNil: [\x0a\x09\x09\x09MethodAdded new\x0a\x09\x09\x09\x09\x09method: aMethod;\x0a\x09\x09\x09\x09\x09yourself ]\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09MethodModified new\x0a\x09\x09\x09\x09\x09oldMethod: oldMethod;\x0a\x09\x09\x09\x09\x09method: aMethod;\x0a\x09\x09\x09\x09\x09yourself ].\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09\x09\x09announce: announcement",
referencedClasses: ["MethodAdded", "MethodModified", "SystemAnnouncer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "methodDictionary", "selector", "basicAddCompiledMethod:", "ifNil:ifNotNil:", "method:", "new", "yourself", "oldMethod:", "announce:", "current"]
}, function ($methodClass){ return function (aMethod){
var self=this,$self=this;
var oldMethod,announcement;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
oldMethod=$recv($self._methodDictionary())._at_ifAbsent_($recv(aMethod)._selector(),(function(){
return nil;

}));
$self._basicAddCompiledMethod_(aMethod);
$1=oldMethod;
if(($receiver = $1) == null || $receiver.a$nil){
$2=$recv($globals.MethodAdded)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($2)._method_(aMethod);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["method:"]=1;
//>>excludeEnd("ctx");
announcement=$recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
} else {
$3=$recv($globals.MethodModified)._new();
$recv($3)._oldMethod_(oldMethod);
$recv($3)._method_(aMethod);
announcement=$recv($3)._yourself();
}
$recv($recv($globals.SystemAnnouncer)._current())._announce_(announcement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addCompiledMethod:",{aMethod:aMethod,oldMethod:oldMethod,announcement:announcement})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "basicAddCompiledMethod:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "basicAddCompiledMethod: aMethod\x0a\x09<inlineJS: '$core.addMethod(aMethod, self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["$core.addMethod(aMethod, self)"]]],
messageSends: []
}, function ($methodClass){ return function (aMethod){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.addMethod(aMethod, self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAddCompiledMethod:",{aMethod:aMethod})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "basicRemoveCompiledMethod:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "basicRemoveCompiledMethod: aMethod\x0a\x09<inlineJS: '$core.removeMethod(aMethod,self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["$core.removeMethod(aMethod,self)"]]],
messageSends: []
}, function ($methodClass){ return function (aMethod){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.removeMethod(aMethod,self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicRemoveCompiledMethod:",{aMethod:aMethod})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "compile:protocol:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "compile: aString protocol: anotherString\x0a\x09^ Compiler new\x0a\x09\x09install: aString\x0a\x09\x09forClass: self\x0a\x09\x09protocol: anotherString",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["install:forClass:protocol:", "new"]
}, function ($methodClass){ return function (aString,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Compiler)._new())._install_forClass_protocol_(aString,self,anotherString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile:protocol:",{aString:aString,anotherString:anotherString})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "includesSelector:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "includesSelector: aString\x0a\x09^ self methodDictionary includesKey: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["includesKey:", "methodDictionary"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._methodDictionary())._includesKey_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesSelector:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methodAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "methodAt: aString\x0a\x09^ self methodDictionary at: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:", "methodDictionary"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._methodDictionary())._at_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodAt:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methodDictionary",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodDictionary\x0a\x09<inlineJS: 'var dict = $globals.HashedCollection._new();\x0a\x09var methods = self.methods;\x0a\x09Object.keys(methods).forEach(function(i) {\x0a\x09\x09if(methods[i].selector) {\x0a\x09\x09\x09dict._at_put_(methods[i].selector, methods[i]);\x0a\x09\x09}\x0a\x09});\x0a\x09return dict'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["var dict = $globals.HashedCollection._new();\x0a\x09var methods = self.methods;\x0a\x09Object.keys(methods).forEach(function(i) {\x0a\x09\x09if(methods[i].selector) {\x0a\x09\x09\x09dict._at_put_(methods[i].selector, methods[i]);\x0a\x09\x09}\x0a\x09});\x0a\x09return dict"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var dict = $globals.HashedCollection._new();
	var methods = self.methods;
	Object.keys(methods).forEach(function(i) {
		if(methods[i].selector) {
			dict._at_put_(methods[i].selector, methods[i]);
		}
	});
	return dict;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodDictionary",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methodOrganizationEnter:andLeave:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "oldMethod"],
source: "methodOrganizationEnter: aMethod andLeave: oldMethod\x0a\x09aMethod ifNotNil: [\x0a\x09\x09self organization addElement: aMethod protocol ].\x0a\x09\x0a\x09oldMethod ifNotNil: [\x0a\x09\x09self removeProtocolIfEmpty: oldMethod protocol ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "addElement:", "organization", "protocol", "removeProtocolIfEmpty:"]
}, function ($methodClass){ return function (aMethod,oldMethod){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
if(($receiver = aMethod) == null || $receiver.a$nil){
aMethod;
} else {
$1=$self._organization();
$2=$recv(aMethod)._protocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["protocol"]=1;
//>>excludeEnd("ctx");
$recv($1)._addElement_($2);
}
if(($receiver = oldMethod) == null || $receiver.a$nil){
oldMethod;
} else {
$self._removeProtocolIfEmpty_($recv(oldMethod)._protocol());
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodOrganizationEnter:andLeave:",{aMethod:aMethod,oldMethod:oldMethod})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methodTemplate",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodTemplate\x0a\x09^ String streamContents: [ :stream | stream \x0a\x09\x09write: 'messageSelectorAndArgumentNames'; lf;\x0a\x09\x09tab; write: '\x22comment stating purpose of message\x22'; lf;\x0a\x09\x09lf;\x0a\x09\x09tab; write: '| temporary variable names |'; lf;\x0a\x09\x09tab; write: 'statements' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "write:", "lf", "tab"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._write_("messageSelectorAndArgumentNames");
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
$recv(stream)._write_("\x22comment stating purpose of message\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=2;
//>>excludeEnd("ctx");
$recv(stream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=3;
//>>excludeEnd("ctx");
$recv(stream)._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tab"]=2;
//>>excludeEnd("ctx");
$recv(stream)._write_("| temporary variable names |");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
$recv(stream)._lf();
$recv(stream)._tab();
return $recv(stream)._write_("statements");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodTemplate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methods",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methods\x0a\x09^ self methodDictionary values",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["values", "methodDictionary"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._methodDictionary())._values();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methods",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methodsInProtocol:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "methodsInProtocol: aString\x0a\x09^ self methods select: [ :each | each protocol = aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "methods", "=", "protocol"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._methods())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._protocol()).__eq(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "organization",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "organization\x0a\x09^ self basicOrganization ifNil: [\x0a\x09\x09self basicOrganization: (ClassOrganizer on: self).\x0a\x09\x09self basicOrganization ]",
referencedClasses: ["ClassOrganizer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "basicOrganization", "basicOrganization:", "on:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self._basicOrganization();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicOrganization"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.a$nil){
$self._basicOrganization_($recv($globals.ClassOrganizer)._on_(self));
return $self._basicOrganization();
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"organization",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "ownMethods",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ownMethods\x0a\x09\x22Answer the methods of the receiver that are not package extensions\x0a\x09nor obtained via trait composition\x22\x0a\x0a\x09^ (self ownProtocols \x0a\x09\x09inject: OrderedCollection new\x0a\x09\x09into: [ :acc :each | acc, (self ownMethodsInProtocol: each) ])\x0a\x09\x09\x09sorted: [ :a :b | a selector <= b selector ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sorted:", "inject:into:", "ownProtocols", "new", ",", "ownMethodsInProtocol:", "<=", "selector"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv($recv($self._ownProtocols())._inject_into_($recv($globals.OrderedCollection)._new(),(function(acc,each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(acc).__comma($self._ownMethodsInProtocol_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({acc:acc,each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(a)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
return $recv($1).__lt_eq($recv(b)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethods",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "ownMethodsInProtocol:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "ownMethodsInProtocol: aString\x0a\x09^ (self methodsInProtocol: aString) select: [ :each | each origin = self ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "methodsInProtocol:", "=", "origin"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._methodsInProtocol_(aString))._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._origin()).__eq(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethodsInProtocol:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "ownProtocols",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ownProtocols\x0a\x09\x22Answer the protocols of the receiver that are not package extensions\x22\x0a\x0a\x09^ self protocols reject: [ :each |\x0a\x09\x09each match: '^\x5c*' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reject:", "protocols", "match:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._protocols())._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._match_("^\x5c*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownProtocols",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "packageOfProtocol:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "packageOfProtocol: aString\x0a\x09\x22Answer the package the method of receiver belongs to:\x0a\x09- if it is an extension method, answer the corresponding package\x0a\x09- else answer the receiver's package\x22\x0a\x09\x0a\x09(aString beginsWith: '*') ifFalse: [\x0a\x09\x09^ self package ].\x0a\x09\x09\x0a\x09^ Package \x0a\x09\x09named: aString allButFirst\x0a\x09\x09ifAbsent: [ nil ]",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "beginsWith:", "package", "named:ifAbsent:", "allButFirst"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aString)._beginsWith_("*");
if(!$core.assert($1)){
return $self._package();
}
return $recv($globals.Package)._named_ifAbsent_($recv(aString)._allButFirst(),(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packageOfProtocol:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "protocols",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocols\x0a\x09^ self organization elements asArray sorted",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sorted", "asArray", "elements", "organization"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv($self._organization())._elements())._asArray())._sorted();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocols",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "protocolsDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "protocolsDo: aBlock\x0a\x09\x22Execute aBlock for each method protocol with\x0a\x09its collection of methods in the sort order of protocol name.\x22\x0a\x0a\x09| methodsByProtocol |\x0a\x09methodsByProtocol := HashedCollection new.\x0a\x09self methodDictionary valuesDo: [ :m |\x0a\x09\x09(methodsByProtocol at: m protocol ifAbsentPut: [ Array new ])\x0a\x09\x09\x09add: m ].\x0a\x09self protocols do: [ :protocol |\x0a\x09\x09aBlock value: protocol value: (methodsByProtocol at: protocol) ]",
referencedClasses: ["HashedCollection", "Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "valuesDo:", "methodDictionary", "add:", "at:ifAbsentPut:", "protocol", "do:", "protocols", "value:value:", "at:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var methodsByProtocol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
methodsByProtocol=$recv($globals.HashedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($self._methodDictionary())._valuesDo_((function(m){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(methodsByProtocol)._at_ifAbsentPut_($recv(m)._protocol(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($globals.Array)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
})))._add_(m);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($self._protocols())._do_((function(protocol){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_value_(protocol,$recv(methodsByProtocol)._at_(protocol));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({protocol:protocol},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocolsDo:",{aBlock:aBlock,methodsByProtocol:methodsByProtocol})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "recompile",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recompile\x0a\x09^ Compiler new recompile: self",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["recompile:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Compiler)._new())._recompile_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recompile",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "removeCompiledMethod:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "removeCompiledMethod: aMethod\x0a\x09self basicRemoveCompiledMethod: aMethod.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (MethodRemoved new\x0a\x09\x09\x09method: aMethod;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "MethodRemoved"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["basicRemoveCompiledMethod:", "announce:", "current", "method:", "new", "yourself"]
}, function ($methodClass){ return function (aMethod){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$self._basicRemoveCompiledMethod_(aMethod);
$1=$recv($globals.SystemAnnouncer)._current();
$3=$recv($globals.MethodRemoved)._new();
$recv($3)._method_(aMethod);
$2=$recv($3)._yourself();
$recv($1)._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeCompiledMethod:",{aMethod:aMethod})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "removeProtocolIfEmpty:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "removeProtocolIfEmpty: aString\x0a\x09self methods\x0a\x09\x09detect: [ :each | each protocol = aString ]\x0a\x09\x09ifNone: [ self organization removeElement: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["detect:ifNone:", "methods", "=", "protocol", "removeElement:", "organization"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._methods())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._protocol()).__eq(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._organization())._removeElement_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeProtocolIfEmpty:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "selectors",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectors\x0a\x09^ self methodDictionary keys",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["keys", "methodDictionary"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._methodDictionary())._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectors",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "setTraitComposition:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTraitComposition"],
source: "setTraitComposition: aTraitComposition\x0a\x09<inlineJS: '$core.setTraitComposition(aTraitComposition._asJavaScriptObject(), self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["$core.setTraitComposition(aTraitComposition._asJavaScriptObject(), self)"]]],
messageSends: []
}, function ($methodClass){ return function (aTraitComposition){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.setTraitComposition(aTraitComposition._asJavaScriptObject(), self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setTraitComposition:",{aTraitComposition:aTraitComposition})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "traitComposition",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "traitComposition\x0a\x09^ (self basicAt: 'traitComposition')\x0a\x09\x09ifNil: [ #() ]\x0a\x09\x09ifNotNil: [ :aCollection | aCollection collect: [ :each | TraitTransformation fromJSON: each ] ]",
referencedClasses: ["TraitTransformation"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "basicAt:", "collect:", "fromJSON:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self._basicAt_("traitComposition");
if(($receiver = $1) == null || $receiver.a$nil){
return [];
} else {
var aCollection;
aCollection=$receiver;
return $recv(aCollection)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.TraitTransformation)._fromJSON_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"traitComposition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "traitCompositionDefinition",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "traitCompositionDefinition\x0a\x09^ self traitComposition ifNotEmpty: [ :traitComposition |\x0a\x09\x09String streamContents: [ :str |\x0a\x09\x09\x09str write: '{'.\x0a\x09\x09\x09traitComposition\x0a\x09\x09\x09\x09do: [ :each | str write: each definition ]\x0a\x09\x09\x09\x09separatedBy: [ str write: '. ' ].\x0a\x09\x09\x09str write: '}' ] ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotEmpty:", "traitComposition", "streamContents:", "write:", "do:separatedBy:", "definition"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._traitComposition())._ifNotEmpty_((function(traitComposition){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(str)._write_("{");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(traitComposition)._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(str)._write_($recv(each)._definition());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,3)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(str)._write_(". ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
return $recv(str)._write_("}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({str:str},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({traitComposition:traitComposition},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"traitCompositionDefinition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TBehaviorProvider);


$core.addTrait("TMasterBehavior", "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TMasterBehavior.comment="I am the behavior on the instance-side of the browser.\x0a\x0aI define things like package, category, name, comment etc.\x0aas opposed to derived behaviors (metaclass, class trait, ...)\x0athat relate to me.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJavaScriptSource",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSource\x0a\x09^ '$globals.', self name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return "$globals.".__comma($self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSource",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "browse",
protocol: "browsing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "browse\x0a\x09Finder findClass: self",
referencedClasses: ["Finder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["findClass:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Finder)._findClass_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"browse",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "category",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ self package ifNil: [ 'Unclassified' ] ifNotNil: [ self package name ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "package", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.a$nil){
return "Unclassified";
} else {
return $recv($self._package())._name();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"category",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Every master behavior should define a class tag.\x22\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsibility();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classTag",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "comment",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "comment\x0a\x09^ (self basicAt: 'comment') ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "basicAt:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self._basicAt_("comment");
if(($receiver = $1) == null || $receiver.a$nil){
return "";
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"comment",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "comment:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "comment: aString\x0a\x09self basicAt: 'comment' put: aString.\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassCommentChanged new\x0a\x09\x09\x09theClass: self;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassCommentChanged"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["basicAt:put:", "announce:", "current", "theClass:", "new", "yourself"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$self._basicAt_put_("comment",aString);
$1=$recv($globals.SystemAnnouncer)._current();
$3=$recv($globals.ClassCommentChanged)._new();
$recv($3)._theClass_(self);
$2=$recv($3)._yourself();
$recv($1)._announce_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"comment:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "definedMethods",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definedMethods\x0a\x09\x22Answers methods of me and derived 'meta' part if present\x22\x0a\x09| methods |\x0a\x09methods := self methods.\x0a\x09self theMetaClass\x0a\x09\x09ifNil: [ ^ methods ]\x0a\x09\x09ifNotNil: [ :meta | ^ methods, meta methods ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["methods", "ifNil:ifNotNil:", "theMetaClass", ","]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var methods;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
methods=$self._methods();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methods"]=1;
//>>excludeEnd("ctx");
$1=$self._theMetaClass();
if(($receiver = $1) == null || $receiver.a$nil){
return methods;
} else {
var meta;
meta=$receiver;
return $recv(methods).__comma($recv(meta)._methods());
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definedMethods",{methods:methods})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "enterOrganization",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enterOrganization\x0a\x09Smalltalk ifNotNil: [\x0a\x09\x09(self basicAt: 'category')\x0a\x09\x09\x09ifNil: [ self basicPackage: nil ]\x0a\x09\x09\x09ifNotNil: [ :category |\x0a\x09\x09\x09\x09\x22Amber has 1-1 correspondence between cat and pkg, atm\x22\x0a\x09\x09\x09\x09self basicPackage: (Package named: category).\x0a\x09\x09\x09\x09self package organization addElement: self ] ]",
referencedClasses: ["Smalltalk", "Package"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "ifNil:ifNotNil:", "basicAt:", "basicPackage:", "named:", "addElement:", "organization", "package"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
if(($receiver = $globals.Smalltalk) == null || $receiver.a$nil){
$globals.Smalltalk;
} else {
$1=$self._basicAt_("category");
if(($receiver = $1) == null || $receiver.a$nil){
$self._basicPackage_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["basicPackage:"]=1;
//>>excludeEnd("ctx");
} else {
var category;
category=$receiver;
$self._basicPackage_($recv($globals.Package)._named_(category));
$recv($recv($self._package())._organization())._addElement_(self);
}
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"enterOrganization",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "leaveOrganization",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "leaveOrganization\x0a\x09Smalltalk ifNotNil: [\x0a\x09\x09self package organization removeElement: self ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "removeElement:", "organization", "package"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $receiver;
if(($receiver = $globals.Smalltalk) == null || $receiver.a$nil){
$globals.Smalltalk;
} else {
$recv($recv($self._package())._organization())._removeElement_(self);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"leaveOrganization",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09<inlineJS: 'return self.name'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.name"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.name;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "package:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "package: aPackage\x0a\x09| oldPackage |\x0a\x09\x0a\x09self package = aPackage ifTrue: [ ^ self ].\x0a\x09\x0a\x09oldPackage := self package.\x0a\x09\x0a\x09self\x0a\x09\x09leaveOrganization;\x0a\x09\x09basicAt: 'category' put: aPackage name;\x0a\x09\x09enterOrganization.\x0a\x0a\x09SystemAnnouncer current announce: (ClassMoved new\x0a\x09\x09theClass: self;\x0a\x09\x09oldPackage: oldPackage;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassMoved"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "=", "package", "leaveOrganization", "basicAt:put:", "name", "enterOrganization", "announce:", "current", "theClass:", "new", "oldPackage:", "yourself"]
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
var oldPackage;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
$2=$self._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["package"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq(aPackage);
if($core.assert($1)){
return self;
}
oldPackage=$self._package();
$self._leaveOrganization();
$self._basicAt_put_("category",$recv(aPackage)._name());
$self._enterOrganization();
$3=$recv($globals.SystemAnnouncer)._current();
$5=$recv($globals.ClassMoved)._new();
$recv($5)._theClass_(self);
$recv($5)._oldPackage_(oldPackage);
$4=$recv($5)._yourself();
$recv($3)._announce_($4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"package:",{aPackage:aPackage,oldPackage:oldPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "theNonMetaClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theNonMetaClass\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.TMasterBehavior);


$core.addClass("Trait", $globals.Object, ["organization", "package", "traitUsers"], "Kernel-Classes");
$core.addMethod(
$core.method({
selector: "-",
protocol: "composition",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "- anArray\x0a\x09^ self asTraitTransformation - anArray",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["-", "asTraitTransformation"]
}, function ($methodClass){ return function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asTraitTransformation()).__minus(anArray);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"-",{anArray:anArray})});
//>>excludeEnd("ctx");
}; }),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "@",
protocol: "composition",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArrayOfAssociations"],
source: "@ anArrayOfAssociations\x0a\x09^ self asTraitTransformation @ anArrayOfAssociations",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["@", "asTraitTransformation"]
}, function ($methodClass){ return function (anArrayOfAssociations){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asTraitTransformation()).__at(anArrayOfAssociations);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"@",{anArrayOfAssociations:anArrayOfAssociations})});
//>>excludeEnd("ctx");
}; }),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "asTraitComposition",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTraitComposition\x0a\x09^ self asTraitTransformation asTraitComposition",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asTraitComposition", "asTraitTransformation"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asTraitTransformation())._asTraitComposition();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTraitComposition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "asTraitTransformation",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTraitTransformation\x0a\x09^ TraitTransformation on: self",
referencedClasses: ["TraitTransformation"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.TraitTransformation)._on_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTraitTransformation",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "basicOrganization",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicOrganization\x0a\x09^ organization",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.organization;

}; }),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "basicOrganization:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassOrganizer"],
source: "basicOrganization: aClassOrganizer\x0a\x09organization := aClassOrganizer",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClassOrganizer){
var self=this,$self=this;
$self.organization=aClassOrganizer;
return self;

}; }),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "basicPackage:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "basicPackage: aPackage\x0a\x09package := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
$self.package=aPackage;
return self;

}; }),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09^ 'trait'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "trait";

}; }),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream | stream\x0a\x09\x09write: 'Trait named: '; printSymbol: self name; lf;\x0a\x09\x09write: (self traitCompositionDefinition ifNotEmpty: [ :tcd | { String tab. 'uses: '. tcd. String lf }]);\x0a\x09\x09tab; write: 'package: '; print: self category ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "write:", "printSymbol:", "name", "lf", "ifNotEmpty:", "traitCompositionDefinition", "tab", "print:", "category"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._write_("Trait named: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(stream)._printSymbol_($self._name());
$recv(stream)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lf"]=1;
//>>excludeEnd("ctx");
$recv(stream)._write_($recv($self._traitCompositionDefinition())._ifNotEmpty_((function(tcd){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($globals.String)._tab();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["tab"]=1;
//>>excludeEnd("ctx");
return [$1,"uses: ",tcd,$recv($globals.String)._lf()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({tcd:tcd},$ctx2,2)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
$recv(stream)._tab();
$recv(stream)._write_("package: ");
return $recv(stream)._print_($self._category());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "package",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ package",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.package;

}; }),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "theMetaClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theMetaClass\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return nil;

}; }),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "traitUsers",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "traitUsers\x0a\x09^ traitUsers copy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.traitUsers)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"traitUsers",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Trait);


$core.addMethod(
$core.method({
selector: "named:package:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "named: aString package: anotherString\x0a\x09^ ClassBuilder new addTraitNamed: aString package: anotherString",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addTraitNamed:package:", "new"]
}, function ($methodClass){ return function (aString,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.ClassBuilder)._new())._addTraitNamed_package_(aString,anotherString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:package:",{aString:aString,anotherString:anotherString})});
//>>excludeEnd("ctx");
}; }),
$globals.Trait.a$cls);

$core.addMethod(
$core.method({
selector: "named:uses:package:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aTraitCompositionDescription", "anotherString"],
source: "named: aString uses: aTraitCompositionDescription package: anotherString\x0a\x09| trait |\x0a\x09trait := self named: aString package: anotherString.\x0a\x09trait setTraitComposition: aTraitCompositionDescription asTraitComposition.\x0a\x09^ trait",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["named:package:", "setTraitComposition:", "asTraitComposition"]
}, function ($methodClass){ return function (aString,aTraitCompositionDescription,anotherString){
var self=this,$self=this;
var trait;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
trait=$self._named_package_(aString,anotherString);
$recv(trait)._setTraitComposition_($recv(aTraitCompositionDescription)._asTraitComposition());
return trait;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:uses:package:",{aString:aString,aTraitCompositionDescription:aTraitCompositionDescription,anotherString:anotherString,trait:trait})});
//>>excludeEnd("ctx");
}; }),
$globals.Trait.a$cls);


$core.addClass("TraitTransformation", $globals.Object, ["trait", "aliases", "exclusions"], "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TraitTransformation.comment="I am a single step in trait composition.\x0a\x0aI represent one trait including its aliases and exclusions.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "-",
protocol: "composition",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "- anArray\x0a\x09^ self copy addExclusions: anArray; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addExclusions:", "copy", "yourself"]
}, function ($methodClass){ return function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._copy();
$recv($1)._addExclusions_(anArray);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"-",{anArray:anArray})});
//>>excludeEnd("ctx");
}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "@",
protocol: "composition",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArrayOfAssociations"],
source: "@ anArrayOfAssociations\x0a\x09^ self copy addAliases: anArrayOfAssociations; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addAliases:", "copy", "yourself"]
}, function ($methodClass){ return function (anArrayOfAssociations){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._copy();
$recv($1)._addAliases_(anArrayOfAssociations);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"@",{anArrayOfAssociations:anArrayOfAssociations})});
//>>excludeEnd("ctx");
}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "addAliases:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArrayOfAssociations"],
source: "addAliases: anArrayOfAssociations\x0a\x09anArrayOfAssociations do: [ :each |\x0a\x09\x09| key |\x0a\x09\x09key := each key.\x0a\x09\x09aliases at: key\x0a\x09\x09\x09ifPresent: [ self error: 'Cannot use same alias name twice.' ]\x0a\x09\x09\x09ifAbsent: [ aliases at: key put: each value ] ].\x0a\x09^ anArrayOfAssociations",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "key", "at:ifPresent:ifAbsent:", "error:", "at:put:", "value"]
}, function ($methodClass){ return function (anArrayOfAssociations){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anArrayOfAssociations)._do_((function(each){
var key;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
key=$recv(each)._key();
return $recv($self.aliases)._at_ifPresent_ifAbsent_(key,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._error_("Cannot use same alias name twice.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self.aliases)._at_put_(key,$recv(each)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,key:key},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return anArrayOfAssociations;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAliases:",{anArrayOfAssociations:anArrayOfAssociations})});
//>>excludeEnd("ctx");
}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "addExclusions:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "addExclusions: anArray\x0a\x09exclusions addAll: anArray.\x0a\x09^ anArray",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addAll:"]
}, function ($methodClass){ return function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.exclusions)._addAll_(anArray);
return anArray;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addExclusions:",{anArray:anArray})});
//>>excludeEnd("ctx");
}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "aliases",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aliases\x0a\x09^ aliases",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.aliases;

}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09^ #{\x0a\x09\x09'trait' -> self trait.\x0a\x09\x09'aliases' -> self aliases.\x0a\x09\x09'exclusions' -> self exclusions asArray sorted }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["trait", "aliases", "sorted", "asArray", "exclusions"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $globals.HashedCollection._newFromPairs_(["trait",$self._trait(),"aliases",$self._aliases(),"exclusions",$recv($recv($self._exclusions())._asArray())._sorted()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptObject",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "asJavaScriptSource",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSource\x0a\x09^ String streamContents: [ :str | str write: {\x0a\x09\x09'{trait: '. self trait asJavaScriptSource.\x0a\x09\x09self aliases ifNotEmpty: [ :al |\x0a\x09\x09\x09{', aliases: '. al asJSONString} ].\x0a\x09\x09self exclusions ifNotEmpty: [ :ex |\x0a\x09\x09\x09{', exclusions: '. ex asArray sorted asJavaScriptSource} ].\x0a\x09\x09'}' } ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "write:", "asJavaScriptSource", "trait", "ifNotEmpty:", "aliases", "asJSONString", "exclusions", "sorted", "asArray"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
return $recv($globals.String)._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($self._trait())._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJavaScriptSource"]=1;
//>>excludeEnd("ctx");
$3=$recv($self._aliases())._ifNotEmpty_((function(al){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [", aliases: ",$recv(al)._asJSONString()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({al:al},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ifNotEmpty:"]=1;
//>>excludeEnd("ctx");
$1=["{trait: ",$2,$3,$recv($self._exclusions())._ifNotEmpty_((function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [", exclusions: ",$recv($recv($recv(ex)._asArray())._sorted())._asJavaScriptSource()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2,3)});
//>>excludeEnd("ctx");
})),"}"];
return $recv(str)._write_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSource",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "asTraitComposition",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTraitComposition\x0a\x09^ { self }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [self];

}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "asTraitTransformation",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTraitTransformation\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09str print: self trait.\x0a\x09\x09self aliases ifNotEmpty: [ :al |\x0a\x09\x09\x09str write: ' @ {'.\x0a\x09\x09\x09al associations\x0a\x09\x09\x09\x09do: [ :each | str printSymbol: each key; write: ' -> '; printSymbol: each value ]\x0a\x09\x09\x09\x09separatedBy: [ str write: '. ' ].\x0a\x09\x09\x09str write: '}' ].\x0a\x09\x09self exclusions ifNotEmpty: [ :ex |\x0a\x09\x09\x09str write: ' - #('.\x0a\x09\x09\x09ex asArray sorted \x0a\x09\x09\x09\x09do: [ :each | str write: each symbolPrintString allButFirst ]\x0a\x09\x09\x09\x09separatedBy: [ str space ].\x0a\x09\x09\x09str write: ')' ] ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "print:", "trait", "ifNotEmpty:", "aliases", "write:", "do:separatedBy:", "associations", "printSymbol:", "key", "value", "exclusions", "sorted", "asArray", "allButFirst", "symbolPrintString", "space"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(str)._print_($self._trait());
$recv($self._aliases())._ifNotEmpty_((function(al){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(str)._write_(" @ {");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv($recv(al)._associations())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$recv(str)._printSymbol_($recv(each)._key());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["printSymbol:"]=1;
//>>excludeEnd("ctx");
$recv(str)._write_(" -> ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
return $recv(str)._printSymbol_($recv(each)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,3)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(str)._write_(". ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["do:separatedBy:"]=1;
//>>excludeEnd("ctx");
return $recv(str)._write_("}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["write:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({al:al},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ifNotEmpty:"]=1;
//>>excludeEnd("ctx");
return $recv($self._exclusions())._ifNotEmpty_((function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(str)._write_(" - #(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["write:"]=5;
//>>excludeEnd("ctx");
$recv($recv($recv(ex)._asArray())._sorted())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(str)._write_($recv($recv(each)._symbolPrintString())._allButFirst());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["write:"]=6;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,6)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(str)._space();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,7)});
//>>excludeEnd("ctx");
}));
return $recv(str)._write_(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "exclusions",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exclusions\x0a\x09^ exclusions",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.exclusions;

}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09aliases := #{}.\x0a\x09exclusions := Set new.\x0a\x09trait := nil",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._initialize.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self.aliases=$globals.HashedCollection._newFromPairs_([]);
$self.exclusions=$recv($globals.Set)._new();
$self.trait=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "postCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "postCopy\x0a\x09aliases := aliases copy.\x0a\x09exclusions := exclusions copy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.aliases=$recv($self.aliases)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copy"]=1;
//>>excludeEnd("ctx");
$self.exclusions=$recv($self.exclusions)._copy();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"postCopy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "trait",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trait\x0a\x09^ trait",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.trait;

}; }),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "trait:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "trait: anObject\x0a\x09trait := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.trait=anObject;
return self;

}; }),
$globals.TraitTransformation);


$core.addMethod(
$core.method({
selector: "fromJSON:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "fromJSON: aJSObject\x0a\x09^ super new\x0a\x09\x09trait: (aJSObject at: #trait);\x0a\x09\x09addAliases: (Smalltalk readJSObject: (aJSObject at: #aliases ifAbsent: [#{}])) associations;\x0a\x09\x09addExclusions: (aJSObject at: #exclusions ifAbsent: [#()]);\x0a\x09\x09yourself",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["trait:", "new", "at:", "addAliases:", "associations", "readJSObject:", "at:ifAbsent:", "addExclusions:", "yourself"]
}, function ($methodClass){ return function (aJSObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._new.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($1)._trait_($recv(aJSObject)._at_("trait"));
$4=$recv(aJSObject)._at_ifAbsent_("aliases",(function(){
return $globals.HashedCollection._newFromPairs_([]);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$3=$recv($globals.Smalltalk)._readJSObject_($4);
$2=$recv($3)._associations();
$recv($1)._addAliases_($2);
$recv($1)._addExclusions_($recv(aJSObject)._at_ifAbsent_("exclusions",(function(){
return [];

})));
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{aJSObject:aJSObject})});
//>>excludeEnd("ctx");
}; }),
$globals.TraitTransformation.a$cls);

$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTrait"],
source: "on: aTrait\x0a\x09^ super new trait: aTrait; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["trait:", "new", "yourself"]
}, function ($methodClass){ return function (aTrait){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._new.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($1)._trait_(aTrait);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aTrait:aTrait})});
//>>excludeEnd("ctx");
}; }),
$globals.TraitTransformation.a$cls);

$core.setTraitComposition([{trait: $globals.TBehaviorDefaults}, {trait: $globals.TBehaviorProvider}], $globals.Behavior);
$core.setTraitComposition([{trait: $globals.TMasterBehavior}, {trait: $globals.TSubclassable}], $globals.Class);
$core.setTraitComposition([{trait: $globals.TBehaviorDefaults}, {trait: $globals.TBehaviorProvider}, {trait: $globals.TMasterBehavior}], $globals.Trait);

$core.addMethod(
$core.method({
selector: "asTraitComposition",
protocol: "*Kernel-Classes",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTraitComposition\x0a\x09\x22not implemented yet, noop atm\x22\x0a\x09^ self collect: [ :each | each asTraitTransformation ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "asTraitTransformation"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._asTraitTransformation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTraitComposition",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "instanceVariablesStringAsSlotList",
protocol: "*Kernel-Classes",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instanceVariablesStringAsSlotList\x0a\x09^ (self tokenize: ' ') reject: [ :each | each isEmpty ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reject:", "tokenize:", "isEmpty"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._tokenize_(" "))._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instanceVariablesStringAsSlotList",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

});
