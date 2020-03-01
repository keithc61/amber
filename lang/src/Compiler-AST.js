define(["amber/boot", "require", "amber/core/Kernel-Dag", "amber/core/Kernel-Exceptions", "amber/core/Kernel-Helpers", "amber/core/Kernel-Methods", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Compiler-AST");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("ASTNode", $globals.DagParentNode, ["parent", "position", "source", "shouldBeAliased"], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ASTNode.comment="I am the abstract root class of the abstract syntax tree.\x0a\x0aConcrete classes should implement `#accept:` to allow visiting.\x0a\x0a`position` holds a point containing line and column number of the symbol location in the original source file.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "inPosition:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "inPosition: aPoint\x0a\x09^ (self positionStart <= aPoint and: [\x0a\x09\x09self positionEnd >= aPoint ])",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "<=", "positionStart", ">=", "positionEnd"]
}, function ($methodClass){ return function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._positionStart()).__lt_eq(aPoint))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._positionEnd()).__gt_eq(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inPosition:",{aPoint:aPoint})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isCascadeNode",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCascadeNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.ASTNode);

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
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isNavigationNode",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNavigationNode\x0a\x09\x22Answer true if the node can be navigated to\x22\x0a\x09\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isReturnNode",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isReturnNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isSequenceNode",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSequenceNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isSuper",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSuper\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "location:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLocation"],
source: "location: aLocation\x0a\x09self position: aLocation start line @ aLocation start column",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["position:", "@", "line", "start", "column"]
}, function ($methodClass){ return function (aLocation){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._position_($recv($recv([$recv(aLocation)._start()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["start"]=1
//>>excludeEnd("ctx");
][0])._line()).__at($recv($recv(aLocation)._start())._column()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"location:",{aLocation:aLocation})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "method",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ self parent ifNotNil: [ :node | node method ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "parent", "method"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self._parent();
if(($receiver = $1) == null || $receiver.a$nil){
return $1;
} else {
var node;
node=$receiver;
return $recv(node)._method();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "navigationNodeAt:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "aBlock"],
source: "navigationNodeAt: aPoint ifAbsent: aBlock\x0a\x09\x22Answer the navigation node in the receiver's tree at aPoint \x0a\x09or nil if no navigation node was found.\x0a\x09\x0a\x09See `node >> isNaviationNode`\x22\x0a\x09\x0a\x09| children |\x0a\x09\x0a\x09children := self allDagChildren select: [ :each | \x0a\x09\x09each isNavigationNode and: [ each inPosition: aPoint ] ].\x0a\x09\x0a\x09children ifEmpty: [ ^ aBlock value ].\x0a\x09\x0a\x09^ (children asArray sort: [ :a :b | \x0a\x09\x09(a positionStart dist: aPoint) <= \x0a\x09\x09(b positionStart dist: aPoint) ]) first",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "allDagChildren", "and:", "isNavigationNode", "inPosition:", "ifEmpty:", "value", "first", "sort:", "asArray", "<=", "dist:", "positionStart"]
}, function ($methodClass){ return function (aPoint,aBlock){
var self=this,$self=this;
var children;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
children=$recv($self._allDagChildren())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._isNavigationNode())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each)._inPosition_(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(children)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[$recv(aBlock)._value()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return $recv($recv($recv(children)._asArray())._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$recv([$recv(a)._positionStart()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["positionStart"]=1
//>>excludeEnd("ctx");
][0])._dist_(aPoint)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["dist:"]=1
//>>excludeEnd("ctx");
][0]).__lt_eq($recv($recv(b)._positionStart())._dist_(aPoint));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,4)});
//>>excludeEnd("ctx");
})))._first();
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigationNodeAt:ifAbsent:",{aPoint:aPoint,aBlock:aBlock,children:children})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "parent",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parent\x0a\x09^ parent",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.parent;

}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "parent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "parent: aNode\x0a\x09parent := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
$self.parent=aNode;
return self;

}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "position",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "position\x0a\x09\x22answer the line and column of the receiver in the source code\x22\x0a\x09\x0a\x09^ position ifNil: [ \x0a\x09\x09self parent ifNotNil: [ :node | node position ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "ifNotNil:", "parent", "position"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$self.position;
if(($receiver = $1) == null || $receiver.a$nil){
$2=$self._parent();
if(($receiver = $2) == null || $receiver.a$nil){
return $2;
} else {
var node;
node=$receiver;
return $recv(node)._position();
}
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"position",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "position:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPosition"],
source: "position: aPosition\x0a\x09position := aPosition",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aPosition){
var self=this,$self=this;
$self.position=aPosition;
return self;

}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "positionEnd",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "positionEnd\x0a\x09^ self positionStart + ((self source lines size - 1) @ (self source lines last size - 1))",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["+", "positionStart", "@", "-", "size", "lines", "source", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._positionStart()).__plus($recv([$recv([$recv([$recv([$self._source()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["source"]=1
//>>excludeEnd("ctx");
][0])._lines()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lines"]=1
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__minus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0]).__at($recv($recv($recv($recv($self._source())._lines())._last())._size()).__minus((1))));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positionEnd",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "positionStart",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "positionStart\x0a\x09^ self position",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["position"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positionStart",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "shouldBeAliased",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldBeAliased\x0a\x09^ shouldBeAliased ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.shouldBeAliased;
if(($receiver = $1) == null || $receiver.a$nil){
return false;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "shouldBeAliased:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "shouldBeAliased: aBoolean\x0a\x09shouldBeAliased := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
$self.shouldBeAliased=aBoolean;
return self;

}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "size",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ self source size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["size", "source"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._source())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "source",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.source;
if(($receiver = $1) == null || $receiver.a$nil){
return "";
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "source:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.source=aString;
return self;

}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "withTail:",
protocol: "building",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "withTail: aCollection\x0a\x09^ aCollection inject: self into: [\x0a\x09\x09:receiver :send | SendNode new\x0a\x09\x09\x09position: send position;\x0a\x09\x09\x09source: send source;\x0a\x09\x09\x09receiver: receiver;\x0a\x09\x09\x09selector: send selector;\x0a\x09\x09\x09arguments: send arguments;\x0a\x09\x09\x09yourself ]",
referencedClasses: ["SendNode"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inject:into:", "position:", "new", "position", "source:", "source", "receiver:", "selector:", "selector", "arguments:", "arguments", "yourself"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv(aCollection)._inject_into_(self,(function(receiver,send){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($globals.SendNode)._new();
$recv($1)._position_($recv(send)._position());
$recv($1)._source_($recv(send)._source());
$recv($1)._receiver_(receiver);
$recv($1)._selector_($recv(send)._selector());
$recv($1)._arguments_($recv(send)._arguments());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({receiver:receiver,send:send},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withTail:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);



$core.addClass("AssignmentNode", $globals.ASTNode, ["left", "right"], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AssignmentNode.comment="I represent an assignment node.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitAssignmentNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitAssignmentNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitAssignmentNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "dagChildren",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChildren\x0a\x09^ Array with: self left with: self right",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["with:with:", "left", "right"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Array)._with_with_($self._left(),$self._right());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "left",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "left\x0a\x09^ left",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.left;

}; }),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "left:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "left: aNode\x0a\x09left := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
$self.left=aNode;
return self;

}; }),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "right",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "right\x0a\x09^ right",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.right;

}; }),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "right:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "right: aNode\x0a\x09right := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
$self.right=aNode;
return self;

}; }),
$globals.AssignmentNode);



