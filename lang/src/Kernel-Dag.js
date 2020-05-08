define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Kernel-Dag");
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("AbstractDagVisitor", $globals.Object, [], "Kernel-Dag");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AbstractDagVisitor.comment="I am base class of `DagNode` visitor.\x0a\x0aConcrete classes should implement `visitDagNode:`,\x0athey can reuse possible variants of implementation\x0aoffered directly: `visitDagNodeVariantSimple:`\x0aand `visitDagNodeVariantRedux:`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject\x0a\x09^ self visit: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visit:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visit_(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractDagVisitor);

$core.addMethod(
$core.method({
selector: "visit:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visit: aNode\x0a\x09^ aNode acceptDagVisitor: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["acceptDagVisitor:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aNode)._acceptDagVisitor_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractDagVisitor);

$core.addMethod(
$core.method({
selector: "visitAll:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "visitAll: aCollection\x0a\x09^ aCollection collect: [ :each | self visit: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "visit:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aCollection)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._visit_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAll:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractDagVisitor);

$core.addMethod(
$core.method({
selector: "visitAllChildren:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDagNode"],
source: "visitAllChildren: aDagNode\x0a\x09^ self visitAll: aDagNode dagChildren",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitAll:", "dagChildren"]
}, function ($methodClass){ return function (aDagNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitAll_($recv(aDagNode)._dagChildren());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAllChildren:",{aDagNode:aDagNode})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractDagVisitor);

$core.addMethod(
$core.method({
selector: "visitDagNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDagNode: aNode\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDagNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractDagVisitor);

$core.addMethod(
$core.method({
selector: "visitDagNodeVariantRedux:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDagNodeVariantRedux: aNode\x0a\x09\x22Immutable-guarded implementation of visitDagNode:.\x0a\x09Visits all children and checks if there were changes.\x0a\x09If not, returns aNode.\x0a\x09If yes, returns copy of aNode with new children.\x22\x0a\x0a\x09| newChildren oldChildren |\x0a\x09oldChildren := aNode dagChildren.\x0a\x09newChildren := self visitAllChildren: aNode.\x0a\x09oldChildren = newChildren\x0a\x09\x09ifTrue: [ ^ aNode ]\x0a\x09\x09ifFalse: [ ^ aNode copy dagChildren: newChildren; yourself ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["dagChildren", "visitAllChildren:", "ifTrue:ifFalse:", "=", "dagChildren:", "copy", "yourself"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var newChildren,oldChildren;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
oldChildren=$recv(aNode)._dagChildren();
newChildren=$self._visitAllChildren_(aNode);
if($core.assert($recv(oldChildren).__eq(newChildren))){
return aNode;
} else {
$1=$recv(aNode)._copy();
$recv($1)._dagChildren_(newChildren);
return $recv($1)._yourself();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDagNodeVariantRedux:",{aNode:aNode,newChildren:newChildren,oldChildren:oldChildren})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractDagVisitor);

$core.addMethod(
$core.method({
selector: "visitDagNodeVariantSimple:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDagNodeVariantSimple: aNode\x0a\x09\x22Simple implementation of visitDagNode:.\x0a\x09Visits children, then returns aNode\x22\x0a\x0a\x09self visitAllChildren: aNode.\x0a\x09^ aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitAllChildren:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._visitAllChildren_(aNode);
return aNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDagNodeVariantSimple:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractDagVisitor);



$core.addClass("PathDagVisitor", $globals.AbstractDagVisitor, ["path"], "Kernel-Dag");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PathDagVisitor.comment="I am base class of `DagNode` visitor.\x0a\x0aI hold the path of ancestors up to actual node\x0ain `self path`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09path := #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize"]
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
$self.path=[];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PathDagVisitor);

$core.addMethod(
$core.method({
selector: "path",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "path\x0a\x09^ path",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.path;

}; }),
$globals.PathDagVisitor);

$core.addMethod(
$core.method({
selector: "visit:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visit: aNode\x0a\x09| oldPath result |\x0a\x09result := aNode.\x0a\x09oldPath := path.\x0a\x09[\x0a\x09\x09path := path, {aNode}.\x0a\x09\x09result := super visit: aNode\x0a\x09] ensure: [ path := oldPath ].\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ensure:", ",", "visit:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var oldPath,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=aNode;
oldPath=$self.path;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self.path=$recv($self.path).__comma([aNode]);
result=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visit_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.supercall = false
//>>excludeEnd("ctx");
][0];
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
$self.path=oldPath;
return $self.path;

}));
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode,oldPath:oldPath,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.PathDagVisitor);

$core.addMethod(
$core.method({
selector: "visitDagNodeVariantRedux:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDagNodeVariantRedux: aNode\x0a\x09| newNode |\x0a\x09newNode := super visitDagNodeVariantRedux: aNode.\x0a\x09aNode == newNode ifFalse: [ path at: path size put: newNode ].\x0a\x09^ newNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNodeVariantRedux:", "ifFalse:", "==", "at:put:", "size"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var newNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newNode=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitDagNodeVariantRedux_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
if(!$core.assert($recv(aNode).__eq_eq(newNode))){
$recv($self.path)._at_put_($recv($self.path)._size(),newNode);
}
return newNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDagNodeVariantRedux:",{aNode:aNode,newNode:newNode})});
//>>excludeEnd("ctx");
}; }),
$globals.PathDagVisitor);



$core.addClass("DagNode", $globals.Object, [], "Kernel-Dag");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DagNode.comment="I am the abstract root class of any directed acyclic graph.\x0a\x0aConcrete classes should implement `dagChildren` and `dagChildren:`\x0ato get / set direct successor nodes (aka child nodes / subnodes).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitDagNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitDagNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.DagNode);

$core.addMethod(
$core.method({
selector: "allDagChildren",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allDagChildren\x0a\x09| allNodes |\x0a\x09\x0a\x09allNodes := self dagChildren asSet.\x0a\x09self dagChildren do: [ :each | \x0a\x09\x09allNodes addAll: each allDagChildren ].\x0a\x09\x0a\x09^ allNodes",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSet", "dagChildren", "do:", "addAll:", "allDagChildren"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var allNodes;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
allNodes=$recv([$self._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._asSet();
$recv($self._dagChildren())._do_((function(each){
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
}, function($ctx1) {$ctx1.fill(self,"allDagChildren",{allNodes:allNodes})});
//>>excludeEnd("ctx");
}; }),
$globals.DagNode);

$core.addMethod(
$core.method({
selector: "dagChildren",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChildren\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"dagChildren",{})});
//>>excludeEnd("ctx");
}; }),
$globals.DagNode);

$core.addMethod(
$core.method({
selector: "dagChildren:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "dagChildren: aCollection\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.DagNode);

$core.addMethod(
$core.method({
selector: "isDagNode",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDagNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.DagNode);



$core.addClass("DagParentNode", $globals.DagNode, ["nodes"], "Kernel-Dag");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DagParentNode.comment="I am `DagNode` that stores a collection of its children,\x0alazy initialized to empty array.\x0a\x0aI can `addDagChild:` to add a child.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addDagChild:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDagNode"],
source: "addDagChild: aDagNode\x0a\x09self dagChildren add: aDagNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "dagChildren"]
}, function ($methodClass){ return function (aDagNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._dagChildren())._add_(aDagNode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addDagChild:",{aDagNode:aDagNode})});
//>>excludeEnd("ctx");
}; }),
$globals.DagParentNode);

$core.addMethod(
$core.method({
selector: "dagChildren",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChildren\x0a\x09^ nodes ifNil: [ nodes := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.nodes;
if($1 == null || $1.a$nil){
$self.nodes=$recv($globals.Array)._new();
return $self.nodes;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren",{})});
//>>excludeEnd("ctx");
}; }),
$globals.DagParentNode);

$core.addMethod(
$core.method({
selector: "dagChildren:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "dagChildren: aCollection\x0a\x09nodes := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
$self.nodes=aCollection;
return self;

}; }),
$globals.DagParentNode);



$core.addClass("DagSink", $globals.DagNode, [], "Kernel-Dag");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DagSink.comment="I am `DagNode` with no direct successors.\x0a\x0aSending `dagChildren:` with empty collection is legal.";
//>>excludeEnd("ide");


$core.addTrait("TDagSink", "Kernel-Dag");
$core.addMethod(
$core.method({
selector: "dagChildren",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChildren\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [];

}; }),
$globals.TDagSink);

$core.addMethod(
$core.method({
selector: "dagChildren:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "dagChildren: aCollection\x0a\x09aCollection ifNotEmpty: [ self error: 'A DagSink cannot have children.' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotEmpty:", "error:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCollection)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._error_("A DagSink cannot have children.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.TDagSink);


$core.addTrait("TDerivedDagChildren", "Kernel-Dag");
$core.addMethod(
$core.method({
selector: "addDagChild:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDagNode"],
source: "addDagChild: aDagNode\x0a\x09self error: 'Cannot add child for a TDerivedChildren.'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (aDagNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("Cannot add child for a TDerivedChildren.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addDagChild:",{aDagNode:aDagNode})});
//>>excludeEnd("ctx");
}; }),
$globals.TDerivedDagChildren);

$core.addMethod(
$core.method({
selector: "dagChildren",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChildren\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"dagChildren",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TDerivedDagChildren);

$core.addMethod(
$core.method({
selector: "dagChildren:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "dagChildren: aCollection\x0a\x09self error: 'Cannot set children of a TDerivedChildren.'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("Cannot set children of a TDerivedChildren.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.TDerivedDagChildren);


$core.addTrait("TSingleDagChild", "Kernel-Dag");
$core.addMethod(
$core.method({
selector: "dagChild",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChild\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"dagChild",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TSingleDagChild);

$core.addMethod(
$core.method({
selector: "dagChildren",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChildren\x0a\x09^ { self dagChild }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["dagChild"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$self._dagChild()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TSingleDagChild);

$core.setTraitComposition([{trait: $globals.TDerivedDagChildren}], $globals.TDagSink);
$core.setTraitComposition([{trait: $globals.TDerivedDagChildren}], $globals.TSingleDagChild);
$core.setTraitComposition([{trait: $globals.TDagSink}], $globals.DagSink);

$core.addMethod(
$core.method({
selector: "isDagNode",
protocol: "*Kernel-Dag",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDagNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.Object);

});
