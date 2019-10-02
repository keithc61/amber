define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Kernel-Methods");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("BlockClosure", $globals.Object, ["prototype", "length"], "Kernel-Methods");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BlockClosure.comment="I represent a lexical closure.\x0aI am is directly mapped to JavaScript Function.\x0a\x0a## API\x0a\x0a1. Evaluation\x0a\x0a    My instances get evaluated with the `#value*` methods in the 'evaluating' protocol.\x0a\x0a    Example: ` [ :x | x + 1 ] value: 3 \x22Answers 4\x22 `\x0a\x0a2. Control structures\x0a\x0a    Blocks are used (together with `Boolean`) for control structures (methods in the `controlling` protocol).\x0a\x0a    Example: `aBlock whileTrue: [ ... ]`\x0a\x0a3. Error handling\x0a\x0a    I provide the `#on:do:` method for handling exceptions.\x0a\x0a    Example: ` aBlock on: MessageNotUnderstood do: [ :ex | ... ] `";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "applyTo:arguments:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aCollection"],
source: "applyTo: anObject arguments: aCollection\x0a\x09<inlineJS: 'return self.apply(anObject, aCollection)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.apply(anObject, aCollection)"]]],
messageSends: []
}, function ($methodClass){ return function (anObject,aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.apply(anObject, aCollection);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyTo:arguments:",{anObject:anObject,aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "asCompiledMethod:",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "asCompiledMethod: aString\x0a\x09<inlineJS: 'return $core.method({selector:aString, fn:self});'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $core.method({selector:aString, fn:self});"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.method({selector:aString, fn:self});;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asCompiledMethod:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "asJavaScriptSource",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSource\x0a\x09<inlineJS: 'return $self.toString();'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $self.toString();"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self.toString();;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSource",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "compiledSource",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compiledSource\x0a\x09<inlineJS: 'return self.toString()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toString()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toString();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compiledSource",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "currySelf",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currySelf\x0a\x09\x22Transforms [ :selfarg :x :y | stcode ] block\x0a\x09which represents JS function (selfarg, x, y, ...) {jscode}\x0a\x09into function (x, y, ...) {jscode} that takes selfarg from 'this'.\x0a\x09IOW, it is usable as JS method and first arg takes the receiver.\x22\x0a\x09\x0a\x09<inlineJS: '\x0a\x09\x09return function () {\x0a\x09\x09\x09var args = [ this ];\x0a\x09\x09\x09args.push.apply(args, arguments);\x0a\x09\x09\x09return self.apply(null, args);\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return function () {\x0a\x09\x09\x09var args = [ this ];\x0a\x09\x09\x09args.push.apply(args, arguments);\x0a\x09\x09\x09return self.apply(null, args);\x0a\x09\x09}\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return function () {
			var args = [ this ];
			args.push.apply(args, arguments);
			return self.apply(null, args);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currySelf",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "ensure:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ensure: aBlock\x0a\x09<inlineJS: 'try{return $self._value()}finally{aBlock._value()}'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["try{return $self._value()}finally{aBlock._value()}"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
try{return $self._value()}finally{aBlock._value()};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensure:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "fork",
protocol: "timeout/interval",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fork\x0a\x09ForkPool default fork: self",
referencedClasses: ["ForkPool"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fork:", "default"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.ForkPool)._default())._fork_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fork",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "new",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09\x22Use the receiver as a JS constructor.\x0a\x09*Do not* use this method to instanciate Smalltalk objects!\x22\x0a\x09<inlineJS: 'return new self()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return new self()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new self();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "newValue:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "newValue: anObject\x0a\x09^ self newWithValues: { anObject }",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newWithValues:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._newWithValues_([anObject]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newValue:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "newValue:value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anObject2"],
source: "newValue: anObject value: anObject2\x0a\x09^ self newWithValues: { anObject. anObject2 }.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newWithValues:"]
}, function ($methodClass){ return function (anObject,anObject2){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._newWithValues_([anObject,anObject2]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newValue:value:",{anObject:anObject,anObject2:anObject2})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "newValue:value:value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anObject2", "anObject3"],
source: "newValue: anObject value: anObject2 value: anObject3\x0a\x09^ self newWithValues: { anObject. anObject2. anObject3 }.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newWithValues:"]
}, function ($methodClass){ return function (anObject,anObject2,anObject3){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._newWithValues_([anObject,anObject2,anObject3]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newValue:value:value:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "newWithValues:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "newWithValues: aCollection\x0a\x09\x22Simulates JS new operator by combination of Object.create and .apply\x22\x0a\x09<inlineJS: '\x0a\x09\x09var object = Object.create(self.prototype);\x0a\x09\x09var result = self.apply(object, aCollection);\x0a\x09\x09return typeof result === \x22object\x22 ? result : object;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var object = Object.create(self.prototype);\x0a\x09\x09var result = self.apply(object, aCollection);\x0a\x09\x09return typeof result === \x22object\x22 ? result : object;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var object = Object.create(self.prototype);
		var result = self.apply(object, aCollection);
		return typeof result === "object" ? result : object;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWithValues:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "numArgs",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numArgs\x0a\x09^ length",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.length;

}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "on:do:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anErrorClass", "aBlock"],
source: "on: anErrorClass do: aBlock\x0a\x09\x22All exceptions thrown in the Smalltalk stack are cought.\x0a\x09Convert all JS exceptions to JavaScriptException instances.\x22\x0a\x09\x0a\x09^ self tryCatch: [ :error | | smalltalkError |\x0a\x09\x09smalltalkError := Smalltalk asSmalltalkException: error.\x0a\x09\x09(smalltalkError isKindOf: anErrorClass)\x0a\x09\x09ifTrue: [ aBlock value: smalltalkError ]\x0a\x09\x09ifFalse: [ smalltalkError pass ] ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["tryCatch:", "asSmalltalkException:", "ifTrue:ifFalse:", "isKindOf:", "value:", "pass"]
}, function ($methodClass){ return function (anErrorClass,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $self._tryCatch_((function(error){
var smalltalkError;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
smalltalkError=$recv($globals.Smalltalk)._asSmalltalkException_(error);
$1=$recv(smalltalkError)._isKindOf_(anErrorClass);
if($core.assert($1)){
return $recv(aBlock)._value_(smalltalkError);
} else {
return $recv(smalltalkError)._pass();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error,smalltalkError:smalltalkError},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:",{anErrorClass:anErrorClass,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "prototype",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prototype\x0a\x09^ prototype",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.prototype;

}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "provided",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "provided\x0a\x09\x22Returns JS proxy that allows to access 'static API', as in\x0a\x09  require provided resolve: ...\x0a\x09or\x0a\x09  XMLHttpRequest provided DONE\x22\x0a\x09\x0a\x09^ JSObjectProxy on: self",
referencedClasses: ["JSObjectProxy"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.JSObjectProxy)._on_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"provided",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return nil;

}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "timeToRun",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "timeToRun\x0a\x09\x22Answer the number of milliseconds taken to execute this block.\x22\x0a\x0a\x09^ Date millisecondsToRun: self",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["millisecondsToRun:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Date)._millisecondsToRun_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"timeToRun",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "tryCatch:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "tryCatch: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09try {\x0a\x09\x09\x09return $self._value();\x0a\x09\x09} catch(error) {\x0a\x09\x09\x09// pass non-local returns undetected\x0a\x09\x09\x09if (Array.isArray(error) && error.length === 1) throw error;\x0a\x09\x09\x09return aBlock._value_(error);\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09try {\x0a\x09\x09\x09return $self._value();\x0a\x09\x09} catch(error) {\x0a\x09\x09\x09// pass non-local returns undetected\x0a\x09\x09\x09if (Array.isArray(error) && error.length === 1) throw error;\x0a\x09\x09\x09return aBlock._value_(error);\x0a\x09\x09}\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		try {
			return $self._value();
		} catch(error) {
			// pass non-local returns undetected
			if (Array.isArray(error) && error.length === 1) throw error;
			return aBlock._value_(error);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tryCatch:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "value",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09<inlineJS: 'return self();'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self();"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self();;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArg"],
source: "value: anArg\x0a\x09<inlineJS: 'return self(anArg);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self(anArg);"]]],
messageSends: []
}, function ($methodClass){ return function (anArg){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self(anArg);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anArg:anArg})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "value:value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArg", "secondArg"],
source: "value: firstArg value: secondArg\x0a\x09<inlineJS: 'return self(firstArg, secondArg);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self(firstArg, secondArg);"]]],
messageSends: []
}, function ($methodClass){ return function (firstArg,secondArg){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self(firstArg, secondArg);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArg:firstArg,secondArg:secondArg})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "value:value:value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArg", "secondArg", "thirdArg"],
source: "value: firstArg value: secondArg value: thirdArg\x0a\x09<inlineJS: 'return self(firstArg, secondArg, thirdArg);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self(firstArg, secondArg, thirdArg);"]]],
messageSends: []
}, function ($methodClass){ return function (firstArg,secondArg,thirdArg){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self(firstArg, secondArg, thirdArg);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArg:firstArg,secondArg:secondArg,thirdArg:thirdArg})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "valueWithInterval:",
protocol: "timeout/interval",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "valueWithInterval: aNumber\x0a\x09<inlineJS: '\x0a\x09\x09var interval = setInterval(self, aNumber);\x0a\x09\x09return $globals.Timeout._on_(interval);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var interval = setInterval(self, aNumber);\x0a\x09\x09return $globals.Timeout._on_(interval);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var interval = setInterval(self, aNumber);
		return $globals.Timeout._on_(interval);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueWithInterval:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "valueWithPossibleArguments:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09<inlineJS: 'return self.apply(null, aCollection);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.apply(null, aCollection);"]]],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.apply(null, aCollection);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "valueWithTimeout:",
