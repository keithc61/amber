define(["amber/boot", "require", "amber/core/Compiler-AST", "amber/core/Compiler-Core", "amber/core/Compiler-IR", "amber/core/Compiler-Semantic", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Compiler-Inlining");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("ASTPreInliner", $globals.NodeVisitor, [], "Compiler-Inlining");
$core.addMethod(
$core.method({
selector: "visitSendNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x0a\x09aNode superSend ifFalse: [ \x0a\x09\x09(IRSendInliner inlinedSelectors includes: aNode selector) ifTrue: [\x0a\x09\x09\x09aNode shouldBeAliased: true.\x0a\x09\x09\x09aNode receiver ifNotNil: [ :receiver |\x0a\x09\x09\x09\x09(IRSendInliner inlinedSelectorsNeedingIdempotentReceiver includes: aNode selector) ifTrue: [\x0a\x09\x09\x09\x09\x09receiver shouldBeAliased: true ] ] ] ].\x0a\x0a\x09^ super visitSendNode: aNode",
referencedClasses: ["IRSendInliner"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "superSend", "ifTrue:", "includes:", "inlinedSelectors", "selector", "shouldBeAliased:", "ifNotNil:", "receiver", "inlinedSelectorsNeedingIdempotentReceiver", "visitSendNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
if(!$core.assert($recv(aNode)._superSend())){
if($core.assert([$recv($recv($globals.IRSendInliner)._inlinedSelectors())._includes_([$recv(aNode)._selector()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["selector"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["includes:"]=1
//>>excludeEnd("ctx");
][0])){
[$recv(aNode)._shouldBeAliased_(true)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["shouldBeAliased:"]=1
//>>excludeEnd("ctx");
][0];
$1=$recv(aNode)._receiver();
if($1 == null || $1.a$nil){
$1;
} else {
var receiver;
receiver=$1;
if($core.assert($recv($recv($globals.IRSendInliner)._inlinedSelectorsNeedingIdempotentReceiver())._includes_($recv(aNode)._selector()))){
$recv(receiver)._shouldBeAliased_(true);
}
}
}
}
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitSendNode_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPreInliner);



$core.addClass("IRInlinedClosure", $globals.IRClosure, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedClosure.comment="I represent an inlined closure instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitIRInlinedClosure: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRInlinedClosure:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aVisitor)._visitIRInlinedClosure_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInlinedClosure);

$core.addMethod(
$core.method({
selector: "isInlined",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.IRInlinedClosure);



$core.addClass("IRInlinedSend", $globals.IRSend, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedSend.comment="I am the abstract super class of inlined message send instructions.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitInlinedSend: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitInlinedSend:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aVisitor)._visitInlinedSend_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInlinedSend);

$core.addMethod(
$core.method({
selector: "internalVariables",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "internalVariables\x0a\x09\x22Answer a collection of internal variables required \x0a\x09to perform the inlining\x22\x0a\x09\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [];

}; }),
$globals.IRInlinedSend);

$core.addMethod(
$core.method({
selector: "isInlined",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.IRInlinedSend);



$core.addClass("IRInlinedIfFalse", $globals.IRInlinedSend, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedIfFalse.comment="I represent an inlined `#ifFalse:` message send instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitIRInlinedIfFalse: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRInlinedIfFalse:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aVisitor)._visitIRInlinedIfFalse_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInlinedIfFalse);



$core.addClass("IRInlinedIfNilIfNotNil", $globals.IRInlinedSend, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedIfNilIfNotNil.comment="I represent an inlined `#ifNil:ifNotNil:` message send instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitIRInlinedIfNilIfNotNil: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRInlinedIfNilIfNotNil:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aVisitor)._visitIRInlinedIfNilIfNotNil_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInlinedIfNilIfNotNil);



$core.addClass("IRInlinedIfTrue", $globals.IRInlinedSend, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedIfTrue.comment="I represent an inlined `#ifTrue:` message send instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrue: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRInlinedIfTrue:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aVisitor)._visitIRInlinedIfTrue_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInlinedIfTrue);



$core.addClass("IRInlinedIfTrueIfFalse", $globals.IRInlinedSend, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedIfTrueIfFalse.comment="I represent an inlined `#ifTrue:ifFalse:` message send instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrueIfFalse: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRInlinedIfTrueIfFalse:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aVisitor)._visitIRInlinedIfTrueIfFalse_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInlinedIfTrueIfFalse);



$core.addClass("IRInlinedSequence", $globals.IRBlockSequence, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedSequence.comment="I represent a (block) sequence inside an inlined closure instruction (instance of `IRInlinedClosure`).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitIRInlinedSequence: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRInlinedSequence:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aVisitor)._visitIRInlinedSequence_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInlinedSequence);

$core.addMethod(
$core.method({
selector: "isInlined",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.IRInlinedSequence);



$core.addClass("IRInliner", $globals.IRVisitor, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInliner.comment="I visit an IR tree, inlining message sends and block closures.\x0a\x0aMessage selectors that can be inlined are answered by `IRSendInliner >> #inlinedSelectors`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "assignmentInliner",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "assignmentInliner\x0a\x09^ IRAssignmentInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
referencedClasses: ["IRAssignmentInliner"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["translator:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRAssignmentInliner)._new();
$recv($1)._translator_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assignmentInliner",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "flattenedReturn:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRNonLocalReturn"],
source: "flattenedReturn: anIRNonLocalReturn\x0a\x09| localReturn |\x0a\x09localReturn := IRReturn new\x0a\x09\x09scope: anIRNonLocalReturn scope;\x0a\x09\x09yourself.\x0a\x09anIRNonLocalReturn dagChildren do: [ :each | localReturn add: each ].\x0a\x09^ localReturn",
referencedClasses: ["IRReturn"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["scope:", "new", "scope", "yourself", "do:", "dagChildren", "add:"]
}, function ($methodClass){ return function (anIRNonLocalReturn){
var self=this,$self=this;
var localReturn;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRReturn)._new();
$recv($1)._scope_($recv(anIRNonLocalReturn)._scope());
localReturn=$recv($1)._yourself();
$recv($recv(anIRNonLocalReturn)._dagChildren())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(localReturn)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return localReturn;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flattenedReturn:",{anIRNonLocalReturn:anIRNonLocalReturn,localReturn:localReturn})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "nonLocalReturnInliner",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nonLocalReturnInliner\x0a\x09^ IRNonLocalReturnInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
referencedClasses: ["IRNonLocalReturnInliner"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["translator:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRNonLocalReturnInliner)._new();
$recv($1)._translator_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturnInliner",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "returnInliner",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "returnInliner\x0a\x09^ IRReturnInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
referencedClasses: ["IRReturnInliner"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["translator:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRReturnInliner)._new();
$recv($1)._translator_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"returnInliner",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "sendInliner",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendInliner\x0a\x09^ IRSendInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
referencedClasses: ["IRSendInliner"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["translator:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRSendInliner)._new();
$recv($1)._translator_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendInliner",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "shouldInlineAssignment:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "shouldInlineAssignment: anIRAssignment\x0a\x09^ anIRAssignment isInlined not and: [\x0a\x09\x09anIRAssignment right isSend and: [\x0a\x09\x09\x09self shouldInlineSend: anIRAssignment right ]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "not", "isInlined", "isSend", "right", "shouldInlineSend:"]
}, function ($methodClass){ return function (anIRAssignment){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(anIRAssignment)._isInlined())._not())){
if($core.assert($recv([$recv(anIRAssignment)._right()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["right"]=1
//>>excludeEnd("ctx");
][0])._isSend())){
return $self._shouldInlineSend_($recv(anIRAssignment)._right());
} else {
return false;
}
} else {
return false;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInlineAssignment:",{anIRAssignment:anIRAssignment})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "shouldInlineReturn:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "shouldInlineReturn: anIRReturn\x0a\x09^ anIRReturn isInlined not and: [\x0a\x09\x09anIRReturn expression isSend and: [\x0a\x09\x09\x09self shouldInlineSend: anIRReturn expression ]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "not", "isInlined", "isSend", "expression", "shouldInlineSend:"]
}, function ($methodClass){ return function (anIRReturn){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(anIRReturn)._isInlined())._not())){
if($core.assert($recv([$recv(anIRReturn)._expression()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["expression"]=1
//>>excludeEnd("ctx");
][0])._isSend())){
return $self._shouldInlineSend_($recv(anIRReturn)._expression());
} else {
return false;
}
} else {
return false;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInlineReturn:",{anIRReturn:anIRReturn})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "shouldInlineSend:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "shouldInlineSend: anIRSend\x0a\x09^ anIRSend isInlined not and: [\x0a\x09\x09IRSendInliner shouldInline: anIRSend ]",
referencedClasses: ["IRSendInliner"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "not", "isInlined", "shouldInline:"]
}, function ($methodClass){ return function (anIRSend){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(anIRSend)._isInlined())._not())){
return $recv($globals.IRSendInliner)._shouldInline_(anIRSend);
} else {
return false;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInlineSend:",{anIRSend:anIRSend})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "visitIRAssignment:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ (self shouldInlineAssignment: anIRAssignment)\x0a\x09\x09ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]\x0a\x09\x09ifFalse: [ super visitIRAssignment: anIRAssignment ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "shouldInlineAssignment:", "inlineAssignment:", "assignmentInliner", "visitIRAssignment:"]
}, function ($methodClass){ return function (anIRAssignment){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._shouldInlineAssignment_(anIRAssignment))){
return $recv($self._assignmentInliner())._inlineAssignment_(anIRAssignment);
} else {
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitIRAssignment_.call($self,anIRAssignment))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "visitIRNonLocalReturn:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09anIRNonLocalReturn scope canFlattenNonLocalReturns ifTrue: [\x0a\x09\x09| localReturn |\x0a\x09\x09anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.\x0a\x09\x09localReturn := self flattenedReturn: anIRNonLocalReturn.\x0a\x09\x09anIRNonLocalReturn replaceWith: localReturn.\x0a\x09\x09^ self visitIRReturn: localReturn ].\x0a\x09^ (self shouldInlineReturn: anIRNonLocalReturn)\x0a\x09\x09ifTrue: [ self nonLocalReturnInliner inlineReturn: anIRNonLocalReturn ]\x0a\x09\x09ifFalse: [ super visitIRNonLocalReturn: anIRNonLocalReturn ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "canFlattenNonLocalReturns", "scope", "removeNonLocalReturn:", "methodScope", "flattenedReturn:", "replaceWith:", "visitIRReturn:", "ifTrue:ifFalse:", "shouldInlineReturn:", "inlineReturn:", "nonLocalReturnInliner", "visitIRNonLocalReturn:"]
}, function ($methodClass){ return function (anIRNonLocalReturn){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$recv(anIRNonLocalReturn)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=1
//>>excludeEnd("ctx");
][0])._canFlattenNonLocalReturns())){
var localReturn;
$recv($recv([$recv(anIRNonLocalReturn)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=2
//>>excludeEnd("ctx");
][0])._methodScope())._removeNonLocalReturn_($recv(anIRNonLocalReturn)._scope());
localReturn=$self._flattenedReturn_(anIRNonLocalReturn);
$recv(anIRNonLocalReturn)._replaceWith_(localReturn);
return $self._visitIRReturn_(localReturn);
}
if($core.assert($self._shouldInlineReturn_(anIRNonLocalReturn))){
return $recv($self._nonLocalReturnInliner())._inlineReturn_(anIRNonLocalReturn);
} else {
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitIRNonLocalReturn_.call($self,anIRNonLocalReturn))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "visitIRReturn:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ (self shouldInlineReturn: anIRReturn)\x0a\x09\x09ifTrue: [ self returnInliner inlineReturn: anIRReturn ]\x0a\x09\x09ifFalse: [ super visitIRReturn: anIRReturn ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "shouldInlineReturn:", "inlineReturn:", "returnInliner", "visitIRReturn:"]
}, function ($methodClass){ return function (anIRReturn){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._shouldInlineReturn_(anIRReturn))){
return $recv($self._returnInliner())._inlineReturn_(anIRReturn);
} else {
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitIRReturn_.call($self,anIRReturn))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "visitIRSend:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ (self shouldInlineSend: anIRSend)\x0a\x09\x09ifTrue: [ self sendInliner inlineSend: anIRSend ]\x0a\x09\x09ifFalse: [ super visitIRSend: anIRSend ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "shouldInlineSend:", "inlineSend:", "sendInliner", "visitIRSend:"]
}, function ($methodClass){ return function (anIRSend){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._shouldInlineSend_(anIRSend))){
return $recv($self._sendInliner())._inlineSend_(anIRSend);
} else {
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitIRSend_.call($self,anIRSend))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliner);



$core.addClass("IRInliningJSTranslator", $globals.IRJSTranslator, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInliningJSTranslator.comment="I am a specialized JavaScript translator able to write inlined IR instructions to JavaScript stream (`JSStream` instance).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "visitIRInlinedClosure:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09self stream nextPutVars: (anIRInlinedClosure tempDeclarations collect: [ :each |\x0a\x09\x09each name asVariableName ]).\x0a\x09self visitAllChildren: anIRInlinedClosure",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutVars:", "stream", "collect:", "tempDeclarations", "asVariableName", "name", "visitAllChildren:"]
}, function ($methodClass){ return function (anIRInlinedClosure){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._stream())._nextPutVars_($recv($recv(anIRInlinedClosure)._tempDeclarations())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._name())._asVariableName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})));
$self._visitAllChildren_(anIRInlinedClosure);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliningJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRInlinedIfFalse:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedIfFalse"],
source: "visitIRInlinedIfFalse: anIRInlinedIfFalse\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: '!$core.assert('.\x0a\x09\x09self visit: anIRInlinedIfFalse dagChildren first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09then: [ self visit: anIRInlinedIfFalse dagChildren last ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutIf:then:", "stream", "nextPutAll:", "visit:", "first", "dagChildren", "last"]
}, function ($methodClass){ return function (anIRInlinedIfFalse){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["stream"]=1
//>>excludeEnd("ctx");
][0])._nextPutIf_then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["stream"]=2
//>>excludeEnd("ctx");
][0])._nextPutAll_("!$core.assert(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$self._visit_($recv([$recv(anIRInlinedIfFalse)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._first())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["visit:"]=1
//>>excludeEnd("ctx");
][0];
return $recv($self._stream())._nextPutAll_(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._visit_($recv($recv(anIRInlinedIfFalse)._dagChildren())._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfFalse:",{anIRInlinedIfFalse:anIRInlinedIfFalse})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliningJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRInlinedIfNilIfNotNil:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedIfNilIfNotNil"],
source: "visitIRInlinedIfNilIfNotNil: anIRInlinedIfNilIfNotNil\x0a\x09self stream\x0a\x09\x09nextPutIf: [\x0a\x09\x09\x09self visit: anIRInlinedIfNilIfNotNil dagChildren first.\x0a\x09\x09\x09self stream nextPutAll: ' == null || '.\x0a\x09\x09\x09self visit: anIRInlinedIfNilIfNotNil dagChildren first.\x0a\x09\x09\x09self stream nextPutAll: '.a$nil' ]\x0a\x09\x09then: [ self visit: anIRInlinedIfNilIfNotNil dagChildren second ]\x0a\x09\x09else: [ self visit: anIRInlinedIfNilIfNotNil dagChildren third ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutIf:then:else:", "stream", "visit:", "first", "dagChildren", "nextPutAll:", "second", "third"]
}, function ($methodClass){ return function (anIRInlinedIfNilIfNotNil){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["stream"]=1
//>>excludeEnd("ctx");
][0])._nextPutIf_then_else_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$self._visit_([$recv([$recv(anIRInlinedIfNilIfNotNil)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["first"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["visit:"]=1
//>>excludeEnd("ctx");
][0];
[$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["stream"]=2
//>>excludeEnd("ctx");
][0])._nextPutAll_(" == null || ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$self._visit_($recv([$recv(anIRInlinedIfNilIfNotNil)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["dagChildren"]=2
//>>excludeEnd("ctx");
][0])._first())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["visit:"]=2
//>>excludeEnd("ctx");
][0];
return $recv($self._stream())._nextPutAll_(".a$nil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$self._visit_($recv([$recv(anIRInlinedIfNilIfNotNil)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["dagChildren"]=3
//>>excludeEnd("ctx");
][0])._second())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["visit:"]=3
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._visit_($recv($recv(anIRInlinedIfNilIfNotNil)._dagChildren())._third());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfNilIfNotNil:",{anIRInlinedIfNilIfNotNil:anIRInlinedIfNilIfNotNil})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliningJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRInlinedIfTrue:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedIfTrue"],
source: "visitIRInlinedIfTrue: anIRInlinedIfTrue\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: '$core.assert('.\x0a\x09\x09self visit: anIRInlinedIfTrue dagChildren first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09then: [ self visit: anIRInlinedIfTrue dagChildren last ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutIf:then:", "stream", "nextPutAll:", "visit:", "first", "dagChildren", "last"]
}, function ($methodClass){ return function (anIRInlinedIfTrue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["stream"]=1
//>>excludeEnd("ctx");
][0])._nextPutIf_then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["stream"]=2
//>>excludeEnd("ctx");
][0])._nextPutAll_("$core.assert(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$self._visit_($recv([$recv(anIRInlinedIfTrue)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._first())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["visit:"]=1
//>>excludeEnd("ctx");
][0];
return $recv($self._stream())._nextPutAll_(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._visit_($recv($recv(anIRInlinedIfTrue)._dagChildren())._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrue:",{anIRInlinedIfTrue:anIRInlinedIfTrue})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliningJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRInlinedIfTrueIfFalse:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedIfTrueIfFalse"],
source: "visitIRInlinedIfTrueIfFalse: anIRInlinedIfTrueIfFalse\x0a\x09self stream\x0a\x09\x09nextPutIf: [\x0a\x09\x09\x09self stream nextPutAll: '$core.assert('.\x0a\x09\x09\x09self visit: anIRInlinedIfTrueIfFalse dagChildren first.\x0a\x09\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09then: [ self visit: anIRInlinedIfTrueIfFalse dagChildren second ]\x0a\x09\x09else: [ self visit: anIRInlinedIfTrueIfFalse dagChildren third ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutIf:then:else:", "stream", "nextPutAll:", "visit:", "first", "dagChildren", "second", "third"]
}, function ($methodClass){ return function (anIRInlinedIfTrueIfFalse){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["stream"]=1
//>>excludeEnd("ctx");
][0])._nextPutIf_then_else_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["stream"]=2
//>>excludeEnd("ctx");
][0])._nextPutAll_("$core.assert(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$self._visit_($recv([$recv(anIRInlinedIfTrueIfFalse)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._first())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["visit:"]=1
//>>excludeEnd("ctx");
][0];
return $recv($self._stream())._nextPutAll_(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$self._visit_($recv([$recv(anIRInlinedIfTrueIfFalse)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["dagChildren"]=2
//>>excludeEnd("ctx");
][0])._second())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["visit:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._visit_($recv($recv(anIRInlinedIfTrueIfFalse)._dagChildren())._third());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrueIfFalse:",{anIRInlinedIfTrueIfFalse:anIRInlinedIfTrueIfFalse})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInliningJSTranslator);



