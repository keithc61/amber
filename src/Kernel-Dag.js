define(["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
var $core=$boot.api,nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage('Kernel-Dag');
$core.packages["Kernel-Dag"].innerEval = function (expr) { return eval(expr); };
$core.packages["Kernel-Dag"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('DagNode', $globals.Object, [], 'Kernel-Dag');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DagNode.comment="I am the abstract root class of any directed acyclic graph.\x0a\x0aConcrete classes should implement `dagChildren` and `dagChildren:`\x0ato get / set direct successor nodes (aka child nodes / subnodes).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "allDagChildren",
protocol: 'accessing',
fn: function (){
var self=this;
var allNodes;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=1;
//>>excludeEnd("ctx");
allNodes=$recv($1)._asSet();
$recv(self._dagChildren())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(allNodes)._addAll_($recv(each)._allDagChildren());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return allNodes;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allDagChildren",{allNodes:allNodes},$globals.DagNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allDagChildren\x0a\x09| allNodes |\x0a\x09\x0a\x09allNodes := self dagChildren asSet.\x0a\x09self dagChildren do: [ :each | \x0a\x09\x09allNodes addAll: each allDagChildren ].\x0a\x09\x0a\x09^ allNodes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asSet", "dagChildren", "do:", "addAll:", "allDagChildren"]
}),
$globals.DagNode);

$core.addMethod(
$core.method({
selector: "dagChildren",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren",{},$globals.DagNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChildren\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.DagNode);

$core.addMethod(
$core.method({
selector: "dagChildren:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren:",{aCollection:aCollection},$globals.DagNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "dagChildren: aCollection\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.DagNode);

$core.addMethod(
$core.method({
selector: "isDagNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDagNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DagNode);



$core.addClass('DagParentNode', $globals.DagNode, ['nodes'], 'Kernel-Dag');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DagParentNode.comment="I am `DagNode` that stores a collection of its children,\x0alazy initialized to empty array.\x0a\x0aI can `addDagChild:` to add a child.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addDagChild:",
protocol: 'accessing',
fn: function (aDagNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._dagChildren())._add_(aDagNode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addDagChild:",{aDagNode:aDagNode},$globals.DagParentNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDagNode"],
source: "addDagChild: aDagNode\x0a\x09self dagChildren add: aDagNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "dagChildren"]
}),
$globals.DagParentNode);

$core.addMethod(
$core.method({
selector: "dagChildren",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@nodes"];
if(($receiver = $1) == null || $receiver.isNil){
self["@nodes"]=$recv($globals.Array)._new();
return self["@nodes"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren",{},$globals.DagParentNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChildren\x0a\x09^ nodes ifNil: [ nodes := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.DagParentNode);

$core.addMethod(
$core.method({
selector: "dagChildren:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@nodes"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "dagChildren: aCollection\x0a\x09nodes := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DagParentNode);



$core.addClass('DagSink', $globals.DagNode, ['nodes'], 'Kernel-Dag');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DagSink.comment="I am `DagNode` with no direct successors.\x0a\x0aSending `dagChildren:` with empty collection is legal.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "dagChildren",
protocol: 'accessing',
fn: function (){
var self=this;
return [];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChildren\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DagSink);

$core.addMethod(
$core.method({
selector: "dagChildren:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCollection)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("A DagSink cannot have children.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren:",{aCollection:aCollection},$globals.DagSink)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "dagChildren: aCollection\x0a\x09aCollection ifNotEmpty: [ self error: 'A DagSink cannot have children.' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "error:"]
}),
$globals.DagSink);


$core.addMethod(
$core.method({
selector: "isDagNode",
protocol: '*Kernel-Dag',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDagNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

});
