define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Kernel-Promises");
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("Promise", $globals.Object, "Kernel-Promises");

$core.addMethod(
$core.method({
selector: "all:",
protocol: "composites",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "all: aCollection\x0a\x22Returns a Promise resolved with results of sub-promises.\x22\x0a<inlineJS: 'return Promise.all($recv(aCollection)._asArray())'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Promise.all($recv(aCollection)._asArray())"]]],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Promise.all($recv(aCollection)._asArray());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"all:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "any:",
protocol: "composites",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "any: aCollection\x0a\x22Returns a Promise resolved with first result of sub-promises.\x22\x0a<inlineJS: 'return Promise.race($recv(aCollection)._asArray())'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Promise.race($recv(aCollection)._asArray())"]]],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Promise.race($recv(aCollection)._asArray());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"any:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "delayMilliseconds:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "delayMilliseconds: aNumber\x0a\x09^ self new: [ :model | [ model value: nil ] valueWithTimeout: aNumber ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:", "valueWithTimeout:", "value:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._new_((function(model){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(model)._value_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_(aNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"delayMilliseconds:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "forBlock:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "forBlock: aBlock\x0a\x22Returns a Promise that is resolved with the value of aBlock,\x0aand rejected if error happens while evaluating aBlock.\x22\x0a\x09^ self new then: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["then:", "new"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._then_(aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forBlock:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x22Returns a dumb Promise resolved with nil.\x22\x0a<inlineJS: 'return Promise.resolve()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Promise.resolve()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Promise.resolve();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "new:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "new: aBlock\x0a\x22Returns a Promise that is eventually resolved or rejected.\x0aPass a block that is called with one argument, model.\x0aYou should call model value: ... to resolve the promise\x0aand model signal: ... to reject the promise.\x0aIf error happens during run of the block,\x0apromise is rejected with that error as well.\x22\x0a<inlineJS: 'return new Promise(function (resolve, reject) {\x0a    var model = {\x0a\x09\x09value: resolve,\x0a\x09\x09signal: reject,\x0a\x09\x09do: function (aBlock) { resolve($self._forBlock_(aBlock)); }\x0a\x09};\x0a    aBlock._value_(model);\x0a})'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return new Promise(function (resolve, reject) {\x0a    var model = {\x0a\x09\x09value: resolve,\x0a\x09\x09signal: reject,\x0a\x09\x09do: function (aBlock) { resolve($self._forBlock_(aBlock)); }\x0a\x09};\x0a    aBlock._value_(model);\x0a})"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new Promise(function (resolve, reject) {
    var model = {
		value: resolve,
		signal: reject,
		do: function (aBlock) { resolve($self._forBlock_(aBlock)); }
	};
    aBlock._value_(model);
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "signal:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "signal: anObject\x0a\x22Returns a Promise rejected with anObject.\x22\x0a<inlineJS: 'return $recv(anObject)._in_(function (x) {return Promise.reject(x)})'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $recv(anObject)._in_(function (x) {return Promise.reject(x)})"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anObject)._in_(function (x) {return Promise.reject(x)});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signal:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Promise.a$cls);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject\x0a\x22Returns a Promise resolved with anObject.\x22\x0a<inlineJS: 'return $recv(anObject)._in_(function (x) {return Promise.resolve(x)})'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $recv(anObject)._in_(function (x) {return Promise.resolve(x)})"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anObject)._in_(function (x) {return Promise.resolve(x)});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Promise.a$cls);


