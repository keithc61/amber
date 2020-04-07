define(["amber/boot", "require", "amber/core/Kernel-Tests", "amber/core/SUnit"], function($boot,requirejs){"use strict";
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
selector: "testAfterInliningNonLocalBlockReturnIndexSend",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAfterInliningNonLocalBlockReturnIndexSend\x0a\x09self should: 'foo [ ^ true ifTrue: [ self class ] ] value. self class' return: DoIt.\x0a",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo [ ^ true ifTrue: [ self class ] ] value. self class",$globals.DoIt);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAfterInliningNonLocalBlockReturnIndexSend",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

$core.addMethod(
$core.method({
selector: "testAfterInliningNonLocalBlockReturnSuperSend",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAfterInliningNonLocalBlockReturnSuperSend\x0a\x09self should: 'foo [ ^ true ifTrue: [ super class ] ] value' return: DoIt.\x0a",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:return:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_return_("foo [ ^ true ifTrue: [ super class ] ] value",$globals.DoIt);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAfterInliningNonLocalBlockReturnSuperSend",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest);

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
[$self._should_return_("foo | a | a := true ifTrue: [ 1 ]. ^ a",(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo | a | a := false ifTrue: [ 1 ]. ^ a",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("\x5c arg ^ 4",(4))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo ^ #(1 2 3) collect: [ :each | true ifTrue: [ each + 1 ] ]",[(2), (3), (4)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ #(1 2 3) collect: [ :each | false ifFalse: [ each + 1 ] ]",[(2), (3), (4)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo ^ true class; ifTrue: [ 1 ] ifFalse: [ 2 ]",(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { x. x := 2 }\x0a",[(1), (2)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
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
$self._should_return_("foo ^ #{1->2->3}",$recv($globals.HashedCollection)._with_([$recv((1).__minus_gt((2))).__minus_gt((3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0]));
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
[$self._should_return_("foo ^ eval class",$globals.BlockClosure)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ Math cos: 0",(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: 'foo'->x with: 'bar'->(x := 2)\x0a",[["foo".__minus_gt($globals.Array)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0],["bar".__minus_gt((2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo\x0a\x09| x |\x0a\x09x := Array.\x0a\x09^ x with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",[["foo".__minus_gt($globals.Array)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0],["bar".__minus_gt((2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: 'foo'->x with: 'bar'->(true ifTrue: [ x := 2 ])\x0a",[["foo".__minus_gt((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=5
//>>excludeEnd("ctx");
][0],["bar".__minus_gt((2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=6
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ { 'foo'->x. 'bar'->(true ifTrue: [ x := 2 ]) }\x0a",[["foo".__minus_gt((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["->"]=7
//>>excludeEnd("ctx");
][0],"bar".__minus_gt((2))])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=4
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo ^ 1",(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ 'hello'","hello")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ #(1 2 3 4)",[(1), (2), (3), (4)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ {1. [:x | x ] value: 2. 3. [4] value}",[(1), (2), (3), (4)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=4
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ true",true)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=5
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ false",false)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=6
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ #{1->2. 3->4}",$globals.HashedCollection._newFromPairs_([(1),(2),(3),(4)]))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=7
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ #hello","hello")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=8
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ $h","h")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=9
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ -123.456",(-123.456))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=10
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo ^ 1",(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ 1 + 1",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ",$self.receiver)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo self asString",$self.receiver)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=4
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo ^ 1 asString","1")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ 1 + 1",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ 1 + 2 * 3",(9))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ 1 to: 3",[(1), (2), (3)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=4
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo ^ true ifTrue: [ false ifFalse: [ 1 ] ]",(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ true ifTrue: [ false ifTrue: [ 1 ] ]",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo true ifTrue: [ false ifFalse: [ ^ 1 ] ]",(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo [ ^ 1 ] value",(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo [ ^ 1 + 1 ] value",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo | a b | a := 1. b := 2. [ ^ a + b ] value. self halt",(3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo ^Object",$recv($recv($globals.Smalltalk)._globals())._at_("Object"))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo |x| x := 1. ^ {[ x := x+1 ] value ifNil: []. x}",[(2),(2)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("\x0a\x09\x09foo\x0a\x09\x09\x09|x|\x0a\x09\x09\x09x := 2.\x0a\x09\x09\x09x := nil ifNil: [].\x0a\x09\x09\x09^ x\x0a\x09",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("\x0a\x09\x09foo\x0a\x09\x09\x09|x|\x0a\x09\x09\x09x := 2.\x0a\x09\x09\x09x := 1 ifNotNil: [].\x0a\x09\x09\x09^ x\x0a\x09",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("\x0a\x09\x09foo\x0a\x09\x09\x09|x|\x0a\x09\x09\x09x := 2.\x0a\x09\x09\x09x := false ifFalse: [].\x0a\x09\x09\x09^ x\x0a\x09",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo [ ^ nil ifNil: [] ] value",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo [ ^ 1 ifNotNil: [] ] value",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo [ ^ false ifFalse: [] ] value",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo\x0a\x09| x |\x0a\x09x := 1.\x0a\x09^ Array with: x with: (true ifTrue: [ x := 2 ])\x0a",[(1), (2)])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo | a | ^ a",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo | AVariable | ^ AVariable",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo | a b c | ^ c",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo | a | [ | d | ^ d ] value",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=4
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo | a | a:= 1. ^ a",(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=5
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo < fooBar: 'return 2+3' > | x | ^ x := 6",(6))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo true ifFalse: [ ^ 1 ]",$self.receiver)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo false ifFalse: [ ^ 2 ]",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ true ifFalse: [ 1 ]",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo true ifFalse: [ ^ 1 ] ifTrue: [ ^ 2 ]",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo false ifFalse: [ ^ 2 ] ifTrue: [ ^1 ]",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ true ifFalse: [ 1 ] ifTrue: [ 2 ]",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo ^ 1 ifNil: [ 2 ]",(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ nil ifNil: [ 2 ]",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo 1 ifNil: [ ^ 2 ]",$self.receiver)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo ^ 1 ifNil: [ 2 ] ifNotNil: [ 3 ]",(3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ nil ifNil: [ 2 ] ifNotNil: [ 3 ]",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo 1 ifNil: [ ^ 2 ] ifNotNil: [ ^3 ]",(3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo ^ 1 ifNotNil: [ 2 ]",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ nil ifNotNil: [ 2 ]",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo 1 ifNotNil: [ ^ 2 ]",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo ^ 1 ifNotNil: [ :val | val + 2 ]",(3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ nil ifNotNil: [ :val | val + 2 ]",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ 1 ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]",(3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ nil ifNil: [ 5 ] ifNotNil: [ :val | val + 2 ]",(5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=4
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ 1 ifNotNil: [ :val | val + 2 ] ifNil: [ 5 ]",(3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=5
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo false ifTrue: [ ^ 1 ]",$self.receiver)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo true ifTrue: [ ^ 2 ]",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ false ifTrue: [ 1 ]",nil)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
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
[$self._should_return_("foo false ifTrue: [ ^ 1 ] ifFalse: [ ^2 ]",(2))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo true ifTrue: [ ^ 1 ] ifFalse: [ ^ 2 ]",(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=2
//>>excludeEnd("ctx");
][0];
[$self._should_return_("foo ^ false ifTrue: [ 2 ] ifFalse: [ 1 ]",(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:return:"]=3
//>>excludeEnd("ctx");
][0];
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
return $recv([$self._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv($globals.AbstractCompilerTest)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCompilerTest.a$cls);


$core.addClass("ASTDebuggerTest", $globals.AbstractCompilerTest, [], "Compiler-Tests");


$core.addClass("ASTInterpreterTest", $globals.AbstractCompilerTest, [], "Compiler-Tests");


$core.addClass("CodeGeneratorTest", $globals.AbstractCompilerTest, [], "Compiler-Tests");


$core.addClass("InliningCodeGeneratorTest", $globals.AbstractCompilerTest, [], "Compiler-Tests");


$core.addClass("AbstractJavaScriptGatewayTest", $globals.ASTMethodRunningTest, ["theClass"], "Compiler-Tests");
$core.addMethod(
$core.method({
selector: "jsConstructor",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "jsConstructor\x0a\x09<inlineJS: '\x0a\x09\x09var ctr = function () {};\x0a\x09\x09ctr.prototype.foo = function (a,b) {return a+\x22,\x22+b};\x0a\x09\x09return ctr;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var ctr = function () {};\x0a\x09\x09ctr.prototype.foo = function (a,b) {return a+\x22,\x22+b};\x0a\x09\x09return ctr;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var ctr = function () {};
		ctr.prototype.foo = function (a,b) {return a+","+b};
		return ctr;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsConstructor",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractJavaScriptGatewayTest);

$core.addMethod(
$core.method({
selector: "testDyadicSuperDifferentNames",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDyadicSuperDifferentNames\x0a\x09theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.\x0a\x09theClass beJavaScriptSubclassOf: self jsConstructor.\x0a\x09receiver := ObjectMock2 new foo: 'should be shadowed'; yourself.\x0a\x09self while: 'bar: anObject baz: anotherObject\x0a\x09\x09<jsOverride: #foo args: #(anObject anotherObject)>\x0a\x09\x09^ super bar: anObject baz: anotherObject' should: [\x0a\x09\x09self shouldnt: [ receiver bar: 3 baz: 4 ] raise: Error.\x0a\x09\x09self assert: (receiver bar: 4 baz: true) equals: '4,true' ]",
referencedClasses: ["ObjectMock", "ObjectMock2", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclass:slots:package:", "beJavaScriptSubclassOf:", "jsConstructor", "foo:", "new", "yourself", "while:should:", "shouldnt:raise:", "bar:baz:", "assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self.theClass=$recv($globals.ObjectMock)._subclass_slots_package_("ObjectMock2",[],"Compiler-Tests");
$recv($self.theClass)._beJavaScriptSubclassOf_($self._jsConstructor());
$1=$recv($globals.ObjectMock2)._new();
$recv($1)._foo_("should be shadowed");
$self.receiver=$recv($1)._yourself();
$self._while_should_("bar: anObject baz: anotherObject\x0a\x09\x09<jsOverride: #foo args: #(anObject anotherObject)>\x0a\x09\x09^ super bar: anObject baz: anotherObject",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv($self.receiver)._bar_baz_((3),(4))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["bar:baz:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$globals.Error);
return $self._assert_equals_($recv($self.receiver)._bar_baz_((4),true),"4,true");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDyadicSuperDifferentNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractJavaScriptGatewayTest);

$core.addMethod(
$core.method({
selector: "testDyadicSuperDifferentNamesNested",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDyadicSuperDifferentNamesNested\x0a\x09theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.\x0a\x09theClass beJavaScriptSubclassOf: self jsConstructor.\x0a\x09receiver := ObjectMock2 new foo: 'should be shadowed'; yourself.\x0a\x09self while: 'bar: anObject baz: anotherObject\x0a\x09\x09<jsOverride: #foo args: #(anObject anotherObject)>\x0a\x09\x09^ [ super bar: anObject baz: anotherObject ] value' should: [\x0a\x09\x09self shouldnt: [ receiver bar: 3 baz: 4 ] raise: Error.\x0a\x09\x09self assert: (receiver bar: 4 baz: true) equals: '4,true' ]",
referencedClasses: ["ObjectMock", "ObjectMock2", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclass:slots:package:", "beJavaScriptSubclassOf:", "jsConstructor", "foo:", "new", "yourself", "while:should:", "shouldnt:raise:", "bar:baz:", "assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self.theClass=$recv($globals.ObjectMock)._subclass_slots_package_("ObjectMock2",[],"Compiler-Tests");
$recv($self.theClass)._beJavaScriptSubclassOf_($self._jsConstructor());
$1=$recv($globals.ObjectMock2)._new();
$recv($1)._foo_("should be shadowed");
$self.receiver=$recv($1)._yourself();
$self._while_should_("bar: anObject baz: anotherObject\x0a\x09\x09<jsOverride: #foo args: #(anObject anotherObject)>\x0a\x09\x09^ [ super bar: anObject baz: anotherObject ] value",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv($self.receiver)._bar_baz_((3),(4))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["bar:baz:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$globals.Error);
return $self._assert_equals_($recv($self.receiver)._bar_baz_((4),true),"4,true");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDyadicSuperDifferentNamesNested",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractJavaScriptGatewayTest);

$core.addMethod(
$core.method({
selector: "testMonadicSuperDifferentNames",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMonadicSuperDifferentNames\x0a\x09theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.\x0a\x09theClass beJavaScriptSubclassOf: self jsConstructor.\x0a\x09receiver := ObjectMock2 new foo: 'should be shadowed'; yourself.\x0a\x09self while: 'bar: anObject <jsOverride: #foo args: #(anObject)> ^ super bar: anObject' should: [\x0a\x09\x09self shouldnt: [ receiver bar: 3 ] raise: Error.\x0a\x09\x09self assert: (receiver bar: 4) equals: '4,undefined' ]",
referencedClasses: ["ObjectMock", "ObjectMock2", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclass:slots:package:", "beJavaScriptSubclassOf:", "jsConstructor", "foo:", "new", "yourself", "while:should:", "shouldnt:raise:", "bar:", "assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self.theClass=$recv($globals.ObjectMock)._subclass_slots_package_("ObjectMock2",[],"Compiler-Tests");
$recv($self.theClass)._beJavaScriptSubclassOf_($self._jsConstructor());
$1=$recv($globals.ObjectMock2)._new();
$recv($1)._foo_("should be shadowed");
$self.receiver=$recv($1)._yourself();
$self._while_should_("bar: anObject <jsOverride: #foo args: #(anObject)> ^ super bar: anObject",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv($self.receiver)._bar_((3))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["bar:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$globals.Error);
return $self._assert_equals_($recv($self.receiver)._bar_((4)),"4,undefined");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMonadicSuperDifferentNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractJavaScriptGatewayTest);

$core.addMethod(
$core.method({
selector: "testNiladicSuper",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNiladicSuper\x0a\x09theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.\x0a\x09theClass beJavaScriptSubclassOf: self jsConstructor.\x0a\x09self\x0a\x09\x09should: 'foo <jsOverride: #foo> ^ super foo'\x0a\x09\x09receiver: (ObjectMock2 new foo: 'should be shadowed'; yourself)\x0a\x09\x09return: 'undefined,undefined'",
referencedClasses: ["ObjectMock", "ObjectMock2"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclass:slots:package:", "beJavaScriptSubclassOf:", "jsConstructor", "should:receiver:return:", "foo:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self.theClass=$recv($globals.ObjectMock)._subclass_slots_package_("ObjectMock2",[],"Compiler-Tests");
$recv($self.theClass)._beJavaScriptSubclassOf_($self._jsConstructor());
$1=$recv($globals.ObjectMock2)._new();
$recv($1)._foo_("should be shadowed");
$self._should_receiver_return_("foo <jsOverride: #foo> ^ super foo",$recv($1)._yourself(),"undefined,undefined");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNiladicSuper",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractJavaScriptGatewayTest);

$core.addMethod(
$core.method({
selector: "testNiladicSuperDifferentNames",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNiladicSuperDifferentNames\x0a\x09theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.\x0a\x09theClass beJavaScriptSubclassOf: self jsConstructor.\x0a\x09receiver := ObjectMock2 new foo: 'should be shadowed'; yourself.\x0a\x09self while: 'bar <jsOverride: #foo> ^ super bar' should: [\x0a\x09\x09self shouldnt: [ receiver bar ] raise: Error.\x0a\x09\x09self assert: receiver bar equals: 'undefined,undefined' ]",
referencedClasses: ["ObjectMock", "ObjectMock2", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclass:slots:package:", "beJavaScriptSubclassOf:", "jsConstructor", "foo:", "new", "yourself", "while:should:", "shouldnt:raise:", "bar", "assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self.theClass=$recv($globals.ObjectMock)._subclass_slots_package_("ObjectMock2",[],"Compiler-Tests");
$recv($self.theClass)._beJavaScriptSubclassOf_($self._jsConstructor());
$1=$recv($globals.ObjectMock2)._new();
$recv($1)._foo_("should be shadowed");
$self.receiver=$recv($1)._yourself();
$self._while_should_("bar <jsOverride: #foo> ^ super bar",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv($self.receiver)._bar()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["bar"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$globals.Error);
return $self._assert_equals_($recv($self.receiver)._bar(),"undefined,undefined");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNiladicSuperDifferentNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractJavaScriptGatewayTest);

$core.addMethod(
$core.method({
selector: "testNiladicSuperNested",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNiladicSuperNested\x0a\x09theClass := ObjectMock subclass: #ObjectMock2 slots: #() package: 'Compiler-Tests'.\x0a\x09theClass beJavaScriptSubclassOf: self jsConstructor.\x0a\x09self\x0a\x09\x09should: 'foo <jsOverride: #foo> ^ [ super foo ] value'\x0a\x09\x09receiver: (ObjectMock2 new foo: 'should be shadowed'; yourself)\x0a\x09\x09return: 'undefined,undefined'",
referencedClasses: ["ObjectMock", "ObjectMock2"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclass:slots:package:", "beJavaScriptSubclassOf:", "jsConstructor", "should:receiver:return:", "foo:", "new", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self.theClass=$recv($globals.ObjectMock)._subclass_slots_package_("ObjectMock2",[],"Compiler-Tests");
$recv($self.theClass)._beJavaScriptSubclassOf_($self._jsConstructor());
$1=$recv($globals.ObjectMock2)._new();
$recv($1)._foo_("should be shadowed");
$self._should_receiver_return_("foo <jsOverride: #foo> ^ [ super foo ] value",$recv($1)._yourself(),"undefined,undefined");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNiladicSuperNested",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractJavaScriptGatewayTest);

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
$globals.AbstractJavaScriptGatewayTest);


$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09^ self name = AbstractJavaScriptGatewayTest name",
referencedClasses: ["AbstractJavaScriptGatewayTest"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([$self._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv($globals.AbstractJavaScriptGatewayTest)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractJavaScriptGatewayTest.a$cls);


$core.addClass("DebuggedJSGTest", $globals.AbstractJavaScriptGatewayTest, [], "Compiler-Tests");


$core.addClass("InlinedJSGTest", $globals.AbstractJavaScriptGatewayTest, [], "Compiler-Tests");


$core.addClass("InterpretedJSGTest", $globals.AbstractJavaScriptGatewayTest, [], "Compiler-Tests");


$core.addClass("PlainJSGTest", $globals.AbstractJavaScriptGatewayTest, [], "Compiler-Tests");


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
selector: "newTeachableVisitor",
protocol: "factory",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newTeachableVisitor\x0a\x09| result |\x0a\x09result := Teachable new\x0a\x09\x09whenSend: #visit: evaluate: [ :one | one acceptDagVisitor: result ];\x0a\x09\x09acceptSend: #visitDagNode:.\x0a\x09^ result",
referencedClasses: ["Teachable"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whenSend:evaluate:", "new", "acceptDagVisitor:", "acceptSend:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Teachable)._new();
$recv($1)._whenSend_evaluate_("visit:",(function(one){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(one)._acceptDagVisitor_(result);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({one:one},$ctx1,1)});
//>>excludeEnd("ctx");
}));
result=$recv($1)._acceptSend_("visitDagNode:");
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newTeachableVisitor",{result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.ASTPCNodeVisitorTest);

$core.addMethod(
$core.method({
selector: "testJSStatementNode",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testJSStatementNode\x0a\x09| ast result |\x0a\x09\x0a\x09ast := self parse: 'foo <inlineJS: ''consolee.log(1)''>' forClass: Object.\x0a\x09result := self astPCNodeVisitor visit: ast; currentNode.\x0a\x09self\x0a\x09\x09assert: ((self newTeachableVisitor whenSend: #visitJSStatementNode: return: 'JS'; yourself) visit: result)\x0a\x09\x09equals: 'JS'",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:forClass:", "visit:", "astPCNodeVisitor", "currentNode", "assert:equals:", "whenSend:return:", "newTeachableVisitor", "yourself"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var ast,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
ast=$self._parse_forClass_("foo <inlineJS: 'consolee.log(1)'>",$globals.Object);
$1=$self._astPCNodeVisitor();
[$recv($1)._visit_(ast)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["visit:"]=1
//>>excludeEnd("ctx");
][0];
result=$recv($1)._currentNode();
$2=$self._newTeachableVisitor();
$recv($2)._whenSend_return_("visitJSStatementNode:","JS");
$self._assert_equals_($recv($recv($2)._yourself())._visit_(result),"JS");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testJSStatementNode",{ast:ast,result:result})});
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
var $1;
ast=$self._parse_forClass_("foo self asString yourself. ^ self asBoolean",$globals.Object);
$1=$self._astPCNodeVisitorForSelector_("yourself");
$recv($1)._visit_(ast);
$self._assert_equals_($recv($recv($1)._currentNode())._selector(),"yourself");
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
var $1;
ast=$self._parse_forClass_("foo true ifTrue: [ [ self asString yourself ] value.  ]. ^ self asBoolean",$globals.Object);
$1=$self._astPCNodeVisitorForSelector_("yourself");
$recv($1)._visit_(ast);
$self._assert_equals_($recv($recv($1)._currentNode())._selector(),"yourself");
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
var $1,$2;
ast=[$self._parse_forClass_("foo true ifTrue: [ self asString yourself ]. ^ self asBoolean",$globals.Object)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["parse:forClass:"]=1
//>>excludeEnd("ctx");
][0];
$1=[$self._astPCNodeVisitorForSelector_("yourself")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["astPCNodeVisitorForSelector:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._visit_(ast)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["visit:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([$recv($1)._currentNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["currentNode"]=1
//>>excludeEnd("ctx");
][0])._selector()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["selector"]=1
//>>excludeEnd("ctx");
][0],"yourself")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
ast=$self._parse_forClass_("foo true ifTrue: [ self asString yourself ]. ^ self asBoolean",$globals.Object);
$2=$self._astPCNodeVisitorForSelector_("asBoolean");
$recv($2)._visit_(ast);
$self._assert_equals_($recv($recv($2)._currentNode())._selector(),"asBoolean");
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
var $1;
ast=$self._parse_forClass_("foo ^ self",$globals.Object);
$1=$self._astPCNodeVisitor();
$recv($1)._visit_(ast);
$self._assert_($recv($recv($1)._currentNode())._isNil());
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
node=[$self._parse_forClass_("yourself\x0a\x09^ self",$globals.Object)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["parse:forClass:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($recv([$recv(node)._navigationNodeAt_ifAbsent_([(2).__at((4))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["@"]=1
//>>excludeEnd("ctx");
][0],(function(){
return nil;

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["navigationNodeAt:ifAbsent:"]=1
//>>excludeEnd("ctx");
][0])._source(),"self")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
node=[$self._parse_forClass_("foo\x0a\x09true ifTrue: [ 1 ]",$globals.Object)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["parse:forClass:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([$recv(node)._navigationNodeAt_ifAbsent_([(2).__at((7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["@"]=2
//>>excludeEnd("ctx");
][0],(function(){
return nil;

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["navigationNodeAt:ifAbsent:"]=2
//>>excludeEnd("ctx");
][0])._selector()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["selector"]=1
//>>excludeEnd("ctx");
][0],"ifTrue:")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
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
selector: "shouldntInstall:andRaise:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anErrorClass"],
source: "shouldntInstall: aString andRaise: anErrorClass\x0a\x09| method |\x0a\x0a\x09[ self\x0a\x09\x09should: [ method := self install: aString forClass: receiver class ]\x0a\x09\x09raise: anErrorClass ]\x0a\x09ensure: [ method ifNotNil: [ receiver class removeCompiledMethod: method ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ensure:", "should:raise:", "install:forClass:", "class", "ifNotNil:", "removeCompiledMethod:"]
}, function ($methodClass){ return function (aString,anErrorClass){
var self=this,$self=this;
var method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
method=$self._install_forClass_(aString,[$recv($self.receiver)._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0]);
return method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),anErrorClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=method;
if($1 == null || $1.a$nil){
return $1;
} else {
return $recv($recv($self.receiver)._class())._removeCompiledMethod_(method);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldntInstall:andRaise:",{aString:aString,anErrorClass:anErrorClass,method:method})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testDyadicJSOverrideArgMismatch",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDyadicJSOverrideArgMismatch\x0a\x09receiver := ObjectMock new.\x0a\x09self\x0a\x09\x09shouldntInstall: 'quux: aNumber foo: anotherNumber\x0a\x09\x09<jsOverride: #mux args: #(anInteger anotherNumber)>\x0a\x09\x09^ (foo := foo * aNumber + anotherNumber)'\x0a\x09\x09andRaise: CompilerError.\x0a\x09self\x0a\x09\x09shouldntInstall: 'quux: aNumber foo: anotherNumber\x0a\x09\x09<jsOverride: #mux args: #(aNumber anotherInteger)>\x0a\x09\x09^ (foo := foo * aNumber + anotherNumber)'\x0a\x09\x09andRaise: CompilerError.\x0a\x09self\x0a\x09\x09shouldntInstall: 'quux: aNumber foo: anotherNumber\x0a\x09\x09<jsOverride: #mux args: #(anotherNumber anInteger)>\x0a\x09\x09^ (foo := foo * aNumber + anotherNumber)'\x0a\x09\x09andRaise: CompilerError",
referencedClasses: ["ObjectMock", "CompilerError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "shouldntInstall:andRaise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=$recv($globals.ObjectMock)._new();
[$self._shouldntInstall_andRaise_("quux: aNumber foo: anotherNumber\x0a\x09\x09<jsOverride: #mux args: #(anInteger anotherNumber)>\x0a\x09\x09^ (foo := foo * aNumber + anotherNumber)",$globals.CompilerError)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["shouldntInstall:andRaise:"]=1
//>>excludeEnd("ctx");
][0];
[$self._shouldntInstall_andRaise_("quux: aNumber foo: anotherNumber\x0a\x09\x09<jsOverride: #mux args: #(aNumber anotherInteger)>\x0a\x09\x09^ (foo := foo * aNumber + anotherNumber)",$globals.CompilerError)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["shouldntInstall:andRaise:"]=2
//>>excludeEnd("ctx");
][0];
$self._shouldntInstall_andRaise_("quux: aNumber foo: anotherNumber\x0a\x09\x09<jsOverride: #mux args: #(anotherNumber anInteger)>\x0a\x09\x09^ (foo := foo * aNumber + anotherNumber)",$globals.CompilerError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDyadicJSOverrideArgMismatch",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testDyadicJSOverrideInOneArg",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDyadicJSOverrideInOneArg\x0a\x09receiver := ObjectMock new.\x0a\x09self\x0a\x09\x09shouldntInstall: 'quux: anInteger\x0a\x09\x09<jsOverride: #mux args: #(anInteger anotherInteger)>\x0a\x09\x09^ (foo := foo + anInteger)'\x0a\x09\x09andRaise: CompilerError.\x0a\x09self\x0a\x09\x09shouldntInstall: 'quux: anInteger\x0a\x09\x09<jsOverride: #mux args: #(anotherInteger anInteger)>\x0a\x09\x09^ (foo := foo + anInteger)'\x0a\x09\x09andRaise: CompilerError",
referencedClasses: ["ObjectMock", "CompilerError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "shouldntInstall:andRaise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=$recv($globals.ObjectMock)._new();
[$self._shouldntInstall_andRaise_("quux: anInteger\x0a\x09\x09<jsOverride: #mux args: #(anInteger anotherInteger)>\x0a\x09\x09^ (foo := foo + anInteger)",$globals.CompilerError)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["shouldntInstall:andRaise:"]=1
//>>excludeEnd("ctx");
][0];
$self._shouldntInstall_andRaise_("quux: anInteger\x0a\x09\x09<jsOverride: #mux args: #(anotherInteger anInteger)>\x0a\x09\x09^ (foo := foo + anInteger)",$globals.CompilerError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDyadicJSOverrideInOneArg",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testDyadicJSOverrideInUnary",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDyadicJSOverrideInUnary\x0a\x09receiver := ObjectMock new.\x0a\x09self\x0a\x09\x09shouldntInstall: 'quux <jsOverride: #mux args: #(anInteger anotherInteger)> ^ (foo := foo + 3)'\x0a\x09\x09andRaise: CompilerError",
referencedClasses: ["ObjectMock", "CompilerError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "shouldntInstall:andRaise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=$recv($globals.ObjectMock)._new();
$self._shouldntInstall_andRaise_("quux <jsOverride: #mux args: #(anInteger anotherInteger)> ^ (foo := foo + 3)",$globals.CompilerError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDyadicJSOverrideInUnary",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testDyadicJSOverrideRepeatedArgs",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDyadicJSOverrideRepeatedArgs\x0a\x09receiver := ObjectMock new.\x0a\x09self\x0a\x09\x09shouldntInstall: 'quux: anInteger\x0a\x09\x09<jsOverride: #mux args: #(anInteger anInteger)>\x0a\x09\x09^ (foo := foo + anInteger)'\x0a\x09\x09andRaise: CompilerError.\x0a\x09self\x0a\x09\x09shouldntInstall: 'quux: anInteger foo: anotherInteger\x0a\x09\x09<jsOverride: #mux args: #(anInteger anInteger)>\x0a\x09\x09^ (foo := foo * anInteger + anotherInteger)'\x0a\x09\x09andRaise: CompilerError",
referencedClasses: ["ObjectMock", "CompilerError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "shouldntInstall:andRaise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=$recv($globals.ObjectMock)._new();
[$self._shouldntInstall_andRaise_("quux: anInteger\x0a\x09\x09<jsOverride: #mux args: #(anInteger anInteger)>\x0a\x09\x09^ (foo := foo + anInteger)",$globals.CompilerError)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["shouldntInstall:andRaise:"]=1
//>>excludeEnd("ctx");
][0];
$self._shouldntInstall_andRaise_("quux: anInteger foo: anotherInteger\x0a\x09\x09<jsOverride: #mux args: #(anInteger anInteger)>\x0a\x09\x09^ (foo := foo * anInteger + anotherInteger)",$globals.CompilerError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDyadicJSOverrideRepeatedArgs",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testDyadicSOverrideDifferentNames",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDyadicSOverrideDifferentNames\x0a\x09receiver := ObjectMock new.\x0a\x09receiver foo: 4.\x0a\x09self while: 'quux: anInteger foo: anotherInteger\x0a\x09\x09<jsOverride: #mux args: #(anInteger anotherInteger)>\x0a\x09\x09^ (foo := foo * anInteger + anotherInteger)' should: [\x0a\x09\x09self should: [ receiver mux ] raise: MessageNotUnderstood.\x0a\x09\x09self should: [ receiver mux: 2 and: -1 ] raise: MessageNotUnderstood.\x0a\x09\x09self assert: (receiver basicPerform: #mux withArguments: #(2 -2)) equals: 6.\x0a\x09\x09self assert: (receiver quux: 1 foo: 4) equals: 10.\x0a\x09\x09self should: [ receiver basicPerform: #quux ] raise: Error.\x0a\x09\x09self assert: receiver foo equals: 10 ]",
referencedClasses: ["ObjectMock", "MessageNotUnderstood", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "foo:", "while:should:", "should:raise:", "mux", "mux:and:", "assert:equals:", "basicPerform:withArguments:", "quux:foo:", "basicPerform:", "foo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=$recv($globals.ObjectMock)._new();
$recv($self.receiver)._foo_((4));
$self._while_should_("quux: anInteger foo: anotherInteger\x0a\x09\x09<jsOverride: #mux args: #(anInteger anotherInteger)>\x0a\x09\x09^ (foo := foo * anInteger + anotherInteger)",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self.receiver)._mux();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["should:raise:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self.receiver)._mux_and_((2),(-1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["should:raise:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($recv($self.receiver)._basicPerform_withArguments_("mux",[(2), (-2)]),(6))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($recv($self.receiver)._quux_foo_((1),(4)),(10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self.receiver)._basicPerform_("quux");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}),$globals.Error);
return $self._assert_equals_($recv($self.receiver)._foo(),(10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDyadicSOverrideDifferentNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testInvalidAssignment",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInvalidAssignment\x0a\x09self shouldntInstall: 'foo:a a:=1' andRaise: InvalidAssignmentError.\x0a\x09self shouldntInstall: 'foo false:=1' andRaise: InvalidAssignmentError.\x0a\x09self shouldntInstall: 'foo console:=1' andRaise: InvalidAssignmentError.\x0a\x09self shouldntInstall: 'foo Number:=1' andRaise: InvalidAssignmentError\x0a",
referencedClasses: ["InvalidAssignmentError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldntInstall:andRaise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._shouldntInstall_andRaise_("foo:a a:=1",$globals.InvalidAssignmentError)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["shouldntInstall:andRaise:"]=1
//>>excludeEnd("ctx");
][0];
[$self._shouldntInstall_andRaise_("foo false:=1",$globals.InvalidAssignmentError)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["shouldntInstall:andRaise:"]=2
//>>excludeEnd("ctx");
][0];
[$self._shouldntInstall_andRaise_("foo console:=1",$globals.InvalidAssignmentError)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["shouldntInstall:andRaise:"]=3
//>>excludeEnd("ctx");
][0];
$self._shouldntInstall_andRaise_("foo Number:=1",$globals.InvalidAssignmentError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInvalidAssignment",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testMistypedPragmaJSStatement",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMistypedPragmaJSStatement\x0a\x09self shouldntInstall: 'foo < inlineJS: ''return ''foo'''' >' andRaise: ParseError",
referencedClasses: ["ParseError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldntInstall:andRaise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldntInstall_andRaise_("foo < inlineJS: 'return 'foo'' >",$globals.ParseError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMistypedPragmaJSStatement",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testMonadicJSOverrideArgMismatch",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMonadicJSOverrideArgMismatch\x0a\x09receiver := ObjectMock new.\x0a\x09self\x0a\x09\x09shouldntInstall: 'quux: aNumber <jsOverride: #mux args: #(anInteger)> ^ (foo := foo + aNumber)'\x0a\x09\x09andRaise: CompilerError\x0a",
referencedClasses: ["ObjectMock", "CompilerError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "shouldntInstall:andRaise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=$recv($globals.ObjectMock)._new();
$self._shouldntInstall_andRaise_("quux: aNumber <jsOverride: #mux args: #(anInteger)> ^ (foo := foo + aNumber)",$globals.CompilerError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMonadicJSOverrideArgMismatch",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testMonadicJSOverrideDifferentNames",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMonadicJSOverrideDifferentNames\x0a\x09receiver := ObjectMock new.\x0a\x09receiver foo: 4.\x0a\x09self while: 'quux: anInteger <jsOverride: #mux args: #(anInteger)> ^ (foo := foo + anInteger)' should: [\x0a\x09\x09self should: [ receiver mux ] raise: MessageNotUnderstood.\x0a\x09\x09self should: [ receiver mux: 2 ] raise: MessageNotUnderstood.\x0a\x09\x09self assert: (receiver basicPerform: #mux withArguments: #(2)) equals: 6.\x0a\x09\x09self assert: (receiver quux: 4) equals: 10.\x0a\x09\x09self should: [ receiver basicPerform: #quux ] raise: Error.\x0a\x09\x09self assert: receiver foo equals: 10 ]",
referencedClasses: ["ObjectMock", "MessageNotUnderstood", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "foo:", "while:should:", "should:raise:", "mux", "mux:", "assert:equals:", "basicPerform:withArguments:", "quux:", "basicPerform:", "foo"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=$recv($globals.ObjectMock)._new();
$recv($self.receiver)._foo_((4));
$self._while_should_("quux: anInteger <jsOverride: #mux args: #(anInteger)> ^ (foo := foo + anInteger)",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self.receiver)._mux();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["should:raise:"]=1
//>>excludeEnd("ctx");
][0];
[$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self.receiver)._mux_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["should:raise:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($recv($self.receiver)._basicPerform_withArguments_("mux",[(2)]),(6))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($recv($self.receiver)._quux_((4)),(10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self.receiver)._basicPerform_("quux");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}),$globals.Error);
return $self._assert_equals_($recv($self.receiver)._foo(),(10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMonadicJSOverrideDifferentNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testMonadicJSOverrideInUnary",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMonadicJSOverrideInUnary\x0a\x09receiver := ObjectMock new.\x0a\x09self\x0a\x09\x09shouldntInstall: 'quux <jsOverride: #mux args: #(anInteger)> ^ (foo := foo + 3)'\x0a\x09\x09andRaise: CompilerError",
referencedClasses: ["ObjectMock", "CompilerError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "shouldntInstall:andRaise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=$recv($globals.ObjectMock)._new();
$self._shouldntInstall_andRaise_("quux <jsOverride: #mux args: #(anInteger)> ^ (foo := foo + 3)",$globals.CompilerError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMonadicJSOverrideInUnary",{})});
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
$self.receiver=$recv($globals.ObjectMock)._new();
$recv($self.receiver)._foo_((4));
$self._while_should_("baz <jsOverride: #baz> ^ (foo := foo + 3)",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$self._assert_equals_([$recv($self.receiver)._baz()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["baz"]=1
//>>excludeEnd("ctx");
][0],(7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($recv($self.receiver)._basicPerform_("baz"),(10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($recv($self.receiver)._baz(),(13))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:equals:"]=3
//>>excludeEnd("ctx");
][0];
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
$self.receiver=$recv($globals.ObjectMock)._new();
$recv($self.receiver)._foo_((4));
$self._while_should_("quux <jsOverride: #mux> ^ (foo := foo + 3)",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self.receiver)._mux();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$globals.MessageNotUnderstood)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["should:raise:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv($self.receiver)._basicPerform_("mux")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["basicPerform:"]=1
//>>excludeEnd("ctx");
][0],(7))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_($recv($self.receiver)._quux(),(10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
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
selector: "testNiladicJSOverrideInOneArg",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNiladicJSOverrideInOneArg\x0a\x09receiver := ObjectMock new.\x0a\x09self\x0a\x09\x09shouldntInstall: 'quux: anInteger <jsOverride: #mux> ^ (foo := foo + anInteger)'\x0a\x09\x09andRaise: CompilerError",
referencedClasses: ["ObjectMock", "CompilerError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "shouldntInstall:andRaise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.receiver=$recv($globals.ObjectMock)._new();
$self._shouldntInstall_andRaise_("quux: anInteger <jsOverride: #mux> ^ (foo := foo + anInteger)",$globals.CompilerError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNiladicJSOverrideInOneArg",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AbstractCodeGeneratorInstallTest);

$core.addMethod(
$core.method({
selector: "testPragmaInBlock",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPragmaInBlock\x0a\x09self shouldntInstall: 'foo ^ [ < fooBar > 4 ] value' andRaise: ParseError",
referencedClasses: ["ParseError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldntInstall:andRaise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldntInstall_andRaise_("foo ^ [ < fooBar > 4 ] value",$globals.ParseError);
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
return $recv([$self._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv($globals.AbstractCodeGeneratorInstallTest)._name());
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
source: "testClassRefVar\x0a\x09| node binding |\x0a\x09node := VariableNode new\x0a\x09\x09identifier: 'Object';\x0a\x09\x09yourself.\x0a\x09SemanticAnalyzer new \x0a\x09\x09pushScope: MethodLexicalScope new;\x0a\x09\x09visit: node.\x0a\x09binding := node binding.\x0a\x09self deny: binding isAssignable.\x0a\x09self deny: binding isIdempotent.\x0a\x09self assert: (binding alias includesSubString: 'Object').\x0a\x09self assert: (binding alias ~= 'Object')",
referencedClasses: ["VariableNode", "SemanticAnalyzer", "MethodLexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["identifier:", "new", "yourself", "pushScope:", "visit:", "binding", "deny:", "isAssignable", "isIdempotent", "assert:", "includesSubString:", "alias", "~="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var node,binding;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=[$recv($globals.VariableNode)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._identifier_("Object");
node=$recv($1)._yourself();
$2=[$recv($globals.SemanticAnalyzer)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
$recv($2)._pushScope_($recv($globals.MethodLexicalScope)._new());
$recv($2)._visit_(node);
binding=$recv(node)._binding();
[$self._deny_($recv(binding)._isAssignable())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["deny:"]=1
//>>excludeEnd("ctx");
][0];
$self._deny_($recv(binding)._isIdempotent());
[$self._assert_($recv([$recv(binding)._alias()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["alias"]=1
//>>excludeEnd("ctx");
][0])._includesSubString_("Object"))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=1
//>>excludeEnd("ctx");
][0];
$self._assert_($recv($recv(binding)._alias()).__tild_eq("Object"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClassRefVar",{node:node,binding:binding})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVarTest);

$core.addMethod(
$core.method({
selector: "testExternallyKnownVar",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testExternallyKnownVar\x0a\x09| node binding |\x0a\x09node := VariableNode new\x0a\x09\x09identifier: 'console';\x0a\x09\x09yourself.\x0a\x09SemanticAnalyzer new \x0a\x09\x09pushScope: MethodLexicalScope new;\x0a\x09\x09visit: node.\x0a\x09binding := node binding.\x0a\x09self deny: binding isAssignable.\x0a\x09self deny: binding isIdempotent.\x0a\x09self assert: binding alias equals: 'console'",
referencedClasses: ["VariableNode", "SemanticAnalyzer", "MethodLexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["identifier:", "new", "yourself", "pushScope:", "visit:", "binding", "deny:", "isAssignable", "isIdempotent", "assert:equals:", "alias"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var node,binding;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=[$recv($globals.VariableNode)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._identifier_("console");
node=$recv($1)._yourself();
$2=[$recv($globals.SemanticAnalyzer)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
$recv($2)._pushScope_($recv($globals.MethodLexicalScope)._new());
$recv($2)._visit_(node);
binding=$recv(node)._binding();
[$self._deny_($recv(binding)._isAssignable())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["deny:"]=1
//>>excludeEnd("ctx");
][0];
$self._deny_($recv(binding)._isIdempotent());
$self._assert_equals_($recv(binding)._alias(),"console");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testExternallyKnownVar",{node:node,binding:binding})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVarTest);

$core.addMethod(
$core.method({
selector: "testExternallyUnknownVar",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testExternallyUnknownVar\x0a\x09| node |\x0a\x09node := VariableNode new\x0a\x09\x09identifier: 'bzzz';\x0a\x09\x09yourself.\x0a\x09self \x0a\x09\x09should: [\x0a\x09\x09\x09SemanticAnalyzer new \x0a\x09\x09\x09pushScope: MethodLexicalScope new;\x0a\x09\x09\x09visit: node ]\x0a\x09\x09raise: UnknownVariableError",
referencedClasses: ["VariableNode", "SemanticAnalyzer", "MethodLexicalScope", "UnknownVariableError"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["identifier:", "new", "yourself", "should:raise:", "pushScope:", "visit:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var node;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=[$recv($globals.VariableNode)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._identifier_("bzzz");
node=$recv($1)._yourself();
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=[$recv($globals.SemanticAnalyzer)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0];
$recv($2)._pushScope_($recv($globals.MethodLexicalScope)._new());
return $recv($2)._visit_(node);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.UnknownVariableError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testExternallyUnknownVar",{node:node})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVarTest);

$core.addMethod(
$core.method({
selector: "testInstanceVar",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInstanceVar\x0a\x09| binding |\x0a\x09binding := MethodLexicalScope new\x0a\x09\x09addIVar: 'bzzz';\x0a\x09\x09bindingFor: 'bzzz'.\x0a\x09self assert: binding isAssignable.\x0a\x09self deny: binding isIdempotent.\x0a\x09self assert: (binding alias includesSubString: 'bzzz').\x0a\x09self assert: (binding alias ~= 'bzzz')",
referencedClasses: ["MethodLexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addIVar:", "new", "bindingFor:", "assert:", "isAssignable", "deny:", "isIdempotent", "includesSubString:", "alias", "~="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var binding;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.MethodLexicalScope)._new();
$recv($1)._addIVar_("bzzz");
binding=$recv($1)._bindingFor_("bzzz");
[$self._assert_($recv(binding)._isAssignable())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=1
//>>excludeEnd("ctx");
][0];
$self._deny_($recv(binding)._isIdempotent());
[$self._assert_($recv([$recv(binding)._alias()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["alias"]=1
//>>excludeEnd("ctx");
][0])._includesSubString_("bzzz"))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=2
//>>excludeEnd("ctx");
][0];
$self._assert_($recv($recv(binding)._alias()).__tild_eq("bzzz"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInstanceVar",{binding:binding})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVarTest);

$core.addMethod(
$core.method({
selector: "testPseudoVar",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPseudoVar\x0a\x09#('self' 'super' 'true' 'false' 'nil' 'thisContext') do: [ :each |\x0a\x09\x09| binding |\x0a\x09\x09binding := MethodLexicalScope new bindingFor: each.\x0a\x09\x09self deny: binding isAssignable.\x0a\x09\x09self assert: binding isIdempotent ]",
referencedClasses: ["MethodLexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "bindingFor:", "new", "deny:", "isAssignable", "assert:", "isIdempotent"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
["self", "super", "true", "false", "nil", "thisContext"]._do_((function(each){
var binding;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
binding=$recv($recv($globals.MethodLexicalScope)._new())._bindingFor_(each);
$self._deny_($recv(binding)._isAssignable());
return $self._assert_($recv(binding)._isIdempotent());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,binding:binding},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPseudoVar",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVarTest);

$core.addMethod(
$core.method({
selector: "testTempVar",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTempVar\x0a\x09| binding |\x0a\x09binding := MethodLexicalScope new\x0a\x09\x09addTemp: 'bzzz';\x0a\x09\x09bindingFor: 'bzzz'.\x0a\x09self assert: binding isAssignable.\x0a\x09self deny: binding isIdempotent.\x0a\x09self assert: binding alias equals: 'bzzz'",
referencedClasses: ["MethodLexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addTemp:", "new", "bindingFor:", "assert:", "isAssignable", "deny:", "isIdempotent", "assert:equals:", "alias"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var binding;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.MethodLexicalScope)._new();
$recv($1)._addTemp_("bzzz");
binding=$recv($1)._bindingFor_("bzzz");
$self._assert_($recv(binding)._isAssignable());
$self._deny_($recv(binding)._isIdempotent());
$self._assert_equals_($recv(binding)._alias(),"bzzz");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTempVar",{binding:binding})});
//>>excludeEnd("ctx");
}; }),
$globals.ScopeVarTest);

$core.addMethod(
$core.method({
selector: "testUnknownVar",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUnknownVar\x0a\x09self assert: (MethodLexicalScope new bindingFor: 'bzzz') isNil",
referencedClasses: ["MethodLexicalScope"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "isNil", "bindingFor:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv($recv($recv($globals.MethodLexicalScope)._new())._bindingFor_("bzzz"))._isNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUnknownVar",{})});
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
source: "testScope\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast sequenceNode dagChildren last scope == ast scope.",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "last", "dagChildren", "sequenceNode"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ | b | b := a ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
$self._deny_($recv([$recv($recv($recv($recv(ast)._sequenceNode())._dagChildren())._last())._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=1
//>>excludeEnd("ctx");
][0]).__eq_eq($recv(ast)._scope()));
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
source: "testScope2\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self deny: ast sequenceNode dagChildren last sequenceNode dagChildren first scope == ast scope.",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:", "deny:", "==", "scope", "first", "dagChildren", "sequenceNode", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
$self._deny_($recv([$recv($recv([$recv([$recv($recv($recv($recv(ast)._sequenceNode())._dagChildren())._last())._sequenceNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequenceNode"]=1
//>>excludeEnd("ctx");
][0])._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._first())._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=1
//>>excludeEnd("ctx");
][0]).__eq_eq($recv(ast)._scope()));
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
source: "testScopeLevel\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ [ | b | b := a ] ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09self assert: ast scope scopeLevel equals: 1.\x0a\x09self assert: ast sequenceNode dagChildren last sequenceNode dagChildren first scope scopeLevel equals: 3",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:", "assert:equals:", "scopeLevel", "scope", "first", "dagChildren", "sequenceNode", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ [ | b | b := a ] ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
[$self._assert_equals_([$recv([$recv(ast)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=1
//>>excludeEnd("ctx");
][0])._scopeLevel()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scopeLevel"]=1
//>>excludeEnd("ctx");
][0],(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($recv($recv($recv([$recv([$recv($recv($recv($recv(ast)._sequenceNode())._dagChildren())._last())._sequenceNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequenceNode"]=1
//>>excludeEnd("ctx");
][0])._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._first())._scope())._scopeLevel(),(3));
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
source: "testVariablesLookup\x0a\x09| src ast |\x0a\x0a\x09src := 'foo | a | a + 1. [ | b | b := a ]'.\x0a\x09ast := Smalltalk parse: src.\x0a\x09analyzer visit: ast.\x0a\x0a\x09\x22Binding for `a` in the message send\x22\x0a\x09self assert: ast sequenceNode dagChildren first receiver binding isAssignable.\x0a\x09self assert: ast sequenceNode dagChildren first receiver binding alias equals: 'a'.\x0a\x09self assert: ast sequenceNode dagChildren first receiver binding scope == ast scope.\x0a\x0a\x09\x22Binding for `b`\x22\x0a\x09self assert: ast sequenceNode dagChildren last sequenceNode dagChildren first left binding isAssignable.\x0a\x09self assert: ast sequenceNode dagChildren last sequenceNode dagChildren first left binding alias equals: 'b'.\x0a\x09self assert: ast sequenceNode dagChildren last sequenceNode dagChildren first left binding scope == ast sequenceNode dagChildren last scope.",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["parse:", "visit:", "assert:", "isAssignable", "binding", "receiver", "first", "dagChildren", "sequenceNode", "assert:equals:", "alias", "==", "scope", "left", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var src,ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
src="foo | a | a + 1. [ | b | b := a ]";
ast=$recv($globals.Smalltalk)._parse_(src);
$recv($self.analyzer)._visit_(ast);
[$self._assert_([$recv([$recv([$recv([$recv([$recv([$recv(ast)._sequenceNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequenceNode"]=1
//>>excludeEnd("ctx");
][0])._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=1
//>>excludeEnd("ctx");
][0])._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first"]=1
//>>excludeEnd("ctx");
][0])._receiver()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["receiver"]=1
//>>excludeEnd("ctx");
][0])._binding()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["binding"]=1
//>>excludeEnd("ctx");
][0])._isAssignable()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["isAssignable"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv([$recv([$recv([$recv([$recv([$recv(ast)._sequenceNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequenceNode"]=2
//>>excludeEnd("ctx");
][0])._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=2
//>>excludeEnd("ctx");
][0])._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first"]=2
//>>excludeEnd("ctx");
][0])._receiver()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["receiver"]=2
//>>excludeEnd("ctx");
][0])._binding()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["binding"]=2
//>>excludeEnd("ctx");
][0])._alias()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["alias"]=1
//>>excludeEnd("ctx");
][0],"a")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_([$recv([$recv([$recv($recv([$recv([$recv([$recv(ast)._sequenceNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequenceNode"]=3
//>>excludeEnd("ctx");
][0])._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=3
//>>excludeEnd("ctx");
][0])._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first"]=3
//>>excludeEnd("ctx");
][0])._receiver())._binding()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["binding"]=3
//>>excludeEnd("ctx");
][0])._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=1
//>>excludeEnd("ctx");
][0]).__eq_eq([$recv(ast)._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["=="]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=2
//>>excludeEnd("ctx");
][0];
[$self._assert_($recv([$recv([$recv([$recv([$recv([$recv([$recv([$recv([$recv(ast)._sequenceNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequenceNode"]=5
//>>excludeEnd("ctx");
][0])._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=5
//>>excludeEnd("ctx");
][0])._last()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["last"]=1
//>>excludeEnd("ctx");
][0])._sequenceNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequenceNode"]=4
//>>excludeEnd("ctx");
][0])._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=4
//>>excludeEnd("ctx");
][0])._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first"]=4
//>>excludeEnd("ctx");
][0])._left()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["left"]=1
//>>excludeEnd("ctx");
][0])._binding()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["binding"]=4
//>>excludeEnd("ctx");
][0])._isAssignable())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=3
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($recv([$recv([$recv([$recv([$recv([$recv([$recv([$recv([$recv(ast)._sequenceNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequenceNode"]=7
//>>excludeEnd("ctx");
][0])._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=7
//>>excludeEnd("ctx");
][0])._last()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["last"]=2
//>>excludeEnd("ctx");
][0])._sequenceNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequenceNode"]=6
//>>excludeEnd("ctx");
][0])._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=6
//>>excludeEnd("ctx");
][0])._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first"]=5
//>>excludeEnd("ctx");
][0])._left()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["left"]=2
//>>excludeEnd("ctx");
][0])._binding()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["binding"]=5
//>>excludeEnd("ctx");
][0])._alias(),"b");
$self._assert_($recv([$recv($recv($recv($recv([$recv([$recv([$recv([$recv([$recv(ast)._sequenceNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequenceNode"]=9
//>>excludeEnd("ctx");
][0])._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=9
//>>excludeEnd("ctx");
][0])._last()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["last"]=3
//>>excludeEnd("ctx");
][0])._sequenceNode()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["sequenceNode"]=8
//>>excludeEnd("ctx");
][0])._dagChildren()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["dagChildren"]=8
//>>excludeEnd("ctx");
][0])._first())._left())._binding())._scope()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["scope"]=3
//>>excludeEnd("ctx");
][0]).__eq_eq($recv($recv($recv($recv(ast)._sequenceNode())._dagChildren())._last())._scope()));
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
var $1,$2;
$1=$recv($globals.AISemanticAnalyzer)._on_($globals.Object);
$2=$recv($globals.AIContext)._new();
$recv($2)._defineLocal_("local");
$recv($2)._localAt_put_("local",(3));
$recv($1)._context_([$recv($2)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0]);
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
var $1;
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
if($1 == null || $1.a$nil){
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
[(
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
})))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
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
var $1,$2,$3;
ast=$self._parse_forClass_(aString,aClass);
$1=[$recv($globals.AIContext)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._receiver_(anObject);
$recv($1)._selector_($recv(ast)._selector());
$recv($1)._interpreter_($recv($globals.ASTInterpreter)._new());
ctx=$recv($1)._yourself();
$2=$recv(ast)._sequenceNode();
if($2 == null || $2.a$nil){
$2;
} else {
var sequence;
sequence=$2;
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
[(
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
})))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
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
$core.setTraitComposition([{trait: $globals.TClassBuildingTest}], $globals.AbstractJavaScriptGatewayTest);
$core.setTraitComposition([{trait: $globals.TCTNonInlined}, {trait: $globals.TCTDebugged}], $globals.DebuggedJSGTest);
$core.setTraitComposition([{trait: $globals.TCTInlined}, {trait: $globals.TCTExecuted}], $globals.InlinedJSGTest);
$core.setTraitComposition([{trait: $globals.TCTNonInlined}, {trait: $globals.TCTInterpreted}], $globals.InterpretedJSGTest);
$core.setTraitComposition([{trait: $globals.TCTNonInlined}, {trait: $globals.TCTExecuted}], $globals.PlainJSGTest);
$core.setTraitComposition([{trait: $globals.TASTParsingTest}], $globals.ASTPCNodeVisitorTest);
$core.setTraitComposition([{trait: $globals.TASTParsingTest}], $globals.ASTPositionTest);
$core.setTraitComposition([{trait: $globals.TASTCompilingTest}], $globals.AbstractCodeGeneratorInstallTest);
$core.setTraitComposition([{trait: $globals.TCTNonInlined}], $globals.CodeGeneratorInstallTest);
$core.setTraitComposition([{trait: $globals.TCTInlined}], $globals.InliningCodeGeneratorInstallTest);

});
