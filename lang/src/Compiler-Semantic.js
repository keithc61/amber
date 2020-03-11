define(["amber/boot", "require", "amber/core/Compiler-AST", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Compiler-Semantic");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("LexicalScope", $globals.Object, ["node", "instruction", "temps", "args", "outerScope", "blockIndex"], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.LexicalScope.comment="I represent a lexical scope where variable names are associated with ScopeVars\x0aInstances are used for block scopes. Method scopes are instances of MethodLexicalScope.\x0a\x0aI am attached to a ScopeVar and method/block nodes.\x0aEach context (method/closure) get a fresh scope that inherits from its outer scope.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addArg:",
protocol: "adding",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addArg: aString\x0a\x09self args at: aString put: (ArgVar on: aString).\x0a\x09(self args at: aString) scope: self",
referencedClasses: ["ArgVar"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "args", "on:", "scope:", "at:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._args()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["args"]=1
//>>excludeEnd("ctx");
][0])._at_put_(aString,$recv($globals.ArgVar)._on_(aString));
$recv($recv($self._args())._at_(aString))._scope_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addArg:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "addTemp:",
protocol: "adding",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addTemp: aString\x0a\x09self temps at: aString put: (TempVar on: aString).\x0a\x09(self temps at: aString) scope: self",
referencedClasses: ["TempVar"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "temps", "on:", "scope:", "at:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._temps()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["temps"]=1
//>>excludeEnd("ctx");
][0])._at_put_(aString,$recv($globals.TempVar)._on_(aString));
$recv($recv($self._temps())._at_(aString))._scope_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTemp:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "alias",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ '$ctx', self scopeLevel asString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "asString", "scopeLevel"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return "$ctx".__comma($recv($self._scopeLevel())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "allVariableNames",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allVariableNames\x0a\x09^ self args keys, self temps keys",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "keys", "args", "temps"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($self._args())._keys()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["keys"]=1
//>>excludeEnd("ctx");
][0]).__comma($recv($self._temps())._keys());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allVariableNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "args",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "args\x0a\x09^ args ifNil: [ args := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.args;
if($1 == null || $1.a$nil){
$self.args=$recv($globals.Dictionary)._new();
return $self.args;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"args",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "bindingFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "bindingFor: aString\x0a\x09^ self pseudoVars at: aString ifAbsent: [\x0a\x09\x09self args at: aString ifAbsent: [\x0a\x09\x09\x09self temps at: aString ifAbsent: [ nil ]]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "pseudoVars", "args", "temps"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($self._pseudoVars())._at_ifAbsent_(aString,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv($self._args())._at_ifAbsent_(aString,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self._temps())._at_ifAbsent_(aString,(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:ifAbsent:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:ifAbsent:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindingFor:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "blockIndex",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blockIndex\x0a\x09^ blockIndex ifNil: [ 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.blockIndex;
if($1 == null || $1.a$nil){
return (0);
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blockIndex",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "blockIndex:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "blockIndex: anInteger \x0a\x09blockIndex := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
$self.blockIndex=anInteger;
return self;

}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "canFlattenNonLocalReturns",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canFlattenNonLocalReturns\x0a\x09^ self isInlined and: [ self outerScope canFlattenNonLocalReturns ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "isInlined", "canFlattenNonLocalReturns", "outerScope"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._isInlined())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._outerScope())._canFlattenNonLocalReturns();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canFlattenNonLocalReturns",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "instruction",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instruction\x0a\x09^ instruction",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.instruction;

}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "instruction:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "instruction: anIRInstruction\x0a\x09instruction := anIRInstruction",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
$self.instruction=anIRInstruction;
return self;

}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "isBlockScope",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockScope\x0a\x09^ self isMethodScope not",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["not", "isMethodScope"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._isMethodScope())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isBlockScope",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "isInlined",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ self instruction ifNil: [ false ] ifNotNil: [ :instr | instr isInlined ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "instruction", "isInlined"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._instruction();
if($1 == null || $1.a$nil){
return false;
} else {
var instr;
instr=$1;
return $recv(instr)._isInlined();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isInlined",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "isMethodScope",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMethodScope\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "lookupVariable:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "lookupVariable: aString\x0a\x09| lookup |\x0a\x09lookup := (self bindingFor: aString).\x0a\x09lookup ifNil: [\x0a\x09\x09lookup := self outerScope ifNotNil: [\x0a\x09\x09\x09(self outerScope lookupVariable: aString) ]].\x0a\x09^ lookup",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["bindingFor:", "ifNil:", "ifNotNil:", "outerScope", "lookupVariable:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
var lookup;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
lookup=$self._bindingFor_(aString);
$1=lookup;
if($1 == null || $1.a$nil){
$2=[$self._outerScope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["outerScope"]=1
//>>excludeEnd("ctx");
][0];
if($2 == null || $2.a$nil){
lookup=$2;
} else {
lookup=$recv($self._outerScope())._lookupVariable_(aString);
}
lookup;
} else {
$1;
}
return lookup;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupVariable:",{aString:aString,lookup:lookup})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "methodScope",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodScope\x0a\x09^ self outerScope ifNotNil: [\x0a\x09\x09self outerScope methodScope ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "outerScope", "methodScope"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=[$self._outerScope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["outerScope"]=1
//>>excludeEnd("ctx");
][0];
if($1 == null || $1.a$nil){
return $1;
} else {
return $recv($self._outerScope())._methodScope();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodScope",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "node",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "node\x0a\x09\x22Answer the node in which I am defined\x22\x0a\x09\x0a\x09^ node",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.node;

}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "node:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
$self.node=aNode;
return self;

}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "outerScope",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "outerScope\x0a\x09^ outerScope",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.outerScope;

}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "outerScope:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLexicalScope"],
source: "outerScope: aLexicalScope\x0a\x09outerScope := aLexicalScope",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aLexicalScope){
var self=this,$self=this;
$self.outerScope=aLexicalScope;
return self;

}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "pseudoVars",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pseudoVars\x0a\x09^ self methodScope pseudoVars",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["pseudoVars", "methodScope"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._methodScope())._pseudoVars();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pseudoVars",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "scopeLevel",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scopeLevel\x0a\x09self outerScope ifNil: [ ^ 1 ].\x0a\x09self isInlined ifTrue: [ ^ self outerScope scopeLevel ].\x0a\x09\x0a\x09^ self outerScope scopeLevel + 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "outerScope", "ifTrue:", "isInlined", "scopeLevel", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=[$self._outerScope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["outerScope"]=1
//>>excludeEnd("ctx");
][0];
if($1 == null || $1.a$nil){
return (1);
} else {
$1;
}
$2=$self._isInlined();
if($core.assert($2)){
return [$recv([$self._outerScope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["outerScope"]=2
//>>excludeEnd("ctx");
][0])._scopeLevel()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scopeLevel"]=1
//>>excludeEnd("ctx");
][0];
}
return $recv($recv($self._outerScope())._scopeLevel()).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scopeLevel",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "temps",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "temps\x0a\x09^ temps ifNil: [ temps := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.temps;
if($1 == null || $1.a$nil){
$self.temps=$recv($globals.Dictionary)._new();
return $self.temps;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"temps",{})});
//>>excludeEnd("ctx");
}; }),
$globals.LexicalScope);



