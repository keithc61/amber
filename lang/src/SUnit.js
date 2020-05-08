define(["amber/boot", "require", "amber/core/Kernel-Classes", "amber/core/Kernel-Exceptions", "amber/core/Kernel-Infrastructure", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("SUnit");
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("ResultAnnouncement", $globals.Object, ["result"], "SUnit");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ResultAnnouncement.comment="I get signaled when a `TestCase` has been run.\x0a\x0aMy instances hold the result (instance of `TestResult`) of the test run.";
//>>excludeEnd("ide");
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
$globals.ResultAnnouncement);

$core.addMethod(
$core.method({
selector: "result:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestResult"],
source: "result: aTestResult\x0a\x09result := aTestResult",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aTestResult){
var self=this,$self=this;
$self.result=aTestResult;
return self;

}; }),
$globals.ResultAnnouncement);



$core.addClass("Teachable", $globals.Object, ["learnings"], "SUnit");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Teachable.comment="An object you can teach how to behave. Have a look at the \x0aclass side for an example.\x0a\x0aFor more infos have a look at: http://lists.squeakfoundation.org/pipermail/squeak-dev/2002-April/038170.html";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "acceptSend:",
protocol: "teaching",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "acceptSend: aSymbol\x0a\x0a\x09self whenSend: aSymbol return: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whenSend:return:"]
}, function ($methodClass){ return function (aSymbol){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._whenSend_return_(aSymbol,self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptSend:",{aSymbol:aSymbol})});
//>>excludeEnd("ctx");
}; }),
$globals.Teachable);

$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x0a\x09| learning |\x0a\x09learning := self learnings \x0a\x09\x09at: aMessage selector \x0a\x09\x09ifAbsent:[ ^super doesNotUnderstand: aMessage ].\x0a\x09^ learning class == Association\x0a\x09\x09ifTrue: [learning value]\x0a\x09\x09ifFalse: [learning valueWithPossibleArguments: aMessage arguments]",
referencedClasses: ["Association"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "learnings", "selector", "doesNotUnderstand:", "ifTrue:ifFalse:", "==", "class", "value", "valueWithPossibleArguments:", "arguments"]
}, function ($methodClass){ return function (aMessage){
var self=this,$self=this;
var learning;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
learning=$recv($self._learnings())._at_ifAbsent_($recv(aMessage)._selector(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._doesNotUnderstand_.call($self,aMessage))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.supercall = false
//>>excludeEnd("ctx");
][0]];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($recv($recv(learning)._class()).__eq_eq($globals.Association))){
return $recv(learning)._value();
} else {
return $recv(learning)._valueWithPossibleArguments_($recv(aMessage)._arguments());
}
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage,learning:learning})});
//>>excludeEnd("ctx");
}; }),
$globals.Teachable);

$core.addMethod(
$core.method({
selector: "learnings",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "learnings\x0a\x0a\x09learnings isNil ifTrue: [learnings := Dictionary new].\x0a\x09^learnings",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "isNil", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv($self.learnings)._isNil())){
$self.learnings=$recv($globals.Dictionary)._new();
$self.learnings;
}
return $self.learnings;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"learnings",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Teachable);

