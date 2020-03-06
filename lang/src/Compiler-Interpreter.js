define(["amber/boot", "require", "amber/core/Compiler-AST", "amber/core/Compiler-Core", "amber/core/Compiler-Semantic", "amber/core/Kernel-Exceptions", "amber/core/Kernel-Methods", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Compiler-Interpreter");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("AIBlockClosure", $globals.BlockClosure, ["node", "outerContext"], "Compiler-Interpreter");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AIBlockClosure.comment="I am a special `BlockClosure` subclass used by an interpreter to interpret a block node.\x0a\x0aWhile I am polymorphic with `BlockClosure`, some methods such as `#new` will raise interpretation errors. Unlike a `BlockClosure`, my instance are not JavaScript functions.\x0a\x0aEvaluating an instance will result in interpreting the `node` instance variable (instance of `BlockNode`).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "applyTo:arguments:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aCollection"],
source: "applyTo: anObject arguments: aCollection\x0a\x09self interpreterError",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["interpreterError"]
}, function ($methodClass){ return function (anObject,aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._interpreterError();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyTo:arguments:",{anObject:anObject,aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "compiledSource",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compiledSource\x0a\x09\x22Unlike blocks, the receiver doesn't represent a JS function\x22\x0a\x09\x0a\x09^ '[ AST Block closure ]'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "[ AST Block closure ]";

}; }),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "currySelf",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currySelf\x0a\x09self interpreterError",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["interpreterError"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._interpreterError();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currySelf",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "initializeWithContext:node:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext", "aNode"],
source: "initializeWithContext: aContext node: aNode\x0a\x09node := aNode.\x0a\x09outerContext := aContext",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aContext,aNode){
var self=this,$self=this;
$self.node=aNode;
$self.outerContext=aContext;
return self;

}; }),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "interpreterError",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "interpreterError\x0a\x09ASTInterpreterError signal: 'Method cannot be interpreted by the interpreter.'",
referencedClasses: ["ASTInterpreterError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["signal:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.ASTInterpreterError)._signal_("Method cannot be interpreted by the interpreter.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpreterError",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "numArgs",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numArgs\x0a\x09^ node temps size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["size", "temps"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self.node)._temps())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numArgs",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "value",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ self valueWithPossibleArguments: #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valueWithPossibleArguments:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._valueWithPossibleArguments_([]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArgument"],
source: "value: anArgument\x0a\x09^ self valueWithPossibleArguments: {anArgument}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valueWithPossibleArguments:"]
}, function ($methodClass){ return function (anArgument){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._valueWithPossibleArguments_([anArgument]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anArgument:anArgument})});
//>>excludeEnd("ctx");
}; }),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "value:value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArgument", "secondArgument"],
source: "value: firstArgument value: secondArgument\x0a\x09^ self valueWithPossibleArguments: {firstArgument . secondArgument}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valueWithPossibleArguments:"]
}, function ($methodClass){ return function (firstArgument,secondArgument){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._valueWithPossibleArguments_([firstArgument,secondArgument]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArgument:firstArgument,secondArgument:secondArgument})});
//>>excludeEnd("ctx");
}; }),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "value:value:value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArgument", "secondArgument", "thirdArgument"],
source: "value: firstArgument value: secondArgument value: thirdArgument\x0a\x09^ self valueWithPossibleArguments: {firstArgument . secondArgument . thirdArgument}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valueWithPossibleArguments:"]
}, function ($methodClass){ return function (firstArgument,secondArgument,thirdArgument){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._valueWithPossibleArguments_([firstArgument,secondArgument,thirdArgument]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArgument:firstArgument,secondArgument:secondArgument,thirdArgument:thirdArgument})});
//>>excludeEnd("ctx");
}; }),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "valueWithPossibleArguments:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09| context sequenceNode |\x0a\x09context := outerContext newInnerContext.\x0a\x0a\x09\x22Interpret a copy of the sequence node to avoid creating a new AIBlockClosure\x22\x0a\x09sequenceNode := node sequenceNode copy\x0a\x09\x09parent: nil;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09\x22Define locals in the context\x22\x0a\x09sequenceNode temps do: [ :each |\x0a\x09\x09context defineLocal: each ].\x0a\x09\x09\x0a\x09\x22Populate the arguments into the context locals\x22\x09\x0a\x09node parameters withIndexDo: [ :each :index |\x0a\x09\x09context defineLocal: each.\x0a\x09\x09context localAt: each put: (aCollection at: index ifAbsent: [ nil ]) ].\x0a\x0a\x09\x22Interpret the first node of the BlockSequenceNode\x22\x0a\x09context interpreter\x0a\x09\x09node: sequenceNode;\x0a\x09\x09enterNode;\x0a\x09\x09proceed.\x0a\x09\x09\x0a\x09outerContext interpreter\x0a\x09\x09setNonLocalReturnFromContext: context.\x0a\x09\x09\x0a\x09^ context interpreter pop",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newInnerContext", "parent:", "copy", "sequenceNode", "yourself", "do:", "temps", "defineLocal:", "withIndexDo:", "parameters", "localAt:put:", "at:ifAbsent:", "node:", "interpreter", "enterNode", "proceed", "setNonLocalReturnFromContext:", "pop"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
var context,sequenceNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
context=$recv($self.outerContext)._newInnerContext();
$1=$recv($recv($self.node)._sequenceNode())._copy();
$recv($1)._parent_(nil);
sequenceNode=$recv($1)._yourself();
$recv($recv(sequenceNode)._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv(context)._defineLocal_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["defineLocal:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv($self.node)._parameters())._withIndexDo_((function(each,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(context)._defineLocal_(each);
return $recv(context)._localAt_put_(each,$recv(aCollection)._at_ifAbsent_(index,(function(){
return nil;

})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=[$recv(context)._interpreter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["interpreter"]=1
//>>excludeEnd("ctx");
][0];
$recv($2)._node_(sequenceNode);
$recv($2)._enterNode();
$recv($2)._proceed();
$recv([$recv($self.outerContext)._interpreter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["interpreter"]=2
//>>excludeEnd("ctx");
][0])._setNonLocalReturnFromContext_(context);
return $recv($recv(context)._interpreter())._pop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection,context:context,sequenceNode:sequenceNode})});
//>>excludeEnd("ctx");
}; }),
$globals.AIBlockClosure);


