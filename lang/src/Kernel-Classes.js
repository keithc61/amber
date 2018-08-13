define(["amber/boot", "amber_core/Kernel-Collections", "amber_core/Kernel-Helpers", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage("Kernel-Classes");
($core.packageDescriptors||$core.packages)["Kernel-Classes"].innerEval = function (expr) { return eval(expr); };
($core.packageDescriptors||$core.packages)["Kernel-Classes"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass("Behavior", $globals.Object, ["organization"], "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Behavior.comment="I am the superclass of all class objects.\x0a\x0aIn addition to BehaviorBody, I define superclass/subclass relationships and instantiation.\x0a\x0aI define the protocol for creating instances of a class with `#basicNew` and `#new` (see `boot.js` for class constructors details).\x0a\x0aMy instances know about the subclass/superclass relationships between classes and contain the description that instances are created from.\x0a\x0aI also provide iterating over the class hierarchy.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "allInstanceVariableNames",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"allInstanceVariableNames",{result:result},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allInstanceVariableNames\x0a\x09| result |\x0a\x09result := self instanceVariableNames copy.\x0a\x09self superclass ifNotNil: [\x0a\x09\x09result addAll: self superclass allInstanceVariableNames ].\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy", "instanceVariableNames", "ifNotNil:", "superclass", "addAll:", "allInstanceVariableNames"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allSelectors",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSelectors\x0a\x09^ self allSuperclasses\x0a\x09\x09inject: self selectors\x0a\x09\x09into: [ :acc :each | acc addAll: each selectors; yourself ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inject:into:", "allSuperclasses", "selectors", "addAll:", "yourself"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allSubclasses",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"allSubclasses",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSubclasses\x0a\x09\x22Answer an collection of the receiver's and the receiver's descendent's subclasses. \x22\x0a\x0a\x09^ Array streamContents: [ :str | self allSubclassesDo: [ :each | str nextPut: each ] ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "allSubclassesDo:", "nextPut:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allSubclassesDo:",
protocol: "enumerating",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.traverseClassTree(self, function(subclass) {
	if (subclass !== self) aBlock._value_(subclass);
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSubclassesDo:",{aBlock:aBlock},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "allSubclassesDo: aBlock\x0a\x09\x22Evaluate the argument, aBlock, for each of the receiver's subclasses.\x22\x0a\x0a<inlineJS: '$core.traverseClassTree(self, function(subclass) {\x0a\x09if (subclass !== self) aBlock._value_(subclass);\x0a})'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "allSuperclasses",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"allSuperclasses",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSuperclasses\x0a\x09\x0a\x09self superclass ifNil: [ ^ #() ].\x0a\x09\x0a\x09^ (OrderedCollection with: self superclass)\x0a\x09\x09addAll: self superclass allSuperclasses;\x0a\x09\x09yourself",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "superclass", "addAll:", "with:", "allSuperclasses", "yourself"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "basicNew",
protocol: "instance creation",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new self.fn();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicNew",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicNew\x0a\x09<inlineJS: 'return new self.fn()'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "basicOrganization",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@organization"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicOrganization\x0a\x09^ organization",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "basicOrganization:",
protocol: "accessing",
fn: function (aClassOrganizer){
var self=this,$self=this;
$self["@organization"]=aClassOrganizer;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassOrganizer"],
source: "basicOrganization: aClassOrganizer\x0a\x09organization := aClassOrganizer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "canUnderstand:",
protocol: "testing",
fn: function (aSelector){
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
}, function($ctx1) {$ctx1.fill(self,"canUnderstand:",{aSelector:aSelector},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "canUnderstand: aSelector\x0a\x09^ (self includesSelector: aSelector asString) or: [\x0a\x09\x09self superclass notNil and: [ self superclass canUnderstand: aSelector ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "includesSelector:", "asString", "and:", "notNil", "superclass", "canUnderstand:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "includesBehavior:",
protocol: "testing",
fn: function (aClass){
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
}, function($ctx1) {$ctx1.fill(self,"includesBehavior:",{aClass:aClass},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "includesBehavior: aClass\x0a\x09^ self == aClass or: [\x0a\x09\x09\x09self inheritsFrom: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "==", "inheritsFrom:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "inheritsFrom:",
protocol: "testing",
fn: function (aClass){
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
}, function($ctx1) {$ctx1.fill(self,"inheritsFrom:",{aClass:aClass},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "inheritsFrom: aClass\x0a\x09self superclass ifNil: [ ^ false ].\x0a\x0a\x09^ aClass == self superclass or: [ \x0a\x09\x09self superclass inheritsFrom: aClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "superclass", "or:", "==", "inheritsFrom:"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "instanceVariableNames",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.iVarNames;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instanceVariableNames\x0a\x09<inlineJS: 'return self.iVarNames'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "isBehavior",
protocol: "testing",
fn: function (){
var self=this,$self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBehavior\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "javascriptConstructor",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.fn;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"javascriptConstructor",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "javascriptConstructor\x0a\x09\x22Answer the JS constructor used to instantiate. See boot.js\x22\x0a\x09\x0a\x09<inlineJS: 'return self.fn'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "javascriptConstructor:",
protocol: "accessing",
fn: function (aJavaScriptFunction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.setClassConstructor(self, aJavaScriptFunction);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"javascriptConstructor:",{aJavaScriptFunction:aJavaScriptFunction},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJavaScriptFunction"],
source: "javascriptConstructor: aJavaScriptFunction\x0a\x09\x22Set the JS constructor used to instantiate.\x0a\x09See the JS counter-part in boot.js `$core.setClassConstructor'\x22\x0a\x09\x0a\x09<inlineJS: '$core.setClassConstructor(self, aJavaScriptFunction);'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "lookupSelector:",
protocol: "accessing",
fn: function (selector){
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
}, function($ctx1) {$ctx1.fill(self,"lookupSelector:",{selector:selector,lookupClass:lookupClass},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selector"],
source: "lookupSelector: selector\x0a\x09\x22Look up the given selector in my methodDictionary.\x0a\x09Return the corresponding method if found.\x0a\x09Otherwise chase the superclass chain and try again.\x0a\x09Return nil if no method is found.\x22\x0a\x09\x0a\x09| lookupClass |\x0a\x09\x0a\x09lookupClass := self.\x0a\x09[ lookupClass = nil ] whileFalse: [\x0a\x09\x09(lookupClass includesSelector: selector)\x0a\x09\x09\x09\x09ifTrue: [ ^ lookupClass methodAt: selector ].\x0a\x09\x09\x09lookupClass := lookupClass superclass ].\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileFalse:", "=", "ifTrue:", "includesSelector:", "methodAt:", "superclass"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._basicNew())._initialize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09^ self basicNew initialize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "basicNew"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "prototype",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.fn.prototype;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prototype",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prototype\x0a\x09<inlineJS: 'return self.fn.prototype'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "subclasses",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclasses",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subclasses\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "superclass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.superclass;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"superclass",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "superclass\x0a\x09<inlineJS: 'return self.superclass'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "theMetaClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theMetaClass",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theMetaClass\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "theNonMetaClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theNonMetaClass",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theNonMetaClass\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Behavior);

$core.addMethod(
$core.method({
selector: "withAllSubclasses",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Array)._with_(self);
$recv($1)._addAll_($self._allSubclasses());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withAllSubclasses",{},$globals.Behavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "withAllSubclasses\x0a\x09^ (Array with: self) addAll: self allSubclasses; yourself",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["addAll:", "with:", "allSubclasses", "yourself"]
}),
$globals.Behavior);



$core.addClass("Class", $globals.Behavior, ["package"], "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Class.comment="I am __the__ class object.\x0a\x0aMy instances are the classes of the system.\x0aClass creation is done throught a `ClassBuilder` instance.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "basicPackage:",
protocol: "accessing",
fn: function (aPackage){
var self=this,$self=this;
$self["@package"]=aPackage;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "basicPackage: aPackage\x0a\x09package := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return "class";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Returns a tag or general category for this class.\x0a\x09Typically used to help tools do some reflection.\x0a\x09Helios, for example, uses this to decide what icon the class should display.\x22\x0a\x09\x0a\x09^ 'class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
fn: function (){
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
$recv(stream)._write_("instanceVariableNames: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=3;
//>>excludeEnd("ctx");
$recv(stream)._print_(" "._join_($self._instanceVariableNames()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["print:"]=2;
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
}, function($ctx1) {$ctx1.fill(self,"definition",{},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream | stream\x0a\x09\x09print: self superclass; write: ' subclass: '; printSymbol: self name; lf;\x0a\x09\x09write: (self traitCompositionDefinition ifNotEmpty: [ :tcd | { String tab. 'uses: '. tcd. String lf }]);\x0a\x09\x09tab; write: 'instanceVariableNames: '; print: (' ' join: self instanceVariableNames); lf;\x0a\x09\x09tab; write: 'package: '; print: self category ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "print:", "superclass", "write:", "printSymbol:", "name", "lf", "ifNotEmpty:", "traitCompositionDefinition", "tab", "join:", "instanceVariableNames", "category"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "isClass",
protocol: "testing",
fn: function (){
var self=this,$self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isClass\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "package",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@package"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "provided",
protocol: "converting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._javascriptConstructor())._provided();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"provided",{},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "provided\x0a\x09\x22Returns JS proxy that allows to access 'static API', as in\x0a\x09  Number provided EPSILON\x0a\x09that forwards to (wrapped JS) constructor function.\x22\x0a\x09\x0a\x09^ self javascriptConstructor provided",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["provided", "javascriptConstructor"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "rename:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.ClassBuilder)._new())._renameClass_to_(self,aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rename:",{aString:aString},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "rename: aString\x0a\x09ClassBuilder new renameClass: self to: aString",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["renameClass:to:", "new"]
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "subclasses",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.subclasses._copy();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclasses",{},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subclasses\x0a\x09<inlineJS: 'return self.subclasses._copy()'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Class);

$core.addMethod(
$core.method({
selector: "theMetaClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theMetaClass",{},$globals.Class)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theMetaClass\x0a\x09^ self class",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class"]
}),
$globals.Class);



$core.addClass("Metaclass", $globals.Behavior, [], "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Metaclass.comment="I am the root of the class hierarchy.\x0a\x0aMy instances are metaclasses, one for each real class, and have a single instance, which they hold onto: the class that they are the metaclass of.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJavaScriptSource",
protocol: "converting",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSource",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSource\x0a\x09^ '$globals.', self instanceClass name, '.a$cls'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "name", "instanceClass"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
fn: function (){
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["print:"]=1;
//>>excludeEnd("ctx");
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
$recv(stream)._write_("instanceVariableNames: ");
return $recv(stream)._print_(" "._join_($self._instanceVariableNames()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"definition",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream | stream\x0a\x09\x09print: self;\x0a\x09\x09write: (self traitCompositionDefinition\x0a\x09\x09\x09ifEmpty: [' ']\x0a\x09\x09\x09ifNotEmpty: [ :tcd | { String lf. String tab. 'uses: '. tcd. String lf. String tab }]);\x0a\x09\x09write: 'instanceVariableNames: ';\x0a\x09\x09print: (' ' join: self instanceVariableNames) ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "print:", "write:", "ifEmpty:ifNotEmpty:", "traitCompositionDefinition", "lf", "tab", "join:", "instanceVariableNames"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "instanceClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.instanceClass;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instanceClass",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instanceClass\x0a\x09<inlineJS: 'return self.instanceClass'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "instanceVariableNames:",
protocol: "accessing",
fn: function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.ClassBuilder)._new())._class_instanceVariableNames_(self,aCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instanceVariableNames:",{aCollection:aCollection},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "instanceVariableNames: aCollection\x0a\x09ClassBuilder new\x0a\x09\x09class: self instanceVariableNames: aCollection.\x0a\x09^ self",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["class:instanceVariableNames:", "new"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "isMetaclass",
protocol: "testing",
fn: function (){
var self=this,$self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMetaclass\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._instanceClass())._name()).__comma(" class");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ self instanceClass name, ' class'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "name", "instanceClass"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "package",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._instanceClass())._package();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"package",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ self instanceClass package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["package", "instanceClass"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "subclasses",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.metaSubclasses(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclasses",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subclasses\x0a\x09<inlineJS: 'return $core.metaSubclasses(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "theMetaClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theMetaClass\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "theNonMetaClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._instanceClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theNonMetaClass",{},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theNonMetaClass\x0a\x09^ self instanceClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["instanceClass"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "uses:instanceVariableNames:",
protocol: "accessing",
fn: function (aTraitCompositionDescription,aCollection){
var self=this,$self=this;
var metaclass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
metaclass=$self._instanceVariableNames_(aCollection);
$recv(metaclass)._setTraitComposition_($recv(aTraitCompositionDescription)._asTraitComposition());
return metaclass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uses:instanceVariableNames:",{aTraitCompositionDescription:aTraitCompositionDescription,aCollection:aCollection,metaclass:metaclass},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTraitCompositionDescription", "aCollection"],
source: "uses: aTraitCompositionDescription instanceVariableNames: aCollection\x0a\x09| metaclass |\x0a\x09metaclass := self instanceVariableNames: aCollection.\x0a\x09metaclass setTraitComposition: aTraitCompositionDescription asTraitComposition.\x0a\x09^ metaclass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["instanceVariableNames:", "setTraitComposition:", "asTraitComposition"]
}),
$globals.Metaclass);



$core.addClass("ClassBuilder", $globals.Object, [], "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassBuilder.comment="I am responsible for compiling new classes or modifying existing classes in the system.\x0a\x0aRather than using me directly to compile a class, use `Class >> subclass:instanceVariableNames:package:`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addSubclassOf:named:instanceVariableNames:package:",
protocol: "class definition",
fn: function (aClass,className,aCollection,packageName){
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
}, function($ctx1) {$ctx1.fill(self,"addSubclassOf:named:instanceVariableNames:package:",{aClass:aClass,className:className,aCollection:aCollection,packageName:packageName,theClass:theClass,thePackage:thePackage},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className", "aCollection", "packageName"],
source: "addSubclassOf: aClass named: className instanceVariableNames: aCollection package: packageName\x0a\x09| theClass thePackage |\x0a\x09\x0a\x09theClass := Smalltalk globals at: className.\x0a\x09thePackage := Package named: packageName.\x0a\x09\x0a\x09theClass ifNotNil: [\x0a\x09\x09theClass package: thePackage.\x0a\x09\x09theClass superclass == aClass\x0a\x09\x09\x09ifFalse: [ ^ self\x0a\x09\x09\x09\x09migrateClassNamed: className\x0a\x09\x09\x09\x09superclass: aClass\x0a\x09\x09\x09\x09instanceVariableNames: aCollection\x0a\x09\x09\x09\x09package: packageName ] ].\x0a\x09\x09\x0a\x09^ (self\x0a\x09\x09basicAddSubclassOf: aClass\x0a\x09\x09named: className\x0a\x09\x09instanceVariableNames: aCollection\x0a\x09\x09package: packageName) recompile; yourself",
referencedClasses: ["Smalltalk", "Package"],
//>>excludeEnd("ide");
messageSends: ["at:", "globals", "named:", "ifNotNil:", "package:", "ifFalse:", "==", "superclass", "migrateClassNamed:superclass:instanceVariableNames:package:", "recompile", "basicAddSubclassOf:named:instanceVariableNames:package:", "yourself"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "addTraitNamed:package:",
protocol: "class definition",
fn: function (traitName,packageName){
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
}, function($ctx1) {$ctx1.fill(self,"addTraitNamed:package:",{traitName:traitName,packageName:packageName,theTrait:theTrait,thePackage:thePackage},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["traitName", "packageName"],
source: "addTraitNamed: traitName package: packageName\x0a\x09| theTrait thePackage |\x0a\x09\x0a\x09theTrait := Smalltalk globals at: traitName.\x0a\x09thePackage := Package named: packageName.\x0a\x09\x0a\x09theTrait ifNotNil: [ ^ theTrait package: thePackage; recompile; yourself ].\x0a\x09\x09\x0a\x09^ self\x0a\x09\x09basicAddTraitNamed: traitName\x0a\x09\x09package: packageName",
referencedClasses: ["Smalltalk", "Package"],
//>>excludeEnd("ide");
messageSends: ["at:", "globals", "named:", "ifNotNil:", "package:", "recompile", "yourself", "basicAddTraitNamed:package:"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicAddSubclassOf:named:instanceVariableNames:package:",
protocol: "private",
fn: function (aClass,aString,aCollection,packageName){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return $core.addClass(aString, aClass, aCollection, packageName);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAddSubclassOf:named:instanceVariableNames:package:",{aClass:aClass,aString:aString,aCollection:aCollection,packageName:packageName},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString", "aCollection", "packageName"],
source: "basicAddSubclassOf: aClass named: aString instanceVariableNames: aCollection package: packageName\x0a\x09<inlineJS: '\x0a\x09\x09return $core.addClass(aString, aClass, aCollection, packageName);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicAddTraitNamed:package:",
protocol: "private",
fn: function (aString,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.addTrait(aString, anotherString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAddTraitNamed:package:",{aString:aString,anotherString:anotherString},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "basicAddTraitNamed: aString package: anotherString\x0a\x09<inlineJS: 'return $core.addTrait(aString, anotherString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicClass:instanceVariables:",
protocol: "private",
fn: function (aClass,aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aClass)._isMetaclass();
if(!$core.assert($1)){
$self._error_($recv($recv(aClass)._name()).__comma(" is not a metaclass"));
}
$recv(aClass)._basicAt_put_("iVarNames",aCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicClass:instanceVariables:",{aClass:aClass,aCollection:aCollection},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aCollection"],
source: "basicClass: aClass instanceVariables: aCollection\x0a\x0a\x09aClass isMetaclass ifFalse: [ self error: aClass name, ' is not a metaclass' ].\x0a\x09aClass basicAt: 'iVarNames' put: aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isMetaclass", "error:", ",", "name", "basicAt:put:"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicRemoveClass:",
protocol: "private",
fn: function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.removeClass(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicRemoveClass:",{aClass:aClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "basicRemoveClass: aClass\x0a\x09<inlineJS: '$core.removeClass(aClass)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicRenameClass:to:",
protocol: "private",
fn: function (aClass,aString){
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
}, function($ctx1) {$ctx1.fill(self,"basicRenameClass:to:",{aClass:aClass,aString:aString},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "basicRenameClass: aClass to: aString\x0a\x09<inlineJS: '\x0a\x09\x09$globals[aString] = aClass;\x0a\x09\x09delete $globals[aClass.name];\x0a\x09\x09aClass.name = aString;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "basicSwapClassNames:with:",
protocol: "private",
fn: function (aClass,anotherClass){
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
}, function($ctx1) {$ctx1.fill(self,"basicSwapClassNames:with:",{aClass:aClass,anotherClass:anotherClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anotherClass"],
source: "basicSwapClassNames: aClass with: anotherClass\x0a\x09<inlineJS: '\x0a\x09\x09var tmp = aClass.name;\x0a\x09\x09aClass.name = anotherClass.name;\x0a\x09\x09anotherClass.name = tmp;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "class:instanceVariableNames:",
protocol: "class definition",
fn: function (aClass,ivarNames){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._class_instanceVariables_(aClass,$self._instanceVariableNamesFor_(ivarNames));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"class:instanceVariableNames:",{aClass:aClass,ivarNames:ivarNames},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "ivarNames"],
source: "class: aClass instanceVariableNames: ivarNames\x0a\x09self class: aClass instanceVariables:  (self instanceVariableNamesFor: ivarNames)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:instanceVariables:", "instanceVariableNamesFor:"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "class:instanceVariables:",
protocol: "class definition",
fn: function (aClass,aCollection){
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
}, function($ctx1) {$ctx1.fill(self,"class:instanceVariables:",{aClass:aClass,aCollection:aCollection},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aCollection"],
source: "class: aClass instanceVariables: aCollection\x0a\x09self basicClass: aClass instanceVariables: aCollection.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassDefinitionChanged new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassDefinitionChanged"],
//>>excludeEnd("ide");
messageSends: ["basicClass:instanceVariables:", "announce:", "current", "theClass:", "new", "yourself"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "copyClass:named:",
protocol: "copying",
fn: function (aClass,className){
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
}, function($ctx1) {$ctx1.fill(self,"copyClass:named:",{aClass:aClass,className:className,newClass:newClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className"],
source: "copyClass: aClass named: className\x0a\x09| newClass |\x0a\x0a\x09newClass := self\x0a\x09\x09addSubclassOf: aClass superclass\x0a\x09\x09named: className\x0a\x09\x09instanceVariableNames: aClass instanceVariableNames\x0a\x09\x09package: aClass package name.\x0a\x0a\x09self copyClass: aClass to: newClass.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassAdded new\x0a\x09\x09\x09theClass: newClass;\x0a\x09\x09\x09yourself).\x0a\x09\x0a\x09^ newClass",
referencedClasses: ["SystemAnnouncer", "ClassAdded"],
//>>excludeEnd("ide");
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "instanceVariableNames", "name", "package", "copyClass:to:", "announce:", "current", "theClass:", "new", "yourself"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "copyClass:to:",
protocol: "copying",
fn: function (aClass,anotherClass){
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
$3=$recv(each)._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["methodClass"]=1;
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
$14=$recv(each)._methodClass();
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
}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,anotherClass:anotherClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anotherClass"],
source: "copyClass: aClass to: anotherClass\x0a\x0a\x09anotherClass comment: aClass comment.\x0a\x0a\x09aClass methodDictionary valuesDo: [ :each |\x0a\x09\x09each methodClass = aClass ifTrue: [\x0a\x09\x09\x09Compiler new install: each source forClass: anotherClass protocol: each protocol ] ].\x0a\x09anotherClass setTraitComposition: aClass traitComposition.\x0a\x0a\x09self basicClass: anotherClass class instanceVariables: aClass class instanceVariableNames.\x0a\x0a\x09aClass class methodDictionary valuesDo: [ :each |\x0a\x09\x09each methodClass = aClass class ifTrue: [\x0a\x09\x09\x09Compiler new install: each source forClass: anotherClass class protocol: each protocol ] ].\x0a\x09anotherClass class setTraitComposition: aClass class traitComposition",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["comment:", "comment", "valuesDo:", "methodDictionary", "ifTrue:", "=", "methodClass", "install:forClass:protocol:", "new", "source", "protocol", "setTraitComposition:", "traitComposition", "basicClass:instanceVariables:", "class", "instanceVariableNames"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "installMethod:forClass:protocol:",
protocol: "method definition",
fn: function (aCompiledMethod,aBehavior,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCompiledMethod)._protocol_(aString);
$recv(aBehavior)._addCompiledMethod_(aCompiledMethod);
return aCompiledMethod;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installMethod:forClass:protocol:",{aCompiledMethod:aCompiledMethod,aBehavior:aBehavior,aString:aString},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod", "aBehavior", "aString"],
source: "installMethod: aCompiledMethod forClass: aBehavior protocol: aString\x0a\x09aCompiledMethod protocol: aString.\x0a\x09aBehavior addCompiledMethod: aCompiledMethod.\x0a\x09^ aCompiledMethod",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["protocol:", "addCompiledMethod:"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "instanceVariableNamesFor:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aString)._tokenize_(" "))._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instanceVariableNamesFor:",{aString:aString},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "instanceVariableNamesFor: aString\x0a\x09^ (aString tokenize: ' ') reject: [ :each | each isEmpty ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reject:", "tokenize:", "isEmpty"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "migrateClass:superclass:",
protocol: "class migration",
fn: function (aClass,anotherClass){
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
}, function($ctx1) {$ctx1.fill(self,"migrateClass:superclass:",{aClass:aClass,anotherClass:anotherClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "anotherClass"],
source: "migrateClass: aClass superclass: anotherClass\x0a\x09^ self\x0a\x09\x09migrateClassNamed: aClass name\x0a\x09\x09superclass: anotherClass\x0a\x09\x09instanceVariableNames: aClass instanceVariableNames\x0a\x09\x09package: aClass package name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["migrateClassNamed:superclass:instanceVariableNames:package:", "name", "instanceVariableNames", "package"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "migrateClassNamed:superclass:instanceVariableNames:package:",
protocol: "class migration",
fn: function (className,aClass,aCollection,packageName){
var self=this,$self=this;
var oldClass,newClass,tmp;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
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
$1=$self._basicRemoveClass_(newClass);
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
$2=$recv($globals.SystemAnnouncer)._current();
$4=$recv($globals.ClassMigrated)._new();
$recv($4)._theClass_(newClass);
$recv($4)._oldClass_(oldClass);
$3=$recv($4)._yourself();
$recv($2)._announce_($3);
return newClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"migrateClassNamed:superclass:instanceVariableNames:package:",{className:className,aClass:aClass,aCollection:aCollection,packageName:packageName,oldClass:oldClass,newClass:newClass,tmp:tmp},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["className", "aClass", "aCollection", "packageName"],
source: "migrateClassNamed: className superclass: aClass instanceVariableNames: aCollection package: packageName\x0a\x09| oldClass newClass tmp |\x0a\x09\x0a\x09tmp := 'new*', className.\x0a\x09oldClass := Smalltalk globals at: className.\x0a\x09\x0a\x09newClass := self\x0a\x09\x09addSubclassOf: aClass\x0a\x09\x09named: tmp\x0a\x09\x09instanceVariableNames: aCollection\x0a\x09\x09package: packageName.\x0a\x0a\x09self basicSwapClassNames: oldClass with: newClass.\x0a\x0a\x09[ self copyClass: oldClass to: newClass ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :exception |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09basicSwapClassNames: oldClass with: newClass;\x0a\x09\x09\x09\x09basicRemoveClass: newClass.\x0a\x09\x09\x09\x09exception pass ].\x0a\x0a\x09self\x0a\x09\x09rawRenameClass: oldClass to: tmp;\x0a\x09\x09rawRenameClass: newClass to: className.\x0a\x0a\x09oldClass subclasses \x0a\x09\x09do: [ :each | self migrateClass: each superclass: newClass ].\x0a\x0a\x09self basicRemoveClass: oldClass.\x0a\x09\x0a\x09SystemAnnouncer current announce: (ClassMigrated new\x0a\x09\x09theClass: newClass;\x0a\x09\x09oldClass: oldClass;\x0a\x09\x09yourself).\x0a\x09\x0a\x09^ newClass",
referencedClasses: ["Smalltalk", "Error", "SystemAnnouncer", "ClassMigrated"],
//>>excludeEnd("ide");
messageSends: [",", "at:", "globals", "addSubclassOf:named:instanceVariableNames:package:", "basicSwapClassNames:with:", "on:do:", "copyClass:to:", "basicRemoveClass:", "pass", "rawRenameClass:to:", "do:", "subclasses", "migrateClass:superclass:", "announce:", "current", "theClass:", "new", "oldClass:", "yourself"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "rawRenameClass:to:",
protocol: "private",
fn: function (aClass,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		$globals[aString] = aClass;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rawRenameClass:to:",{aClass:aClass,aString:aString},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "rawRenameClass: aClass to: aString\x0a\x09<inlineJS: '\x0a\x09\x09$globals[aString] = aClass;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "renameClass:to:",
protocol: "class migration",
fn: function (aClass,className){
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
}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,className:className},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className"],
source: "renameClass: aClass to: className\x0a\x09self basicRenameClass: aClass to: className.\x0a\x09\x0a\x09\x22Recompile the class to fix potential issues with super sends\x22\x0a\x09aClass recompile.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassRenamed new\x0a\x09\x09\x09theClass: aClass;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassRenamed"],
//>>excludeEnd("ide");
messageSends: ["basicRenameClass:to:", "recompile", "announce:", "current", "theClass:", "new", "yourself"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "superclass:subclass:",
protocol: "class definition",
fn: function (aClass,className){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._superclass_subclass_instanceVariableNames_package_(aClass,className,"",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:",{aClass:aClass,className:className},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className"],
source: "superclass: aClass subclass: className\x0a\x09^ self superclass: aClass subclass: className instanceVariableNames: '' package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["superclass:subclass:instanceVariableNames:package:"]
}),
$globals.ClassBuilder);

$core.addMethod(
$core.method({
selector: "superclass:subclass:instanceVariableNames:package:",
protocol: "class definition",
fn: function (aClass,className,ivarNames,packageName){
var self=this,$self=this;
var newClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$receiver;
$1=$self._instanceVariableNamesFor_(ivarNames);
if(($receiver = packageName) == null || $receiver.a$nil){
$2="unclassified";
} else {
$2=packageName;
}
newClass=$self._addSubclassOf_named_instanceVariableNames_package_(aClass,className,$1,$2);
$3=$recv($globals.SystemAnnouncer)._current();
$5=$recv($globals.ClassAdded)._new();
$recv($5)._theClass_(newClass);
$4=$recv($5)._yourself();
$recv($3)._announce_($4);
return newClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"superclass:subclass:instanceVariableNames:package:",{aClass:aClass,className:className,ivarNames:ivarNames,packageName:packageName,newClass:newClass},$globals.ClassBuilder)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "className", "ivarNames", "packageName"],
source: "superclass: aClass subclass: className instanceVariableNames: ivarNames package: packageName\x0a\x09| newClass |\x0a\x09\x0a\x09newClass := self addSubclassOf: aClass\x0a\x09\x09named: className instanceVariableNames: (self instanceVariableNamesFor: ivarNames)\x0a\x09\x09package: (packageName ifNil: [ 'unclassified' ]).\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassAdded new\x0a\x09\x09\x09theClass: newClass;\x0a\x09\x09\x09yourself).\x0a\x09\x0a\x09^ newClass",
referencedClasses: ["SystemAnnouncer", "ClassAdded"],
//>>excludeEnd("ide");
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "instanceVariableNamesFor:", "ifNil:", "announce:", "current", "theClass:", "new", "yourself"]
}),
$globals.ClassBuilder);



$core.addClass("ClassSorterNode", $globals.Object, ["theClass", "level", "nodes"], "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassSorterNode.comment="I provide an algorithm for sorting classes alphabetically.\x0a\x0aSee [Issue #143](https://lolg.it/amber/amber/issues/143).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "getNodesFrom:",
protocol: "accessing",
fn: function (aCollection){
var self=this,$self=this;
var children,others;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
children=[];
others=[];
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(each)._superclass()).__eq($self._theClass());
if($core.assert($1)){
return $recv(children)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv(others)._add_(each);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self["@nodes"]=$recv(children)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.ClassSorterNode)._on_classes_level_(each,others,$recv($self._level()).__plus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getNodesFrom:",{aCollection:aCollection,children:children,others:others},$globals.ClassSorterNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "getNodesFrom: aCollection\x0a\x09| children others |\x0a\x09children := #().\x0a\x09others := #().\x0a\x09aCollection do: [ :each |\x0a\x09\x09(each superclass = self theClass)\x0a\x09\x09\x09ifTrue: [ children add: each ]\x0a\x09\x09\x09ifFalse: [ others add: each ]].\x0a\x09nodes:= children collect: [ :each |\x0a\x09\x09ClassSorterNode on: each classes: others level: self level + 1 ]",
referencedClasses: ["ClassSorterNode"],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:ifFalse:", "=", "superclass", "theClass", "add:", "collect:", "on:classes:level:", "+", "level"]
}),
$globals.ClassSorterNode);

$core.addMethod(
$core.method({
selector: "level",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@level"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level\x0a\x09^ level",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassSorterNode);

$core.addMethod(
$core.method({
selector: "level:",
protocol: "accessing",
fn: function (anInteger){
var self=this,$self=this;
$self["@level"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "level: anInteger\x0a\x09level := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassSorterNode);

$core.addMethod(
$core.method({
selector: "nodes",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@nodes"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nodes\x0a\x09^ nodes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassSorterNode);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@theClass"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassSorterNode);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: "accessing",
fn: function (aClass){
var self=this,$self=this;
$self["@theClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassSorterNode);

$core.addMethod(
$core.method({
selector: "traverseClassesWith:",
protocol: "visiting",
fn: function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$self._theClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["theClass"]=1;
//>>excludeEnd("ctx");
$recv(aCollection)._add_($1);
$recv($recv($self._nodes())._sorted_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(a)._theClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["theClass"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($2).__lt_eq($recv($recv(b)._theClass())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
})))._do_((function(aNode){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aNode)._traverseClassesWith_(aCollection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aNode:aNode},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"traverseClassesWith:",{aCollection:aCollection},$globals.ClassSorterNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "traverseClassesWith: aCollection\x0a\x09\x22sort classes alphabetically Issue #143\x22\x0a\x0a\x09aCollection add: self theClass.\x0a\x09(self nodes sorted: [ :a :b | a theClass name <= b theClass name ]) do: [ :aNode |\x0a\x09\x09aNode traverseClassesWith: aCollection ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "theClass", "do:", "sorted:", "nodes", "<=", "name", "traverseClassesWith:"]
}),
$globals.ClassSorterNode);


$core.addMethod(
$core.method({
selector: "on:classes:level:",
protocol: "instance creation",
fn: function (aClass,aCollection,anInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._theClass_(aClass);
$recv($1)._level_(anInteger);
$recv($1)._getNodesFrom_(aCollection);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:classes:level:",{aClass:aClass,aCollection:aCollection,anInteger:anInteger},$globals.ClassSorterNode.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aCollection", "anInteger"],
source: "on: aClass classes: aCollection level: anInteger\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09level: anInteger;\x0a\x09\x09getNodesFrom: aCollection;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass:", "new", "level:", "getNodesFrom:", "yourself"]
}),
$globals.ClassSorterNode.a$cls);


$core.addTrait("TBehaviorDefaults", "Kernel-Classes");
$core.addMethod(
$core.method({
selector: "allInstanceVariableNames",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return [];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allInstanceVariableNames\x0a\x09\x22Default for non-classes; to be able to send #allInstanceVariableNames to any class / trait.\x22\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TBehaviorDefaults);

$core.addMethod(
$core.method({
selector: "allSubclassesDo:",
protocol: "enumerating",
fn: function (aBlock){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "allSubclassesDo: aBlock\x0a\x09\x22Default for non-classes; to be able to send #allSubclassesDo: to any class / trait.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TBehaviorDefaults);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TBehaviorDefaults);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
fn: function (aStream){
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
($globals.TBehaviorDefaults.superclass||$boot.nilAsClass).fn.prototype._printOn_.apply($self, [aStream]));
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
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.TBehaviorDefaults)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09self name\x0a\x09\x09ifNil: [ super printOn: aStream ]\x0a\x09\x09ifNotNil: [ :name | aStream nextPutAll: name ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "name", "printOn:", "nextPutAll:"]
}),
$globals.TBehaviorDefaults);

$core.addMethod(
$core.method({
selector: "superclass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "superclass\x0a\x09\x22Default for non-classes; to be able to send #superclass to any class / trait.\x22\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TBehaviorDefaults);

$core.addMethod(
$core.method({
selector: "traitUsers",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return [];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "traitUsers\x0a\x09\x22Default for non-traits; to be able to send #traitUsers to any class / trait\x22\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TBehaviorDefaults);


$core.addTrait("TBehaviorProvider", "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TBehaviorProvider.comment="I have method dictionary and organization.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: ">>",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._methodAt_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">>",{aString:aString},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: ">> aString\x0a\x09^ self methodAt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["methodAt:"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "addCompiledMethod:",
protocol: "compiling",
fn: function (aMethod){
var self=this,$self=this;
var oldMethod,announcement;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$receiver;
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
$3=$recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
announcement=$3;
} else {
$4=$recv($globals.MethodModified)._new();
$recv($4)._oldMethod_(oldMethod);
$recv($4)._method_(aMethod);
announcement=$recv($4)._yourself();
}
$recv($recv($globals.SystemAnnouncer)._current())._announce_(announcement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addCompiledMethod:",{aMethod:aMethod,oldMethod:oldMethod,announcement:announcement},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "addCompiledMethod: aMethod\x0a\x09| oldMethod announcement |\x0a\x09\x0a\x09oldMethod := self methodDictionary\x0a\x09\x09at: aMethod selector\x0a\x09\x09ifAbsent: [ nil ].\x0a\x09\x0a\x09self basicAddCompiledMethod: aMethod.\x0a\x09\x0a\x09announcement := oldMethod\x0a\x09\x09ifNil: [\x0a\x09\x09\x09MethodAdded new\x0a\x09\x09\x09\x09\x09method: aMethod;\x0a\x09\x09\x09\x09\x09yourself ]\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09MethodModified new\x0a\x09\x09\x09\x09\x09oldMethod: oldMethod;\x0a\x09\x09\x09\x09\x09method: aMethod;\x0a\x09\x09\x09\x09\x09yourself ].\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09\x09\x09announce: announcement",
referencedClasses: ["MethodAdded", "MethodModified", "SystemAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "methodDictionary", "selector", "basicAddCompiledMethod:", "ifNil:ifNotNil:", "method:", "new", "yourself", "oldMethod:", "announce:", "current"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "basicAddCompiledMethod:",
protocol: "private",
fn: function (aMethod){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.addMethod(aMethod, self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAddCompiledMethod:",{aMethod:aMethod},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "basicAddCompiledMethod: aMethod\x0a\x09<inlineJS: '$core.addMethod(aMethod, self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "basicRemoveCompiledMethod:",
protocol: "private",
fn: function (aMethod){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.removeMethod(aMethod,self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicRemoveCompiledMethod:",{aMethod:aMethod},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "basicRemoveCompiledMethod: aMethod\x0a\x09<inlineJS: '$core.removeMethod(aMethod,self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "compile:protocol:",
protocol: "compiling",
fn: function (aString,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Compiler)._new())._install_forClass_protocol_(aString,self,anotherString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile:protocol:",{aString:aString,anotherString:anotherString},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "compile: aString protocol: anotherString\x0a\x09^ Compiler new\x0a\x09\x09install: aString\x0a\x09\x09forClass: self\x0a\x09\x09protocol: anotherString",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["install:forClass:protocol:", "new"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "includesSelector:",
protocol: "testing",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._methodDictionary())._includesKey_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesSelector:",{aString:aString},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "includesSelector: aString\x0a\x09^ self methodDictionary includesKey: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includesKey:", "methodDictionary"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methodAt:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._methodDictionary())._at_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodAt:",{aString:aString},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "methodAt: aString\x0a\x09^ self methodDictionary at: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "methodDictionary"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methodDictionary",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"methodDictionary",{},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodDictionary\x0a\x09<inlineJS: 'var dict = $globals.HashedCollection._new();\x0a\x09var methods = self.methods;\x0a\x09Object.keys(methods).forEach(function(i) {\x0a\x09\x09if(methods[i].selector) {\x0a\x09\x09\x09dict._at_put_(methods[i].selector, methods[i]);\x0a\x09\x09}\x0a\x09});\x0a\x09return dict'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methodOrganizationEnter:andLeave:",
protocol: "accessing",
fn: function (aMethod,oldMethod){
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
}, function($ctx1) {$ctx1.fill(self,"methodOrganizationEnter:andLeave:",{aMethod:aMethod,oldMethod:oldMethod},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "oldMethod"],
source: "methodOrganizationEnter: aMethod andLeave: oldMethod\x0a\x09aMethod ifNotNil: [\x0a\x09\x09self organization addElement: aMethod protocol ].\x0a\x09\x0a\x09oldMethod ifNotNil: [\x0a\x09\x09self removeProtocolIfEmpty: oldMethod protocol ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "addElement:", "organization", "protocol", "removeProtocolIfEmpty:"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methodTemplate",
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
}, function($ctx1) {$ctx1.fill(self,"methodTemplate",{},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodTemplate\x0a\x09^ String streamContents: [ :stream | stream \x0a\x09\x09write: 'messageSelectorAndArgumentNames'; lf;\x0a\x09\x09tab; write: '\x22comment stating purpose of message\x22'; lf;\x0a\x09\x09lf;\x0a\x09\x09tab; write: '| temporary variable names |'; lf;\x0a\x09\x09tab; write: 'statements' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "write:", "lf", "tab"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methods",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._methodDictionary())._values();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methods",{},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methods\x0a\x09^ self methodDictionary values",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["values", "methodDictionary"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "methodsInProtocol:",
protocol: "accessing",
fn: function (aString){
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
}, function($ctx1) {$ctx1.fill(self,"methodsInProtocol:",{aString:aString},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "methodsInProtocol: aString\x0a\x09^ self methods select: [ :each | each protocol = aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "methods", "=", "protocol"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "organization",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"organization",{},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "organization\x0a\x09^ self basicOrganization ifNil: [\x0a\x09\x09self basicOrganization: (ClassOrganizer on: self).\x0a\x09\x09self basicOrganization ]",
referencedClasses: ["ClassOrganizer"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "basicOrganization", "basicOrganization:", "on:"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "ownMethods",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"ownMethods",{},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ownMethods\x0a\x09\x22Answer the methods of the receiver that are not package extensions\x0a\x09nor obtained via trait composition\x22\x0a\x0a\x09^ (self ownProtocols \x0a\x09\x09inject: OrderedCollection new\x0a\x09\x09into: [ :acc :each | acc, (self ownMethodsInProtocol: each) ])\x0a\x09\x09\x09sorted: [ :a :b | a selector <= b selector ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["sorted:", "inject:into:", "ownProtocols", "new", ",", "ownMethodsInProtocol:", "<=", "selector"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "ownMethodsInProtocol:",
protocol: "accessing",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._methodsInProtocol_(aString))._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._methodClass()).__eq(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ownMethodsInProtocol:",{aString:aString},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "ownMethodsInProtocol: aString\x0a\x09^ (self methodsInProtocol: aString) select: [ :each | each methodClass = self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "methodsInProtocol:", "=", "methodClass"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "ownProtocols",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"ownProtocols",{},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ownProtocols\x0a\x09\x22Answer the protocols of the receiver that are not package extensions\x22\x0a\x0a\x09^ self protocols reject: [ :each |\x0a\x09\x09each match: '^\x5c*' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reject:", "protocols", "match:"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "packageOfProtocol:",
protocol: "accessing",
fn: function (aString){
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
}, function($ctx1) {$ctx1.fill(self,"packageOfProtocol:",{aString:aString},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "packageOfProtocol: aString\x0a\x09\x22Answer the package the method of receiver belongs to:\x0a\x09- if it is an extension method, answer the corresponding package\x0a\x09- else answer the receiver's package\x22\x0a\x09\x0a\x09(aString beginsWith: '*') ifFalse: [\x0a\x09\x09^ self package ].\x0a\x09\x09\x0a\x09^ Package \x0a\x09\x09named: aString allButFirst\x0a\x09\x09ifAbsent: [ nil ]",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "beginsWith:", "package", "named:ifAbsent:", "allButFirst"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "protocols",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv($self._organization())._elements())._asArray())._sorted();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocols",{},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocols\x0a\x09^ self organization elements asArray sorted",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sorted", "asArray", "elements", "organization"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "protocolsDo:",
protocol: "enumerating",
fn: function (aBlock){
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
}, function($ctx1) {$ctx1.fill(self,"protocolsDo:",{aBlock:aBlock,methodsByProtocol:methodsByProtocol},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "protocolsDo: aBlock\x0a\x09\x22Execute aBlock for each method protocol with\x0a\x09its collection of methods in the sort order of protocol name.\x22\x0a\x0a\x09| methodsByProtocol |\x0a\x09methodsByProtocol := HashedCollection new.\x0a\x09self methodDictionary valuesDo: [ :m |\x0a\x09\x09(methodsByProtocol at: m protocol ifAbsentPut: [ Array new ])\x0a\x09\x09\x09add: m ].\x0a\x09self protocols do: [ :protocol |\x0a\x09\x09aBlock value: protocol value: (methodsByProtocol at: protocol) ]",
referencedClasses: ["HashedCollection", "Array"],
//>>excludeEnd("ide");
messageSends: ["new", "valuesDo:", "methodDictionary", "add:", "at:ifAbsentPut:", "protocol", "do:", "protocols", "value:value:", "at:"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "recompile",
protocol: "compiling",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Compiler)._new())._recompile_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recompile",{},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recompile\x0a\x09^ Compiler new recompile: self",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["recompile:", "new"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "removeCompiledMethod:",
protocol: "compiling",
fn: function (aMethod){
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
}, function($ctx1) {$ctx1.fill(self,"removeCompiledMethod:",{aMethod:aMethod},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "removeCompiledMethod: aMethod\x0a\x09self basicRemoveCompiledMethod: aMethod.\x0a\x09\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (MethodRemoved new\x0a\x09\x09\x09method: aMethod;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "MethodRemoved"],
//>>excludeEnd("ide");
messageSends: ["basicRemoveCompiledMethod:", "announce:", "current", "method:", "new", "yourself"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "removeProtocolIfEmpty:",
protocol: "accessing",
fn: function (aString){
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
}, function($ctx1) {$ctx1.fill(self,"removeProtocolIfEmpty:",{aString:aString},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "removeProtocolIfEmpty: aString\x0a\x09self methods\x0a\x09\x09detect: [ :each | each protocol = aString ]\x0a\x09\x09ifNone: [ self organization removeElement: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "methods", "=", "protocol", "removeElement:", "organization"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "selectors",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._methodDictionary())._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectors",{},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectors\x0a\x09^ self methodDictionary keys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keys", "methodDictionary"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "setTraitComposition:",
protocol: "compiling",
fn: function (aTraitComposition){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$core.setTraitComposition(aTraitComposition._asJavaScriptObject(), self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setTraitComposition:",{aTraitComposition:aTraitComposition},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTraitComposition"],
source: "setTraitComposition: aTraitComposition\x0a\x09<inlineJS: '$core.setTraitComposition(aTraitComposition._asJavaScriptObject(), self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "traitComposition",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"traitComposition",{},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "traitComposition\x0a\x09^ (self basicAt: 'traitComposition')\x0a\x09\x09ifNil: [ #() ]\x0a\x09\x09ifNotNil: [ :aCollection | aCollection collect: [ :each | TraitTransformation fromJSON: each ] ]",
referencedClasses: ["TraitTransformation"],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "basicAt:", "collect:", "fromJSON:"]
}),
$globals.TBehaviorProvider);

$core.addMethod(
$core.method({
selector: "traitCompositionDefinition",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"traitCompositionDefinition",{},$globals.TBehaviorProvider)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "traitCompositionDefinition\x0a\x09^ self traitComposition ifNotEmpty: [ :traitComposition |\x0a\x09\x09String streamContents: [ :str |\x0a\x09\x09\x09str write: '{'.\x0a\x09\x09\x09traitComposition\x0a\x09\x09\x09\x09do: [ :each | str write: each definition ]\x0a\x09\x09\x09\x09separatedBy: [ str write: '. ' ].\x0a\x09\x09\x09str write: '}' ] ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "traitComposition", "streamContents:", "write:", "do:separatedBy:", "definition"]
}),
$globals.TBehaviorProvider);


$core.addTrait("TMasterBehavior", "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TMasterBehavior.comment="I am the behavior on the instance-side of the browser.\x0a\x0aI define things like package, category, name, comment etc.\x0aas opposed to derived behaviors (metaclass, class trait, ...)\x0athat relate to me.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJavaScriptSource",
protocol: "converting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return "$globals.".__comma($self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSource",{},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSource\x0a\x09^ '$globals.', self name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "name"]
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "browse",
protocol: "browsing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Finder)._findClass_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"browse",{},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "browse\x0a\x09Finder findClass: self",
referencedClasses: ["Finder"],
//>>excludeEnd("ide");
messageSends: ["findClass:"]
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "category",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"category",{},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ self package ifNil: [ 'Unclassified' ] ifNotNil: [ self package name ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "package", "name"]
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclassResponsibility();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classTag",{},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Every master behavior should define a class tag.\x22\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "comment",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"comment",{},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "comment\x0a\x09^ (self basicAt: 'comment') ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "basicAt:"]
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "comment:",
protocol: "accessing",
fn: function (aString){
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
}, function($ctx1) {$ctx1.fill(self,"comment:",{aString:aString},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "comment: aString\x0a\x09self basicAt: 'comment' put: aString.\x0a\x09SystemAnnouncer current\x0a\x09\x09announce: (ClassCommentChanged new\x0a\x09\x09\x09theClass: self;\x0a\x09\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassCommentChanged"],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "announce:", "current", "theClass:", "new", "yourself"]
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "definedMethods",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"definedMethods",{methods:methods},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definedMethods\x0a\x09\x22Answers methods of me and derived 'meta' part if present\x22\x0a\x09| methods |\x0a\x09methods := self methods.\x0a\x09self theMetaClass\x0a\x09\x09ifNil: [ ^ methods ]\x0a\x09\x09ifNotNil: [ :meta | ^ methods, meta methods ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["methods", "ifNil:ifNotNil:", "theMetaClass", ","]
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "enterOrganization",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"enterOrganization",{},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enterOrganization\x0a\x09Smalltalk ifNotNil: [\x0a\x09\x09(self basicAt: 'category')\x0a\x09\x09\x09ifNil: [ self basicPackage: nil ]\x0a\x09\x09\x09ifNotNil: [ :category |\x0a\x09\x09\x09\x09\x22Amber has 1-1 correspondence between cat and pkg, atm\x22\x0a\x09\x09\x09\x09self basicPackage: (Package named: category).\x0a\x09\x09\x09\x09self package organization addElement: self ] ]",
referencedClasses: ["Smalltalk", "Package"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "ifNil:ifNotNil:", "basicAt:", "basicPackage:", "named:", "addElement:", "organization", "package"]
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "leaveOrganization",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"leaveOrganization",{},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "leaveOrganization\x0a\x09Smalltalk ifNotNil: [\x0a\x09\x09self package organization removeElement: self ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "removeElement:", "organization", "package"]
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.name;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name",{},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09<inlineJS: 'return self.name'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "package:",
protocol: "accessing",
fn: function (aPackage){
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
}, function($ctx1) {$ctx1.fill(self,"package:",{aPackage:aPackage,oldPackage:oldPackage},$globals.TMasterBehavior)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "package: aPackage\x0a\x09| oldPackage |\x0a\x09\x0a\x09self package = aPackage ifTrue: [ ^ self ].\x0a\x09\x0a\x09oldPackage := self package.\x0a\x09\x0a\x09self\x0a\x09\x09leaveOrganization;\x0a\x09\x09basicAt: 'category' put: aPackage name;\x0a\x09\x09enterOrganization.\x0a\x0a\x09SystemAnnouncer current announce: (ClassMoved new\x0a\x09\x09theClass: self;\x0a\x09\x09oldPackage: oldPackage;\x0a\x09\x09yourself)",
referencedClasses: ["SystemAnnouncer", "ClassMoved"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "package", "leaveOrganization", "basicAt:put:", "name", "enterOrganization", "announce:", "current", "theClass:", "new", "oldPackage:", "yourself"]
}),
$globals.TMasterBehavior);

$core.addMethod(
$core.method({
selector: "theNonMetaClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theNonMetaClass\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TMasterBehavior);


$core.addClass("Trait", $globals.Object, ["organization", "package"], "Kernel-Classes");
$core.addMethod(
$core.method({
selector: "-",
protocol: "composition",
fn: function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asTraitTransformation()).__minus(anArray);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"-",{anArray:anArray},$globals.Trait)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "- anArray\x0a\x09^ self asTraitTransformation - anArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "asTraitTransformation"]
}),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "@",
protocol: "composition",
fn: function (anArrayOfAssociations){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asTraitTransformation()).__at(anArrayOfAssociations);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"@",{anArrayOfAssociations:anArrayOfAssociations},$globals.Trait)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArrayOfAssociations"],
source: "@ anArrayOfAssociations\x0a\x09^ self asTraitTransformation @ anArrayOfAssociations",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "asTraitTransformation"]
}),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "asTraitComposition",
protocol: "converting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asTraitTransformation())._asTraitComposition();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTraitComposition",{},$globals.Trait)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTraitComposition\x0a\x09^ self asTraitTransformation asTraitComposition",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asTraitComposition", "asTraitTransformation"]
}),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "asTraitTransformation",
protocol: "converting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.TraitTransformation)._on_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTraitTransformation",{},$globals.Trait)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTraitTransformation\x0a\x09^ TraitTransformation on: self",
referencedClasses: ["TraitTransformation"],
//>>excludeEnd("ide");
messageSends: ["on:"]
}),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "basicOrganization",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@organization"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicOrganization\x0a\x09^ organization",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "basicOrganization:",
protocol: "accessing",
fn: function (aClassOrganizer){
var self=this,$self=this;
$self["@organization"]=aClassOrganizer;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClassOrganizer"],
source: "basicOrganization: aClassOrganizer\x0a\x09organization := aClassOrganizer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "basicPackage:",
protocol: "accessing",
fn: function (aPackage){
var self=this,$self=this;
$self["@package"]=aPackage;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "basicPackage: aPackage\x0a\x09package := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return "trait";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09^ 'trait'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Trait);

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
}, function($ctx1) {$ctx1.fill(self,"definition",{},$globals.Trait)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :stream | stream\x0a\x09\x09write: 'Trait named: '; printSymbol: self name; lf;\x0a\x09\x09write: (self traitCompositionDefinition ifNotEmpty: [ :tcd | { String tab. 'uses: '. tcd. String lf }]);\x0a\x09\x09tab; write: 'package: '; print: self category ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "write:", "printSymbol:", "name", "lf", "ifNotEmpty:", "traitCompositionDefinition", "tab", "print:", "category"]
}),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "package",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@package"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ package",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "theMetaClass",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theMetaClass\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Trait);

$core.addMethod(
$core.method({
selector: "traitUsers",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._basicAt_("traitUsers"))._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"traitUsers",{},$globals.Trait)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "traitUsers\x0a\x09^ (self basicAt: 'traitUsers') copy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy", "basicAt:"]
}),
$globals.Trait);


$core.addMethod(
$core.method({
selector: "named:package:",
protocol: "instance creation",
fn: function (aString,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.ClassBuilder)._new())._addTraitNamed_package_(aString,anotherString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:package:",{aString:aString,anotherString:anotherString},$globals.Trait.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "named: aString package: anotherString\x0a\x09^ ClassBuilder new addTraitNamed: aString package: anotherString",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["addTraitNamed:package:", "new"]
}),
$globals.Trait.a$cls);

$core.addMethod(
$core.method({
selector: "named:uses:package:",
protocol: "instance creation",
fn: function (aString,aTraitCompositionDescription,anotherString){
var self=this,$self=this;
var trait;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
trait=$self._named_package_(aString,anotherString);
$recv(trait)._setTraitComposition_($recv(aTraitCompositionDescription)._asTraitComposition());
return trait;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"named:uses:package:",{aString:aString,aTraitCompositionDescription:aTraitCompositionDescription,anotherString:anotherString,trait:trait},$globals.Trait.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aTraitCompositionDescription", "anotherString"],
source: "named: aString uses: aTraitCompositionDescription package: anotherString\x0a\x09| trait |\x0a\x09trait := self named: aString package: anotherString.\x0a\x09trait setTraitComposition: aTraitCompositionDescription asTraitComposition.\x0a\x09^ trait",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["named:package:", "setTraitComposition:", "asTraitComposition"]
}),
$globals.Trait.a$cls);


$core.addClass("TraitTransformation", $globals.Object, ["trait", "aliases", "exclusions"], "Kernel-Classes");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TraitTransformation.comment="I am a single step in trait composition.\x0a\x0aI represent one trait including its aliases and exclusions.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "-",
protocol: "composition",
fn: function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._copy();
$recv($1)._addExclusions_(anArray);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"-",{anArray:anArray},$globals.TraitTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "- anArray\x0a\x09^ self copy addExclusions: anArray; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addExclusions:", "copy", "yourself"]
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "@",
protocol: "composition",
fn: function (anArrayOfAssociations){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._copy();
$recv($1)._addAliases_(anArrayOfAssociations);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"@",{anArrayOfAssociations:anArrayOfAssociations},$globals.TraitTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArrayOfAssociations"],
source: "@ anArrayOfAssociations\x0a\x09^ self copy addAliases: anArrayOfAssociations; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAliases:", "copy", "yourself"]
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "addAliases:",
protocol: "accessing",
fn: function (anArrayOfAssociations){
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
return $recv($self["@aliases"])._at_ifPresent_ifAbsent_(key,(function(){
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
return $recv($self["@aliases"])._at_put_(key,$recv(each)._value());
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
}, function($ctx1) {$ctx1.fill(self,"addAliases:",{anArrayOfAssociations:anArrayOfAssociations},$globals.TraitTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArrayOfAssociations"],
source: "addAliases: anArrayOfAssociations\x0a\x09anArrayOfAssociations do: [ :each |\x0a\x09\x09| key |\x0a\x09\x09key := each key.\x0a\x09\x09aliases at: key\x0a\x09\x09\x09ifPresent: [ self error: 'Cannot use same alias name twice.' ]\x0a\x09\x09\x09ifAbsent: [ aliases at: key put: each value ] ].\x0a\x09^ anArrayOfAssociations",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "key", "at:ifPresent:ifAbsent:", "error:", "at:put:", "value"]
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "addExclusions:",
protocol: "accessing",
fn: function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@exclusions"])._addAll_(anArray);
return anArray;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addExclusions:",{anArray:anArray},$globals.TraitTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "addExclusions: anArray\x0a\x09exclusions addAll: anArray.\x0a\x09^ anArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAll:"]
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "aliases",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@aliases"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aliases\x0a\x09^ aliases",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $globals.HashedCollection._newFromPairs_(["trait",$self._trait(),"aliases",$self._aliases(),"exclusions",$recv($recv($self._exclusions())._asArray())._sorted()]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptObject",{},$globals.TraitTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09^ #{\x0a\x09\x09'trait' -> self trait.\x0a\x09\x09'aliases' -> self aliases.\x0a\x09\x09'exclusions' -> self exclusions asArray sorted }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trait", "aliases", "sorted", "asArray", "exclusions"]
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "asJavaScriptSource",
protocol: "converting",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSource",{},$globals.TraitTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSource\x0a\x09^ String streamContents: [ :str | str write: {\x0a\x09\x09'{trait: '. self trait asJavaScriptSource.\x0a\x09\x09self aliases ifNotEmpty: [ :al |\x0a\x09\x09\x09{', aliases: '. al asJSONString} ].\x0a\x09\x09self exclusions ifNotEmpty: [ :ex |\x0a\x09\x09\x09{', exclusions: '. ex asArray sorted asJavaScriptSource} ].\x0a\x09\x09'}' } ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "write:", "asJavaScriptSource", "trait", "ifNotEmpty:", "aliases", "asJSONString", "exclusions", "sorted", "asArray"]
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "asTraitComposition",
protocol: "converting",
fn: function (){
var self=this,$self=this;
return [self];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTraitComposition\x0a\x09^ { self }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "asTraitTransformation",
protocol: "converting",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTraitTransformation\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "definition",
protocol: "accessing",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"definition",{},$globals.TraitTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "definition\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09str print: self trait.\x0a\x09\x09self aliases ifNotEmpty: [ :al |\x0a\x09\x09\x09str write: ' @ {'.\x0a\x09\x09\x09al associations\x0a\x09\x09\x09\x09do: [ :each | str printSymbol: each key; write: ' -> '; printSymbol: each value ]\x0a\x09\x09\x09\x09separatedBy: [ str write: '. ' ].\x0a\x09\x09\x09str write: '}' ].\x0a\x09\x09self exclusions ifNotEmpty: [ :ex |\x0a\x09\x09\x09str write: ' - #('.\x0a\x09\x09\x09ex asArray sorted \x0a\x09\x09\x09\x09do: [ :each | str write: each symbolPrintString allButFirst ]\x0a\x09\x09\x09\x09separatedBy: [ str space ].\x0a\x09\x09\x09str write: ')' ] ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "print:", "trait", "ifNotEmpty:", "aliases", "write:", "do:separatedBy:", "associations", "printSymbol:", "key", "value", "exclusions", "sorted", "asArray", "allButFirst", "symbolPrintString", "space"]
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "exclusions",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@exclusions"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exclusions\x0a\x09^ exclusions",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TraitTransformation);

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
($globals.TraitTransformation.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@aliases"]=$globals.HashedCollection._newFromPairs_([]);
$self["@exclusions"]=$recv($globals.Set)._new();
$self["@trait"]=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TraitTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09aliases := #{}.\x0a\x09exclusions := Set new.\x0a\x09trait := nil",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "postCopy",
protocol: "copying",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@aliases"]=$recv($self["@aliases"])._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copy"]=1;
//>>excludeEnd("ctx");
$self["@exclusions"]=$recv($self["@exclusions"])._copy();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"postCopy",{},$globals.TraitTransformation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "postCopy\x0a\x09aliases := aliases copy.\x0a\x09exclusions := exclusions copy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy"]
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "trait",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@trait"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trait\x0a\x09^ trait",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TraitTransformation);

$core.addMethod(
$core.method({
selector: "trait:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@trait"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "trait: anObject\x0a\x09trait := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TraitTransformation);


$core.addMethod(
$core.method({
selector: "fromJSON:",
protocol: "instance creation",
fn: function (aJSObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.TraitTransformation.a$cls.superclass||$boot.nilAsClass).fn.prototype._new.apply($self, []));
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
}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{aJSObject:aJSObject},$globals.TraitTransformation.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "fromJSON: aJSObject\x0a\x09^ super new\x0a\x09\x09trait: (aJSObject at: #trait);\x0a\x09\x09addAliases: (Smalltalk readJSObject: (aJSObject at: #aliases ifAbsent: [#{}])) associations;\x0a\x09\x09addExclusions: (aJSObject at: #exclusions ifAbsent: [#()]);\x0a\x09\x09yourself",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["trait:", "new", "at:", "addAliases:", "associations", "readJSObject:", "at:ifAbsent:", "addExclusions:", "yourself"]
}),
$globals.TraitTransformation.a$cls);

$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
fn: function (aTrait){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.TraitTransformation.a$cls.superclass||$boot.nilAsClass).fn.prototype._new.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($1)._trait_(aTrait);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aTrait:aTrait},$globals.TraitTransformation.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTrait"],
source: "on: aTrait\x0a\x09^ super new trait: aTrait; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trait:", "new", "yourself"]
}),
$globals.TraitTransformation.a$cls);

$core.setTraitComposition([{trait: $globals.TBehaviorDefaults}, {trait: $globals.TBehaviorProvider}], $globals.Behavior);
$core.setTraitComposition([{trait: $globals.TMasterBehavior}, {trait: $globals.TSubclassable}], $globals.Class);
$core.setTraitComposition([{trait: $globals.TBehaviorDefaults}, {trait: $globals.TBehaviorProvider}, {trait: $globals.TMasterBehavior}], $globals.Trait);

$core.addMethod(
$core.method({
selector: "asTraitComposition",
protocol: "*Kernel-Classes",
fn: function (){
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
}, function($ctx1) {$ctx1.fill(self,"asTraitComposition",{},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTraitComposition\x0a\x09\x22not implemented yet, noop atm\x22\x0a\x09^ self collect: [ :each | each asTraitTransformation ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "asTraitTransformation"]
}),
$globals.Array);

});