$core.addClass("IRSendInliner", $globals.Object, ["send", "translator"], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRSendInliner.comment="I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "and:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "and: anIRInstruction\x0a\x09self mustBeNiladicClosure: anIRInstruction.\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfTrueIfFalse new\x0a\x09\x09withBlock: anIRInstruction\x0a\x09\x09withBlock: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: (IRValue new value: false; yourself);\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)",
referencedClasses: ["IRInlinedIfTrueIfFalse", "IRClosure", "IRBlockSequence", "IRValue"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["mustBeNiladicClosure:", "inlinedSend:withBlock:withBlock:", "new", "scope:", "copy", "scope", "add:", "value:", "yourself"]
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$self._mustBeNiladicClosure_(anIRInstruction);
$1=[$recv($globals.IRInlinedIfTrueIfFalse)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$2=[$recv($globals.IRClosure)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
$recv($2)._scope_($recv($recv(anIRInstruction)._scope())._copy());
$3=[$recv($globals.IRBlockSequence)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0];
$4=$recv($globals.IRValue)._new();
$recv($4)._value_(false);
$recv($3)._add_([$recv($4)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0]);
[$recv($2)._add_([$recv($3)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
return $self._inlinedSend_withBlock_withBlock_($1,anIRInstruction,$recv($2)._yourself());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"and:",{anIRInstruction:anIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifFalse:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "ifFalse: anIRInstruction\x0a\x09self mustBeNiladicClosure: anIRInstruction.\x0a\x09^ self inlinedSend: IRInlinedIfFalse new withBlock: anIRInstruction",
referencedClasses: ["IRInlinedIfFalse"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["mustBeNiladicClosure:", "inlinedSend:withBlock:", "new"]
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._mustBeNiladicClosure_(anIRInstruction);
return $self._inlinedSend_withBlock_($recv($globals.IRInlinedIfFalse)._new(),anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{anIRInstruction:anIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifFalse:ifTrue:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifFalse: anIRInstruction ifTrue: anotherIRInstruction\x0a\x09self mustBeNiladicClosure: anIRInstruction.\x0a\x09self mustBeNiladicClosure: anotherIRInstruction.\x0a\x09^ self inlinedSend: IRInlinedIfTrueIfFalse new withBlock: anotherIRInstruction withBlock: anIRInstruction",
referencedClasses: ["IRInlinedIfTrueIfFalse"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["mustBeNiladicClosure:", "inlinedSend:withBlock:withBlock:", "new"]
}, function ($methodClass){ return function (anIRInstruction,anotherIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._mustBeNiladicClosure_(anIRInstruction)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["mustBeNiladicClosure:"]=1
//>>excludeEnd("ctx");
][0];
$self._mustBeNiladicClosure_(anotherIRInstruction);
return $self._inlinedSend_withBlock_withBlock_($recv($globals.IRInlinedIfTrueIfFalse)._new(),anotherIRInstruction,anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifNil:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "ifNil: anIRInstruction\x0a\x09self mustBeNiladicClosure: anIRInstruction.\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09withBlock: anIRInstruction\x0a\x09\x09withBlock: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send receiver;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)",
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["mustBeNiladicClosure:", "inlinedSend:withBlock:withBlock:", "new", "scope:", "copy", "scope", "add:", "receiver", "send", "yourself"]
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$self._mustBeNiladicClosure_(anIRInstruction);
$1=[$recv($globals.IRInlinedIfNilIfNotNil)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$2=[$recv($globals.IRClosure)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
$recv($2)._scope_($recv($recv(anIRInstruction)._scope())._copy());
$3=$recv($globals.IRBlockSequence)._new();
$recv($3)._add_($recv($self._send())._receiver());
[$recv($2)._add_([$recv($3)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
return $self._inlinedSend_withBlock_withBlock_($1,anIRInstruction,$recv($2)._yourself());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{anIRInstruction:anIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifNil:ifNotNil:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNil: anIRInstruction ifNotNil: anotherIRInstruction\x0a\x09self mustBeNiladicClosure: anIRInstruction.\x0a\x09self mustBeNiladicOrUnaryClosure: anotherIRInstruction.\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new withBlock: anIRInstruction withBlock: anotherIRInstruction",
referencedClasses: ["IRInlinedIfNilIfNotNil"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["mustBeNiladicClosure:", "mustBeNiladicOrUnaryClosure:", "inlinedSend:withBlock:withBlock:", "new"]
}, function ($methodClass){ return function (anIRInstruction,anotherIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._mustBeNiladicClosure_(anIRInstruction);
$self._mustBeNiladicOrUnaryClosure_(anotherIRInstruction);
return $self._inlinedSend_withBlock_withBlock_($recv($globals.IRInlinedIfNilIfNotNil)._new(),anIRInstruction,anotherIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifNotNil:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "ifNotNil: anIRInstruction\x0a\x09self mustBeNiladicOrUnaryClosure: anIRInstruction.\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09withBlock: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send receiver;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)\x0a\x09\x09withBlock: anIRInstruction",
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["mustBeNiladicOrUnaryClosure:", "inlinedSend:withBlock:withBlock:", "new", "scope:", "copy", "scope", "add:", "receiver", "send", "yourself"]
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$self._mustBeNiladicOrUnaryClosure_(anIRInstruction);
$1=[$recv($globals.IRInlinedIfNilIfNotNil)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$2=[$recv($globals.IRClosure)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
$recv($2)._scope_($recv($recv(anIRInstruction)._scope())._copy());
$3=$recv($globals.IRBlockSequence)._new();
$recv($3)._add_($recv($self._send())._receiver());
[$recv($2)._add_([$recv($3)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
return $self._inlinedSend_withBlock_withBlock_($1,$recv($2)._yourself(),anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{anIRInstruction:anIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifNotNil:ifNil:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNotNil: anIRInstruction ifNil: anotherIRInstruction\x0a\x09self mustBeNiladicOrUnaryClosure: anIRInstruction.\x0a\x09self mustBeNiladicClosure: anotherIRInstruction.\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new withBlock: anotherIRInstruction withBlock: anIRInstruction",
referencedClasses: ["IRInlinedIfNilIfNotNil"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["mustBeNiladicOrUnaryClosure:", "mustBeNiladicClosure:", "inlinedSend:withBlock:withBlock:", "new"]
}, function ($methodClass){ return function (anIRInstruction,anotherIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._mustBeNiladicOrUnaryClosure_(anIRInstruction);
$self._mustBeNiladicClosure_(anotherIRInstruction);
return $self._inlinedSend_withBlock_withBlock_($recv($globals.IRInlinedIfNilIfNotNil)._new(),anotherIRInstruction,anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifTrue:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "ifTrue: anIRInstruction\x0a\x09self mustBeNiladicClosure: anIRInstruction.\x0a\x09^ self inlinedSend: IRInlinedIfTrue new withBlock: anIRInstruction",
referencedClasses: ["IRInlinedIfTrue"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["mustBeNiladicClosure:", "inlinedSend:withBlock:", "new"]
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._mustBeNiladicClosure_(anIRInstruction);
return $self._inlinedSend_withBlock_($recv($globals.IRInlinedIfTrue)._new(),anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{anIRInstruction:anIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifTrue:ifFalse:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifTrue: anIRInstruction ifFalse: anotherIRInstruction\x0a\x09self mustBeNiladicClosure: anIRInstruction.\x0a\x09self mustBeNiladicClosure: anotherIRInstruction.\x0a\x09^ self inlinedSend: IRInlinedIfTrueIfFalse new withBlock: anIRInstruction withBlock: anotherIRInstruction",
referencedClasses: ["IRInlinedIfTrueIfFalse"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["mustBeNiladicClosure:", "inlinedSend:withBlock:withBlock:", "new"]
}, function ($methodClass){ return function (anIRInstruction,anotherIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._mustBeNiladicClosure_(anIRInstruction)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["mustBeNiladicClosure:"]=1
//>>excludeEnd("ctx");
][0];
$self._mustBeNiladicClosure_(anotherIRInstruction);
return $self._inlinedSend_withBlock_withBlock_($recv($globals.IRInlinedIfTrueIfFalse)._new(),anIRInstruction,anotherIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlineClosure:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure sequence statements |\x0a\x0a\x09inlinedClosure := self inlinedClosure.\x0a\x09inlinedClosure \x0a\x09\x09scope: anIRClosure scope;\x0a\x09\x09parent: anIRClosure parent.\x0a\x0a\x09\x22Add the possible temp declarations\x22\x0a\x09anIRClosure tempDeclarations do: [ :each |\x0a\x09\x09\x09inlinedClosure add: each ].\x0a\x0a\x09\x22Add a block sequence\x22\x0a\x09sequence := self inlinedSequence.\x0a\x0a\x09\x22Map the closure arguments to the receiver of the message send\x22\x0a\x09anIRClosure arguments do: [ :each |\x0a\x09\x09inlinedClosure add: (IRTempDeclaration new name: each; yourself).\x0a\x09\x09sequence add: (IRAssignment new\x0a\x09\x09\x09add: (IRVariable new variable: (ArgVar new scope: inlinedClosure scope; name: each; yourself));\x0a\x09\x09\x09add: self send receiver;\x0a\x09\x09\x09yourself) ].\x0a\x09\x09\x09\x0a\x09\x22To ensure the correct order of the closure instructions: first the temps then the sequence\x22\x0a\x09inlinedClosure add: sequence.\x0a\x0a\x09\x22Get all the statements\x22\x0a\x09statements := anIRClosure sequence dagChildren.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements allButLast do: [ :each | sequence add: each ].\x0a\x0a\x09\x09\x22Inlined closures change local returns into result value itself\x22\x0a\x09\x09sequence add: statements last asInlinedBlockResult ].\x0a\x0a\x09^ inlinedClosure",
referencedClasses: ["IRTempDeclaration", "IRAssignment", "IRVariable", "ArgVar"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inlinedClosure", "scope:", "scope", "parent:", "parent", "do:", "tempDeclarations", "add:", "inlinedSequence", "arguments", "name:", "new", "yourself", "variable:", "receiver", "send", "dagChildren", "sequence", "ifNotEmpty:", "allButLast", "asInlinedBlockResult", "last"]
}, function ($methodClass){ return function (anIRClosure){
var self=this,$self=this;
var inlinedClosure,sequence,statements;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
inlinedClosure=$self._inlinedClosure();
$1=inlinedClosure;
[$recv($1)._scope_([$recv(anIRClosure)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._parent_($recv(anIRClosure)._parent());
[$recv($recv(anIRClosure)._tempDeclarations())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv(inlinedClosure)._add_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["do:"]=1
//>>excludeEnd("ctx");
][0];
sequence=$self._inlinedSequence();
[$recv($recv(anIRClosure)._arguments())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=inlinedClosure;
$3=[$recv($globals.IRTempDeclaration)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
[$recv($3)._name_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["name:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($2)._add_([$recv($3)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["add:"]=2
//>>excludeEnd("ctx");
][0];
$4=sequence;
$5=[$recv($globals.IRAssignment)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
$6=[$recv($globals.IRVariable)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0];
$7=$recv($globals.ArgVar)._new();
$recv($7)._scope_($recv(inlinedClosure)._scope());
$recv($7)._name_(each);
[$recv($5)._add_($recv($6)._variable_([$recv($7)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["yourself"]=2
//>>excludeEnd("ctx");
][0]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["add:"]=4
//>>excludeEnd("ctx");
][0];
[$recv($5)._add_($recv($self._send())._receiver())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["add:"]=5
//>>excludeEnd("ctx");
][0];
return [$recv($4)._add_($recv($5)._yourself())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["add:"]=3
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["do:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(inlinedClosure)._add_(sequence)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=6
//>>excludeEnd("ctx");
][0];
statements=$recv($recv(anIRClosure)._sequence())._dagChildren();
$recv(statements)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(statements)._allButLast())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(sequence)._add_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["add:"]=7
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,4)});
//>>excludeEnd("ctx");
}));
return $recv(sequence)._add_($recv($recv(statements)._last())._asInlinedBlockResult());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return inlinedClosure;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,inlinedClosure:inlinedClosure,sequence:sequence,statements:statements})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlineSend:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "inlineSend: anIRSend\x0a\x09self send: anIRSend.\x0a\x09^ self\x0a\x09\x09perform: self send selector\x0a\x09\x09withArguments: self send arguments",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["send:", "perform:withArguments:", "selector", "send", "arguments"]
}, function ($methodClass){ return function (anIRSend){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._send_(anIRSend);
return $self._perform_withArguments_($recv([$self._send()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["send"]=1
//>>excludeEnd("ctx");
][0])._selector(),$recv($self._send())._arguments());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineSend:",{anIRSend:anIRSend})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlineSend:andReplace:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend", "anIRInstruction"],
source: "inlineSend: anIRSend andReplace: anIRInstruction\x0a\x09anIRInstruction replaceWith: anIRSend.\x0a\x09^ self inlineSend: anIRSend",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["replaceWith:", "inlineSend:"]
}, function ($methodClass){ return function (anIRSend,anIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anIRInstruction)._replaceWith_(anIRSend);
return $self._inlineSend_(anIRSend);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineSend:andReplace:",{anIRSend:anIRSend,anIRInstruction:anIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlinedClosure",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedClosure\x0a\x09^ IRInlinedClosure new",
referencedClasses: ["IRInlinedClosure"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.IRInlinedClosure)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedClosure",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlinedClosure:wrapFinalValueIn:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["closure", "aBlock"],
source: "inlinedClosure: closure wrapFinalValueIn: aBlock\x0a\x09| sequence final |\x0a\x0a\x09sequence := closure sequence.\x0a\x09\x0a\x09sequence dagChildren ifEmpty: [ sequence add: (IRVariable new\x0a\x09\x09variable: (closure scope pseudoVars at: 'nil');\x0a\x09\x09yourself) ].\x0a\x09final := sequence dagChildren last.\x0a\x09final yieldsValue ifTrue: [ sequence replace: final with: (aBlock value: final) ].\x0a\x0a\x09^ closure",
referencedClasses: ["IRVariable"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sequence", "ifEmpty:", "dagChildren", "add:", "variable:", "new", "at:", "pseudoVars", "scope", "yourself", "last", "ifTrue:", "yieldsValue", "replace:with:", "value:"]
}, function ($methodClass){ return function (closure,aBlock){
var self=this,$self=this;
var sequence,final;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
sequence=$recv(closure)._sequence();
$recv([$recv(sequence)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=sequence;
$2=$recv($globals.IRVariable)._new();
$recv($2)._variable_($recv($recv($recv(closure)._scope())._pseudoVars())._at_("nil"));
return $recv($1)._add_($recv($2)._yourself());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
final=$recv($recv(sequence)._dagChildren())._last();
if($core.assert($recv(final)._yieldsValue())){
$recv(sequence)._replace_with_(final,$recv(aBlock)._value_(final));
}
return closure;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedClosure:wrapFinalValueIn:",{closure:closure,aBlock:aBlock,sequence:sequence,final:final})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlinedSend:withBlock:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["inlinedSend", "anIRInstruction"],
source: "inlinedSend: inlinedSend withBlock: anIRInstruction\x0a\x09| inlinedClosure |\x0a\x0a\x09inlinedClosure := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send receiver;\x0a\x09\x09add: inlinedClosure.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09inlinedSend method internalVariables \x0a\x09\x09addAll: inlinedSend internalVariables.\x0a\x0a\x09^ inlinedSend",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visit:", "translator", "inlineClosure:", "add:", "receiver", "send", "replaceWith:", "addAll:", "internalVariables", "method"]
}, function ($methodClass){ return function (inlinedSend,anIRInstruction){
var self=this,$self=this;
var inlinedClosure;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inlinedClosure=$recv($self._translator())._visit_($self._inlineClosure_(anIRInstruction));
[$recv(inlinedSend)._add_($recv([$self._send()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["send"]=1
//>>excludeEnd("ctx");
][0])._receiver())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
$recv(inlinedSend)._add_(inlinedClosure);
$recv($self._send())._replaceWith_(inlinedSend);
$recv([$recv($recv(inlinedSend)._method())._internalVariables()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["internalVariables"]=1
//>>excludeEnd("ctx");
][0])._addAll_($recv(inlinedSend)._internalVariables());
return inlinedSend;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:withBlock:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,inlinedClosure:inlinedClosure})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlinedSend:withBlock:withBlock:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["inlinedSend", "anIRInstruction", "anotherIRInstruction"],
source: "inlinedSend: inlinedSend withBlock: anIRInstruction withBlock: anotherIRInstruction\x0a\x09| inlinedClosure1 inlinedClosure2 |\x0a\x0a\x09inlinedClosure1 := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x09inlinedClosure2 := self translator visit: (self inlineClosure: anotherIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send receiver;\x0a\x09\x09add: inlinedClosure1;\x0a\x09\x09add: inlinedClosure2.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09inlinedSend method internalVariables \x0a\x09\x09addAll: inlinedSend internalVariables.\x0a\x09\x09\x0a\x09^ inlinedSend",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visit:", "translator", "inlineClosure:", "add:", "receiver", "send", "replaceWith:", "addAll:", "internalVariables", "method"]
}, function ($methodClass){ return function (inlinedSend,anIRInstruction,anotherIRInstruction){
var self=this,$self=this;
var inlinedClosure1,inlinedClosure2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inlinedClosure1=[$recv([$self._translator()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["translator"]=1
//>>excludeEnd("ctx");
][0])._visit_([$self._inlineClosure_(anIRInstruction)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["inlineClosure:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["visit:"]=1
//>>excludeEnd("ctx");
][0];
inlinedClosure2=$recv($self._translator())._visit_($self._inlineClosure_(anotherIRInstruction));
[$recv(inlinedSend)._add_($recv([$self._send()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["send"]=1
//>>excludeEnd("ctx");
][0])._receiver())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(inlinedSend)._add_(inlinedClosure1)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=2
//>>excludeEnd("ctx");
][0];
$recv(inlinedSend)._add_(inlinedClosure2);
$recv($self._send())._replaceWith_(inlinedSend);
$recv([$recv($recv(inlinedSend)._method())._internalVariables()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["internalVariables"]=1
//>>excludeEnd("ctx");
][0])._addAll_($recv(inlinedSend)._internalVariables());
return inlinedSend;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:withBlock:withBlock:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction,inlinedClosure1:inlinedClosure1,inlinedClosure2:inlinedClosure2})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlinedSequence",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedSequence\x0a\x09^ IRInlinedSequence new",
referencedClasses: ["IRInlinedSequence"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.IRInlinedSequence)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedSequence",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inliningError:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "inliningError: aString\x0a\x09InliningError signal: aString",
referencedClasses: ["InliningError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["signal:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.InliningError)._signal_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inliningError:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "mustBeNiladicClosure:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "mustBeNiladicClosure: anIRInstruction\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "isClosure", "inliningError:", "=", "size", "arguments"]
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv(anIRInstruction)._isClosure())){
[$self._inliningError_("Message argument should be a block")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["inliningError:"]=1
//>>excludeEnd("ctx");
][0];
}
if(!$core.assert($recv($recv($recv(anIRInstruction)._arguments())._size()).__eq((0)))){
$self._inliningError_("Inlined block should have zero argument");
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mustBeNiladicClosure:",{anIRInstruction:anIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "mustBeNiladicOrUnaryClosure:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "mustBeNiladicOrUnaryClosure: anIRInstruction\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size <= 1 ifFalse: [ self inliningError: 'Inlined block should have at most one argument' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "isClosure", "inliningError:", "<=", "size", "arguments"]
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv(anIRInstruction)._isClosure())){
[$self._inliningError_("Message argument should be a block")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["inliningError:"]=1
//>>excludeEnd("ctx");
][0];
}
if(!$core.assert($recv($recv($recv(anIRInstruction)._arguments())._size()).__lt_eq((1)))){
$self._inliningError_("Inlined block should have at most one argument");
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mustBeNiladicOrUnaryClosure:",{anIRInstruction:anIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "or:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "or: anIRInstruction\x0a\x09self mustBeNiladicClosure: anIRInstruction.\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfTrueIfFalse new\x0a\x09\x09withBlock: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: (IRValue new value: true; yourself);\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)\x0a\x09\x09withBlock: anIRInstruction",
referencedClasses: ["IRInlinedIfTrueIfFalse", "IRClosure", "IRBlockSequence", "IRValue"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["mustBeNiladicClosure:", "inlinedSend:withBlock:withBlock:", "new", "scope:", "copy", "scope", "add:", "value:", "yourself"]
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$self._mustBeNiladicClosure_(anIRInstruction);
$1=[$recv($globals.IRInlinedIfTrueIfFalse)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$2=[$recv($globals.IRClosure)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
$recv($2)._scope_($recv($recv(anIRInstruction)._scope())._copy());
$3=[$recv($globals.IRBlockSequence)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0];
$4=$recv($globals.IRValue)._new();
$recv($4)._value_(true);
$recv($3)._add_([$recv($4)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0]);
[$recv($2)._add_([$recv($3)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
return $self._inlinedSend_withBlock_withBlock_($1,$recv($2)._yourself(),anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"or:",{anIRInstruction:anIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "send",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "send\x0a\x09^ send",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.send;

}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "send:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "send: anIRSend\x0a\x09send := anIRSend",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anIRSend){
var self=this,$self=this;
$self.send=anIRSend;
return self;

}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "translator",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "translator\x0a\x09^ translator",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.translator;

}; }),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "translator:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anASTTranslator"],
source: "translator: anASTTranslator\x0a\x09translator := anASTTranslator",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anASTTranslator){
var self=this,$self=this;
$self.translator=anASTTranslator;
return self;

}; }),
$globals.IRSendInliner);


$core.addMethod(
$core.method({
selector: "inlinedSelectors",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedSelectors\x0a\x09^ #(\x0a\x09\x09ifTrue: ifFalse: ifTrue:ifFalse: ifFalse:ifTrue:\x0a\x09\x09ifNil: ifNotNil: ifNil:ifNotNil: ifNotNil:ifNil:\x0a\x09\x09and: or:\x0a\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:", "and:", "or:"];

}; }),
$globals.IRSendInliner.a$cls);

$core.addMethod(
$core.method({
selector: "inlinedSelectorsNeedingIdempotentReceiver",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedSelectorsNeedingIdempotentReceiver\x0a\x09^ #(\x0a\x09\x09ifNil: ifNotNil: ifNil:ifNotNil: ifNotNil:ifNil:\x0a\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return ["ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"];

}; }),
$globals.IRSendInliner.a$cls);

$core.addMethod(
$core.method({
selector: "shouldInline:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "shouldInline: anIRSend\x0a\x09(self inlinedSelectors includes: anIRSend selector) ifFalse: [ ^ false ].\x0a\x09anIRSend receiver isSuper ifTrue: [ ^ false ].\x0a\x09^ anIRSend arguments allSatisfy: [ :each | each isClosure ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "includes:", "inlinedSelectors", "selector", "ifTrue:", "isSuper", "receiver", "allSatisfy:", "arguments", "isClosure"]
}, function ($methodClass){ return function (anIRSend){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv($self._inlinedSelectors())._includes_($recv(anIRSend)._selector()))){
return false;
}
if($core.assert($recv($recv(anIRSend)._receiver())._isSuper())){
return false;
}
return $recv($recv(anIRSend)._arguments())._allSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isClosure();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInline:",{anIRSend:anIRSend})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSendInliner.a$cls);


$core.addClass("IRAssignmentInliner", $globals.IRSendInliner, ["target"], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRAssignmentInliner.comment="I inline message sends together with assignments by moving them around into the inline closure instructions.\x0a\x0a##Example\x0a\x0a\x09foo\x0a\x09\x09| a |\x0a\x09\x09a := true ifTrue: [ 1 ]\x0a\x0aWill produce:\x0a\x0a\x09if($core.assert(true) {\x0a\x09\x09a = 1;\x0a\x09};";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "inlineAssignment:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "inlineAssignment: anIRAssignment\x0a\x09self target: anIRAssignment left.\x0a\x09^ self inlineSend: anIRAssignment right andReplace: anIRAssignment",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["target:", "left", "inlineSend:andReplace:", "right"]
}, function ($methodClass){ return function (anIRAssignment){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._target_($recv(anIRAssignment)._left());
return $self._inlineSend_andReplace_($recv(anIRAssignment)._right(),anIRAssignment);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineAssignment:",{anIRAssignment:anIRAssignment})});
//>>excludeEnd("ctx");
}; }),
$globals.IRAssignmentInliner);

$core.addMethod(
$core.method({
selector: "inlineClosure:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09^ self\x0a\x09\x09inlinedClosure: (super inlineClosure: anIRClosure)\x0a\x09\x09wrapFinalValueIn: [ :final |\x0a\x09\x09\x09IRAssignment new\x0a\x09\x09\x09\x09add: self target;\x0a\x09\x09\x09\x09add: final copy;\x0a\x09\x09\x09\x09yourself ]",
referencedClasses: ["IRAssignment"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inlinedClosure:wrapFinalValueIn:", "inlineClosure:", "add:", "new", "target", "copy", "yourself"]
}, function ($methodClass){ return function (anIRClosure){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $self._inlinedClosure_wrapFinalValueIn_([(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._inlineClosure_.call($self,anIRClosure))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0],(function(final){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($globals.IRAssignment)._new();
[$recv($1)._add_($self._target())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._add_($recv(final)._copy());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({final:final},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure})});
//>>excludeEnd("ctx");
}; }),
$globals.IRAssignmentInliner);

$core.addMethod(
$core.method({
selector: "target",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "target\x0a\x09^ target",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.target;

}; }),
$globals.IRAssignmentInliner);

$core.addMethod(
$core.method({
selector: "target:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "target: anObject\x0a\x09target := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.target=anObject;
return self;

}; }),
$globals.IRAssignmentInliner);



$core.addClass("IRNonLocalReturnInliner", $globals.IRSendInliner, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRNonLocalReturnInliner.comment="I inline message sends with inlined closure together with a return instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "inlineClosure:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09^ self\x0a\x09\x09inlinedClosure: (super inlineClosure: anIRClosure)\x0a\x09\x09wrapFinalValueIn: [ :final |\x0a\x09\x09\x09IRNonLocalReturn new\x0a\x09\x09\x09\x09add: final copy;\x0a\x09\x09\x09\x09yourself ]",
referencedClasses: ["IRNonLocalReturn"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inlinedClosure:wrapFinalValueIn:", "inlineClosure:", "add:", "new", "copy", "yourself"]
}, function ($methodClass){ return function (anIRClosure){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $self._inlinedClosure_wrapFinalValueIn_([(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._inlineClosure_.call($self,anIRClosure))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0],(function(final){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($globals.IRNonLocalReturn)._new();
$recv($1)._add_($recv(final)._copy());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({final:final},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure})});
//>>excludeEnd("ctx");
}; }),
$globals.IRNonLocalReturnInliner);

$core.addMethod(
$core.method({
selector: "inlineReturn:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "inlineReturn: anIRReturn\x0a\x09^ self inlineSend: anIRReturn expression andReplace: anIRReturn",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inlineSend:andReplace:", "expression"]
}, function ($methodClass){ return function (anIRReturn){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._inlineSend_andReplace_($recv(anIRReturn)._expression(),anIRReturn);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineReturn:",{anIRReturn:anIRReturn})});
//>>excludeEnd("ctx");
}; }),
$globals.IRNonLocalReturnInliner);



$core.addClass("IRReturnInliner", $globals.IRSendInliner, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRReturnInliner.comment="I inline message sends with inlined closure together with a return instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "inlineClosure:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09^ self\x0a\x09\x09inlinedClosure: (super inlineClosure: anIRClosure)\x0a\x09\x09wrapFinalValueIn: [ :final |\x0a\x09\x09\x09IRReturn new\x0a\x09\x09\x09\x09add: final copy;\x0a\x09\x09\x09\x09yourself ]",
referencedClasses: ["IRReturn"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inlinedClosure:wrapFinalValueIn:", "inlineClosure:", "add:", "new", "copy", "yourself"]
}, function ($methodClass){ return function (anIRClosure){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $self._inlinedClosure_wrapFinalValueIn_([(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._inlineClosure_.call($self,anIRClosure))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0],(function(final){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($globals.IRReturn)._new();
$recv($1)._add_($recv(final)._copy());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({final:final},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure})});
//>>excludeEnd("ctx");
}; }),
$globals.IRReturnInliner);

$core.addMethod(
$core.method({
selector: "inlineReturn:",
protocol: "inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "inlineReturn: anIRReturn\x0a\x09^ self inlineSend: anIRReturn expression andReplace: anIRReturn",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inlineSend:andReplace:", "expression"]
}, function ($methodClass){ return function (anIRReturn){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._inlineSend_andReplace_($recv(anIRReturn)._expression(),anIRReturn);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineReturn:",{anIRReturn:anIRReturn})});
//>>excludeEnd("ctx");
}; }),
$globals.IRReturnInliner);



$core.addClass("InliningCodeGenerator", $globals.CodeGenerator, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.InliningCodeGenerator.comment="I am a specialized code generator that uses inlining to produce more optimized JavaScript output";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "inliner",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inliner\x0a\x09^ IRInliner new",
referencedClasses: ["IRInliner"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.IRInliner)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inliner",{})});
//>>excludeEnd("ctx");
}; }),
$globals.InliningCodeGenerator);

$core.addMethod(
$core.method({
selector: "irTranslatorClass",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "irTranslatorClass\x0a\x09^ IRInliningJSTranslator",
referencedClasses: ["IRInliningJSTranslator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.IRInliningJSTranslator;

}; }),
$globals.InliningCodeGenerator);

$core.addMethod(
$core.method({
selector: "preInliner",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "preInliner\x0a\x09^ ASTPreInliner new",
referencedClasses: ["ASTPreInliner"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.ASTPreInliner)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"preInliner",{})});
//>>excludeEnd("ctx");
}; }),
$globals.InliningCodeGenerator);

$core.addMethod(
$core.method({
selector: "transformersDictionary",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "transformersDictionary\x0a\x09^ transformersDictionary ifNil: [ transformersDictionary := super transformersDictionary\x0a\x09\x09at: '3000-inlinerTagging' put: self preInliner;\x0a\x09\x09at: '6000-inliner' put: self inliner;\x0a\x09\x09at: '8000-irToJs' put: self irTranslator;\x0a\x09\x09yourself ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "at:put:", "transformersDictionary", "preInliner", "inliner", "irTranslator", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$self.transformersDictionary;
if($1 == null || $1.a$nil){
$2=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._transformersDictionary.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
[$recv($2)._at_put_("3000-inlinerTagging",$self._preInliner())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($2)._at_put_("6000-inliner",$self._inliner())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=2
//>>excludeEnd("ctx");
][0];
$recv($2)._at_put_("8000-irToJs",$self._irTranslator());
$self.transformersDictionary=$recv($2)._yourself();
return $self.transformersDictionary;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"transformersDictionary",{})});
//>>excludeEnd("ctx");
}; }),
$globals.InliningCodeGenerator);



$core.addClass("InliningError", $globals.SemanticError, [], "Compiler-Inlining");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.InliningError.comment="Instances of InliningError are signaled when using an `InliningCodeGenerator`in a `Compiler`.";
//>>excludeEnd("ide");


$core.addTrait("TIRInlinedVisitor", "Compiler-Inlining");
$core.addMethod(
$core.method({
selector: "visitIRInlinedClosure:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09^ self visitIRClosure: anIRInlinedClosure",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRClosure:"]
}, function ($methodClass){ return function (anIRInlinedClosure){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitIRClosure_(anIRInlinedClosure);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure})});
//>>excludeEnd("ctx");
}; }),
$globals.TIRInlinedVisitor);

$core.addMethod(
$core.method({
selector: "visitIRInlinedSequence:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09^ self visitIRSequence: anIRInlinedSequence",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRSequence:"]
}, function ($methodClass){ return function (anIRInlinedSequence){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitIRSequence_(anIRInlinedSequence);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedSequence:",{anIRInlinedSequence:anIRInlinedSequence})});
//>>excludeEnd("ctx");
}; }),
$globals.TIRInlinedVisitor);

$core.setTraitComposition([{trait: $globals.TIRInlinedVisitor}], $globals.IRInliner);
$core.setTraitComposition([{trait: $globals.TIRInlinedVisitor}], $globals.IRInliningJSTranslator);

$core.addMethod(
$core.method({
selector: "asInlinedBlockResult",
protocol: "*Compiler-Inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asInlinedBlockResult\x0a\x09^ self expression",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["expression"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._expression();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asInlinedBlockResult",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRBlockReturn);

$core.addMethod(
$core.method({
selector: "asInlinedBlockResult",
protocol: "*Compiler-Inlining",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asInlinedBlockResult\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.IRInstruction);

});