$core.addMethod(
$core.method({
selector: "forContext:node:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext", "aNode"],
source: "forContext: aContext node: aNode\x0a\x09^ self new\x0a\x09\x09initializeWithContext: aContext node: aNode;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initializeWithContext:node:", "new", "yourself"]
}, function ($methodClass){ return function (aContext,aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._initializeWithContext_node_(aContext,aNode);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forContext:node:",{aContext:aContext,aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.AIBlockClosure.a$cls);


$core.addClass("AIContext", $globals.Object, ["outerContext", "innerContext", "pc", "locals", "selector", "index", "sendIndexes", "evaluatedSelector", "ast", "interpreter", "supercall"], "Compiler-Interpreter");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AIContext.comment="I am like a `MethodContext`, used by the `ASTInterpreter`.\x0aUnlike a `MethodContext`, my instances are not read-only.\x0a\x0aWhen debugging, my instances are created by copying the current `MethodContext` (thisContext)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "arguments",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ self ast arguments collect: [ :each |\x0a\x09\x09self localAt: each ifAbsent: [ self error: 'Argument not in context' ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "arguments", "ast", "localAt:ifAbsent:", "error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._ast())._arguments())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._localAt_ifAbsent_(each,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._error_("Argument not in context");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "ast",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ast\x0a\x09self isBlockContext ifTrue: [ \x0a\x09\x09^ self outerContext ifNotNil: [ :context | context ast ] ].\x0a\x0a\x09ast ifNil: [ self initializeAST ].\x0a\x09^ ast",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isBlockContext", "ifNotNil:", "outerContext", "ast", "ifNil:", "initializeAST"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=$self._isBlockContext();
if($core.assert($1)){
$2=$self._outerContext();
if(($receiver = $2) == null || $receiver.a$nil){
return $2;
} else {
var context;
context=$receiver;
return $recv(context)._ast();
}
}
$3=$self.ast;
if(($receiver = $3) == null || $receiver.a$nil){
$self._initializeAST();
} else {
$3;
}
return $self.ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ast",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "basicLocalAt:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicLocalAt: aString\x0a\x09^ self locals at: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:", "locals"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._locals())._at_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicLocalAt:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "basicLocalAt:put:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "basicLocalAt: aString put: anObject\x0a\x09self locals at: aString put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "locals"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._locals())._at_put_(aString,anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicLocalAt:put:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "basicReceiver",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicReceiver\x0a\x09^ self localAt: 'self'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["localAt:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._localAt_("self");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicReceiver",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "defineLocal:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "defineLocal: aString\x0a\x09self locals at: aString put: nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "locals"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._locals())._at_put_(aString,nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defineLocal:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "evaluate:on:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anEvaluator"],
source: "evaluate: aString on: anEvaluator\x0a\x09^ anEvaluator evaluate: aString context: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["evaluate:context:"]
}, function ($methodClass){ return function (aString,anEvaluator){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anEvaluator)._evaluate_context_(aString,self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:on:",{aString:aString,anEvaluator:anEvaluator})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "evaluateNode:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "evaluateNode: aNode\x0a\x09^ ASTInterpreter new\x0a\x09\x09context: self;\x0a\x09\x09node: aNode;\x0a\x09\x09enterNode;\x0a\x09\x09proceed;\x0a\x09\x09result",
referencedClasses: ["ASTInterpreter"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["context:", "new", "node:", "enterNode", "proceed", "result"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.ASTInterpreter)._new();
$recv($1)._context_(self);
$recv($1)._node_(aNode);
$recv($1)._enterNode();
$recv($1)._proceed();
return $recv($1)._result();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluateNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "evaluatedSelector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "evaluatedSelector\x0a\x09^ evaluatedSelector",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.evaluatedSelector;

}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "evaluatedSelector:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "evaluatedSelector: aString\x0a\x09evaluatedSelector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.evaluatedSelector=aString;
return self;

}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "home",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "home\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return nil;

}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "index",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "index\x0a\x09^ index ifNil: [ 0 ]",
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
$1=$self.index;
if(($receiver = $1) == null || $receiver.a$nil){
return (0);
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"index",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

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
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "initializeAST",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeAST\x0a\x09ast := self method ast.\x0a\x09(SemanticAnalyzer on: self method origin)\x0a\x09\x09visit: ast",
referencedClasses: ["SemanticAnalyzer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ast", "method", "visit:", "on:", "origin"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.ast=$recv([$self._method()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["method"]=1
//>>excludeEnd("ctx");
][0])._ast();
$recv($recv($globals.SemanticAnalyzer)._on_($recv($self._method())._origin()))._visit_($self.ast);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeAST",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "initializeFromMethodContext:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethodContext"],
source: "initializeFromMethodContext: aMethodContext\x0a\x0a\x09self\x0a\x09\x09evaluatedSelector: aMethodContext evaluatedSelector;\x0a\x09\x09index: aMethodContext index;\x0a\x09\x09sendIndexes: aMethodContext sendIndexes;\x0a\x09\x09receiver: aMethodContext receiver;\x0a\x09\x09supercall: aMethodContext supercall;\x0a\x09\x09selector: aMethodContext selector.\x0a\x09\x09\x0a\x09aMethodContext outerContext ifNotNil: [ :outer |\x0a\x09\x09\x22If the method context is nil, the block was defined in JS, so ignore it\x22\x0a\x09\x09outer methodContext ifNotNil: [\x0a\x09\x09\x09self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].\x0a\x09\x09\x09aMethodContext locals keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09self locals at: key put: value ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["evaluatedSelector:", "evaluatedSelector", "index:", "index", "sendIndexes:", "sendIndexes", "receiver:", "receiver", "supercall:", "supercall", "selector:", "selector", "ifNotNil:", "outerContext", "methodContext", "outerContext:", "fromMethodContext:", "class", "keysAndValuesDo:", "locals", "at:put:"]
}, function ($methodClass){ return function (aMethodContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$self._evaluatedSelector_($recv(aMethodContext)._evaluatedSelector());
$self._index_($recv(aMethodContext)._index());
$self._sendIndexes_($recv(aMethodContext)._sendIndexes());
$self._receiver_($recv(aMethodContext)._receiver());
$self._supercall_($recv(aMethodContext)._supercall());
$self._selector_($recv(aMethodContext)._selector());
$1=[$recv(aMethodContext)._outerContext()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["outerContext"]=1
//>>excludeEnd("ctx");
][0];
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
var outer;
outer=$receiver;
$2=$recv(outer)._methodContext();
if(($receiver = $2) == null || $receiver.a$nil){
$2;
} else {
$self._outerContext_($recv($self._class())._fromMethodContext_($recv(aMethodContext)._outerContext()));
}
$recv([$recv(aMethodContext)._locals()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["locals"]=1
//>>excludeEnd("ctx");
][0])._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._locals())._at_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromMethodContext:",{aMethodContext:aMethodContext})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "initializeInterpreter",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeInterpreter\x0a\x09interpreter := ASTInterpreter new\x0a\x09\x09context: self;\x0a\x09\x09yourself.\x0a\x09\x0a\x09self innerContext ifNotNil: [\x0a\x09\x09self setupInterpreter: interpreter ]",
referencedClasses: ["ASTInterpreter"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["context:", "new", "yourself", "ifNotNil:", "innerContext", "setupInterpreter:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$recv($globals.ASTInterpreter)._new();
$recv($1)._context_(self);
$self.interpreter=$recv($1)._yourself();
$2=$self._innerContext();
if(($receiver = $2) == null || $receiver.a$nil){
$2;
} else {
$self._setupInterpreter_($self.interpreter);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeInterpreter",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "initializeLocals",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeLocals\x0a\x09locals := Dictionary new.\x0a\x09locals at: 'thisContext' put: self.",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "at:put:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.locals=$recv($globals.Dictionary)._new();
$recv($self.locals)._at_put_("thisContext",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeLocals",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "innerContext",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "innerContext\x0a\x09^ innerContext",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.innerContext;

}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "innerContext:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAIContext"],
source: "innerContext: anAIContext\x0a\x09innerContext := anAIContext",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anAIContext){
var self=this,$self=this;
$self.innerContext=anAIContext;
return self;

}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "interpreter",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "interpreter\x0a\x09interpreter ifNil: [ self initializeInterpreter ].\x0a\x09^ interpreter",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "initializeInterpreter"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.interpreter;
if(($receiver = $1) == null || $receiver.a$nil){
$self._initializeInterpreter();
} else {
$1;
}
return $self.interpreter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpreter",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "interpreter:",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInterpreter"],
source: "interpreter: anInterpreter\x0a\x09interpreter := anInterpreter",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anInterpreter){
var self=this,$self=this;
$self.interpreter=anInterpreter;
return self;

}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "isTopContext",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTopContext\x0a\x09^ self innerContext isNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isNil", "innerContext"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._innerContext())._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isTopContext",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "localAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "localAt: aString\x0a\x09\x22Lookup the local value up to the method context\x22\x0a\x0a\x09| context |\x0a\x09\x0a\x09context := self lookupContextForLocal: aString.\x0a\x09^ context basicLocalAt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lookupContextForLocal:", "basicLocalAt:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
var context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
context=$self._lookupContextForLocal_(aString);
return $recv(context)._basicLocalAt_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localAt:",{aString:aString,context:context})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "localAt:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "localAt: aString ifAbsent: aBlock\x0a\x09\x22Lookup the local value up to the method context\x22\x0a\x0a\x09| context |\x0a\x09\x0a\x09context := self \x09\x0a\x09\x09lookupContextForLocal: aString \x0a\x09\x09ifNone: [ ^ aBlock value ].\x0a\x09\x0a\x09^ context basicLocalAt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lookupContextForLocal:ifNone:", "value", "basicLocalAt:"]
}, function ($methodClass){ return function (aString,aBlock){
var self=this,$self=this;
var context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
context=$self._lookupContextForLocal_ifNone_(aString,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[$recv(aBlock)._value()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(context)._basicLocalAt_(aString);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localAt:ifAbsent:",{aString:aString,aBlock:aBlock,context:context})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "localAt:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "localAt: aString put: anObject\x0a\x09| context |\x0a\x09\x0a\x09context := self lookupContextForLocal: aString.\x0a\x09context basicLocalAt: aString put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lookupContextForLocal:", "basicLocalAt:put:"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
var context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
context=$self._lookupContextForLocal_(aString);
$recv(context)._basicLocalAt_put_(aString,anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localAt:put:",{aString:aString,anObject:anObject,context:context})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "locals",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "locals\x0a\x09locals ifNil: [ self initializeLocals ].\x0a\x09\x0a\x09^ locals",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "initializeLocals"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.locals;
if(($receiver = $1) == null || $receiver.a$nil){
$self._initializeLocals();
} else {
$1;
}
return $self.locals;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"locals",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "lookupContextForLocal:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "lookupContextForLocal: aString\x0a\x09\x22Lookup the context defining the local named `aString` \x0a\x09up to the method context\x22\x0a\x0a\x09^ self \x0a\x09\x09lookupContextForLocal: aString \x0a\x09\x09ifNone: [ self variableNotFound ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lookupContextForLocal:ifNone:", "variableNotFound"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._lookupContextForLocal_ifNone_(aString,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._variableNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupContextForLocal:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "lookupContextForLocal:ifNone:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "lookupContextForLocal: aString ifNone: aBlock\x0a\x09\x22Lookup the context defining the local named `aString` \x0a\x09up to the method context\x22\x0a\x0a\x09^ self locals \x0a\x09\x09at: aString\x0a\x09\x09ifPresent: [ self ]\x0a\x09\x09ifAbsent: [ \x0a\x09\x09\x09self outerContext \x0a\x09\x09\x09\x09ifNil: aBlock\x0a\x09\x09\x09\x09ifNotNil: [ :context | \x0a\x09\x09\x09\x09\x09context lookupContextForLocal: aString ifNone: aBlock ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifPresent:ifAbsent:", "locals", "ifNil:ifNotNil:", "outerContext", "lookupContextForLocal:ifNone:"]
}, function ($methodClass){ return function (aString,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv($self._locals())._at_ifPresent_ifAbsent_(aString,(function(){
return self;

}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$self._outerContext();
return $recv($1)._ifNil_ifNotNil_(aBlock,(function(context){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(context)._lookupContextForLocal_ifNone_(aString,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({context:context},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupContextForLocal:ifNone:",{aString:aString,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "newInnerContext",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newInnerContext\x0a\x09^ self class new\x0a\x09\x09outerContext: self;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["outerContext:", "new", "class", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._class())._new();
$recv($1)._outerContext_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newInnerContext",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "outerContext",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "outerContext\x0a\x09^ outerContext",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.outerContext;

}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "outerContext:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAIContext"],
source: "outerContext: anAIContext\x0a\x09outerContext := anAIContext.\x0a\x09outerContext ifNotNil: [ :context | \x0a\x09\x09context innerContext: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "innerContext:"]
}, function ($methodClass){ return function (anAIContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$self.outerContext=anAIContext;
$1=$self.outerContext;
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
var context;
context=$receiver;
$recv(context)._innerContext_(self);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"outerContext:",{anAIContext:anAIContext})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "receiver: anObject\x0a\x09self locals at: 'self' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "locals"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._locals())._at_put_("self",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

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
$globals.AIContext);

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
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "sendIndexAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "sendIndexAt: aString\x0a\x09^ self sendIndexes at: aString ifAbsent: [ 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "sendIndexes"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._sendIndexes())._at_ifAbsent_(aString,(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendIndexAt:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "sendIndexes",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendIndexes\x0a\x09^ sendIndexes ifNil: [ Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.sendIndexes;
if(($receiver = $1) == null || $receiver.a$nil){
return $recv($globals.Dictionary)._new();
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendIndexes",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

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
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "setupInterpreter:",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInterpreter"],
source: "setupInterpreter: anInterpreter\x0a\x09| currentNode |\x0a\x09\x0a\x09\x22Retrieve the current node\x22\x0a\x09currentNode := ASTPCNodeVisitor new\x0a\x09\x09\x09selector: self evaluatedSelector;\x0a\x09\x09\x09index: (self sendIndexAt: self evaluatedSelector);\x0a\x09\x09\x09visit: self ast;\x0a\x09\x09\x09currentNode.\x0a\x09\x0a\x09\x22Define locals for the context\x22\x0a\x09self ast sequenceNode ifNotNil: [ :sequence |\x0a\x09\x09sequence temps do: [ :each |\x0a\x09\x09\x09self defineLocal: each ] ].\x0a\x09\x0a\x09anInterpreter node: currentNode.\x0a\x0a\x09\x22Push the send args and receiver to the interpreter stack\x22\x09\x0a\x09self innerContext arguments reversed do: [ :each | \x0a\x09\x09anInterpreter push: each ].\x0a\x09\x09\x0a\x09anInterpreter push: (self innerContext receiver)",
referencedClasses: ["ASTPCNodeVisitor"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["selector:", "new", "evaluatedSelector", "index:", "sendIndexAt:", "visit:", "ast", "currentNode", "ifNotNil:", "sequenceNode", "do:", "temps", "defineLocal:", "node:", "reversed", "arguments", "innerContext", "push:", "receiver"]
}, function ($methodClass){ return function (anInterpreter){
var self=this,$self=this;
var currentNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$recv($globals.ASTPCNodeVisitor)._new();
$recv($1)._selector_([$self._evaluatedSelector()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["evaluatedSelector"]=1
//>>excludeEnd("ctx");
][0]);
$recv($1)._index_($self._sendIndexAt_($self._evaluatedSelector()));
$recv($1)._visit_([$self._ast()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["ast"]=1
//>>excludeEnd("ctx");
][0]);
currentNode=$recv($1)._currentNode();
$2=$recv($self._ast())._sequenceNode();
if(($receiver = $2) == null || $receiver.a$nil){
$2;
} else {
var sequence;
sequence=$receiver;
[$recv($recv(sequence)._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._defineLocal_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["do:"]=1
//>>excludeEnd("ctx");
][0];
}
$recv(anInterpreter)._node_(currentNode);
$recv($recv($recv([$self._innerContext()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["innerContext"]=1
//>>excludeEnd("ctx");
][0])._arguments())._reversed())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv(anInterpreter)._push_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["push:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(anInterpreter)._push_($recv($self._innerContext())._receiver());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupInterpreter:",{anInterpreter:anInterpreter,currentNode:currentNode})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "supercall",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "supercall\x0a\x09^ supercall ifNil: [ false ]",
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
$1=$self.supercall;
if(($receiver = $1) == null || $receiver.a$nil){
return false;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"supercall",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "supercall:",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "supercall: aBoolean\x0a\x09supercall := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
$self.supercall=aBoolean;
return self;

}; }),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "variableNotFound",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variableNotFound\x0a\x09\x22Error thrown whenever a variable lookup fails\x22\x0a\x09\x0a\x09self error: 'Variable missing'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("Variable missing");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"variableNotFound",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext);


$core.addMethod(
$core.method({
selector: "fromMethodContext:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethodContext"],
source: "fromMethodContext: aMethodContext\x0a\x09^ self new\x0a\x09\x09initializeFromMethodContext: aMethodContext;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initializeFromMethodContext:", "new", "yourself"]
}, function ($methodClass){ return function (aMethodContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._initializeFromMethodContext_(aMethodContext);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromMethodContext:",{aMethodContext:aMethodContext})});
//>>excludeEnd("ctx");
}; }),
$globals.AIContext.a$cls);


$core.addClass("AISemanticAnalyzer", $globals.SemanticAnalyzer, ["context"], "Compiler-Interpreter");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AISemanticAnalyzer.comment="I perform the same semantic analysis than `SemanticAnalyzer`, with the difference that provided an `AIContext` context, variables are bound with the context variables.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "context",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.context;

}; }),
$globals.AISemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "context:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAIContext"],
source: "context: anAIContext\x0a\x09context := anAIContext",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anAIContext){
var self=this,$self=this;
$self.context=anAIContext;
return self;

}; }),
$globals.AISemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitVariableNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09self context \x0a\x09\x09localAt: aNode identifier \x0a\x09\x09ifAbsent: [ ^ super visitVariableNode: aNode ].\x0a\x0a\x09aNode binding: ASTContextVar new",
referencedClasses: ["ASTContextVar"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["localAt:ifAbsent:", "context", "identifier", "visitVariableNode:", "binding:", "new"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$recv($self._context())._localAt_ifAbsent_($recv(aNode)._identifier(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitVariableNode_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.supercall = false
//>>excludeEnd("ctx");
][0]];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aNode)._binding_($recv($globals.ASTContextVar)._new());
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.AISemanticAnalyzer);



$core.addClass("ASTContextVar", $globals.ScopeVar, ["context"], "Compiler-Interpreter");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ASTContextVar.comment="I am a variable defined in a `context`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "context",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.context;

}; }),
$globals.ASTContextVar);

$core.addMethod(
$core.method({
selector: "context:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "context: anObject\x0a\x09context := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.context=anObject;
return self;

}; }),
$globals.ASTContextVar);



