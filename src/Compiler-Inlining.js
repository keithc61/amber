define(["amber/boot", "amber_core/Compiler-Core", "amber_core/Compiler-IR", "amber_core/Compiler-Semantic", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
var $core=$boot.api,nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage('Compiler-Inlining');
$core.packages["Compiler-Inlining"].innerEval = function (expr) { return eval(expr); };
$core.packages["Compiler-Inlining"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('IRInlinedAssignment', $globals.IRAssignment, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedAssignment.comment="I represent an inlined assignment instruction.";
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
return $recv(aVisitor)._visitIRInlinedAssignment_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.IRInlinedAssignment)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRInlinedAssignment: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedAssignment:"]
}),
$globals.IRInlinedAssignment);

$core.addMethod(
$core.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInlinedAssignment);



$core.addClass('IRInlinedClosure', $globals.IRClosure, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedClosure.comment="I represent an inlined closure instruction.";
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
$recv(aVisitor)._visitIRInlinedClosure_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.IRInlinedClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitIRInlinedClosure: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedClosure:"]
}),
$globals.IRInlinedClosure);

$core.addMethod(
$core.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInlinedClosure);



$core.addClass('IRInlinedReturn', $globals.IRReturn, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedReturn.comment="I represent an inlined local return instruction.";
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
return $recv(aVisitor)._visitIRInlinedReturn_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.IRInlinedReturn)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRInlinedReturn: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedReturn:"]
}),
$globals.IRInlinedReturn);

$core.addMethod(
$core.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInlinedReturn);



$core.addClass('IRInlinedSend', $globals.IRSend, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedSend.comment="I am the abstract super class of inlined message send instructions.";
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
$recv(aVisitor)._visitInlinedSend_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.IRInlinedSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitInlinedSend: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitInlinedSend:"]
}),
$globals.IRInlinedSend);

$core.addMethod(
$core.method({
selector: "internalVariables",
protocol: 'accessing',
fn: function (){
var self=this;
return [];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "internalVariables\x0a\x09\x22Answer a collection of internal variables required \x0a\x09to perform the inlining\x22\x0a\x09\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInlinedSend);

$core.addMethod(
$core.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInlinedSend);



$core.addClass('IRInlinedIfFalse', $globals.IRInlinedSend, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedIfFalse.comment="I represent an inlined `#ifFalse:` message send instruction.";
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
$recv(aVisitor)._visitIRInlinedIfFalse_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.IRInlinedIfFalse)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitIRInlinedIfFalse: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedIfFalse:"]
}),
$globals.IRInlinedIfFalse);



$core.addClass('IRInlinedIfNilIfNotNil', $globals.IRInlinedSend, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedIfNilIfNotNil.comment="I represent an inlined `#ifNil:ifNotNil:` message send instruction.";
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
$recv(aVisitor)._visitIRInlinedIfNilIfNotNil_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.IRInlinedIfNilIfNotNil)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitIRInlinedIfNilIfNotNil: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedIfNilIfNotNil:"]
}),
$globals.IRInlinedIfNilIfNotNil);

$core.addMethod(
$core.method({
selector: "internalVariables",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Array)._with_(self._receiverInternalVariable());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"internalVariables",{},$globals.IRInlinedIfNilIfNotNil)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "internalVariables\x0a\x09^ Array with: self receiverInternalVariable",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["with:", "receiverInternalVariable"]
}),
$globals.IRInlinedIfNilIfNotNil);

$core.addMethod(
$core.method({
selector: "receiverInternalVariable",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRVariable)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._variable_($recv($recv($globals.AliasVar)._new())._name_(self._receiverInternalVariableName()));
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiverInternalVariable",{},$globals.IRInlinedIfNilIfNotNil)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiverInternalVariable\x0a\x09^ IRVariable new\x0a\x09\x09variable: (AliasVar new name: self receiverInternalVariableName);\x0a\x09\x09yourself.",
referencedClasses: ["IRVariable", "AliasVar"],
//>>excludeEnd("ide");
messageSends: ["variable:", "new", "name:", "receiverInternalVariableName", "yourself"]
}),
$globals.IRInlinedIfNilIfNotNil);

$core.addMethod(
$core.method({
selector: "receiverInternalVariableName",
protocol: 'accessing',
fn: function (){
var self=this;
return "$receiver";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiverInternalVariableName\x0a\x09^ '$receiver'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInlinedIfNilIfNotNil);



$core.addClass('IRInlinedIfTrue', $globals.IRInlinedSend, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedIfTrue.comment="I represent an inlined `#ifTrue:` message send instruction.";
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
$recv(aVisitor)._visitIRInlinedIfTrue_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.IRInlinedIfTrue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrue: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedIfTrue:"]
}),
$globals.IRInlinedIfTrue);



$core.addClass('IRInlinedIfTrueIfFalse', $globals.IRInlinedSend, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedIfTrueIfFalse.comment="I represent an inlined `#ifTrue:ifFalse:` message send instruction.";
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
$recv(aVisitor)._visitIRInlinedIfTrueIfFalse_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.IRInlinedIfTrueIfFalse)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitIRInlinedIfTrueIfFalse: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedIfTrueIfFalse:"]
}),
$globals.IRInlinedIfTrueIfFalse);



$core.addClass('IRInlinedSequence', $globals.IRBlockSequence, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInlinedSequence.comment="I represent a (block) sequence inside an inlined closure instruction (instance of `IRInlinedClosure`).";
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
$recv(aVisitor)._visitIRInlinedSequence_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor},$globals.IRInlinedSequence)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09aVisitor visitIRInlinedSequence: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitIRInlinedSequence:"]
}),
$globals.IRInlinedSequence);

$core.addMethod(
$core.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInlinedSequence);



