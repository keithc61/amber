define(["amber/boot", "require"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Kernel-Helpers");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addTrait("TSubclassable", "Kernel-Helpers");
$core.addMethod(
$core.method({
selector: "subclass:",
protocol: "class creation",
fn: function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclass_instanceVariableNames_package_(aString,"",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:",{aString:aString},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "subclass: aString \x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString instanceVariableNames: '' package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:",
protocol: "class creation",
fn: function (aString,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclass_instanceVariableNames_package_(aString,anotherString,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:",{aString:aString,anotherString:anotherString},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "subclass: aString instanceVariableNames: anotherString\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString instanceVariableNames: anotherString package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:category:",
protocol: "class creation",
fn: function (aString,aString2,aString3){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:category:",{aString:aString,aString2:aString2,aString3:aString3},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 category: aString3\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString instanceVariableNames: aString2 package: aString3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",
protocol: "class creation",
fn: function (aString,aString2,classVars,pools,aString3){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:",{aString:aString,aString2:aString2,classVars:classVars,pools:pools,aString3:aString3},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "classVars", "pools", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3\x0a\x09\x22Kept for file-in compatibility. ignores class variables and pools.\x22\x0a\x09^ self subclass: aString instanceVariableNames: aString2 package: aString3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:instanceVariableNames:package:",
protocol: "class creation",
fn: function (aString,aString2,aString3){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.ClassBuilder)._new())._superclass_subclass_instanceVariableNames_package_(self,$recv(aString)._asString(),aString2,aString3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09^ ClassBuilder new\x0a\x09\x09superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["superclass:subclass:instanceVariableNames:package:", "new", "asString"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:uses:",
protocol: "class creation",
fn: function (aString,aTraitCompositionDescription){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclass_uses_instanceVariableNames_package_(aString,aTraitCompositionDescription,"",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:uses:",{aString:aString,aTraitCompositionDescription:aTraitCompositionDescription},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aTraitCompositionDescription"],
source: "subclass: aString uses: aTraitCompositionDescription \x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: '' package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:uses:instanceVariableNames:package:"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:uses:instanceVariableNames:",
protocol: "class creation",
fn: function (aString,aTraitCompositionDescription,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclass_uses_instanceVariableNames_package_(aString,aTraitCompositionDescription,anotherString,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:uses:instanceVariableNames:",{aString:aString,aTraitCompositionDescription:aTraitCompositionDescription,anotherString:anotherString},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aTraitCompositionDescription", "anotherString"],
source: "subclass: aString uses: aTraitCompositionDescription instanceVariableNames: anotherString\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: anotherString package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:uses:instanceVariableNames:package:"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:uses:instanceVariableNames:category:",
protocol: "class creation",
fn: function (aString,aTraitCompositionDescription,aString2,aString3){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclass_uses_instanceVariableNames_package_(aString,aTraitCompositionDescription,aString2,aString3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:uses:instanceVariableNames:category:",{aString:aString,aTraitCompositionDescription:aTraitCompositionDescription,aString2:aString2,aString3:aString3},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aTraitCompositionDescription", "aString2", "aString3"],
source: "subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 category: aString3\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:uses:instanceVariableNames:package:"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:uses:instanceVariableNames:classVariableNames:poolDictionaries:category:",
protocol: "class creation",
fn: function (aString,aTraitCompositionDescription,aString2,classVars,pools,aString3){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclass_uses_instanceVariableNames_package_(aString,aTraitCompositionDescription,aString2,aString3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:uses:instanceVariableNames:classVariableNames:poolDictionaries:category:",{aString:aString,aTraitCompositionDescription:aTraitCompositionDescription,aString2:aString2,classVars:classVars,pools:pools,aString3:aString3},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aTraitCompositionDescription", "aString2", "classVars", "pools", "aString3"],
source: "subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3\x0a\x09\x22Kept for file-in compatibility. ignores class variables and pools.\x22\x0a\x09^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:uses:instanceVariableNames:package:"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:uses:instanceVariableNames:package:",
protocol: "class creation",
fn: function (aString,aTraitCompositionDescription,aString2,aString3){
var self=this,$self=this;
var cls;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
cls=$self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
$recv(cls)._setTraitComposition_($recv(aTraitCompositionDescription)._asTraitComposition());
return cls;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:uses:instanceVariableNames:package:",{aString:aString,aTraitCompositionDescription:aTraitCompositionDescription,aString2:aString2,aString3:aString3,cls:cls},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aTraitCompositionDescription", "aString2", "aString3"],
source: "subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3\x0a\x09| cls |\x0a\x09cls := self subclass: aString instanceVariableNames: aString2 package: aString3.\x0a\x09cls setTraitComposition: aTraitCompositionDescription asTraitComposition.\x0a\x09^ cls",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:", "setTraitComposition:", "asTraitComposition"]
}),
$globals.TSubclassable);

});
