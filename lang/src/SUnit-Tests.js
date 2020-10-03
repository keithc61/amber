define(["amber/boot", "require", "amber/core/SUnit"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("SUnit-Tests");
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("ExampleSetTest", $globals.TestCase, "SUnit-Tests");
$core.setSlots($globals.ExampleSetTest, ["empty", "full"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ExampleSetTest.comment="ExampleSetTest is taken from Pharo 1.4.\x0a\x0aTHe purpose of this class is to demonstrate a simple use case of the test framework.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09empty := Set new.\x0a\x09full := Set with: 5 with: #abc",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "with:with:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.empty=$recv($globals.Set)._new();
$self.full=$recv($globals.Set)._with_with_((5),"abc");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ExampleSetTest);

$core.addMethod(
$core.method({
selector: "testAdd",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAdd\x0a\x09empty add: 5.\x0a\x09self assert: (empty includes: 5)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "assert:", "includes:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.empty)._add_((5));
$self._assert_($recv($self.empty)._includes_((5)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAdd",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ExampleSetTest);

$core.addMethod(
$core.method({
selector: "testGrow",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testGrow\x0a\x09empty addAll: (1 to: 100).\x0a\x09self assert: empty size equals: 100",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addAll:", "to:", "assert:equals:", "size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.empty)._addAll_((1)._to_((100)));
$self._assert_equals_($recv($self.empty)._size(),(100));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testGrow",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ExampleSetTest);

$core.addMethod(
$core.method({
selector: "testIllegal",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIllegal\x0a\x09self\x0a\x09\x09should: [ empty at: 5 ]\x0a\x09\x09raise: Error.\x0a\x09self\x0a\x09\x09should: [ empty at: 5 put: #abc ]\x0a\x09\x09raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "at:", "at:put:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.empty)._at_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["should:raise:"]=1
//>>excludeEnd("ctx");
][0];
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.empty)._at_put_((5),"abc");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIllegal",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ExampleSetTest);

$core.addMethod(
$core.method({
selector: "testIncludes",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIncludes\x0a\x09self assert: (full includes: 5).\x0a\x09self assert: (full includes: #abc)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "includes:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._assert_([$recv($self.full)._includes_((5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["includes:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:"]=1
//>>excludeEnd("ctx");
][0];
$self._assert_($recv($self.full)._includes_("abc"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIncludes",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ExampleSetTest);

$core.addMethod(
$core.method({
selector: "testOccurrences",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOccurrences\x0a\x09self assert: (empty occurrencesOf: 0) equals: 0.\x0a\x09self assert: (full occurrencesOf: 5) equals: 1.\x0a\x09full add: 5.\x0a\x09self assert: (full occurrencesOf: 5) equals: 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:", "occurrencesOf:", "add:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._assert_equals_([$recv($self.empty)._occurrencesOf_((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["occurrencesOf:"]=1
//>>excludeEnd("ctx");
][0],(0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
[$self._assert_equals_([$recv($self.full)._occurrencesOf_((5))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["occurrencesOf:"]=2
//>>excludeEnd("ctx");
][0],(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["assert:equals:"]=2
//>>excludeEnd("ctx");
][0];
$recv($self.full)._add_((5));
$self._assert_equals_($recv($self.full)._occurrencesOf_((5)),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOccurrences",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ExampleSetTest);

$core.addMethod(
$core.method({
selector: "testRemove",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRemove\x0a\x09full remove: 5.\x0a\x09self assert: (full includes: #abc).\x0a\x09self deny: (full includes: 5)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["remove:", "assert:", "includes:", "deny:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.full)._remove_((5));
$self._assert_([$recv($self.full)._includes_("abc")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["includes:"]=1
//>>excludeEnd("ctx");
][0]);
$self._deny_($recv($self.full)._includes_((5)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRemove",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ExampleSetTest);



$core.addClass("SUnitAsyncTest", $globals.TestCase, "SUnit-Tests");
$core.setSlots($globals.SUnitAsyncTest, ["flag"]);
$core.addMethod(
$core.method({
selector: "fakeError",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeError\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := (self async: [ flag := 'ok'. self error: 'Intentional' ]) valueWithTimeout: 20",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.flag="bad";
$self._timeout_((30));
$self.flag=$recv($self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self.flag="ok";
return $self._error_("Intentional");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((20));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeError",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "fakeErrorFailingInTearDown",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeErrorFailingInTearDown\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := (self async: [ self error: 'Intentional' ]) valueWithTimeout: 20",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "valueWithTimeout:", "async:", "error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.flag="bad";
$self._timeout_((30));
$self.flag=$recv($self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._error_("Intentional");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((20));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeErrorFailingInTearDown",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "fakeFailure",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeFailure\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := (self async: [ flag := 'ok'. self assert: false ]) valueWithTimeout: 20",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.flag="bad";
$self._timeout_((30));
$self.flag=$recv($self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self.flag="ok";
return $self._assert_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((20));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeFailure",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "fakeMultipleTimeoutFailing",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeMultipleTimeoutFailing\x0a\x09self timeout: 100.\x0a\x09(self async: [ \x0a\x09\x09self timeout: 20.\x0a\x09\x09(self async: [ self finished ]) valueWithTimeout: 30\x0a\x09]) valueWithTimeout: 20",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._timeout_((100))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["timeout:"]=1
//>>excludeEnd("ctx");
][0];
[$recv([$self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._timeout_((20));
return $recv($self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((30));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["async:"]=1
//>>excludeEnd("ctx");
][0])._valueWithTimeout_((20))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["valueWithTimeout:"]=1
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutFailing",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "fakeMultipleTimeoutPassing",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeMultipleTimeoutPassing\x0a\x09self timeout: 20.\x0a\x09(self async: [\x0a\x09\x09self timeout: 40.\x0a\x09\x09(self async: [ self finished ]) valueWithTimeout: 20\x0a\x09]) valueWithTimeout: 10",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._timeout_((20))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["timeout:"]=1
//>>excludeEnd("ctx");
][0];
[$recv([$self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._timeout_((40));
return $recv($self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((20));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["async:"]=1
//>>excludeEnd("ctx");
][0])._valueWithTimeout_((10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["valueWithTimeout:"]=1
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutPassing",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "fakeTimeout",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeTimeout\x0a\x09self timeout: 10.\x0a\x09(self async: [ self finished ]) valueWithTimeout: 20",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._timeout_((10));
$recv($self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((20));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeTimeout",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "selectorSetOf:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "selectorSetOf: aCollection\x0a\x09^ (aCollection collect: [ :each | each selector ]) asSet",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSet", "collect:", "selector"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aCollection)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectorSetOf:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09flag := 'ok'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
$self.flag="ok";
return self;

}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x09self assert: 'ok' equals: flag",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_("ok",$self.flag);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tearDown",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testAsyncErrorsAndFailures",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsyncErrorsAndFailures\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #(fakeError fakeErrorFailingInTearDown fakeFailure testPass) collect: [ :each | self class selector: each ].\x0a\x09runner := TestSuiteRunner on: suite.\x0a\x09self timeout: 200.\x0a\x09result := runner result.\x0a\x09assertBlock := self async: [\x0a\x09\x09self assert: (self selectorSetOf: result errors) equals: #(fakeError) asSet.\x0a\x09\x09self assert: (self selectorSetOf: result failures) equals: #(fakeErrorFailingInTearDown fakeFailure) asSet.\x0a\x09\x09self finished\x0a\x09].\x0a\x09runner announcer on: ResultAnnouncement do: [ :ann |\x0a\x09\x09(ann result == result and: [ result runs = result total ]) ifTrue: assertBlock ].\x0a\x09runner run",
referencedClasses: ["TestSuiteRunner", "ResultAnnouncement"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "selectorSetOf:", "errors", "asSet", "failures", "finished", "on:do:", "announcer", "ifTrue:", "and:", "==", "=", "runs", "total", "run"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var suite,runner,result,assertBlock;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
suite=["fakeError", "fakeErrorFailingInTearDown", "fakeFailure", "testPass"]._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._class())._selector_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
runner=$recv($globals.TestSuiteRunner)._on_(suite);
$self._timeout_((200));
result=[$recv(runner)._result()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["result"]=1
//>>excludeEnd("ctx");
][0];
assertBlock=$self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$self._assert_equals_([$self._selectorSetOf_($recv(result)._errors())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["selectorSetOf:"]=1
//>>excludeEnd("ctx");
][0],[["fakeError"]._asSet()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asSet"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($self._selectorSetOf_($recv(result)._failures()),["fakeErrorFailingInTearDown", "fakeFailure"]._asSet());
return $self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($recv(runner)._announcer())._on_do_($globals.ResultAnnouncement,(function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(ann)._result()).__eq_eq(result))){
$1=$recv($recv(result)._runs()).__eq($recv(result)._total());
} else {
$1=false;
}
return $recv($1)._ifTrue_(assertBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(runner)._run();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsyncErrorsAndFailures",{suite:suite,runner:runner,result:result,assertBlock:assertBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testAsyncNeedsTimeout",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testAsyncNeedsTimeout\x0a\x09self should: [ self async: [ ] ] raise: Error.\x0a\x09self timeout: 0.\x0a\x09self shouldnt: [ self async: [ ] ] raise: Error.\x0a\x09self finished",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "async:", "timeout:", "shouldnt:raise:", "finished"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$self._async_((function(){

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["async:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
$self._timeout_((0));
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._async_((function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}),$globals.Error);
$self._finished();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testAsyncNeedsTimeout",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testFinishedNeedsTimeout",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFinishedNeedsTimeout\x0a\x09self should: [ self finished ] raise: Error.\x0a\x09self timeout: 0.\x0a\x09self shouldnt: [ self finished ] raise: Error.",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["should:raise:", "finished", "timeout:", "shouldnt:raise:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$self._finished()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["finished"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$globals.Error);
$self._timeout_((0));
$self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$globals.Error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFinishedNeedsTimeout",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testIsAsyncReturnsCorrectValues",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsAsyncReturnsCorrectValues\x0a\x09self deny: self isAsync.\x0a\x09self timeout: 0.\x0a\x09self assert: self isAsync.\x0a\x09self finished.\x0a\x09self deny: self isAsync",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deny:", "isAsync", "timeout:", "assert:", "finished"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._deny_([$self._isAsync()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["isAsync"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["deny:"]=1
//>>excludeEnd("ctx");
][0];
$self._timeout_((0));
$self._assert_([$self._isAsync()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["isAsync"]=2
//>>excludeEnd("ctx");
][0]);
$self._finished();
$self._deny_($self._isAsync());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsAsyncReturnsCorrectValues",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testPass",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPass\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a\x09flag := (self async: [ self assert: true. self finished. flag := 'ok' ]) valueWithTimeout: 5",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "valueWithTimeout:", "async:", "assert:", "finished"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.flag="bad";
$self._timeout_((10));
$self.flag=$recv($self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._assert_(true);
$self._finished();
$self.flag="ok";
return $self.flag;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testTimeouts",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTimeouts\x0a\x09| suite runner result assertBlock |\x0a\x09suite := #(fakeTimeout fakeMultipleTimeoutFailing fakeMultipleTimeoutPassing testPass) collect: [ :each | self class selector: each ].\x0a\x09runner := TestSuiteRunner on: suite.\x0a\x09self timeout: 200.\x0a\x09result := runner result.\x0a\x09assertBlock := self async: [\x0a\x09\x09self assert: (self selectorSetOf: result errors) equals: Set new.\x0a\x09\x09self assert: (self selectorSetOf: result failures) equals: #(fakeMultipleTimeoutFailing fakeTimeout) asSet.\x0a\x09\x09self finished\x0a\x09].\x0a\x09runner announcer on: ResultAnnouncement do: [ :ann |\x0a\x09\x09(ann result == result and: [ result runs = result total ]) ifTrue: assertBlock ].\x0a\x09runner run",
referencedClasses: ["TestSuiteRunner", "Set", "ResultAnnouncement"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "async:", "assert:equals:", "selectorSetOf:", "errors", "new", "failures", "asSet", "finished", "on:do:", "announcer", "ifTrue:", "and:", "==", "=", "runs", "total", "run"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var suite,runner,result,assertBlock;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
suite=["fakeTimeout", "fakeMultipleTimeoutFailing", "fakeMultipleTimeoutPassing", "testPass"]._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._class())._selector_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
runner=$recv($globals.TestSuiteRunner)._on_(suite);
$self._timeout_((200));
result=[$recv(runner)._result()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["result"]=1
//>>excludeEnd("ctx");
][0];
assertBlock=$self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$self._assert_equals_([$self._selectorSetOf_($recv(result)._errors())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["selectorSetOf:"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.Set)._new())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($self._selectorSetOf_($recv(result)._failures()),["fakeMultipleTimeoutFailing", "fakeTimeout"]._asSet());
return $self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($recv(runner)._announcer())._on_do_($globals.ResultAnnouncement,(function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(ann)._result()).__eq_eq(result))){
$1=$recv($recv(result)._runs()).__eq($recv(result)._total());
} else {
$1=false;
}
return $recv($1)._ifTrue_(assertBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(runner)._run();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTimeouts",{suite:suite,runner:runner,result:result,assertBlock:assertBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);

$core.addMethod(
$core.method({
selector: "testTwoAsyncPassesWithFinishedOnlyOneIsRun",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTwoAsyncPassesWithFinishedOnlyOneIsRun\x0a\x09| x |\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a\x09x := 0.\x0a\x09flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: x equals: 1 ]) valueWithTimeout: 0.\x0a\x09flag := (self async: [ self finished. flag := 'ok'. x := x+1. self assert: x equals: 1 ]) valueWithTimeout: 0.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "valueWithTimeout:", "async:", "finished", "+", "assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var x;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.flag="bad";
$self._timeout_((10));
x=(0);
$self.flag=[$recv([$self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$self._finished()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["finished"]=1
//>>excludeEnd("ctx");
][0];
$self.flag="ok";
x=[$recv(x).__plus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0];
return [$self._assert_equals_(x,(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["async:"]=1
//>>excludeEnd("ctx");
][0])._valueWithTimeout_((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["valueWithTimeout:"]=1
//>>excludeEnd("ctx");
][0];
$self.flag=$recv($self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._finished();
$self.flag="ok";
x=$recv(x).__plus((1));
return $self._assert_equals_(x,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTwoAsyncPassesWithFinishedOnlyOneIsRun",{x:x})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitAsyncTest);



$core.addClass("SUnitPromiseTest", $globals.TestCase, "SUnit-Tests");
$core.setSlots($globals.SUnitPromiseTest, ["flag"]);
$core.addMethod(
$core.method({
selector: "fakeError",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeError\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := Promise delayMilliseconds: 20.\x0a\x09^ flag then: [ flag := 'ok'. self error: 'Intentional' ]",
referencedClasses: ["Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "delayMilliseconds:", "then:", "error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.flag="bad";
$self._timeout_((30));
$self.flag=$recv($globals.Promise)._delayMilliseconds_((20));
return $recv($self.flag)._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self.flag="ok";
return $self._error_("Intentional");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeError",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "fakeErrorFailingInTearDown",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeErrorFailingInTearDown\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := Promise delayMilliseconds: 20.\x0a\x09^ flag then: [ self error: 'Intentional' ]",
referencedClasses: ["Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "delayMilliseconds:", "then:", "error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.flag="bad";
$self._timeout_((30));
$self.flag=$recv($globals.Promise)._delayMilliseconds_((20));
return $recv($self.flag)._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._error_("Intentional");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeErrorFailingInTearDown",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "fakeFailure",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeFailure\x0a\x09flag := 'bad'.\x0a\x09self timeout: 30.\x0a\x09flag := Promise delayMilliseconds: 20.\x0a\x09^ flag then: [ flag := 'ok'. self assert: false ]",
referencedClasses: ["Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "delayMilliseconds:", "then:", "assert:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.flag="bad";
$self._timeout_((30));
$self.flag=$recv($globals.Promise)._delayMilliseconds_((20));
return $recv($self.flag)._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self.flag="ok";
return $self._assert_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeFailure",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "fakeMultipleTimeoutFailing",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeMultipleTimeoutFailing\x0a\x09self timeout: 100.\x0a\x09^ (Promise delayMilliseconds: 20) then: [ self timeout: 20. Promise delayMilliseconds: 30 ]",
referencedClasses: ["Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "then:", "delayMilliseconds:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._timeout_((100))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["timeout:"]=1
//>>excludeEnd("ctx");
][0];
return $recv([$recv($globals.Promise)._delayMilliseconds_((20))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["delayMilliseconds:"]=1
//>>excludeEnd("ctx");
][0])._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._timeout_((20));
return $recv($globals.Promise)._delayMilliseconds_((30));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutFailing",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "fakeMultipleTimeoutPassing",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeMultipleTimeoutPassing\x0a\x09self timeout: 20.\x0a\x09^ (Promise delayMilliseconds: 10) then: [ self timeout: 40. Promise delayMilliseconds: 20 ]",
referencedClasses: ["Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "then:", "delayMilliseconds:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$self._timeout_((20))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["timeout:"]=1
//>>excludeEnd("ctx");
][0];
return $recv([$recv($globals.Promise)._delayMilliseconds_((10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["delayMilliseconds:"]=1
//>>excludeEnd("ctx");
][0])._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._timeout_((40));
return $recv($globals.Promise)._delayMilliseconds_((20));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeMultipleTimeoutPassing",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "fakePromiseWithoutTimeout",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakePromiseWithoutTimeout\x0a\x09^ Promise delayMilliseconds: 10",
referencedClasses: ["Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["delayMilliseconds:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Promise)._delayMilliseconds_((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakePromiseWithoutTimeout",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "fakeTimeout",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeTimeout\x0a\x09self timeout: 10.\x0a\x09^ Promise delayMilliseconds: 20",
referencedClasses: ["Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "delayMilliseconds:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._timeout_((10));
return $recv($globals.Promise)._delayMilliseconds_((20));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeTimeout",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "fakeTimeoutSendOnly",
protocol: "helpers",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fakeTimeoutSendOnly\x0a\x09self timeout: 10",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._timeout_((10));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fakeTimeoutSendOnly",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "selectorSetOf:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "selectorSetOf: aCollection\x0a\x09^ (aCollection collect: [ :each | each selector ]) asSet",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSet", "collect:", "selector"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aCollection)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectorSetOf:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09flag := 'ok'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
$self.flag="ok";
return self;

}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x09self assert: 'ok' equals: flag",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:equals:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_("ok",$self.flag);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tearDown",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "testIsAsyncReturnsCorrectValues",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testIsAsyncReturnsCorrectValues\x0a\x09self deny: self isAsync.\x0a\x09self timeout: 0.\x0a\x09self assert: self isAsync.\x0a\x09\x22self finished.\x0a\x09self deny: self isAsync\x22\x0a\x09^ Promise new",
referencedClasses: ["Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deny:", "isAsync", "timeout:", "assert:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._deny_([$self._isAsync()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["isAsync"]=1
//>>excludeEnd("ctx");
][0]);
$self._timeout_((0));
$self._assert_($self._isAsync());
return $recv($globals.Promise)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testIsAsyncReturnsCorrectValues",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "testPass",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPass\x0a\x09flag := 'bad'.\x0a\x09self timeout: 10.\x0a\x09flag := Promise delayMilliseconds: 5.\x0a\x09^ flag then: [ self assert: true. flag := 'ok' ]",
referencedClasses: ["Promise"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timeout:", "delayMilliseconds:", "then:", "assert:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.flag="bad";
$self._timeout_((10));
$self.flag=$recv($globals.Promise)._delayMilliseconds_((5));
return $recv($self.flag)._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._assert_(true);
$self.flag="ok";
return $self.flag;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "testPromiseErrorsAndFailures",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPromiseErrorsAndFailures\x0a\x09| suite runner result |\x0a\x09suite := #(fakeError fakeErrorFailingInTearDown fakeFailure testPass) collect: [ :each | self class selector: each ].\x0a\x09runner := TestSuiteRunner on: suite.\x0a\x09self timeout: 200.\x0a\x09result := runner result.\x0a\x09^ Promise new: [ :model |\x0a\x09\x09runner announcer on: ResultAnnouncement do: [ :ann |\x0a\x09\x09\x09(ann result == result and: [ result runs = result total ]) ifTrue: [\x0a\x09\x09\x09\x09self assert: (self selectorSetOf: result errors) equals: #(fakeError) asSet.\x0a\x09\x09\x09\x09self assert: (self selectorSetOf: result failures) equals: #(fakeErrorFailingInTearDown fakeFailure) asSet.\x0a\x09\x09\x09\x09model value: nil ] ].\x0a\x09\x09runner run ]",
referencedClasses: ["TestSuiteRunner", "Promise", "ResultAnnouncement"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "new:", "on:do:", "announcer", "ifTrue:", "and:", "==", "=", "runs", "total", "assert:equals:", "selectorSetOf:", "errors", "asSet", "failures", "value:", "run"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var suite,runner,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
suite=["fakeError", "fakeErrorFailingInTearDown", "fakeFailure", "testPass"]._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._class())._selector_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
runner=$recv($globals.TestSuiteRunner)._on_(suite);
$self._timeout_((200));
result=[$recv(runner)._result()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["result"]=1
//>>excludeEnd("ctx");
][0];
return $recv($globals.Promise)._new_((function(model){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(runner)._announcer())._on_do_($globals.ResultAnnouncement,(function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv(ann)._result()).__eq_eq(result))){
$1=$recv($recv(result)._runs()).__eq($recv(result)._total());
} else {
$1=false;
}
if($core.assert($1)){
[$self._assert_equals_([$self._selectorSetOf_($recv(result)._errors())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["selectorSetOf:"]=1
//>>excludeEnd("ctx");
][0],[["fakeError"]._asSet()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["asSet"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($self._selectorSetOf_($recv(result)._failures()),["fakeErrorFailingInTearDown", "fakeFailure"]._asSet());
return $recv(model)._value_(nil);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({ann:ann},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $recv(runner)._run();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPromiseErrorsAndFailures",{suite:suite,runner:runner,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);

$core.addMethod(
$core.method({
selector: "testTimeouts",
protocol: "tests",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTimeouts\x0a\x09| suite runner result |\x0a\x09suite := #(fakeTimeout fakeMultipleTimeoutFailing fakeMultipleTimeoutPassing fakeTimeoutSendOnly fakePromiseWithoutTimeout testPass) collect: [ :each | self class selector: each ].\x0a\x09runner := TestSuiteRunner on: suite.\x0a\x09self timeout: 200.\x0a\x09result := runner result.\x0a\x09^ Promise new: [ :model |\x0a\x09\x09runner announcer on: ResultAnnouncement do: [ :ann |\x0a\x09\x09\x09console log: ann; log: ann result runs.\x0a\x09\x09\x09(ann result == result and: [ result runs = result total ]) ifTrue: [\x0a\x09\x09\x09\x09self assert: (self selectorSetOf: result errors) equals: #() asSet.\x0a\x09\x09\x09\x09self assert: (self selectorSetOf: result failures) equals: #(fakeMultipleTimeoutFailing fakeTimeout fakeTimeoutSendOnly fakePromiseWithoutTimeout) asSet.\x0a\x09\x09\x09\x09model value: nil ] ].\x0a\x09\x09runner run ]",
referencedClasses: ["TestSuiteRunner", "Promise", "ResultAnnouncement"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "selector:", "class", "on:", "timeout:", "result", "new:", "on:do:", "announcer", "log:", "runs", "ifTrue:", "and:", "==", "=", "total", "assert:equals:", "selectorSetOf:", "errors", "asSet", "failures", "value:", "run"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var suite,runner,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
suite=["fakeTimeout", "fakeMultipleTimeoutFailing", "fakeMultipleTimeoutPassing", "fakeTimeoutSendOnly", "fakePromiseWithoutTimeout", "testPass"]._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._class())._selector_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
runner=$recv($globals.TestSuiteRunner)._on_(suite);
$self._timeout_((200));
result=[$recv(runner)._result()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["result"]=1
//>>excludeEnd("ctx");
][0];
return $recv($globals.Promise)._new_((function(model){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(runner)._announcer())._on_do_($globals.ResultAnnouncement,(function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=console;
[$recv($1)._log_(ann)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["log:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._log_([$recv([$recv(ann)._result()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["result"]=2
//>>excludeEnd("ctx");
][0])._runs()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["runs"]=1
//>>excludeEnd("ctx");
][0]);
if($core.assert($recv($recv(ann)._result()).__eq_eq(result))){
$2=$recv($recv(result)._runs()).__eq($recv(result)._total());
} else {
$2=false;
}
if($core.assert($2)){
[$self._assert_equals_([$self._selectorSetOf_($recv(result)._errors())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["selectorSetOf:"]=1
//>>excludeEnd("ctx");
][0],[[]._asSet()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["asSet"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["assert:equals:"]=1
//>>excludeEnd("ctx");
][0];
$self._assert_equals_($self._selectorSetOf_($recv(result)._failures()),["fakeMultipleTimeoutFailing", "fakeTimeout", "fakeTimeoutSendOnly", "fakePromiseWithoutTimeout"]._asSet());
return $recv(model)._value_(nil);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({ann:ann},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $recv(runner)._run();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTimeouts",{suite:suite,runner:runner,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.SUnitPromiseTest);


});
