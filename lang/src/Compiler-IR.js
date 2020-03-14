define(["amber/boot", "require", "amber/core/Compiler-AST", "amber/core/Compiler-Semantic", "amber/core/Kernel-Dag", "amber/core/Kernel-Helpers", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Compiler-IR");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("IRASTTranslator", $globals.NodeVisitor, ["source", "theClass", "method", "sequence"], "Compiler-IR");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRASTTranslator.comment="I am the AST (abstract syntax tree) visitor responsible for building the intermediate representation graph.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addToSequence:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInstruction"],
source: "addToSequence: anInstruction\x0a\x09anInstruction ifNotNil: [\x0a\x09\x09anInstruction isVariable ifFalse: [\x0a\x09\x09\x09self sequence add: anInstruction ] ].\x0a\x09^ anInstruction",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "ifFalse:", "isVariable", "add:", "sequence"]
}, function ($methodClass){ return function (anInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
if(anInstruction == null || anInstruction.a$nil){
anInstruction;
} else {
$1=$recv(anInstruction)._isVariable();
if(!$core.assert($1)){
$recv($self._sequence())._add_(anInstruction);
}
}
return anInstruction;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToSequence:",{anInstruction:anInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "alias:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anExpressionNode"],
source: "alias: anExpressionNode\x0a\x09| assignment |\x0a\x0a\x09anExpressionNode isIdempotent ifTrue: [ ^ self visit: anExpressionNode ].\x0a\x0a\x09assignment := self method newAliasingOf: (self visit: anExpressionNode).\x0a\x09self addToSequence: assignment.\x0a\x0a\x09^ assignment left",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isIdempotent", "visit:", "newAliasingOf:", "method", "addToSequence:", "left"]
}, function ($methodClass){ return function (anExpressionNode){
var self=this,$self=this;
var assignment;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anExpressionNode)._isIdempotent();
if($core.assert($1)){
return [$self._visit_(anExpressionNode)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["visit:"]=1
//>>excludeEnd("ctx");
][0];
}
assignment=$recv($self._method())._newAliasingOf_($self._visit_(anExpressionNode));
$self._addToSequence_(assignment);
return $recv(assignment)._left();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias:",{anExpressionNode:anExpressionNode,assignment:assignment})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "aliasTemporally:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "aliasTemporally: aCollection\x0a\x09\x22https://lolg.it/amber/amber/issues/296\x0a\x09\x0a\x09If a node is aliased, all preceding ones are aliased as well.\x0a\x09The tree is iterated twice. First we get the aliasing dependency,\x0a\x09then the aliasing itself is done\x22\x0a\x0a\x09| threshold shouldAlias |\x0a\x09threshold := aCollection reversed\x0a\x09\x09detect: [ :each | each subtreeNeedsAliasing ] ifNone: [ nil ].\x0a\x09threshold ifNil: [ ^ self visitAll: aCollection ].\x0a\x0a\x09shouldAlias := true.\x0a\x09^ aCollection collect: [ :each |\x0a\x09\x09shouldAlias\x0a\x09\x09\x09ifTrue: [ each == threshold ifTrue: [ shouldAlias := false ]. self alias: each ]\x0a\x09\x09\x09ifFalse: [ self visit: each ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["detect:ifNone:", "reversed", "subtreeNeedsAliasing", "ifNil:", "visitAll:", "collect:", "ifTrue:ifFalse:", "ifTrue:", "==", "alias:", "visit:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
var threshold,shouldAlias;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
threshold=$recv($recv(aCollection)._reversed())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._subtreeNeedsAliasing();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return nil;

}));
$1=threshold;
if($1 == null || $1.a$nil){
return $self._visitAll_(aCollection);
} else {
$1;
}
shouldAlias=true;
return $recv(aCollection)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=shouldAlias;
if($core.assert($2)){
$3=$recv(each).__eq_eq(threshold);
if($core.assert($3)){
shouldAlias=false;
shouldAlias;
}
return $self._alias_(each);
} else {
return $self._visit_(each);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aliasTemporally:",{aCollection:aCollection,threshold:threshold,shouldAlias:shouldAlias})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "method",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ method",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.method;

}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "method:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRMethod"],
source: "method: anIRMethod\x0a\x09method := anIRMethod",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anIRMethod){
var self=this,$self=this;
$self.method=anIRMethod;
return self;

}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "sequence",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sequence\x0a\x09^ sequence",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.sequence;

}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "sequence:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSequence"],
source: "sequence: anIRSequence\x0a\x09sequence := anIRSequence",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anIRSequence){
var self=this,$self=this;
$self.sequence=anIRSequence;
return self;

}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "source",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.source;

}; }),
$globals.IRASTTranslator);

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
$globals.IRASTTranslator);

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
$globals.IRASTTranslator);

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
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitAssignmentNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| left right assignment |\x0a\x09right := self visit: aNode right.\x0a\x09left := self visit: aNode left.\x0a\x09self addToSequence: (IRAssignment new\x0a\x09\x09add: left;\x0a\x09\x09add: right;\x0a\x09\x09yourself).\x0a\x09^ left",
referencedClasses: ["IRAssignment"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visit:", "right", "left", "addToSequence:", "add:", "new", "yourself"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var left,right,assignment;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
right=[$self._visit_($recv(aNode)._right())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["visit:"]=1
//>>excludeEnd("ctx");
][0];
left=$self._visit_($recv(aNode)._left());
$1=$recv($globals.IRAssignment)._new();
[$recv($1)._add_(left)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._add_(right);
$2=$recv($1)._yourself();
$self._addToSequence_($2);
return left;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode,left:left,right:right,assignment:assignment})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitBlockNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09| closure |\x0a\x09closure := IRClosure new\x0a\x09\x09arguments: aNode parameters;\x0a\x09\x09requiresSmalltalkContext: aNode requiresSmalltalkContext;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself.\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09closure add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09scope: aNode scope;\x0a\x09\x09\x09yourself) ].\x0a\x09closure add: (self visit: aNode sequenceNode).\x0a\x09^ closure",
referencedClasses: ["IRClosure", "IRTempDeclaration"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["arguments:", "new", "parameters", "requiresSmalltalkContext:", "requiresSmalltalkContext", "scope:", "scope", "yourself", "do:", "temps", "add:", "name:", "name", "visit:", "sequenceNode"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var closure;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=[$recv($globals.IRClosure)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._arguments_($recv(aNode)._parameters());
$recv($1)._requiresSmalltalkContext_($recv(aNode)._requiresSmalltalkContext());
[$recv($1)._scope_([$recv(aNode)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope:"]=1
//>>excludeEnd("ctx");
][0];
closure=[$recv($1)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv([$recv(aNode)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=2
//>>excludeEnd("ctx");
][0])._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=closure;
$3=$recv($globals.IRTempDeclaration)._new();
$recv($3)._name_($recv(each)._name());
$recv($3)._scope_($recv(aNode)._scope());
$4=$recv($3)._yourself();
return [$recv($2)._add_($4)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(closure)._add_($self._visit_($recv(aNode)._sequenceNode()));
return closure;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode,closure:closure})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitBlockSequenceNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self\x0a\x09\x09withSequence: IRBlockSequence new\x0a\x09\x09do: [\x0a\x09\x09\x09aNode dagChildren ifNotEmpty: [\x0a\x09\x09\x09\x09aNode dagChildren allButLast do: [ :each |\x0a\x09\x09\x09\x09\x09self addToSequence: (self visit: each) ].\x0a\x09\x09\x09\x09aNode dagChildren last isReturnNode\x0a\x09\x09\x09\x09\x09ifFalse: [ self addToSequence: (IRBlockReturn new add: (self visitOrAlias: aNode dagChildren last); yourself) ]\x0a\x09\x09\x09\x09\x09ifTrue: [ self addToSequence: (self visit: aNode dagChildren last) ] ]]",
referencedClasses: ["IRBlockSequence", "IRBlockReturn"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withSequence:do:", "new", "ifNotEmpty:", "dagChildren", "do:", "allButLast", "addToSequence:", "visit:", "ifFalse:ifTrue:", "isReturnNode", "last", "add:", "visitOrAlias:", "yourself"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
return $self._withSequence_do_([$recv($globals.IRBlockSequence)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0],(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$recv(aNode)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv($recv([$recv(aNode)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["dagChildren"]=2
//>>excludeEnd("ctx");
][0])._allButLast())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return [$self._addToSequence_([$self._visit_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["visit:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["addToSequence:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,3)});
//>>excludeEnd("ctx");
}));
$1=$recv([$recv([$recv(aNode)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["dagChildren"]=3
//>>excludeEnd("ctx");
][0])._last()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["last"]=1
//>>excludeEnd("ctx");
][0])._isReturnNode();
if($core.assert($1)){
return $self._addToSequence_($self._visit_($recv($recv(aNode)._dagChildren())._last()));
} else {
$2=$recv($globals.IRBlockReturn)._new();
$recv($2)._add_($self._visitOrAlias_([$recv([$recv(aNode)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["dagChildren"]=4
//>>excludeEnd("ctx");
][0])._last()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["last"]=2
//>>excludeEnd("ctx");
][0]));
$3=$recv($2)._yourself();
return [$self._addToSequence_($3)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["addToSequence:"]=2
//>>excludeEnd("ctx");
][0];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitCascadeNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09| receiver |\x0a\x09receiver := aNode receiver.\x0a\x09receiver isIdempotent ifFalse: [\x0a\x09\x09| alias |\x0a\x09\x09alias := self alias: receiver.\x0a\x09\x09receiver := VariableNode new binding: alias variable ].\x0a\x09aNode dagChildren do: [ :each | each receiver: receiver ].\x0a\x0a\x09aNode dagChildren allButLast do: [ :each |\x0a\x09\x09self addToSequence: (self visit: each) ].\x0a\x0a\x09^ self visitOrAlias: aNode dagChildren last",
referencedClasses: ["VariableNode"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["receiver", "ifFalse:", "isIdempotent", "alias:", "binding:", "new", "variable", "do:", "dagChildren", "receiver:", "allButLast", "addToSequence:", "visit:", "visitOrAlias:", "last"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var receiver;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
receiver=$recv(aNode)._receiver();
$1=$recv(receiver)._isIdempotent();
if(!$core.assert($1)){
var alias;
alias=$self._alias_(receiver);
receiver=$recv($recv($globals.VariableNode)._new())._binding_($recv(alias)._variable());
receiver;
}
[$recv([$recv(aNode)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._receiver_(receiver);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["do:"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv([$recv(aNode)._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=2
//>>excludeEnd("ctx");
][0])._allButLast())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._addToSequence_($self._visit_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return $self._visitOrAlias_($recv($recv(aNode)._dagChildren())._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode,receiver:receiver})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitDynamicArrayNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| array |\x0a\x09array := IRDynamicArray new.\x0a\x09(self aliasTemporally: aNode dagChildren) do: [ :each | array add: each ].\x0a\x09^ array",
referencedClasses: ["IRDynamicArray"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "aliasTemporally:", "dagChildren", "add:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
array=$recv($globals.IRDynamicArray)._new();
$recv($self._aliasTemporally_($recv(aNode)._dagChildren()))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(array)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode,array:array})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitDynamicDictionaryNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| dictionary |\x0a\x09dictionary := IRDynamicDictionary new.\x0a\x09(self aliasTemporally: aNode dagChildren) do: [ :each | dictionary add: each ].\x0a\x09^ dictionary",
referencedClasses: ["IRDynamicDictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "aliasTemporally:", "dagChildren", "add:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var dictionary;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
dictionary=$recv($globals.IRDynamicDictionary)._new();
$recv($self._aliasTemporally_($recv(aNode)._dagChildren()))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(dictionary)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return dictionary;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode,dictionary:dictionary})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitJSStatementNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ IRVerbatim new\x0a\x09\x09source: aNode source crlfSanitized;\x0a\x09\x09yourself",
referencedClasses: ["IRVerbatim"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["source:", "new", "crlfSanitized", "source", "yourself"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRVerbatim)._new();
$recv($1)._source_($recv($recv(aNode)._source())._crlfSanitized());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitMethodNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09| irSequence |\x0a\x0a\x09self method: (IRMethod new\x0a\x09\x09source: self source crlfSanitized;\x0a\x09\x09pragmas: (aNode pragmas collect: [ :each |\x0a\x09\x09\x09Message\x0a\x09\x09\x09\x09selector: each selector\x0a\x09\x09\x09\x09arguments: (each arguments collect: [ :eachArg |\x0a\x09\x09\x09\x09\x09eachArg isString ifTrue: [ eachArg crlfSanitized ] ifFalse: [ eachArg ]])]);\x0a\x09\x09theClass: self theClass;\x0a\x09\x09arguments: aNode arguments;\x0a\x09\x09selector: aNode selector;\x0a\x09\x09sendIndexes: aNode sendIndexes;\x0a\x09\x09requiresSmalltalkContext: aNode requiresSmalltalkContext;\x0a\x09\x09classReferences: aNode classReferences;\x0a\x09\x09scope: aNode scope;\x0a\x09\x09yourself).\x0a\x0a\x09aNode scope temps do: [ :each |\x0a\x09\x09self method add: (IRTempDeclaration new\x0a\x09\x09\x09name: each name;\x0a\x09\x09\x09scope: aNode scope;\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09self method add: (irSequence := self visit: aNode sequenceNode).\x0a\x0a\x09aNode scope hasLocalReturn ifFalse: [ irSequence\x0a\x09\x09add: (IRReturn new\x0a\x09\x09\x09add: (IRVariable new\x0a\x09\x09\x09\x09variable: (aNode scope pseudoVars at: 'self');\x0a\x09\x09\x09\x09yourself);\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09^ self method",
referencedClasses: ["IRMethod", "Message", "IRTempDeclaration", "IRReturn", "IRVariable"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["method:", "source:", "new", "crlfSanitized", "source", "pragmas:", "collect:", "pragmas", "selector:arguments:", "selector", "arguments", "ifTrue:ifFalse:", "isString", "theClass:", "theClass", "arguments:", "selector:", "sendIndexes:", "sendIndexes", "requiresSmalltalkContext:", "requiresSmalltalkContext", "classReferences:", "classReferences", "scope:", "scope", "yourself", "do:", "temps", "add:", "method", "name:", "name", "visit:", "sequenceNode", "ifFalse:", "hasLocalReturn", "variable:", "at:", "pseudoVars"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var irSequence;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14;
$1=[$recv($globals.IRMethod)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._source_([$recv($self._source())._crlfSanitized()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["crlfSanitized"]=1
//>>excludeEnd("ctx");
][0]);
$recv($1)._pragmas_([$recv($recv(aNode)._pragmas())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Message)._selector_arguments_([$recv(each)._selector()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["selector"]=1
//>>excludeEnd("ctx");
][0],$recv([$recv(each)._arguments()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["arguments"]=1
//>>excludeEnd("ctx");
][0])._collect_((function(eachArg){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(eachArg)._isString();
if($core.assert($2)){
return $recv(eachArg)._crlfSanitized();
} else {
return eachArg;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({eachArg:eachArg},$ctx2,2)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["collect:"]=1
//>>excludeEnd("ctx");
][0]);
$recv($1)._theClass_($self._theClass());
$recv($1)._arguments_($recv(aNode)._arguments());
$recv($1)._selector_($recv(aNode)._selector());
$recv($1)._sendIndexes_($recv(aNode)._sendIndexes());
$recv($1)._requiresSmalltalkContext_($recv(aNode)._requiresSmalltalkContext());
$recv($1)._classReferences_($recv(aNode)._classReferences());
[$recv($1)._scope_([$recv(aNode)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope:"]=1
//>>excludeEnd("ctx");
][0];
$3=[$recv($1)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0];
$self._method_($3);
$recv($recv([$recv(aNode)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=2
//>>excludeEnd("ctx");
][0])._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=[$self._method()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["method"]=1
//>>excludeEnd("ctx");
][0];
$5=[$recv($globals.IRTempDeclaration)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
$recv($5)._name_($recv(each)._name());
$recv($5)._scope_([$recv(aNode)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["scope"]=3
//>>excludeEnd("ctx");
][0]);
$6=[$recv($5)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["yourself"]=2
//>>excludeEnd("ctx");
][0];
return [$recv($4)._add_($6)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,5)});
//>>excludeEnd("ctx");
}));
$7=[$self._method()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["method"]=2
//>>excludeEnd("ctx");
][0];
irSequence=$self._visit_($recv(aNode)._sequenceNode());
$8=irSequence;
[$recv($7)._add_($8)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=2
//>>excludeEnd("ctx");
][0];
$9=$recv([$recv(aNode)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=4
//>>excludeEnd("ctx");
][0])._hasLocalReturn();
if(!$core.assert($9)){
$10=irSequence;
$11=[$recv($globals.IRReturn)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0];
$12=$recv($globals.IRVariable)._new();
$recv($12)._variable_($recv($recv($recv(aNode)._scope())._pseudoVars())._at_("self"));
$13=[$recv($12)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=3
//>>excludeEnd("ctx");
][0];
$recv($11)._add_($13);
$14=$recv($11)._yourself();
[$recv($10)._add_($14)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=3
//>>excludeEnd("ctx");
][0];
}
return $self._method();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode,irSequence:irSequence})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitOrAlias:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anExpressionNode"],
source: "visitOrAlias: anExpressionNode\x0a\x09^ anExpressionNode shouldBeAliased\x0a\x09\x09ifTrue: [ self alias: anExpressionNode ]\x0a\x09\x09ifFalse: [ self visit: anExpressionNode ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "shouldBeAliased", "alias:", "visit:"]
}, function ($methodClass){ return function (anExpressionNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anExpressionNode)._shouldBeAliased();
if($core.assert($1)){
return $self._alias_(anExpressionNode);
} else {
return $self._visit_(anExpressionNode);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitOrAlias:",{anExpressionNode:anExpressionNode})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitReturnNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09^ (aNode nonLocalReturn\x0a\x09\x09ifTrue: [ IRNonLocalReturn new ]\x0a\x09\x09ifFalse: [ IRReturn new ])\x0a\x09\x09scope: aNode scope;\x0a\x09\x09add: (self visitOrAlias: aNode expression);\x0a\x09\x09yourself\x0a",
referencedClasses: ["IRNonLocalReturn", "IRReturn"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["scope:", "ifTrue:ifFalse:", "nonLocalReturn", "new", "scope", "add:", "visitOrAlias:", "expression", "yourself"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(aNode)._nonLocalReturn();
if($core.assert($1)){
$2=[$recv($globals.IRNonLocalReturn)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
} else {
$2=$recv($globals.IRReturn)._new();
}
$recv($2)._scope_($recv(aNode)._scope());
$recv($2)._add_($self._visitOrAlias_($recv(aNode)._expression()));
return $recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitSendNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| send |\x0a\x09send := IRSend new.\x0a\x09send\x0a\x09\x09selector: aNode selector;\x0a\x09\x09index: aNode index.\x0a\x09\x0a\x09(self aliasTemporally: aNode dagChildren) do: [ :each | send add: each ].\x0a\x0a\x09^ send",
referencedClasses: ["IRSend"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "selector:", "selector", "index:", "index", "do:", "aliasTemporally:", "dagChildren", "add:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
var send;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
send=$recv($globals.IRSend)._new();
$1=send;
$recv($1)._selector_($recv(aNode)._selector());
$recv($1)._index_($recv(aNode)._index());
$recv($self._aliasTemporally_($recv(aNode)._dagChildren()))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(send)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return send;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,send:send})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitSequenceNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self\x0a\x09\x09withSequence: IRSequence new\x0a\x09\x09do: [ aNode dagChildren do: [ :each |\x0a\x09\x09\x09self addToSequence: (self visit: each) ] ]",
referencedClasses: ["IRSequence"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withSequence:do:", "new", "do:", "dagChildren", "addToSequence:", "visit:"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._withSequence_do_($recv($globals.IRSequence)._new(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aNode)._dagChildren())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._addToSequence_($self._visit_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitValueNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ IRValue new\x0a\x09\x09value: aNode value;\x0a\x09\x09yourself",
referencedClasses: ["IRValue"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:", "new", "value", "yourself"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRValue)._new();
$recv($1)._value_($recv(aNode)._value());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "visitVariableNode:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ IRVariable new\x0a\x09\x09variable: aNode binding;\x0a\x09\x09yourself",
referencedClasses: ["IRVariable"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["variable:", "new", "binding", "yourself"]
}, function ($methodClass){ return function (aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.IRVariable)._new();
$recv($1)._variable_($recv(aNode)._binding());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);

$core.addMethod(
$core.method({
selector: "withSequence:do:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSequence", "aBlock"],
source: "withSequence: aSequence do: aBlock\x0a\x09| outerSequence |\x0a\x09outerSequence := self sequence.\x0a\x09self sequence: aSequence.\x0a\x09aBlock value.\x0a\x09self sequence: outerSequence.\x0a\x09^ aSequence",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sequence", "sequence:", "value"]
}, function ($methodClass){ return function (aSequence,aBlock){
var self=this,$self=this;
var outerSequence;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
outerSequence=$self._sequence();
[$self._sequence_(aSequence)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequence:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aBlock)._value();
$self._sequence_(outerSequence);
return aSequence;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withSequence:do:",{aSequence:aSequence,aBlock:aBlock,outerSequence:outerSequence})});
//>>excludeEnd("ctx");
}; }),
$globals.IRASTTranslator);



$core.addClass("IRAliasFactory", $globals.Object, ["counter"], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09counter := 0",
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
$self.counter=(0);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRAliasFactory);

$core.addMethod(
$core.method({
selector: "next",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09counter := counter + 1.\x0a\x09^ AliasVar new\x0a\x09\x09name: '$', counter asString;\x0a\x09\x09yourself",
referencedClasses: ["AliasVar"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["+", "name:", "new", ",", "asString", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self.counter=$recv($self.counter).__plus((1));
$1=$recv($globals.AliasVar)._new();
$recv($1)._name_("$".__comma($recv($self.counter)._asString()));
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRAliasFactory);



$core.addClass("IRInstruction", $globals.DagParentNode, ["parent"], "Compiler-IR");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRInstruction.comment="I am the abstract root class of the IR (intermediate representation) instructions class hierarchy.\x0aThe IR graph is used to emit JavaScript code using a JSStream.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "add:",
protocol: "building",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09^ self addDagChild: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addDagChild:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._addDagChild_(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "asReceiver",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asReceiver\x0a\x09\x22Return customized form to act as receiver.\x0a\x09Return self to use standard $recv(...) boxing.\x22\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return nil;

}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isClosure",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isClosure\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isInlined",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isMethod",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMethod\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isSend",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSend\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isSequence",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSequence\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.IRInstruction);

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
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isTempDeclaration",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTempDeclaration\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "isVariable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isVariable\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "method",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ self parent method",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["method", "parent"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._parent())._method();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "needsBoxingAsReceiver",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "needsBoxingAsReceiver\x0a\x09self deprecatedAPI: 'Use asReceiver isNil instead.'.\x0a\x09^ self asReceiver isNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deprecatedAPI:", "isNil", "asReceiver"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._deprecatedAPI_("Use asReceiver isNil instead.");
return $recv($self._asReceiver())._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"needsBoxingAsReceiver",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInstruction);

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
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "parent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "parent: anIRInstruction\x0a\x09parent := anIRInstruction",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
$self.parent=anIRInstruction;
return self;

}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "remove:",
protocol: "building",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "remove: anIRInstruction\x0a\x09self dagChildren remove: anIRInstruction",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["remove:", "dagChildren"]
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._dagChildren())._remove_(anIRInstruction);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:",{anIRInstruction:anIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "replace:with:",
protocol: "building",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction", "anotherIRInstruction"],
source: "replace: anIRInstruction with: anotherIRInstruction\x0a\x09anotherIRInstruction parent: self.\x0a\x09self dagChildren\x0a\x09\x09at: (self dagChildren indexOf: anIRInstruction)\x0a\x09\x09put: anotherIRInstruction",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parent:", "at:put:", "dagChildren", "indexOf:"]
}, function ($methodClass){ return function (anIRInstruction,anotherIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anotherIRInstruction)._parent_(self);
$recv([$self._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._at_put_($recv($self._dagChildren())._indexOf_(anIRInstruction),anotherIRInstruction);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{anIRInstruction:anIRInstruction,anotherIRInstruction:anotherIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "replaceWith:",
protocol: "building",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "replaceWith: anIRInstruction\x0a\x09self parent replace: self with: anIRInstruction",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["replace:with:", "parent"]
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._parent())._replace_with_(self,anIRInstruction);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replaceWith:",{anIRInstruction:anIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "scope",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ self parent ifNotNil: [ :node | \x0a\x09\x09node scope ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "parent", "scope"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._parent();
if($1 == null || $1.a$nil){
return $1;
} else {
var node;
node=$1;
return $recv(node)._scope();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scope",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInstruction);

$core.addMethod(
$core.method({
selector: "yieldsValue",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "yieldsValue\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.IRInstruction);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBuilder"],
source: "on: aBuilder\x0a\x09^ self new\x0a\x09\x09builder: aBuilder;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["builder:", "new", "yourself"]
}, function ($methodClass){ return function (aBuilder){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._builder_(aBuilder);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aBuilder:aBuilder})});
//>>excludeEnd("ctx");
}; }),
$globals.IRInstruction.a$cls);


$core.addClass("IRAssignment", $globals.IRInstruction, [], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRAssignment: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRAssignment:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRAssignment_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRAssignment);

$core.addMethod(
$core.method({
selector: "left",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "left\x0a\x09^ self dagChildren first",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["first", "dagChildren"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dagChildren())._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"left",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRAssignment);

$core.addMethod(
$core.method({
selector: "right",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "right\x0a\x09^ self dagChildren last",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["last", "dagChildren"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dagChildren())._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"right",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRAssignment);



$core.addClass("IRDynamicArray", $globals.IRInstruction, [], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRDynamicArray: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRDynamicArray:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRDynamicArray_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRDynamicArray);



$core.addClass("IRDynamicDictionary", $globals.IRInstruction, [], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRDynamicDictionary: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRDynamicDictionary:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRDynamicDictionary_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRDynamicDictionary);



$core.addClass("IRScopedInstruction", $globals.IRInstruction, ["scope"], "Compiler-IR");
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
$globals.IRScopedInstruction);

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
$globals.IRScopedInstruction);



$core.addClass("IRClosureInstruction", $globals.IRScopedInstruction, ["arguments", "requiresSmalltalkContext"], "Compiler-IR");
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
var $1;
$1=$self.arguments;
if($1 == null || $1.a$nil){
return [];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRClosureInstruction);

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
$globals.IRClosureInstruction);

$core.addMethod(
$core.method({
selector: "locals",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "locals\x0a\x09^ self arguments, (self tempDeclarations collect: [ :each | each name ])\x0a",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "arguments", "collect:", "tempDeclarations", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._arguments()).__comma($recv($self._tempDeclarations())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"locals",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRClosureInstruction);

$core.addMethod(
$core.method({
selector: "requiresSmalltalkContext",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresSmalltalkContext\x0a\x09^ requiresSmalltalkContext ifNil: [ false ]",
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
$1=$self.requiresSmalltalkContext;
if($1 == null || $1.a$nil){
return false;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"requiresSmalltalkContext",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRClosureInstruction);

$core.addMethod(
$core.method({
selector: "requiresSmalltalkContext:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "requiresSmalltalkContext: anObject\x0a\x09requiresSmalltalkContext := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.requiresSmalltalkContext=anObject;
return self;

}; }),
$globals.IRClosureInstruction);

$core.addMethod(
$core.method({
selector: "scope:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScope"],
source: "scope: aScope\x0a\x09super scope: aScope.\x0a\x09aScope instruction: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["scope:", "instruction:"]
}, function ($methodClass){ return function (aScope){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._scope_.call($self,aScope))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$recv(aScope)._instruction_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scope:",{aScope:aScope})});
//>>excludeEnd("ctx");
}; }),
$globals.IRClosureInstruction);

$core.addMethod(
$core.method({
selector: "tempDeclarations",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tempDeclarations\x0a\x09^ self dagChildren select: [ :each |\x0a\x09\x09each isTempDeclaration ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "dagChildren", "isTempDeclaration"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dagChildren())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isTempDeclaration();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tempDeclarations",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRClosureInstruction);



$core.addClass("IRClosure", $globals.IRClosureInstruction, [], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRClosure: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRClosure:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRClosure_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRClosure);

$core.addMethod(
$core.method({
selector: "isClosure",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isClosure\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.IRClosure);

$core.addMethod(
$core.method({
selector: "sequence",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sequence\x0a\x09^ self dagChildren last",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["last", "dagChildren"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dagChildren())._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sequence",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRClosure);



$core.addClass("IRMethod", $globals.IRClosureInstruction, ["theClass", "source", "compiledSource", "attachments", "selector", "pragmas", "classReferences", "sendIndexes", "internalVariables", "aliasFactory"], "Compiler-IR");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRMethod.comment="I am a method instruction";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRMethod: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRMethod:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRMethod_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "aliasFactory",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aliasFactory\x0a\x09^ aliasFactory ifNil: [ aliasFactory := IRAliasFactory new ]",
referencedClasses: ["IRAliasFactory"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.aliasFactory;
if($1 == null || $1.a$nil){
$self.aliasFactory=$recv($globals.IRAliasFactory)._new();
return $self.aliasFactory;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aliasFactory",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "attachments",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "attachments\x0a\x09^ attachments ifNil: [ attachments := #{} ]",
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
$1=$self.attachments;
if($1 == null || $1.a$nil){
$self.attachments=$globals.HashedCollection._newFromPairs_([]);
return $self.attachments;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attachments",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRMethod);

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
$globals.IRMethod);

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
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "compiledSource",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compiledSource\x0a\x09^ compiledSource",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.compiledSource;

}; }),
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "compiledSource:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "compiledSource: anObject\x0a\x09compiledSource := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.compiledSource=anObject;
return self;

}; }),
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "internalVariables",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "internalVariables\x0a\x09^ internalVariables ifNil: [ internalVariables := Set new ]",
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
$1=$self.internalVariables;
if($1 == null || $1.a$nil){
$self.internalVariables=$recv($globals.Set)._new();
return $self.internalVariables;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"internalVariables",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "isMethod",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMethod\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.IRMethod);

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
$globals.IRMethod);

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
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "newAliasingOf:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "newAliasingOf: anIRInstruction\x0a\x09| variable |\x0a\x0a\x09variable := IRVariable new\x0a\x09\x09variable: self aliasFactory next;\x0a\x09\x09yourself.\x0a\x0a\x09self internalVariables add: variable.\x0a\x0a\x09^ IRAssignment new\x0a\x09\x09add: variable;\x0a\x09\x09add: anIRInstruction;\x0a\x09\x09yourself",
referencedClasses: ["IRVariable", "IRAssignment"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["variable:", "new", "next", "aliasFactory", "yourself", "add:", "internalVariables"]
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
var variable;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=[$recv($globals.IRVariable)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._variable_($recv($self._aliasFactory())._next());
variable=[$recv($1)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0];
[$recv($self._internalVariables())._add_(variable)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
$2=$recv($globals.IRAssignment)._new();
[$recv($2)._add_(variable)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=2
//>>excludeEnd("ctx");
][0];
$recv($2)._add_(anIRInstruction);
return $recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newAliasingOf:",{anIRInstruction:anIRInstruction,variable:variable})});
//>>excludeEnd("ctx");
}; }),
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "pragmas",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pragmas\x0a\x09^ pragmas",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.pragmas;

}; }),
$globals.IRMethod);

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
$globals.IRMethod);

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
$globals.IRMethod);

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
$globals.IRMethod);

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
$globals.IRMethod);

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
$globals.IRMethod);

$core.addMethod(
$core.method({
selector: "source",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.source;

}; }),
$globals.IRMethod);

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
$globals.IRMethod);

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
$globals.IRMethod);

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
$globals.IRMethod);



$core.addClass("IRReturn", $globals.IRScopedInstruction, [], "Compiler-IR");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRReturn.comment="I am a local return instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRReturn: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRReturn:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRReturn_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRReturn);

$core.addMethod(
$core.method({
selector: "expression",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "expression\x0a\x09^ self dagChildren single",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["single", "dagChildren"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dagChildren())._single();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"expression",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRReturn);

$core.addMethod(
$core.method({
selector: "scope",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope ifNil: [ self parent scope ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "scope", "parent"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.scope;
if($1 == null || $1.a$nil){
return $recv($self._parent())._scope();
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scope",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRReturn);

$core.addMethod(
$core.method({
selector: "yieldsValue",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "yieldsValue\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.IRReturn);



$core.addClass("IRBlockReturn", $globals.IRReturn, [], "Compiler-IR");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRBlockReturn.comment="Smalltalk blocks return their last statement. I am a implicit block return instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRBlockReturn: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRBlockReturn:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRBlockReturn_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRBlockReturn);



$core.addClass("IRNonLocalReturn", $globals.IRReturn, [], "Compiler-IR");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRNonLocalReturn.comment="I am a non local return instruction.\x0aNon local returns are handled using a try/catch JavaScript statement.\x0a\x0aSee `IRNonLocalReturnHandling` class.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRNonLocalReturn: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRNonLocalReturn:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRNonLocalReturn_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRNonLocalReturn);



$core.addClass("IRTempDeclaration", $globals.IRScopedInstruction, ["name"], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRTempDeclaration: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRTempDeclaration:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRTempDeclaration_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRTempDeclaration);

$core.addMethod(
$core.method({
selector: "isTempDeclaration",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTempDeclaration\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.IRTempDeclaration);

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
$globals.IRTempDeclaration);

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
$globals.IRTempDeclaration);



$core.addClass("IRSend", $globals.IRInstruction, ["selector", "javaScriptSelector", "index"], "Compiler-IR");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRSend.comment="I am a message send instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRSend: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRSend:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRSend_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSend);

$core.addMethod(
$core.method({
selector: "arguments",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ self dagChildren allButFirst",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["allButFirst", "dagChildren"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dagChildren())._allButFirst();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSend);

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
$globals.IRSend);

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
$globals.IRSend);

$core.addMethod(
$core.method({
selector: "isSend",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSend\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.IRSend);

$core.addMethod(
$core.method({
selector: "javaScriptSelector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "javaScriptSelector\x0a\x09^ javaScriptSelector ifNil: [ javaScriptSelector := self selector asJavaScriptMethodName ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "asJavaScriptMethodName", "selector"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.javaScriptSelector;
if($1 == null || $1.a$nil){
$self.javaScriptSelector=$recv($self._selector())._asJavaScriptMethodName();
return $self.javaScriptSelector;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"javaScriptSelector",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSend);

$core.addMethod(
$core.method({
selector: "javaScriptSelector:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "javaScriptSelector: aString\x0a\x09javaScriptSelector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.javaScriptSelector=aString;
return self;

}; }),
$globals.IRSend);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ self dagChildren first",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["first", "dagChildren"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dagChildren())._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSend);

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
$globals.IRSend);

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
$globals.IRSend);



$core.addClass("IRSequence", $globals.IRInstruction, [], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRSequence: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRSequence:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRSequence_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRSequence);

$core.addMethod(
$core.method({
selector: "isSequence",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSequence\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.IRSequence);



$core.addClass("IRBlockSequence", $globals.IRSequence, [], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRBlockSequence: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRBlockSequence:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRBlockSequence_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRBlockSequence);



$core.addClass("IRValue", $globals.IRInstruction, ["value"], "Compiler-IR");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRValue.comment="I am the simplest possible instruction. I represent a value.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRValue: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRValue:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRValue_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRValue);

$core.addMethod(
$core.method({
selector: "asReceiver",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asReceiver\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.IRValue);

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
$globals.IRValue);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "value: aString\x0a\x09value := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.value=aString;
return self;

}; }),
$globals.IRValue);



$core.addClass("IRVariable", $globals.IRInstruction, ["variable"], "Compiler-IR");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IRVariable.comment="I am a variable instruction.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRVariable: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRVariable:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRVariable_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVariable);

$core.addMethod(
$core.method({
selector: "asReceiver",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asReceiver\x0a\x09self variable asReceiver\x0a\x09\x09ifNil: [ ^ super asReceiver ]\x0a\x09\x09ifNotNil: [ :receiverVar |\x0a\x09\x09\x09self variable == receiverVar ifTrue: [ ^ self ].\x0a\x09\x09\x09^ self copy variable: receiverVar; yourself ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:ifNotNil:", "asReceiver", "variable", "ifTrue:", "==", "variable:", "copy", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=[$recv([$self._variable()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["variable"]=1
//>>excludeEnd("ctx");
][0])._asReceiver()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asReceiver"]=1
//>>excludeEnd("ctx");
][0];
if($1 == null || $1.a$nil){
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._asReceiver.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
} else {
var receiverVar;
receiverVar=$1;
$2=$recv($self._variable()).__eq_eq(receiverVar);
if($core.assert($2)){
return self;
}
$3=$self._copy();
$recv($3)._variable_(receiverVar);
return $recv($3)._yourself();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asReceiver",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVariable);

$core.addMethod(
$core.method({
selector: "isSuper",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSuper\x0a\x09^ self variable isSuper",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isSuper", "variable"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._variable())._isSuper();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSuper",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVariable);

$core.addMethod(
$core.method({
selector: "isVariable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isVariable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.IRVariable);

$core.addMethod(
$core.method({
selector: "variable",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variable\x0a\x09^ variable",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.variable;

}; }),
$globals.IRVariable);

$core.addMethod(
$core.method({
selector: "variable:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScopeVariable"],
source: "variable: aScopeVariable\x0a\x09variable := aScopeVariable",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aScopeVariable){
var self=this,$self=this;
$self.variable=aScopeVariable;
return self;

}; }),
$globals.IRVariable);



$core.addClass("IRVerbatim", $globals.IRInstruction, ["source"], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "acceptDagVisitor:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVisitor"],
source: "acceptDagVisitor: aVisitor\x0a\x09^ aVisitor visitIRVerbatim: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRVerbatim:"]
}, function ($methodClass){ return function (aVisitor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aVisitor)._visitIRVerbatim_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptDagVisitor:",{aVisitor:aVisitor})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVerbatim);

$core.addMethod(
$core.method({
selector: "source",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.source;

}; }),
$globals.IRVerbatim);

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
$globals.IRVerbatim);



$core.addClass("IRPragmator", $globals.Object, ["irMethod"], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "irMethod",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "irMethod\x0a\x09^ irMethod",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.irMethod;

}; }),
$globals.IRPragmator);

$core.addMethod(
$core.method({
selector: "irMethod:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "irMethod: anObject\x0a\x09irMethod := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.irMethod=anObject;
return self;

}; }),
$globals.IRPragmator);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRMethod"],
source: "value: anIRMethod\x0a\x09self irMethod: anIRMethod.\x0a\x09self processPragmas: anIRMethod pragmas.\x0a\x09^ anIRMethod",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["irMethod:", "processPragmas:", "pragmas"]
}, function ($methodClass){ return function (anIRMethod){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._irMethod_(anIRMethod);
$self._processPragmas_($recv(anIRMethod)._pragmas());
return anIRMethod;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anIRMethod:anIRMethod})});
//>>excludeEnd("ctx");
}; }),
$globals.IRPragmator);



$core.addClass("IRLatePragmator", $globals.IRPragmator, [], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "jsOverride:",
protocol: "pragmas",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "jsOverride: aString\x0a\x09self irMethod attachments\x0a\x09\x09at: aString\x0a\x09\x09put: (NativeFunction\x0a\x09\x09\x09constructorNamed: #Function\x0a\x09\x09\x09value: 'return this.', irMethod selector asJavaScriptMethodName, '()')",
referencedClasses: ["NativeFunction"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "attachments", "irMethod", "constructorNamed:value:", ",", "asJavaScriptMethodName", "selector"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._irMethod())._attachments())._at_put_(aString,$recv($globals.NativeFunction)._constructorNamed_value_("Function",[$recv("return this.".__comma($recv($recv($self.irMethod)._selector())._asJavaScriptMethodName())).__comma("()")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsOverride:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.IRLatePragmator);



$core.addClass("IRVisitor", $globals.ParentFakingPathDagVisitor, [], "Compiler-IR");
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
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRAssignment:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09^ self visitDagNode: anIRAssignment",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRAssignment){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRAssignment);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRBlockReturn:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRBlockReturn"],
source: "visitIRBlockReturn: anIRBlockReturn\x0a\x09^ self visitIRReturn: anIRBlockReturn",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRReturn:"]
}, function ($methodClass){ return function (anIRBlockReturn){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitIRReturn_(anIRBlockReturn);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRBlockReturn:",{anIRBlockReturn:anIRBlockReturn})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRBlockSequence:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRBlockSequence"],
source: "visitIRBlockSequence: anIRBlockSequence\x0a\x09^ self visitIRSequence: anIRBlockSequence",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitIRSequence:"]
}, function ($methodClass){ return function (anIRBlockSequence){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitIRSequence_(anIRBlockSequence);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRBlockSequence:",{anIRBlockSequence:anIRBlockSequence})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRClosure:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09^ self visitDagNode: anIRClosure",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRClosure){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRClosure);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRClosure:",{anIRClosure:anIRClosure})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRDynamicArray:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09^ self visitDagNode: anIRDynamicArray",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRDynamicArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRDynamicArray);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicArray:",{anIRDynamicArray:anIRDynamicArray})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRDynamicDictionary:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09^ self visitDagNode: anIRDynamicDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRDynamicDictionary){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRDynamicDictionary);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicDictionary:",{anIRDynamicDictionary:anIRDynamicDictionary})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

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
$globals.IRVisitor);

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
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRMethod:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x09^ self visitDagNode: anIRMethod",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRMethod){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRMethod);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRMethod:",{anIRMethod:anIRMethod})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRNonLocalReturn:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09^ self visitDagNode: anIRNonLocalReturn",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRNonLocalReturn){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRNonLocalReturn);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRNonLocalReturnHandling:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRNonLocalReturnHandling"],
source: "visitIRNonLocalReturnHandling: anIRNonLocalReturnHandling\x0a\x09^ self visitDagNode: anIRNonLocalReturnHandling",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRNonLocalReturnHandling){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRNonLocalReturnHandling);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturnHandling:",{anIRNonLocalReturnHandling:anIRNonLocalReturnHandling})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRReturn:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09^ self visitDagNode: anIRReturn",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRReturn){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRReturn);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRSend:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09^ self visitDagNode: anIRSend",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRSend){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRSend);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRSequence:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09^ self visitDagNode: anIRSequence",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRSequence){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRSequence);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRSequence:",{anIRSequence:anIRSequence})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRTempDeclaration:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09^ self visitDagNode: anIRTempDeclaration",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRTempDeclaration){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRTempDeclaration);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRTempDeclaration:",{anIRTempDeclaration:anIRTempDeclaration})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRValue:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09^ self visitDagNode: anIRValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRValue:",{anIRValue:anIRValue})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRVariable:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09^ self visitDagNode: anIRVariable",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRVariable){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRVariable);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRVariable:",{anIRVariable:anIRVariable})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);

$core.addMethod(
$core.method({
selector: "visitIRVerbatim:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09^ self visitDagNode: anIRVerbatim",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitDagNode:"]
}, function ($methodClass){ return function (anIRVerbatim){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._visitDagNode_(anIRVerbatim);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRVerbatim:",{anIRVerbatim:anIRVerbatim})});
//>>excludeEnd("ctx");
}; }),
$globals.IRVisitor);



$core.addClass("IRJSTranslator", $globals.IRVisitor, ["stream", "currentClass"], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "contents",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09^ self stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["contents", "stream"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._stream())._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "currentClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentClass\x0a\x09^ currentClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.currentClass;

}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "currentClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
$self.currentClass=aClass;
return self;

}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := JSStream new.",
referencedClasses: ["JSStream"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "new"]
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
$self.stream=$recv($globals.JSStream)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "stream",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stream\x0a\x09^ stream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.stream;

}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "stream:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "stream: aStream\x0a\x09stream := aStream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
$self.stream=aStream;
return self;

}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRAssignment:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRAssignment"],
source: "visitIRAssignment: anIRAssignment\x0a\x09self stream\x0a\x09\x09nextPutAssignLhs: [self visit: anIRAssignment left]\x0a\x09\x09rhs: [self visit: anIRAssignment right].",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAssignLhs:rhs:", "stream", "visit:", "left", "right"]
}, function ($methodClass){ return function (anIRAssignment){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._stream())._nextPutAssignLhs_rhs_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$self._visit_($recv(anIRAssignment)._left())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["visit:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._visit_($recv(anIRAssignment)._right());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRAssignment:",{anIRAssignment:anIRAssignment})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRClosure:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure"],
source: "visitIRClosure: anIRClosure\x0a\x09self stream\x0a\x09\x09nextPutClosureWith: [\x0a\x09\x09\x09self stream nextPutVars: (anIRClosure tempDeclarations collect: [ :each |\x0a\x09\x09\x09\x09\x09each name asVariableName ]).\x0a\x09\x09\x09self stream\x0a\x09\x09\x09\x09nextPutBlockContextFor: anIRClosure\x0a\x09\x09\x09\x09during: [ super visitIRClosure: anIRClosure ] ]\x0a\x09\x09arguments: anIRClosure arguments",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutClosureWith:arguments:", "stream", "nextPutVars:", "collect:", "tempDeclarations", "asVariableName", "name", "nextPutBlockContextFor:during:", "visitIRClosure:", "arguments"]
}, function ($methodClass){ return function (anIRClosure){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["stream"]=1
//>>excludeEnd("ctx");
][0])._nextPutClosureWith_arguments_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["stream"]=2
//>>excludeEnd("ctx");
][0])._nextPutVars_($recv($recv(anIRClosure)._tempDeclarations())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(each)._name())._asVariableName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
})));
return $recv($self._stream())._nextPutBlockContextFor_during_(anIRClosure,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitIRClosure_.call($self,anIRClosure))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.supercall = false
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$recv(anIRClosure)._arguments());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRClosure:",{anIRClosure:anIRClosure})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRDynamicArray:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRDynamicArray"],
source: "visitIRDynamicArray: anIRDynamicArray\x0a\x09self\x0a\x09\x09visitInstructionList: anIRDynamicArray dagChildren\x0a\x09\x09enclosedBetween: '[' and: ']'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitInstructionList:enclosedBetween:and:", "dagChildren"]
}, function ($methodClass){ return function (anIRDynamicArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._visitInstructionList_enclosedBetween_and_($recv(anIRDynamicArray)._dagChildren(),"[","]");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicArray:",{anIRDynamicArray:anIRDynamicArray})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRDynamicDictionary:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRDynamicDictionary"],
source: "visitIRDynamicDictionary: anIRDynamicDictionary\x0a\x09self\x0a\x09\x09visitInstructionList: anIRDynamicDictionary dagChildren\x0a\x09\x09enclosedBetween: '$globals.HashedCollection._newFromPairs_([' and: '])'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitInstructionList:enclosedBetween:and:", "dagChildren"]
}, function ($methodClass){ return function (anIRDynamicDictionary){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._visitInstructionList_enclosedBetween_and_($recv(anIRDynamicDictionary)._dagChildren(),"$globals.HashedCollection._newFromPairs_([","])");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRDynamicDictionary:",{anIRDynamicDictionary:anIRDynamicDictionary})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRMethod:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRMethod"],
source: "visitIRMethod: anIRMethod\x0a\x0a\x09self stream\x0a\x09\x09\x09nextPutFunctionWith: [\x0a\x09\x09\x09\x09self stream nextPutVars: (anIRMethod tempDeclarations collect: [ :each |\x0a\x09\x09\x09\x09\x09each name asVariableName ]).\x0a\x09\x09\x09\x09self stream nextPutContextFor: anIRMethod during: [\x0a\x09\x09\x09\x09\x09anIRMethod internalVariables ifNotEmpty: [ :internalVars |\x0a\x09\x09\x09\x09\x09\x09self stream nextPutVars: \x0a\x09\x09\x09\x09\x09\x09\x09(internalVars collect: [ :each | each variable alias ]) asSet ].\x0a\x09\x09\x09\x09anIRMethod scope hasNonLocalReturn\x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09self stream nextPutNonLocalReturnHandlingWith: [\x0a\x09\x09\x09\x09\x09\x09\x09super visitIRMethod: anIRMethod ] ]\x0a\x09\x09\x09\x09\x09ifFalse: [ super visitIRMethod: anIRMethod ] ]]\x0a\x09\x09\x09arguments: anIRMethod arguments.\x0a\x09\x09\x09\x0a\x09^ anIRMethod compiledSource: self contents; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutFunctionWith:arguments:", "stream", "nextPutVars:", "collect:", "tempDeclarations", "asVariableName", "name", "nextPutContextFor:during:", "ifNotEmpty:", "internalVariables", "asSet", "alias", "variable", "ifTrue:ifFalse:", "hasNonLocalReturn", "scope", "nextPutNonLocalReturnHandlingWith:", "visitIRMethod:", "arguments", "compiledSource:", "contents", "yourself"]
}, function ($methodClass){ return function (anIRMethod){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["stream"]=1
//>>excludeEnd("ctx");
][0])._nextPutFunctionWith_arguments_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["stream"]=2
//>>excludeEnd("ctx");
][0])._nextPutVars_([$recv($recv(anIRMethod)._tempDeclarations())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(each)._name())._asVariableName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["collect:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutVars:"]=1
//>>excludeEnd("ctx");
][0];
return $recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["stream"]=3
//>>excludeEnd("ctx");
][0])._nextPutContextFor_during_(anIRMethod,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv($recv(anIRMethod)._internalVariables())._ifNotEmpty_((function(internalVars){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["stream"]=4
//>>excludeEnd("ctx");
][0])._nextPutVars_($recv($recv(internalVars)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return $recv($recv(each)._variable())._alias();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({each:each},$ctx4,5)});
//>>excludeEnd("ctx");
})))._asSet());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({internalVars:internalVars},$ctx3,4)});
//>>excludeEnd("ctx");
}));
$1=$recv($recv(anIRMethod)._scope())._hasNonLocalReturn();
if($core.assert($1)){
return $recv($self._stream())._nextPutNonLocalReturnHandlingWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitIRMethod_.call($self,anIRMethod))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["visitIRMethod:"]=1,$ctx4.supercall = false
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,7)});
//>>excludeEnd("ctx");
}));
} else {
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitIRMethod_.call($self,anIRMethod))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.supercall = false
//>>excludeEnd("ctx");
][0];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$recv(anIRMethod)._arguments());
$recv(anIRMethod)._compiledSource_($self._contents());
return $recv(anIRMethod)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRMethod:",{anIRMethod:anIRMethod})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRNonLocalReturn:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRNonLocalReturn"],
source: "visitIRNonLocalReturn: anIRNonLocalReturn\x0a\x09self stream nextPutNonLocalReturnWith: [\x0a\x09\x09super visitIRNonLocalReturn: anIRNonLocalReturn ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutNonLocalReturnWith:", "stream", "visitIRNonLocalReturn:"]
}, function ($methodClass){ return function (anIRNonLocalReturn){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._stream())._nextPutNonLocalReturnWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitIRNonLocalReturn_.call($self,anIRNonLocalReturn))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.supercall = false
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRNonLocalReturn:",{anIRNonLocalReturn:anIRNonLocalReturn})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRReturn:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRReturn"],
source: "visitIRReturn: anIRReturn\x0a\x09self stream nextPutReturnWith: [\x0a\x09\x09super visitIRReturn: anIRReturn ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutReturnWith:", "stream", "visitIRReturn:"]
}, function ($methodClass){ return function (anIRReturn){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._stream())._nextPutReturnWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._visitIRReturn_.call($self,anIRReturn))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.supercall = false
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRReturn:",{anIRReturn:anIRReturn})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRSend:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "visitIRSend: anIRSend\x0a\x09| prefixes suffixes workBlock |\x0a\x09prefixes := #().\x0a\x09suffixes := #().\x0a\x09workBlock := [ self visitSend: anIRSend ].\x0a\x09\x0a\x09anIRSend index < (anIRSend method sendIndexes at: anIRSend selector) size ifTrue: [\x0a\x09\x09suffixes add:\x0a\x09\x09\x09anIRSend scope alias,\x0a\x09\x09\x09'.sendIdx[',\x0a\x09\x09\x09anIRSend selector asJavaScriptSource,\x0a\x09\x09\x09']=',\x0a\x09\x09\x09anIRSend index asString ].\x0a\x09\x0a\x09anIRSend receiver isSuper ifTrue: [\x0a\x09\x09prefixes add: anIRSend scope alias, '.supercall = true'.\x0a\x09\x09suffixes add: anIRSend scope alias, '.supercall = false'.\x0a\x09\x09workBlock := [ self visitSuperSend: anIRSend ] ].\x0a\x0a\x09self stream nextPutBefore: prefixes after: suffixes with: workBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitSend:", "ifTrue:", "<", "index", "size", "at:", "sendIndexes", "method", "selector", "add:", ",", "alias", "scope", "asJavaScriptSource", "asString", "isSuper", "receiver", "visitSuperSend:", "nextPutBefore:after:with:", "stream"]
}, function ($methodClass){ return function (anIRSend){
var self=this,$self=this;
var prefixes,suffixes,workBlock;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
prefixes=[];
suffixes=[];
workBlock=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._visitSend_(anIRSend);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
$1=$recv([$recv(anIRSend)._index()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["index"]=1
//>>excludeEnd("ctx");
][0]).__lt($recv($recv($recv($recv(anIRSend)._method())._sendIndexes())._at_([$recv(anIRSend)._selector()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["selector"]=1
//>>excludeEnd("ctx");
][0]))._size());
if($core.assert($1)){
[$recv(suffixes)._add_([$recv([$recv([$recv([$recv([$recv([$recv(anIRSend)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=1
//>>excludeEnd("ctx");
][0])._alias()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["alias"]=1
//>>excludeEnd("ctx");
][0]).__comma(".sendIdx[")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=4
//>>excludeEnd("ctx");
][0]).__comma($recv($recv(anIRSend)._selector())._asJavaScriptSource())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=3
//>>excludeEnd("ctx");
][0]).__comma("]=")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma($recv($recv(anIRSend)._index())._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
}
$2=$recv($recv(anIRSend)._receiver())._isSuper();
if($core.assert($2)){
[$recv(prefixes)._add_([$recv([$recv([$recv(anIRSend)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=2
//>>excludeEnd("ctx");
][0])._alias()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["alias"]=2
//>>excludeEnd("ctx");
][0]).__comma(".supercall = true")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=2
//>>excludeEnd("ctx");
][0];
$recv(suffixes)._add_($recv($recv($recv(anIRSend)._scope())._alias()).__comma(".supercall = false"));
workBlock=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._visitSuperSend_(anIRSend);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
});
workBlock;
}
$recv($self._stream())._nextPutBefore_after_with_(prefixes,suffixes,workBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRSend:",{anIRSend:anIRSend,prefixes:prefixes,suffixes:suffixes,workBlock:workBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRSequence:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSequence"],
source: "visitIRSequence: anIRSequence\x0a\x09anIRSequence dagChildren do: [ :each |\x0a\x09\x09self stream nextPutStatementWith: [ self visit: each ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "dagChildren", "nextPutStatementWith:", "stream", "visit:"]
}, function ($methodClass){ return function (anIRSequence){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(anIRSequence)._dagChildren())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._stream())._nextPutStatementWith_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._visit_(each);
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
}, function($ctx1) {$ctx1.fill(self,"visitIRSequence:",{anIRSequence:anIRSequence})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRTempDeclaration:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRTempDeclaration"],
source: "visitIRTempDeclaration: anIRTempDeclaration\x0a\x09\x22self stream\x0a\x09\x09nextPutAll: 'var ', anIRTempDeclaration name asVariableName, ';';\x0a\x09\x09lf\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anIRTempDeclaration){
var self=this,$self=this;
return self;

}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRValue:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRValue"],
source: "visitIRValue: anIRValue\x0a\x09self stream nextPutAll: anIRValue value asJavaScriptSource",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "stream", "asJavaScriptSource", "value"]
}, function ($methodClass){ return function (anIRValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._stream())._nextPutAll_($recv($recv(anIRValue)._value())._asJavaScriptSource());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRValue:",{anIRValue:anIRValue})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRVariable:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRVariable"],
source: "visitIRVariable: anIRVariable\x0a\x09self stream nextPutAll: anIRVariable variable alias",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "stream", "alias", "variable"]
}, function ($methodClass){ return function (anIRVariable){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._stream())._nextPutAll_($recv($recv(anIRVariable)._variable())._alias());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRVariable:",{anIRVariable:anIRVariable})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitIRVerbatim:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRVerbatim"],
source: "visitIRVerbatim: anIRVerbatim\x0a\x09self stream nextPutAll: anIRVerbatim source",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "stream", "source"]
}, function ($methodClass){ return function (anIRVerbatim){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._stream())._nextPutAll_($recv(anIRVerbatim)._source());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitIRVerbatim:",{anIRVerbatim:anIRVerbatim})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitInstructionList:enclosedBetween:and:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray", "aString", "anotherString"],
source: "visitInstructionList: anArray enclosedBetween: aString and: anotherString\x0a\x09self stream nextPutAll: aString.\x0a\x09anArray\x0a\x09\x09do: [ :each | self visit: each ]\x0a\x09\x09separatedBy: [ self stream nextPutAll: ',' ].\x0a\x09stream nextPutAll: anotherString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "stream", "do:separatedBy:", "visit:"]
}, function ($methodClass){ return function (anArray,aString,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["stream"]=1
//>>excludeEnd("ctx");
][0])._nextPutAll_(aString)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv(anArray)._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._visit_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv($self._stream())._nextPutAll_(",")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($self.stream)._nextPutAll_(anotherString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitInstructionList:enclosedBetween:and:",{anArray:anArray,aString:aString,anotherString:anotherString})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitReceiver:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "visitReceiver: anIRInstruction\x0a\x09anIRInstruction asReceiver\x0a\x09\x09ifNotNil: [ :instr | self visit: instr ]\x0a\x09\x09ifNil: [\x0a\x09\x09\x09self stream nextPutAll: '$recv('.\x0a\x09\x09\x09self visit: anIRInstruction.\x0a\x09\x09\x09self stream nextPutAll: ')' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:ifNil:", "asReceiver", "visit:", "nextPutAll:", "stream"]
}, function ($methodClass){ return function (anIRInstruction){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anIRInstruction)._asReceiver();
if($1 == null || $1.a$nil){
[$recv([$self._stream()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["stream"]=1
//>>excludeEnd("ctx");
][0])._nextPutAll_("$recv(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$self._visit_(anIRInstruction);
$recv($self._stream())._nextPutAll_(")");
} else {
var instr;
instr=$1;
[$self._visit_(instr)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["visit:"]=1
//>>excludeEnd("ctx");
][0];
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitReceiver:",{anIRInstruction:anIRInstruction})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitSend:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "visitSend: anIRSend\x0a\x09self visitReceiver: anIRSend receiver.\x0a\x09self stream nextPutAll: '.', anIRSend javaScriptSelector.\x0a\x09self\x0a\x09\x09visitInstructionList: anIRSend arguments\x0a\x09\x09enclosedBetween: '(' and: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["visitReceiver:", "receiver", "nextPutAll:", "stream", ",", "javaScriptSelector", "visitInstructionList:enclosedBetween:and:", "arguments"]
}, function ($methodClass){ return function (anIRSend){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._visitReceiver_($recv(anIRSend)._receiver());
$recv($self._stream())._nextPutAll_(".".__comma($recv(anIRSend)._javaScriptSelector()));
$self._visitInstructionList_enclosedBetween_and_($recv(anIRSend)._arguments(),"(",")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSend:",{anIRSend:anIRSend})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);

$core.addMethod(
$core.method({
selector: "visitSuperSend:",
protocol: "visiting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRSend"],
source: "visitSuperSend: anIRSend\x0a\x09self stream\x0a\x09\x09nextPutAll: anIRSend receiver variable lookupAsJavaScriptSource, '.';\x0a\x09\x09nextPutAll: anIRSend javaScriptSelector, '.call'.\x0a\x09self\x0a\x09\x09visitInstructionList: {anIRSend receiver asReceiver}, anIRSend arguments\x0a\x09\x09enclosedBetween: '(' and: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "stream", ",", "lookupAsJavaScriptSource", "variable", "receiver", "javaScriptSelector", "visitInstructionList:enclosedBetween:and:", "asReceiver", "arguments"]
}, function ($methodClass){ return function (anIRSend){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._stream();
[$recv($1)._nextPutAll_([$recv($recv($recv([$recv(anIRSend)._receiver()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["receiver"]=1
//>>excludeEnd("ctx");
][0])._variable())._lookupAsJavaScriptSource()).__comma(".")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._nextPutAll_([$recv($recv(anIRSend)._javaScriptSelector()).__comma(".call")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]);
$self._visitInstructionList_enclosedBetween_and_($recv([$recv($recv(anIRSend)._receiver())._asReceiver()]).__comma($recv(anIRSend)._arguments()),"(",")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSuperSend:",{anIRSend:anIRSend})});
//>>excludeEnd("ctx");
}; }),
$globals.IRJSTranslator);



$core.addClass("JSStream", $globals.Object, ["stream", "omitSemicolon"], "Compiler-IR");
$core.addMethod(
$core.method({
selector: "contents",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09^ stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["contents"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.stream)._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := '' writeStream.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "writeStream"]
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
$self.stream=""._writeStream();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "lf",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lf\x0a\x09stream lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lf"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.stream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lf",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPut: aString\x0a\x09stream nextPut: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPut:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.stream)._nextPut_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutAll:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPutAll: aString\x0a\x09stream nextPutAll: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.stream)._nextPutAll_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutAssignLhs:rhs:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "nextPutAssignLhs: aBlock rhs: anotherBlock\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '='.\x0a\x09anotherBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value", "nextPutAll:"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aBlock)._value()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["value"]=1
//>>excludeEnd("ctx");
][0];
$recv($self.stream)._nextPutAll_("=");
$recv(anotherBlock)._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutAssignLhs:rhs:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutBefore:after:with:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["prefixCollection", "suffixCollection", "aBlock"],
source: "nextPutBefore: prefixCollection after: suffixCollection with: aBlock\x0a\x09suffixCollection isEmpty\x0a\x09\x09ifTrue: [ self nextPutBefore: prefixCollection with: aBlock ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09nextPutAll: '['; nextPutBefore: prefixCollection with: aBlock; lf;\x0a\x09\x09\x09\x09nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);'; lf.\x0a\x09\x09\x09suffixCollection do: [ :each | self nextPutAll: ','; nextPutAll: each ].\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09lf;\x0a\x09\x09\x09\x09nextPutAll: '//>>excludeEnd(\x22ctx\x22);'; lf;\x0a\x09\x09\x09\x09nextPutAll: '][0]' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isEmpty", "nextPutBefore:with:", "nextPutAll:", "lf", "do:"]
}, function ($methodClass){ return function (prefixCollection,suffixCollection,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(suffixCollection)._isEmpty();
if($core.assert($1)){
[$self._nextPutBefore_with_(prefixCollection,aBlock)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutBefore:with:"]=1
//>>excludeEnd("ctx");
][0];
} else {
[$self._nextPutAll_("[")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$self._nextPutBefore_with_(prefixCollection,aBlock);
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
$recv(suffixCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$self._nextPutAll_(",")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
return [$self._nextPutAll_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=4
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=3
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_("//>>excludeEnd(\x22ctx\x22);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=5
//>>excludeEnd("ctx");
][0];
$self._lf();
$self._nextPutAll_("][0]");
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutBefore:after:with:",{prefixCollection:prefixCollection,suffixCollection:suffixCollection,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutBefore:with:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "aBlock"],
source: "nextPutBefore: aCollection with: aBlock\x0a\x09aCollection isEmpty ifTrue: [ aBlock value ] ifFalse: [\x0a\x09\x09self nextPutAll: '('; lf; nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);'; lf.\x0a\x09\x09aCollection do: [ :each | self nextPutAll: each; nextPutAll: ',' ].\x0a\x09\x09self lf; nextPutAll: '//>>excludeEnd(\x22ctx\x22);'; lf.\x0a\x09\x09aBlock value.\x0a\x09\x09self nextPutAll: ')' ]\x0a",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isEmpty", "value", "nextPutAll:", "lf", "do:"]
}, function ($methodClass){ return function (aCollection,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aCollection)._isEmpty();
if($core.assert($1)){
[$recv(aBlock)._value()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["value"]=1
//>>excludeEnd("ctx");
][0];
} else {
[$self._nextPutAll_("(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$self._nextPutAll_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
return [$self._nextPutAll_(",")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=4
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=3
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_("//>>excludeEnd(\x22ctx\x22);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=5
//>>excludeEnd("ctx");
][0];
$self._lf();
$recv(aBlock)._value();
$self._nextPutAll_(")");
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutBefore:with:",{aCollection:aCollection,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutBlockContextFor:during:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRClosure", "aBlock"],
source: "nextPutBlockContextFor: anIRClosure during: aBlock\x0a\x09anIRClosure requiresSmalltalkContext ifFalse: [ ^ aBlock value ].\x0a\x09self\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'return $core.withContext(function(', anIRClosure scope alias, ') {';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ctx\x22);';\x0a\x09\x09lf.\x0a\x09\x0a\x09aBlock value.\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '}, function(', anIRClosure scope alias, ') {';\x0a\x09\x09nextPutAll: anIRClosure scope alias, '.fillBlock({'.\x0a\x09\x0a\x09anIRClosure locals\x0a\x09\x09do: [ :each |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09nextPutAll: each asVariableName;\x0a\x09\x09\x09\x09nextPutAll: ':';\x0a\x09\x09\x09\x09nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ self nextPutAll: ',' ].\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '},';\x0a\x09\x09nextPutAll: anIRClosure scope outerScope alias, ',', anIRClosure scope blockIndex asString, ')});';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ctx\x22);'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "requiresSmalltalkContext", "value", "nextPutAll:", "lf", ",", "alias", "scope", "do:separatedBy:", "locals", "asVariableName", "outerScope", "asString", "blockIndex"]
}, function ($methodClass){ return function (anIRClosure,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anIRClosure)._requiresSmalltalkContext();
if(!$core.assert($1)){
return [$recv(aBlock)._value()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["value"]=1
//>>excludeEnd("ctx");
][0];
}
[$self._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_([$recv(["return $core.withContext(function(".__comma([$recv([$recv(anIRClosure)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=1
//>>excludeEnd("ctx");
][0])._alias()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["alias"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(") {")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_("//>>excludeEnd(\x22ctx\x22);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=3
//>>excludeEnd("ctx");
][0];
$recv(aBlock)._value();
[$self._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=4
//>>excludeEnd("ctx");
][0];
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=4
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_([$recv(["}, function(".__comma([$recv([$recv(anIRClosure)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=2
//>>excludeEnd("ctx");
][0])._alias()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["alias"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=4
//>>excludeEnd("ctx");
][0]).__comma(") {")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=5
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_([$recv([$recv([$recv(anIRClosure)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=3
//>>excludeEnd("ctx");
][0])._alias()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["alias"]=3
//>>excludeEnd("ctx");
][0]).__comma(".fillBlock({")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=6
//>>excludeEnd("ctx");
][0];
$recv($recv(anIRClosure)._locals())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$self._nextPutAll_([$recv(each)._asVariableName()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asVariableName"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=7
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_(":")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=8
//>>excludeEnd("ctx");
][0];
return [$self._nextPutAll_($recv(each)._asVariableName())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=9
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$self._nextPutAll_(",")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=10
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
[$self._nextPutAll_("},")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=11
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_([$recv([$recv($recv($recv($recv([$recv(anIRClosure)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=4
//>>excludeEnd("ctx");
][0])._outerScope())._alias()).__comma(",")).__comma($recv($recv($recv(anIRClosure)._scope())._blockIndex())._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=7
//>>excludeEnd("ctx");
][0]).__comma(")});")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=12
//>>excludeEnd("ctx");
][0];
$self._lf();
$self._nextPutAll_("//>>excludeEnd(\x22ctx\x22);");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutBlockContextFor:during:",{anIRClosure:anIRClosure,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutClosureWith:arguments:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anArray"],
source: "nextPutClosureWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: '(function('.\x0a\x09anArray\x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09aBlock value.\x0a\x09stream lf; nextPutAll: '})'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"]
}, function ($methodClass){ return function (aBlock,anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
[$recv($self.stream)._nextPutAll_("(function(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv(anArray)._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv($self.stream)._nextPutAll_($recv(each)._asVariableName())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.stream)._nextPut_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=$self.stream;
[$recv($1)._nextPutAll_("){")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
[$recv($1)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
$recv(aBlock)._value();
$2=$self.stream;
$recv($2)._lf();
$recv($2)._nextPutAll_("})");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutClosureWith:arguments:",{aBlock:aBlock,anArray:anArray})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutContextFor:during:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aBlock"],
source: "nextPutContextFor: aMethod during: aBlock\x0a\x09aMethod requiresSmalltalkContext ifFalse: [ ^ aBlock value ].\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: 'return $core.withContext(function(', aMethod scope alias, ') {';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ctx\x22);';\x0a\x09\x09lf.\x0a\x0a\x09aBlock value.\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '}, function(', aMethod scope alias, ') {', aMethod scope alias;\x0a\x09\x09nextPutAll: '.fill(self,', aMethod selector asJavaScriptSource, ',{'.\x0a\x0a\x09aMethod locals\x0a\x09\x09do: [ :each |\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09nextPutAll: each asVariableName;\x0a\x09\x09\x09\x09nextPutAll: ':';\x0a\x09\x09\x09\x09nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ self nextPutAll: ',' ].\x0a\x09\x0a\x09self\x0a\x09\x09nextPutAll: '})});';\x0a\x09\x09lf;\x0a\x09\x09nextPutAll: '//>>excludeEnd(\x22ctx\x22);'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "requiresSmalltalkContext", "value", "nextPutAll:", "lf", ",", "alias", "scope", "asJavaScriptSource", "selector", "do:separatedBy:", "locals", "asVariableName"]
}, function ($methodClass){ return function (aMethod,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aMethod)._requiresSmalltalkContext();
if(!$core.assert($1)){
return [$recv(aBlock)._value()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["value"]=1
//>>excludeEnd("ctx");
][0];
}
[$self._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_([$recv(["return $core.withContext(function(".__comma([$recv([$recv(aMethod)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=1
//>>excludeEnd("ctx");
][0])._alias()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["alias"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(") {")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_("//>>excludeEnd(\x22ctx\x22);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=3
//>>excludeEnd("ctx");
][0];
$recv(aBlock)._value();
[$self._nextPutAll_("//>>excludeStart(\x22ctx\x22, pragmas.excludeDebugContexts);")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=4
//>>excludeEnd("ctx");
][0];
[$self._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=4
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_([$recv([$recv(["}, function(".__comma([$recv([$recv(aMethod)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=2
//>>excludeEnd("ctx");
][0])._alias()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["alias"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=5
//>>excludeEnd("ctx");
][0]).__comma(") {")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=4
//>>excludeEnd("ctx");
][0]).__comma($recv($recv(aMethod)._scope())._alias())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=5
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_([$recv(".fill(self,".__comma($recv($recv(aMethod)._selector())._asJavaScriptSource())).__comma(",{")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=6
//>>excludeEnd("ctx");
][0];
$recv($recv(aMethod)._locals())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$self._nextPutAll_([$recv(each)._asVariableName()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asVariableName"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=7
//>>excludeEnd("ctx");
][0];
[$self._nextPutAll_(":")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=8
//>>excludeEnd("ctx");
][0];
return [$self._nextPutAll_($recv(each)._asVariableName())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=9
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$self._nextPutAll_(",")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=10
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
[$self._nextPutAll_("})});")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=11
//>>excludeEnd("ctx");
][0];
$self._lf();
$self._nextPutAll_("//>>excludeEnd(\x22ctx\x22);");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutContextFor:during:",{aMethod:aMethod,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutFunctionWith:arguments:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anArray"],
source: "nextPutFunctionWith: aBlock arguments: anArray\x0a\x09stream nextPutAll: 'function ('.\x0a\x09anArray\x0a\x09\x09do: [ :each | stream nextPutAll: each asVariableName ]\x0a\x09\x09separatedBy: [ stream nextPut: ',' ].\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09stream nextPutAll: 'var self=this,$self=this;'; lf.\x0a\x09aBlock value.\x0a\x09stream lf; nextPutAll: '}'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "do:separatedBy:", "asVariableName", "nextPut:", "lf", "value"]
}, function ($methodClass){ return function (aBlock,anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
[$recv($self.stream)._nextPutAll_("function (")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv(anArray)._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv($self.stream)._nextPutAll_($recv(each)._asVariableName())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.stream)._nextPut_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=$self.stream;
[$recv($1)._nextPutAll_("){")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
[$recv($1)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
$2=$self.stream;
[$recv($2)._nextPutAll_("var self=this,$self=this;")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=4
//>>excludeEnd("ctx");
][0];
[$recv($2)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
$recv(aBlock)._value();
$3=$self.stream;
$recv($3)._lf();
$recv($3)._nextPutAll_("}");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutFunctionWith:arguments:",{aBlock:aBlock,anArray:anArray})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutIf:then:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "nextPutIf: aBlock then: anotherBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09anotherBlock value.\x0a\x09stream nextPutAll: '}'.\x0a\x09self omitSemicolon: true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "value", "lf", "omitSemicolon:"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
[$recv($self.stream)._nextPutAll_("if(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aBlock)._value()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["value"]=1
//>>excludeEnd("ctx");
][0];
$1=$self.stream;
[$recv($1)._nextPutAll_("){")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
$recv($1)._lf();
$recv(anotherBlock)._value();
$recv($self.stream)._nextPutAll_("}");
$self._omitSemicolon_(true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutIf:then:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutIf:then:else:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "ifBlock", "elseBlock"],
source: "nextPutIf: aBlock then: ifBlock else: elseBlock\x0a\x09stream nextPutAll: 'if('.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: '){'; lf.\x0a\x09ifBlock value.\x0a\x09stream nextPutAll: '} else {'; lf.\x0a\x09elseBlock value.\x0a\x09stream nextPutAll: '}'.\x0a\x09self omitSemicolon: true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "value", "lf", "omitSemicolon:"]
}, function ($methodClass){ return function (aBlock,ifBlock,elseBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
[$recv($self.stream)._nextPutAll_("if(")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aBlock)._value()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["value"]=1
//>>excludeEnd("ctx");
][0];
$1=$self.stream;
[$recv($1)._nextPutAll_("){")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
[$recv($1)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
[$recv(ifBlock)._value()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["value"]=2
//>>excludeEnd("ctx");
][0];
$2=$self.stream;
[$recv($2)._nextPutAll_("} else {")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
$recv($2)._lf();
$recv(elseBlock)._value();
$recv($self.stream)._nextPutAll_("}");
$self._omitSemicolon_(true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutIf:then:else:",{aBlock:aBlock,ifBlock:ifBlock,elseBlock:elseBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutNonLocalReturnHandlingWith:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextPutNonLocalReturnHandlingWith: aBlock\x0a\x09stream\x0a\x09\x09nextPutAll: 'var $early={};'; lf;\x0a\x09\x09nextPutAll: 'try {'; lf.\x0a\x09aBlock value.\x0a\x09stream\x0a\x09\x09nextPutAll: '}'; lf;\x0a\x09\x09nextPutAll: 'catch(e) {if(e===$early)return e[0]; throw e}'; lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "lf", "value"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$self.stream;
[$recv($1)._nextPutAll_("var $early={};")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._nextPutAll_("try {")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
[$recv($1)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=2
//>>excludeEnd("ctx");
][0];
$recv(aBlock)._value();
$2=$self.stream;
[$recv($2)._nextPutAll_("}")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
[$recv($2)._lf()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["lf"]=3
//>>excludeEnd("ctx");
][0];
$recv($2)._nextPutAll_("catch(e) {if(e===$early)return e[0]; throw e}");
$recv($2)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutNonLocalReturnHandlingWith:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutNonLocalReturnWith:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextPutNonLocalReturnWith: aBlock\x0a\x09stream nextPutAll: 'throw $early=['.\x0a\x09aBlock value.\x0a\x09stream nextPutAll: ']'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "value"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($self.stream)._nextPutAll_("throw $early=[")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aBlock)._value();
$recv($self.stream)._nextPutAll_("]");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutNonLocalReturnWith:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutReturnWith:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextPutReturnWith: aBlock\x0a\x09stream nextPutAll: 'return '.\x0a\x09aBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "value"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.stream)._nextPutAll_("return ");
$recv(aBlock)._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutReturnWith:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutStatementWith:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextPutStatementWith: aBlock\x0a\x09self omitSemicolon: false.\x0a\x09aBlock value.\x0a\x09self omitSemicolon ifFalse: [ stream nextPutAll: ';' ].\x0a\x09self omitSemicolon: false.\x0a\x09stream lf",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["omitSemicolon:", "value", "ifFalse:", "omitSemicolon", "nextPutAll:", "lf"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
[$self._omitSemicolon_(false)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["omitSemicolon:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aBlock)._value();
$1=$self._omitSemicolon();
if(!$core.assert($1)){
$recv($self.stream)._nextPutAll_(";");
}
$self._omitSemicolon_(false);
$recv($self.stream)._lf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutStatementWith:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "nextPutVars:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "nextPutVars: aCollection\x0a\x09aCollection ifNotEmpty: [\x0a\x09\x09stream nextPutAll: 'var '.\x0a\x09\x09aCollection\x0a\x09\x09\x09do: [ :each | stream nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ stream nextPutAll: ',' ].\x0a\x09\x09stream nextPutAll: ';'; lf ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotEmpty:", "nextPutAll:", "do:separatedBy:", "lf"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aCollection)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv($self.stream)._nextPutAll_("var ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aCollection)._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv($self.stream)._nextPutAll_(each)
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
return [$recv($self.stream)._nextPutAll_(",")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["nextPutAll:"]=3
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$1=$self.stream;
$recv($1)._nextPutAll_(";");
return $recv($1)._lf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutVars:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "omitSemicolon",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "omitSemicolon\x0a\x09^ omitSemicolon",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.omitSemicolon;

}; }),
$globals.JSStream);

$core.addMethod(
$core.method({
selector: "omitSemicolon:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "omitSemicolon: aBoolean\x0a\x09omitSemicolon := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
$self.omitSemicolon=aBoolean;
return self;

}; }),
$globals.JSStream);


$core.setTraitComposition([{trait: $globals.TPragmator}], $globals.IRPragmator);

$core.addMethod(
$core.method({
selector: "requiresSmalltalkContext",
protocol: "*Compiler-IR",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresSmalltalkContext\x0a\x09\x22Answer true if the receiver requires a smalltalk context.\x0a\x09Only send nodes require a context.\x0a\x09\x0a\x09If no node requires a context, the method will be compiled without one.\x0a\x09See `IRJSTranslator` and `JSStream` for context creation\x22\x0a\x09\x0a\x09^ self dagChildren anySatisfy: [ :each | each requiresSmalltalkContext ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["anySatisfy:", "dagChildren", "requiresSmalltalkContext"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._dagChildren())._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._requiresSmalltalkContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"requiresSmalltalkContext",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTNode);

$core.addMethod(
$core.method({
selector: "subtreeNeedsAliasing",
protocol: "*Compiler-IR",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subtreeNeedsAliasing\x0a\x09^ true",
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
selector: "subtreeNeedsAliasing",
protocol: "*Compiler-IR",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subtreeNeedsAliasing\x0a\x09^ self shouldBeAliased",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldBeAliased"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._shouldBeAliased();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subtreeNeedsAliasing",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "subtreeNeedsAliasing",
protocol: "*Compiler-IR",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subtreeNeedsAliasing\x0a\x09^ true",
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
selector: "subtreeNeedsAliasing",
protocol: "*Compiler-IR",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subtreeNeedsAliasing\x0a\x09^ self shouldBeAliased or: [\x0a\x09\x09self dagChildren anySatisfy: [ :each | each subtreeNeedsAliasing ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["or:", "shouldBeAliased", "anySatisfy:", "dagChildren", "subtreeNeedsAliasing"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._shouldBeAliased())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._dagChildren())._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each)._subtreeNeedsAliasing();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subtreeNeedsAliasing",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ExpressionNode);

$core.addMethod(
$core.method({
selector: "requiresSmalltalkContext",
protocol: "*Compiler-IR",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresSmalltalkContext\x0a\x09^ true",
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
selector: "asReceiver",
protocol: "*Compiler-IR",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asReceiver\x0a\x09^ self class receiverNames\x0a\x09\x09at: self name\x0a\x09\x09ifPresent: [ :newName | self copy name: newName; yourself ]\x0a\x09\x09ifAbsent: [ self ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifPresent:ifAbsent:", "receiverNames", "class", "name", "name:", "copy", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv($recv($self._class())._receiverNames())._at_ifPresent_ifAbsent_($self._name(),(function(newName){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$self._copy();
$recv($1)._name_(newName);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({newName:newName},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return self;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asReceiver",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PseudoVar);

$core.addMethod(
$core.method({
selector: "asReceiver",
protocol: "*Compiler-IR",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asReceiver\x0a\x09\x22Return customized copy to use as receiver,\x0a\x09or self if suffices.\x22\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return nil;

}; }),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "requiresSmalltalkContext",
protocol: "*Compiler-IR",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requiresSmalltalkContext\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.SendNode);

});
