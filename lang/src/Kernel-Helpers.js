define(["amber/boot", "require"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Kernel-Helpers");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

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
return $self._subclass_slots_package_(aString,[],nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:",{aString:aString},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "subclass: aString \x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString slots: #() package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:slots:package:"]
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
return $self._subclass_slots_package_(aString,$self._slotsFromInstanceVariablesString_(aString2),aString3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString slots: (self slotsFromInstanceVariablesString: aString2) package: aString3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:slots:package:", "slotsFromInstanceVariablesString:"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:slots:",
protocol: "class creation",
fn: function (aString,aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclass_slots_package_(aString,aCollection,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:slots:",{aString:aString,aCollection:aCollection},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCollection"],
source: "subclass: aString slots: aCollection\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString slots: aCollection package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:slots:package:"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:slots:classVariables:package:",
protocol: "class creation",
fn: function (aString,aCollection,anObject,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.ClassBuilder)._new())._superclass_subclass_slots_package_(self,aString,aCollection,anotherString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:slots:classVariables:package:",{aString:aString,aCollection:aCollection,anObject:anObject,anotherString:anotherString},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCollection", "anObject", "anotherString"],
source: "subclass: aString slots: aCollection classVariables: anObject package: anotherString\x0a\x09\x22Kept for file-in compatibility. ignores class variables.\x22\x0a\x09^ ClassBuilder new\x0a\x09\x09superclass: self subclass: aString slots: aCollection package: anotherString",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["superclass:subclass:slots:package:", "new"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:slots:classVariables:poolDictionaries:package:",
protocol: "class creation",
fn: function (aString,aCollection,anObject,anotherObject,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.ClassBuilder)._new())._superclass_subclass_slots_package_(self,aString,aCollection,anotherString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:slots:classVariables:poolDictionaries:package:",{aString:aString,aCollection:aCollection,anObject:anObject,anotherObject:anotherObject,anotherString:anotherString},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCollection", "anObject", "anotherObject", "anotherString"],
source: "subclass: aString slots: aCollection classVariables: anObject poolDictionaries: anotherObject package: anotherString\x0a\x09\x22Kept for file-in compatibility. ignores class variables and pools.\x22\x0a\x09^ ClassBuilder new\x0a\x09\x09superclass: self subclass: aString slots: aCollection package: anotherString",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["superclass:subclass:slots:package:", "new"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:slots:package:",
protocol: "class creation",
fn: function (aString,aCollection,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.ClassBuilder)._new())._superclass_subclass_slots_package_(self,aString,aCollection,anotherString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:slots:package:",{aString:aString,aCollection:aCollection,anotherString:anotherString},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aCollection", "anotherString"],
source: "subclass: aString slots: aCollection package: anotherString\x0a\x09^ ClassBuilder new\x0a\x09\x09superclass: self subclass: aString slots: aCollection package: anotherString",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["superclass:subclass:slots:package:", "new"]
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
return $self._subclass_uses_slots_package_(aString,aTraitCompositionDescription,[],nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:uses:",{aString:aString,aTraitCompositionDescription:aTraitCompositionDescription},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aTraitCompositionDescription"],
source: "subclass: aString uses: aTraitCompositionDescription \x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString uses: aTraitCompositionDescription slots: #() package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:uses:slots:package:"]
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclass_uses_slots_package_(aString,aTraitCompositionDescription,$self._slotsFromInstanceVariablesString_(aString2),aString3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:uses:instanceVariableNames:package:",{aString:aString,aTraitCompositionDescription:aTraitCompositionDescription,aString2:aString2,aString3:aString3},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aTraitCompositionDescription", "aString2", "aString3"],
source: "subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString uses: aTraitCompositionDescription slots: (self slotsFromInstanceVariablesString: aString2) package: aString3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:uses:slots:package:", "slotsFromInstanceVariablesString:"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:uses:slots:",
protocol: "class creation",
fn: function (aString,aTraitCompositionDescription,aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._subclass_uses_slots_package_(aString,aTraitCompositionDescription,aCollection,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:uses:slots:",{aString:aString,aTraitCompositionDescription:aTraitCompositionDescription,aCollection:aCollection},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aTraitCompositionDescription", "aCollection"],
source: "subclass: aString uses: aTraitCompositionDescription slots: aCollection\x0a\x09\x22Kept for file-in compatibility.\x22\x0a\x09^ self subclass: aString uses: aTraitCompositionDescription slots: aCollection package: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:uses:slots:package:"]
}),
$globals.TSubclassable);

$core.addMethod(
$core.method({
selector: "subclass:uses:slots:package:",
protocol: "class creation",
fn: function (aString,aTraitCompositionDescription,aCollection,aString3){
var self=this,$self=this;
var cls;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
cls=$self._subclass_slots_package_(aString,aCollection,aString3);
$recv(cls)._setTraitComposition_($recv(aTraitCompositionDescription)._asTraitComposition());
return cls;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subclass:uses:slots:package:",{aString:aString,aTraitCompositionDescription:aTraitCompositionDescription,aCollection:aCollection,aString3:aString3,cls:cls},$globals.TSubclassable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aTraitCompositionDescription", "aCollection", "aString3"],
source: "subclass: aString uses: aTraitCompositionDescription slots: aCollection package: aString3\x0a\x09| cls |\x0a\x09cls := self subclass: aString slots: aCollection package: aString3.\x0a\x09cls setTraitComposition: aTraitCompositionDescription asTraitComposition.\x0a\x09^ cls",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclass:slots:package:", "setTraitComposition:", "asTraitComposition"]
}),
$globals.TSubclassable);

});