$core.addClass("BlockNode", $globals.ASTNode, ["parameters", "scope"], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BlockNode.comment="I represent an block closure node.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitBlockNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitBlockNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitBlockNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "parameters",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parameters\x0a\x09^ parameters ifNil: [ parameters := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.parameters;
if(($receiver = $1) == null || $receiver.a$nil){
$self.parameters=$recv($globals.Array)._new();
return $self.parameters;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parameters",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "parameters:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "parameters: aCollection\x0a\x09parameters := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
$self.parameters=aCollection;
return self;

}; }),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "scope",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.scope;

}; }),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "scope:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aLexicalScope){
var self=this,$self=this;
$self.scope=aLexicalScope;
return self;

}; }),
$globals.BlockNode);



$core.addClass("CascadeNode", $globals.ASTNode, ["receiver"], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CascadeNode.comment="I represent an cascade node.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitCascadeNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitCascadeNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitCascadeNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.CascadeNode);

$core.addMethod(
$core.method({
selector: "isCascadeNode",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCascadeNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.CascadeNode);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ receiver",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.receiver;

}; }),
$globals.CascadeNode);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
$self.receiver=aNode;
return self;

}; }),
$globals.CascadeNode);



$core.addClass("DynamicArrayNode", $globals.ASTNode, [], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DynamicArrayNode.comment="I represent an dynamic array node.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitDynamicArrayNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDynamicArrayNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitDynamicArrayNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.DynamicArrayNode);



$core.addClass("DynamicDictionaryNode", $globals.ASTNode, [], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DynamicDictionaryNode.comment="I represent an dynamic dictionary node.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitDynamicDictionaryNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDynamicDictionaryNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitDynamicDictionaryNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.DynamicDictionaryNode);



$core.addClass("JSStatementNode", $globals.ASTNode, [], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.JSStatementNode.comment="I represent an JavaScript statement node.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitJSStatementNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitJSStatementNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitJSStatementNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStatementNode);



$core.addClass("MethodNode", $globals.ASTNode, ["selector", "arguments", "pragmas", "scope", "classReferences", "sendIndexes"], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodNode.comment="I represent an method node.\x0a\x0aA method node must be the root and only method node of a valid AST.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitMethodNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitMethodNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitMethodNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "arguments",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.arguments;
if(($receiver = $1) == null || $receiver.a$nil){
return [];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "arguments:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
$self.arguments=aCollection;
return self;

}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "classReferences",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classReferences\x0a\x09^ classReferences",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.classReferences;

}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "classReferences:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "classReferences: aCollection\x0a\x09classReferences := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
$self.classReferences=aCollection;
return self;

}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "messageSends",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSends\x0a\x09^ self sendIndexes keys",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["keys", "sendIndexes"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._sendIndexes())._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSends",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "method",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "pragmas",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pragmas\x0a\x09^ pragmas ifNil: [ #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.pragmas;
if(($receiver = $1) == null || $receiver.a$nil){
return [];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pragmas",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "pragmas:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "pragmas: aCollection\x0a\x09pragmas := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
$self.pragmas=aCollection;
return self;

}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "scope",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.scope;

}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "scope:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethodScope"],
source: "scope: aMethodScope\x0a\x09scope := aMethodScope",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aMethodScope){
var self=this,$self=this;
$self.scope=aMethodScope;
return self;

}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "selector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.selector;

}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.selector=aString;
return self;

}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "sendIndexes",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendIndexes\x0a\x09^ sendIndexes",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.sendIndexes;

}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "sendIndexes:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "sendIndexes: aDictionary\x0a\x09sendIndexes := aDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aDictionary){
var self=this,$self=this;
$self.sendIndexes=aDictionary;
return self;

}; }),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "sequenceNode",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sequenceNode\x0a\x09^ self dagChildren detect: [ :one | one isSequenceNode ] ifNone: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["detect:ifNone:", "dagChildren", "isSequenceNode"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dagChildren())._detect_ifNone_((function(one){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(one)._isSequenceNode();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({one:one},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sequenceNode",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodNode);



$core.addClass("ReturnNode", $globals.ASTNode, ["scope"], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ReturnNode.comment="I represent an return node. At the AST level, there is not difference between a local return or non-local return.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitReturnNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitReturnNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitReturnNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.ReturnNode);

$core.addMethod(
$core.method({
selector: "isReturnNode",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isReturnNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.ReturnNode);

$core.addMethod(
$core.method({
selector: "nonLocalReturn",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nonLocalReturn\x0a\x09^ self scope isMethodScope not",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["not", "isMethodScope", "scope"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._scope())._isMethodScope())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturn",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ReturnNode);

$core.addMethod(
$core.method({
selector: "scope",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.scope;

}; }),
$globals.ReturnNode);

$core.addMethod(
$core.method({
selector: "scope:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aLexicalScope){
var self=this,$self=this;
$self.scope=aLexicalScope;
return self;

}; }),
$globals.ReturnNode);



$core.addClass("SendNode", $globals.ASTNode, ["selector", "arguments", "receiver", "index"], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SendNode.comment="I represent an message send node.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitSendNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitSendNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitSendNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "arguments",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ arguments := #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.arguments;
if(($receiver = $1) == null || $receiver.a$nil){
$self.arguments=[];
return $self.arguments;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "arguments:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
$self.arguments=aCollection;
return self;

}; }),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "dagChildren",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChildren\x0a\x09self receiver ifNil: [ ^ self arguments copy ].\x0a\x09\x0a\x09^ self arguments copyWithFirst: self receiver",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "receiver", "copy", "arguments", "copyWithFirst:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=[$self._receiver()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["receiver"]=1
//>>excludeEnd("ctx");
][0];
if(($receiver = $1) == null || $receiver.a$nil){
return $recv([$self._arguments()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["arguments"]=1
//>>excludeEnd("ctx");
][0])._copy();
} else {
$1;
}
return $recv($self._arguments())._copyWithFirst_($self._receiver());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "index",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "index\x0a\x09^ index",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.index;

}; }),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "index:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
$self.index=anInteger;
return self;

}; }),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "isNavigationNode",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNavigationNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "navigationLink",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "navigationLink\x0a\x09^ self selector",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["selector"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigationLink",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ receiver",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.receiver;

}; }),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
$self.receiver=aNode;
return self;

}; }),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "selector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.selector;

}; }),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.selector=aString;
return self;

}; }),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "superSend",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "superSend\x0a\x09^ self receiver ifNil: [ false ] ifNotNil: [ :recv | recv isSuper ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "receiver", "isSuper"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self._receiver();
if(($receiver = $1) == null || $receiver.a$nil){
return false;
} else {
var recv;
recv=$receiver;
return $recv(recv)._isSuper();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"superSend",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SendNode);



