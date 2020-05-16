define(["amber/boot", "require", "amber/core/Kernel-Collections", "amber/core/Kernel-Infrastructure", "amber/core/Kernel-Methods", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Platform-Services");
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("ConsoleErrorHandler", $globals.Object, [], "Platform-Services");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ConsoleErrorHandler.comment="I am manage Smalltalk errors, displaying the stack in the console.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "handleError:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleError: anError\x0a\x09anError context ifNotNil: [ self logErrorContext: anError context ].\x0a\x09self logError: anError",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "context", "logErrorContext:", "logError:"]
}, function ($methodClass){ return function (anError){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=[$recv(anError)._context()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["context"]=1
//>>excludeEnd("ctx");
][0];
if($1 == null || $1.a$nil){
$1;
} else {
$self._logErrorContext_($recv(anError)._context());
}
$self._logError_(anError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError})});
//>>excludeEnd("ctx");
}; }),
$globals.ConsoleErrorHandler);

$core.addMethod(
$core.method({
selector: "log:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "log: aString\x0a\x09console log: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["log:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(console)._log_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"log:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ConsoleErrorHandler);

$core.addMethod(
$core.method({
selector: "logContext:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "logContext: aContext\x0a\x09aContext home ifNotNil: [\x0a\x09\x09self logContext: aContext home ].\x0a\x09self log: aContext asString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "home", "logContext:", "log:", "asString"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=[$recv(aContext)._home()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["home"]=1
//>>excludeEnd("ctx");
][0];
if($1 == null || $1.a$nil){
$1;
} else {
$self._logContext_($recv(aContext)._home());
}
$self._log_($recv(aContext)._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logContext:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.ConsoleErrorHandler);

$core.addMethod(
$core.method({
selector: "logError:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "logError: anError\x0a\x09self log: anError messageText",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["log:", "messageText"]
}, function ($methodClass){ return function (anError){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._log_($recv(anError)._messageText());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logError:",{anError:anError})});
//>>excludeEnd("ctx");
}; }),
$globals.ConsoleErrorHandler);

$core.addMethod(
$core.method({
selector: "logErrorContext:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "logErrorContext: aContext\x0a\x09aContext ifNotNil: [\x0a\x09\x09aContext home ifNotNil: [\x0a\x09\x09\x09self logContext: aContext home ]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "home", "logContext:"]
}, function ($methodClass){ return function (aContext){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
if(aContext == null || aContext.a$nil){
aContext;
} else {
$1=[$recv(aContext)._home()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["home"]=1
//>>excludeEnd("ctx");
][0];
if($1 == null || $1.a$nil){
$1;
} else {
$self._logContext_($recv(aContext)._home());
}
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logErrorContext:",{aContext:aContext})});
//>>excludeEnd("ctx");
}; }),
$globals.ConsoleErrorHandler);


$core.setSlots($globals.ConsoleErrorHandler.a$cls, ["current"]);
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09ErrorHandler registerIfNone: self new",
referencedClasses: ["ErrorHandler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["registerIfNone:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.ErrorHandler)._registerIfNone_($self._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ConsoleErrorHandler.a$cls);


$core.addClass("ConsoleTranscript", $globals.Object, ["textarea"], "Platform-Services");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ConsoleTranscript.comment="I am a specific transcript emitting to the JavaScript console.\x0a\x0aIf no other transcript is registered, I am the default.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "clear",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09\x22no op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.ConsoleTranscript);

$core.addMethod(
$core.method({
selector: "cr",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09\x22no op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.ConsoleTranscript);

$core.addMethod(
$core.method({
selector: "open",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.ConsoleTranscript);

$core.addMethod(
$core.method({
selector: "show:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "show: anObject\x0a\x22Smalltalk objects should have no trouble displaying themselves on the Transcript; Javascript objects don't know how, so must be wrapped in a JSObectProxy.\x22\x0a<inlineJS: 'console.log(String($recv(anObject)._asString()))'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["console.log(String($recv(anObject)._asString()))"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
console.log(String($recv(anObject)._asString()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ConsoleTranscript);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09Transcript registerIfNone: self new",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["registerIfNone:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Transcript)._registerIfNone_($self._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ConsoleTranscript.a$cls);


$core.addClass("Environment", $globals.Object, [], "Platform-Services");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Environment.comment="I provide an unified entry point to manipulate Amber packages, classes and methods.\x0a\x0aTypical use cases include IDEs, remote access and restricting browsing.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addInstVarNamed:to:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "addInstVarNamed: aString to: aClass\x0a\x09| newInstVars |\x0a\x09newInstVars := aClass instanceVariableNames copyWith: aString.\x0a\x0a\x09aClass isMetaclass\x0a\x09\x09ifTrue: [ self classBuilder\x0a\x09\x09\x09class: aClass slots: newInstVars ]\x0a\x09\x09ifFalse: [ self classBuilder\x0a\x09\x09\x09addSubclassOf: aClass superclass \x0a\x09\x09\x09named: aClass name \x0a\x09\x09\x09slots: newInstVars\x0a\x09\x09\x09package: aClass package name ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyWith:", "instanceVariableNames", "ifTrue:ifFalse:", "isMetaclass", "class:slots:", "classBuilder", "addSubclassOf:named:slots:package:", "superclass", "name", "package"]
}, function ($methodClass){ return function (aString,aClass){
var self=this,$self=this;
var newInstVars;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newInstVars=$recv($recv(aClass)._instanceVariableNames())._copyWith_(aString);
if($core.assert($recv(aClass)._isMetaclass())){
$recv([$self._classBuilder()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["classBuilder"]=1
//>>excludeEnd("ctx");
][0])._class_slots_(aClass,newInstVars);
} else {
$recv($self._classBuilder())._addSubclassOf_named_slots_package_($recv(aClass)._superclass(),[$recv(aClass)._name()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["name"]=1
//>>excludeEnd("ctx");
][0],newInstVars,$recv($recv(aClass)._package())._name());
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:to:",{aString:aString,aClass:aClass,newInstVars:newInstVars})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "allSelectors",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allSelectors\x0a\x09^ Smalltalk core allSelectors",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["allSelectors", "core"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Smalltalk)._core())._allSelectors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSelectors",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "availableClassNames",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "availableClassNames\x0a\x09^ Smalltalk classes \x0a\x09\x09collect: [ :each | each name ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "classes", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Smalltalk)._classes())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "availablePackageNames",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "availablePackageNames\x0a\x09^ Smalltalk packages \x0a\x09\x09collect: [ :each | each name ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "packages", "name"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($globals.Smalltalk)._packages())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availablePackageNames",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "availableProtocolsFor:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "availableProtocolsFor: aClass\x0a\x09| protocols |\x0a\x09\x0a\x09protocols := aClass protocols.\x0a\x09aClass superclass ifNotNil: [ protocols addAll: (self availableProtocolsFor: aClass superclass) ].\x0a\x09^ protocols asSet asArray sort",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["protocols", "ifNotNil:", "superclass", "addAll:", "availableProtocolsFor:", "sort", "asArray", "asSet"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
var protocols;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
protocols=$recv(aClass)._protocols();
$1=[$recv(aClass)._superclass()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["superclass"]=1
//>>excludeEnd("ctx");
][0];
if($1 == null || $1.a$nil){
$1;
} else {
$recv(protocols)._addAll_($self._availableProtocolsFor_($recv(aClass)._superclass()));
}
return $recv($recv($recv(protocols)._asSet())._asArray())._sort();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass,protocols:protocols})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "classBuilder",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classBuilder\x0a\x09^ ClassBuilder new",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.ClassBuilder)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "classNamed:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "classNamed: aString\x0a\x09^ (Smalltalk globals at: aString asSymbol)\x0a\x09\x09ifNil: [ self error: 'Invalid class name' ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "at:", "globals", "asSymbol", "error:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($globals.Smalltalk)._globals())._at_($recv(aString)._asSymbol());
if($1 == null || $1.a$nil){
return $self._error_("Invalid class name");
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classNamed:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "classes",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classes\x0a\x09^ Smalltalk classes",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["classes"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._classes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classes",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "commitPackage:onSuccess:onError:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage", "aBlock", "anotherBlock"],
source: "commitPackage: aPackage onSuccess: aBlock onError: anotherBlock\x0a\x09aPackage transport\x0a\x09\x09commitOnSuccess: aBlock\x0a\x09\x09onError: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["commitOnSuccess:onError:", "transport"]
}, function ($methodClass){ return function (aPackage,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aPackage)._transport())._commitOnSuccess_onError_(aBlock,anotherBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"commitPackage:onSuccess:onError:",{aPackage:aPackage,aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "compileClassComment:for:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "compileClassComment: aString for: aClass\x0a\x09aClass comment: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["comment:"]
}, function ($methodClass){ return function (aString,aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aClass)._comment_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileClassComment:for:",{aString:aString,aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "compileClassDefinition:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compileClassDefinition: aString\x0a\x09[ self evaluate: aString for: DoIt new ]\x0a\x09\x09on: Error\x0a\x09\x09do: [ :error | Terminal alert: error messageText ]",
referencedClasses: ["DoIt", "Error", "Terminal"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:", "evaluate:for:", "new", "alert:", "messageText"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._evaluate_for_(aString,$recv($globals.DoIt)._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($globals.Error,(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Terminal)._alert_($recv(error)._messageText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "compileMethod:for:protocol:",
protocol: "compiling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["sourceCode", "class", "protocol"],
source: "compileMethod: sourceCode for: class protocol: protocol\x0a\x09^ class\x0a\x09\x09compile: sourceCode\x0a\x09\x09protocol: protocol",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["compile:protocol:"]
}, function ($methodClass){ return function (sourceCode,class_,protocol){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(class_)._compile_protocol_(sourceCode,protocol);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileMethod:for:protocol:",{sourceCode:sourceCode,class_:class_,protocol:protocol})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "copyClass:to:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aClassName"],
source: "copyClass: aClass to: aClassName\x0a\x09(Smalltalk globals at: aClassName)\x0a\x09\x09ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].\x0a\x09\x09\x0a\x09ClassBuilder new copyClass: aClass named: aClassName",
referencedClasses: ["Smalltalk", "ClassBuilder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "at:", "globals", "error:", ",", "copyClass:named:", "new"]
}, function ($methodClass){ return function (aClass,aClassName){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($globals.Smalltalk)._globals())._at_(aClassName);
if($1 == null || $1.a$nil){
$1;
} else {
$self._error_([$recv("A class named ".__comma(aClassName)).__comma(" already exists")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]);
}
$recv($recv($globals.ClassBuilder)._new())._copyClass_named_(aClass,aClassName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyClass:to:",{aClass:aClass,aClassName:aClassName})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "doItReceiver",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doItReceiver\x0a\x09^ DoIt new",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.DoIt)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doItReceiver",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "evaluate:for:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluate: aString for: anObject\x0a\x09^ Evaluator evaluate: aString for: anObject",
referencedClasses: ["Evaluator"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["evaluate:for:"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Evaluator)._evaluate_for_(aString,anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:for:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "evaluate:on:do:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anErrorClass", "exceptionBlock"],
source: "evaluate: aBlock on: anErrorClass do: exceptionBlock\x0a\x09\x22Evaluate a block and catch exceptions happening on the environment stack\x22\x0a\x09\x0a\x09^ aBlock on: (self classNamed: anErrorClass name) do: exceptionBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:", "classNamed:", "name"]
}, function ($methodClass){ return function (aBlock,anErrorClass,exceptionBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aBlock)._on_do_($self._classNamed_($recv(anErrorClass)._name()),exceptionBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:on:do:",{aBlock:aBlock,anErrorClass:anErrorClass,exceptionBlock:exceptionBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "inspect:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09Inspector inspect: anObject",
referencedClasses: ["Inspector"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inspect:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Inspector)._inspect_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "moveClass:toPackage:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aPackageName"],
source: "moveClass: aClass toPackage: aPackageName\x0a\x09| package |\x0a\x09\x0a\x09package := Package named: aPackageName.\x0a\x09package ifNil: [ self error: 'Invalid package name' ].\x0a\x09package == aClass package ifTrue: [ ^ self ].\x0a\x09\x0a\x09aClass package: package.\x0a\x09aClass recompile",
referencedClasses: ["Package"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["named:", "ifNil:", "error:", "ifTrue:", "==", "package", "package:", "recompile"]
}, function ($methodClass){ return function (aClass,aPackageName){
var self=this,$self=this;
var package_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
package_=$recv($globals.Package)._named_(aPackageName);
$1=package_;
if($1 == null || $1.a$nil){
$self._error_("Invalid package name");
} else {
$1;
}
if($core.assert($recv(package_).__eq_eq($recv(aClass)._package()))){
return self;
}
$recv(aClass)._package_(package_);
$recv(aClass)._recompile();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveClass:toPackage:",{aClass:aClass,aPackageName:aPackageName,package_:package_})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "moveMethod:toClass:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aClassName"],
source: "moveMethod: aMethod toClass: aClassName\x0a\x09| destinationClass |\x0a\x09\x0a\x09destinationClass := self classNamed: aClassName.\x0a\x09destinationClass == aMethod origin ifTrue: [ ^ self ].\x0a\x09\x0a\x09aMethod origin isMetaclass ifTrue: [ \x0a\x09\x09destinationClass := destinationClass theMetaClass ].\x0a\x09\x0a\x09destinationClass \x0a\x09\x09compile: aMethod source\x0a\x09\x09protocol: aMethod protocol.\x0a\x09aMethod origin \x0a\x09\x09removeCompiledMethod: aMethod",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["classNamed:", "ifTrue:", "==", "origin", "isMetaclass", "theMetaClass", "compile:protocol:", "source", "protocol", "removeCompiledMethod:"]
}, function ($methodClass){ return function (aMethod,aClassName){
var self=this,$self=this;
var destinationClass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
destinationClass=$self._classNamed_(aClassName);
if($core.assert($recv(destinationClass).__eq_eq([$recv(aMethod)._origin()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["origin"]=1
//>>excludeEnd("ctx");
][0]))){
return self;
}
if($core.assert($recv([$recv(aMethod)._origin()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["origin"]=2
//>>excludeEnd("ctx");
][0])._isMetaclass())){
destinationClass=$recv(destinationClass)._theMetaClass();
destinationClass;
}
$recv(destinationClass)._compile_protocol_($recv(aMethod)._source(),$recv(aMethod)._protocol());
$recv($recv(aMethod)._origin())._removeCompiledMethod_(aMethod);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName,destinationClass:destinationClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "moveMethod:toProtocol:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod", "aProtocol"],
source: "moveMethod: aMethod toProtocol: aProtocol\x0a\x09aMethod protocol: aProtocol.\x0a\x0a\x09aMethod origin\x0a\x09\x09compile: aMethod source\x0a\x09\x09protocol: aMethod protocol",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["protocol:", "compile:protocol:", "origin", "source", "protocol"]
}, function ($methodClass){ return function (aMethod,aProtocol){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aMethod)._protocol_(aProtocol);
$recv($recv(aMethod)._origin())._compile_protocol_($recv(aMethod)._source(),$recv(aMethod)._protocol());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveMethod:toProtocol:",{aMethod:aMethod,aProtocol:aProtocol})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "packages",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packages\x0a\x09^ Smalltalk packages",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["packages"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Smalltalk)._packages();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"packages",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "registerErrorHandler:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anErrorHandler"],
source: "registerErrorHandler: anErrorHandler\x0a\x09ErrorHandler register: anErrorHandler",
referencedClasses: ["ErrorHandler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["register:"]
}, function ($methodClass){ return function (anErrorHandler){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.ErrorHandler)._register_(anErrorHandler);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerErrorHandler:",{anErrorHandler:anErrorHandler})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "registerFinder:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFinder"],
source: "registerFinder: aFinder\x0a\x09Finder register: aFinder",
referencedClasses: ["Finder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["register:"]
}, function ($methodClass){ return function (aFinder){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Finder)._register_(aFinder);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerFinder:",{aFinder:aFinder})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "registerInspector:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "registerInspector: anInspector\x0a\x09Inspector register: anInspector",
referencedClasses: ["Inspector"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["register:"]
}, function ($methodClass){ return function (anInspector){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Inspector)._register_(anInspector);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerInspector:",{anInspector:anInspector})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "registerProgressHandler:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProgressHandler"],
source: "registerProgressHandler: aProgressHandler\x0a\x09ProgressHandler register: aProgressHandler",
referencedClasses: ["ProgressHandler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["register:"]
}, function ($methodClass){ return function (aProgressHandler){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.ProgressHandler)._register_(aProgressHandler);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerProgressHandler:",{aProgressHandler:aProgressHandler})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "registerTranscript:",
protocol: "services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTranscript"],
source: "registerTranscript: aTranscript\x0a\x09Transcript register: aTranscript",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["register:"]
}, function ($methodClass){ return function (aTranscript){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Transcript)._register_(aTranscript);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerTranscript:",{aTranscript:aTranscript})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "removeClass:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "removeClass: aClass\x0a\x09Smalltalk removeClass: aClass",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["removeClass:"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Smalltalk)._removeClass_(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "removeMethod:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "removeMethod: aMethod\x0a\x09aMethod origin removeCompiledMethod: aMethod",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["removeCompiledMethod:", "origin"]
}, function ($methodClass){ return function (aMethod){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aMethod)._origin())._removeCompiledMethod_(aMethod);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeMethod:",{aMethod:aMethod})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "removeProtocol:from:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "removeProtocol: aString from: aClass\x0a\x09(aClass methodsInProtocol: aString)\x0a\x09\x09do: [ :each | aClass removeCompiledMethod: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "methodsInProtocol:", "removeCompiledMethod:"]
}, function ($methodClass){ return function (aString,aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aClass)._methodsInProtocol_(aString))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aClass)._removeCompiledMethod_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeProtocol:from:",{aString:aString,aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "renameClass:to:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aClassName"],
source: "renameClass: aClass to: aClassName\x0a\x09(Smalltalk globals at: aClassName)\x0a\x09\x09ifNotNil: [ self error: 'A class named ', aClassName, ' already exists' ].\x0a\x09\x09\x0a\x09ClassBuilder new renameClass: aClass to: aClassName",
referencedClasses: ["Smalltalk", "ClassBuilder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "at:", "globals", "error:", ",", "renameClass:to:", "new"]
}, function ($methodClass){ return function (aClass,aClassName){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($globals.Smalltalk)._globals())._at_(aClassName);
if($1 == null || $1.a$nil){
$1;
} else {
$self._error_([$recv("A class named ".__comma(aClassName)).__comma(" already exists")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]);
}
$recv($recv($globals.ClassBuilder)._new())._renameClass_to_(aClass,aClassName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renameClass:to:",{aClass:aClass,aClassName:aClassName})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "renamePackage:to:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackageName", "aNewPackageName"],
source: "renamePackage: aPackageName to: aNewPackageName\x0a        Smalltalk renamePackage: aPackageName to: aNewPackageName",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["renamePackage:to:"]
}, function ($methodClass){ return function (aPackageName,aNewPackageName){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Smalltalk)._renamePackage_to_(aPackageName,aNewPackageName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renamePackage:to:",{aPackageName:aPackageName,aNewPackageName:aNewPackageName})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "renameProtocol:to:in:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString", "aClass"],
source: "renameProtocol: aString to: anotherString in: aClass\x0a\x09(aClass methodsInProtocol: aString)\x0a\x09\x09do: [ :each | each protocol: anotherString ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "methodsInProtocol:", "protocol:"]
}, function ($methodClass){ return function (aString,anotherString,aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aClass)._methodsInProtocol_(aString))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._protocol_(anotherString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renameProtocol:to:in:",{aString:aString,anotherString:anotherString,aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "setClassCommentOf:to:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aString"],
source: "setClassCommentOf: aClass to: aString\x0a\x09aClass comment: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["comment:"]
}, function ($methodClass){ return function (aClass,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aClass)._comment_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setClassCommentOf:to:",{aClass:aClass,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);

$core.addMethod(
$core.method({
selector: "systemAnnouncer",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "systemAnnouncer\x0a\x09^ (Smalltalk globals at: #SystemAnnouncer) current",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["current", "at:", "globals"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv($globals.Smalltalk)._globals())._at_("SystemAnnouncer"))._current();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"systemAnnouncer",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Environment);



$core.addClass("NullProgressHandler", $globals.Object, [], "Platform-Services");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.NullProgressHandler.comment="I am the default progress handler. I do not display any progress, and simply iterate over the collection.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "do:on:displaying:",
protocol: "progress handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09aCollection do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:"]
}, function ($methodClass){ return function (aBlock,aCollection,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCollection)._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.NullProgressHandler);


$core.setSlots($globals.NullProgressHandler.a$cls, ["current"]);
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09ProgressHandler registerIfNone: self new",
referencedClasses: ["ProgressHandler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["registerIfNone:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.ProgressHandler)._registerIfNone_($self._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.NullProgressHandler.a$cls);


$core.addClass("Service", $globals.Object, [], "Platform-Services");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Service.comment="I implement the basic behavior for class registration to a service.\x0a\x0aSee the `Transcript` class for a concrete service.\x0a\x0a## API\x0a\x0aUse class-side methods `#register:` and `#registerIfNone:` to register classes to a specific service.";
//>>excludeEnd("ide");

$core.setSlots($globals.Service.a$cls, ["current"]);
$core.addMethod(
$core.method({
selector: "current",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.current;

}; }),
$globals.Service.a$cls);

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
$globals.Service.a$cls);

$core.addMethod(
$core.method({
selector: "register:",
protocol: "registration",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "register: anObject\x0a\x09current := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.current=anObject;
return self;

}; }),
$globals.Service.a$cls);

$core.addMethod(
$core.method({
selector: "registerIfNone:",
protocol: "registration",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "registerIfNone: anObject\x0a\x09self current ifNil: [ self register: anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "current", "register:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._current();
if($1 == null || $1.a$nil){
$self._register_(anObject);
} else {
$1;
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerIfNone:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Service.a$cls);


$core.addClass("ErrorHandler", $globals.Service, [], "Platform-Services");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ErrorHandler.comment="I am the service used to handle Smalltalk errors.\x0aSee `boot.js` `handleError()` function.\x0a\x0aRegistered service instances must implement `#handleError:` to perform an action on the thrown exception.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "handleError:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleError: anError\x0a\x09| smalltalkError |\x0a\x09smalltalkError := Smalltalk asSmalltalkException: anError.\x0a\x09smalltalkError context ifNil: [ smalltalkError context: thisContext ].\x0a\x09self handleUnhandledError: smalltalkError",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSmalltalkException:", "ifNil:", "context", "context:", "handleUnhandledError:"]
}, function ($methodClass){ return function (anError){
var self=this,$self=this;
var smalltalkError;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
smalltalkError=$recv($globals.Smalltalk)._asSmalltalkException_(anError);
$1=$recv(smalltalkError)._context();
if($1 == null || $1.a$nil){
$recv(smalltalkError)._context_($core.getThisContext());
} else {
$1;
}
$self._handleUnhandledError_(smalltalkError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError,smalltalkError:smalltalkError})});
//>>excludeEnd("ctx");
}; }),
$globals.ErrorHandler.a$cls);

$core.addMethod(
$core.method({
selector: "handleUnhandledError:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleUnhandledError: anError\x0a\x09anError wasHandled ifFalse: [\x0a\x09\x09self current handleError: anError.\x0a\x09\x09anError beHandled ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "wasHandled", "handleError:", "current", "beHandled"]
}, function ($methodClass){ return function (anError){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv(anError)._wasHandled())){
$recv($self._current())._handleError_(anError);
$recv(anError)._beHandled();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleUnhandledError:",{anError:anError})});
//>>excludeEnd("ctx");
}; }),
$globals.ErrorHandler.a$cls);


$core.addClass("Finder", $globals.Service, [], "Platform-Services");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Finder.comment="I am the service responsible for finding classes/methods.\x0a__There is no default finder.__\x0a\x0a## API\x0a\x0aUse `#browse` on an object to find it.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "findClass:",
protocol: "finding",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "findClass: aClass\x0a\x09^ self current findClass: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["findClass:", "current"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._findClass_(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findClass:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.Finder.a$cls);

$core.addMethod(
$core.method({
selector: "findMethod:",
protocol: "finding",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "findMethod: aCompiledMethod\x0a\x09^ self current findMethod: aCompiledMethod",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["findMethod:", "current"]
}, function ($methodClass){ return function (aCompiledMethod){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._findMethod_(aCompiledMethod);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findMethod:",{aCompiledMethod:aCompiledMethod})});
//>>excludeEnd("ctx");
}; }),
$globals.Finder.a$cls);

$core.addMethod(
$core.method({
selector: "findString:",
protocol: "finding",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "findString: aString\x0a\x09^ self current findString: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["findString:", "current"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._findString_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findString:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Finder.a$cls);


$core.addClass("Inspector", $globals.Service, [], "Platform-Services");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Inspector.comment="I am the service responsible for inspecting objects.\x0a\x0aThe default inspector object is the transcript.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "inspect:",
protocol: "inspecting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09^ self current inspect: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["inspect:", "current"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._inspect_(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Inspector.a$cls);


$core.addClass("Platform", $globals.Service, [], "Platform-Services");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Platform.comment="I am bridge to JS environment.\x0a\x0a## API\x0a\x0a    Platform globals. \x22JS global object\x22\x0a    Platform newXHR \x22new XMLHttpRequest() or its shim\x22";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "fetch:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStringOrObject"],
source: "fetch: aStringOrObject\x0a\x09^ self current fetch: aStringOrObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fetch:", "current"]
}, function ($methodClass){ return function (aStringOrObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._fetch_(aStringOrObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fetch:",{aStringOrObject:aStringOrObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Platform.a$cls);

$core.addMethod(
$core.method({
selector: "fetchUrl:options:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "fetchUrl: aString options: anObject\x0a\x09^ self current fetchUrl: aString options: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fetchUrl:options:", "current"]
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._fetchUrl_options_(aString,anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fetchUrl:options:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Platform.a$cls);

$core.addMethod(
$core.method({
selector: "globals",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09^ self current globals",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["globals", "current"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._globals();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"globals",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Platform.a$cls);

$core.addMethod(
$core.method({
selector: "includesGlobal:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "includesGlobal: aString\x0a\x09^ self globals \x0a\x09\x09at: aString \x0a\x09\x09ifPresent: [ true ] \x0a\x09\x09ifAbsent: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifPresent:ifAbsent:", "globals"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._globals())._at_ifPresent_ifAbsent_(aString,(function(){
return true;

}),(function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesGlobal:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Platform.a$cls);

$core.addMethod(
$core.method({
selector: "newXhr",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newXhr\x0a\x09^ self current newXhr",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newXhr", "current"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._newXhr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newXhr",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Platform.a$cls);


$core.addClass("ProgressHandler", $globals.Service, [], "Platform-Services");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProgressHandler.comment="I am used to manage progress in collection iterations, see `SequenceableCollection >> #do:displayingProgress:`.\x0a\x0aRegistered instances must implement `#do:on:displaying:`.\x0a\x0aThe default behavior is to simply iterate over the collection, using `NullProgressHandler`.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "do:on:displaying:",
protocol: "progress handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aCollection", "aString"],
source: "do: aBlock on: aCollection displaying: aString\x0a\x09self current do: aBlock on: aCollection displaying: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:on:displaying:", "current"]
}, function ($methodClass){ return function (aBlock,aCollection,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._current())._do_on_displaying_(aBlock,aCollection,aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:on:displaying:",{aBlock:aBlock,aCollection:aCollection,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ProgressHandler.a$cls);


$core.addClass("Terminal", $globals.Service, [], "Platform-Services");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Terminal.comment="I am UI interface service.\x0a\x0a## API\x0a\x0a    Terminal alert: 'Hey, there is a problem'.\x0a    Terminal confirm: 'Affirmative?'.\x0a    Terminal prompt: 'Your name:'.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "alert:",
protocol: "dialogs",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "alert: aString\x0a\x09^ self current alert: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["alert:", "current"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._alert_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alert:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Terminal.a$cls);

$core.addMethod(
$core.method({
selector: "confirm:",
protocol: "dialogs",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "confirm: aString\x0a\x09^ self current confirm: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["confirm:", "current"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._confirm_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Terminal.a$cls);

$core.addMethod(
$core.method({
selector: "prompt:",
protocol: "dialogs",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "prompt: aString\x0a\x09^ self current prompt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["prompt:", "current"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._prompt_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Terminal.a$cls);

$core.addMethod(
$core.method({
selector: "prompt:default:",
protocol: "dialogs",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "defaultString"],
source: "prompt: aString default: defaultString\x0a\x09^ self current prompt: aString default: defaultString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["prompt:default:", "current"]
}, function ($methodClass){ return function (aString,defaultString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._current())._prompt_default_(aString,defaultString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prompt:default:",{aString:aString,defaultString:defaultString})});
//>>excludeEnd("ctx");
}; }),
$globals.Terminal.a$cls);


$core.addClass("Transcript", $globals.Service, [], "Platform-Services");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Transcript.comment="I am a facade for Transcript actions.\x0a\x0aI delegate actions to the currently registered transcript.\x0a\x0a## API\x0a\x0a    Transcript \x0a        show: 'hello world';\x0a        cr;\x0a        show: anObject.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "clear",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clear\x0a\x09self current clear",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["clear", "current"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._current())._clear();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clear",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Transcript.a$cls);

$core.addMethod(
$core.method({
selector: "cr",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09self current show: String cr",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["show:", "current", "cr"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._current())._show_($recv($globals.String)._cr());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cr",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Transcript.a$cls);

$core.addMethod(
$core.method({
selector: "inspect:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "inspect: anObject\x0a\x09self show: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["show:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._show_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Transcript.a$cls);

$core.addMethod(
$core.method({
selector: "open",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09self current open",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["open", "current"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._current())._open();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Transcript.a$cls);

$core.addMethod(
$core.method({
selector: "show:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "show: anObject\x0a\x09self current show: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["show:", "current"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._current())._show_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Transcript.a$cls);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: "*Platform-Services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Array streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPut: '#self' -> self;\x0a\x09\x09\x09nextPut: '#keys' -> self keys;\x0a\x09\x09\x09nextPutAll: self associations ].\x0a\x09anInspector\x0a\x09\x09setLabel: self shortenedPrintString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "nextPut:", "->", "keys", "nextPutAll:", "associations", "setLabel:", "shortenedPrintString", "setVariables:"]
}, function ($methodClass){ return function (anInspector){
var self=this,$self=this;
var variables;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
variables=$recv($globals.Array)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(stream)._nextPut_(["#self".__minus_gt(self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=1
//>>excludeEnd("ctx");
][0];
$recv(stream)._nextPut_("#keys".__minus_gt($self._keys()));
return $recv(stream)._nextPutAll_($self._associations());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_($self._shortenedPrintString());
$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: "*Platform-Services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Array streamContents: [ :stream |\x0a\x09\x09| i |\x0a\x09\x09stream nextPut: '#self' -> self.\x0a\x09\x09i := 1.\x0a\x09\x09self do: [ :each |\x0a\x09\x09\x09stream nextPut: i -> each.\x0a\x09\x09\x09i := i + 1 ] ].\x0a\x09anInspector\x0a\x09\x09setLabel: self shortenedPrintString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "nextPut:", "->", "do:", "+", "setLabel:", "shortenedPrintString", "setVariables:"]
}, function ($methodClass){ return function (anInspector){
var self=this,$self=this;
var variables;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
variables=$recv($globals.Array)._streamContents_((function(stream){
var i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(stream)._nextPut_(["#self".__minus_gt(self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=1
//>>excludeEnd("ctx");
][0];
i=(1);
return $self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(stream)._nextPut_($recv(i).__minus_gt(each));
i=$recv(i).__plus((1));
return i;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_($self._shortenedPrintString());
$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: "*Platform-Services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Array streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPut: '#self' -> self;\x0a\x09\x09\x09nextPut: '#year' -> self year;\x0a\x09\x09\x09nextPut: '#month' -> self month;\x0a\x09\x09\x09nextPut: '#day' -> self day;\x0a\x09\x09\x09nextPut: '#hours' -> self hours;\x0a\x09\x09\x09nextPut: '#minutes' -> self minutes;\x0a\x09\x09\x09nextPut: '#seconds' -> self seconds;\x0a\x09\x09\x09nextPut: '#milliseconds' -> self milliseconds ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "nextPut:", "->", "year", "month", "day", "hours", "minutes", "seconds", "milliseconds", "setLabel:", "printString", "setVariables:"]
}, function ($methodClass){ return function (anInspector){
var self=this,$self=this;
var variables;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
variables=$recv($globals.Array)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(stream)._nextPut_(["#self".__minus_gt(self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(stream)._nextPut_(["#year".__minus_gt($self._year())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(stream)._nextPut_(["#month".__minus_gt($self._month())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=3
//>>excludeEnd("ctx");
][0];
[$recv(stream)._nextPut_(["#day".__minus_gt($self._day())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=4
//>>excludeEnd("ctx");
][0];
[$recv(stream)._nextPut_(["#hours".__minus_gt($self._hours())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=5
//>>excludeEnd("ctx");
][0];
[$recv(stream)._nextPut_(["#minutes".__minus_gt($self._minutes())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=6
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=6
//>>excludeEnd("ctx");
][0];
[$recv(stream)._nextPut_(["#seconds".__minus_gt($self._seconds())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=7
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=7
//>>excludeEnd("ctx");
][0];
return $recv(stream)._nextPut_("#milliseconds".__minus_gt($self._milliseconds()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_($self._printString());
$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables})});
//>>excludeEnd("ctx");
}; }),
$globals.Date);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: "*Platform-Services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Array streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPut: '#self' -> self jsObject;\x0a\x09\x09\x09nextPutAll: (JSObjectProxy associationsOfProxy: self) ].\x0a\x09anInspector setLabel: self printString.\x0a\x09anInspector setVariables: variables",
referencedClasses: ["Array", "JSObjectProxy"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "nextPut:", "->", "jsObject", "nextPutAll:", "associationsOfProxy:", "setLabel:", "printString", "setVariables:"]
}, function ($methodClass){ return function (anInspector){
var self=this,$self=this;
var variables;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
variables=$recv($globals.Array)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(stream)._nextPut_("#self".__minus_gt($self._jsObject()));
return $recv(stream)._nextPutAll_($recv($globals.JSObjectProxy)._associationsOfProxy_(self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_($self._printString());
$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: "*Platform-Services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Array streamContents: [ :stream |\x0a\x09\x09stream nextPut: '#self' -> self.\x0a\x09\x09self class allInstanceVariableNames do: [ :each |\x0a\x09\x09\x09stream nextPut: each -> (self instVarNamed: each) ] ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "nextPut:", "->", "do:", "allInstanceVariableNames", "class", "instVarNamed:", "setLabel:", "printString", "setVariables:"]
}, function ($methodClass){ return function (anInspector){
var self=this,$self=this;
var variables;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
variables=$recv($globals.Array)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(stream)._nextPut_(["#self".__minus_gt(self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=1
//>>excludeEnd("ctx");
][0];
return $recv($recv($self._class())._allInstanceVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_($recv(each).__minus_gt($self._instVarNamed_(each)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_($self._printString());
$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables})});
//>>excludeEnd("ctx");
}; }),
$globals.Object);

$core.addMethod(
$core.method({
selector: "do:displayingProgress:",
protocol: "*Platform-Services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aString"],
source: "do: aBlock displayingProgress: aString\x0a\x09ProgressHandler \x0a\x09\x09do: aBlock \x0a\x09\x09on: self \x0a\x09\x09displaying: aString",
referencedClasses: ["ProgressHandler"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:on:displaying:"]
}, function ($methodClass){ return function (aBlock,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.ProgressHandler)._do_on_displaying_(aBlock,self,aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:displayingProgress:",{aBlock:aBlock,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: "*Platform-Services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Array streamContents: [ :stream |\x0a\x09\x09stream nextPut: '#self' -> self.\x0a\x09\x09self withIndexDo: [ :each :i |\x0a\x09\x09\x09stream nextPut: i -> each ] ].\x0a\x09anInspector\x0a\x09\x09setLabel: self shortenedPrintString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "nextPut:", "->", "withIndexDo:", "setLabel:", "shortenedPrintString", "setVariables:"]
}, function ($methodClass){ return function (anInspector){
var self=this,$self=this;
var variables;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
variables=$recv($globals.Array)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(stream)._nextPut_(["#self".__minus_gt(self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=1
//>>excludeEnd("ctx");
][0];
return $self._withIndexDo_((function(each,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_($recv(i).__minus_gt(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each,i:i},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_($self._shortenedPrintString());
$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: "*Platform-Services",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Array streamContents: [ :stream |\x0a\x09\x09stream\x0a\x09\x09\x09nextPut: '#self' -> self;\x0a\x09\x09\x09nextPut: '#home' -> self home;\x0a\x09\x09\x09nextPut: '#receiver' -> self receiver;\x0a\x09\x09\x09nextPut: '#selector' -> self selector;\x0a\x09\x09\x09nextPut: '#locals' -> self locals.\x0a\x09self class instanceVariableNames do: [ :each |\x0a\x09\x09stream nextPut: each -> (self instVarNamed: each) ] ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "nextPut:", "->", "home", "receiver", "selector", "locals", "do:", "instanceVariableNames", "class", "instVarNamed:", "setLabel:", "printString", "setVariables:"]
}, function ($methodClass){ return function (anInspector){
var self=this,$self=this;
var variables;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
variables=$recv($globals.Array)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(stream)._nextPut_(["#self".__minus_gt(self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(stream)._nextPut_(["#home".__minus_gt($self._home())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(stream)._nextPut_(["#receiver".__minus_gt($self._receiver())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=3
//>>excludeEnd("ctx");
][0];
[$recv(stream)._nextPut_(["#selector".__minus_gt($self._selector())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=4
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=4
//>>excludeEnd("ctx");
][0];
[$recv(stream)._nextPut_(["#locals".__minus_gt($self._locals())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["->"]=5
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=5
//>>excludeEnd("ctx");
][0];
return $recv($recv($self._class())._instanceVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_($recv(each).__minus_gt($self._instVarNamed_(each)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_($self._printString());
$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

});