protocol: "timeout/interval",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "valueWithTimeout: aNumber\x0a\x09<inlineJS: '\x0a\x09\x09var timeout = setTimeout(self, aNumber);\x0a\x09\x09return $globals.Timeout._on_(timeout);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var timeout = setTimeout(self, aNumber);\x0a\x09\x09return $globals.Timeout._on_(timeout);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var timeout = setTimeout(self, aNumber);
		return $globals.Timeout._on_(timeout);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueWithTimeout:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "whileFalse",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "whileFalse\x0a\x09self whileFalse: []",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileFalse:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._whileFalse_((function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileFalse",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "whileFalse:",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whileFalse: aBlock\x0a\x09<inlineJS: 'while(!$core.assert($self._value())) {aBlock._value()}'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["while(!$core.assert($self._value())) {aBlock._value()}"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
while(!$core.assert($self._value())) {aBlock._value()};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileFalse:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "whileTrue",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "whileTrue\x0a\x09self whileTrue: []",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileTrue:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._whileTrue_((function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileTrue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "whileTrue:",
protocol: "controlling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whileTrue: aBlock\x0a\x09<inlineJS: 'while($core.assert($self._value())) {aBlock._value()}'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["while($core.assert($self._value())) {aBlock._value()}"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
while($core.assert($self._value())) {aBlock._value()};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileTrue:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure);


$core.addMethod(
$core.method({
selector: "javaScriptConstructorFor:initializingVia:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPrototype", "aMethodBlock"],
source: "javaScriptConstructorFor: aPrototype initializingVia: aMethodBlock\x0a\x09<inlineJS: '\x0a\x09\x09function Ctr () {\x0a\x09\x09\x09aMethodBlock.apply(this, arguments);\x0a\x09\x09}\x0a\x09\x09Ctr.prototype = aPrototype;\x0a\x09\x09return Ctr;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09function Ctr () {\x0a\x09\x09\x09aMethodBlock.apply(this, arguments);\x0a\x09\x09}\x0a\x09\x09Ctr.prototype = aPrototype;\x0a\x09\x09return Ctr;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aPrototype,aMethodBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		function Ctr () {
			aMethodBlock.apply(this, arguments);
		}
		Ctr.prototype = aPrototype;
		return Ctr;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"javaScriptConstructorFor:initializingVia:",{aPrototype:aPrototype,aMethodBlock:aMethodBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.BlockClosure.a$cls);


$core.addClass("CompiledMethod", $globals.Object, ["args", "instantiateFn", "fn", "messageSends", "pragmas", "owner", "methodClass", "protocol", "referencedClasses", "selector", "source"], "Kernel-Methods");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CompiledMethod.comment="I represent a class method of the system. I hold the source and compiled code of a class method.\x0a\x0a## API\x0aMy instances can be accessed using `Behavior >> #methodAt:`\x0a\x0a    Object methodAt: 'asString'\x0a\x0aSource code access:\x0a\x0a\x09(String methodAt: 'lines') source\x0a\x0aReferenced classes:\x0a\x0a\x09(String methodAt: 'lines') referencedClasses\x0a\x0aMessages sent from an instance:\x0a\x09\x0a\x09(String methodAt: 'lines') messageSends";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "arguments",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ args ifNil: [ #() ]",
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
$1=$self.args;
if(($receiver = $1) == null || $receiver.a$nil){
return [];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "asString",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09^ self asStringForClass: self methodClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asStringForClass:", "methodClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._asStringForClass_($self._methodClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "asStringForClass:",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "asStringForClass: aClass\x0a\x09| result |\x0a\x09result := aClass name.\x0a\x09self methodClass = aClass \x0a\x09\x09ifFalse: [ result := result, ' (', (self methodClass ifNil: [ 'nil' ] ifNotNil: [ self methodClass name ]), ')'].\x0a\x09(self origin = aClass | (self origin = self methodClass)) \x0a\x09\x09ifFalse: [ result := result, ' /', (self origin ifNil: [ 'nil' ] ifNotNil: [ self origin name ]), '/'].\x0a\x09^ result, ' >> ', self selector symbolPrintString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["name", "ifFalse:", "=", "methodClass", ",", "ifNil:ifNotNil:", "|", "origin", "symbolPrintString", "selector"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$6,$7,$5,$3,$10,$9,$12,$11,$8,$14,$16,$15,$13,$17,$receiver;
result=$recv(aClass)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$2=$self._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
$4=$recv(result).__comma(" (");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$6=$self._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=2;
//>>excludeEnd("ctx");
if(($receiver = $6) == null || $receiver.a$nil){
$5="nil";
} else {
$7=$self._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=3;
//>>excludeEnd("ctx");
$5=$recv($7)._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=2;
//>>excludeEnd("ctx");
}
$3=$recv($4).__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
result=$recv($3).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
result;
}
$10=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__eq(aClass);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$12=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__eq($self._methodClass());
$8=$recv($9).__or($11);
if(!$core.assert($8)){
$14=$recv(result).__comma(" /");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$16=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=3;
//>>excludeEnd("ctx");
if(($receiver = $16) == null || $receiver.a$nil){
$15="nil";
} else {
$15=$recv($self._origin())._name();
}
$13=$recv($14).__comma($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
result=$recv($13).__comma("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
result;
}
$17=$recv($recv(result).__comma(" >> ")).__comma($recv($self._selector())._symbolPrintString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
return $17;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asStringForClass:",{aClass:aClass,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "basicPragmas",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicPragmas\x0a\x09^ pragmas ifNil: [ #() ]",
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
$1=$self.pragmas;
if(($receiver = $1) == null || $receiver.a$nil){
return [];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicPragmas",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "browse",
protocol: "browsing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "browse\x0a\x09Finder findMethod: self",
referencedClasses: ["Finder"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["findMethod:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Finder)._findMethod_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"browse",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "category",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "category\x0a\x09^ self protocol",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["protocol"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._protocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"category",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "defaultProtocol",
protocol: "defaults",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultProtocol\x0a\x09^ 'as yet unclassified'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "as yet unclassified";

}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "fn",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fn\x0a\x09^ fn",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.fn;

}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "instantiateFn",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instantiateFn\x0a\x09^ instantiateFn",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.instantiateFn;

}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "instantiateFn:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "instantiateFn: anObject\x0a\x09instantiateFn := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.instantiateFn=anObject;
return self;

}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "isCompiledMethod",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCompiledMethod\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "isOverridden",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isOverridden\x0a    self methodClass allSubclassesDo: [ :each |\x0a\x09    (each includesSelector: selector)\x0a        \x09ifTrue: [ ^ true ] ].\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["allSubclassesDo:", "methodClass", "ifTrue:", "includesSelector:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$recv($self._methodClass())._allSubclassesDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._includesSelector_($self.selector);
if($core.assert($1)){
throw $early=[true];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isOverridden",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "isOverride",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isOverride\x0a\x09| superclass |\x0a    \x0a    superclass := self methodClass superclass.\x0a\x09superclass ifNil: [ ^ false ].\x0a\x09\x0a    ^ (self methodClass superclass lookupSelector: self selector) notNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["superclass", "methodClass", "ifNil:", "notNil", "lookupSelector:", "selector"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var superclass;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$self._methodClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodClass"]=1;
//>>excludeEnd("ctx");
superclass=$recv($1)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
$2=superclass;
if(($receiver = $2) == null || $receiver.a$nil){
return false;
} else {
$2;
}
return $recv($recv($recv($self._methodClass())._superclass())._lookupSelector_($self._selector()))._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isOverride",{superclass:superclass})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "messageSends",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSends\x0a\x09^ messageSends",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.messageSends;

}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "methodClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodClass\x0a\x09^ methodClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.methodClass;

}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "origin",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "origin\x0a\x09^ owner",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.owner;

}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "package",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09\x22Answer the package the receiver belongs to:\x0a\x09- if it is an extension method, answer the corresponding package\x0a\x09- else answer the `methodClass` package\x22\x0a\x09\x0a\x09^ self origin ifNotNil: [ :class | class packageOfProtocol: self protocol ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "origin", "packageOfProtocol:", "protocol"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self._origin();
if(($receiver = $1) == null || $receiver.a$nil){
return $1;
} else {
var class_;
class_=$receiver;
return $recv(class_)._packageOfProtocol_($self._protocol());
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"package",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "pragmas",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pragmas\x0a\x09^ self basicPragmas collect: [ :each | Message selector: each first arguments: each second ]",
referencedClasses: ["Message"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "basicPragmas", "selector:arguments:", "first", "second"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._basicPragmas())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($globals.Message)._selector_arguments_($recv(each)._first(),$recv(each)._second());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pragmas",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "pragmas:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArrayOfMessages"],
source: "pragmas: anArrayOfMessages\x0a\x09pragmas := anArrayOfMessages collect: [ :each | { each selector. each arguments } ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "selector", "arguments"]
}, function ($methodClass){ return function (anArrayOfMessages){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.pragmas=$recv(anArrayOfMessages)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv(each)._selector(),$recv(each)._arguments()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pragmas:",{anArrayOfMessages:anArrayOfMessages})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "protocol",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocol\x0a\x09^ protocol ifNil: [ self defaultProtocol ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "defaultProtocol"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.protocol;
if(($receiver = $1) == null || $receiver.a$nil){
return $self._defaultProtocol();
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocol",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "protocol:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "protocol: aString\x0a\x09| oldProtocol |\x0a\x09oldProtocol := self protocol.\x0a\x09protocol := aString.\x0a\x0a\x09oldProtocol ifNotNil: [\x0a\x09\x09SystemAnnouncer current announce: (MethodMoved new\x0a\x09\x09\x09method: self;\x0a\x09\x09\x09oldProtocol: oldProtocol;\x0a\x09\x09\x09yourself) ].\x0a\x0a\x09self origin ifNotNil: [ :origin |\x0a\x09\x09origin organization addElement: aString.\x0a\x09\x09origin removeProtocolIfEmpty: oldProtocol ]",
referencedClasses: ["SystemAnnouncer", "MethodMoved"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["protocol", "ifNotNil:", "announce:", "current", "method:", "new", "oldProtocol:", "yourself", "origin", "addElement:", "organization", "removeProtocolIfEmpty:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
var oldProtocol;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$receiver;
oldProtocol=$self._protocol();
$self.protocol=aString;
$1=oldProtocol;
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
$2=$recv($globals.SystemAnnouncer)._current();
$4=$recv($globals.MethodMoved)._new();
$recv($4)._method_(self);
$recv($4)._oldProtocol_(oldProtocol);
$3=$recv($4)._yourself();
$recv($2)._announce_($3);
}
$5=$self._origin();
if(($receiver = $5) == null || $receiver.a$nil){
$5;
} else {
var origin;
origin=$receiver;
$recv($recv(origin)._organization())._addElement_(aString);
$recv(origin)._removeProtocolIfEmpty_(oldProtocol);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocol:",{aString:aString,oldProtocol:oldProtocol})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "referencedClasses",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "referencedClasses\x0a\x09^ referencedClasses",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.referencedClasses;

}; }),
$globals.CompiledMethod);

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
$globals.CompiledMethod);

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
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "sendTo:arguments:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aCollection"],
source: "sendTo: anObject arguments: aCollection\x0a\x09^ self fn applyTo: anObject arguments: aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["applyTo:arguments:", "fn"]
}, function ($methodClass){ return function (anObject,aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._fn())._applyTo_arguments_(anObject,aCollection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendTo:arguments:",{anObject:anObject,aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

$core.addMethod(
$core.method({
selector: "source",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
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
$1=$self.source;
if(($receiver = $1) == null || $receiver.a$nil){
return "";
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{})});
//>>excludeEnd("ctx");
}; }),
$globals.CompiledMethod);

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
$globals.CompiledMethod);



$core.addClass("ForkPool", $globals.Object, ["poolSize", "maxPoolSize", "queue", "worker"], "Kernel-Methods");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ForkPool.comment="I am responsible for handling forked blocks.\x0aThe pool size sets the maximum concurrent forked blocks.\x0a\x0a## API\x0a\x0aThe default instance is accessed with `#default`.\x0aThe maximum concurrent forked blocks can be set with `#maxPoolSize:`.\x0a\x0aForking is done via `BlockClosure >> #fork`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addWorker",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addWorker\x0a\x09worker valueWithTimeout: 0.\x0a\x09poolSize := poolSize + 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valueWithTimeout:", "+"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.worker)._valueWithTimeout_((0));
$self.poolSize=$recv($self.poolSize).__plus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addWorker",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ForkPool);

$core.addMethod(
$core.method({
selector: "defaultMaxPoolSize",
protocol: "defaults",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultMaxPoolSize\x0a\x09^ self class defaultMaxPoolSize",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["defaultMaxPoolSize", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._defaultMaxPoolSize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultMaxPoolSize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ForkPool);

$core.addMethod(
$core.method({
selector: "fork:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "fork: aBlock\x0a\x09poolSize < self maxPoolSize ifTrue: [ self addWorker ].\x0a\x09queue nextPut: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "<", "maxPoolSize", "addWorker", "nextPut:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self.poolSize).__lt($self._maxPoolSize());
if($core.assert($1)){
$self._addWorker();
}
$recv($self.queue)._nextPut_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fork:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.ForkPool);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09poolSize := 0.\x0a\x09queue := Queue new.\x0a\x09worker := self makeWorker",
referencedClasses: ["Queue"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "new", "makeWorker"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._initialize.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self.poolSize=(0);
$self.queue=$recv($globals.Queue)._new();
$self.worker=$self._makeWorker();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ForkPool);

$core.addMethod(
$core.method({
selector: "makeWorker",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeWorker\x0a\x09| sentinel |\x0a\x09sentinel := Object new.\x0a\x09^ [ | block |\x0a\x09\x09poolSize := poolSize - 1.\x0a\x09\x09block := queue nextIfAbsent: [ sentinel ].\x0a\x09\x09block == sentinel ifFalse: [\x0a\x09\x09\x09[ block value ] ensure: [ self addWorker ] ]]",
referencedClasses: ["Object"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "-", "nextIfAbsent:", "ifFalse:", "==", "ensure:", "value", "addWorker"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var sentinel;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
sentinel=$recv($globals.Object)._new();
return (function(){
var block;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self.poolSize=$recv($self.poolSize).__minus((1));
block=$recv($self.queue)._nextIfAbsent_((function(){
return sentinel;

}));
$1=$recv(block).__eq_eq(sentinel);
if(!$core.assert($1)){
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(block)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._addWorker();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({block:block},$ctx1,1)});
//>>excludeEnd("ctx");
});
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeWorker",{sentinel:sentinel})});
//>>excludeEnd("ctx");
}; }),
$globals.ForkPool);

$core.addMethod(
$core.method({
selector: "maxPoolSize",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxPoolSize\x0a\x09^ maxPoolSize ifNil: [ self defaultMaxPoolSize ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "defaultMaxPoolSize"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.maxPoolSize;
if(($receiver = $1) == null || $receiver.a$nil){
return $self._defaultMaxPoolSize();
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maxPoolSize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ForkPool);

$core.addMethod(
$core.method({
selector: "maxPoolSize:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "maxPoolSize: anInteger\x0a\x09maxPoolSize := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
$self.maxPoolSize=anInteger;
return self;

}; }),
$globals.ForkPool);


$core.setSlots($globals.ForkPool.a$cls, ["default"]);
$core.addMethod(
$core.method({
selector: "default",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.default;
if(($receiver = $1) == null || $receiver.a$nil){
$self.default=$self._new();
return $self.default;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"default",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ForkPool.a$cls);

$core.addMethod(
$core.method({
selector: "defaultMaxPoolSize",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultMaxPoolSize\x0a\x09^ 100",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return (100);

}; }),
$globals.ForkPool.a$cls);

$core.addMethod(
$core.method({
selector: "resetDefault",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetDefault\x0a\x09default := nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
$self.default=nil;
return self;

}; }),
$globals.ForkPool.a$cls);


$core.addClass("Message", $globals.Object, ["selector", "arguments"], "Kernel-Methods");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Message.comment="In general, the system does not use instances of me for efficiency reasons.\x0aHowever, when a message is not understood by its receiver, the interpreter will make up an instance of it in order to capture the information involved in an actual message transmission.\x0aThis instance is sent it as an argument with the message `#doesNotUnderstand:` to the receiver.\x0a\x0aSee boot.js, `messageNotUnderstood` and its counterpart `Object >> #doesNotUnderstand:`\x0a\x0a## API\x0a\x0aBesides accessing methods, `#sendTo:` provides a convenient way to send a message to an object.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "arguments",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ arguments",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.arguments;

}; }),
$globals.Message);

$core.addMethod(
$core.method({
selector: "arguments:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "arguments: anArray\x0a\x09arguments := anArray",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anArray){
var self=this,$self=this;
$self.arguments=anArray;
return self;

}; }),
$globals.Message);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self selector;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:", "nextPutAll:", "selector"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._printOn_.call($self,aStream));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aStream)._nextPutAll_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($self._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Message);

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
$globals.Message);

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
$globals.Message);

$core.addMethod(
$core.method({
selector: "sendTo:",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "sendTo: anObject\x0a\x09^ anObject perform: self selector withArguments: self arguments",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["perform:withArguments:", "selector", "arguments"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anObject)._perform_withArguments_($self._selector(),$self._arguments());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendTo:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Message);


$core.addMethod(
$core.method({
selector: "selector:arguments:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anArray"],
source: "selector: aString arguments: anArray\x0a\x09^ self new\x0a\x09\x09selector: aString;\x0a\x09\x09arguments: anArray;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["selector:", "new", "arguments:", "yourself"]
}, function ($methodClass){ return function (aString,anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._selector_(aString);
$recv($1)._arguments_(anArray);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector:arguments:",{aString:aString,anArray:anArray})});
//>>excludeEnd("ctx");
}; }),
$globals.Message.a$cls);

$core.addMethod(
$core.method({
selector: "selector:arguments:notUnderstoodBy:",
protocol: "dnu handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anArray", "anObject"],
source: "selector: aString arguments: anArray notUnderstoodBy: anObject\x0a\x09\x22Creates the message and passes it to #doesNotUnderstand:.\x0a\x09Used by kernel to handle MNU.\x22\x0a\x09^ anObject doesNotUnderstand:\x0a\x09\x09(self selector: aString arguments: anArray)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["doesNotUnderstand:", "selector:arguments:"]
}, function ($methodClass){ return function (aString,anArray,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anObject)._doesNotUnderstand_($self._selector_arguments_(aString,anArray));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector:arguments:notUnderstoodBy:",{aString:aString,anArray:anArray,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Message.a$cls);


$core.addClass("MessageSend", $globals.Object, ["receiver", "message"], "Kernel-Methods");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MessageSend.comment="I encapsulate message sends to objects. Arguments can be either predefined or supplied when the message send is performed. \x0a\x0a## API\x0a\x0aUse `#value` to perform a message send with its predefined arguments and `#value:*` if additonal arguments have to supplied.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "arguments",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ message arguments",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["arguments"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.message)._arguments();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "arguments:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "arguments: anArray\x0a\x09message arguments: anArray",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["arguments:"]
}, function ($methodClass){ return function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.message)._arguments_(anArray);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments:",{anArray:anArray})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09message := Message new",
referencedClasses: ["Message"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._initialize.call($self));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self.message=$recv($globals.Message)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream\x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self receiver;\x0a\x09\x09nextPutAll: ' >> ';\x0a\x09\x09nextPutAll: self selector;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:", "nextPutAll:", "receiver", "selector"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._printOn_.call($self,aStream));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aStream)._nextPutAll_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($self._receiver());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(" >> ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($self._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSend);

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
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.receiver=anObject;
return self;

}; }),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "selector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ message selector",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["selector"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.message)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09message selector: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["selector:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.message)._selector_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "value",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ message sendTo: self receiver",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sendTo:", "receiver"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.message)._sendTo_($self._receiver());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject\x0a\x09^ message \x0a\x09\x09arguments: { anObject };\x0a\x09\x09sendTo: self receiver",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["arguments:", "sendTo:", "receiver"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.message;
$recv($1)._arguments_([anObject]);
return $recv($1)._sendTo_($self._receiver());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "value:value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArgument", "secondArgument"],
source: "value: firstArgument value: secondArgument\x0a\x09^ message \x0a\x09\x09arguments: { firstArgument. secondArgument };\x0a\x09\x09sendTo: self receiver",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["arguments:", "sendTo:", "receiver"]
}, function ($methodClass){ return function (firstArgument,secondArgument){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.message;
$recv($1)._arguments_([firstArgument,secondArgument]);
return $recv($1)._sendTo_($self._receiver());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArgument:firstArgument,secondArgument:secondArgument})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "value:value:value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArgument", "secondArgument", "thirdArgument"],
source: "value: firstArgument value: secondArgument value: thirdArgument\x0a\x09^ message \x0a\x09\x09arguments: { firstArgument. secondArgument. thirdArgument };\x0a\x09\x09sendTo: self receiver",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["arguments:", "sendTo:", "receiver"]
}, function ($methodClass){ return function (firstArgument,secondArgument,thirdArgument){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.message;
$recv($1)._arguments_([firstArgument,secondArgument,thirdArgument]);
return $recv($1)._sendTo_($self._receiver());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArgument:firstArgument,secondArgument:secondArgument,thirdArgument:thirdArgument})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSend);