$core.addClass("MethodLexicalScope", $globals.LexicalScope, ["iVars", "pseudoVars", "localReturn", "nonLocalReturns"], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodLexicalScope.comment="I represent a method scope.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addIVar:",
protocol: "adding",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addIVar: aString\x0a\x09self iVars at: aString put: (InstanceVar on: aString).\x0a\x09(self iVars at: aString) scope: self",
referencedClasses: ["InstanceVar"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "iVars", "on:", "scope:", "at:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._iVars()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["iVars"]=1
//>>excludeEnd("ctx");
][0])._at_put_(aString,$recv($globals.InstanceVar)._on_(aString));
$recv($recv($self._iVars())._at_(aString))._scope_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addIVar:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "addNonLocalReturn:",
protocol: "adding",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScope"],
source: "addNonLocalReturn: aScope\x0a\x09self nonLocalReturns add: aScope",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "nonLocalReturns"]
}, function ($methodClass){ return function (aScope){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._nonLocalReturns())._add_(aScope);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addNonLocalReturn:",{aScope:aScope})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "allVariableNames",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allVariableNames\x0a\x09^ super allVariableNames, self iVars keys",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "allVariableNames", "keys", "iVars"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._allVariableNames.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0]).__comma($recv($self._iVars())._keys());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allVariableNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "bindingFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "bindingFor: aString\x0a\x09^ (super bindingFor: aString) ifNil: [\x0a\x09\x09self iVars at: aString ifAbsent: [ nil ]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "bindingFor:", "at:ifAbsent:", "iVars"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._bindingFor_.call($self,aString))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
if($1 == null || $1.a$nil){
return $recv($self._iVars())._at_ifAbsent_(aString,(function(){
return nil;

}));
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindingFor:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "canFlattenNonLocalReturns",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canFlattenNonLocalReturns\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "hasLocalReturn",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasLocalReturn\x0a\x09^ self localReturn",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["localReturn"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._localReturn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasLocalReturn",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "hasNonLocalReturn",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasNonLocalReturn\x0a\x09^ self nonLocalReturns notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["notEmpty", "nonLocalReturns"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._nonLocalReturns())._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasNonLocalReturn",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "iVars",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "iVars\x0a\x09^ iVars ifNil: [ iVars := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.iVars;
if($1 == null || $1.a$nil){
$self.iVars=$recv($globals.Dictionary)._new();
return $self.iVars;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"iVars",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "isMethodScope",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMethodScope\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "localReturn",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "localReturn\x0a\x09^ localReturn ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.localReturn;
if($1 == null || $1.a$nil){
return false;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localReturn",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "localReturn:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "localReturn: aBoolean\x0a\x09localReturn := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
$self.localReturn=aBoolean;
return self;

}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "methodScope",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodScope\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "nonLocalReturns",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nonLocalReturns\x0a\x09^ nonLocalReturns ifNil: [ nonLocalReturns := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.nonLocalReturns;
if($1 == null || $1.a$nil){
$self.nonLocalReturns=$recv($globals.OrderedCollection)._new();
return $self.nonLocalReturns;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturns",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "pseudoVars",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pseudoVars\x0a\x09pseudoVars ifNil: [\x0a\x09\x09pseudoVars := Dictionary new.\x0a\x09\x09PseudoVar dictionary keysAndValuesDo: [ :each :impl |\x0a\x09\x09\x09pseudoVars at: each put: ((impl on: each)\x0a\x09\x09\x09\x09scope: self methodScope;\x0a\x09\x09\x09\x09yourself) ] ].\x0a\x09^ pseudoVars",
referencedClasses: ["Dictionary", "PseudoVar"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new", "keysAndValuesDo:", "dictionary", "at:put:", "scope:", "on:", "methodScope", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$self.pseudoVars;
if($1 == null || $1.a$nil){
$self.pseudoVars=$recv($globals.Dictionary)._new();
$recv($recv($globals.PseudoVar)._dictionary())._keysAndValuesDo_((function(each,impl){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$self.pseudoVars;
$3=$recv(impl)._on_(each);
$recv($3)._scope_($self._methodScope());
$4=$recv($3)._yourself();
return $recv($2)._at_put_(each,$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,impl:impl},$ctx1,2)});
//>>excludeEnd("ctx");
}));
} else {
$1;
}
return $self.pseudoVars;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pseudoVars",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "removeNonLocalReturn:",
protocol: "adding",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScope"],
source: "removeNonLocalReturn: aScope\x0a\x09self nonLocalReturns remove: aScope ifAbsent: []",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["remove:ifAbsent:", "nonLocalReturns"]
}, function ($methodClass){ return function (aScope){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._nonLocalReturns())._remove_ifAbsent_(aScope,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeNonLocalReturn:",{aScope:aScope})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodLexicalScope);



$core.addClass("ScopeVar", $globals.Object, ["scope", "name"], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ScopeVar.comment="I am an entry in a LexicalScope that gets associated with variable nodes of the same name.\x0aThere are 4 different subclasses of vars: temp vars, local vars, args, and unknown/global vars.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alias",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ self name asVariableName",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asVariableName", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._name())._asVariableName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "isAssignable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAssignable\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "isIdempotent",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isIdempotent\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09self deprecatedAPI: 'Use #isIdempotent / #isAssignable not instead.'.\x0a\x09^ self isIdempotent",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deprecatedAPI:", "isIdempotent"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._deprecatedAPI_("Use #isIdempotent / #isAssignable not instead.");
return $self._isIdempotent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isImmutable",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVar);

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
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "name",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.name;

}; }),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "name:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.name=aString;
return self;

}; }),
$globals.ScopeVar);

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
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "scope:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aScope){
var self=this,$self=this;
$self.scope=aScope;
return self;

}; }),
$globals.ScopeVar);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "on: aString\x0a\x09^ self new\x0a\x09\x09name: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name:", "new", "yourself"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._name_(aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVar.a$cls);