$core.addClass("SequenceNode", $globals.ASTNode, ["temps"], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SequenceNode.comment="I represent an sequence node. A sequence represent a set of instructions inside the same scope (the method scope or a block scope).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitSequenceNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitSequenceNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitSequenceNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceNode);

$core.addMethod(
$core.method({
selector: "isSequenceNode",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSequenceNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.SequenceNode);

$core.addMethod(
$core.method({
selector: "temps",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "temps\x0a\x09^ temps ifNil: [ #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.temps;
if(($receiver = $1) == null || $receiver.a$nil){
return [];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"temps",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceNode);

$core.addMethod(
$core.method({
selector: "temps:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "temps: aCollection\x0a\x09temps := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
$self.temps=aCollection;
return self;

}; }),
$globals.SequenceNode);



$core.addClass("BlockSequenceNode", $globals.SequenceNode, [], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BlockSequenceNode.comment="I represent an special sequence node for block scopes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitBlockSequenceNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitBlockSequenceNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitBlockSequenceNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockSequenceNode);



$core.addClass("ValueNode", $globals.ASTNode, ["value"], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ValueNode.comment="I represent a value node.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitValueNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitValueNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitValueNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.ValueNode);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ self value isImmutable",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isImmutable", "value"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._value())._isImmutable();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ValueNode);

$core.addMethod(
$core.method({
selector: "value",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.value;

}; }),
$globals.ValueNode);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject\x0a\x09value := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.value=anObject;
return self;

}; }),
$globals.ValueNode);



$core.addClass("VariableNode", $globals.ValueNode, ["assigned", "binding"], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.VariableNode.comment="I represent an variable node.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitVariableNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitVariableNode:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitVariableNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "alias",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ self binding alias",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["alias", "binding"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._binding())._alias();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias",{})});
//>>excludeEnd("ctx");
}; }),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "assigned",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "assigned\x0a\x09^ assigned ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.assigned;
if(($receiver = $1) == null || $receiver.a$nil){
return false;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assigned",{})});
//>>excludeEnd("ctx");
}; }),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "assigned:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "assigned: aBoolean\x0a\x09assigned := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
$self.assigned=aBoolean;
return self;

}; }),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "binding",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "binding\x0a\x09^ binding",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.binding;

}; }),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "binding:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScopeVar"],
source: "binding: aScopeVar\x0a\x09binding := aScopeVar",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aScopeVar){
var self=this,$self=this;
$self.binding=aScopeVar;
return self;

}; }),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ self binding isImmutable",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isImmutable", "binding"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._binding())._isImmutable();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{})});
//>>excludeEnd("ctx");
}; }),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "isNavigationNode",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNavigationNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "isSuper",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSuper\x0a\x09^ self binding isSuper",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isSuper", "binding"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._binding())._isSuper();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSuper",{})});
//>>excludeEnd("ctx");
}; }),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "navigationLink",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "navigationLink\x0a\x09^ self value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigationLink",{})});
//>>excludeEnd("ctx");
}; }),
$globals.VariableNode);



