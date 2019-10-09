define(["amber/boot", "require", "amber/core/SUnit"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Compiler-Tests");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("ASTMethodRunningTest", $globals.TestCase, ["receiver"], "Compiler-Tests");
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
$globals.ASTMethodRunningTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09receiver := DoIt new",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=$recv($globals.DoIt)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTMethodRunningTest);

$core.addMethod(
$core.method({
selector: "should:class:receiver:return:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "anObject", "aResult"],
source: "should: aString class: aClass receiver: anObject return: aResult\x0a\x09receiver := anObject.\x0a\x09self while: aString inClass: aClass should: [ :runBlock |\x0a\x09\x09self assert: runBlock value equals: aResult ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["while:inClass:should:", "assert:equals:", "value"]
}, function ($methodClass){ return function (aString,aClass,anObject,aResult){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=anObject;
$self._while_inClass_should_(aString,aClass,(function(runBlock){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._assert_equals_($recv(runBlock)._value(),aResult);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({runBlock:runBlock},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"should:class:receiver:return:",{aString:aString,aClass:aClass,anObject:anObject,aResult:aResult})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTMethodRunningTest);

$core.addMethod(
$core.method({
selector: "should:receiver:raise:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "anErrorClass"],
source: "should: aString receiver: anObject raise: anErrorClass\x0a\x09receiver := anObject.\x0a\x09self while: aString should: [ :runBlock |\x0a\x09\x09self should: runBlock raise: anErrorClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["while:should:", "should:raise:"]
}, function ($methodClass){ return function (aString,anObject,anErrorClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=anObject;
$self._while_should_(aString,(function(runBlock){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._should_raise_(runBlock,anErrorClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({runBlock:runBlock},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"should:receiver:raise:",{aString:aString,anObject:anObject,anErrorClass:anErrorClass})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTMethodRunningTest);

$core.addMethod(
$core.method({
selector: "should:receiver:return:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "aResult"],
source: "should: aString receiver: anObject return: aResult\x0a\x09receiver := anObject.\x0a\x09self should: aString return: aResult",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (aString,anObject,aResult){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=anObject;
$self._should_return_(aString,aResult);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"should:receiver:return:",{aString:aString,anObject:anObject,aResult:aResult})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTMethodRunningTest);

$core.addMethod(
$core.method({
selector: "should:return:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "should: aString return: anObject\x0a\x09self while: aString should: [ :runBlock |\x0a\x09\x09self assert: runBlock value equals: anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["while:should:", "assert:equals:", "value"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._while_should_(aString,(function(runBlock){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._assert_equals_($recv(runBlock)._value(),anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({runBlock:runBlock},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"should:return:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTMethodRunningTest);



$core.addClass("AbstractCompilerTest", $globals.ASTMethodRunningTest, [], "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "testAssignment",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAssignment\x0a\x09self should: 'foo | a | a := true ifTrue: [ 1 ]. ^ a' return: 1.\x0a\x09self should: 'foo | a | a := false ifTrue: [ 1 ]. ^ a' return: nil.\x0a\x0a\x09self should: 'foo | a | ^ a := true ifTrue: [ 1 ]' return: 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo | a | a := true ifTrue: [ 1 ]. ^ a",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo | a | a := false ifTrue: [ 1 ]. ^ a",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo | a | ^ a := true ifTrue: [ 1 ]",(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAssignment",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testBackslashSelectors",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBackslashSelectors\x0a\x09\x0a\x09self should: '\x5c arg ^ 4' return: 4.\x0a\x09self should: '\x5c\x5c arg ^ 42' return: 42",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("\x5c arg ^ 4",(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("\x5c\x5c arg ^ 42",(42));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBackslashSelectors",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testBlockReturn",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBlockReturn\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]' return: #(2 3 4).\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]' return: #(2 3 4).\x0a\x09self should: 'foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]' return: #(2 1 4).",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]",[(2), (3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]",[(2), (3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ #(1 2 3) collect: [ :each | each odd ifTrue: [ each + 1 ] ifFalse: [ each - 1 ] ]",[(2), (1), (4)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBlockReturn",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testCascades",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCascades\x0a\x09\x0a\x09self should: 'foo ^ Array new add: 3; add: 4; yourself' return: #(3 4)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ Array new add: 3; add: 4; yourself",[(3), (4)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCascades",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testCascadesInDynamicArray",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCascadesInDynamicArray\x0a\x09self should: 'foo | x | x := 1. ^ {x. [x:=2] value; in: [x]}' return: #(1 2)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo | x | x := 1. ^ {x. [x:=2] value; in: [x]}",[(1), (2)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCascadesInDynamicArray",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testCascadesInDynamicDictioary",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCascadesInDynamicDictioary\x0a\x09self should: 'foo | x | x := 1. ^ #{''one'' -> x. ''two'' -> ([x:=2] value; in: [x])}' return: #{'one' -> 1. 'two' -> 2}",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo | x | x := 1. ^ #{'one' -> x. 'two' -> ([x:=2] value; in: [x])}",$globals.HashedCollection._newFromPairs_(["one",(1),"two",(2)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCascadesInDynamicDictioary",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testCascadesInSend",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCascadesInSend\x0a\x09self should: 'foo | x | x := 1. ^ Array with: x with: ([x:=2] value; in: [x])' return: #(1 2)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo | x | x := 1. ^ Array with: x with: ([x:=2] value; in: [x])",[(1), (2)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCascadesInSend",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testCascadesWithInlining",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCascadesWithInlining\x0a\x09\x0a\x09self should: 'foo ^ true class; ifTrue: [ 1 ] ifFalse: [ 2 ]' return: 1.\x0a\x09self should: 'foo ^ false class; ifTrue: [ 1 ] ifFalse: [ 2 ]' return: 2",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ true class; ifTrue: [ 1 ] ifFalse: [ 2 ]",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ false class; ifTrue: [ 1 ] ifFalse: [ 2 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCascadesWithInlining",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testDynamicArrayElementsOrdered",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDynamicArrayElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. x := 2 }\x0a' return: #(1 2).\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. true ifTrue: [ x := 2 ] }\x0a' return: #(1 2).",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. x := 2 }\x0a",[(1), (2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. true ifTrue: [ x := 2 ] }\x0a",[(1), (2)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDynamicArrayElementsOrdered",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testDynamicDictionaryElementsOrdered",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDynamicDictionaryElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := ''foo''.\x0a\x09^ #{ x->1. ''bar''->(true ifTrue: [ 2 ]) }\x0a' return: #{'foo'->1. 'bar'->2}.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo\x0a\x09| x |\x0a\x09x := 'foo'.\x0a\x09^ #{ x->1. 'bar'->(true ifTrue: [ 2 ]) }\x0a",$globals.HashedCollection._newFromPairs_(["foo",(1),"bar",(2)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaryElementsOrdered",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testDynamicDictionaryWithMoreArrows",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDynamicDictionaryWithMoreArrows\x0a\x09self should: 'foo ^ #{1->2->3}' return: (HashedCollection with: 1->2->3)",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:", "with:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv((1).__minus_gt((2))).__minus_gt((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$1=$recv($globals.HashedCollection)._with_($2);
$self._should_return_("foo ^ #{1->2->3}",$1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDynamicDictionaryWithMoreArrows",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testGlobalVar",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testGlobalVar\x0a\x09self should: 'foo ^ eval class' return: BlockClosure.\x0a\x09self should: 'foo ^ Math cos: 0' return: 1.\x0a\x09self should: 'foo ^ NonExistingVar' return: nil",
referencedClasses: ["BlockClosure"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ eval class",$globals.BlockClosure);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ Math cos: 0",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ NonExistingVar",nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testGlobalVar",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testInnerTemporalDependentElementsOrdered",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInnerTemporalDependentElementsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: ''foo''->x with: ''bar''->(x := 2)\x0a' return: {'foo'->Array. 'bar'->2}.\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])\x0a' return: {'foo'->Array. 'bar'->2}.\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: ''foo''->x with: ''bar''->(true ifTrue: [ x := 2 ])\x0a' return: {'foo'->1. 'bar'->2}.\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }\x0a' return: {'foo'->1. 'bar'->2}.\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ #{ ''foo''->x. ''bar''->(true ifTrue: [ x := 2 ]) }\x0a' return: #{'foo'->1. 'bar'->2}.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:", "->"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$6,$4,$8,$9,$7,$11,$10;
$2="foo".__minus_gt($globals.Array);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$3="bar".__minus_gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
$1=[$2,$3];
$self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: 'foo'->x with: 'bar'->(x := 2)\x0a",$1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$5="foo".__minus_gt($globals.Array);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$6="bar".__minus_gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$4=[$5,$6];
$self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$8="foo".__minus_gt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=5;
//>>excludeEnd("ctx");
$9="bar".__minus_gt((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=6;
//>>excludeEnd("ctx");
$7=[$8,$9];
$self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$11="foo".__minus_gt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=7;
//>>excludeEnd("ctx");
$10=[$11,"bar".__minus_gt((2))];
$self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",$10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=4;
//>>excludeEnd("ctx");
$self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ #{ 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",$globals.HashedCollection._newFromPairs_(["foo",(1),"bar",(2)]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInnerTemporalDependentElementsOrdered",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testLexicalScope",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLexicalScope\x0a\x09self should: 'foo | a | a := 1. [ a := 2 ] value. ^ a' return: 2",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo | a | a := 1. [ a := 2 ] value. ^ a",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLexicalScope",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testLiterals",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLiterals\x0a\x09self should: 'foo ^ 1' return: 1.\x0a\x09self should: 'foo ^ ''hello''' return: 'hello'.\x0a\x09self should: 'foo ^ #(1 2 3 4)' return: #(1 2 3 4).\x0a\x09self should: 'foo ^ {1. [:x | x ] value: 2. 3. [4] value}' return: #(1 2 3 4).\x0a\x09self should: 'foo ^ true' return: true.\x0a\x09self should: 'foo ^ false' return: false.\x0a\x09self should: 'foo ^ #{1->2. 3->4}' return: #{1->2. 3->4}.\x0a\x09self should: 'foo ^ #hello' return: #hello.\x0a\x09self should: 'foo ^ $h' return: 'h'.\x0a\x09self should: 'foo ^ -123.456' return: -123.456.\x0a\x09self should: 'foo ^ -2.5e4' return: -25000.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 'hello'","hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ #(1 2 3 4)",[(1), (2), (3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ {1. [:x | x ] value: 2. 3. [4] value}",[(1), (2), (3), (4)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=4;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ true",true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=5;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ false",false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=6;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ #{1->2. 3->4}",$globals.HashedCollection._newFromPairs_([(1),(2),(3),(4)]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=7;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ #hello","hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=8;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ $h","h");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=9;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ -123.456",(-123.456));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=10;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ -2.5e4",(-25000));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLiterals",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testLocalReturn",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLocalReturn\x0a\x09self should: 'foo ^ 1' return: 1.\x0a\x09self should: 'foo ^ 1 + 1' return: 2.\x0a\x09self should: 'foo ' return: receiver.\x0a\x09self should: 'foo self asString' return: receiver.\x0a\x09self should: 'foo | a b | a := 1. b := 2. ^ a + b' return: 3",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1 + 1",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo ",$self.receiver);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo self asString",$self.receiver);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=4;
//>>excludeEnd("ctx");
$self._should_return_("foo | a b | a := 1. b := 2. ^ a + b",(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLocalReturn",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testMessageSends",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMessageSends\x0a\x09self should: 'foo ^ 1 asString' return: '1'.\x0a\x0a\x09self should: 'foo ^ 1 + 1' return: 2.\x0a\x09self should: 'foo ^ 1 + 2 * 3' return: 9.\x0a\x0a\x09self should: 'foo ^ 1 to: 3' return: #(1 2 3).\x0a\x09self should: 'foo ^ 1 to: 5 by: 2' return: #(1 3 5)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1 asString","1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1 + 1",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1 + 2 * 3",(9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1 to: 3",[(1), (2), (3)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=4;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1 to: 5 by: 2",[(1), (3), (5)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMessageSends",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testMultipleSequences",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMultipleSequences\x0a\x09self should: 'foo | a b c | a := 2. b := 3. c := a + b. ^ c * 6' return: 30",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo | a b c | a := 2. b := 3. c := a + b. ^ c * 6",(30));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMultipleSequences",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testMutableLiterals",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMutableLiterals\x0a\x09\x22Mutable literals must be aliased in cascades.\x0a\x09See https://lolg.it/amber/amber/issues/428\x22\x0a\x09\x0a\x09self \x0a\x09\x09should: 'foo ^ #( 1 2 ) at: 1 put: 3; yourself' \x0a\x09\x09return: #(3 2)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ #( 1 2 ) at: 1 put: 3; yourself",[(3), (2)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMutableLiterals",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testNestedIfTrue",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNestedIfTrue\x0a\x09self should: 'foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]' return: 1.\x0a\x09self should: 'foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]' return: nil.\x0a\x0a\x09self should: 'foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]' return: 1.\x0a\x09self should: 'foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]' return: receiver.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo true ifTrue: [ false ifTrue: [ ^ 1 ] ]",$self.receiver);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNestedIfTrue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testNestedSends",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNestedSends\x0a\x09self should: 'foo ^ (Point x: (Point x: 2 y: 3) y: 4) asString' return: (Point x: (2@3) y: 4) asString",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:", "asString", "x:y:", "@"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ (Point x: (Point x: 2 y: 3) y: 4) asString",$recv($recv($globals.Point)._x_y_((2).__at((3)),(4)))._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNestedSends",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testNilPerform",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNilPerform\x0a\x09self should: 'foo ^ nil perform: #yourself' return: nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ nil perform: #yourself",nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNilPerform",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testNonLocalReturn",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNonLocalReturn\x0a\x09self should: 'foo [ ^ 1 ] value' return: 1.\x0a\x09self should: 'foo [ ^ 1 + 1 ] value' return: 2.\x0a\x09self should: 'foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt' return: 3.\x0a\x09self should: 'foo [ :x | ^ x + x ] value: 4. ^ 2' return: 8",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo [ ^ 1 ] value",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo [ ^ 1 + 1 ] value",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo [ :x | ^ x + x ] value: 4. ^ 2",(8));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testPascalCaseGlobal",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPascalCaseGlobal\x0a\x09self should: 'foo ^Object' return: (Smalltalk globals at: 'Object').\x0a\x09self should: 'foo ^NonExistent' return: nil",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:", "at:", "globals"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^Object",$recv($recv($globals.Smalltalk)._globals())._at_("Object"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo ^NonExistent",nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPascalCaseGlobal",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testPragmaJSStatement",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPragmaJSStatement\x0a\x09self should: 'foo < inlineJS: ''return 2+3'' >' return: 5",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo < inlineJS: 'return 2+3' >",(5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPragmaJSStatement",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testReceiverEvaluatedOnceInSpecials",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReceiverEvaluatedOnceInSpecials\x0a\x09self should: 'foo |x| x := 1. ^ {[ x := x+1 ] value ifNil: []. x}' return: {2. 2}.\x0a\x09self should: 'foo |xs| xs := {nil. nil}. ^ {[ xs removeLast ] value ifNotNil: []. xs}' return: {nil. {nil}}.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo |x| x := 1. ^ {[ x := x+1 ] value ifNil: []. x}",[(2),(2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo |xs| xs := {nil. nil}. ^ {[ xs removeLast ] value ifNotNil: []. xs}",[nil,[nil]]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReceiverEvaluatedOnceInSpecials",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testRegression1242",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRegression1242\x0a\x09self should: '\x0a\x09\x09foo\x0a\x09\x09\x09|x|\x0a\x09\x09\x09x := 2.\x0a\x09\x09\x09x := nil ifNil: [].\x0a\x09\x09\x09^ x\x0a\x09' return: nil.\x0a\x09\x0a\x09self should: '\x0a\x09\x09foo\x0a\x09\x09\x09|x|\x0a\x09\x09\x09x := 2.\x0a\x09\x09\x09x := 1 ifNotNil: [].\x0a\x09\x09\x09^ x\x0a\x09' return: nil.\x0a\x09\x0a\x09self should: '\x0a\x09\x09foo\x0a\x09\x09\x09|x|\x0a\x09\x09\x09x := 2.\x0a\x09\x09\x09x := false ifFalse: [].\x0a\x09\x09\x09^ x\x0a\x09' return: nil.\x0a\x09\x0a\x09self should: '\x0a\x09\x09foo\x0a\x09\x09\x09|x|\x0a\x09\x09\x09x := 2.\x0a\x09\x09\x09x := true ifTrue: [].\x0a\x09\x09\x09^ x\x0a\x09' return: nil.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("\x0a\x09\x09foo\x0a\x09\x09\x09|x|\x0a\x09\x09\x09x := 2.\x0a\x09\x09\x09x := nil ifNil: [].\x0a\x09\x09\x09^ x\x0a\x09",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("\x0a\x09\x09foo\x0a\x09\x09\x09|x|\x0a\x09\x09\x09x := 2.\x0a\x09\x09\x09x := 1 ifNotNil: [].\x0a\x09\x09\x09^ x\x0a\x09",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("\x0a\x09\x09foo\x0a\x09\x09\x09|x|\x0a\x09\x09\x09x := 2.\x0a\x09\x09\x09x := false ifFalse: [].\x0a\x09\x09\x09^ x\x0a\x09",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("\x0a\x09\x09foo\x0a\x09\x09\x09|x|\x0a\x09\x09\x09x := 2.\x0a\x09\x09\x09x := true ifTrue: [].\x0a\x09\x09\x09^ x\x0a\x09",nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRegression1242",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testRegression1242ForReturn",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRegression1242ForReturn\x0a\x09self should: 'foo [ ^ nil ifNil: [] ] value' return: nil.\x0a\x09self should: 'foo [ ^ 1 ifNotNil: [] ] value' return: nil.\x0a\x09self should: 'foo [ ^ false ifFalse: [] ] value' return: nil.\x0a\x09self should: 'foo [ ^ true ifTrue: [] ] value' return: nil.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo [ ^ nil ifNil: [] ] value",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo [ ^ 1 ifNotNil: [] ] value",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo [ ^ false ifFalse: [] ] value",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo [ ^ true ifTrue: [] ] value",nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRegression1242ForReturn",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testRegression1244",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRegression1244\x0a\x09self should: 'foo [ ^ true ifTrue: [1] ifFalse: [2] ] value' return: 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo [ ^ true ifTrue: [1] ifFalse: [2] ] value",(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRegression1244",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testRootSuperSend",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootSuperSend\x0a\x09self \x0a\x09\x09should: 'foo ^ super class' \x0a\x09\x09receiver: ProtoObject new\x0a\x09\x09raise: MessageNotUnderstood",
referencedClasses: ["ProtoObject", "MessageNotUnderstood"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:receiver:raise:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_receiver_raise_("foo ^ super class",$recv($globals.ProtoObject)._new(),$globals.MessageNotUnderstood);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootSuperSend",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testSendReceiverAndArgumentsOrdered",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSendReceiverAndArgumentsOrdered\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: x with: (true ifTrue: [ x := 2 ])\x0a' return: #(1 2).\x0a\x0a\x09self should: 'foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: x with: (true ifTrue: [ x := 2 ])\x0a' return: {Array. 2}.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: x with: (true ifTrue: [ x := 2 ])\x0a",[(1), (2)]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: x with: (true ifTrue: [ x := 2 ])\x0a",[$globals.Array,(2)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSendReceiverAndArgumentsOrdered",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testSuperSend",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSuperSend\x0a\x09self \x0a\x09\x09should: 'foo ^ super isBoolean' \x0a\x09\x09receiver: true\x0a\x09\x09return: false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:receiver:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_receiver_return_("foo ^ super isBoolean",true,false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSuperSend",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testSuperSend2",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSuperSend2\x0a\x09self \x0a\x09\x09should: 'foo ^ super isNil'\x0a\x09\x09receiver: nil\x0a\x09\x09return: false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:receiver:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_receiver_return_("foo ^ super isNil",nil,false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSuperSend2",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testSuperSend3",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSuperSend3\x0a\x09self \x0a\x09\x09should: 'doo ^ super isNil'\x0a\x09\x09class: Object\x0a\x09\x09receiver: nil\x0a\x09\x09return: false",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:class:receiver:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_class_receiver_return_("doo ^ super isNil",$globals.Object,nil,false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSuperSend3",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testSuperSend4",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSuperSend4\x0a\x09self \x0a\x09\x09should: 'foo ^ super asJavaScriptObject'\x0a\x09\x09receiver: 'me'\x0a\x09\x09return: #('m' 'e')",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:receiver:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_receiver_return_("foo ^ super asJavaScriptObject","me",["m", "e"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSuperSend4",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testSuperSend5",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSuperSend5\x0a\x09self \x0a\x09\x09should: 'foo [super addLast: 4] on: Error do: [ self add: 5 ]. ^ self'\x0a\x09\x09class: SequenceableCollection\x0a\x09\x09receiver: #(1 2 3)\x0a\x09\x09return: #(1 2 3 5)",
referencedClasses: ["SequenceableCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:class:receiver:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_class_receiver_return_("foo [super addLast: 4] on: Error do: [ self add: 5 ]. ^ self",$globals.SequenceableCollection,[(1), (2), (3)],[(1), (2), (3), (5)]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSuperSend5",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testSuperSend6",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSuperSend6\x0a\x09self \x0a\x09\x09should: 'foo ^ super ifTrue: [ true ] ifFalse: [ false ]' \x0a\x09\x09receiver: true\x0a\x09\x09raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:receiver:raise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_receiver_raise_("foo ^ super ifTrue: [ true ] ifFalse: [ false ]",true,$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSuperSend6",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testTempVariables",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTempVariables\x0a\x09self should: 'foo | a | ^ a' return: nil.\x0a\x09self should: 'foo | AVariable | ^ AVariable' return: nil.\x0a\x09self should: 'foo | a b c | ^ c' return: nil.\x0a\x09self should: 'foo | a | [ | d | ^ d ] value' return: nil.\x0a\x09\x0a\x09self should: 'foo | a | a:= 1. ^ a' return: 1.\x0a\x09self should: 'foo | AVariable | AVariable := 1. ^ AVariable' return: 1.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo | a | ^ a",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo | AVariable | ^ AVariable",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo | a b c | ^ c",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo | a | [ | d | ^ d ] value",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=4;
//>>excludeEnd("ctx");
$self._should_return_("foo | a | a:= 1. ^ a",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=5;
//>>excludeEnd("ctx");
$self._should_return_("foo | AVariable | AVariable := 1. ^ AVariable",(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTempVariables",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testThisContext",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testThisContext\x0a\x09self should: 'foo ^ [ thisContext ] value outerContext == thisContext' return: true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ [ thisContext ] value outerContext == thisContext",true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testThisContext",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testUnknownPragma",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnknownPragma\x0a\x09self should: 'foo < fooBar: ''return 2+3'' > | x | ^ x := 6' return: 6.\x0a\x09self should: 'foo | x | < fooBar: ''return 2+3'' > ^ x := 6' return: 6",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo < fooBar: 'return 2+3' > | x | ^ x := 6",(6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo | x | < fooBar: 'return 2+3' > ^ x := 6",(6));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnknownPragma",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testifFalse",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifFalse\x0a\x09self should: 'foo true ifFalse: [ ^ 1 ]' return: receiver.\x0a\x09self should: 'foo false ifFalse: [ ^ 2 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ true ifFalse: [ 1 ]' return: nil.\x0a\x09self should: 'foo ^ false ifFalse: [ 2 ]' return: 2.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo true ifFalse: [ ^ 1 ]",$self.receiver);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo false ifFalse: [ ^ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ true ifFalse: [ 1 ]",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ false ifFalse: [ 2 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifFalse",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testifFalseIfTrue",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifFalseIfTrue\x0a\x09self should: 'foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]' return: 2.\x0a\x09self should: 'foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]' return: 2.\x0a\x09self should: 'foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]' return: 2.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ false ifFalse: [ 2 ] ifTrue: [ 1 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifFalseIfTrue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testifNil",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifNil\x0a\x09self should: 'foo ^ 1 ifNil: [ 2 ]' return: 1.\x0a\x09self should: 'foo ^ nil ifNil: [ 2 ]' return: 2.\x0a\x0a\x09self should: 'foo 1 ifNil: [ ^ 2 ]' return: receiver.\x0a\x09self should: 'foo nil ifNil: [ ^ 2 ]' return: 2.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1 ifNil: [ 2 ]",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ nil ifNil: [ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo 1 ifNil: [ ^ 2 ]",$self.receiver);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo nil ifNil: [ ^ 2 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifNil",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testifNilIfNotNil",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifNilIfNotNil\x0a\x09self should: 'foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]' return: 2.\x0a\x0a\x09self should: 'foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 3.\x0a\x09self should: 'foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]' return: 2.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo nil ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifNilIfNotNil",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testifNotNil",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifNotNil\x0a\x09self should: 'foo ^ 1 ifNotNil: [ 2 ]' return: 2.\x0a\x09self should: 'foo ^ nil ifNotNil: [ 2 ]' return: nil.\x0a\x0a\x09self should: 'foo 1 ifNotNil: [ ^ 2 ]' return: 2.\x0a\x09self should: 'foo nil ifNotNil: [ ^ 2 ]' return: receiver.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1 ifNotNil: [ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ nil ifNotNil: [ 2 ]",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo 1 ifNotNil: [ ^ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo nil ifNotNil: [ ^ 2 ]",$self.receiver);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifNotNil",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testifNotNilWithArgument",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifNotNilWithArgument\x0a\x09self should: 'foo ^ 1 ifNotNil: [ :val | val + 2 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNotNil: [ :val | val + 2 ]' return: nil.\x0a\x09\x0a\x09self should: 'foo ^ 1 ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]' return: 5.\x0a\x09\x0a\x09self should: 'foo ^ 1 ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]' return: 3.\x0a\x09self should: 'foo ^ nil ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]' return: 5",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1 ifNotNil: [ :val | val + 2 ]",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ nil ifNotNil: [ :val | val + 2 ]",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1 ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ nil ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]",(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=4;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ 1 ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]",(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=5;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ nil ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]",(5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifNotNilWithArgument",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testifTrue",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifTrue\x0a\x09self should: 'foo false ifTrue: [ ^ 1 ]' return: receiver.\x0a\x09self should: 'foo true ifTrue: [ ^ 2 ]' return: 2.\x0a\x09\x0a\x09self should: 'foo ^ false ifTrue: [ 1 ]' return: nil.\x0a\x09self should: 'foo ^ true ifTrue: [ 2 ]' return: 2.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo false ifTrue: [ ^ 1 ]",$self.receiver);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo true ifTrue: [ ^ 2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ false ifTrue: [ 1 ]",nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ true ifTrue: [ 2 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifTrue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testifTrueIfFalse",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testifTrueIfFalse\x0a\x09self should: 'foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]' return: 2.\x0a\x09self should: 'foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]' return: 1.\x0a\x09\x0a\x09self should: 'foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 1.\x0a\x09self should: 'foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]' return: 2.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]",(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=1;
//>>excludeEnd("ctx");
$self._should_return_("foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=2;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]",(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["should:return:"]=3;
//>>excludeEnd("ctx");
$self._should_return_("foo ^ true ifTrue: [ 2 ] ifFalse: [ 1 ]",(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testifTrueIfFalse",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);


$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09^ self name = AbstractCompilerTest name",
referencedClasses: ["AbstractCompilerTest"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($1).__eq($recv($globals.AbstractCompilerTest)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest.a$cls);


$core.addClass("ASTDebuggerTest", $globals.AbstractCompilerTest, [], "Compiler-Tests");


$core.addClass("ASTInterpreterTest", $globals.AbstractCompilerTest, [], "Compiler-Tests");


$core.addClass("CodeGeneratorTest", $globals.AbstractCompilerTest, [], "Compiler-Tests");


$core.addClass("InliningCodeGeneratorTest", $globals.AbstractCompilerTest, [], "Compiler-Tests");


$core.addClass("ASTPCNodeVisitorTest", $globals.TestCase, [], "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "astPCNodeVisitor",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "astPCNodeVisitor\x0a\x09^ ASTPCNodeVisitor new\x0a\x09\x09index: 0;\x0a\x09\x09yourself",
referencedClasses: ["ASTPCNodeVisitor"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["index:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.ASTPCNodeVisitor)._new();
$recv($1)._index_((0));
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"astPCNodeVisitor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPCNodeVisitorTest);

$core.addMethod(
$core.method({
selector: "astPCNodeVisitorForSelector:",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "astPCNodeVisitorForSelector: aString\x0a\x09^ ASTPCNodeVisitor new\x0a\x09\x09selector: aString;\x0a\x09\x09index: 0;\x0a\x09\x09yourself",
referencedClasses: ["ASTPCNodeVisitor"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["selector:", "new", "index:", "yourself"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.ASTPCNodeVisitor)._new();
$recv($1)._selector_(aString);
$recv($1)._index_((0));
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"astPCNodeVisitorForSelector:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPCNodeVisitorTest);

$core.addMethod(
$core.method({
selector: "testJSStatementNode",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testJSStatementNode\x0a\x09| ast visitor |\x0a\x09\x0a\x09ast := self parse: 'foo <inlineJS: ''consolee.log(1)''>' forClass: Object.\x0a\x09self assert: (self astPCNodeVisitor\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) isJSStatementNode",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:forClass:", "assert:", "isJSStatementNode", "visit:", "astPCNodeVisitor", "currentNode"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var ast,visitor;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
ast=$self._parse_forClass_("foo <inlineJS: 'consolee.log(1)'>",$globals.Object);
$3=$self._astPCNodeVisitor();
$recv($3)._visit_(ast);
$2=$recv($3)._currentNode();
$1=$recv($2)._isJSStatementNode();
$self._assert_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testJSStatementNode",{ast:ast,visitor:visitor})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPCNodeVisitorTest);

$core.addMethod(
$core.method({
selector: "testMessageSend",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMessageSend\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo self asString yourself. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForSelector: 'yourself')\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'yourself'",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForSelector:", "currentNode"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
ast=$self._parse_forClass_("foo self asString yourself. ^ self asBoolean",$globals.Object);
$3=$self._astPCNodeVisitorForSelector_("yourself");
$recv($3)._visit_(ast);
$2=$recv($3)._currentNode();
$1=$recv($2)._selector();
$self._assert_equals_($1,"yourself");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMessageSend",{ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPCNodeVisitorTest);

$core.addMethod(
$core.method({
selector: "testMessageSendWithBlocks",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMessageSendWithBlocks\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo true ifTrue: [ [ self asString yourself ] value.  ]. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForSelector: 'yourself')\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'yourself'",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForSelector:", "currentNode"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
ast=$self._parse_forClass_("foo true ifTrue: [ [ self asString yourself ] value.  ]. ^ self asBoolean",$globals.Object);
$3=$self._astPCNodeVisitorForSelector_("yourself");
$recv($3)._visit_(ast);
$2=$recv($3)._currentNode();
$1=$recv($2)._selector();
$self._assert_equals_($1,"yourself");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMessageSendWithBlocks",{ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPCNodeVisitorTest);

$core.addMethod(
$core.method({
selector: "testMessageSendWithInlining",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMessageSendWithInlining\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForSelector: 'yourself')\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'yourself'.\x0a\x09\x09\x0a\x09ast := self parse: 'foo true ifTrue: [ self asString yourself ]. ^ self asBoolean' forClass: Object.\x0a\x09self assert: ((self astPCNodeVisitorForSelector: 'asBoolean')\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) selector equals: 'asBoolean'",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:forClass:", "assert:equals:", "selector", "visit:", "astPCNodeVisitorForSelector:", "currentNode"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$1,$7,$6,$5;
ast=$self._parse_forClass_("foo true ifTrue: [ self asString yourself ]. ^ self asBoolean",$globals.Object);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parse:forClass:"]=1;
//>>excludeEnd("ctx");
$3=$self._astPCNodeVisitorForSelector_("yourself");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["astPCNodeVisitorForSelector:"]=1;
//>>excludeEnd("ctx");
$recv($3)._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
$4=$recv($3)._currentNode();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentNode"]=1;
//>>excludeEnd("ctx");
$2=$4;
$1=$recv($2)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,"yourself");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
ast=$self._parse_forClass_("foo true ifTrue: [ self asString yourself ]. ^ self asBoolean",$globals.Object);
$7=$self._astPCNodeVisitorForSelector_("asBoolean");
$recv($7)._visit_(ast);
$6=$recv($7)._currentNode();
$5=$recv($6)._selector();
$self._assert_equals_($5,"asBoolean");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMessageSendWithInlining",{ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPCNodeVisitorTest);

$core.addMethod(
$core.method({
selector: "testNoMessageSend",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNoMessageSend\x0a\x09| ast |\x0a\x09\x0a\x09ast := self parse: 'foo ^ self' forClass: Object.\x0a\x09self assert: (self astPCNodeVisitor\x0a\x09\x09visit: ast;\x0a\x09\x09currentNode) isNil",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:forClass:", "assert:", "isNil", "visit:", "astPCNodeVisitor", "currentNode"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
ast=$self._parse_forClass_("foo ^ self",$globals.Object);
$3=$self._astPCNodeVisitor();
$recv($3)._visit_(ast);
$2=$recv($3)._currentNode();
$1=$recv($2)._isNil();
$self._assert_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNoMessageSend",{ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPCNodeVisitorTest);



$core.addClass("ASTPositionTest", $globals.TestCase, [], "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "testNodeAtPosition",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNodeAtPosition\x0a\x09| node |\x0a\x09\x0a\x09node := self parse: 'yourself\x0a\x09^ self' forClass: Object.\x0a\x09\x0a\x09self assert: (node navigationNodeAt: 2@4 ifAbsent: [ nil ]) source equals: 'self'.\x0a\x09\x0a\x09node := self parse: 'foo\x0a\x09true ifTrue: [ 1 ]' forClass: Object.\x0a\x09\x0a\x09self assert: (node navigationNodeAt: 2@7 ifAbsent: [ nil ]) selector equals: 'ifTrue:'.\x0a\x09\x0a\x09node := self parse: 'foo\x0a\x09self foo; bar; baz' forClass: Object.\x0a\x09\x0a\x09self assert: (node navigationNodeAt: 2@8 ifAbsent: [ nil ]) selector equals: 'foo'",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:forClass:", "assert:equals:", "source", "navigationNodeAt:ifAbsent:", "@", "selector"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var node;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$1,$7,$8,$6,$5;
node=$self._parse_forClass_("yourself\x0a\x09^ self",$globals.Object);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parse:forClass:"]=1;
//>>excludeEnd("ctx");
$3=node;
$4=(2).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._navigationNodeAt_ifAbsent_($4,(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["navigationNodeAt:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._source();
$self._assert_equals_($1,"self");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
node=$self._parse_forClass_("foo\x0a\x09true ifTrue: [ 1 ]",$globals.Object);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parse:forClass:"]=2;
//>>excludeEnd("ctx");
$7=node;
$8=(2).__at((7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._navigationNodeAt_ifAbsent_($8,(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["navigationNodeAt:ifAbsent:"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($5,"ifTrue:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
node=$self._parse_forClass_("foo\x0a\x09self foo; bar; baz",$globals.Object);
$self._assert_equals_($recv($recv(node)._navigationNodeAt_ifAbsent_((2).__at((8)),(function(){
return nil;

})))._selector(),"foo");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNodeAtPosition",{node:node})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPositionTest);



$core.addClass("AbstractCodeGeneratorInstallTest", $globals.TestCase, ["receiver"], "Compiler-Tests");
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
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "shouldntInstall:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "shouldntInstall: aString\x0a\x09| method |\x0a\x0a\x09[ self\x0a\x09\x09should: [ method := self install: aString forClass: receiver class ]\x0a\x09\x09raise: ParseError ]\x0a\x09ensure: [ method ifNotNil: [ receiver class removeCompiledMethod: method ] ]",
referencedClasses: ["ParseError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ensure:", "should:raise:", "install:forClass:", "class", "ifNotNil:", "removeCompiledMethod:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
var method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($self.receiver)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class"]=1;
//>>excludeEnd("ctx");
method=$self._install_forClass_(aString,$1);
return method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$globals.ParseError);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=method;
if(($receiver = $2) == null || $receiver.a$nil){
return $2;
} else {
return $recv($recv($self.receiver)._class())._removeCompiledMethod_(method);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldntInstall:",{aString:aString,method:method})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testMistypedPragmaJSStatement",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMistypedPragmaJSStatement\x0a\x09self shouldntInstall: 'foo < inlineJS: ''return ''foo'''' >'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldntInstall:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldntInstall_("foo < inlineJS: 'return 'foo'' >");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMistypedPragmaJSStatement",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testNiladicJSOverride",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNiladicJSOverride\x0a\x09receiver := ObjectMock new.\x0a\x09receiver foo: 4.\x0a\x09self while: 'baz <jsOverride: #baz> ^ (foo := foo + 3)' should: [\x0a\x09\x09self assert: receiver baz equals: 7.\x0a\x09\x09self assert: (receiver basicPerform: #baz) equals: 10.\x0a\x09\x09self assert: receiver baz equals: 13.\x0a\x09\x09self assert: receiver foo equals: 13 ]",
referencedClasses: ["ObjectMock"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "foo:", "while:should:", "assert:equals:", "baz", "basicPerform:", "foo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self.receiver=$recv($globals.ObjectMock)._new();
$recv($self.receiver)._foo_((4));
$self._while_should_("baz <jsOverride: #baz> ^ (foo := foo + 3)",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($self.receiver)._baz();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["baz"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self.receiver)._basicPerform_("baz"),(10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self.receiver)._baz(),(13));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
return $self._assert_equals_($recv($self.receiver)._foo(),(13));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNiladicJSOverride",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testNiladicJSOverrideDifferentNames",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNiladicJSOverrideDifferentNames\x0a\x09receiver := ObjectMock new.\x0a\x09receiver foo: 4.\x0a\x09self while: 'quux <jsOverride: #mux> ^ (foo := foo + 3)' should: [\x0a\x09\x09self should: [ receiver mux ] raise: MessageNotUnderstood.\x0a\x09\x09self assert: (receiver basicPerform: #mux) equals: 7.\x0a\x09\x09self assert: receiver quux equals: 10.\x0a\x09\x09self should: [ receiver basicPerform: #quux ] raise: Error.\x0a\x09\x09self assert: receiver foo equals: 10 ]",
referencedClasses: ["ObjectMock", "MessageNotUnderstood", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "foo:", "while:should:", "should:raise:", "mux", "assert:equals:", "basicPerform:", "quux", "foo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self.receiver=$recv($globals.ObjectMock)._new();
$recv($self.receiver)._foo_((4));
$self._while_should_("quux <jsOverride: #mux> ^ (foo := foo + 3)",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self.receiver)._mux();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["should:raise:"]=1;
//>>excludeEnd("ctx");
$1=$recv($self.receiver)._basicPerform_("mux");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["basicPerform:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($recv($self.receiver)._quux(),(10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self.receiver)._basicPerform_("quux");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}),$globals.Error);
return $self._assert_equals_($recv($self.receiver)._foo(),(10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNiladicJSOverrideDifferentNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testPragmaInBlock",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPragmaInBlock\x0a\x09self shouldntInstall: 'foo ^ [ < fooBar > 4 ] value'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldntInstall:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldntInstall_("foo ^ [ < fooBar > 4 ] value");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPragmaInBlock",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);


$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09^ self name = AbstractCodeGeneratorInstallTest name",
referencedClasses: ["AbstractCodeGeneratorInstallTest"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
return $recv($1).__eq($recv($globals.AbstractCodeGeneratorInstallTest)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest.a$cls);


$core.addClass("CodeGeneratorInstallTest", $globals.AbstractCodeGeneratorInstallTest, [], "Compiler-Tests");


$core.addClass("InliningCodeGeneratorInstallTest", $globals.AbstractCodeGeneratorInstallTest, [], "Compiler-Tests");


$core.addClass("ScopeVarTest", $globals.TestCase, [], "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "testClassRefVar",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClassRefVar\x0a\x09| node |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'Object';\x0a\x09\x09yourself.\x0a\x09SemanticAnalyzer new \x0a\x09\x09pushScope: MethodLexicalScope new;\x0a\x09\x09visit: node.\x0a\x09self assert: node binding isClassRefVar",
referencedClasses: ["VariableNode", "SemanticAnalyzer", "MethodLexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:", "new", "yourself", "pushScope:", "visit:", "assert:", "isClassRefVar", "binding"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var node;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($globals.VariableNode)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._value_("Object");
node=$recv($1)._yourself();
$2=$recv($globals.SemanticAnalyzer)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($2)._pushScope_($recv($globals.MethodLexicalScope)._new());
$recv($2)._visit_(node);
$self._assert_($recv($recv(node)._binding())._isClassRefVar());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClassRefVar",{node:node})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVarTest);

$core.addMethod(
$core.method({
selector: "testInstanceVar",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInstanceVar\x0a\x09| node scope |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09scope := MethodLexicalScope new.\x0a\x09scope addIVar: 'bzzz'.\x0a\x09self assert: (scope bindingFor: node) isInstanceVar",
referencedClasses: ["VariableNode", "MethodLexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:", "new", "yourself", "addIVar:", "assert:", "isInstanceVar", "bindingFor:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var node,scope;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.VariableNode)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._value_("bzzz");
node=$recv($1)._yourself();
scope=$recv($globals.MethodLexicalScope)._new();
$recv(scope)._addIVar_("bzzz");
$self._assert_($recv($recv(scope)._bindingFor_(node))._isInstanceVar());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInstanceVar",{node:node,scope:scope})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVarTest);

$core.addMethod(
$core.method({
selector: "testPseudoVar",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPseudoVar\x0a\x09| node pseudoVars |\x0a\x09pseudoVars := #('self' 'super' 'true' 'false' 'nil').\x0a\x09pseudoVars do: [:each |\x0a\x09\x09node := VariableNode new\x0a\x09\x09value: each;\x0a\x09\x09yourself.\x0a\x09\x09self assert: (MethodLexicalScope new bindingFor: node) isPseudoVar]",
referencedClasses: ["VariableNode", "MethodLexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "value:", "new", "yourself", "assert:", "isPseudoVar", "bindingFor:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var node,pseudoVars;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
pseudoVars=["self", "super", "true", "false", "nil"];
$recv(pseudoVars)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($globals.VariableNode)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._value_(each);
node=$recv($1)._yourself();
return $self._assert_($recv($recv($recv($globals.MethodLexicalScope)._new())._bindingFor_(node))._isPseudoVar());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPseudoVar",{node:node,pseudoVars:pseudoVars})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVarTest);

$core.addMethod(
$core.method({
selector: "testTempVar",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTempVar\x0a\x09| node scope |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09scope := MethodLexicalScope new.\x0a\x09scope addTemp: 'bzzz'.\x0a\x09self assert: (scope bindingFor: node) isTempVar",
referencedClasses: ["VariableNode", "MethodLexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:", "new", "yourself", "addTemp:", "assert:", "isTempVar", "bindingFor:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var node,scope;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.VariableNode)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._value_("bzzz");
node=$recv($1)._yourself();
scope=$recv($globals.MethodLexicalScope)._new();
$recv(scope)._addTemp_("bzzz");
$self._assert_($recv($recv(scope)._bindingFor_(node))._isTempVar());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTempVar",{node:node,scope:scope})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVarTest);

$core.addMethod(
$core.method({
selector: "testUnknownVar",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnknownVar\x0a\x09| node |\x0a\x09node := VariableNode new\x0a\x09\x09value: 'bzzz';\x0a\x09\x09yourself.\x0a\x09self assert: (MethodLexicalScope new bindingFor: node) isNil",
referencedClasses: ["VariableNode", "MethodLexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:", "new", "yourself", "assert:", "isNil", "bindingFor:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var node;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.VariableNode)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._value_("bzzz");
node=$recv($1)._yourself();
$self._assert_($recv($recv($recv($globals.MethodLexicalScope)._new())._bindingFor_(node))._isNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnknownVar",{node:node})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVarTest);



$core.addClass("SemanticAnalyzerTest", $globals.TestCase, ["analyzer"], "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09analyzer := SemanticAnalyzer on: Object",
referencedClasses: ["SemanticAnalyzer", "Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.analyzer=$recv($globals.SemanticAnalyzer)._on_($globals.Object);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testAssignment",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAssignment\x0a\x09| src ast |\x0a\x0a\x09src := 'foo self := 1'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: InvalidAssignmentError",
referencedClasses: ["Smalltalk", "InvalidAssignmentError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "should:raise:", "visit:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo self := 1";
ast=$recv($globals.Smalltalk)._parse_(src);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.analyzer)._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.InvalidAssignmentError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAssignment",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testNonLocalReturn",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNonLocalReturn\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. ^ a'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast scope hasNonLocalReturn",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:", "deny:", "hasNonLocalReturn", "scope"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | a + 1. ^ a";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
$self._deny_($recv($recv(ast)._scope())._hasNonLocalReturn());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testNonLocalReturn2",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNonLocalReturn2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ ^ a] ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope hasNonLocalReturn",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:", "assert:", "hasNonLocalReturn", "scope"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ [ ^ a] ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
$self._assert_($recv($recv(ast)._scope())._hasNonLocalReturn());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNonLocalReturn2",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testScope",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast dagChildren first dagChildren last scope == ast scope.",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "last", "dagChildren", "first"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
src="foo | a | a + 1. [ | b | b := a ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
$4=$recv($recv($recv(ast)._dagChildren())._first())._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._last();
$2=$recv($3)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq_eq($recv(ast)._scope());
$self._deny_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testScope",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testScope2",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testScope2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast dagChildren first dagChildren last dagChildren first dagChildren first scope == ast scope.",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "first", "dagChildren", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $8,$7,$6,$5,$4,$3,$2,$1;
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
$8=$recv($recv($recv(ast)._dagChildren())._first())._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._last();
$6=$recv($7)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq_eq($recv(ast)._scope());
$self._deny_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testScope2",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testScopeLevel",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testScopeLevel\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope scopeLevel equals: 1.\x0a\x09self assert: ast dagChildren first dagChildren last dagChildren first dagChildren first scope scopeLevel equals: 3",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:", "assert:equals:", "scopeLevel", "scope", "first", "dagChildren", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$10,$9,$8,$7,$6,$5,$4,$3;
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
$2=$recv(ast)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._scopeLevel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scopeLevel"]=1;
//>>excludeEnd("ctx");
$self._assert_equals_($1,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$10=$recv($recv($recv(ast)._dagChildren())._first())._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._last();
$8=$recv($9)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._scope();
$3=$recv($4)._scopeLevel();
$self._assert_equals_($3,(3));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testScopeLevel",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testUnknownVariables",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnknownVariables\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | b + a'.\x0a\x09ast := Smalltalk parse: src.\x0a\x0a\x09self should: [ analyzer visit: ast ] raise: UnknownVariableError",
referencedClasses: ["Smalltalk", "UnknownVariableError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "should:raise:", "visit:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | b + a";
ast=$recv($globals.Smalltalk)._parse_(src);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.analyzer)._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.UnknownVariableError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnknownVariables",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testUnknownVariablesWithScope",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnknownVariablesWithScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a b | [ c + 1. [ a + 1. d + 1 ]]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09\x0a\x09self should: [ analyzer visit: ast ] raise: UnknownVariableError",
referencedClasses: ["Smalltalk", "UnknownVariableError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "should:raise:", "visit:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a b | [ c + 1. [ a + 1. d + 1 ]]";
ast=$recv($globals.Smalltalk)._parse_(src);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.analyzer)._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.UnknownVariableError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnknownVariablesWithScope",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testVariableShadowing",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVariableShadowing\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | a + 1";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testVariableShadowing2",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVariableShadowing2\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ | a | a := 2 ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: ShadowingVariableError",
referencedClasses: ["Smalltalk", "ShadowingVariableError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "should:raise:", "visit:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ | a | a := 2 ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.analyzer)._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.ShadowingVariableError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing2",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testVariableShadowing3",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVariableShadowing3\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ | b | b := 2 ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ | b | b := 2 ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing3",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testVariableShadowing4",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVariableShadowing4\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ [ [ | b | b := 2 ] ] ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing4",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testVariableShadowing5",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVariableShadowing5\x0a\x09| src ast |\x0a\x09src := 'foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09self should: [analyzer visit: ast] raise: ShadowingVariableError",
referencedClasses: ["Smalltalk", "ShadowingVariableError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "should:raise:", "visit:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ [ [ | a | a := 2 ] ] ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.analyzer)._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.ShadowingVariableError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVariableShadowing5",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testVariablesLookup",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testVariablesLookup\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09\x22Binding for `a` in the message send\x22\x0a\x09self assert: ast dagChildren first dagChildren first receiver binding isTempVar.\x0a\x09self assert: ast dagChildren first dagChildren first receiver binding scope == ast scope.\x0a\x0a\x09\x22Binding for `b`\x22\x0a\x09self assert: ast dagChildren first dagChildren last dagChildren first dagChildren first left binding isTempVar.\x0a\x09self assert: ast dagChildren first dagChildren last dagChildren first dagChildren first left binding scope == ast dagChildren first dagChildren last scope.",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:", "assert:", "isTempVar", "binding", "receiver", "first", "dagChildren", "==", "scope", "left", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $7,$6,$5,$4,$3,$2,$1,$15,$14,$13,$12,$11,$10,$9,$16,$8,$27,$26,$25,$24,$23,$22,$21,$20,$19,$18,$17,$39,$38,$37,$36,$35,$34,$33,$32,$31,$30,$29,$42,$41,$40,$28;
src="foo | a | a + 1. [ | b | b := a ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
$7=$recv(ast)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._binding();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binding"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isTempVar();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isTempVar"]=1;
//>>excludeEnd("ctx");
$self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$15=$recv(ast)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=4;
//>>excludeEnd("ctx");
$14=$recv($15)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=4;
//>>excludeEnd("ctx");
$13=$recv($14)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=3;
//>>excludeEnd("ctx");
$12=$recv($13)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=3;
//>>excludeEnd("ctx");
$11=$recv($12)._receiver();
$10=$recv($11)._binding();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binding"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=1;
//>>excludeEnd("ctx");
$16=$recv(ast)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=2;
//>>excludeEnd("ctx");
$8=$recv($9).__eq_eq($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
$self._assert_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$27=$recv(ast)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=8;
//>>excludeEnd("ctx");
$26=$recv($27)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=7;
//>>excludeEnd("ctx");
$25=$recv($26)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=7;
//>>excludeEnd("ctx");
$24=$recv($25)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last"]=1;
//>>excludeEnd("ctx");
$23=$recv($24)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=6;
//>>excludeEnd("ctx");
$22=$recv($23)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=6;
//>>excludeEnd("ctx");
$21=$recv($22)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=5;
//>>excludeEnd("ctx");
$20=$recv($21)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=5;
//>>excludeEnd("ctx");
$19=$recv($20)._left();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["left"]=1;
//>>excludeEnd("ctx");
$18=$recv($19)._binding();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binding"]=3;
//>>excludeEnd("ctx");
$17=$recv($18)._isTempVar();
$self._assert_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$39=$recv(ast)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=12;
//>>excludeEnd("ctx");
$38=$recv($39)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=10;
//>>excludeEnd("ctx");
$37=$recv($38)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=11;
//>>excludeEnd("ctx");
$36=$recv($37)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last"]=2;
//>>excludeEnd("ctx");
$35=$recv($36)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=10;
//>>excludeEnd("ctx");
$34=$recv($35)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=9;
//>>excludeEnd("ctx");
$33=$recv($34)._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=9;
//>>excludeEnd("ctx");
$32=$recv($33)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=8;
//>>excludeEnd("ctx");
$31=$recv($32)._left();
$30=$recv($31)._binding();
$29=$recv($30)._scope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scope"]=3;
//>>excludeEnd("ctx");
$42=$recv($recv($recv(ast)._dagChildren())._first())._dagChildren();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dagChildren"]=13;
//>>excludeEnd("ctx");
$41=$recv($42)._last();
$40=$recv($41)._scope();
$28=$recv($29).__eq_eq($40);
$self._assert_($28);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testVariablesLookup",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.SemanticAnalyzerTest);



$core.addClass("AISemanticAnalyzerTest", $globals.SemanticAnalyzerTest, [], "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09analyzer := (AISemanticAnalyzer on: Object)\x0a\x09\x09context: (AIContext new\x0a\x09\x09\x09defineLocal: 'local';\x0a\x09\x09\x09localAt: 'local' put: 3;\x0a\x09\x09\x09yourself);\x0a\x09\x09yourself",
referencedClasses: ["AISemanticAnalyzer", "Object", "AIContext"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["context:", "on:", "defineLocal:", "new", "localAt:put:", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv($globals.AISemanticAnalyzer)._on_($globals.Object);
$3=$recv($globals.AIContext)._new();
$recv($3)._defineLocal_("local");
$recv($3)._localAt_put_("local",(3));
$4=$recv($3)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$2=$4;
$recv($1)._context_($2);
$self.analyzer=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AISemanticAnalyzerTest);

$core.addMethod(
$core.method({
selector: "testContextVariables",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testContextVariables\x0a\x09| src ast |\x0a\x09\x0a\x09src := 'foo | a | local + a'.\x0a\x09ast := Smalltalk parse: src.\x0a\x0a\x09self shouldnt: [ analyzer visit: ast ] raise: UnknownVariableError",
referencedClasses: ["Smalltalk", "UnknownVariableError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "shouldnt:raise:", "visit:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | local + a";
ast=$recv($globals.Smalltalk)._parse_(src);
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.analyzer)._visit_(ast);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.UnknownVariableError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testContextVariables",{src:src,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.AISemanticAnalyzerTest);



$core.addTrait("TASTCompilingTest", "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "codeGeneratorClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeGeneratorClass\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TASTCompilingTest);

$core.addMethod(
$core.method({
selector: "compiler",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compiler\x0a\x09^ Compiler new\x0a\x09\x09codeGeneratorClass: self codeGeneratorClass;\x0a\x09\x09yourself",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["codeGeneratorClass:", "new", "codeGeneratorClass", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Compiler)._new();
$recv($1)._codeGeneratorClass_($self._codeGeneratorClass());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compiler",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TASTCompilingTest);

$core.addMethod(
$core.method({
selector: "install:forClass:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "install: aString forClass: aClass\x0a\x09^ self compiler\x0a\x09\x09install: aString\x0a\x09\x09forClass: aClass\x0a\x09\x09protocol: 'tests'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["install:forClass:protocol:", "compiler"]
}, function ($methodClass){ return function (aString,aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._compiler())._install_forClass_protocol_(aString,aClass,"tests");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"install:forClass:",{aString:aString,aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.TASTCompilingTest);

$core.addMethod(
$core.method({
selector: "while:inClass:should:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "aBlock"],
source: "while: aString inClass: aClass should: aBlock\x0a\x09| method |\x0a\x0a\x09[\x0a\x09\x09method := self install: aString forClass: aClass.\x0a\x09\x09aBlock value: method ]\x0a\x09ensure: [ method ifNotNil: [ aClass removeCompiledMethod: method ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ensure:", "install:forClass:", "value:", "ifNotNil:", "removeCompiledMethod:"]
}, function ($methodClass){ return function (aString,aClass,aBlock){
var self=this,$self=this;
var method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
method=$self._install_forClass_(aString,aClass);
return $recv(aBlock)._value_(method);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=method;
if(($receiver = $1) == null || $receiver.a$nil){
return $1;
} else {
return $recv(aClass)._removeCompiledMethod_(method);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"while:inClass:should:",{aString:aString,aClass:aClass,aBlock:aBlock,method:method})});
//>>excludeEnd("ctx");
}; }),
$globals.TASTCompilingTest);

$core.addMethod(
$core.method({
selector: "while:should:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "while: aString should: aBlock\x0a\x09self while: aString inClass: self receiver class should: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["while:inClass:should:", "class", "receiver"]
}, function ($methodClass){ return function (aString,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._while_inClass_should_(aString,$recv($self._receiver())._class(),aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"while:should:",{aString:aString,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TASTCompilingTest);


$core.addTrait("TASTParsingTest", "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "parse:forClass:",
protocol: "parsing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "parse: aString forClass: aClass\x0a\x09^ Compiler new\x0a\x09\x09ast: aString\x0a\x09\x09forClass: aClass\x0a\x09\x09protocol: 'test'",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ast:forClass:protocol:", "new"]
}, function ($methodClass){ return function (aString,aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Compiler)._new())._ast_forClass_protocol_(aString,aClass,"test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:forClass:",{aString:aString,aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.TASTParsingTest);


$core.addTrait("TCTDebugged", "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "interpret:forClass:receiver:withArguments:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "anObject", "aDictionary"],
source: "interpret: aString forClass: aClass receiver: anObject withArguments: aDictionary\x0a\x09\x22The food is a methodNode. Interpret the sequenceNode only\x22\x0a\x09\x0a\x09| ctx |\x0a\x09\x0a\x09ctx := self prepareContextFor: aString class: aClass receiver: anObject withArguments: aDictionary.\x0a\x09\x0a\x09^ (ASTDebugger context: ctx) proceed; result",
referencedClasses: ["ASTDebugger"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["prepareContextFor:class:receiver:withArguments:", "proceed", "context:", "result"]
}, function ($methodClass){ return function (aString,aClass,anObject,aDictionary){
var self=this,$self=this;
var ctx;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
ctx=$self._prepareContextFor_class_receiver_withArguments_(aString,aClass,anObject,aDictionary);
$1=$recv($globals.ASTDebugger)._context_(ctx);
$recv($1)._proceed();
return $recv($1)._result();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpret:forClass:receiver:withArguments:",{aString:aString,aClass:aClass,anObject:anObject,aDictionary:aDictionary,ctx:ctx})});
//>>excludeEnd("ctx");
}; }),
$globals.TCTDebugged);


$core.addTrait("TCTExecuted", "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "while:inClass:should:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "aBlock"],
source: "while: aString inClass: aClass should: aBlock\x0a\x09super\x0a\x09\x09while: aString\x0a\x09\x09inClass: aClass\x0a\x09\x09should: [ :method | aBlock value: [\x0a\x09\x09\x09self receiver perform: method selector ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["while:inClass:should:", "value:", "perform:", "receiver", "selector"]
}, function ($methodClass){ return function (aString,aClass,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._while_inClass_should_.call($self,aString,aClass,(function(method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self._receiver())._perform_($recv(method)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({method:method},$ctx1,1)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"while:inClass:should:",{aString:aString,aClass:aClass,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TCTExecuted);


$core.addTrait("TCTInlined", "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "codeGeneratorClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeGeneratorClass\x0a\x09^ InliningCodeGenerator",
referencedClasses: ["InliningCodeGenerator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.InliningCodeGenerator;

}; }),
$globals.TCTInlined);


$core.addTrait("TCTInterpreted", "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "interpret:forClass:receiver:withArguments:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "anObject", "aDictionary"],
source: "interpret: aString forClass: aClass receiver: anObject withArguments: aDictionary\x0a\x09\x22The food is a methodNode. Interpret the sequenceNode only\x22\x0a\x09\x0a\x09| ctx |\x0a\x09\x0a\x09ctx := self prepareContextFor: aString class: aClass receiver: anObject withArguments: aDictionary.\x0a\x09\x0a\x09^ ctx interpreter proceed; result",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["prepareContextFor:class:receiver:withArguments:", "proceed", "interpreter", "result"]
}, function ($methodClass){ return function (aString,aClass,anObject,aDictionary){
var self=this,$self=this;
var ctx;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
ctx=$self._prepareContextFor_class_receiver_withArguments_(aString,aClass,anObject,aDictionary);
$1=$recv(ctx)._interpreter();
$recv($1)._proceed();
return $recv($1)._result();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpret:forClass:receiver:withArguments:",{aString:aString,aClass:aClass,anObject:anObject,aDictionary:aDictionary,ctx:ctx})});
//>>excludeEnd("ctx");
}; }),
$globals.TCTInterpreted);

$core.addMethod(
$core.method({
selector: "prepareContextFor:class:receiver:withArguments:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "anObject", "aDictionary"],
source: "prepareContextFor: aString class: aClass receiver: anObject withArguments: aDictionary\x0a\x09\x22The food is a methodNode. Interpret the sequenceNode only\x22\x0a\x09\x0a\x09| ctx ast |\x0a\x09\x0a\x09ast := self parse: aString forClass: aClass.\x0a\x09\x0a\x09ctx := AIContext new\x0a\x09\x09receiver: anObject;\x0a\x09\x09selector: ast selector;\x0a\x09\x09interpreter: ASTInterpreter new;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09\x22Define locals for the context\x22\x0a\x09ast sequenceNode ifNotNil: [ :sequence |\x0a\x09\x09sequence temps do: [ :each |\x0a\x09\x09\x09ctx defineLocal: each ] ].\x0a\x09\x09\x0a\x09aDictionary keysAndValuesDo: [ :key :value |\x0a\x09\x09ctx localAt: key put: value ].\x0a\x09\x0a\x09ctx interpreter\x0a\x09\x09context: ctx;\x0a\x09\x09node: ast;\x0a\x09\x09enterNode.\x0a\x09\x0a\x09^ctx",
referencedClasses: ["AIContext", "ASTInterpreter"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:forClass:", "receiver:", "new", "selector:", "selector", "interpreter:", "yourself", "ifNotNil:", "sequenceNode", "do:", "temps", "defineLocal:", "keysAndValuesDo:", "localAt:put:", "context:", "interpreter", "node:", "enterNode"]
}, function ($methodClass){ return function (aString,aClass,anObject,aDictionary){
var self=this,$self=this;
var ctx,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
ast=$self._parse_forClass_(aString,aClass);
$1=$recv($globals.AIContext)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($1)._receiver_(anObject);
$recv($1)._selector_($recv(ast)._selector());
$recv($1)._interpreter_($recv($globals.ASTInterpreter)._new());
ctx=$recv($1)._yourself();
$2=$recv(ast)._sequenceNode();
if(($receiver = $2) == null || $receiver.a$nil){
$2;
} else {
var sequence;
sequence=$receiver;
$recv($recv(sequence)._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ctx)._defineLocal_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
}
$recv(aDictionary)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ctx)._localAt_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$3=$recv(ctx)._interpreter();
$recv($3)._context_(ctx);
$recv($3)._node_(ast);
$recv($3)._enterNode();
return ctx;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prepareContextFor:class:receiver:withArguments:",{aString:aString,aClass:aClass,anObject:anObject,aDictionary:aDictionary,ctx:ctx,ast:ast})});
//>>excludeEnd("ctx");
}; }),
$globals.TCTInterpreted);

$core.addMethod(
$core.method({
selector: "while:inClass:should:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass", "aBlock"],
source: "while: aString inClass: aClass should: aBlock\x0a\x09super\x0a\x09\x09while: aString\x0a\x09\x09inClass: aClass\x0a\x09\x09should: [ aBlock value: [\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09interpret: aString\x0a\x09\x09\x09\x09forClass: aClass\x0a\x09\x09\x09\x09receiver: self receiver\x0a\x09\x09\x09\x09withArguments: #{} ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["while:inClass:should:", "value:", "interpret:forClass:receiver:withArguments:", "receiver"]
}, function ($methodClass){ return function (aString,aClass,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._while_inClass_should_.call($self,aString,aClass,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._interpret_forClass_receiver_withArguments_(aString,aClass,$self._receiver(),$globals.HashedCollection._newFromPairs_([]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"while:inClass:should:",{aString:aString,aClass:aClass,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TCTInterpreted);


$core.addTrait("TCTNonInlined", "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "codeGeneratorClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeGeneratorClass\x0a\x09^ CodeGenerator",
referencedClasses: ["CodeGenerator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.CodeGenerator;

}; }),
$globals.TCTNonInlined);

$core.setTraitComposition([{trait: $globals.TASTParsingTest}], $globals.TASTCompilingTest);
$core.setTraitComposition([{trait: $globals.TCTInterpreted}], $globals.TCTDebugged);
$core.setTraitComposition([{trait: $globals.TASTCompilingTest}], $globals.ASTMethodRunningTest);
$core.setTraitComposition([{trait: $globals.TCTNonInlined}, {trait: $globals.TCTDebugged}], $globals.ASTDebuggerTest);
$core.setTraitComposition([{trait: $globals.TCTNonInlined}, {trait: $globals.TCTInterpreted}], $globals.ASTInterpreterTest);
$core.setTraitComposition([{trait: $globals.TCTNonInlined}, {trait: $globals.TCTExecuted}], $globals.CodeGeneratorTest);
$core.setTraitComposition([{trait: $globals.TCTInlined}, {trait: $globals.TCTExecuted}], $globals.InliningCodeGeneratorTest);
$core.setTraitComposition([{trait: $globals.TASTParsingTest}], $globals.ASTPCNodeVisitorTest);
$core.setTraitComposition([{trait: $globals.TASTParsingTest}], $globals.ASTPositionTest);
$core.setTraitComposition([{trait: $globals.TASTCompilingTest}], $globals.AbstractCodeGeneratorInstallTest);
$core.setTraitComposition([{trait: $globals.TCTNonInlined}], $globals.CodeGeneratorInstallTest);
$core.setTraitComposition([{trait: $globals.TCTInlined}], $globals.InliningCodeGeneratorInstallTest);

});