$core.addClass('IRInliner', $globals.IRVisitor, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInliner.comment="I visit an IR tree, inlining message sends and block closures.\x0a\x0aMessage selectors that can be inlined are answered by `IRSendInliner >> #inlinedSelectors`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "assignmentInliner",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRAssignmentInliner)._new();
$recv($1)._translator_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assignmentInliner",{},$globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "assignmentInliner\x0a\x09^ IRAssignmentInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
referencedClasses: ["IRAssignmentInliner"],
//>>excludeEnd("ide");
messageSends: ["translator:", "new", "yourself"]
}),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "returnInliner",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRReturnInliner)._new();
$recv($1)._translator_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"returnInliner",{},$globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "returnInliner\x0a\x09^ IRReturnInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
referencedClasses: ["IRReturnInliner"],
//>>excludeEnd("ide");
messageSends: ["translator:", "new", "yourself"]
}),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "sendInliner",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRSendInliner)._new();
$recv($1)._translator_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendInliner",{},$globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendInliner\x0a\x09^ IRSendInliner new\x0a\x09\x09translator: self;\x0a\x09\x09yourself",
referencedClasses: ["IRSendInliner"],
//>>excludeEnd("ide");
messageSends: ["translator:", "new", "yourself"]
}),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "shouldInlineAssignment:",
protocol: 'testing',
fn: function (anIRAssignment){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$1=$recv($recv($recv(anIRAssignment)._isInlined())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(anIRAssignment)._right();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["right"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._isSend();
return $recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._shouldInlineSend_($recv(anIRAssignment)._right());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInlineAssignment:",{anIRAssignment:anIRAssignment},$globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "shouldInlineAssignment: anIRAssignment\x0a\x09^ anIRAssignment isInlined not and: [\x0a\x09\x09anIRAssignment right isSend and: [\x0a\x09\x09\x09self shouldInlineSend: anIRAssignment right ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "not", "isInlined", "isSend", "right", "shouldInlineSend:"]
}),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "shouldInlineReturn:",
protocol: 'testing',
fn: function (anIRReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$1=$recv($recv($recv(anIRReturn)._isInlined())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(anIRReturn)._expression();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["expression"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._isSend();
return $recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._shouldInlineSend_($recv(anIRReturn)._expression());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInlineReturn:",{anIRReturn:anIRReturn},$globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "shouldInlineReturn: anIRReturn\x0a\x09^ anIRReturn isInlined not and: [\x0a\x09\x09anIRReturn expression isSend and: [\x0a\x09\x09\x09self shouldInlineSend: anIRReturn expression ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "not", "isInlined", "isSend", "expression", "shouldInlineSend:"]
}),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "shouldInlineSend:",
protocol: 'testing',
fn: function (anIRSend){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv(anIRSend)._isInlined())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.IRSendInliner)._shouldInline_(anIRSend);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInlineSend:",{anIRSend:anIRSend},$globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "shouldInlineSend: anIRSend\x0a\x09^ anIRSend isInlined not and: [\x0a\x09\x09IRSendInliner shouldInline: anIRSend ]",
referencedClasses: ["IRSendInliner"],
//>>excludeEnd("ide");
messageSends: ["and:", "not", "isInlined", "shouldInline:"]
}),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "visitIRAssignment:",
protocol: 'visiting',
fn: function (anIRAssignment){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._shouldInlineAssignment_(anIRAssignment);
if($core.assert($1)){
return $recv(self._assignmentInliner())._inlineAssignment_(anIRAssignment);
} else {
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.IRInliner.superclass||$boot.nilAsClass).fn.prototype._visitIRAssignment_.apply($recv(self), [anIRAssignment]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment},$globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ (self shouldInlineAssignment: anIRAssignment)\x0a\x09\x09ifTrue: [ self assignmentInliner inlineAssignment: anIRAssignment ]\x0a\x09\x09ifFalse: [ super visitIRAssignment: anIRAssignment ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "shouldInlineAssignment:", "inlineAssignment:", "assignmentInliner", "visitIRAssignment:"]
}),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "visitIRNonLocalReturn:",
protocol: 'visiting',
fn: function (anIRNonLocalReturn){
var self=this;
var localReturn;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5,$6,$7;
$2=$recv(anIRNonLocalReturn)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._canInlineNonLocalReturns();
if($core.assert($1)){
$4=$recv(anIRNonLocalReturn)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._methodScope();
$5=$recv(anIRNonLocalReturn)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=3;
//>>excludeEnd("ctx");
$recv($3)._removeNonLocalReturn_($5);
$6=$recv($globals.IRReturn)._new();
$recv($6)._scope_($recv(anIRNonLocalReturn)._scope());
localReturn=$recv($6)._yourself();
localReturn;
$recv($recv(anIRNonLocalReturn)._dagChildren())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(localReturn)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(anIRNonLocalReturn)._replaceWith_(localReturn);
return localReturn;
};
$7=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.IRInliner.superclass||$boot.nilAsClass).fn.prototype._visitIRNonLocalReturn_.apply($recv(self), [anIRNonLocalReturn]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn,localReturn:localReturn},$globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09| localReturn |\x0a\x09anIRNonLocalReturn scope canInlineNonLocalReturns ifTrue: [\x0a\x09\x09anIRNonLocalReturn scope methodScope removeNonLocalReturn: anIRNonLocalReturn scope.\x0a\x09\x09localReturn := IRReturn new\x0a\x09\x09\x09scope: anIRNonLocalReturn scope;\x0a\x09\x09\x09yourself.\x0a\x09\x09anIRNonLocalReturn dagChildren do: [ :each |\x0a\x09\x09\x09localReturn add: each ].\x0a\x09\x09anIRNonLocalReturn replaceWith: localReturn.\x0a\x09\x09^ localReturn ].\x0a\x09^ super visitIRNonLocalReturn: anIRNonLocalReturn",
referencedClasses: ["IRReturn"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "canInlineNonLocalReturns", "scope", "removeNonLocalReturn:", "methodScope", "scope:", "new", "yourself", "do:", "dagChildren", "add:", "replaceWith:", "visitIRNonLocalReturn:"]
}),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "visitIRReturn:",
protocol: 'visiting',
fn: function (anIRReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._shouldInlineReturn_(anIRReturn);
if($core.assert($1)){
return $recv(self._returnInliner())._inlineReturn_(anIRReturn);
} else {
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.IRInliner.superclass||$boot.nilAsClass).fn.prototype._visitIRReturn_.apply($recv(self), [anIRReturn]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn},$globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ (self shouldInlineReturn: anIRReturn)\x0a\x09\x09ifTrue: [ self returnInliner inlineReturn: anIRReturn ]\x0a\x09\x09ifFalse: [ super visitIRReturn: anIRReturn ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "shouldInlineReturn:", "inlineReturn:", "returnInliner", "visitIRReturn:"]
}),
$globals.IRInliner);