$core.addTrait("TThenable", "Kernel-Promises");
$core.addMethod(
$core.method({
selector: "catch:",
protocol: "promises",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "catch: aBlock\x0a<inlineJS: 'return self.then(null, function (err) { return aBlock._value_(err); })'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.then(null, function (err) { return aBlock._value_(err); })"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.then(null, function (err) { return aBlock._value_(err); });
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"catch:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "isThenable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isThenable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "on:do:",
protocol: "promises",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a<inlineJS: 'return self.then(null, function (err) {\x0a    if (err._isKindOf_(aClass)) return aBlock._value_(err);\x0a    else throw err;\x0a})'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.then(null, function (err) {\x0a    if (err._isKindOf_(aClass)) return aBlock._value_(err);\x0a    else throw err;\x0a})"]]],
messageSends: []
}, function ($methodClass){ return function (aClass,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.then(null, function (err) {
    if (err._isKindOf_(aClass)) return aBlock._value_(err);
    else throw err;
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:",{aClass:aClass,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "on:do:catch:",
protocol: "promises",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock", "anotherBlock"],
source: "on: aClass do: aBlock catch: anotherBlock\x0a\x09^ (self on: aClass do: aBlock) catch: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["catch:", "on:do:"]
}, function ($methodClass){ return function (aClass,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._on_do_(aClass,aBlock))._catch_(anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:catch:",{aClass:aClass,aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "then:",
protocol: "promises",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray"],
source: "then: aBlockOrArray\x0a\x22Accepts a block or array of blocks.\x0aEach of blocks in the array or the singleton one is\x0aused in .then call to a promise, to accept a result\x0aand transform it to the result for the next one.\x0aIn case a block has more than one argument\x0aand result is an array, first n-1 elements of the array\x0aare put into additional arguments beyond the first.\x0aThe first argument always contains the result as-is.\x22\x0a<inlineJS: '\x0avar array = Array.isArray(aBlockOrArray) ? aBlockOrArray : [aBlockOrArray];\x0areturn array.reduce(function (soFar, aBlock) {\x0a    return soFar.then(typeof aBlock === \x22function\x22 && aBlock.length > 1 ?\x0a       function (result) {\x0a            if (Array.isArray(result)) {\x0a                return aBlock._valueWithPossibleArguments_([result].concat(result.slice(0, aBlock.length-1)));\x0a            } else {\x0a                return aBlock._value_(result);\x0a            }\x0a        } :\x0a        function (result) {\x0a            return aBlock._value_(result);\x0a        }\x0a    );\x0a}, self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0avar array = Array.isArray(aBlockOrArray) ? aBlockOrArray : [aBlockOrArray];\x0areturn array.reduce(function (soFar, aBlock) {\x0a    return soFar.then(typeof aBlock === \x22function\x22 && aBlock.length > 1 ?\x0a       function (result) {\x0a            if (Array.isArray(result)) {\x0a                return aBlock._valueWithPossibleArguments_([result].concat(result.slice(0, aBlock.length-1)));\x0a            } else {\x0a                return aBlock._value_(result);\x0a            }\x0a        } :\x0a        function (result) {\x0a            return aBlock._value_(result);\x0a        }\x0a    );\x0a}, self)"]]],
messageSends: []
}, function ($methodClass){ return function (aBlockOrArray){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

var array = Array.isArray(aBlockOrArray) ? aBlockOrArray : [aBlockOrArray];
return array.reduce(function (soFar, aBlock) {
    return soFar.then(typeof aBlock === "function" && aBlock.length > 1 ?
       function (result) {
            if (Array.isArray(result)) {
                return aBlock._valueWithPossibleArguments_([result].concat(result.slice(0, aBlock.length-1)));
            } else {
                return aBlock._value_(result);
            }
        } :
        function (result) {
            return aBlock._value_(result);
        }
    );
}, self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:",{aBlockOrArray:aBlockOrArray})});
//>>excludeEnd("ctx");
}; }),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "then:catch:",
protocol: "promises",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray", "anotherBlock"],
source: "then: aBlockOrArray catch: anotherBlock\x0a\x09^ (self then: aBlockOrArray) catch: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["catch:", "then:"]
}, function ($methodClass){ return function (aBlockOrArray,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._then_(aBlockOrArray))._catch_(anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:catch:",{aBlockOrArray:aBlockOrArray,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "then:on:do:",
protocol: "promises",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray", "aClass", "aBlock"],
source: "then: aBlockOrArray on: aClass do: aBlock\x0a\x09^ (self then: aBlockOrArray) on: aClass do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:", "then:"]
}, function ($methodClass){ return function (aBlockOrArray,aClass,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._then_(aBlockOrArray))._on_do_(aClass,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:on:do:",{aBlockOrArray:aBlockOrArray,aClass:aClass,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TThenable);

$core.addMethod(
$core.method({
selector: "then:on:do:catch:",
protocol: "promises",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray", "aClass", "aBlock", "anotherBlock"],
source: "then: aBlockOrArray on: aClass do: aBlock catch: anotherBlock\x0a\x09^ ((self then: aBlockOrArray) on: aClass do: aBlock) catch: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["catch:", "on:do:", "then:"]
}, function ($methodClass){ return function (aBlockOrArray,aClass,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._then_(aBlockOrArray))._on_do_(aClass,aBlock))._catch_(anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:on:do:catch:",{aBlockOrArray:aBlockOrArray,aClass:aClass,aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TThenable);

$core.setTraitComposition([{trait: $globals.TThenable}], $globals.Promise);

});
