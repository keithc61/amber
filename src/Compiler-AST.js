define(["amber/boot", "amber_core/Kernel-Dag", "amber_core/Kernel-Methods"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
var $core=$boot.api,nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage('Compiler-AST');
$core.packages["Compiler-AST"].innerEval = function (expr) { return eval(expr); };
$core.packages["Compiler-AST"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('ASTNode', $globals.DagParentNode, ['parent', 'position', 'source', 'shouldBeAliased'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ASTNode.comment="I am the abstract root class of the abstract syntax tree.\x0a\x0aConcrete classes should implement `#accept:` to allow visiting.\x0a\x0a`position` holds a point containing line and column number of the symbol location in the original source file.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "inPosition:",
protocol: 'testing',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(self._positionStart()).__lt_eq(aPoint))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._positionEnd()).__gt_eq(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inPosition:",{aPoint:aPoint},$globals.ASTNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "inPosition: aPoint\x0a\x09^ (self positionStart <= aPoint and: [\x0a\x09\x09self positionEnd >= aPoint ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "<=", "positionStart", ">=", "positionEnd"]
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isAssignmentNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAssignmentNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isBlockNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isBlockSequenceNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockSequenceNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isCascadeNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCascadeNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isJSStatementNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isJSStatementNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isNavigationNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNavigationNode\x0a\x09\x22Answer true if the node can be navigated to\x22\x0a\x09\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isReturnNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isReturnNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isSendNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSendNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isSequenceNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSequenceNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isSuperKeyword",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSuperKeyword\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isValueNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isValueNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "isVariableNode",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isVariableNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "location:",
protocol: 'accessing',
fn: function (aLocation){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv(aLocation)._start();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["start"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._line();
$1=$recv($2).__at($recv($recv(aLocation)._start())._column());
self._position_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"location:",{aLocation:aLocation},$globals.ASTNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLocation"],
source: "location: aLocation\x0a\x09self position: aLocation start line @ aLocation start column",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["position:", "@", "line", "start", "column"]
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._parent();
if(($receiver = $1) == null || $receiver.isNil){
return $1;
} else {
var node;
node=$receiver;
return $recv(node)._method();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method",{},$globals.ASTNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ self parent ifNotNil: [ :node | node method ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "parent", "method"]
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "navigationNodeAt:ifAbsent:",
protocol: 'accessing',
fn: function (aPoint,aBlock){
var self=this;
var children;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
var $early={};
try {
children=$recv(self._allDagChildren())._select_((function(each){
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
$2=$recv(a)._positionStart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["positionStart"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._dist_(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["dist:"]=1;
//>>excludeEnd("ctx");
return $recv($1).__lt_eq($recv($recv(b)._positionStart())._dist_(aPoint));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,4)});
//>>excludeEnd("ctx");
})))._first();
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigationNodeAt:ifAbsent:",{aPoint:aPoint,aBlock:aBlock,children:children},$globals.ASTNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "aBlock"],
source: "navigationNodeAt: aPoint ifAbsent: aBlock\x0a\x09\x22Answer the navigation node in the receiver's tree at aPoint \x0a\x09or nil if no navigation node was found.\x0a\x09\x0a\x09See `node >> isNaviationNode`\x22\x0a\x09\x0a\x09| children |\x0a\x09\x0a\x09children := self allDagChildren select: [ :each | \x0a\x09\x09each isNavigationNode and: [ each inPosition: aPoint ] ].\x0a\x09\x0a\x09children ifEmpty: [ ^ aBlock value ].\x0a\x09\x0a\x09^ (children asArray sort: [ :a :b | \x0a\x09\x09(a positionStart dist: aPoint) <= \x0a\x09\x09(b positionStart dist: aPoint) ]) first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "allDagChildren", "and:", "isNavigationNode", "inPosition:", "ifEmpty:", "value", "first", "sort:", "asArray", "<=", "dist:", "positionStart"]
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "parent",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@parent"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parent\x0a\x09^ parent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "parent:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@parent"]=aNode;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "parent: aNode\x0a\x09parent := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "position",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@position"];
if(($receiver = $1) == null || $receiver.isNil){
$2=self._parent();
if(($receiver = $2) == null || $receiver.isNil){
return $2;
} else {
var node;
node=$receiver;
return $recv(node)._position();
};
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"position",{},$globals.ASTNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "position\x0a\x09\x22answer the line and column of the receiver in the source code\x22\x0a\x09\x0a\x09^ position ifNil: [ \x0a\x09\x09self parent ifNotNil: [ :node | node position ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "ifNotNil:", "parent", "position"]
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "position:",
protocol: 'accessing',
fn: function (aPosition){
var self=this;
self["@position"]=aPosition;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPosition"],
source: "position: aPosition\x0a\x09position := aPosition",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "positionEnd",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$6,$5,$4,$3,$2;
$1=self._positionStart();
$6=self._source();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["source"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._lines();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lines"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__at($recv($recv($recv($recv(self._source())._lines())._last())._size()).__minus((1)));
return $recv($1).__plus($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positionEnd",{},$globals.ASTNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "positionEnd\x0a\x09^ self positionStart + ((self source lines size - 1) @ (self source lines last size - 1))",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "positionStart", "@", "-", "size", "lines", "source", "last"]
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "positionStart",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positionStart",{},$globals.ASTNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "positionStart\x0a\x09^ self position",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["position"]
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "requiresSmalltalkContext",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(self._dagChildren())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._requiresSmalltalkContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

})))._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"requiresSmalltalkContext",{},$globals.ASTNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresSmalltalkContext\x0a\x09\x22Answer true if the receiver requires a smalltalk context.\x0a\x09Only send nodes require a context.\x0a\x09\x0a\x09If no node requires a context, the method will be compiled without one.\x0a\x09See `IRJSTranslator` and `JSStream` for context creation\x22\x0a\x09\x0a\x09^ (self dagChildren \x0a\x09\x09detect: [ :each | each requiresSmalltalkContext ]\x0a\x09\x09ifNone: [ nil ]) notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "detect:ifNone:", "dagChildren", "requiresSmalltalkContext"]
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "shouldBeAliased",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@shouldBeAliased"];
if(($receiver = $1) == null || $receiver.isNil){
return false;
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldBeAliased",{},$globals.ASTNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldBeAliased\x0a\x09^ shouldBeAliased ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "shouldBeAliased:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@shouldBeAliased"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "shouldBeAliased: aBoolean\x0a\x09shouldBeAliased := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._source())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.ASTNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ self source size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "source"]
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@source"];
if(($receiver = $1) == null || $receiver.isNil){
return "";
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{},$globals.ASTNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "source:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTNode);



$core.addClass('AssignmentNode', $globals.ASTNode, ['left', 'right'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AssignmentNode.comment="I represent an assignment node.";
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
return $recv(aVisitor)._visitAssignmentNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.AssignmentNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitAssignmentNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitAssignmentNode:"]
}),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "dagChildren",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Array)._with_with_(self._left(),self._right());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren",{},$globals.AssignmentNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChildren\x0a\x09^ Array with: self left with: self right",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["with:with:", "left", "right"]
}),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "isAssignmentNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAssignmentNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "left",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@left"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "left\x0a\x09^ left",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "left:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@left"]=aNode;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "left: aNode\x0a\x09left := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "right",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@right"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "right\x0a\x09^ right",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "right:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@right"]=aNode;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "right: aNode\x0a\x09right := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AssignmentNode);



$core.addClass('BlockNode', $globals.ASTNode, ['parameters', 'scope'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BlockNode.comment="I represent an block closure node.";
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
return $recv(aVisitor)._visitBlockNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.BlockNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitBlockNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitBlockNode:"]
}),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "isBlockNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "parameters",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@parameters"];
if(($receiver = $1) == null || $receiver.isNil){
self["@parameters"]=$recv($globals.Array)._new();
return self["@parameters"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parameters",{},$globals.BlockNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parameters\x0a\x09^ parameters ifNil: [ parameters := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "parameters:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@parameters"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "parameters: aCollection\x0a\x09parameters := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@scope"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);



$core.addClass('CascadeNode', $globals.ASTNode, ['receiver'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CascadeNode.comment="I represent an cascade node.";
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
return $recv(aVisitor)._visitCascadeNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.CascadeNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitCascadeNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitCascadeNode:"]
}),
$globals.CascadeNode);

$core.addMethod(
$core.method({
selector: "isCascadeNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCascadeNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CascadeNode);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@receiver"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CascadeNode);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@receiver"]=aNode;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CascadeNode);



$core.addClass('DynamicArrayNode', $globals.ASTNode, [], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DynamicArrayNode.comment="I represent an dynamic array node.";
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
return $recv(aVisitor)._visitDynamicArrayNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.DynamicArrayNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitDynamicArrayNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDynamicArrayNode:"]
}),
$globals.DynamicArrayNode);



$core.addClass('DynamicDictionaryNode', $globals.ASTNode, [], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DynamicDictionaryNode.comment="I represent an dynamic dictionary node.";
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
return $recv(aVisitor)._visitDynamicDictionaryNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.DynamicDictionaryNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitDynamicDictionaryNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDynamicDictionaryNode:"]
}),
$globals.DynamicDictionaryNode);