$core.addMethod(
$core.method({
selector: "visitIRSend:",
protocol: 'visiting',
fn: function (anIRSend){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._shouldInlineSend_(anIRSend);
if($core.assert($1)){
return $recv(self._sendInliner())._inlineSend_(anIRSend);
} else {
return (
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.IRInliner.superclass||$boot.nilAsClass).fn.prototype._visitIRSend_.apply($recv(self), [anIRSend]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend},$globals.IRInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ (self shouldInlineSend: anIRSend)\x0a\x09\x09ifTrue: [ self sendInliner inlineSend: anIRSend ]\x0a\x09\x09ifFalse: [ super visitIRSend: anIRSend ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "shouldInlineSend:", "inlineSend:", "sendInliner", "visitIRSend:"]
}),
$globals.IRInliner);



$core.addClass('IRInliningJSTranslator', $globals.IRJSTranslator, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInliningJSTranslator.comment="I am a specialized JavaScript translator able to write inlined IR instructions to JavaScript stream (`JSStream` instance).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "visitIRInlinedAssignment:",
protocol: 'visiting',
fn: function (anIRInlinedAssignment){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._visit_($recv(anIRInlinedAssignment)._right());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedAssignment:",{anIRInlinedAssignment:anIRInlinedAssignment},$globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedAssignment"],
source: "visitIRInlinedAssignment: anIRInlinedAssignment\x0a\x09self visit: anIRInlinedAssignment right",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visit:", "right"]
}),
$globals.IRInliningJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRInlinedClosure:",
protocol: 'visiting',
fn: function (anIRInlinedClosure){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._stream())._nextPutVars_($recv($recv(anIRInlinedClosure)._tempDeclarations())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._name())._asVariableName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})));
self._visitAll_($recv(anIRInlinedClosure)._dagChildren());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedClosure:",{anIRInlinedClosure:anIRInlinedClosure},$globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedClosure"],
source: "visitIRInlinedClosure: anIRInlinedClosure\x0a\x09self stream nextPutVars: (anIRInlinedClosure tempDeclarations collect: [ :each |\x0a\x09\x09each name asVariableName ]).\x0a\x09self visitAll: anIRInlinedClosure dagChildren",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutVars:", "stream", "collect:", "tempDeclarations", "asVariableName", "name", "visitAll:", "dagChildren"]
}),
$globals.IRInliningJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRInlinedIfFalse:",
protocol: 'visiting',
fn: function (anIRInlinedIfFalse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutIf_then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
$recv($2)._nextPutAll_("!$core.assert(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$4=$recv(anIRInlinedIfFalse)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["dagChildren"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._first();
self._visit_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
return $recv(self._stream())._nextPutAll_(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_($recv($recv(anIRInlinedIfFalse)._dagChildren())._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfFalse:",{anIRInlinedIfFalse:anIRInlinedIfFalse},$globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedIfFalse"],
source: "visitIRInlinedIfFalse: anIRInlinedIfFalse\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: '!$core.assert('.\x0a\x09\x09self visit: anIRInlinedIfFalse dagChildren first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09then: [ self visit: anIRInlinedIfFalse dagChildren last ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutIf:then:", "stream", "nextPutAll:", "visit:", "first", "dagChildren", "last"]
}),
$globals.IRInliningJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRInlinedIfNilIfNotNil:",
protocol: 'visiting',
fn: function (anIRInlinedIfNilIfNotNil){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$6,$5,$7,$8,$10,$9;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutIf_then_else_((function(){
var recvVarName;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
recvVarName=$recv(anIRInlinedIfNilIfNotNil)._receiverInternalVariableName();
recvVarName;
$2=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
$4="(".__comma(recvVarName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(" = ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._nextPutAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$6=$recv(anIRInlinedIfNilIfNotNil)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["dagChildren"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._first();
self._visit_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
$7=self._stream();
$8=$recv(") == null || ".__comma(recvVarName)).__comma(".isNil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
return $recv($7)._nextPutAll_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({recvVarName:recvVarName},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$10=$recv(anIRInlinedIfNilIfNotNil)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["dagChildren"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._second();
return self._visit_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["visit:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_($recv($recv(anIRInlinedIfNilIfNotNil)._dagChildren())._third());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfNilIfNotNil:",{anIRInlinedIfNilIfNotNil:anIRInlinedIfNilIfNotNil},$globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedIfNilIfNotNil"],
source: "visitIRInlinedIfNilIfNotNil: anIRInlinedIfNilIfNotNil\x0a\x09self stream\x0a\x09\x09nextPutIf: [\x0a\x09\x09\x09| recvVarName |\x0a\x09\x09\x09recvVarName := anIRInlinedIfNilIfNotNil receiverInternalVariableName.\x0a\x09\x09\x09self stream nextPutAll: '(', recvVarName, ' = '.\x0a\x09\x09\x09self visit: anIRInlinedIfNilIfNotNil dagChildren first.\x0a\x09\x09\x09self stream nextPutAll: ') == null || ', recvVarName, '.isNil' ]\x0a\x09\x09then: [ self visit: anIRInlinedIfNilIfNotNil dagChildren second ]\x0a\x09\x09else: [ self visit: anIRInlinedIfNilIfNotNil dagChildren third ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutIf:then:else:", "stream", "receiverInternalVariableName", "nextPutAll:", ",", "visit:", "first", "dagChildren", "second", "third"]
}),
$globals.IRInliningJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRInlinedIfTrue:",
protocol: 'visiting',
fn: function (anIRInlinedIfTrue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutIf_then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
$recv($2)._nextPutAll_("$core.assert(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$4=$recv(anIRInlinedIfTrue)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["dagChildren"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._first();
self._visit_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
return $recv(self._stream())._nextPutAll_(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_($recv($recv(anIRInlinedIfTrue)._dagChildren())._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrue:",{anIRInlinedIfTrue:anIRInlinedIfTrue},$globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedIfTrue"],
source: "visitIRInlinedIfTrue: anIRInlinedIfTrue\x0a\x09self stream nextPutIf: [\x0a\x09\x09self stream nextPutAll: '$core.assert('.\x0a\x09\x09self visit: anIRInlinedIfTrue dagChildren first.\x0a\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09then: [ self visit: anIRInlinedIfTrue dagChildren last ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutIf:then:", "stream", "nextPutAll:", "visit:", "first", "dagChildren", "last"]
}),
$globals.IRInliningJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRInlinedIfTrueIfFalse:",
protocol: 'visiting',
fn: function (anIRInlinedIfTrueIfFalse){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$6,$5;
$1=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stream"]=1;
//>>excludeEnd("ctx");
$recv($1)._nextPutIf_then_else_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stream"]=2;
//>>excludeEnd("ctx");
$recv($2)._nextPutAll_("$core.assert(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$4=$recv(anIRInlinedIfTrueIfFalse)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["dagChildren"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._first();
self._visit_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
return $recv(self._stream())._nextPutAll_(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(anIRInlinedIfTrueIfFalse)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["dagChildren"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._second();
return self._visit_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["visit:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_($recv($recv(anIRInlinedIfTrueIfFalse)._dagChildren())._third());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedIfTrueIfFalse:",{anIRInlinedIfTrueIfFalse:anIRInlinedIfTrueIfFalse},$globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedIfTrueIfFalse"],
source: "visitIRInlinedIfTrueIfFalse: anIRInlinedIfTrueIfFalse\x0a\x09self stream\x0a\x09\x09nextPutIf: [\x0a\x09\x09\x09self stream nextPutAll: '$core.assert('.\x0a\x09\x09\x09self visit: anIRInlinedIfTrueIfFalse dagChildren first.\x0a\x09\x09\x09self stream nextPutAll: ')' ]\x0a\x09\x09then: [ self visit: anIRInlinedIfTrueIfFalse dagChildren second ]\x0a\x09\x09else: [ self visit: anIRInlinedIfTrueIfFalse dagChildren third ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutIf:then:else:", "stream", "nextPutAll:", "visit:", "first", "dagChildren", "second", "third"]
}),
$globals.IRInliningJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRInlinedReturn:",
protocol: 'visiting',
fn: function (anIRInlinedReturn){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._visit_($recv(anIRInlinedReturn)._expression());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedReturn:",{anIRInlinedReturn:anIRInlinedReturn},$globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedReturn"],
source: "visitIRInlinedReturn: anIRInlinedReturn\x0a\x09self visit: anIRInlinedReturn expression",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visit:", "expression"]
}),
$globals.IRInliningJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRInlinedSequence:",
protocol: 'visiting',
fn: function (anIRInlinedSequence){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(anIRInlinedSequence)._dagChildren())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._stream())._nextPutStatementWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._visit_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRInlinedSequence:",{anIRInlinedSequence:anIRInlinedSequence},$globals.IRInliningJSTranslator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInlinedSequence"],
source: "visitIRInlinedSequence: anIRInlinedSequence\x0a\x09anIRInlinedSequence dagChildren do: [ :each |\x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "dagChildren", "nextPutStatementWith:", "stream", "visit:"]
}),
$globals.IRInliningJSTranslator);



$core.addClass('IRSendInliner', $globals.Object, ['send', 'translator'], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRSendInliner.comment="I inline some message sends and block closure arguments. I heavily rely on #perform: to dispatch inlining methods.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "ifFalse:",
protocol: 'inlining',
fn: function (anIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._inlinedSend_withBlock_($recv($globals.IRInlinedIfFalse)._new(),anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{anIRInstruction:anIRInstruction},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "ifFalse: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfFalse new withBlock: anIRInstruction",
referencedClasses: ["IRInlinedIfFalse"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:withBlock:", "new"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifFalse:ifTrue:",
protocol: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._perform_withArguments_("ifTrue:ifFalse:",[anotherIRInstruction,anIRInstruction]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifFalse: anIRInstruction ifTrue: anotherIRInstruction\x0a\x09^ self perform: #ifTrue:ifFalse: withArguments: { anotherIRInstruction. anIRInstruction }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["perform:withArguments:"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifNil:",
protocol: 'inlining',
fn: function (anIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$6,$4,$2;
$1=$recv($globals.IRInlinedIfNilIfNotNil)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$3=$recv($globals.IRClosure)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($3)._scope_($recv($recv(anIRInstruction)._scope())._copy());
$5=$recv($globals.IRBlockSequence)._new();
$recv($5)._add_($recv(self._send())._receiver());
$6=$recv($5)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$4=$6;
$recv($3)._add_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._yourself();
return self._inlinedSend_withBlock_withBlock_($1,anIRInstruction,$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{anIRInstruction:anIRInstruction},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "ifNil: anIRInstruction\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09withBlock: anIRInstruction\x0a\x09\x09withBlock: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send receiver;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)",
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:withBlock:withBlock:", "new", "scope:", "copy", "scope", "add:", "receiver", "send", "yourself"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifNil:ifNotNil:",
protocol: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._inlinedSend_withBlock_withBlock_($recv($globals.IRInlinedIfNilIfNotNil)._new(),anIRInstruction,anotherIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNil: anIRInstruction ifNotNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new withBlock: anIRInstruction withBlock: anotherIRInstruction",
referencedClasses: ["IRInlinedIfNilIfNotNil"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:withBlock:withBlock:", "new"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifNotNil:",
protocol: 'inlining',
fn: function (anIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$6,$4,$2;
$1=$recv($globals.IRInlinedIfNilIfNotNil)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$3=$recv($globals.IRClosure)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($3)._scope_($recv($recv(anIRInstruction)._scope())._copy());
$5=$recv($globals.IRBlockSequence)._new();
$recv($5)._add_($recv(self._send())._receiver());
$6=$recv($5)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$4=$6;
$recv($3)._add_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._yourself();
return self._inlinedSend_withBlock_withBlock_($1,$2,anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{anIRInstruction:anIRInstruction},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "ifNotNil: anIRInstruction\x0a\x09^ self\x0a\x09\x09inlinedSend: IRInlinedIfNilIfNotNil new\x0a\x09\x09withBlock: (IRClosure new\x0a\x09\x09\x09scope: anIRInstruction scope copy;\x0a\x09\x09\x09add: (IRBlockSequence new\x0a\x09\x09\x09\x09add: self send receiver;\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself)\x0a\x09\x09withBlock: anIRInstruction",
referencedClasses: ["IRInlinedIfNilIfNotNil", "IRClosure", "IRBlockSequence"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:withBlock:withBlock:", "new", "scope:", "copy", "scope", "add:", "receiver", "send", "yourself"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifNotNil:ifNil:",
protocol: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._inlinedSend_withBlock_withBlock_($recv($globals.IRInlinedIfNilIfNotNil)._new(),anotherIRInstruction,anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifNotNil: anIRInstruction ifNil: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfNilIfNotNil new withBlock: anotherIRInstruction withBlock: anIRInstruction",
referencedClasses: ["IRInlinedIfNilIfNotNil"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:withBlock:withBlock:", "new"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifTrue:",
protocol: 'inlining',
fn: function (anIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._inlinedSend_withBlock_($recv($globals.IRInlinedIfTrue)._new(),anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{anIRInstruction:anIRInstruction},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "ifTrue: anIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrue new withBlock: anIRInstruction",
referencedClasses: ["IRInlinedIfTrue"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:withBlock:", "new"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "ifTrue:ifFalse:",
protocol: 'inlining',
fn: function (anIRInstruction,anotherIRInstruction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._inlinedSend_withBlock_withBlock_($recv($globals.IRInlinedIfTrueIfFalse)._new(),anIRInstruction,anotherIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifTrue:ifFalse:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "ifTrue: anIRInstruction ifFalse: anotherIRInstruction\x0a\x09^ self inlinedSend: IRInlinedIfTrueIfFalse new withBlock: anIRInstruction withBlock: anotherIRInstruction",
referencedClasses: ["IRInlinedIfTrueIfFalse"],
//>>excludeEnd("ide");
messageSends: ["inlinedSend:withBlock:withBlock:", "new"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlineClosure:",
protocol: 'inlining',
fn: function (anIRClosure){
var self=this;
var inlinedClosure,sequence,statements;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$6,$4,$7,$9,$11,$13,$14,$15,$12,$10,$17,$19,$20,$18,$16,$8;
inlinedClosure=self._inlinedClosure();
$1=inlinedClosure;
$2=$recv(anIRClosure)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$recv($1)._scope_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope:"]=1;
//>>excludeEnd("ctx");
$recv($1)._parent_($recv(anIRClosure)._parent());
$recv($recv(anIRClosure)._tempDeclarations())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(inlinedClosure)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
sequence=self._inlinedSequence();
$recv($recv(anIRClosure)._arguments())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=inlinedClosure;
$5=$recv($globals.IRTempDeclaration)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($5)._name_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name:"]=1;
//>>excludeEnd("ctx");
$6=$recv($5)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$4=$6;
$recv($3)._add_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$7=sequence;
$9=$recv($globals.IRAssignment)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$11=$recv($globals.IRVariable)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$13=$recv($globals.AliasVar)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$14=$recv(inlinedClosure)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["scope"]=2;
//>>excludeEnd("ctx");
$recv($13)._scope_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["scope:"]=2;
//>>excludeEnd("ctx");
$recv($13)._name_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["name:"]=2;
//>>excludeEnd("ctx");
$15=$recv($13)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$12=$15;
$10=$recv($11)._variable_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["variable:"]=1;
//>>excludeEnd("ctx");
$recv($9)._add_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$17=$recv($globals.IRVariable)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=5;
//>>excludeEnd("ctx");
$19=$recv($globals.AliasVar)._new();
$recv($19)._scope_($recv(inlinedClosure)._scope());
$recv($19)._name_("$receiver");
$20=$recv($19)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
$18=$20;
$16=$recv($17)._variable_($18);
$recv($9)._add_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=5;
//>>excludeEnd("ctx");
$8=$recv($9)._yourself();
return $recv($7)._add_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=2;
//>>excludeEnd("ctx");
$recv(inlinedClosure)._add_(sequence);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=6;
//>>excludeEnd("ctx");
statements=$recv($recv(anIRClosure)._sequence())._dagChildren();
$recv(statements)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(statements)._allButLast())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(sequence)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["add:"]=7;
//>>excludeEnd("ctx");
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
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,inlinedClosure:inlinedClosure,sequence:sequence,statements:statements},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| inlinedClosure sequence statements |\x0a\x0a\x09inlinedClosure := self inlinedClosure.\x0a\x09inlinedClosure \x0a\x09\x09scope: anIRClosure scope;\x0a\x09\x09parent: anIRClosure parent.\x0a\x0a\x09\x22Add the possible temp declarations\x22\x0a\x09anIRClosure tempDeclarations do: [ :each |\x0a\x09\x09\x09inlinedClosure add: each ].\x0a\x0a\x09\x22Add a block sequence\x22\x0a\x09sequence := self inlinedSequence.\x0a\x0a\x09\x22Map the closure arguments to the receiver of the message send\x22\x0a\x09anIRClosure arguments do: [ :each |\x0a\x09\x09inlinedClosure add: (IRTempDeclaration new name: each; yourself).\x0a\x09\x09sequence add: (IRAssignment new\x0a\x09\x09\x09add: (IRVariable new variable: (AliasVar new scope: inlinedClosure scope; name: each; yourself));\x0a\x09\x09\x09add: (IRVariable new variable: (AliasVar new scope: inlinedClosure scope; name: '$receiver'; yourself));\x0a\x09\x09\x09yourself) ].\x0a\x09\x09\x09\x0a\x09\x22To ensure the correct order of the closure instructions: first the temps then the sequence\x22\x0a\x09inlinedClosure add: sequence.\x0a\x0a\x09\x22Get all the statements\x22\x0a\x09statements := anIRClosure sequence dagChildren.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements allButLast do: [ :each | sequence add: each ].\x0a\x0a\x09\x09\x22Inlined closures change local returns into result value itself\x22\x0a\x09\x09sequence add: statements last asInlinedBlockResult ].\x0a\x0a\x09^ inlinedClosure",
referencedClasses: ["IRTempDeclaration", "IRAssignment", "IRVariable", "AliasVar"],
//>>excludeEnd("ide");
messageSends: ["inlinedClosure", "scope:", "scope", "parent:", "parent", "do:", "tempDeclarations", "add:", "inlinedSequence", "arguments", "name:", "new", "yourself", "variable:", "dagChildren", "sequence", "ifNotEmpty:", "allButLast", "asInlinedBlockResult", "last"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlineSend:",
protocol: 'inlining',
fn: function (anIRSend){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
self._send_(anIRSend);
$2=self._send();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["send"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._selector();
return self._perform_withArguments_($1,$recv(self._send())._arguments());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineSend:",{anIRSend:anIRSend},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "inlineSend: anIRSend\x0a\x09self send: anIRSend.\x0a\x09^ self\x0a\x09\x09perform: self send selector\x0a\x09\x09withArguments: self send arguments",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["send:", "perform:withArguments:", "selector", "send", "arguments"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlinedClosure",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.IRInlinedClosure)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedClosure",{},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedClosure\x0a\x09^ IRInlinedClosure new",
referencedClasses: ["IRInlinedClosure"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlinedSend:withBlock:",
protocol: 'inlining',
fn: function (inlinedSend,anIRInstruction){
var self=this;
var inlinedClosure;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
$1=$recv(anIRInstruction)._isClosure();
if(!$core.assert($1)){
self._inliningError_("Message argument should be a block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["inliningError:"]=1;
//>>excludeEnd("ctx");
};
$2=$recv($recv($recv(anIRInstruction)._arguments())._size()).__eq((0));
if(!$core.assert($2)){
self._inliningError_("Inlined block should have zero argument");
};
inlinedClosure=$recv(self._translator())._visit_(self._inlineClosure_(anIRInstruction));
$4=self._send();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["send"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._receiver();
$recv(inlinedSend)._add_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(inlinedSend)._add_(inlinedClosure);
$recv(self._send())._replaceWith_(inlinedSend);
$5=$recv($recv(inlinedSend)._method())._internalVariables();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["internalVariables"]=1;
//>>excludeEnd("ctx");
$recv($5)._addAll_($recv(inlinedSend)._internalVariables());
return inlinedSend;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:withBlock:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,inlinedClosure:inlinedClosure},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["inlinedSend", "anIRInstruction"],
source: "inlinedSend: inlinedSend withBlock: anIRInstruction\x0a\x09| inlinedClosure |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anIRInstruction arguments size = 0 ifFalse: [ self inliningError: 'Inlined block should have zero argument' ].\x0a\x0a\x09inlinedClosure := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send receiver;\x0a\x09\x09add: inlinedClosure.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09inlinedSend method internalVariables \x0a\x09\x09addAll: inlinedSend internalVariables.\x0a\x0a\x09^ inlinedSend",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isClosure", "inliningError:", "=", "size", "arguments", "visit:", "translator", "inlineClosure:", "add:", "receiver", "send", "replaceWith:", "addAll:", "internalVariables", "method"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlinedSend:withBlock:withBlock:",
protocol: 'inlining',
fn: function (inlinedSend,anIRInstruction,anotherIRInstruction){
var self=this;
var inlinedClosure1,inlinedClosure2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5,$7;
$1=$recv(anIRInstruction)._isClosure();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isClosure"]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
self._inliningError_("Message argument should be a block");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["inliningError:"]=1;
//>>excludeEnd("ctx");
};
$2=$recv(anotherIRInstruction)._isClosure();
if(!$core.assert($2)){
self._inliningError_("Message argument should be a block");
};
$3=self._translator();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["translator"]=1;
//>>excludeEnd("ctx");
$4=self._inlineClosure_(anIRInstruction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["inlineClosure:"]=1;
//>>excludeEnd("ctx");
inlinedClosure1=$recv($3)._visit_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
inlinedClosure2=$recv(self._translator())._visit_(self._inlineClosure_(anotherIRInstruction));
$6=self._send();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["send"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._receiver();
$recv(inlinedSend)._add_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(inlinedSend)._add_(inlinedClosure1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv(inlinedSend)._add_(inlinedClosure2);
$recv(self._send())._replaceWith_(inlinedSend);
$7=$recv($recv(inlinedSend)._method())._internalVariables();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["internalVariables"]=1;
//>>excludeEnd("ctx");
$recv($7)._addAll_($recv(inlinedSend)._internalVariables());
return inlinedSend;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedSend:withBlock:withBlock:",{inlinedSend:inlinedSend,anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction,inlinedClosure1:inlinedClosure1,inlinedClosure2:inlinedClosure2},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["inlinedSend", "anIRInstruction", "anotherIRInstruction"],
source: "inlinedSend: inlinedSend withBlock: anIRInstruction withBlock: anotherIRInstruction\x0a\x09| inlinedClosure1 inlinedClosure2 |\x0a\x0a\x09anIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x09anotherIRInstruction isClosure ifFalse: [ self inliningError: 'Message argument should be a block' ].\x0a\x0a\x09inlinedClosure1 := self translator visit: (self inlineClosure: anIRInstruction).\x0a\x09inlinedClosure2 := self translator visit: (self inlineClosure: anotherIRInstruction).\x0a\x0a\x09inlinedSend\x0a\x09\x09add: self send receiver;\x0a\x09\x09add: inlinedClosure1;\x0a\x09\x09add: inlinedClosure2.\x0a\x0a\x09self send replaceWith: inlinedSend.\x0a\x09inlinedSend method internalVariables \x0a\x09\x09addAll: inlinedSend internalVariables.\x0a\x09\x09\x0a\x09^ inlinedSend",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isClosure", "inliningError:", "visit:", "translator", "inlineClosure:", "add:", "receiver", "send", "replaceWith:", "addAll:", "internalVariables", "method"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inlinedSequence",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.IRInlinedSequence)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedSequence",{},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedSequence\x0a\x09^ IRInlinedSequence new",
referencedClasses: ["IRInlinedSequence"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "inliningError:",
protocol: 'error handling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.InliningError)._signal_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inliningError:",{aString:aString},$globals.IRSendInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "inliningError: aString\x0a\x09InliningError signal: aString",
referencedClasses: ["InliningError"],
//>>excludeEnd("ide");
messageSends: ["signal:"]
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "send",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@send"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "send\x0a\x09^ send",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "send:",
protocol: 'accessing',
fn: function (anIRSend){
var self=this;
self["@send"]=anIRSend;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "send: anIRSend\x0a\x09send := anIRSend",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "translator",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@translator"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "translator\x0a\x09^ translator",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRSendInliner);

$core.addMethod(
$core.method({
selector: "translator:",
protocol: 'accessing',
fn: function (anASTTranslator){
var self=this;
self["@translator"]=anASTTranslator;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anASTTranslator"],
source: "translator: anASTTranslator\x0a\x09translator := anASTTranslator",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRSendInliner);


$core.addMethod(
$core.method({
selector: "inlinedSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
return ["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:", "ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedSelectors\x0a\x09^ #('ifTrue:' 'ifFalse:' 'ifTrue:ifFalse:' 'ifFalse:ifTrue:' 'ifNil:' 'ifNotNil:' 'ifNil:ifNotNil:' 'ifNotNil:ifNil:')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRSendInliner.klass);

$core.addMethod(
$core.method({
selector: "shouldInline:",
protocol: 'accessing',
fn: function (anIRSend){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._inlinedSelectors())._includes_($recv(anIRSend)._selector());
if(!$core.assert($1)){
return false;
};
return $recv($recv(anIRSend)._arguments())._allSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isClosure();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInline:",{anIRSend:anIRSend},$globals.IRSendInliner.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "shouldInline: anIRSend\x0a\x09(self inlinedSelectors includes: anIRSend selector) ifFalse: [ ^ false ].\x0a\x09^ anIRSend arguments allSatisfy: [ :each | each isClosure ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "includes:", "inlinedSelectors", "selector", "allSatisfy:", "arguments", "isClosure"]
}),
$globals.IRSendInliner.klass);


$core.addClass('IRAssignmentInliner', $globals.IRSendInliner, ['assignment'], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRAssignmentInliner.comment="I inline message sends together with assignments by moving them around into the inline closure instructions.\x0a\x0a##Example\x0a\x0a\x09foo\x0a\x09\x09| a |\x0a\x09\x09a := true ifTrue: [ 1 ]\x0a\x0aWill produce:\x0a\x0a\x09if($core.assert(true) {\x0a\x09\x09a = 1;\x0a\x09};";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "assignment",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@assignment"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "assignment\x0a\x09^ assignment",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRAssignmentInliner);

$core.addMethod(
$core.method({
selector: "assignment:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@assignment"]=aNode;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "assignment: aNode\x0a\x09assignment := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRAssignmentInliner);

$core.addMethod(
$core.method({
selector: "inlineAssignment:",
protocol: 'inlining',
fn: function (anIRAssignment){
var self=this;
var inlinedAssignment;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assignment_(anIRAssignment);
inlinedAssignment=$recv($globals.IRInlinedAssignment)._new();
$recv($recv(anIRAssignment)._dagChildren())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(inlinedAssignment)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anIRAssignment)._replaceWith_(inlinedAssignment);
self._inlineSend_($recv(inlinedAssignment)._right());
return inlinedAssignment;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineAssignment:",{anIRAssignment:anIRAssignment,inlinedAssignment:inlinedAssignment},$globals.IRAssignmentInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "inlineAssignment: anIRAssignment\x0a\x09| inlinedAssignment |\x0a\x09self assignment: anIRAssignment.\x0a\x09inlinedAssignment := IRInlinedAssignment new.\x0a\x09anIRAssignment dagChildren do: [ :each |\x0a\x09\x09inlinedAssignment add: each ].\x0a\x09anIRAssignment replaceWith: inlinedAssignment.\x0a\x09self inlineSend: inlinedAssignment right.\x0a\x09^ inlinedAssignment",
referencedClasses: ["IRInlinedAssignment"],
//>>excludeEnd("ide");
messageSends: ["assignment:", "new", "do:", "dagChildren", "add:", "replaceWith:", "inlineSend:", "right"]
}),
$globals.IRAssignmentInliner);

$core.addMethod(
$core.method({
selector: "inlineClosure:",
protocol: 'inlining',
fn: function (anIRClosure){
var self=this;
var closure,statements;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
closure=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.IRAssignmentInliner.superclass||$boot.nilAsClass).fn.prototype._inlineClosure_.apply($recv(self), [anIRClosure]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
statements=$recv($recv(closure)._sequence())._dagChildren();
$recv(statements)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(statements)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._yieldsValue();
if($core.assert($1)){
$3=$recv(statements)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=2;
//>>excludeEnd("ctx");
$5=$recv($globals.IRAssignment)._new();
$recv($5)._add_($recv(self._assignment())._left());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($5)._add_($recv($recv(statements)._last())._copy());
$4=$recv($5)._yourself();
return $recv($3)._replaceWith_($4);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return closure;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,closure:closure,statements:statements},$globals.IRAssignmentInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| closure statements |\x0a\x0a\x09closure := super inlineClosure: anIRClosure.\x0a\x09statements := closure sequence dagChildren.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last yieldsValue ifTrue: [\x0a\x09\x09\x09statements last replaceWith: (IRAssignment new\x0a\x09\x09\x09\x09add: self assignment left;\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself) ] ].\x0a\x0a\x09^ closure",
referencedClasses: ["IRAssignment"],
//>>excludeEnd("ide");
messageSends: ["inlineClosure:", "dagChildren", "sequence", "ifNotEmpty:", "ifTrue:", "yieldsValue", "last", "replaceWith:", "add:", "new", "left", "assignment", "copy", "yourself"]
}),
$globals.IRAssignmentInliner);



$core.addClass('IRReturnInliner', $globals.IRSendInliner, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRReturnInliner.comment="I inline message sends with inlined closure together with a return instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "inlineClosure:",
protocol: 'inlining',
fn: function (anIRClosure){
var self=this;
var closure,statements;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
closure=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.IRReturnInliner.superclass||$boot.nilAsClass).fn.prototype._inlineClosure_.apply($recv(self), [anIRClosure]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
statements=$recv($recv(closure)._sequence())._dagChildren();
$recv(statements)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(statements)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._yieldsValue();
if($core.assert($1)){
$3=$recv(statements)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=2;
//>>excludeEnd("ctx");
$5=$recv($globals.IRReturn)._new();
$recv($5)._add_($recv($recv(statements)._last())._copy());
$4=$recv($5)._yourself();
return $recv($3)._replaceWith_($4);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return closure;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineClosure:",{anIRClosure:anIRClosure,closure:closure,statements:statements},$globals.IRReturnInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "inlineClosure: anIRClosure\x0a\x09| closure statements |\x0a\x0a\x09closure := super inlineClosure: anIRClosure.\x0a\x09statements := closure sequence dagChildren.\x0a\x09\x0a\x09statements ifNotEmpty: [\x0a\x09\x09statements last yieldsValue ifTrue: [\x0a\x09\x09\x09statements last replaceWith: (IRReturn new\x0a\x09\x09\x09\x09add: statements last copy;\x0a\x09\x09\x09\x09yourself)] ].\x0a\x0a\x09^ closure",
referencedClasses: ["IRReturn"],
//>>excludeEnd("ide");
messageSends: ["inlineClosure:", "dagChildren", "sequence", "ifNotEmpty:", "ifTrue:", "yieldsValue", "last", "replaceWith:", "add:", "new", "copy", "yourself"]
}),
$globals.IRReturnInliner);

$core.addMethod(
$core.method({
selector: "inlineReturn:",
protocol: 'inlining',
fn: function (anIRReturn){
var self=this;
var return_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return_=self._inlinedReturn();
$recv($recv(anIRReturn)._dagChildren())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(return_)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anIRReturn)._replaceWith_(return_);
self._inlineSend_($recv(return_)._expression());
return return_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlineReturn:",{anIRReturn:anIRReturn,return_:return_},$globals.IRReturnInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "inlineReturn: anIRReturn\x0a\x09| return |\x0a\x09return := self inlinedReturn.\x0a\x09anIRReturn dagChildren do: [ :each |\x0a\x09\x09return add: each ].\x0a\x09anIRReturn replaceWith: return.\x0a\x09self inlineSend: return expression.\x0a\x09^ return",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inlinedReturn", "do:", "dagChildren", "add:", "replaceWith:", "inlineSend:", "expression"]
}),
$globals.IRReturnInliner);

$core.addMethod(
$core.method({
selector: "inlinedReturn",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.IRInlinedReturn)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inlinedReturn",{},$globals.IRReturnInliner)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inlinedReturn\x0a\x09^ IRInlinedReturn new",
referencedClasses: ["IRInlinedReturn"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.IRReturnInliner);



$core.addClass('InliningCodeGenerator', $globals.CodeGenerator, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.InliningCodeGenerator.comment="I am a specialized code generator that uses inlining to produce more optimized JavaScript output";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "compileNode:",
protocol: 'compiling',
fn: function (aNode){
var self=this;
var ir,stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(self._semanticAnalyzer())._visit_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
ir=$recv(self._translator())._visit_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=2;
//>>excludeEnd("ctx");
$recv(self._inliner())._visit_(ir);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=3;
//>>excludeEnd("ctx");
$1=self._irTranslator();
$recv($1)._currentClass_(self._currentClass());
$recv($1)._visit_(ir);
return $recv($1)._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,ir:ir,stream:stream},$globals.InliningCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09self inliner visit: ir.\x0a\x0a\x09^ self irTranslator\x0a\x09\x09currentClass: self currentClass;\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visit:", "semanticAnalyzer", "translator", "inliner", "currentClass:", "irTranslator", "currentClass", "contents"]
}),
$globals.InliningCodeGenerator);

$core.addMethod(
$core.method({
selector: "inliner",
protocol: 'compiling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.IRInliner)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inliner",{},$globals.InliningCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inliner\x0a\x09^ IRInliner new",
referencedClasses: ["IRInliner"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.InliningCodeGenerator);

$core.addMethod(
$core.method({
selector: "irTranslator",
protocol: 'compiling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.IRInliningJSTranslator)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{},$globals.InliningCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "irTranslator\x0a\x09^ IRInliningJSTranslator new",
referencedClasses: ["IRInliningJSTranslator"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.InliningCodeGenerator);



$core.addClass('InliningError', $globals.SemanticError, [], 'Compiler-Inlining');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.InliningError.comment="Instances of InliningError are signaled when using an `InliningCodeGenerator`in a `Compiler`.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "asInlinedBlockResult",
protocol: '*Compiler-Inlining',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._expression();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asInlinedBlockResult",{},$globals.IRBlockReturn)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asInlinedBlockResult\x0a\x09^ self expression",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["expression"]
}),
$globals.IRBlockReturn);

$core.addMethod(
$core.method({
selector: "asInlinedBlockResult",
protocol: '*Compiler-Inlining',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asInlinedBlockResult\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IRInstruction);

});