$core.addClass("ASTDebugger", $globals.Object, ["interpreter", "context", "result"], "Compiler-Interpreter");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ASTDebugger.comment="I am a stepping debugger interface for Amber code.\x0aI internally use an instance of `ASTInterpreter` to actually step through node and interpret them.\x0a\x0aMy instances are created from an `AIContext` with `ASTDebugger class >> context:`.\x0aThey hold an `AIContext` instance internally, recursive copy of the `MethodContext`.\x0a\x0a## API\x0a\x0aUse the methods of the `'stepping'` protocol to do stepping.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "atEnd",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atEnd\x09\x0a\x09self context ifNil: [ ^ true ].\x0a\x09\x0a\x09^ self interpreter atEnd and: [ \x0a\x09\x09self context isTopContext ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "context", "and:", "atEnd", "interpreter", "isTopContext"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=[$self._context()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["context"]=1
//>>excludeEnd("ctx");
][0];
if(($receiver = $1) == null || $receiver.a$nil){
return true;
} else {
$1;
}
return $recv($recv($self._interpreter())._atEnd())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._context())._isTopContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atEnd",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "context",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.context;

}; }),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "context:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
$self.context=aContext;
return self;

}; }),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "flushInnerContexts",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flushInnerContexts\x0a\x09\x22When stepping, the inner contexts are not relevent anymore,\x0a\x09and can be flushed\x22\x0a\x09\x0a\x09self context ifNotNil: [ :cxt | \x0a\x09\x09cxt innerContext: nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "context", "innerContext:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self._context();
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
var cxt;
cxt=$receiver;
$recv(cxt)._innerContext_(nil);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flushInnerContexts",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "interpreter",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "interpreter\x0a\x09^ self context ifNotNil: [ :ctx | \x0a\x09\x09ctx interpreter ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "context", "interpreter"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self._context();
if(($receiver = $1) == null || $receiver.a$nil){
return $1;
} else {
var ctx;
ctx=$receiver;
return $recv(ctx)._interpreter();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpreter",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "node",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "node\x0a\x09^ self interpreter ifNotNil: [\x0a\x09\x09self interpreter node ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "interpreter", "node"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=[$self._interpreter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["interpreter"]=1
//>>excludeEnd("ctx");
][0];
if(($receiver = $1) == null || $receiver.a$nil){
return $1;
} else {
return $recv($self._interpreter())._node();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"node",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "onStep",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onStep\x0a\x09\x22After each step, check if the interpreter is at the end,\x0a\x09and if it is move to its outer context if any, skipping its \x0a\x09current node (which was just evaluated by the current \x0a\x09interpreter).\x0a\x09\x0a\x09After each step we also flush inner contexts.\x22\x0a\x09\x0a\x09result := self interpreter result.\x0a\x09\x0a\x09self interpreter atEnd ifTrue: [\x0a\x09\x09self context outerContext ifNotNil: [ :outerContext | \x0a\x09\x09\x09self context: outerContext ].\x0a\x09\x09self interpreter atEnd ifFalse: [ self interpreter skip ] ].\x0a\x09\x09\x0a\x09self flushInnerContexts",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["result", "interpreter", "ifTrue:", "atEnd", "ifNotNil:", "outerContext", "context", "context:", "ifFalse:", "skip", "flushInnerContexts"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$self.result=$recv([$self._interpreter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["interpreter"]=1
//>>excludeEnd("ctx");
][0])._result();
$1=[$recv([$self._interpreter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["interpreter"]=2
//>>excludeEnd("ctx");
][0])._atEnd()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["atEnd"]=1
//>>excludeEnd("ctx");
][0];
if($core.assert($1)){
$2=$recv($self._context())._outerContext();
if(($receiver = $2) == null || $receiver.a$nil){
$2;
} else {
var outerContext;
outerContext=$receiver;
$self._context_(outerContext);
}
$3=$recv([$self._interpreter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["interpreter"]=3
//>>excludeEnd("ctx");
][0])._atEnd();
if(!$core.assert($3)){
$recv($self._interpreter())._skip();
}
}
$self._flushInnerContexts();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onStep",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "proceed",
protocol: "stepping",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proceed\x0a\x09[ self atEnd ] whileFalse: [ self stepOver ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileFalse:", "atEnd", "stepOver"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._stepOver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proceed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "restart",
protocol: "stepping",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "restart\x0a\x09self interpreter restart.\x0a\x09self flushInnerContexts",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["restart", "interpreter", "flushInnerContexts"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._interpreter())._restart();
$self._flushInnerContexts();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restart",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "result",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "result\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.result;

}; }),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "stepInto",
protocol: "stepping",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stepInto\x0a\x09self shouldBeImplemented",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldBeImplemented"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldBeImplemented();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stepInto",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "stepOver",
protocol: "stepping",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stepOver\x0a\x09self context isTopContext \x0a\x09\x09ifFalse: [ self interpreter skip ]\x0a\x09\x09ifTrue: [ self interpreter stepOver ].\x0a\x09self onStep",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:ifTrue:", "isTopContext", "context", "skip", "interpreter", "stepOver", "onStep"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._context())._isTopContext();
if($core.assert($1)){
$recv($self._interpreter())._stepOver();
} else {
$recv([$self._interpreter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["interpreter"]=1
//>>excludeEnd("ctx");
][0])._skip();
}
$self._onStep();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stepOver",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTDebugger);