$core.addMethod(
$core.method({
selector: "whenSend:evaluate:",
protocol: "teaching",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol", "aBlock"],
source: "whenSend: aSymbol evaluate: aBlock\x0a\x0a\x09self learnings at: aSymbol put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "learnings"]
}, function ($methodClass){ return function (aSymbol,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._learnings())._at_put_(aSymbol,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whenSend:evaluate:",{aSymbol:aSymbol,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Teachable);

$core.addMethod(
$core.method({
selector: "whenSend:return:",
protocol: "teaching",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol", "anObject"],
source: "whenSend: aSymbol return: anObject\x0a\x0a\x09self learnings at: aSymbol put: (#return -> anObject)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "learnings", "->"]
}, function ($methodClass){ return function (aSymbol,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._learnings())._at_put_(aSymbol,"return".__minus_gt(anObject));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whenSend:return:",{aSymbol:aSymbol,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Teachable);


$core.addMethod(
$core.method({
selector: "example",
protocol: "examples",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x09| teachable |\x0a\x09teachable := self new.\x0a\x09teachable \x0a\x09\x09whenSend: #help return: 'ok';\x0a\x09\x09whenSend: #doit evaluate: [1 inspect];\x0a\x09\x09acceptSend: #noDebugger;\x0a\x09\x09whenSend: #negate: evaluate: [:num | num negated].\x0a\x09teachable help.\x0a\x09teachable doit.\x0a\x09teachable noDebugger.\x0a\x09teachable negate: 120",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "whenSend:return:", "whenSend:evaluate:", "inspect", "acceptSend:", "negated", "help", "doit", "noDebugger", "negate:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var teachable;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
teachable=$self._new();
$1=teachable;
$recv($1)._whenSend_return_("help","ok");
[$recv($1)._whenSend_evaluate_("doit",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1)._inspect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["whenSend:evaluate:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._acceptSend_("noDebugger");
$recv($1)._whenSend_evaluate_("negate:",(function(num){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(num)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({num:num},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(teachable)._help();
$recv(teachable)._doit();
$recv(teachable)._noDebugger();
$recv(teachable)._negate_((120));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{teachable:teachable})});
//>>excludeEnd("ctx");
}; }),
$globals.Teachable.a$cls);


$core.addClass("TestCase", $globals.Object, ["testSelector", "asyncTimeout", "context"], "SUnit");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TestCase.comment="I am an implementation of the command pattern to run a test.\x0a\x0a## API\x0a\x0aMy instances are created with the class method `#selector:`,\x0apassing the symbol that names the method to be executed when the test case runs.\x0a\x0aWhen you discover a new fixture, subclass `TestCase` and create a `#test...` method for the first test.\x0aAs that method develops and more `#test...` methods are added, you will find yourself refactoring temps\x0ainto instance variables for the objects in the fixture and overriding `#setUp` to initialize these variables.\x0aAs required, override `#tearDown` to nil references, release objects and deallocate.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "assert:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "assert: aBoolean\x0a\x09self assert: aBoolean description: 'Assertion failed'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:description:"]
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_description_(aBoolean,"Assertion failed");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assert:",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "assert:description:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean", "aString"],
source: "assert: aBoolean description: aString\x0a\x09aBoolean ifFalse: [ self signalFailure: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "signalFailure:"]
}, function ($methodClass){ return function (aBoolean,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert(aBoolean)){
$self._signalFailure_(aString);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assert:description:",{aBoolean:aBoolean,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "assert:equals:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["actual", "expected"],
source: "assert: actual equals: expected\x0a\x09^ self assert: (actual = expected) description: 'Expected: ', expected printString, ' but was: ', actual printString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:description:", "=", ",", "printString"]
}, function ($methodClass){ return function (actual,expected){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._assert_description_($recv(actual).__eq(expected),[$recv([$recv("Expected: ".__comma([$recv(expected)._printString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printString"]=1
//>>excludeEnd("ctx");
][0])).__comma(" but was: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma($recv(actual)._printString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assert:equals:",{actual:actual,expected:expected})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "async:",
protocol: "async",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "async: aBlock\x0a\x09| c |\x0a\x09self errorIfNotAsync: '#async'.\x0a\x09c := context.\x0a\x09^ [ self isAsync ifTrue: [ c execute: aBlock ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["errorIfNotAsync:", "ifTrue:", "isAsync", "execute:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var c;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._errorIfNotAsync_("#async");
c=$self.context;
return (function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($self._isAsync())){
return $recv(c)._execute_(aBlock);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"async:",{aBlock:aBlock,c:c})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "context:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRunningTestContext"],
source: "context: aRunningTestContext\x0a\x09context := aRunningTestContext",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aRunningTestContext){
var self=this,$self=this;
$self.context=aRunningTestContext;
return self;

}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "debugCase",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "debugCase\x0a\x09\x22Runs a test case in isolated context, debugging all errors.\x22\x0a\x0a\x09(DebugTestContext testCase: self) start",
referencedClasses: ["DebugTestContext"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["start", "testCase:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.DebugTestContext)._testCase_(self))._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"debugCase",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "deny:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "deny: aBoolean\x0a\x09self assert: aBoolean not",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "not"]
}, function ($methodClass){ return function (aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv(aBoolean)._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deny:",{aBoolean:aBoolean})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "errorIfNotAsync:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "errorIfNotAsync: aString\x0a\x09self isAsync ifFalse: [\x0a\x09\x09self error: aString, ' used without prior #timeout:' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "isAsync", "error:", ","]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($self._isAsync())){
$self._error_($recv(aString).__comma(" used without prior #timeout:"));
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorIfNotAsync:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "finished",
protocol: "async",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "finished\x0a\x09self errorIfNotAsync: '#finished'.\x0a\x09asyncTimeout := nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["errorIfNotAsync:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._errorIfNotAsync_("#finished");
$self.asyncTimeout=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"finished",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "isAsync",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAsync\x0a\x09^ asyncTimeout notNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["notNil"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.asyncTimeout)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAsync",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "performTest",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "performTest\x0a\x09asyncTimeout := nil.\x0a\x09self perform: self selector",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["perform:", "selector"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.asyncTimeout=nil;
$self._perform_($self._selector());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"performTest",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "runCase",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "runCase\x0a\x09\x22Runs a test case in isolated context, leaking all errors.\x22\x0a\x0a\x09(TestContext testCase: self) start",
referencedClasses: ["TestContext"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["start", "testCase:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.TestContext)._testCase_(self))._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"runCase",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "selector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ testSelector",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.testSelector;

}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "setTestSelector:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "setTestSelector: aSelector\x0a\x09testSelector := aSelector",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aSelector){
var self=this,$self=this;
$self.testSelector=aSelector;
return self;

}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "should:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "should: aBlock\x0a\x09self assert: aBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "value"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv(aBlock)._value());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"should:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "should:raise:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anExceptionClass"],
source: "should: aBlock raise: anExceptionClass\x0a\x09self assert: ([ aBlock value. false ]\x0a\x09\x09on: anExceptionClass\x0a\x09\x09do: [ :ex | true ])",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "on:do:", "value"]
}, function ($methodClass){ return function (aBlock,anExceptionClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value();
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_(anExceptionClass,(function(ex){
return true;

})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"should:raise:",{aBlock:aBlock,anExceptionClass:anExceptionClass})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "shouldnt:raise:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anExceptionClass"],
source: "shouldnt: aBlock raise: anExceptionClass\x0a\x09self assert: ([ aBlock value. true ]\x0a\x09\x09on: anExceptionClass\x0a\x09\x09do: [ :ex | false ])",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["assert:", "on:do:", "value"]
}, function ($methodClass){ return function (aBlock,anExceptionClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aBlock)._value();
return true;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_(anExceptionClass,(function(ex){
return false;

})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldnt:raise:",{aBlock:aBlock,anExceptionClass:anExceptionClass})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "signalFailure:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "signalFailure: aString\x0a\x09TestFailure new\x0a\x09\x09messageText: aString;\x0a\x09\x09signal",
referencedClasses: ["TestFailure"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["messageText:", "new", "signal"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.TestFailure)._new();
$recv($1)._messageText_(aString);
$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signalFailure:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.TestCase);

$core.addMethod(
$core.method({
selector: "timeout:",
protocol: "async",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "timeout: aNumber\x0a\x09\x22Set a grace time timeout in milliseconds to run the test asynchronously\x22\x0a\x09\x0a\x09asyncTimeout ifNotNil: [ asyncTimeout clearTimeout ].\x0a\x09\x0a\x09\x22to allow #async: message send without throwing an error\x22\x0a\x09asyncTimeout := 0.\x0a\x09\x0a\x09asyncTimeout := (self async: [\x0a\x09\x09self assert: false description: 'SUnit grace time exhausted' ])\x0a\x09\x09\x09valueWithTimeout: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "clearTimeout", "valueWithTimeout:", "async:", "assert:description:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.asyncTimeout;
if($1 == null || $1.a$nil){
$1;
} else {
$recv($self.asyncTimeout)._clearTimeout();
}
$self.asyncTimeout=(0);
$self.asyncTimeout=$recv($self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._assert_description_(false,"SUnit grace time exhausted");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
})))._valueWithTimeout_(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"timeout:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase);


$core.addMethod(
$core.method({
selector: "allTestSelectors",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allTestSelectors\x0a\x09| selectors |\x0a\x09selectors := self testSelectors.\x0a\x09self shouldInheritSelectors ifTrue: [\x0a\x09\x09selectors addAll: self superclass allTestSelectors ].\x0a\x09^ selectors asSet",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["testSelectors", "ifTrue:", "shouldInheritSelectors", "addAll:", "allTestSelectors", "superclass", "asSet"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var selectors;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
selectors=$self._testSelectors();
if($core.assert($self._shouldInheritSelectors())){
$recv(selectors)._addAll_($recv($self._superclass())._allTestSelectors());
}
return $recv(selectors)._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allTestSelectors",{selectors:selectors})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase.a$cls);

$core.addMethod(
$core.method({
selector: "buildSuite",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "buildSuite\x0a\x09^ self allTestSelectors collect: [ :each | self selector: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "allTestSelectors", "selector:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._allTestSelectors())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._selector_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildSuite",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase.a$cls);

$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Returns a tag or general category for this class.\x0a\x09Typically used to help tools do some reflection.\x0a\x09Helios, for example, uses this to decide what icon the class should display.\x22\x0a\x09\x0a\x09^ 'test'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "test";

}; }),
$globals.TestCase.a$cls);

$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09^ self name = TestCase name",
referencedClasses: ["TestCase"],
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
][0]).__eq($recv($globals.TestCase)._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase.a$cls);

$core.addMethod(
$core.method({
selector: "isTestClass",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTestClass\x0a\x09^ self isAbstract not",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["not", "isAbstract"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._isAbstract())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isTestClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase.a$cls);

$core.addMethod(
$core.method({
selector: "lookupHierarchyRoot",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lookupHierarchyRoot\x0a\x09^ TestCase",
referencedClasses: ["TestCase"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.TestCase;

}; }),
$globals.TestCase.a$cls);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "selector: aSelector\x0a\x09^ self new\x0a\x09\x09setTestSelector: aSelector;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["setTestSelector:", "new", "yourself"]
}, function ($methodClass){ return function (aSelector){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._setTestSelector_(aSelector);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector:",{aSelector:aSelector})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase.a$cls);

$core.addMethod(
$core.method({
selector: "shouldInheritSelectors",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldInheritSelectors\x0a\x09^ self ~= self lookupHierarchyRoot",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["~=", "lookupHierarchyRoot"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.__tild_eq($self._lookupHierarchyRoot());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldInheritSelectors",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase.a$cls);

$core.addMethod(
$core.method({
selector: "testSelectors",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSelectors\x0a\x09^ self methodDictionary keys select: [ :each | each match: '^test' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "keys", "methodDictionary", "match:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._methodDictionary())._keys())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._match_("^test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSelectors",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestCase.a$cls);


$core.addClass("TestContext", $globals.Object, ["testCase"], "SUnit");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TestContext.comment="I govern running a particular test case.\x0a\x0aMy main added value is `#execute:` method which runs a block as a part of test case (restores context, nilling it afterwards, cleaning/calling `#tearDown` as appropriate for sync/async scenario).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "execute:",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "execute: aBlock\x0a\x09| failed |\x0a\x09\x0a\x09testCase context: self.\x0a\x09[\x0a\x09\x09failed := true.\x0a\x09\x09aBlock value.\x0a\x09\x09failed := false\x0a\x09]\x0a\x09\x09ensure: [\x0a\x09\x09\x09testCase context: nil.\x0a\x09\x09\x09\x0a\x09\x09\x09(failed and: [ testCase isAsync ]) ifTrue: [\x0a\x09\x09\x09\x09testCase finished ].\x0a\x09\x09\x09testCase isAsync ifFalse: [\x0a\x09\x09\x09\x09testCase tearDown ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["context:", "ensure:", "value", "ifTrue:", "and:", "isAsync", "finished", "ifFalse:", "tearDown"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var failed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
[$recv($self.testCase)._context_(self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["context:"]=1
//>>excludeEnd("ctx");
][0];
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
failed=true;
$recv(aBlock)._value();
failed=false;
return failed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($self.testCase)._context_(nil);
if($core.assert(failed)){
$1=[$recv($self.testCase)._isAsync()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["isAsync"]=1
//>>excludeEnd("ctx");
][0];
} else {
$1=false;
}
if($core.assert($1)){
$recv($self.testCase)._finished();
}
if(!$core.assert($recv($self.testCase)._isAsync())){
return $recv($self.testCase)._tearDown();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute:",{aBlock:aBlock,failed:failed})});
//>>excludeEnd("ctx");
}; }),
$globals.TestContext);

$core.addMethod(
$core.method({
selector: "start",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self execute: [\x0a\x09\x09testCase setUp.\x0a\x09\x09testCase performTest ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["execute:", "setUp", "performTest"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._execute_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($self.testCase)._setUp();
return $recv($self.testCase)._performTest();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestContext);

$core.addMethod(
$core.method({
selector: "testCase:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestCase"],
source: "testCase: aTestCase\x0a\x09testCase := aTestCase",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aTestCase){
var self=this,$self=this;
$self.testCase=aTestCase;
return self;

}; }),
$globals.TestContext);


$core.addMethod(
$core.method({
selector: "testCase:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestCase"],
source: "testCase: aTestCase\x0a\x09^ self new\x0a\x09\x09testCase: aTestCase;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["testCase:", "new", "yourself"]
}, function ($methodClass){ return function (aTestCase){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._testCase_(aTestCase);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCase:",{aTestCase:aTestCase})});
//>>excludeEnd("ctx");
}; }),
$globals.TestContext.a$cls);


$core.addClass("DebugTestContext", $globals.TestContext, ["finished", "result"], "SUnit");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DebugTestContext.comment="I add error debugging to `TestContext`.\x0a\x0aErrors are caught and explicitly passed to `ErrorHandler`.\x0aI am used in `TestCase >> debugCase`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "execute:",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "execute: aBlock\x0a\x09self withErrorDebugging: [ super execute: aBlock ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withErrorDebugging:", "execute:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._withErrorDebugging_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._execute_.call($self,aBlock))
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
}, function($ctx1) {$ctx1.fill(self,"execute:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.DebugTestContext);

$core.addMethod(
$core.method({
selector: "withErrorDebugging:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withErrorDebugging: aBlock\x0a\x09aBlock\x0a\x09\x09on: Error\x0a\x09\x09do: [ :ex | ErrorHandler handleError: ex ]",
referencedClasses: ["Error", "ErrorHandler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:", "handleError:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBlock)._on_do_($globals.Error,(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.ErrorHandler)._handleError_(ex);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withErrorDebugging:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.DebugTestContext);


$core.addMethod(
$core.method({
selector: "testCase:result:finished:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestCase", "aTestResult", "aBlock"],
source: "testCase: aTestCase result: aTestResult finished: aBlock\x0a\x09^ (super testCase: aTestCase)\x0a\x09\x09result: aTestResult;\x0a\x09\x09finished: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["result:", "testCase:", "finished:", "yourself"]
}, function ($methodClass){ return function (aTestCase,aTestResult,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._testCase_.call($self,aTestCase))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$recv($1)._result_(aTestResult);
$recv($1)._finished_(aBlock);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCase:result:finished:",{aTestCase:aTestCase,aTestResult:aTestResult,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.DebugTestContext.a$cls);


$core.addClass("ReportingTestContext", $globals.TestContext, ["finished", "result"], "SUnit");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ReportingTestContext.comment="I add `TestResult` reporting to `TestContext`.\x0a\x0aErrors are caught and save into a `TestResult`,\x0aWhen test case is finished (which can be later for async tests), a callback block is executed; this is used by a `TestSuiteRunner`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "execute:",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "execute: aBlock\x0a\x09[\x0a\x09\x09self withErrorReporting: [ super execute: aBlock ]\x0a\x09]\x0a\x09\x09ensure: [\x0a\x09\x09\x09testCase isAsync ifFalse: [\x0a\x09\x09\x09\x09result increaseRuns. finished value ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ensure:", "withErrorReporting:", "execute:", "ifFalse:", "isAsync", "increaseRuns", "value"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._withErrorReporting_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._execute_.call($self,aBlock))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.supercall = false
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(!$core.assert($recv($self.testCase)._isAsync())){
$recv($self.result)._increaseRuns();
return $recv($self.finished)._value();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"execute:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.ReportingTestContext);

$core.addMethod(
$core.method({
selector: "finished:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "finished: aBlock\x0a\x09finished := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
$self.finished=aBlock;
return self;

}; }),
$globals.ReportingTestContext);

$core.addMethod(
$core.method({
selector: "result:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestResult"],
source: "result: aTestResult\x0a\x09result := aTestResult",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aTestResult){
var self=this,$self=this;
$self.result=aTestResult;
return self;

}; }),
$globals.ReportingTestContext);

$core.addMethod(
$core.method({
selector: "withErrorReporting:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withErrorReporting: aBlock\x0a\x09[ aBlock\x0a\x09\x09on: TestFailure\x0a\x09\x09do: [ :ex | result addFailure: testCase ]\x0a\x09]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :ex | result addError: testCase ]",
referencedClasses: ["TestFailure", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:", "addFailure:", "addError:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._on_do_($globals.TestFailure,(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self.result)._addFailure_($self.testCase);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.result)._addError_($self.testCase);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,3)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:do:"]=1
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withErrorReporting:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.ReportingTestContext);


$core.addMethod(
$core.method({
selector: "testCase:result:finished:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestCase", "aTestResult", "aBlock"],
source: "testCase: aTestCase result: aTestResult finished: aBlock\x0a\x09^ (super testCase: aTestCase)\x0a\x09\x09result: aTestResult;\x0a\x09\x09finished: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["result:", "testCase:", "finished:", "yourself"]
}, function ($methodClass){ return function (aTestCase,aTestResult,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._testCase_.call($self,aTestCase))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
$recv($1)._result_(aTestResult);
$recv($1)._finished_(aBlock);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCase:result:finished:",{aTestCase:aTestCase,aTestResult:aTestResult,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.ReportingTestContext.a$cls);


$core.addClass("TestFailure", $globals.Error, [], "SUnit");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TestFailure.comment="I am raised when the boolean parameter of an #`assert:` or `#deny:` call is the opposite of what the assertion claims.\x0a\x0aThe test framework distinguishes between failures and errors.\x0aA failure is an event whose possibiity is explicitly anticipated and checked for in an assertion,\x0awhereas an error is an unanticipated problem like a division by 0 or an index out of bounds.";
//>>excludeEnd("ide");


$core.addClass("TestResult", $globals.Object, ["timestamp", "runs", "errors", "failures", "total"], "SUnit");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TestResult.comment="I implement the collecting parameter pattern for running a bunch of tests.\x0a\x0aMy instances hold tests that have run, sorted into the result categories of passed, failures and errors.\x0a\x0a`TestResult` is an interesting object to subclass or substitute. `#runCase:` is the external protocol you need to reproduce";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addError:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "addError: anError\x0a\x09self errors add: anError",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "errors"]
}, function ($methodClass){ return function (anError){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._errors())._add_(anError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addError:",{anError:anError})});
//>>excludeEnd("ctx");
}; }),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "addFailure:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFailure"],
source: "addFailure: aFailure\x0a\x09self failures add: aFailure",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "failures"]
}, function ($methodClass){ return function (aFailure){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._failures())._add_(aFailure);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addFailure:",{aFailure:aFailure})});
//>>excludeEnd("ctx");
}; }),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "errors",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "errors\x0a\x09^ errors",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.errors;

}; }),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "failures",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "failures\x0a\x09^ failures",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.failures;

}; }),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "increaseRuns",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "increaseRuns\x0a\x09runs := runs + 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.runs=$recv($self.runs).__plus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"increaseRuns",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09timestamp := Date now.\x0a\x09runs := 0.\x0a\x09errors := Array new.\x0a\x09failures := Array new.\x0a\x09total := 0",
referencedClasses: ["Date", "Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "now", "new"]
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
$self.timestamp=$recv($globals.Date)._now();
$self.runs=(0);
$self.errors=[$recv($globals.Array)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$self.failures=$recv($globals.Array)._new();
$self.total=(0);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "nextRunDo:",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextRunDo: aBlock\x0a\x09\x22Runs aBlock with index of next run or does nothing if no more runs\x22\x0a\x09^ self runs == self total\x0a\x09\x09ifFalse: [ aBlock value: self runs + 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "==", "runs", "total", "value:", "+"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv([$self._runs()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["runs"]=1
//>>excludeEnd("ctx");
][0]).__eq_eq($self._total()))){
return $recv(aBlock)._value_($recv($self._runs()).__plus((1)));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextRunDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "runCase:",
protocol: "running",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTestCase"],
source: "runCase: aTestCase\x0a\x09[ [ self increaseRuns.\x0a\x09\x09aTestCase runCase ]\x0a\x09on: TestFailure do: [ :ex | self addFailure: aTestCase ]]\x0a\x09on: Error do: [ :ex | self addError: aTestCase ]",
referencedClasses: ["TestFailure", "Error"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:", "increaseRuns", "runCase", "addFailure:", "addError:"]
}, function ($methodClass){ return function (aTestCase){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$self._increaseRuns();
return $recv(aTestCase)._runCase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._on_do_($globals.TestFailure,(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._addFailure_(aTestCase);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._addError_(aTestCase);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,4)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["on:do:"]=1
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"runCase:",{aTestCase:aTestCase})});
//>>excludeEnd("ctx");
}; }),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "runs",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "runs\x0a\x09^ runs",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.runs;

}; }),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "status",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "status\x0a\x09^ self errors ifNotEmpty: [ 'error' ] ifEmpty: [\x0a\x09\x09self failures ifNotEmpty: [ 'failure' ] ifEmpty: [\x0a\x09\x09\x09'success' ]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotEmpty:ifEmpty:", "errors", "failures"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($self._errors())._ifNotEmpty_ifEmpty_((function(){
return "error";

}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._failures())._ifNotEmpty_ifEmpty_((function(){
return "failure";

}),(function(){
return "success";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["ifNotEmpty:ifEmpty:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"status",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "timestamp",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "timestamp\x0a\x09^ timestamp",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.timestamp;

}; }),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "total",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "total\x0a\x09^ total",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.total;

}; }),
$globals.TestResult);

$core.addMethod(
$core.method({
selector: "total:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "total: aNumber\x0a\x09total := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
$self.total=aNumber;
return self;

}; }),
$globals.TestResult);



$core.addClass("TestSuiteRunner", $globals.Object, ["suite", "result", "announcer", "runNextTest"], "SUnit");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TestSuiteRunner.comment="I am responsible for running a collection (`suite`) of tests.\x0a\x0a## API\x0a\x0aInstances should be created using the class-side `#on:` method, taking a collection of tests to run as parameter.\x0aTo run the test suite, use `#run`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announcer",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ announcer",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.announcer;

}; }),
$globals.TestSuiteRunner);

$core.addMethod(
$core.method({
selector: "contextOf:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "contextOf: anInteger\x0a\x09^ ReportingTestContext testCase: (suite at: anInteger) result: result finished: [ self resume ]",
referencedClasses: ["ReportingTestContext"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["testCase:result:finished:", "at:", "resume"]
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.ReportingTestContext)._testCase_result_finished_($recv($self.suite)._at_(anInteger),$self.result,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._resume();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contextOf:",{anInteger:anInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.TestSuiteRunner);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09announcer := Announcer new.\x0a\x09result := TestResult new.\x0a\x09runNextTest := [ | runs | runs := result runs. runs < result total ifTrue: [ (self contextOf: runs + 1) start ] ].",
referencedClasses: ["Announcer", "TestResult"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "new", "runs", "ifTrue:", "<", "total", "start", "contextOf:", "+"]
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
$self.announcer=[$recv($globals.Announcer)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$self.result=$recv($globals.TestResult)._new();
$self.runNextTest=(function(){
var runs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
runs=$recv($self.result)._runs();
if($core.assert($recv(runs).__lt($recv($self.result)._total()))){
return $recv($self._contextOf_($recv(runs).__plus((1))))._start();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({runs:runs},$ctx1,1)});
//>>excludeEnd("ctx");
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestSuiteRunner);

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
$globals.TestSuiteRunner);

$core.addMethod(
$core.method({
selector: "resume",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resume\x0a\x09runNextTest fork.\x0a\x09announcer announce: (ResultAnnouncement new result: result)",
referencedClasses: ["ResultAnnouncement"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fork", "announce:", "result:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.runNextTest)._fork();
$recv($self.announcer)._announce_($recv($recv($globals.ResultAnnouncement)._new())._result_($self.result));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resume",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestSuiteRunner);

$core.addMethod(
$core.method({
selector: "run",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "run\x0a\x09result total: suite size.\x0a\x09self resume",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["total:", "size", "resume"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.result)._total_($recv($self.suite)._size());
$self._resume();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"run",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestSuiteRunner);

$core.addMethod(
$core.method({
selector: "suite:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "suite: aCollection\x0a\x09suite := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
$self.suite=aCollection;
return self;

}; }),
$globals.TestSuiteRunner);


$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shouldNotImplement"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TestSuiteRunner.a$cls);

$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "on: aCollection\x0a\x09^ super new suite: aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["suite:", "new"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv([(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._new.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0])._suite_(aCollection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.TestSuiteRunner.a$cls);

$core.addMethod(
$core.method({
selector: "isTestPackage",
protocol: "*SUnit",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTestPackage\x0a\x09^ self classes anySatisfy: [ :each | each isTestClass ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["anySatisfy:", "classes", "isTestClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._classes())._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isTestClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isTestPackage",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Package);

$core.addMethod(
$core.method({
selector: "isTestClass",
protocol: "*SUnit",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTestClass\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return false;

}; }),
$globals.TBehaviorDefaults);

});
