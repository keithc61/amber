define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("NodeTestRunner");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber_devkit"};

$core.addClass("NodeTestRunner", $globals.Object, [], "NodeTestRunner");

$core.addMethod(
$core.method({
selector: "main",
protocol: "not yet classified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a\x09self runTestSuite",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["runTestSuite"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._runTestSuite();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeTestRunner.a$cls);

$core.addMethod(
$core.method({
selector: "runTestSuite",
protocol: "not yet classified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "runTestSuite\x0a\x09| suite worker |\x0a\x0a\x09suite := OrderedCollection new.\x0a    (TestCase allSubclasses select: [ :each | each isAbstract not ])\x0a\x09do: [ :each | suite addAll: each buildSuite ].\x0a\x0a\x09worker := TestSuiteRunner on: suite.\x0a\x09worker announcer on: ResultAnnouncement do:\x0a\x09[ :ann | | result |\x0a    \x09result := ann result.\x0a        result runs = result total ifTrue: [\x0a\x09        console log: result runs asString, ' tests run, ', result failures size asString, ' failures, ', result errors size asString, ' errors.'.\x0a\x0a            result failures isEmpty ifFalse: [\x0a                result failures first runCase.\x0a                \x22the line above should throw, normally, but just in case I leave the line below\x22\x0a                self throw: result failures first class name, ' >> ', result failures first selector, ' is failing!' ].\x0a            result errors isEmpty ifFalse: [\x0a                result errors first runCase.\x0a                \x22the line above should throw, normally, but just in case I leave the line below\x22\x0a                self throw: result errors first class name, ' >> ', result errors first selector, ' has errors!' ].\x0a    ]].\x0a    worker run",
referencedClasses: ["OrderedCollection", "TestCase", "TestSuiteRunner", "ResultAnnouncement"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "select:", "allSubclasses", "not", "isAbstract", "addAll:", "buildSuite", "on:", "on:do:", "announcer", "result", "ifTrue:", "=", "runs", "total", "log:", ",", "asString", "size", "failures", "errors", "ifFalse:", "isEmpty", "runCase", "first", "throw:", "name", "class", "selector", "run"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var suite,worker;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
suite=$recv($globals.OrderedCollection)._new();
$recv($recv($recv($globals.TestCase)._allSubclasses())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._isAbstract())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(suite)._addAll_($recv(each)._buildSuite());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
worker=$recv($globals.TestSuiteRunner)._on_(suite);
$recv($recv(worker)._announcer())._on_do_($globals.ResultAnnouncement,(function(ann){
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=$recv(ann)._result();
if($core.assert($recv([$recv(result)._runs()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["runs"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(result)._total()))){
$recv(console)._log_([$recv([$recv([$recv([$recv([$recv([$recv($recv(result)._runs())._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0]).__comma(" tests run, ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=5
//>>excludeEnd("ctx");
][0]).__comma([$recv([$recv([$recv(result)._failures()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["failures"]=1
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0])._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asString"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=4
//>>excludeEnd("ctx");
][0]).__comma(" failures, ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=3
//>>excludeEnd("ctx");
][0]).__comma($recv($recv([$recv(result)._errors()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["errors"]=1
//>>excludeEnd("ctx");
][0])._size())._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(" errors.")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]);
if(!$core.assert([$recv([$recv(result)._failures()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["failures"]=2
//>>excludeEnd("ctx");
][0])._isEmpty()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["isEmpty"]=1
//>>excludeEnd("ctx");
][0])){
[$recv([$recv([$recv(result)._failures()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["failures"]=3
//>>excludeEnd("ctx");
][0])._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["first"]=1
//>>excludeEnd("ctx");
][0])._runCase()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["runCase"]=1
//>>excludeEnd("ctx");
][0];
[$self._throw_([$recv([$recv([$recv([$recv([$recv([$recv([$recv(result)._failures()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["failures"]=4
//>>excludeEnd("ctx");
][0])._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["first"]=2
//>>excludeEnd("ctx");
][0])._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0])._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0]).__comma(" >> ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=8
//>>excludeEnd("ctx");
][0]).__comma([$recv([$recv($recv(result)._failures())._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["first"]=3
//>>excludeEnd("ctx");
][0])._selector()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["selector"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=7
//>>excludeEnd("ctx");
][0]).__comma(" is failing!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["throw:"]=1
//>>excludeEnd("ctx");
][0];
}
if(!$core.assert($recv([$recv(result)._errors()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["errors"]=2
//>>excludeEnd("ctx");
][0])._isEmpty())){
$recv([$recv([$recv(result)._errors()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["errors"]=3
//>>excludeEnd("ctx");
][0])._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["first"]=4
//>>excludeEnd("ctx");
][0])._runCase();
return $self._throw_([$recv([$recv($recv($recv($recv([$recv([$recv(result)._errors()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["errors"]=4
//>>excludeEnd("ctx");
][0])._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["first"]=5
//>>excludeEnd("ctx");
][0])._class())._name()).__comma(" >> ")).__comma($recv($recv($recv(result)._errors())._first())._selector())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=10
//>>excludeEnd("ctx");
][0]).__comma(" has errors!")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx[","]=9
//>>excludeEnd("ctx");
][0]);
}
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann,result:result},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(worker)._run();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"runTestSuite",{suite:suite,worker:worker})});
//>>excludeEnd("ctx");
}; }),
$globals.NodeTestRunner.a$cls);

});