$core.addClass('JSStatementNode', $globals.ASTNode, [], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.JSStatementNode.comment="I represent an JavaScript statement node.";
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
return $recv(aVisitor)._visitJSStatementNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.JSStatementNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitJSStatementNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitJSStatementNode:"]
}),
$globals.JSStatementNode);

$core.addMethod(
$core.method({
selector: "isJSStatementNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isJSStatementNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSStatementNode);

$core.addMethod(
$core.method({
selector: "requiresSmalltalkContext",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresSmalltalkContext\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSStatementNode);



$core.addClass('MethodNode', $globals.ASTNode, ['selector', 'arguments', 'source', 'scope', 'classReferences', 'sendIndexes'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodNode.comment="I represent an method node.\x0a\x0aA method node must be the root and only method node of a valid AST.";
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
return $recv(aVisitor)._visitMethodNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.MethodNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitMethodNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitMethodNode:"]
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@arguments"];
if(($receiver = $1) == null || $receiver.isNil){
return [];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{},$globals.MethodNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "arguments:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "classReferences",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@classReferences"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classReferences\x0a\x09^ classReferences",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "classReferences:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@classReferences"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "classReferences: aCollection\x0a\x09classReferences := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "messageSends",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._sendIndexes())._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},$globals.MethodNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSends\x0a\x09^ self sendIndexes keys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keys", "sendIndexes"]
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@scope"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aMethodScope){
var self=this;
self["@scope"]=aMethodScope;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethodScope"],
source: "scope: aMethodScope\x0a\x09scope := aMethodScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@selector"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "sendIndexes",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@sendIndexes"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendIndexes\x0a\x09^ sendIndexes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "sendIndexes:",
protocol: 'accessing',
fn: function (aDictionary){
var self=this;
self["@sendIndexes"]=aDictionary;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "sendIndexes: aDictionary\x0a\x09sendIndexes := aDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "sequenceNode",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$recv(self._dagChildren())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._isSequenceNode();
if($core.assert($1)){
throw $early=[each];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sequenceNode",{},$globals.MethodNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sequenceNode\x0a\x09self dagChildren do: [ :each |\x0a\x09\x09each isSequenceNode ifTrue: [ ^ each ] ].\x0a\x09\x09\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "dagChildren", "ifTrue:", "isSequenceNode"]
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@source"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);

$core.addMethod(
$core.method({
selector: "source:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodNode);



$core.addClass('ReturnNode', $globals.ASTNode, ['scope'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ReturnNode.comment="I represent an return node. At the AST level, there is not difference between a local return or non-local return.";
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
return $recv(aVisitor)._visitReturnNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.ReturnNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitReturnNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitReturnNode:"]
}),
$globals.ReturnNode);

$core.addMethod(
$core.method({
selector: "isReturnNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isReturnNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReturnNode);

$core.addMethod(
$core.method({
selector: "nonLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(self._scope())._isMethodScope())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturn",{},$globals.ReturnNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nonLocalReturn\x0a\x09^ self scope isMethodScope not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "isMethodScope", "scope"]
}),
$globals.ReturnNode);

$core.addMethod(
$core.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@scope"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReturnNode);

$core.addMethod(
$core.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ReturnNode);



$core.addClass('SendNode', $globals.ASTNode, ['selector', 'arguments', 'receiver', 'index', 'shouldBeInlined'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SendNode.comment="I represent an message send node.";
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
return $recv(aVisitor)._visitSendNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitSendNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitSendNode:"]
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "arguments",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@arguments"];
if(($receiver = $1) == null || $receiver.isNil){
self["@arguments"]=[];
return self["@arguments"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ arguments ifNil: [ arguments := #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "arguments:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@arguments"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "arguments: aCollection\x0a\x09arguments := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "dagChildren",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$2=self._arguments();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["arguments"]=1;
//>>excludeEnd("ctx");
return $recv($2)._copy();
} else {
$1;
};
$3=$recv($globals.Array)._with_(self._receiver());
$recv($3)._addAll_(self._arguments());
return $recv($3)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dagChildren",{},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dagChildren\x0a\x09self receiver ifNil: [ ^ self arguments copy ].\x0a\x09\x0a\x09^ (Array with: self receiver)\x0a\x09\x09addAll: self arguments;\x0a\x09\x09yourself",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "receiver", "copy", "arguments", "addAll:", "with:", "yourself"]
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "index",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@index"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "index\x0a\x09^ index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "index:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@index"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "isNavigationNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNavigationNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "isSendNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSendNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "navigationLink",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigationLink",{},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "navigationLink\x0a\x09^ self selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selector"]
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@receiver"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ receiver",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@receiver"]=aNode;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "receiver: aNode\x0a\x09receiver := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "requiresSmalltalkContext",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresSmalltalkContext\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@selector"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "shouldBeInlined",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@shouldBeInlined"];
if(($receiver = $1) == null || $receiver.isNil){
return false;
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldBeInlined",{},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldBeInlined\x0a\x09^ shouldBeInlined ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "shouldBeInlined:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@shouldBeInlined"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "shouldBeInlined: aBoolean\x0a\x09shouldBeInlined := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "superSend",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._notNil();
return $recv($1)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._receiver())._isSuperKeyword();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"superSend",{},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "superSend\x0a\x09^ self receiver notNil and: [ self receiver isSuperKeyword ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "notNil", "receiver", "isSuperKeyword"]
}),
$globals.SendNode);

$core.addMethod(
$core.method({
selector: "valueForReceiver:",
protocol: 'building',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
$1=$recv($globals.SendNode)._new();
$recv($1)._position_(self._position());
$recv($1)._source_(self._source());
$3=self._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=1;
//>>excludeEnd("ctx");
if(($receiver = $3) == null || $receiver.isNil){
$2=anObject;
} else {
$2=$recv(self._receiver())._valueForReceiver_(anObject);
};
$recv($1)._receiver_($2);
$recv($1)._selector_(self._selector());
$recv($1)._arguments_(self._arguments());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueForReceiver:",{anObject:anObject},$globals.SendNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "valueForReceiver: anObject\x0a\x09^ SendNode new\x0a\x09\x09position: self position;\x0a\x09\x09source: self source;\x0a\x09\x09receiver: (self receiver\x0a\x09\x09ifNil: [ anObject ] \x0a\x09\x09ifNotNil: [ self receiver valueForReceiver: anObject ]);\x0a\x09\x09selector: self selector;\x0a\x09\x09arguments: self arguments;\x0a\x09\x09yourself",
referencedClasses: ["SendNode"],
//>>excludeEnd("ide");
messageSends: ["position:", "new", "position", "source:", "source", "receiver:", "ifNil:ifNotNil:", "receiver", "valueForReceiver:", "selector:", "selector", "arguments:", "arguments", "yourself"]
}),
$globals.SendNode);



$core.addClass('SequenceNode', $globals.ASTNode, ['temps', 'scope'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SequenceNode.comment="I represent an sequence node. A sequence represent a set of instructions inside the same scope (the method scope or a block scope).";
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
return $recv(aVisitor)._visitSequenceNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.SequenceNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitSequenceNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitSequenceNode:"]
}),
$globals.SequenceNode);

$core.addMethod(
$core.method({
selector: "asBlockSequenceNode",
protocol: 'building',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.BlockSequenceNode)._new();
$recv($1)._position_(self._position());
$recv($1)._source_(self._source());
$recv($1)._dagChildren_(self._dagChildren());
$recv($1)._temps_(self._temps());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asBlockSequenceNode",{},$globals.SequenceNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asBlockSequenceNode\x0a\x09^ BlockSequenceNode new\x0a\x09\x09position: self position;\x0a\x09\x09source: self source;\x0a\x09\x09dagChildren: self dagChildren;\x0a\x09\x09temps: self temps;\x0a\x09\x09yourself",
referencedClasses: ["BlockSequenceNode"],
//>>excludeEnd("ide");
messageSends: ["position:", "new", "position", "source:", "source", "dagChildren:", "dagChildren", "temps:", "temps", "yourself"]
}),
$globals.SequenceNode);

$core.addMethod(
$core.method({
selector: "isSequenceNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSequenceNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceNode);

$core.addMethod(
$core.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@scope"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceNode);

$core.addMethod(
$core.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@scope"]=aLexicalScope;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLexicalScope"],
source: "scope: aLexicalScope\x0a\x09scope := aLexicalScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceNode);

$core.addMethod(
$core.method({
selector: "temps",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@temps"];
if(($receiver = $1) == null || $receiver.isNil){
return [];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"temps",{},$globals.SequenceNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "temps\x0a\x09^ temps ifNil: [ #() ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.SequenceNode);

$core.addMethod(
$core.method({
selector: "temps:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@temps"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "temps: aCollection\x0a\x09temps := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceNode);



$core.addClass('BlockSequenceNode', $globals.SequenceNode, [], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BlockSequenceNode.comment="I represent an special sequence node for block scopes.";
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
return $recv(aVisitor)._visitBlockSequenceNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.BlockSequenceNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitBlockSequenceNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitBlockSequenceNode:"]
}),
$globals.BlockSequenceNode);

$core.addMethod(
$core.method({
selector: "isBlockSequenceNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockSequenceNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockSequenceNode);



$core.addClass('ValueNode', $globals.ASTNode, ['value'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ValueNode.comment="I represent a value node.";
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
return $recv(aVisitor)._visitValueNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.ValueNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitValueNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitValueNode:"]
}),
$globals.ValueNode);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._value())._isImmutable();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},$globals.ValueNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ self value isImmutable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isImmutable", "value"]
}),
$globals.ValueNode);

$core.addMethod(
$core.method({
selector: "isValueNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isValueNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ValueNode);

$core.addMethod(
$core.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@value"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ValueNode);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@value"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject\x0a\x09value := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ValueNode);



$core.addClass('VariableNode', $globals.ValueNode, ['assigned', 'binding'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.VariableNode.comment="I represent an variable node.";
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
return $recv(aVisitor)._visitVariableNode_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitVariableNode: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitVariableNode:"]
}),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "alias",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._binding())._alias();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ self binding alias",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alias", "binding"]
}),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "assigned",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@assigned"];
if(($receiver = $1) == null || $receiver.isNil){
return false;
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assigned",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "assigned\x0a\x09^ assigned ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "assigned:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@assigned"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "assigned: aBoolean\x0a\x09assigned := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "beAssigned",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._binding())._validateAssignment();
self["@assigned"]=true;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beAssigned",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beAssigned\x0a\x09self binding validateAssignment.\x0a\x09assigned := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["validateAssignment", "binding"]
}),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "binding",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@binding"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "binding\x0a\x09^ binding",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "binding:",
protocol: 'accessing',
fn: function (aScopeVar){
var self=this;
self["@binding"]=aScopeVar;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScopeVar"],
source: "binding: aScopeVar\x0a\x09binding := aScopeVar",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "isArgument",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._binding())._isArgVar();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isArgument",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isArgument\x0a\x09^ self binding isArgVar",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isArgVar", "binding"]
}),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._binding())._isImmutable();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ self binding isImmutable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isImmutable", "binding"]
}),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "isNavigationNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNavigationNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "isSuperKeyword",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._value()).__eq("super");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSuperKeyword",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSuperKeyword\x0a\x09^ self value = 'super'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "value"]
}),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "isVariableNode",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isVariableNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.VariableNode);

$core.addMethod(
$core.method({
selector: "navigationLink",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigationLink",{},$globals.VariableNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "navigationLink\x0a\x09^ self value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value"]
}),
$globals.VariableNode);



$core.addClass('ParentFakingPathDagVisitor', $globals.PathDagVisitor, ['setParentSelector'], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ParentFakingPathDagVisitor.comment="I am base class of `DagNode` visitor.\x0a\x0aI hold the path of ancestors up to actual node\x0ain `self path`.";
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
var $1;
$recv(self._path())._ifNotEmpty_((function(p){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aNode)._parent_($recv(p)._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.ParentFakingPathDagVisitor.superclass||$boot.nilAsClass).fn.prototype._visit_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode},$globals.ParentFakingPathDagVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visit: aNode\x0a\x09self path ifNotEmpty: [ :p | aNode parent: p last ].\x0a\x09^ super visit: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotEmpty:", "path", "parent:", "last", "visit:"]
}),
$globals.ParentFakingPathDagVisitor);



$core.addClass('NodeVisitor', $globals.ParentFakingPathDagVisitor, [], 'Compiler-AST');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.NodeVisitor.comment="I am the abstract super class of all AST node visitors.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "visitAssignmentNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitBlockNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitBlockSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitSequenceNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self visitSequenceNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitSequenceNode:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitCascadeNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitDagNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNodeVariantSimple_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDagNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDagNode: aNode\x0a\x09^ self visitDagNodeVariantSimple: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNodeVariantSimple:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitDynamicArrayNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitDynamicDictionaryNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitJSStatementNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitMethodNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitReturnNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitSendNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitValueNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.NodeVisitor);

$core.addMethod(
$core.method({
selector: "visitVariableNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._visitDagNode_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ self visitDagNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitDagNode:"]
}),
$globals.NodeVisitor);


$core.addMethod(
$core.method({
selector: "ast",
protocol: '*Compiler-AST',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._source();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["source"]=1;
//>>excludeEnd("ctx");
$recv($1)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("Method source is empty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv($globals.Smalltalk)._parse_(self._source());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ast",{},$globals.CompiledMethod)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ast\x0a\x09self source ifEmpty: [ self error: 'Method source is empty' ].\x0a\x09\x0a\x09^ Smalltalk parse: self source",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifEmpty:", "source", "error:", "parse:"]
}),
$globals.CompiledMethod);

});