$core.addClass("AstPragmator", $globals.Object, ["methodNode"], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AstPragmator.comment="I am abstract superclass for pragma-processing transformer.\x0a\x0aMy subclasses should implement messages for each pragma\x0athey process. Pragma processing checks if a message is known\x0ato a class but not to its superclass. IOW, each and only those\x0apragmas are processed which are defined as methods in the subclass.\x0a\x0aThese messages can access sequence node in which\x0aa pragma occurred and its containing method node\x0aas `self sequenceNode` and `self methodNode`.\x0a\x0aSee `EarlyPragmator` for an example.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "methodNode",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodNode\x0a\x09^ methodNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.methodNode;

}; }),
$globals.AstPragmator);

$core.addMethod(
$core.method({
selector: "methodNode:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "methodNode: anObject\x0a\x09methodNode := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.methodNode=anObject;
return self;

}; }),
$globals.AstPragmator);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethodNode"],
source: "value: aMethodNode\x0a\x09self methodNode: aMethodNode.\x0a\x09self processPragmas: aMethodNode pragmas.\x0a\x09^ aMethodNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["methodNode:", "processPragmas:", "pragmas"]
}, function ($methodClass){ return function (aMethodNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._methodNode_(aMethodNode);
$self._processPragmas_($recv(aMethodNode)._pragmas());
return aMethodNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{aMethodNode:aMethodNode})});
//>>excludeEnd("ctx");
}; }),
$globals.AstPragmator);