$core.addMethod(
$core.method({
selector: "context:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "context: aContext\x0a\x09^ self new\x0a\x09\x09context: aContext;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["context:", "new", "yourself"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._context_(aContext);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTDebugger.a$cls);


$core.addClass("ASTEnterNode", $globals.NodeVisitor, ["interpreter"], "Compiler-Interpreter");
$core.addMethod(
$core.method({
selector: "interpreter",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "interpreter\x0a\x09^ interpreter",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.interpreter;

}; }),
$globals.ASTEnterNode);

$core.addMethod(
$core.method({
selector: "interpreter:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "interpreter: anObject\x0a\x09interpreter := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.interpreter=anObject;
return self;

}; }),
$globals.ASTEnterNode);

$core.addMethod(
$core.method({
selector: "visitBlockNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09\x22Answer the node as we want to avoid eager evaluation\x22\x0a\x09\x0a\x09^ aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
return aNode;

}; }),
$globals.ASTEnterNode);

$core.addMethod(
$core.method({
selector: "visitDagNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDagNode: aNode\x0a\x09^ aNode dagChildren\x0a\x09\x09ifEmpty: [ aNode ]\x0a\x09\x09ifNotEmpty: [ :nodes | self visit: nodes first ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:ifNotEmpty:", "dagChildren", "visit:", "first"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aNode)._dagChildren())._ifEmpty_ifNotEmpty_((function(){
return aNode;

}),(function(nodes){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._visit_($recv(nodes)._first());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({nodes:nodes},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDagNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTEnterNode);

$core.addMethod(
$core.method({
selector: "visitSequenceNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode temps do: [ :each |\x0a\x09\x09self interpreter context defineLocal: each ].\x0a\x09^ super visitSequenceNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "temps", "defineLocal:", "context", "interpreter", "visitSequenceNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aNode)._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($self._interpreter())._context())._defineLocal_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitSequenceNode_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTEnterNode);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInterpreter"],
source: "on: anInterpreter\x0a\x09^ self new\x0a\x09\x09interpreter: anInterpreter;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["interpreter:", "new", "yourself"]
}, function ($methodClass){ return function (anInterpreter){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._interpreter_(anInterpreter);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anInterpreter:anInterpreter})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTEnterNode.a$cls);


$core.addClass("ASTInterpreter", $globals.NodeVisitor, ["node", "context", "stack", "returnValue", "returned", "forceAtEnd"], "Compiler-Interpreter");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ASTInterpreter.comment="I visit an AST, interpreting (evaluating) nodes one after the other, using a small stack machine.\x0a\x0a## API\x0a\x0aWhile my instances should be used from within an `ASTDebugger`, which provides a more high level interface,\x0ayou can use methods from the `interpreting` protocol:\x0a\x0a- `#step` evaluates the current `node` only\x0a- `#stepOver` evaluates the AST from the current `node` up to the next stepping node (most likely the next send node)\x0a- `#proceed` evaluates eagerly the AST\x0a- `#restart` select the first node of the AST\x0a- `#skip` skips the current node, moving to the next one if any";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "assign:to:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode", "anObject"],
source: "assign: aNode to: anObject\x0a\x09aNode binding inContext: self context put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inContext:put:", "binding", "context"]
}, function ($methodClass){ return function (aNode,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aNode)._binding())._inContext_put_($self._context(),anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assign:to:",{aNode:aNode,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "atEnd",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atEnd\x0a\x09forceAtEnd ifTrue: [ ^ true ].\x0a\x09\x0a\x09^ self hasReturned or: [ self node isNil ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "or:", "hasReturned", "isNil", "node"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.forceAtEnd;
if($core.assert($1)){
return true;
}
return $recv($self._hasReturned())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._node())._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atEnd",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "context",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.context;

}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "context:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
$self.context=aContext;
return self;

}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "enterNode",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enterNode\x0a\x09self node: ((ASTEnterNode on: self) visit: self node)",
referencedClasses: ["ASTEnterNode"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["node:", "visit:", "on:", "node"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._node_($recv($recv($globals.ASTEnterNode)._on_(self))._visit_($self._node()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"enterNode",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "eval:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09\x22Evaluate aString as JS source inside an JS function.\x0a\x09aString is not sandboxed.\x22\x0a\x09\x0a\x09| source function |\x0a\x09\x0a\x09source := String streamContents: [ :str |\x0a\x09\x09str nextPutAll: '0,(function('.\x0a\x09\x09self context locals keys\x0a\x09\x09\x09do: [ :each | str nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ str nextPutAll: ',' ].\x0a\x09\x09str\x0a\x09\x09\x09nextPutAll: '){ return (function() {';\x0a\x09\x09\x09nextPutAll: aString;\x0a\x09\x09\x09nextPutAll: '})()})' ].\x0a\x09\x09\x09\x0a\x09function := Compiler eval: source.\x0a\x09\x0a\x09^ function valueWithPossibleArguments: self context locals values",
referencedClasses: ["String", "Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "nextPutAll:", "do:separatedBy:", "keys", "locals", "context", "eval:", "valueWithPossibleArguments:", "values"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
var source,function_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
source=$recv($globals.String)._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(str)._nextPutAll_("0,(function(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv([$recv([$self._context()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["context"]=1
//>>excludeEnd("ctx");
][0])._locals()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["locals"]=1
//>>excludeEnd("ctx");
][0])._keys())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(str)._nextPutAll_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(str)._nextPutAll_(",")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
[$recv(str)._nextPutAll_("){ return (function() {")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=4
//>>excludeEnd("ctx");
][0];
[$recv(str)._nextPutAll_(aString)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=5
//>>excludeEnd("ctx");
][0];
return $recv(str)._nextPutAll_("})()})");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
function_=$recv($globals.Compiler)._eval_(source);
return $recv(function_)._valueWithPossibleArguments_($recv($recv($self._context())._locals())._values());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,source:source,function_:function_})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "hasReturned",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasReturned\x0a\x09^ returned ifNil: [ false ]",
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
$1=$self.returned;
if(($receiver = $1) == null || $receiver.a$nil){
return false;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasReturned",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09forceAtEnd := false",
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
$self.forceAtEnd=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "interpret",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "interpret\x0a\x09\x22Interpret the next node to be evaluated\x22\x0a\x09\x0a\x09self visit: self node",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visit:", "node"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._visit_($self._node());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpret",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "messageFromSendNode:arguments:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSendNode", "anArray"],
source: "messageFromSendNode: aSendNode arguments: anArray\x0a\x09^ Message selector: aSendNode selector arguments: anArray",
referencedClasses: ["Message"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["selector:arguments:", "selector"]
}, function ($methodClass){ return function (aSendNode,anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Message)._selector_arguments_($recv(aSendNode)._selector(),anArray);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageFromSendNode:arguments:",{aSendNode:aSendNode,anArray:anArray})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "messageNotUnderstood:receiver:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage", "anObject"],
source: "messageNotUnderstood: aMessage receiver: anObject\x0a\x09MessageNotUnderstood new\x0a\x09\x09message: aMessage;\x0a\x09\x09receiver: anObject;\x0a\x09\x09signal",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["message:", "new", "receiver:", "signal"]
}, function ($methodClass){ return function (aMessage,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.MessageNotUnderstood)._new();
$recv($1)._message_(aMessage);
$recv($1)._receiver_(anObject);
$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageNotUnderstood:receiver:",{aMessage:aMessage,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "next",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09| nd parent |\x0a\x09nd := self node.\x0a\x09parent := nd parent.\x0a\x09(parent ifNotNil: [ parent nextSiblingNode: nd ])\x0a\x09\x09ifNil: [ self node: parent ]\x0a\x09\x09ifNotNil: [ :sibling | self node: sibling; enterNode ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["node", "parent", "ifNil:ifNotNil:", "ifNotNil:", "nextSiblingNode:", "node:", "enterNode"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var nd,parent;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
nd=$self._node();
parent=$recv(nd)._parent();
$2=parent;
if(($receiver = $2) == null || $receiver.a$nil){
$1=$2;
} else {
$1=$recv(parent)._nextSiblingNode_(nd);
}
if(($receiver = $1) == null || $receiver.a$nil){
[$self._node_(parent)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["node:"]=1
//>>excludeEnd("ctx");
][0];
} else {
var sibling;
sibling=$receiver;
$self._node_(sibling);
$self._enterNode();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{nd:nd,parent:parent})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "node",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "node\x0a\x09\x22Answer the next node, ie the node to be evaluated in the next step\x22\x0a\x09\x0a\x09^ node",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.node;

}; }),
$globals.ASTInterpreter);

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
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "peek",
protocol: "stack",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "peek\x0a\x09\x22Peek the top object of the context stack\x22\x0a\x09\x0a\x09self stack ifEmpty: [ ^ nil ].\x0a\x09\x0a\x09^ self stack last",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:", "stack", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$recv([$self._stack()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["stack"]=1
//>>excludeEnd("ctx");
][0])._ifEmpty_((function(){
throw $early=[nil];

}));
return $recv($self._stack())._last();
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"peek",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "pop",
protocol: "stack",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pop\x0a\x09\x22Pop an object from the context stack\x22\x0a\x09\x0a\x09| peekedValue |\x0a\x09\x0a\x09peekedValue := self peek.\x0a\x09self stack removeLast.\x0a\x09^ peekedValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["peek", "removeLast", "stack"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var peekedValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
peekedValue=$self._peek();
$recv($self._stack())._removeLast();
return peekedValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pop",{peekedValue:peekedValue})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "proceed",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proceed\x0a\x09\x22Eagerly evaluate the ast\x22\x0a\x09\x0a\x09[ self atEnd ] \x0a\x09\x09whileFalse: [ self step ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileFalse:", "atEnd", "step"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._step();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proceed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "push:",
protocol: "stack",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "push: anObject\x0a\x09\x22Push an object to the context stack\x22\x0a\x09\x0a\x09^ self stack add: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "stack"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._stack())._add_(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"push:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "restart",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "restart\x0a\x09self node: self context ast; enterNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["node:", "ast", "context", "enterNode"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._node_($recv($self._context())._ast());
$self._enterNode();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restart",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "result",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "result\x0a\x09^ self hasReturned \x0a\x09\x09ifTrue: [ self returnValue ] \x0a\x09\x09ifFalse: [ self context receiver ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "hasReturned", "returnValue", "receiver", "context"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._hasReturned();
if($core.assert($1)){
return $self._returnValue();
} else {
return $recv($self._context())._receiver();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"result",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "returnValue",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "returnValue\x0a\x09^ returnValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.returnValue;

}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "returnValue:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "returnValue: anObject\x0a\x09returnValue := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.returnValue=anObject;
return self;

}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "sendMessage:to:superSend:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage", "anObject", "aBoolean"],
source: "sendMessage: aMessage to: anObject superSend: aBoolean\x0a\x09| method |\x0a\x09\x0a\x09aBoolean ifFalse: [ ^ aMessage sendTo: anObject ].\x0a\x09anObject class superclass ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x0a\x09method := (self context method methodClass superclass lookupSelector: aMessage selector)\x0a\x09\x09ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x09\x0a\x09^ method sendTo: anObject arguments: aMessage arguments",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "sendTo:", "ifNil:", "superclass", "class", "messageNotUnderstood:receiver:", "lookupSelector:", "methodClass", "method", "context", "selector", "sendTo:arguments:", "arguments"]
}, function ($methodClass){ return function (aMessage,anObject,aBoolean){
var self=this,$self=this;
var method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
if(!$core.assert(aBoolean)){
return $recv(aMessage)._sendTo_(anObject);
}
$1=[$recv($recv(anObject)._class())._superclass()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["superclass"]=1
//>>excludeEnd("ctx");
][0];
if(($receiver = $1) == null || $receiver.a$nil){
return [$self._messageNotUnderstood_receiver_(aMessage,anObject)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["messageNotUnderstood:receiver:"]=1
//>>excludeEnd("ctx");
][0];
} else {
$1;
}
$2=$recv($recv($recv($recv($self._context())._method())._methodClass())._superclass())._lookupSelector_($recv(aMessage)._selector());
if(($receiver = $2) == null || $receiver.a$nil){
return $self._messageNotUnderstood_receiver_(aMessage,anObject);
} else {
method=$2;
}
return $recv(method)._sendTo_arguments_(anObject,$recv(aMessage)._arguments());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendMessage:to:superSend:",{aMessage:aMessage,anObject:anObject,aBoolean:aBoolean,method:method})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "setNonLocalReturnFromContext:",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "setNonLocalReturnFromContext: aContext\x0a\x09aContext interpreter hasReturned ifTrue: [\x0a\x09\x09returned := true.\x0a\x09\x09self returnValue: aContext interpreter returnValue ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "hasReturned", "interpreter", "returnValue:", "returnValue"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv([$recv(aContext)._interpreter()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["interpreter"]=1
//>>excludeEnd("ctx");
][0])._hasReturned();
if($core.assert($1)){
$self.returned=true;
$self._returnValue_($recv($recv(aContext)._interpreter())._returnValue());
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setNonLocalReturnFromContext:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "skip",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "skip\x0a\x09self next",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["next"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._next();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"skip",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "stack",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stack\x0a\x09^ stack ifNil: [ stack := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.stack;
if(($receiver = $1) == null || $receiver.a$nil){
$self.stack=$recv($globals.OrderedCollection)._new();
return $self.stack;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stack",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "step",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "step\x0a\x09self \x0a\x09\x09interpret; \x0a\x09\x09next",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["interpret", "next"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._interpret();
$self._next();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"step",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "stepOver",
protocol: "interpreting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stepOver\x0a\x09self step.\x0a\x09\x0a\x09[ self node isNil or: [ self node isSteppingNode ] ] whileFalse: [ \x0a\x09\x09self step ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["step", "whileFalse:", "or:", "isNil", "node", "isSteppingNode"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._step()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["step"]=1
//>>excludeEnd("ctx");
][0];
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv([$self._node()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["node"]=1
//>>excludeEnd("ctx");
][0])._isNil())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self._node())._isSteppingNode();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._step();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stepOver",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visit:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visit: aNode\x0a\x09self hasReturned ifFalse: [ super visit: aNode ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "hasReturned", "visit:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._hasReturned();
if(!$core.assert($1)){
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visit_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitAssignmentNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| poppedValue |\x0a\x09\x0a\x09poppedValue := self pop.\x0a\x09\x0a\x09\x22Pop the left side of the assignment.\x0a\x09It already has been visited, and we don't need its value.\x22\x0a\x09self pop.\x0a\x09\x0a\x09self push: poppedValue.\x0a\x09self assign: aNode left to: poppedValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["pop", "push:", "assign:to:", "left"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var poppedValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
poppedValue=[$self._pop()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["pop"]=1
//>>excludeEnd("ctx");
][0];
$self._pop();
$self._push_(poppedValue);
$self._assign_to_($recv(aNode)._left(),poppedValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode,poppedValue:poppedValue})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitBlockNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09\x22Do not evaluate the block node.\x0a\x09Instead, put all instructions into a block that we push to the stack for later evaluation\x22\x0a\x09\x0a\x09| block |\x0a\x09\x0a\x09block := AIBlockClosure forContext: self context node: aNode.\x0a\x09\x0a\x09self push: block",
referencedClasses: ["AIBlockClosure"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["forContext:node:", "context", "push:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var block;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
block=$recv($globals.AIBlockClosure)._forContext_node_($self._context(),aNode);
$self._push_(block);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode,block:block})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitBlockSequenceNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09\x22If the receiver is actually visiting a BlockSequenceNode,\x0a\x09it means the the context is a block context. Evaluation should \x0a\x09stop right after evaluating the block sequence and the outer\x0a\x09context's interpreter should take over. \x0a\x09Therefore we force #atEnd.\x22\x0a\x09\x0a\x09super visitBlockSequenceNode: aNode.\x0a\x09forceAtEnd := true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitBlockSequenceNode:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitBlockSequenceNode_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$self.forceAtEnd=true;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitDagNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDagNode: aNode\x0a\x09\x22Do nothing by default. Especially, do not visit children recursively.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
return self;

}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitDynamicArrayNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| array |\x0a\x09\x0a\x09array := #().\x0a\x09aNode dagChildren do: [ :each |\x0a\x09\x09array addFirst: self pop ].\x0a\x09\x0a\x09self push: array",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "dagChildren", "addFirst:", "pop", "push:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
array=[];
$recv($recv(aNode)._dagChildren())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(array)._addFirst_($self._pop());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._push_(array);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode,array:array})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitDynamicDictionaryNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| keyValueList |\x0a\x09\x0a\x09keyValueList := OrderedCollection new.\x0a\x09\x0a\x09aNode dagChildren do: [ :each | \x0a\x09\x09keyValueList add: self pop ].\x0a\x09\x0a\x09self push: (HashedCollection newFromPairs: keyValueList reversed)",
referencedClasses: ["OrderedCollection", "HashedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "dagChildren", "add:", "pop", "push:", "newFromPairs:", "reversed"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var keyValueList;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
keyValueList=$recv($globals.OrderedCollection)._new();
$recv($recv(aNode)._dagChildren())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(keyValueList)._add_($self._pop());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._push_($recv($globals.HashedCollection)._newFromPairs_($recv(keyValueList)._reversed()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode,keyValueList:keyValueList})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitJSStatementNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09returned := true.\x0a\x09self returnValue: (self eval: aNode source)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["returnValue:", "eval:", "source"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.returned=true;
$self._returnValue_($self._eval_($recv(aNode)._source()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitReturnNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09returned := true.\x0a\x09self returnValue: self pop",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["returnValue:", "pop"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.returned=true;
$self._returnValue_($self._pop());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitSendNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| receiver args message result |\x0a\x09\x0a\x09args := aNode arguments collect: [ :each | self pop ].\x0a\x09receiver := self peek.\x0a\x09\x0a\x09message := self\x0a\x09\x09messageFromSendNode: aNode\x0a\x09\x09arguments: args reversed.\x0a\x09\x0a\x09result := self sendMessage: message to: receiver superSend: aNode superSend.\x0a\x09\x0a\x09\x22For cascade sends, push the reciever if the send is not the last one\x22\x0a\x09aNode isSideEffect ifFalse: [ self pop; push: result ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "arguments", "pop", "peek", "messageFromSendNode:arguments:", "reversed", "sendMessage:to:superSend:", "superSend", "ifFalse:", "isSideEffect", "push:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var receiver,args,message,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
args=$recv($recv(aNode)._arguments())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$self._pop()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["pop"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
receiver=$self._peek();
message=$self._messageFromSendNode_arguments_(aNode,$recv(args)._reversed());
result=$self._sendMessage_to_superSend_(message,receiver,$recv(aNode)._superSend());
$1=$recv(aNode)._isSideEffect();
if(!$core.assert($1)){
$self._pop();
$self._push_(result);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,receiver:receiver,args:args,message:message,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitValueNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09self push: aNode value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["push:", "value"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._push_($recv(aNode)._value());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitVariableNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09self push: (aNode binding inContext: self context)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["push:", "inContext:", "binding", "context"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._push_($recv($recv(aNode)._binding())._inContext_($self._context()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTInterpreter);



$core.addClass("ASTInterpreterError", $globals.Error, [], "Compiler-Interpreter");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ASTInterpreterError.comment="I get signaled when an AST interpreter is unable to interpret a node.";
//>>excludeEnd("ide");


$core.addClass("ASTPCNodeVisitor", $globals.NodeVisitor, ["index", "trackedIndex", "selector", "currentNode"], "Compiler-Interpreter");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ASTPCNodeVisitor.comment="I visit an AST until I get to the current node for the `context` and answer it.\x0a\x0a## API\x0a\x0aMy instances must be filled with a context object using `#context:`.\x0a\x0aAfter visiting the AST the current node is answered by `#currentNode`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "currentNode",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentNode\x0a\x09^ currentNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.currentNode;

}; }),
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "increaseTrackedIndex",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "increaseTrackedIndex\x0a\x09trackedIndex := self trackedIndex + 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["+", "trackedIndex"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.trackedIndex=$recv($self._trackedIndex()).__plus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"increaseTrackedIndex",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPCNodeVisitor);

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
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "index:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "index: aNumber\x0a\x09index := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
$self.index=aNumber;
return self;

}; }),
$globals.ASTPCNodeVisitor);

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
$globals.ASTPCNodeVisitor);

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
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "trackedIndex",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trackedIndex\x0a\x09^ trackedIndex ifNil: [ trackedIndex := 0 ]",
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
$1=$self.trackedIndex;
if(($receiver = $1) == null || $receiver.a$nil){
$self.trackedIndex=(0);
return $self.trackedIndex;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trackedIndex",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "visitJSStatementNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09\x22If a JSStatementNode is encountered, it always is the current node.\x0a\x09Stop visiting the AST there\x22\x0a\x09\x0a\x09currentNode := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
$self.currentNode=aNode;
return self;

}; }),
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "visitSendNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09super visitSendNode: aNode.\x0a\x09\x0a\x09self selector = aNode selector ifTrue: [\x0a\x09\x09self trackedIndex = self index ifTrue: [ currentNode := aNode ].\x0a\x09\x09self increaseTrackedIndex ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitSendNode:", "ifTrue:", "=", "selector", "trackedIndex", "index", "increaseTrackedIndex"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitSendNode_.call($self,aNode))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$1=[$recv([$self._selector()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["selector"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(aNode)._selector())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0];
if($core.assert($1)){
$2=$recv($self._trackedIndex()).__eq($self._index());
if($core.assert($2)){
$self.currentNode=aNode;
$self.currentNode;
}
$self._increaseTrackedIndex();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPCNodeVisitor);


$core.setTraitComposition([{trait: $globals.TMethodContext}], $globals.AIContext);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ false",
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
selector: "nextSiblingNode:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "nextSiblingNode: aNode\x0a\x09\x22Answer the next node after aNode or nil\x22\x0a\x09\x0a\x09^ self dagChildren \x0a\x09\x09at: (self dagChildren indexOf: aNode) + 1\x0a\x09\x09ifAbsent: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "dagChildren", "+", "indexOf:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$self._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._at_ifAbsent_($recv($recv($self._dagChildren())._indexOf_(aNode)).__plus((1)),(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextSiblingNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "inContext:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "inContext: aContext\x0a\x09self error: 'Alias variable is internal, it should never appear in normal variable context.'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("Alias variable is internal, it should never appear in normal variable context.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inContext:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.AliasVar);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "nextSiblingNode:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "nextSiblingNode: aNode\x0a\x09\x22Answer nil as we want to avoid eager evaluation\x22\x0a\x09\x0a\x09\x22In fact, this should not have been called, ever. IMO. -- herby\x22\x0a\x09\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
return nil;

}; }),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "inContext:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "inContext: aContext\x0a\x09^ Smalltalk globals \x0a\x09\x09at: self name \x0a\x09\x09ifAbsent: [ Platform globals at: self name ]",
referencedClasses: ["Smalltalk", "Platform"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "globals", "name", "at:"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$recv($globals.Smalltalk)._globals()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["globals"]=1
//>>excludeEnd("ctx");
][0])._at_ifAbsent_([$self._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0],(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Platform)._globals())._at_($self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inContext:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.ClassRefVar);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.DynamicArrayNode);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.DynamicDictionaryNode);