$core.addClass("AliasVar", $globals.ScopeVar, [], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AliasVar.comment="I am an internally defined variable by the compiler";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "isAssignable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAssignable\x0a\x09self error: 'Alias variable is internal, it should never appear in normal variable context.'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("Alias variable is internal, it should never appear in normal variable context.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAssignable",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AliasVar);

$core.addMethod(
$core.method({
selector: "isIdempotent",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isIdempotent\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.AliasVar);



$core.addClass("ArgVar", $globals.ScopeVar, [], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ArgVar.comment="I am an argument of a method or block.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "isIdempotent",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isIdempotent\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.ArgVar);



$core.addClass("ClassRefVar", $globals.ScopeVar, [], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassRefVar.comment="I am an class reference variable";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alias",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ '$globals.', self name",
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
}, function($ctx1) {$ctx1.fill(self,"alias",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassRefVar);



$core.addClass("ExternallyKnownVar", $globals.ScopeVar, [], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ExternallyKnownVar.comment="I am a variable known externally (not in method scope).";
//>>excludeEnd("ide");


$core.addClass("InstanceVar", $globals.ScopeVar, [], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.InstanceVar.comment="I am an instance variable of a method or block.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alias",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ '$self.', self name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return "$self.".__comma($self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias",{})});
//>>excludeEnd("ctx");
}; }),
$globals.InstanceVar);

$core.addMethod(
$core.method({
selector: "isAssignable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAssignable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.InstanceVar);



$core.addClass("PseudoVar", $globals.ScopeVar, [], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PseudoVar.comment="I am an pseudo variable.\x0a\x0aThe five Smalltalk pseudo variables are: 'self', 'super', 'nil', 'true' and 'false'";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alias",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ self name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PseudoVar);

$core.addMethod(
$core.method({
selector: "isIdempotent",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isIdempotent\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.PseudoVar);


$core.setSlots($globals.PseudoVar.a$cls, ["dictionary", "receiverNames"]);
$core.addMethod(
$core.method({
selector: "dictionary",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dictionary\x0a\x09^ dictionary ifNil: [ dictionary := Dictionary new\x0a\x09\x09at: #self put: PseudoVar;\x0a\x09\x09at: #super put: SuperVar;\x0a\x09\x09at: #nil put: PseudoVar;\x0a\x09\x09at: #false put: PseudoVar;\x0a\x09\x09at: #true put: PseudoVar;\x0a\x09\x09at: #thisContext put: ThisContextVar;\x0a\x09\x09yourself ]",
referencedClasses: ["Dictionary", "PseudoVar", "SuperVar", "ThisContextVar"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "at:put:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$self.dictionary;
if($1 == null || $1.a$nil){
$2=$recv($globals.Dictionary)._new();
[$recv($2)._at_put_("self",$globals.PseudoVar)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($2)._at_put_("super",$globals.SuperVar)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=2
//>>excludeEnd("ctx");
][0];
[$recv($2)._at_put_("nil",$globals.PseudoVar)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=3
//>>excludeEnd("ctx");
][0];
[$recv($2)._at_put_("false",$globals.PseudoVar)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=4
//>>excludeEnd("ctx");
][0];
[$recv($2)._at_put_("true",$globals.PseudoVar)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=5
//>>excludeEnd("ctx");
][0];
$recv($2)._at_put_("thisContext",$globals.ThisContextVar);
$self.dictionary=$recv($2)._yourself();
return $self.dictionary;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dictionary",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PseudoVar.a$cls);

$core.addMethod(
$core.method({
selector: "receiverNames",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiverNames\x0a\x09^ receiverNames ifNil: [ receiverNames := Dictionary new\x0a\x09\x09at: #self put: '$self';\x0a\x09\x09at: #super put: '$self';\x0a\x09\x09at: #nil put: '$nil';\x0a\x09\x09yourself ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "at:put:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$self.receiverNames;
if($1 == null || $1.a$nil){
$2=$recv($globals.Dictionary)._new();
[$recv($2)._at_put_("self","$self")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($2)._at_put_("super","$self")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=2
//>>excludeEnd("ctx");
][0];
$recv($2)._at_put_("nil","$nil");
$self.receiverNames=$recv($2)._yourself();
return $self.receiverNames;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiverNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PseudoVar.a$cls);


$core.addClass("SuperVar", $globals.PseudoVar, [], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SuperVar.comment="I am a 'super' pseudo variable.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "isSuper",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSuper\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.SuperVar);

$core.addMethod(
$core.method({
selector: "lookupAsJavaScriptSource",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lookupAsJavaScriptSource\x0a\x09^ '($methodClass.superclass||$boot.nilAsClass).fn.prototype'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "($methodClass.superclass||$boot.nilAsClass).fn.prototype";

}; }),
$globals.SuperVar);



$core.addClass("ThisContextVar", $globals.PseudoVar, [], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ThisContextVar.comment="I am a 'thisContext' pseudo variable.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alias",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ '$core.getThisContext()'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "$core.getThisContext()";

}; }),
$globals.ThisContextVar);



$core.addClass("TempVar", $globals.ScopeVar, [], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TempVar.comment="I am an temporary variable of a method or block.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "isAssignable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAssignable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.TempVar);



$core.addClass("SemanticAnalyzer", $globals.NodeVisitor, ["currentScope", "blockIndex", "thePackage", "theClass", "classReferences", "messageSends"], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SemanticAnalyzer.comment="I semantically analyze the abstract syntax tree and annotate it with informations such as non local returns and variable scopes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "bindUnscopedVariable:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "bindUnscopedVariable: aString\x0a\x09aString isCapitalized ifTrue: [ \x22Capital letter variables might be globals.\x22\x0a\x09\x09self classReferences add: aString.\x0a\x09\x09^ ClassRefVar new name: aString; yourself ].\x0a\x0a\x09\x22Throw an error if the variable is undeclared in the global JS scope (i.e. window).\x0a\x09We allow all variables listed by Smalltalk>>#globalJsVariables.\x0a\x09This list includes: `window`, `document`,  `process` and `global`\x0a\x09for nodejs and browser environments.\x0a\x09\x0a\x09This is only to make sure compilation works on both browser-based and nodejs environments.\x0a\x09The ideal solution would be to use a pragma instead\x22\x0a\x0a\x09((Smalltalk globalJsVariables includes: aString)\x0a\x09\x09or: [ self isVariableKnown: aString inPackage: self thePackage ]) ifTrue: [\x0a\x09\x09\x09^ ExternallyKnownVar new name: aString; yourself ].\x0a\x0a\x09self errorUnknownVariable: aString",
referencedClasses: ["ClassRefVar", "Smalltalk", "ExternallyKnownVar"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isCapitalized", "add:", "classReferences", "name:", "new", "yourself", "or:", "includes:", "globalJsVariables", "isVariableKnown:inPackage:", "thePackage", "errorUnknownVariable:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(aString)._isCapitalized();
if($core.assert($1)){
$recv($self._classReferences())._add_(aString);
$2=[$recv($globals.ClassRefVar)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
[$recv($2)._name_(aString)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["name:"]=1
//>>excludeEnd("ctx");
][0];
return [$recv($2)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0];
}
$3=$recv($recv($recv($globals.Smalltalk)._globalJsVariables())._includes_(aString))._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._isVariableKnown_inPackage_(aString,$self._thePackage());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
if($core.assert($3)){
$4=$recv($globals.ExternallyKnownVar)._new();
$recv($4)._name_(aString);
return $recv($4)._yourself();
}
$self._errorUnknownVariable_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindUnscopedVariable:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "classReferences",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classReferences\x0a\x09^ classReferences ifNil: [ classReferences := Set new ]",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.classReferences;
if($1 == null || $1.a$nil){
$self.classReferences=$recv($globals.Set)._new();
return $self.classReferences;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classReferences",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "errorInvalidAssignment:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "errorInvalidAssignment: aString\x0a\x09InvalidAssignmentError new\x0a\x09\x09variableName: aString;\x0a\x09\x09signal",
referencedClasses: ["InvalidAssignmentError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["variableName:", "new", "signal"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.InvalidAssignmentError)._new();
$recv($1)._variableName_(aString);
$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorInvalidAssignment:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "errorShadowingVariable:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "errorShadowingVariable: aString\x0a\x09ShadowingVariableError new\x0a\x09\x09variableName: aString;\x0a\x09\x09signal",
referencedClasses: ["ShadowingVariableError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["variableName:", "new", "signal"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.ShadowingVariableError)._new();
$recv($1)._variableName_(aString);
$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorShadowingVariable:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "errorUnknownVariable:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "errorUnknownVariable: aString\x0a\x09UnknownVariableError new\x0a\x09\x09variableName: aString;\x0a\x09\x09signal",
referencedClasses: ["UnknownVariableError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["variableName:", "new", "signal"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.UnknownVariableError)._new();
$recv($1)._variableName_(aString);
$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorUnknownVariable:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "isVariableKnown:inPackage:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aPackage"],
source: "isVariableKnown: aString inPackage: aPackage\x0a\x09^ Compiler new\x0a\x09\x09eval: 'typeof(', aString, ')!== \x22undefined\x22||(function(){try{return(', aString, ',true)}catch(_){return false}})()'\x0a\x09\x09forPackage: aPackage",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["eval:forPackage:", "new", ","]
}, function ($methodClass){ return function (aString,aPackage){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Compiler)._new())._eval_forPackage_([$recv([$recv([$recv("typeof(".__comma(aString)).__comma(")!== \x22undefined\x22||(function(){try{return(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=3
//>>excludeEnd("ctx");
][0]).__comma(aString)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(",true)}catch(_){return false}})()")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0],aPackage);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isVariableKnown:inPackage:",{aString:aString,aPackage:aPackage})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "messageSends",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSends\x0a\x09^ messageSends ifNil: [ messageSends := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.messageSends;
if($1 == null || $1.a$nil){
$self.messageSends=$recv($globals.Dictionary)._new();
return $self.messageSends;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSends",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "newBlockScope",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newBlockScope\x0a\x09^ self newScopeOfClass: LexicalScope",
referencedClasses: ["LexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newScopeOfClass:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._newScopeOfClass_($globals.LexicalScope);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newBlockScope",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "newMethodScope",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newMethodScope\x0a\x09^ self newScopeOfClass: MethodLexicalScope",
referencedClasses: ["MethodLexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newScopeOfClass:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._newScopeOfClass_($globals.MethodLexicalScope);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newMethodScope",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "newScopeOfClass:",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLexicalScopeClass"],
source: "newScopeOfClass: aLexicalScopeClass\x0a\x09^ aLexicalScopeClass new\x0a\x09\x09outerScope: currentScope;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["outerScope:", "new", "yourself"]
}, function ($methodClass){ return function (aLexicalScopeClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aLexicalScopeClass)._new();
$recv($1)._outerScope_($self.currentScope);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newScopeOfClass:",{aLexicalScopeClass:aLexicalScopeClass})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "nextBlockIndex",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextBlockIndex\x0a\x09blockIndex ifNil: [ blockIndex := 0 ].\x0a\x09\x0a\x09blockIndex := blockIndex + 1.\x0a\x09^ blockIndex",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.blockIndex;
if($1 == null || $1.a$nil){
$self.blockIndex=(0);
$self.blockIndex;
} else {
$1;
}
$self.blockIndex=$recv($self.blockIndex).__plus((1));
return $self.blockIndex;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextBlockIndex",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "popScope",
protocol: "scope",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "popScope\x0a\x09currentScope ifNotNil: [\x0a\x09\x09currentScope := currentScope outerScope ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "outerScope"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.currentScope;
if($1 == null || $1.a$nil){
$1;
} else {
$self.currentScope=$recv($self.currentScope)._outerScope();
$self.currentScope;
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"popScope",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "pushScope:",
protocol: "scope",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScope"],
source: "pushScope: aScope\x0a\x09aScope outerScope: currentScope.\x0a\x09currentScope := aScope",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["outerScope:"]
}, function ($methodClass){ return function (aScope){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aScope)._outerScope_($self.currentScope);
$self.currentScope=aScope;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pushScope:",{aScope:aScope})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.theClass;

}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
$self.theClass=aClass;
return self;

}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "thePackage",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "thePackage\x0a\x09^ thePackage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.thePackage;

}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "thePackage:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "thePackage: aPackage\x0a\x09thePackage := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
$self.thePackage=aPackage;
return self;

}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "validateVariableScope:",
protocol: "scope",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "validateVariableScope: aString\x0a\x09\x22Validate the variable scope in by doing a recursive lookup, up to the method scope\x22\x0a\x0a\x09(currentScope lookupVariable: aString) ifNotNil: [\x0a\x09\x09self errorShadowingVariable: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "lookupVariable:", "errorShadowingVariable:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self.currentScope)._lookupVariable_(aString);
if($1 == null || $1.a$nil){
$1;
} else {
$self._errorShadowingVariable_(aString);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"validateVariableScope:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitAssignmentNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| lhs |\x0a\x09super visitAssignmentNode: aNode.\x0a\x09lhs := aNode left.\x0a\x09lhs isAssignable ifFalse: [ self errorInvalidAssignment: lhs identifier ].\x0a\x09lhs assigned: true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitAssignmentNode:", "left", "ifFalse:", "isAssignable", "errorInvalidAssignment:", "identifier", "assigned:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var lhs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitAssignmentNode_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
lhs=$recv(aNode)._left();
$1=$recv(lhs)._isAssignable();
if(!$core.assert($1)){
$self._errorInvalidAssignment_($recv(lhs)._identifier());
}
$recv(lhs)._assigned_(true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode,lhs:lhs})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitBlockNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09self pushScope: self newBlockScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x09currentScope blockIndex: self nextBlockIndex.\x0a\x0a\x09aNode parameters do: [ :each |\x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitBlockNode: aNode.\x0a\x09self popScope",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["pushScope:", "newBlockScope", "scope:", "node:", "blockIndex:", "nextBlockIndex", "do:", "parameters", "validateVariableScope:", "addArg:", "visitBlockNode:", "popScope"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._pushScope_($self._newBlockScope());
$recv(aNode)._scope_($self.currentScope);
$recv($self.currentScope)._node_(aNode);
$recv($self.currentScope)._blockIndex_($self._nextBlockIndex());
$recv($recv(aNode)._parameters())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._validateVariableScope_(each);
return $recv($self.currentScope)._addArg_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitBlockNode_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$self._popScope();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitCascadeNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09aNode receiver: aNode dagChildren first receiver.\x0a\x09aNode dagChildren allButLast do: [ :each | each beSideEffect ].\x0a\x09super visitCascadeNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["receiver:", "receiver", "first", "dagChildren", "do:", "allButLast", "beSideEffect", "visitCascadeNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aNode)._receiver_($recv($recv([$recv(aNode)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._first())._receiver());
$recv($recv($recv(aNode)._dagChildren())._allButLast())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._beSideEffect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitCascadeNode_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitMethodNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09self pushScope: self newMethodScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x0a\x09self theClass allInstanceVariableNames do: [ :each |\x0a\x09\x09currentScope addIVar: each ].\x0a\x09aNode arguments do: [ :each |\x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitMethodNode: aNode.\x0a\x0a\x09aNode\x0a\x09\x09classReferences: self classReferences;\x0a\x09\x09sendIndexes: self messageSends.\x0a\x09self popScope.\x0a\x09^ aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["pushScope:", "newMethodScope", "scope:", "node:", "do:", "allInstanceVariableNames", "theClass", "addIVar:", "arguments", "validateVariableScope:", "addArg:", "visitMethodNode:", "classReferences:", "classReferences", "sendIndexes:", "messageSends", "popScope"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._pushScope_($self._newMethodScope());
$recv(aNode)._scope_($self.currentScope);
$recv($self.currentScope)._node_(aNode);
[$recv($recv($self._theClass())._allInstanceVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.currentScope)._addIVar_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["do:"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv(aNode)._arguments())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._validateVariableScope_(each);
return $recv($self.currentScope)._addArg_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitMethodNode_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$recv(aNode)._classReferences_($self._classReferences());
$recv(aNode)._sendIndexes_($self._messageSends());
$self._popScope();
return aNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitReturnNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09aNode scope: currentScope.\x0a\x09currentScope isMethodScope\x0a\x09\x09ifTrue: [ currentScope localReturn: true ]\x0a\x09\x09ifFalse: [ currentScope methodScope addNonLocalReturn: currentScope ].\x0a\x09super visitReturnNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["scope:", "ifTrue:ifFalse:", "isMethodScope", "localReturn:", "addNonLocalReturn:", "methodScope", "visitReturnNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aNode)._scope_($self.currentScope);
$1=$recv($self.currentScope)._isMethodScope();
if($core.assert($1)){
$recv($self.currentScope)._localReturn_(true);
} else {
$recv($recv($self.currentScope)._methodScope())._addNonLocalReturn_($self.currentScope);
}
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitReturnNode_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitSendNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x0a\x09| sends |\x0a\x09sends := self messageSends at: aNode selector ifAbsentPut: [ OrderedCollection new ].\x0a\x09sends add: aNode.\x0a\x0a\x09aNode index: sends size.\x0a\x0a\x09super visitSendNode: aNode",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsentPut:", "messageSends", "selector", "new", "add:", "index:", "size", "visitSendNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var sends;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
sends=$recv($self._messageSends())._at_ifAbsentPut_($recv(aNode)._selector(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.OrderedCollection)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(sends)._add_(aNode);
$recv(aNode)._index_($recv(sends)._size());
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitSendNode_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,sends:sends})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitSequenceNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode temps do: [ :each |\x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addTemp: each ].\x0a\x0a\x09super visitSequenceNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "temps", "validateVariableScope:", "addTemp:", "visitSequenceNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aNode)._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._validateVariableScope_(each);
return $recv($self.currentScope)._addTemp_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitSequenceNode_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitVariableNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09\x22Bind a ScopeVar to aNode by doing a lookup in the current scope.\x0a\x09If no var is found in scope, represent an externally known variable or throw an error.\x22\x0a\x0a\x09aNode binding:\x0a\x09\x09((currentScope lookupVariable: aNode identifier) ifNil: [ self bindUnscopedVariable: aNode identifier ])",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["binding:", "ifNil:", "lookupVariable:", "identifier", "bindUnscopedVariable:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($self.currentScope)._lookupVariable_([$recv(aNode)._identifier()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["identifier"]=1
//>>excludeEnd("ctx");
][0]);
if($1 == null || $1.a$nil){
$2=$self._bindUnscopedVariable_($recv(aNode)._identifier());
} else {
$2=$1;
}
$recv(aNode)._binding_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "on: aClass\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["theClass:", "new", "yourself"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._theClass_(aClass);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzer.a$cls);


$core.addClass("SemanticError", $globals.CompilerError, [], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SemanticError.comment="I represent an abstract semantic error thrown by the SemanticAnalyzer.\x0aSemantic errors can be unknown variable errors, etc.\x0aSee my subclasses for concrete errors.\x0a\x0aThe IDE should catch instances of Semantic error to deal with them when compiling";
//>>excludeEnd("ide");


$core.addClass("InvalidAssignmentError", $globals.SemanticError, ["variableName"], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.InvalidAssignmentError.comment="I get signaled when a pseudo variable gets assigned.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "messageText",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ ' Invalid assignment to variable: ', self variableName",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "variableName"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return " Invalid assignment to variable: ".__comma($self._variableName());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText",{})});
//>>excludeEnd("ctx");
}; }),
$globals.InvalidAssignmentError);

$core.addMethod(
$core.method({
selector: "variableName",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variableName\x0a\x09^ variableName",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.variableName;

}; }),
$globals.InvalidAssignmentError);

$core.addMethod(
$core.method({
selector: "variableName:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.variableName=aString;
return self;

}; }),
$globals.InvalidAssignmentError);



$core.addClass("ShadowingVariableError", $globals.SemanticError, ["variableName"], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ShadowingVariableError.comment="I get signaled when a variable in a block or method scope shadows a variable of the same name in an outer scope.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "messageText",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ 'Variable shadowing error: ', self variableName, ' is already defined'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "variableName"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv("Variable shadowing error: ".__comma($self._variableName())).__comma(" is already defined")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ShadowingVariableError);

$core.addMethod(
$core.method({
selector: "variableName",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variableName\x0a\x09^ variableName",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.variableName;

}; }),
$globals.ShadowingVariableError);

$core.addMethod(
$core.method({
selector: "variableName:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.variableName=aString;
return self;

}; }),
$globals.ShadowingVariableError);



$core.addClass("UnknownVariableError", $globals.SemanticError, ["variableName"], "Compiler-Semantic");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.UnknownVariableError.comment="I get signaled when a variable is not defined.\x0aThe default behavior is to allow it, as this is how Amber currently is able to seamlessly send messages to JavaScript objects.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "messageText",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ 'Unknown Variable error: ', self variableName, ' is not defined'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "variableName"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv("Unknown Variable error: ".__comma($self._variableName())).__comma(" is not defined")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText",{})});
//>>excludeEnd("ctx");
}; }),
$globals.UnknownVariableError);

$core.addMethod(
$core.method({
selector: "variableName",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variableName\x0a\x09^ variableName",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.variableName;

}; }),
$globals.UnknownVariableError);

$core.addMethod(
$core.method({
selector: "variableName:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.variableName=aString;
return self;

}; }),
$globals.UnknownVariableError);


});