$core.addMethod(
$core.method({
selector: "valueWithPossibleArguments:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "valueWithPossibleArguments: anArray\x0a\x09self arguments: anArray.\x0a\x09^ self value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["arguments:", "value"]
}, function ($methodClass){ return function (anArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._arguments_(anArray);
return $self._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{anArray:anArray})});
//>>excludeEnd("ctx");
}; }),
$globals.MessageSend);



$core.addClass("MethodContext", $globals.Object, ["receiver", "evaluatedSelector", "homeContext", "index", "locals", "outerContext", "selector", "sendIdx", "supercall"], "Kernel-Methods");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodContext.comment="I hold all the dynamic state associated with the execution of either a method activation resulting from a message send. I am used to build the call stack while debugging.\x0a\x0aMy instances are JavaScript `SmalltalkMethodContext` objects defined in `boot.js`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "basicReceiver",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicReceiver\x0a\x09^ receiver",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.receiver;

}; }),
$globals.MethodContext);

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
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "home",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "home\x0a\x09^ homeContext",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.homeContext;

}; }),
$globals.MethodContext);

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
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "locals",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "locals\x0a\x09^ locals",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.locals;

}; }),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "outerContext",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "outerContext\x0a\x09^ outerContext ifNil: [ self home ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "home"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.outerContext;
if(($receiver = $1) == null || $receiver.a$nil){
return $self._home();
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"outerContext",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "selector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector ifNotNil: [ Smalltalk core js2st: selector ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "js2st:", "core"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.selector;
if(($receiver = $1) == null || $receiver.a$nil){
return $1;
} else {
return $recv($recv($globals.Smalltalk)._core())._js2st_($self.selector);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selector",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "sendIndexes",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendIndexes\x0a\x09^ sendIdx",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.sendIdx;

}; }),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "stubHere",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stubHere\x0a\x09homeContext := JSObjectProxy undefined",
referencedClasses: ["JSObjectProxy"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["undefined"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.homeContext=$recv($globals.JSObjectProxy)._undefined();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stubHere",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "stubToAtMost:",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "stubToAtMost: anInteger\x0a\x09| context |\x0a\x09context := self.\x0a\x09anInteger timesRepeat: [ context := context ifNotNil: [ context home ] ].\x0a\x09context ifNotNil: [ context stubHere ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["timesRepeat:", "ifNotNil:", "home", "stubHere"]
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
var context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
context=self;
$recv(anInteger)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=context;
if(($receiver = $1) == null || $receiver.a$nil){
context=$1;
} else {
context=$recv(context)._home();
}
return context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=context;
if(($receiver = $2) == null || $receiver.a$nil){
$2;
} else {
$recv(context)._stubHere();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stubToAtMost:",{anInteger:anInteger,context:context})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodContext);

$core.addMethod(
$core.method({
selector: "supercall",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "supercall\x0a\x09^ supercall = true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["="]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.supercall).__eq(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"supercall",{})});
//>>excludeEnd("ctx");
}; }),
$globals.MethodContext);



$core.addClass("NativeFunction", $globals.Object, [], "Kernel-Methods");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.NativeFunction.comment="I am a wrapper around native functions, such as `WebSocket`.\x0aFor 'normal' functions (whose constructor is the JavaScript `Function` object), use `BlockClosure`.\x0a\x0a## API\x0a\x0aSee the class-side `instance creation` methods for instance creation.\x0a\x0aCreated instances will most probably be instance of `JSObjectProxy`.\x0a\x0a## Usage example:\x0a\x0a\x09| ws |\x0a\x09ws := NativeFunction constructor: 'WebSocket' value: 'ws://localhost'.\x0a\x09ws at: 'onopen' put: [ ws send: 'hey there from Amber' ]";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "constructorNamed:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "constructorNamed: aString\x0a\x09<inlineJS: '\x0a\x09\x09var nativeFunc=$globals.Platform._globals()[aString];\x0a\x09\x09return new nativeFunc();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var nativeFunc=$globals.Platform._globals()[aString];\x0a\x09\x09return new nativeFunc();\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var nativeFunc=$globals.Platform._globals()[aString];
		return new nativeFunc();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"constructorNamed:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "constructorNamed:value:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "constructorNamed: aString value: anObject\x0a\x09<inlineJS: '\x0a\x09\x09var nativeFunc=$globals.Platform._globals()[aString];\x0a\x09\x09return new nativeFunc(anObject);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var nativeFunc=$globals.Platform._globals()[aString];\x0a\x09\x09return new nativeFunc(anObject);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var nativeFunc=$globals.Platform._globals()[aString];
		return new nativeFunc(anObject);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"constructorNamed:value:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "constructorNamed:value:value:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "anObject2"],
source: "constructorNamed: aString value: anObject value: anObject2\x0a\x09<inlineJS: '\x0a\x09\x09var nativeFunc=$globals.Platform._globals[aString];\x0a\x09\x09return new nativeFunc(anObject,anObject2);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var nativeFunc=$globals.Platform._globals[aString];\x0a\x09\x09return new nativeFunc(anObject,anObject2);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anObject,anObject2){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var nativeFunc=$globals.Platform._globals[aString];
		return new nativeFunc(anObject,anObject2);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"constructorNamed:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "constructorNamed:value:value:value:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "anObject2", "anObject3"],
source: "constructorNamed: aString value: anObject value: anObject2 value: anObject3\x0a\x09<inlineJS: '\x0a\x09\x09var nativeFunc=$globals.Platform._globals[aString];\x0a\x09\x09return new nativeFunc(anObject,anObject2, anObject3);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var nativeFunc=$globals.Platform._globals[aString];\x0a\x09\x09return new nativeFunc(anObject,anObject2, anObject3);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anObject,anObject2,anObject3){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var nativeFunc=$globals.Platform._globals[aString];
		return new nativeFunc(anObject,anObject2, anObject3);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"constructorNamed:value:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2,anObject3:anObject3})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "constructorOf:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc"],
source: "constructorOf: nativeFunc\x0a\x09<inlineJS: '\x0a\x09\x09return new nativeFunc();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return new nativeFunc();\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return new nativeFunc();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"constructorOf:",{nativeFunc:nativeFunc})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "constructorOf:value:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc", "anObject"],
source: "constructorOf: nativeFunc value: anObject\x0a\x09<inlineJS: '\x0a\x09\x09return new nativeFunc(anObject);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return new nativeFunc(anObject);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return new nativeFunc(anObject);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"constructorOf:value:",{nativeFunc:nativeFunc,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "constructorOf:value:value:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc", "anObject", "anObject2"],
source: "constructorOf: nativeFunc value: anObject value: anObject2\x0a\x09<inlineJS: '\x0a\x09\x09return new nativeFunc(anObject,anObject2);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return new nativeFunc(anObject,anObject2);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc,anObject,anObject2){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return new nativeFunc(anObject,anObject2);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"constructorOf:value:value:",{nativeFunc:nativeFunc,anObject:anObject,anObject2:anObject2})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "constructorOf:value:value:value:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc", "anObject", "anObject2", "anObject3"],
source: "constructorOf: nativeFunc value: anObject value: anObject2 value: anObject3\x0a\x09<inlineJS: '\x0a\x09\x09return new nativeFunc(anObject,anObject2, anObject3);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return new nativeFunc(anObject,anObject2, anObject3);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc,anObject,anObject2,anObject3){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return new nativeFunc(anObject,anObject2, anObject3);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"constructorOf:value:value:value:",{nativeFunc:nativeFunc,anObject:anObject,anObject2:anObject2,anObject3:anObject3})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "exists:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "exists: aString\x0a\x09^ Platform includesGlobal: aString",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["includesGlobal:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Platform)._includesGlobal_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exists:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "functionNamed:",
protocol: "function calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "functionNamed: aString\x0a\x09<inlineJS: '\x0a\x09\x09var nativeFunc=$globals.Platform._globals[aString];\x0a\x09\x09return nativeFunc();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var nativeFunc=$globals.Platform._globals[aString];\x0a\x09\x09return nativeFunc();\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var nativeFunc=$globals.Platform._globals[aString];
		return nativeFunc();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"functionNamed:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "functionNamed:value:",
protocol: "function calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "functionNamed: aString value: anObject\x0a\x09<inlineJS: '\x0a\x09\x09var nativeFunc=$globals.Platform._globals()[aString];\x0a\x09\x09return nativeFunc(anObject);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var nativeFunc=$globals.Platform._globals()[aString];\x0a\x09\x09return nativeFunc(anObject);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var nativeFunc=$globals.Platform._globals()[aString];
		return nativeFunc(anObject);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"functionNamed:value:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "functionNamed:value:value:",
protocol: "function calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "anObject2"],
source: "functionNamed: aString value: anObject value: anObject2\x0a\x09<inlineJS: '\x0a\x09\x09var nativeFunc=$globals.Platform._globals()[aString];\x0a\x09\x09return nativeFunc(anObject,anObject2);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var nativeFunc=$globals.Platform._globals()[aString];\x0a\x09\x09return nativeFunc(anObject,anObject2);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anObject,anObject2){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var nativeFunc=$globals.Platform._globals()[aString];
		return nativeFunc(anObject,anObject2);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"functionNamed:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "functionNamed:value:value:value:",
protocol: "function calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject", "anObject2", "anObject3"],
source: "functionNamed: aString value: anObject value: anObject2 value: anObject3\x0a\x09<inlineJS: '\x0a\x09\x09var nativeFunc=$globals.Platform._globals()[aString];\x0a\x09\x09return nativeFunc(anObject,anObject2, anObject3);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var nativeFunc=$globals.Platform._globals()[aString];\x0a\x09\x09return nativeFunc(anObject,anObject2, anObject3);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anObject,anObject2,anObject3){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var nativeFunc=$globals.Platform._globals()[aString];
		return nativeFunc(anObject,anObject2, anObject3);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"functionNamed:value:value:value:",{aString:aString,anObject:anObject,anObject2:anObject2,anObject3:anObject3})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "functionNamed:valueWithArgs:",