$core.addClass("AstEarlyPragmator", $globals.AstPragmator, [], "Compiler-AST");
$core.addMethod(
$core.method({
selector: "inlineJS:",
protocol: "pragmas",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "inlineJS: aString\x0a\x09self methodNode sequenceNode dagChildren ifNotEmpty: [\x0a\x09\x09CompilerError signal: 'There must be no other code or code generator pragma than a lone inlineJS:' ].\x0a\x09self methodNode sequenceNode addDagChild: (\x0a\x09\x09JSStatementNode new\x0a\x09\x09\x09source: aString;\x0a\x09\x09\x09yourself)",
referencedClasses: ["CompilerError", "JSStatementNode"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotEmpty:", "dagChildren", "sequenceNode", "methodNode", "signal:", "addDagChild:", "source:", "new", "yourself"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$recv($recv([$recv([$self._methodNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["methodNode"]=1
//>>excludeEnd("ctx");
][0])._sequenceNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequenceNode"]=1
//>>excludeEnd("ctx");
][0])._dagChildren())._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.CompilerError)._signal_("There must be no other code or code generator pragma than a lone inlineJS:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv($self._methodNode())._sequenceNode();
$3=$recv($globals.JSStatementNode)._new();
$recv($3)._source_(aString);
$2=$recv($3)._yourself();
$recv($1)._addDagChild_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineJS:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.AstEarlyPragmator);



$core.addClass("CompilerError", $globals.Error, [], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CompilerError.comment="I am the common superclass of all compiling errors.";
//>>excludeEnd("ide");


$core.addClass("ParentFakingPathDagVisitor", $globals.PathDagVisitor, ["setParentSelector"], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ParentFakingPathDagVisitor.comment="I am base class of `DagNode` visitor.\x0a\x0aI hold the path of ancestors up to actual node\x0ain `self path`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "visit:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visit: aNode\x0a\x09self path ifNotEmpty: [ :p | aNode parent: p last ].\x0a\x09^ super visit: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotEmpty:", "path", "parent:", "last", "visit:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._path())._ifNotEmpty_((function(p){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aNode)._parent_($recv(p)._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visit_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.ParentFakingPathDagVisitor);



$core.addClass("NodeVisitor", $globals.ParentFakingPathDagVisitor, [], "Compiler-AST");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.NodeVisitor.comment="I am the abstract super class of all AST node visitors.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "visitAssignmentNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitBlockNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitBlockSequenceNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self visitSequenceNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitSequenceNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitSequenceNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitCascadeNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitDagNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDagNode: aNode\x0a\x09^ self visitDagNodeVariantSimple: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNodeVariantSimple:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNodeVariantSimple_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDagNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitDynamicArrayNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitDynamicDictionaryNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitJSStatementNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitMethodNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitReturnNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitSendNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitSequenceNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitValueNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitVariableNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeVisitor);


$core.setTraitComposition([{trait: $globals.TPragmator}], $globals.AstPragmator);

$core.addMethod(
$core.method({
selector: "ast",
protocol: "*Compiler-AST",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ast\x0a\x09self source ifEmpty: [ CompilerError signal: 'Method source is empty' ].\x0a\x09\x0a\x09^ Compiler new\x0a\x09\x09ast: self source\x0a\x09\x09forClass: self origin\x0a\x09\x09protocol: self protocol",
referencedClasses: ["CompilerError", "Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:", "source", "signal:", "ast:forClass:protocol:", "new", "origin", "protocol"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._source()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["source"]=1
//>>excludeEnd("ctx");
][0])._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.CompilerError)._signal_("Method source is empty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv($recv($globals.Compiler)._new())._ast_forClass_protocol_($self._source(),$self._origin(),$self._protocol());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ast",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

});