$core.addMethod(
$core.method({
selector: "evaluate:context:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aContext"],
source: "evaluate: aString context: aContext\x0a\x09\x22Similar to #evaluate:for:, with the following differences:\x0a\x09- instead of compiling and running `aString`, `aString` is interpreted using an `ASTInterpreter`\x0a\x09- instead of evaluating against a receiver, evaluate in the context of `aContext`\x22\x0a\x0a\x09| compiler ast |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ ast := compiler parseExpression: aString ] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :ex | ^ Terminal alert: ex messageText ].\x0a\x09\x09\x0a\x09(AISemanticAnalyzer on: aContext receiver class)\x0a\x09\x09context: aContext;\x0a\x09\x09visit: ast.\x0a\x0a\x09^ aContext evaluateNode: ast",
referencedClasses: ["Compiler", "Error", "Terminal", "AISemanticAnalyzer"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "context:", "on:", "class", "receiver", "visit:", "evaluateNode:"]
}, function ($methodClass){ return function (aString,aContext){
var self=this,$self=this;
var compiler,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
compiler=$recv($globals.Compiler)._new();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
ast=$recv(compiler)._parseExpression_(aString);
return ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[$recv($globals.Terminal)._alert_($recv(ex)._messageText())];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=$recv($globals.AISemanticAnalyzer)._on_($recv($recv(aContext)._receiver())._class());
$recv($1)._context_(aContext);
$recv($1)._visit_(ast);
return $recv(aContext)._evaluateNode_(ast);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:context:",{aString:aString,aContext:aContext,compiler:compiler,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.Evaluator);

$core.addMethod(
$core.method({
selector: "inContext:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "inContext: aContext\x0a\x09^ Platform globals at: self name ifAbsent: [ self error: 'Unknown variable' ]",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "globals", "name", "error:"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Platform)._globals())._at_ifAbsent_($self._name(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._error_("Unknown variable");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inContext:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.ExternallyKnownVar);

$core.addMethod(
$core.method({
selector: "inContext:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "inContext: aContext\x0a\x09^ aContext receiver instVarAt: self name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["instVarAt:", "receiver", "name"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aContext)._receiver())._instVarAt_($self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inContext:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.InstanceVar);

$core.addMethod(
$core.method({
selector: "inContext:put:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext", "anObject"],
source: "inContext: aContext put: anObject\x0a\x09aContext receiver instVarAt: self name put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["instVarAt:put:", "receiver", "name"]
}, function ($methodClass){ return function (aContext,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aContext)._receiver())._instVarAt_put_($self._name(),anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inContext:put:",{aContext:aContext,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.InstanceVar);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.JSStatementNode);

$core.addMethod(
$core.method({
selector: "inContext:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "inContext: aContext\x0a\x09^ #{'nil'->nil. 'true'->true. 'false'->false}\x0a\x09\x09at: self name\x0a\x09\x09ifAbsent: [ super inContext: aContext ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "name", "inContext:"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.HashedCollection._newFromPairs_(["nil",nil,"true",true,"false",false]))._at_ifAbsent_($self._name(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._inContext_.call($self,aContext))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.supercall = false
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inContext:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.PseudoVar);

$core.addMethod(
$core.method({
selector: "inContext:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "inContext: aContext\x0a\x09^ aContext localAt: self name",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["localAt:", "name"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aContext)._localAt_($self._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inContext:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "inContext:put:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext", "anObject"],
source: "inContext: aContext put: anObject\x0a\x09self error: 'Non-assignable variables should not be changed.'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (aContext,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("Non-assignable variables should not be changed.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inContext:put:",{aContext:aContext,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ true",
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
selector: "inContext:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "inContext: aContext\x0a\x09^ aContext localAt: 'self'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["localAt:"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aContext)._localAt_("self");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inContext:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.SuperVar);

$core.addMethod(
$core.method({
selector: "inContext:put:",
protocol: "*Compiler-Interpreter",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext", "anObject"],
source: "inContext: aContext put: anObject\x0a\x09aContext localAt: self name put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["localAt:put:", "name"]
}, function ($methodClass){ return function (aContext,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aContext)._localAt_put_($self._name(),anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inContext:put:",{aContext:aContext,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.TempVar);

});