protocol: "function calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "args"],
source: "functionNamed: aString valueWithArgs: args\x0a\x09<inlineJS: '\x0a\x09\x09var nativeFunc=$globals.Platform._globals()[aString];\x0a\x09\x09return Function.prototype.apply.call(nativeFunc, null, args);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var nativeFunc=$globals.Platform._globals()[aString];\x0a\x09\x09return Function.prototype.apply.call(nativeFunc, null, args);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aString,args){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var nativeFunc=$globals.Platform._globals()[aString];
		return Function.prototype.apply.call(nativeFunc, null, args);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"functionNamed:valueWithArgs:",{aString:aString,args:args})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "functionOf:",
protocol: "function calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc"],
source: "functionOf: nativeFunc\x0a\x09<inlineJS: '\x0a\x09\x09return nativeFunc();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return nativeFunc();\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return nativeFunc();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"functionOf:",{nativeFunc:nativeFunc})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "functionOf:value:",
protocol: "function calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc", "anObject"],
source: "functionOf: nativeFunc value: anObject\x0a\x09<inlineJS: '\x0a\x09\x09return nativeFunc(anObject);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return nativeFunc(anObject);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return nativeFunc(anObject);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"functionOf:value:",{nativeFunc:nativeFunc,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "functionOf:value:value:",
protocol: "function calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc", "anObject", "anObject2"],
source: "functionOf: nativeFunc value: anObject value: anObject2\x0a\x09<inlineJS: '\x0a\x09\x09return nativeFunc(anObject,anObject2);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return nativeFunc(anObject,anObject2);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc,anObject,anObject2){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return nativeFunc(anObject,anObject2);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"functionOf:value:value:",{nativeFunc:nativeFunc,anObject:anObject,anObject2:anObject2})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "functionOf:value:value:value:",
protocol: "function calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc", "anObject", "anObject2", "anObject3"],
source: "functionOf: nativeFunc value: anObject value: anObject2 value: anObject3\x0a\x09<inlineJS: '\x0a\x09\x09return nativeFunc(anObject,anObject2, anObject3);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return nativeFunc(anObject,anObject2, anObject3);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc,anObject,anObject2,anObject3){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return nativeFunc(anObject,anObject2, anObject3);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"functionOf:value:value:value:",{nativeFunc:nativeFunc,anObject:anObject,anObject2:anObject2,anObject3:anObject3})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "functionOf:valueWithArgs:",
protocol: "function calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc", "args"],
source: "functionOf: nativeFunc valueWithArgs: args\x0a\x09<inlineJS: '\x0a\x09\x09return Function.prototype.apply.call(nativeFunc, null, args);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return Function.prototype.apply.call(nativeFunc, null, args);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc,args){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return Function.prototype.apply.call(nativeFunc, null, args);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"functionOf:valueWithArgs:",{nativeFunc:nativeFunc,args:args})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "isNativeFunction:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isNativeFunction: anObject\x0a\x09<inlineJS: 'return typeof anObject === \x22function\x22'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof anObject === \x22function\x22"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof anObject === "function";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isNativeFunction:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "methodOf:this:",
protocol: "method calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc", "thisObject"],
source: "methodOf: nativeFunc this: thisObject\x0a\x09<inlineJS: '\x0a\x09\x09return Function.prototype.call.call(nativeFunc, thisObject);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return Function.prototype.call.call(nativeFunc, thisObject);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc,thisObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return Function.prototype.call.call(nativeFunc, thisObject);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodOf:this:",{nativeFunc:nativeFunc,thisObject:thisObject})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "methodOf:this:value:",
protocol: "method calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc", "thisObject", "anObject"],
source: "methodOf: nativeFunc this: thisObject value: anObject\x0a\x09<inlineJS: '\x0a\x09\x09return Function.prototype.call.call(nativeFunc, thisObject, anObject);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return Function.prototype.call.call(nativeFunc, thisObject, anObject);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc,thisObject,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return Function.prototype.call.call(nativeFunc, thisObject, anObject);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodOf:this:value:",{nativeFunc:nativeFunc,thisObject:thisObject,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "methodOf:this:value:value:",
protocol: "method calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc", "thisObject", "anObject", "anObject2"],
source: "methodOf: nativeFunc this: thisObject value: anObject value: anObject2\x0a\x09<inlineJS: '\x0a\x09\x09return Function.prototype.call.call(nativeFunc, thisObject,anObject,anObject2);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return Function.prototype.call.call(nativeFunc, thisObject,anObject,anObject2);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc,thisObject,anObject,anObject2){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return Function.prototype.call.call(nativeFunc, thisObject,anObject,anObject2);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodOf:this:value:value:",{nativeFunc:nativeFunc,thisObject:thisObject,anObject:anObject,anObject2:anObject2})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "methodOf:this:value:value:value:",
protocol: "method calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc", "thisObject", "anObject", "anObject2", "anObject3"],
source: "methodOf: nativeFunc this: thisObject value: anObject value: anObject2 value: anObject3\x0a\x09<inlineJS: '\x0a\x09\x09return Function.prototype.call.call(nativeFunc, thisObject,anObject,anObject2, anObject3);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return Function.prototype.call.call(nativeFunc, thisObject,anObject,anObject2, anObject3);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc,thisObject,anObject,anObject2,anObject3){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return Function.prototype.call.call(nativeFunc, thisObject,anObject,anObject2, anObject3);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodOf:this:value:value:value:",{nativeFunc:nativeFunc,thisObject:thisObject,anObject:anObject,anObject2:anObject2,anObject3:anObject3})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);

