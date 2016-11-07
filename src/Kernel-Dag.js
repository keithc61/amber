define(["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
var $core=$boot.api,nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage('Kernel-Dag');
$core.packages["Kernel-Dag"].innerEval = function (expr) { return eval(expr); };
$core.packages["Kernel-Dag"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('AbstractDagVisitor', $globals.Object, [], 'Kernel-Dag');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AbstractDagVisitor.comment="I am base class of `DagNode` visitor.\x0a\x0aConcrete classes should implement `visitDagNode:`,\x0athey can reuse possible variants of implementation\x0aoffered directly: `visitDagNodeVariantSimple:`\x0aand `visitDagNodeVariantRedux:`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "visit:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aNode)._acceptDagVisitor_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode},$globals.AbstractDagVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visit: aNode\x0a\x09^ aNode acceptDagVisitor: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["acceptDagVisitor:"]
}),
$globals.AbstractDagVisitor);

$core.addMethod(
$core.method({
selector: "visitAll:",
protocol: 'visiting',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aCollection)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAll:",{aCollection:aCollection},$globals.AbstractDagVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "visitAll: aCollection\x0a\x09^ aCollection collect: [ :each | self visit: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "visit:"]
}),
$globals.AbstractDagVisitor);

$core.addMethod(
$core.method({
selector: "visitAllChildren:",
protocol: 'visiting',
fn: function (aDagNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitAll_($recv(aDagNode)._dagChildren());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAllChildren:",{aDagNode:aDagNode},$globals.AbstractDagVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDagNode"],
source: "visitAllChildren: aDagNode\x0a\x09^ self visitAll: aDagNode dagChildren",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitAll:", "dagChildren"]
}),
$globals.AbstractDagVisitor);

$core.addMethod(
$core.method({
selector: "visitDagNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDagNode:",{aNode:aNode},$globals.AbstractDagVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDagNode: aNode\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AbstractDagVisitor);

$core.addMethod(
$core.method({
selector: "visitDagNodeVariantRedux:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var newChildren,oldChildren;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$5;
var $early={};
try {
oldChildren=$recv(aNode)._dagChildren();
newChildren=self._visitAllChildren_(aNode);
$2=$recv(oldChildren)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$3=$recv(newChildren)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($3);
if($core.assert($1)){
$recv((1)._to_($recv(oldChildren)._size()))._detect_ifNone_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(oldChildren)._at_(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
return $recv($4).__tild_eq($recv(newChildren)._at_(i));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
throw $early=[aNode];

}));
}
$5=$recv(aNode)._copy();
$recv($5)._dagChildren_(newChildren);
return $recv($5)._yourself();
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDagNodeVariantRedux:",{aNode:aNode,newChildren:newChildren,oldChildren:oldChildren},$globals.AbstractDagVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDagNodeVariantRedux: aNode\x0a\x09\x22Immutable-guarded implementation of visitDagNode:.\x0a\x09Visits all children and checks if there were changes.\x0a\x09If not, returns aNode.\x0a\x09If yes, returns copy of aNode with new children.\x22\x0a\x0a\x09| newChildren oldChildren |\x0a\x09oldChildren := aNode dagChildren.\x0a\x09newChildren := self visitAllChildren: aNode.\x0a\x09oldChildren size = newChildren size ifTrue: [\x0a\x09\x09(1 to: oldChildren size) detect: [ :i |\x0a\x09\x09\x09(oldChildren at: i) ~= (newChildren at: i)\x0a\x09\x09] ifNone: [ \x22no change\x22 ^ aNode ] ].\x0a\x09^ aNode copy dagChildren: newChildren; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dagChildren", "visitAllChildren:", "ifTrue:", "=", "size", "detect:ifNone:", "to:", "~=", "at:", "dagChildren:", "copy", "yourself"]
}),
$globals.AbstractDagVisitor);

$core.addMethod(
$core.method({
selector: "visitDagNodeVariantSimple:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._visitAllChildren_(aNode);
return aNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDagNodeVariantSimple:",{aNode:aNode},$globals.AbstractDagVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDagNodeVariantSimple: aNode\x0a\x09\x22Simple implementation of visitDagNode:.\x0a\x09Visits children, then returns aNode\x22\x0a\x0a\x09self visitAllChildren: aNode.\x0a\x09^ aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitAllChildren:"]
}),
$globals.AbstractDagVisitor);



$core.addClass('PathDagVisitor', $globals.AbstractDagVisitor, ['path'], 'Kernel-Dag');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PathDagVisitor.comment="I am base class of `DagNode` visitor.\x0a\x0aI hold the path of ancestors up to actual node\x0ain `self path`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.PathDagVisitor.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@path"]=[];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PathDagVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09path := #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.PathDagVisitor);

$core.addMethod(
$core.method({
selector: "path",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@path"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "path\x0a\x09^ path",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PathDagVisitor);

$core.addMethod(
$core.method({
selector: "visit:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var oldPath,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=aNode;
oldPath=self["@path"];
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@path"]=$recv(self["@path"]).__comma([aNode]);
self["@path"];
result=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true,
//>>excludeEnd("ctx");
($globals.PathDagVisitor.superclass||$boot.nilAsClass).fn.prototype._visit_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
self["@path"]=oldPath;
return self["@path"];

}));
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode,oldPath:oldPath,result:result},$globals.PathDagVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visit: aNode\x0a\x09| oldPath result |\x0a\x09result := aNode.\x0a\x09oldPath := path.\x0a\x09[\x0a\x09\x09path := path, {aNode}.\x0a\x09\x09result := super visit: aNode\x0a\x09] ensure: [ path := oldPath ].\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ensure:", ",", "visit:"]
}),
$globals.PathDagVisitor);

$core.addMethod(
$core.method({
selector: "visitDagNodeVariantRedux:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var newNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
newNode=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.PathDagVisitor.superclass||$boot.nilAsClass).fn.prototype._visitDagNodeVariantRedux_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv(aNode).__eq_eq(newNode);
if(!$core.assert($1)){
$recv(self["@path"])._at_put_($recv(self["@path"])._size(),newNode);
}
return newNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDagNodeVariantRedux:",{aNode:aNode,newNode:newNode},$globals.PathDagVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDagNodeVariantRedux: aNode\x0a\x09| newNode |\x0a\x09newNode := super visitDagNodeVariantRedux: aNode.\x0a\x09aNode == newNode ifFalse: [ path at: path size put: newNode ].\x0a\x09^ newNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNodeVariantRedux:", "ifFalse:", "==", "at:put:", "size"]
}),
$globals.PathDagVisitor);



$core.addClass('DagNode', $globals.Object, [], 'Kernel-Dag');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DagNode.comment="I am the abstract root class of any directed acyclic graph.\x0a\x0aConcrete classes should implement `dagChildren` and `dagChildren:`\x0ato get / set direct successor nodes (aka child nodes / subnodes).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: 'visiting',
fn: function (aVisitor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitDagNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.DagNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitDagNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.DagNode);

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
}
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