$core.addMethod(
$core.method({
selector: "methodOf:this:valueWithArgs:",
protocol: "method calling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nativeFunc", "thisObject", "args"],
source: "methodOf: nativeFunc this: thisObject valueWithArgs: args\x0a\x09<inlineJS: '\x0a\x09\x09return Function.prototype.apply.call(nativeFunc, thisObject, args);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return Function.prototype.apply.call(nativeFunc, thisObject, args);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (nativeFunc,thisObject,args){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return Function.prototype.apply.call(nativeFunc, thisObject, args);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodOf:this:valueWithArgs:",{nativeFunc:nativeFunc,thisObject:thisObject,args:args})});
//>>excludeEnd("ctx");
}; }),
$globals.NativeFunction.a$cls);


$core.addTrait("TMethodContext", "Kernel-Methods");
$core.addMethod(
$core.method({
selector: "asString",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09^ self isBlockContext\x0a\x09\x09ifTrue: [ 'a block (in ', self methodContext asString, ')' ]\x0a\x09\x09ifFalse: [ self method\x0a\x09\x09\x09ifNotNil: [ :method | method asStringForClass: self receiver class ]\x0a\x09\x09\x09ifNil: [ 'missing method ', self selector symbolPrintString ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isBlockContext", ",", "asString", "methodContext", "ifNotNil:ifNil:", "method", "asStringForClass:", "class", "receiver", "symbolPrintString", "selector"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=$self._isBlockContext();
if($core.assert($1)){
$2="a block (in ".__comma($recv($self._methodContext())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
return $recv($2).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
} else {
$3=$self._method();
if(($receiver = $3) == null || $receiver.a$nil){
return "missing method ".__comma($recv($self._selector())._symbolPrintString());
} else {
var method;
method=$receiver;
return $recv(method)._asStringForClass_($recv($self._receiver())._class());
}
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "basicReceiver",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicReceiver\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"basicReceiver",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "findContextSuchThat:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["testBlock"],
source: "findContextSuchThat: testBlock\x0a\x09\x22Search self and my sender chain for first one that satisfies `testBlock`.  \x0a\x09Answer `nil` if none satisfy\x22\x0a\x0a\x09| context |\x0a\x09\x0a\x09context := self.\x0a\x09[ context isNil] whileFalse: [\x0a\x09\x09(testBlock value: context) \x0a\x09\x09\x09ifTrue: [ ^ context ].\x0a\x09\x09context := context outerContext ].\x0a\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileFalse:", "isNil", "ifTrue:", "value:", "outerContext"]
}, function ($methodClass){ return function (testBlock){
var self=this,$self=this;
var context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
context=self;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(context)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(testBlock)._value_(context);
if($core.assert($1)){
throw $early=[context];
}
context=$recv(context)._outerContext();
return context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findContextSuchThat:",{testBlock:testBlock,context:context})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "home",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "home\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"home",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "index",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "index\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"index",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "isBlockContext",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockContext\x0a\x09\x22Block context do not have selectors.\x22\x0a\x09\x0a\x09^ self selector isNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["isNil", "selector"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._selector())._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isBlockContext",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "locals",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "locals\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"locals",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "method",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09| method lookupClass receiverClass supercall |\x0a\x09\x0a\x09self methodContext ifNil: [ ^ nil ].\x0a\x0a\x09receiverClass := self methodContext receiver class.\x0a\x09method := receiverClass lookupSelector: self methodContext selector.\x0a\x09supercall := self outerContext \x0a\x09\x09ifNil: [ false ]\x0a\x09\x09ifNotNil: [ :outer | outer supercall ].\x0a\x0a\x09^ supercall\x0a\x09\x09ifFalse: [ method ]\x0a\x09\x09ifTrue: [ method methodClass superclass lookupSelector: self methodContext selector ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "methodContext", "class", "receiver", "lookupSelector:", "selector", "ifNil:ifNotNil:", "outerContext", "supercall", "ifFalse:ifTrue:", "superclass", "methodClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var method,lookupClass,receiverClass,supercall;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5,$7,$8,$receiver;
$1=$self._methodContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodContext"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.a$nil){
return nil;
} else {
$1;
}
$3=$self._methodContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodContext"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._receiver();
receiverClass=$recv($2)._class();
$4=receiverClass;
$6=$self._methodContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["methodContext"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
method=$recv($4)._lookupSelector_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lookupSelector:"]=1;
//>>excludeEnd("ctx");
$7=$self._outerContext();
if(($receiver = $7) == null || $receiver.a$nil){
supercall=false;
} else {
var outer;
outer=$receiver;
supercall=$recv(outer)._supercall();
}
$8=supercall;
if($core.assert($8)){
return $recv($recv($recv(method)._methodClass())._superclass())._lookupSelector_($recv($self._methodContext())._selector());
} else {
return method;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method",{method:method,lookupClass:lookupClass,receiverClass:receiverClass,supercall:supercall})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "methodContext",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodContext\x0a\x09self isBlockContext ifFalse: [ ^ self ].\x0a\x09\x0a\x09^ self outerContext ifNotNil: [ :outer |\x0a\x09\x09outer methodContext ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "isBlockContext", "ifNotNil:", "outerContext", "methodContext"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$self._isBlockContext();
if(!$core.assert($1)){
return self;
}
$2=$self._outerContext();
if(($receiver = $2) == null || $receiver.a$nil){
return $2;
} else {
var outer;
outer=$receiver;
return $recv(outer)._methodContext();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodContext",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "outerContext",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "outerContext\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"outerContext",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09aStream \x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: self asString;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:", "nextPutAll:", "asString"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._printOn_.call($self,aStream));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aStream)._nextPutAll_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($self._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ (self isBlockContext and: [ self outerContext notNil ])\x0a\x09\x09ifTrue: [ self outerContext receiver ]\x0a\x09\x09ifFalse: [ self basicReceiver ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "and:", "isBlockContext", "notNil", "outerContext", "receiver", "basicReceiver"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($self._isBlockContext())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$self._outerContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["outerContext"]=1;
//>>excludeEnd("ctx");
return $recv($2)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return $recv($self._outerContext())._receiver();
} else {
return $self._basicReceiver();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "selector",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"selector",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "sendIndexes",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendIndexes\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"sendIndexes",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);

$core.addMethod(
$core.method({
selector: "supercall",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "supercall\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"supercall",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TMethodContext);


$core.addClass("Timeout", $globals.Object, ["rawTimeout"], "Kernel-Methods");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Timeout.comment="I am wrapping the returns from `set{Timeout,Interval}`.\x0a\x0a## Motivation\x0a\x0aNumber suffices in browsers, but node.js returns an object.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "clearInterval",
protocol: "timeout/interval",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clearInterval\x0a\x09<inlineJS: '\x0a\x09\x09var interval = $self.rawTimeout;\x0a\x09\x09clearInterval(interval);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var interval = $self.rawTimeout;\x0a\x09\x09clearInterval(interval);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var interval = $self.rawTimeout;
		clearInterval(interval);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearInterval",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Timeout);

$core.addMethod(
$core.method({
selector: "clearTimeout",
protocol: "timeout/interval",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clearTimeout\x0a\x09<inlineJS: '\x0a\x09\x09var timeout = $self.rawTimeout;\x0a\x09\x09clearTimeout(timeout);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var timeout = $self.rawTimeout;\x0a\x09\x09clearTimeout(timeout);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var timeout = $self.rawTimeout;
		clearTimeout(timeout);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearTimeout",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Timeout);

$core.addMethod(
$core.method({
selector: "rawTimeout:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "rawTimeout: anObject\x0a\x09rawTimeout := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.rawTimeout=anObject;
return self;

}; }),
$globals.Timeout);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "on: anObject\x0a\x09^ self new rawTimeout: anObject; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["rawTimeout:", "new", "yourself"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._rawTimeout_(anObject);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Timeout.a$cls);

$core.setTraitComposition([{trait: $globals.TMethodContext}], $globals.MethodContext);

});
