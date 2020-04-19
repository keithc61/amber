define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Kernel-Collections");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("Association", $globals.Object, ["key", "value"], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Association.comment="I represent a pair of associated objects, a key and a value. My instances can serve as entries in a dictionary.\x0a\x0aInstances can be created with the class-side method `#key:value:`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAssociation"],
source: "= anAssociation\x0a\x09^ self class = anAssociation class and: [\x0a\x09\x09self key = anAssociation key and: [\x0a\x09\x09self value = anAssociation value ]]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "=", "class", "key", "value"]
}, function ($methodClass){ return function (anAssociation){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv([$recv([$self._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(anAssociation)._class())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$recv([$self._key()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["key"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(anAssociation)._key())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["="]=2
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv([$self._value()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["value"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(anAssociation)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["and:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anAssociation:anAssociation})});
//>>excludeEnd("ctx");
}; }),
$globals.Association);

$core.addMethod(
$core.method({
selector: "key",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key\x0a\x09^ key",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.key;

}; }),
$globals.Association);

$core.addMethod(
$core.method({
selector: "key:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "key: aKey\x0a\x09key := aKey",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aKey){
var self=this,$self=this;
$self.key=aKey;
return self;

}; }),
$globals.Association);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09self key printOn: aStream.\x0a\x09aStream nextPutAll: ' -> '.\x0a\x09self value printOn: aStream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:", "key", "nextPutAll:", "value"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($self._key())._printOn_(aStream)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printOn:"]=1
//>>excludeEnd("ctx");
][0];
$recv(aStream)._nextPutAll_(" -> ");
$recv($self._value())._printOn_(aStream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Association);

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
$globals.Association);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "value: aValue\x0a\x09value := aValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aValue){
var self=this,$self=this;
$self.value=aValue;
return self;

}; }),
$globals.Association);


$core.addMethod(
$core.method({
selector: "key:value:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aValue"],
source: "key: aKey value: aValue\x0a\x09\x09^ self new\x0a\x09\x09key: aKey;\x0a\x09\x09value: aValue;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["key:", "new", "value:", "yourself"]
}, function ($methodClass){ return function (aKey,aValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._key_(aKey);
$recv($1)._value_(aValue);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"key:value:",{aKey:aKey,aValue:aValue})});
//>>excludeEnd("ctx");
}; }),
$globals.Association.a$cls);


$core.addClass("BucketStore", $globals.Object, ["buckets", "hashBlock"], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BucketStore.comment="I am an helper class for hash-based stores.\x0a\x0aI hold buckets which are selected by a hash, specified using `#hashBlock:`.\x0aThe hash can be any object, and\x0ait is used as a JS property (that is, in ES5\x0aits toString() value counts).\x0a\x0a## API\x0aI maintain a list of buckets. Client code can use this API:\x0a - `#bucketOfElement:` (to ask a bucket for element, I can return JS null if n/a)\x0a - `#do:` (to enumerate all elements of all buckets)\x0a - `#removeAll` (to remove all buckets)\x0a\x0aClient code itself should add/remove elements\x0ain a bucket. The `nil` object should not be put into any bucket.\x0a\x0aTypes of buckets are the responsibility of subclasses via `#newBucket`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "bucketOfElement:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "bucketOfElement: anObject\x0a\x09<inlineJS: '\x0a\x09\x09var hash = $self.hashBlock(anObject);\x0a\x09\x09if (!hash) return null;\x0a\x09\x09var buckets = $self.buckets,\x0a\x09\x09\x09bucket = buckets[hash];\x0a\x09\x09if (!bucket) { bucket = buckets[hash] = $self._newBucket(); }\x0a\x09\x09return bucket;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var hash = $self.hashBlock(anObject);\x0a\x09\x09if (!hash) return null;\x0a\x09\x09var buckets = $self.buckets,\x0a\x09\x09\x09bucket = buckets[hash];\x0a\x09\x09if (!bucket) { bucket = buckets[hash] = $self._newBucket(); }\x0a\x09\x09return bucket;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var hash = $self.hashBlock(anObject);
		if (!hash) return null;
		var buckets = $self.buckets,
			bucket = buckets[hash];
		if (!bucket) { bucket = buckets[hash] = $self._newBucket(); }
		return bucket;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bucketOfElement:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.BucketStore);

$core.addMethod(
$core.method({
selector: "do:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09var buckets = $self.buckets;\x0a\x09\x09var keys = Object.keys(buckets);\x0a\x09\x09for (var i = 0; i < keys.length; ++i) { buckets[keys[i]]._do_(aBlock); }\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var buckets = $self.buckets;\x0a\x09\x09var keys = Object.keys(buckets);\x0a\x09\x09for (var i = 0; i < keys.length; ++i) { buckets[keys[i]]._do_(aBlock); }\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var buckets = $self.buckets;
		var keys = Object.keys(buckets);
		for (var i = 0; i < keys.length; ++i) { buckets[keys[i]]._do_(aBlock); }
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.BucketStore);

$core.addMethod(
$core.method({
selector: "hashBlock:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "hashBlock: aBlock\x0a\x09hashBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
$self.hashBlock=aBlock;
return self;

}; }),
$globals.BucketStore);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self removeAll",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "removeAll"]
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
$self._removeAll();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BucketStore);

$core.addMethod(
$core.method({
selector: "newBucket",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newBucket\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"newBucket",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BucketStore);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09<inlineJS: '$self.buckets = Object.create(null);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["$self.buckets = Object.create(null);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.buckets = Object.create(null);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.BucketStore);


$core.addMethod(
$core.method({
selector: "hashBlock:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "hashBlock: aBlock\x0a\x09^ self new\x0a\x09\x09hashBlock: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hashBlock:", "new", "yourself"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._hashBlock_(aBlock);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hashBlock:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.BucketStore.a$cls);


$core.addClass("ArrayBucketStore", $globals.BucketStore, [], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ArrayBucketStore.comment="I am a concrete `BucketStore` with buckets being instance of `Array`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "newBucket",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newBucket\x0a\x09^ #()",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return [];

}; }),
$globals.ArrayBucketStore);



$core.addClass("Collection", $globals.Object, [], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Collection.comment="I am the abstract superclass of all classes that represent a group of elements.\x0a\x0aI provide a set of useful methods to the Collection hierarchy such as enumerating and converting methods.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: ",",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: ", aCollection\x0a\x09^ self copy\x0a\x09\x09addAll: aCollection;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addAll:", "copy", "yourself"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._copy();
$recv($1)._addAll_(aCollection);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,",",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "add:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "addAll:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "addAll: aCollection\x0a\x09aCollection do: [ :each |\x0a\x09\x09self add: each ].\x0a\x09^ aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "add:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return aCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAll:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "allSatisfy:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "allSatisfy: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns false for any element return false.\x0a\x09Otherwise return true.\x22\x0a\x0a\x09self do: [ :each | (aBlock value: each) ifFalse: [ ^ false ] ].\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "ifFalse:", "value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(!$core.assert($recv(aBlock)._value_(each))){
throw $early=[false];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allSatisfy:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "anyOne",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "anyOne\x0a\x09\x22Answer a representative sample of the receiver. This method can\x0a\x09be helpful when needing to preinfer the nature of the contents of \x0a\x09semi-homogeneous collections.\x22\x0a\x0a\x09self ifEmpty: [ self error: 'Collection is empty' ].\x0a\x09self do: [ :each | ^ each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:", "error:", "do:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$self._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._error_("Collection is empty");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$self._do_((function(each){
throw $early=[each];

}));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"anyOne",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "anySatisfy:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "anySatisfy: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns true for any element return true.\x0a\x09Otherwise return false.\x22\x0a\x0a\x09self do: [ :each | (aBlock value: each) ifTrue: [ ^ true ] ].\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "ifTrue:", "value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(aBlock)._value_(each))){
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
}, function($ctx1) {$ctx1.fill(self,"anySatisfy:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "asArray",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asArray\x0a\x09^ Array withAll: self",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withAll:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Array)._withAll_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asArray",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09^ self asArray collect: [ :each | each asJavaScriptObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "asArray", "asJavaScriptObject"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._asArray())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._asJavaScriptObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptObject",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "asOrderedCollection",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asOrderedCollection\x0a\x09^ self asArray",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asArray"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._asArray();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asOrderedCollection",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "asSet",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSet\x0a\x09^ Set withAll: self",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withAll:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Set)._withAll_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSet",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "collect:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09stream nextPut: (aBlock value: each) ].\x0a\x09^ stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["writeStream", "new", "class", "do:", "nextPut:", "value:", "contents"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
stream=$recv($recv($self._class())._new())._writeStream();
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_($recv(aBlock)._value_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(stream)._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "copyEmpty",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "copyEmpty\x0a\x09^ self class new",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyEmpty",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "copyWith:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "copyWith: anObject\x0a\x09^ self copy add: anObject; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "copy", "yourself"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._copy();
$recv($1)._add_(anObject);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWith:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "copyWithAll:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "copyWithAll: aCollection\x0a\x09self deprecatedAPI: 'Use #, instead.'.\x0a\x09^ self, aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["deprecatedAPI:", ","]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._deprecatedAPI_("Use #, instead.");
return $self.__comma(aCollection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWithAll:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "copyWithout:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "copyWithout: anObject\x0a\x09\x22Answer a copy of the receiver that does not contain\x0a\x09any occurrences of anObject.\x22\x0a\x0a\x09^ self reject: [ :each | each = anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reject:", "="]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWithout:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "copyWithoutAll:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "copyWithoutAll: aCollection\x0a\x09\x22Answer a copy of the receiver that does not contain any elements\x0a\x09equal to those in aCollection.\x22\x0a\x0a\x09^ self reject: [ :each | aCollection includes: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reject:", "includes:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aCollection)._includes_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWithoutAll:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09^ self collect: [ :each | each deepCopy ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:", "deepCopy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._deepCopy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "detect:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "detect: aBlock\x0a\x09^ self detect: aBlock ifNone: [ self errorNotFound ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["detect:ifNone:", "errorNotFound"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._detect_ifNone_(aBlock,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._errorNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detect:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "detect:ifNone:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09self do: [ :each | (aBlock value: each) ifTrue: [ ^each ] ].\x0a\x09^ anotherBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "ifTrue:", "value:", "value"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(aBlock)._value_(each))){
throw $early=[each];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(anotherBlock)._value();
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "do:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "do:separatedBy:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "do: aBlock separatedBy: anotherBlock\x0a\x09| actionBeforeElement |\x0a\x09actionBeforeElement := [ actionBeforeElement := anotherBlock ].\x0a\x09self do: [ :each |\x0a\x09\x09actionBeforeElement value.\x0a\x09\x09aBlock value: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "value", "value:"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
var actionBeforeElement;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
actionBeforeElement=(function(){
actionBeforeElement=anotherBlock;
return actionBeforeElement;

});
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(actionBeforeElement)._value();
return $recv(aBlock)._value_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:separatedBy:",{aBlock:aBlock,anotherBlock:anotherBlock,actionBeforeElement:actionBeforeElement})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "errorNotFound",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "errorNotFound\x0a\x09self error: 'Object is not in the collection'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("Object is not in the collection");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorNotFound",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "ifEmpty:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifEmpty: aBlock\x0a\x09\x22Evaluate the given block with the receiver as argument, answering its value if the receiver is empty, otherwise answer the receiver. \x0a\x09Note that the fact that this method returns its argument in case the receiver is not empty allows one to write expressions like the following ones: \x0a\x09\x09self classifyMethodAs:\x0a\x09\x09\x09(myProtocol ifEmpty: ['As yet unclassified'])\x22\x0a\x09^ self isEmpty\x0a\x09\x09ifTrue: \x22aBlock\x22 [ aBlock value ]\x0a\x09\x09ifFalse: [ self ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isEmpty", "value"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._isEmpty())){
return $recv(aBlock)._value();
} else {
return self;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifEmpty:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "ifEmpty:ifNotEmpty:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifEmpty: aBlock ifNotEmpty: anotherBlock\x0a\x09^ self isEmpty\x0a\x09\x09ifTrue: \x22aBlock\x22 [ aBlock value ]\x0a\x09\x09ifFalse: [ anotherBlock value: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isEmpty", "value", "value:"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._isEmpty())){
return $recv(aBlock)._value();
} else {
return $recv(anotherBlock)._value_(self);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifEmpty:ifNotEmpty:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "ifNotEmpty:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifNotEmpty: aBlock\x0a\x09^ self notEmpty\x0a\x09\x09ifTrue: [ aBlock value: self ]\x0a\x09\x09ifFalse: [ self ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "notEmpty", "value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._notEmpty())){
return $recv(aBlock)._value_(self);
} else {
return self;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotEmpty:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "ifNotEmpty:ifEmpty:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "ifNotEmpty: aBlock ifEmpty: anotherBlock\x0a\x09^ self notEmpty\x0a\x09\x09ifTrue: [ aBlock value: self ]\x0a\x09\x09ifFalse: \x22anotherBlock\x22 [ anotherBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "notEmpty", "value:", "value"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._notEmpty())){
return $recv(aBlock)._value_(self);
} else {
return $recv(anotherBlock)._value();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifNotEmpty:ifEmpty:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "includes:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "includes: anObject\x0a\x09^ self anySatisfy: [ :each | each = anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["anySatisfy:", "="]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each).__eq(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "inject:into:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "inject: anObject into: aBlock\x0a\x09| result |\x0a\x09result := anObject.\x0a\x09self do: [ :each |\x0a\x09\x09result := aBlock value: result value: each ].\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "value:value:"]
}, function ($methodClass){ return function (anObject,aBlock){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=anObject;
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=$recv(aBlock)._value_value_(result,each);
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inject:into:",{anObject:anObject,aBlock:aBlock,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "intersection:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "intersection: aCollection\x0a\x09\x22Answer the set theoretic intersection of two collections.\x22\x0a\x0a\x09| set outputSet |\x0a\x09\x0a\x09set := self asSet.\x0a\x09outputSet := Set new.\x0a\x09\x0a\x09aCollection do: [ :each |\x0a\x09\x09((set includes: each) and: [ (outputSet includes: each) not ])\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09outputSet add: each ]].\x0a\x09\x09\x0a\x09^ self class withAll: outputSet asArray",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSet", "new", "do:", "ifTrue:", "and:", "includes:", "not", "add:", "withAll:", "class", "asArray"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
var set,outputSet;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
set=$self._asSet();
outputSet=$recv($globals.Set)._new();
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv([$recv(set)._includes_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["includes:"]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(outputSet)._includes_(each))._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
})))){
return $recv(outputSet)._add_(each);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv($self._class())._withAll_($recv(outputSet)._asArray());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"intersection:",{aCollection:aCollection,set:set,outputSet:outputSet})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x09^ self size = 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=", "size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._size()).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "noneSatisfy:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "noneSatisfy: aBlock\x0a\x09\x22Evaluate aBlock with the elements of the receiver.\x0a\x09If aBlock returns false for all elements return true.\x0a\x09Otherwise return false\x22\x0a\x0a\x09self do: [ :item | (aBlock value: item) ifTrue: [ ^ false ] ].\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "ifTrue:", "value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$self._do_((function(item){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(aBlock)._value_(item))){
throw $early=[false];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({item:item},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"noneSatisfy:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "notEmpty",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notEmpty\x0a\x09^ self isEmpty not",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["not", "isEmpty"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._isEmpty())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notEmpty",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "occurrencesOf:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "occurrencesOf: anObject\x0a\x09\x22Answer how many of the receiver's elements are equal to anObject.\x22\x0a\x0a\x09| tally |\x0a\x09tally := 0.\x0a\x09self do: [ :each | anObject = each ifTrue: [ tally := tally + 1 ]].\x0a\x09^ tally",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "ifTrue:", "=", "+"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
var tally;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tally=(0);
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(anObject).__eq(each))){
tally=$recv(tally).__plus((1));
return tally;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return tally;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"occurrencesOf:",{anObject:anObject,tally:tally})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "putOn:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "putOn: aStream\x0a\x09self do: [ :each | each putOn: aStream ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "putOn:"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._putOn_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "reject:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "reject: aBlock\x0a\x09^ self select: [ :each | (aBlock value: each) = false ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["select:", "=", "value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aBlock)._value_(each)).__eq(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reject:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "remove:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "remove: anObject\x0a\x09^ self remove: anObject ifAbsent: [ self errorNotFound ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["remove:ifAbsent:", "errorNotFound"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._remove_ifAbsent_(anObject,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._errorNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "remove:ifAbsent:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (anObject,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"removeAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "select:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "select: aBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09(aBlock value: each) ifTrue: [\x0a\x09\x09stream nextPut: each ] ].\x0a\x09^ stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "value:", "nextPut:", "contents"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
stream=$recv($recv($self._class())._new())._writeStream();
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(aBlock)._value_(each))){
return $recv(stream)._nextPut_(each);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(stream)._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "select:thenCollect:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selectBlock", "collectBlock"],
source: "select: selectBlock thenCollect: collectBlock\x0a\x09| stream |\x0a\x09stream := self class new writeStream.\x0a\x09self do: [ :each |\x0a\x09\x09(selectBlock value: each) ifTrue: [\x0a\x09\x09stream nextPut: (collectBlock value: each) ] ].\x0a\x09^ stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["writeStream", "new", "class", "do:", "ifTrue:", "value:", "nextPut:", "contents"]
}, function ($methodClass){ return function (selectBlock,collectBlock){
var self=this,$self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
stream=$recv($recv($self._class())._new())._writeStream();
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv(selectBlock)._value_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:"]=1
//>>excludeEnd("ctx");
][0])){
return $recv(stream)._nextPut_($recv(collectBlock)._value_(each));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(stream)._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:thenCollect:",{selectBlock:selectBlock,collectBlock:collectBlock,stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09^ self collect: [ :each | each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["collect:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._collect_((function(each){
return each;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "shortenedPrintString",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shortenedPrintString\x0a\x09^ self size <= 1\x0a\x09\x09ifTrue: [ self printString ]\x0a\x09\x09ifFalse: [ (self copyEmpty copyWith: self anyOne) printString, ' ... ', (self size - 1) asString, ' more items' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "<=", "size", "printString", ",", "copyWith:", "copyEmpty", "anyOne", "asString", "-"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__lt_eq((1)))){
return [$self._printString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printString"]=1
//>>excludeEnd("ctx");
][0];
} else {
return [$recv([$recv($recv($recv($recv($self._copyEmpty())._copyWith_($self._anyOne()))._printString()).__comma(" ... ")).__comma($recv($recv($self._size()).__minus((1)))._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(" more items")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shortenedPrintString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "single",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "single\x0a\x09\x22Answer a single element.\x0a\x09Raise an error if collection holds less or more than one element.\x22\x0a\x0a\x09self ifEmpty: [ self error: 'Collection is empty' ].\x0a\x09self size > 1 ifTrue: [ self error: 'Collection holds more than one element' ].\x0a\x09^ self anyOne",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifEmpty:", "error:", "ifTrue:", ">", "size", "anyOne"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$self._error_("Collection is empty")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["error:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($recv($self._size()).__gt((1)))){
$self._error_("Collection holds more than one element");
}
return $self._anyOne();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"single",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "size",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"size",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);


$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Returns a tag or general category for this class.\x0a\x09Typically used to help tools do some reflection.\x0a\x09Helios, for example, uses this to decide what icon the class should display.\x22\x0a\x09\x0a\x09^ 'collection'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "collection";

}; }),
$globals.Collection.a$cls);

$core.addMethod(
$core.method({
selector: "new:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "new: anInteger\x0a\x09^ self new",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new"]
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection.a$cls);

$core.addMethod(
$core.method({
selector: "with:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "with: anObject\x0a\x09\x09^ self new\x0a\x09\x09add: anObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "new", "yourself"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._add_(anObject);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection.a$cls);

$core.addMethod(
$core.method({
selector: "with:with:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anotherObject"],
source: "with: anObject with: anotherObject\x0a\x09\x09^ self new\x0a\x09\x09add: anObject;\x0a\x09\x09add: anotherObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "new", "yourself"]
}, function ($methodClass){ return function (anObject,anotherObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
[$recv($1)._add_(anObject)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._add_(anotherObject);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:with:",{anObject:anObject,anotherObject:anotherObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection.a$cls);

$core.addMethod(
$core.method({
selector: "with:with:with:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstObject", "secondObject", "thirdObject"],
source: "with: firstObject with: secondObject with: thirdObject\x0a\x09\x09^ self new\x0a\x09\x09add: firstObject;\x0a\x09\x09add: secondObject;\x0a\x09\x09add: thirdObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "new", "yourself"]
}, function ($methodClass){ return function (firstObject,secondObject,thirdObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
[$recv($1)._add_(firstObject)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._add_(secondObject)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=2
//>>excludeEnd("ctx");
][0];
$recv($1)._add_(thirdObject);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:with:with:",{firstObject:firstObject,secondObject:secondObject,thirdObject:thirdObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection.a$cls);

$core.addMethod(
$core.method({
selector: "withAll:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09\x09^ self new\x0a\x09\x09addAll: aCollection;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addAll:", "new", "yourself"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._addAll_(aCollection);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withAll:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection.a$cls);


$core.addClass("AssociativeCollection", $globals.Collection, [], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AssociativeCollection.comment="I am a base class for object-indexed collections (Dictionary et.al.).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAssociativeCollection"],
source: "= anAssociativeCollection\x0a\x09| comparisons |\x0a\x09self class = anAssociativeCollection class ifFalse: [ ^ false ].\x0a\x09self size = anAssociativeCollection size ifFalse: [ ^ false ].\x0a\x09comparisons := OrderedCollection new.\x0a\x09(self associations allSatisfy: [ :each |\x0a\x09\x09anAssociativeCollection at: each key\x0a\x09\x09\x09ifPresent: [ :otherValue | comparisons add: { each value. otherValue }. true ]\x0a\x09\x09\x09ifAbsent: [ false ] ]) ifFalse: [ ^ false ].\x0a\x09^ comparisons allSatisfy: [ :each | each first = each second ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "=", "class", "size", "new", "allSatisfy:", "associations", "at:ifPresent:ifAbsent:", "key", "add:", "value", "first", "second"]
}, function ($methodClass){ return function (anAssociativeCollection){
var self=this,$self=this;
var comparisons;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert([$recv([$self._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(anAssociativeCollection)._class())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])){
return false;
}
if(!$core.assert([$recv([$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(anAssociativeCollection)._size())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=2
//>>excludeEnd("ctx");
][0])){
return false;
}
comparisons=$recv($globals.OrderedCollection)._new();
if(!$core.assert([$recv($self._associations())._allSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anAssociativeCollection)._at_ifPresent_ifAbsent_($recv(each)._key(),(function(otherValue){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(comparisons)._add_([$recv(each)._value(),otherValue]);
return true;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({otherValue:otherValue},$ctx2,4)});
//>>excludeEnd("ctx");
}),(function(){
return false;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["allSatisfy:"]=1
//>>excludeEnd("ctx");
][0])){
return false;
}
return $recv(comparisons)._allSatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._first()).__eq($recv(each)._second());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{anAssociativeCollection:anAssociativeCollection,comparisons:comparisons})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "add:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAssociation"],
source: "add: anAssociation\x0a\x09self at: anAssociation key put: anAssociation value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "key", "value"]
}, function ($methodClass){ return function (anAssociation){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._at_put_($recv(anAssociation)._key(),$recv(anAssociation)._value());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anAssociation:anAssociation})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "addAll:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAssociativeCollection"],
source: "addAll: anAssociativeCollection\x0a\x09super addAll: anAssociativeCollection associations.\x0a\x09^ anAssociativeCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addAll:", "associations"]
}, function ($methodClass){ return function (anAssociativeCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._addAll_.call($self,$recv(anAssociativeCollection)._associations()))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return anAssociativeCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAll:",{anAssociativeCollection:anAssociativeCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "asDictionary",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asDictionary\x0a\x09^ Dictionary from: self associations",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["from:", "associations"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Dictionary)._from_($self._associations());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asDictionary",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "asHashedCollection",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asHashedCollection\x0a\x09^ HashedCollection from: self associations",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["from:", "associations"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.HashedCollection)._from_($self._associations());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asHashedCollection",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "asJavaScriptObject",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptObject\x0a\x09| hash |\x0a\x09hash := HashedCollection new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09hash at: key put: value asJavaScriptObject ].\x0a\x09^ hash",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "keysAndValuesDo:", "at:put:", "asJavaScriptObject"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var hash;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
hash=$recv($globals.HashedCollection)._new();
$self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(hash)._at_put_(key,$recv(value)._asJavaScriptObject());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return hash;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptObject",{hash:hash})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "associations",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "associations\x0a\x09| associations |\x0a\x09associations := #().\x0a\x09self associationsDo: [ :each | associations add: each ].\x0a\x09^ associations",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["associationsDo:", "add:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var associations;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
associations=[];
$self._associationsDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(associations)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return associations;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"associations",{associations:associations})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "associationsDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "associationsDo: aBlock\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09aBlock value: (Association key: key value: value) ]",
referencedClasses: ["Association"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["keysAndValuesDo:", "value:", "key:value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_($recv($globals.Association)._key_value_(key,value));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"associationsDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock", "anotherBlock"],
source: "at: aKey ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Lookup the given key in the receiver.\x0a\x09If it is present, answer the value of evaluating the oneArgBlock \x0a\x09with the value associated with the key, otherwise answer the value \x0a\x09of absentBlock.\x22\x0a\x09\x0a\x09^ (self includesKey: aKey)\x0a\x09\x09ifTrue: [ aBlock value: (self at: aKey) ]\x0a\x09\x09ifFalse: [ anotherBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "includesKey:", "value:", "at:", "value"]
}, function ($methodClass){ return function (aKey,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._includesKey_(aKey))){
return $recv(aBlock)._value_($self._at_(aKey));
} else {
return $recv(anotherBlock)._value();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aKey:aKey,aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "collect:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09newDict at: key put: (aBlock value: value) ].\x0a\x09^ newDict",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var newDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newDict=$recv($self._class())._new();
$self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newDict)._at_put_(key,$recv(aBlock)._value_(value));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return newDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,newDict:newDict})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09copy at: key put: value deepCopy ].\x0a\x09^ copy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "deepCopy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var copy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
copy=$recv($self._class())._new();
$self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(copy)._at_put_(key,$recv(value)._deepCopy());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return copy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{copy:copy})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "detect:ifNone:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09^ self values detect: aBlock ifNone: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["detect:ifNone:", "values"]
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._values())._detect_ifNone_(aBlock,anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "do:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09self valuesDo: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valuesDo:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._valuesDo_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "includes:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "includes: anObject\x0a\x09^ self values includes: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["includes:", "values"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._values())._includes_(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "includesKey:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "includesKey: aKey\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "indexOf:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09^ self keys \x0a\x09\x09detect: [ :each | (self at: each) = anObject ] \x0a\x09\x09ifNone: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["detect:ifNone:", "keys", "=", "at:"]
}, function ($methodClass){ return function (anObject,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._keys())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._at_(each)).__eq(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "keyAtValue:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "keyAtValue: anObject\x0a\x09^ self keyAtValue: anObject ifAbsent: [ self errorNotFound ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["keyAtValue:ifAbsent:", "errorNotFound"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._keyAtValue_ifAbsent_(anObject,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._errorNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyAtValue:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "keyAtValue:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "keyAtValue: anObject ifAbsent: aBlock\x0a\x09^ self indexOf: anObject ifAbsent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["indexOf:ifAbsent:"]
}, function ($methodClass){ return function (anObject,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._indexOf_ifAbsent_(anObject,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyAtValue:ifAbsent:",{anObject:anObject,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "keys",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"keys",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "keysAndValuesDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09self keysDo: [ :each |\x0a\x09\x09aBlock value: each value: (self at: each) ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["keysDo:", "value:value:", "at:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._keysDo_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_value_(each,$self._at_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "keysDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self associations\x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' , ' ].\x0a\x09aStream nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:", "associations"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._printOn_.call($self,aStream))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printOn:"]=1,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_(" (")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$recv($self._associations())._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._printOn_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv(aStream)._nextPutAll_(" , ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "remove:ifAbsent:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "remove: aKey ifAbsent: aBlock\x0a\x09^ self removeKey: aKey ifAbsent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["removeKey:ifAbsent:"]
}, function ($methodClass){ return function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._removeKey_ifAbsent_(aKey,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{aKey:aKey,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09^ self keys do: [ :each | self removeKey: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "keys", "removeKey:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._keys())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._removeKey_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "removeKey:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "removeKey: aKey\x0a\x09^ self remove: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["remove:"]
}, function ($methodClass){ return function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._remove_(aKey);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeKey:",{aKey:aKey})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "removeKey:ifAbsent:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "select:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "select: aBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09(aBlock value: value) ifTrue: [ newDict at: key put: value ]].\x0a\x09^ newDict",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "value:", "at:put:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var newDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newDict=$recv($self._class())._new();
$self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(aBlock)._value_(value))){
return $recv(newDict)._at_put_(key,value);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return newDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,newDict:newDict})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "select:thenCollect:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selectBlock", "collectBlock"],
source: "select: selectBlock thenCollect: collectBlock\x0a\x09| newDict |\x0a\x09newDict := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09(selectBlock value: value) ifTrue: [ newDict at: key put: (collectBlock value: value) ]].\x0a\x09^ newDict",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "class", "keysAndValuesDo:", "ifTrue:", "value:", "at:put:"]
}, function ($methodClass){ return function (selectBlock,collectBlock){
var self=this,$self=this;
var newDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newDict=$recv($self._class())._new();
$self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv(selectBlock)._value_(value)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:"]=1
//>>excludeEnd("ctx");
][0])){
return $recv(newDict)._at_put_(key,$recv(collectBlock)._value_(value));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return newDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:thenCollect:",{selectBlock:selectBlock,collectBlock:collectBlock,newDict:newDict})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09| copy |\x0a\x09copy := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09copy at: key put: value ].\x0a\x09^ copy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var copy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
copy=$recv($self._class())._new();
$self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(copy)._at_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return copy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{copy:copy})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "shortenedPrintString",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shortenedPrintString\x0a\x09^ self size <= 1\x0a\x09\x09ifTrue: [ self printString ]\x0a\x09\x09ifFalse: [ | key | key := self keys anyOne. (self copyEmpty at: key put: (self at: key); yourself) printString, ' ... ', (self size - 1) asString, ' more items' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "<=", "size", "printString", "anyOne", "keys", ",", "at:put:", "copyEmpty", "at:", "yourself", "asString", "-"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
if($core.assert($recv([$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__lt_eq((1)))){
return [$self._printString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printString"]=1
//>>excludeEnd("ctx");
][0];
} else {
var key;
key=$recv($self._keys())._anyOne();
$1=$self._copyEmpty();
$recv($1)._at_put_(key,$self._at_(key));
return [$recv([$recv($recv($recv($recv($1)._yourself())._printString()).__comma(" ... ")).__comma($recv($recv($self._size()).__minus((1)))._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(" more items")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shortenedPrintString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "size",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ self keys size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["size", "keys"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._keys())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "values",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "values\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"values",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "valuesDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);

$core.addMethod(
$core.method({
selector: "withIndexDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09self keysAndValuesDo: [ :key :value | aBlock value: value value: key ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["keysAndValuesDo:", "value:value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_value_(value,key);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection);


$core.addMethod(
$core.method({
selector: "from:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "from: aCollection\x0a\x09| newCollection |\x0a\x09newCollection := self new.\x0a\x09aCollection do: [ :each | newCollection add: each ].\x0a\x09^ newCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "do:", "add:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
var newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newCollection=$self._new();
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newCollection)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"from:",{aCollection:aCollection,newCollection:newCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection.a$cls);

$core.addMethod(
$core.method({
selector: "fromPairs:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "fromPairs: aCollection\x0a\x09\x22This message is poorly named and has been replaced by #from:\x22\x0a\x09^ self from: aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["from:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._from_(aCollection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromPairs:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection.a$cls);

$core.addMethod(
$core.method({
selector: "newFromPairs:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "newFromPairs: aCollection\x0a\x09\x22Accept an array of elements where every two elements form an \x0a\x09association - the odd element being the key, and the even element the value.\x22\x0a\x09\x0a\x09| newCollection |\x0a\x09\x0a\x09aCollection size even ifFalse: [ \x0a\x09\x09self error: '#newFromPairs only accepts arrays of an even length' ].\x0a\x09\x09\x0a\x09newCollection := self new.\x0a\x09( 1 to: aCollection size by: 2 ) do: [ :each | \x0a\x09\x09newCollection at: (aCollection at: each) put: (aCollection at: each + 1) ].\x0a\x09\x09\x0a\x09^ newCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "even", "size", "error:", "new", "do:", "to:by:", "at:put:", "at:", "+"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
var newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv([$recv(aCollection)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0])._even())){
$self._error_("#newFromPairs only accepts arrays of an even length");
}
newCollection=$self._new();
$recv((1)._to_by_($recv(aCollection)._size(),(2)))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(newCollection)._at_put_([$recv(aCollection)._at_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0],$recv(aCollection)._at_($recv(each).__plus((1))));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return newCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFromPairs:",{aCollection:aCollection,newCollection:newCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.AssociativeCollection.a$cls);


$core.addClass("Dictionary", $globals.AssociativeCollection, ["keys", "values"], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Dictionary.comment="I represent a set of elements that can be viewed from one of two perspectives: a set of associations,\x0aor a container of values that are externally named where the name can be any object that responds to `=`.\x0a\x0aThe external name is referred to as the key.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09var index = $self._positionOfKey_(aKey);\x0a\x09\x09return index >=0 ? $self.values[index] : aBlock._value();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var index = $self._positionOfKey_(aKey);\x0a\x09\x09return index >=0 ? $self.values[index] : aBlock._value();\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var index = $self._positionOfKey_(aKey);
		return index >=0 ? $self.values[index] : aBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09<inlineJS: '\x0a\x09\x09var index = $self._positionOfKey_(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09var keys = $self.keys;\x0a\x09\x09\x09index = keys.length;\x0a\x09\x09\x09keys.push(aKey);\x0a\x09\x09}\x0a\x0a\x09\x09return $self.values[index] = aValue;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var index = $self._positionOfKey_(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09var keys = $self.keys;\x0a\x09\x09\x09index = keys.length;\x0a\x09\x09\x09keys.push(aKey);\x0a\x09\x09}\x0a\x0a\x09\x09return $self.values[index] = aValue;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aKey,aValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var index = $self._positionOfKey_(aKey);
		if(index === -1) {
			var keys = $self.keys;
			index = keys.length;
			keys.push(aKey);
		}

		return $self.values[index] = aValue;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue})});
//>>excludeEnd("ctx");
}; }),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "includesKey:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "includesKey: aKey\x0a\x09<inlineJS: 'return $self._positionOfKey_(aKey) >= 0;'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $self._positionOfKey_(aKey) >= 0;"]]],
messageSends: []
}, function ($methodClass){ return function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._positionOfKey_(aKey) >= 0;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey})});
//>>excludeEnd("ctx");
}; }),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "indexOf:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09| index |\x0a\x09index := values \x0a\x09\x09indexOf: anObject \x0a\x09\x09ifAbsent: [ 0 ].\x0a\x09^ index = 0 \x0a\x09\x09ifTrue: [ aBlock value ] \x0a\x09\x09ifFalse: [ keys at: index ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["indexOf:ifAbsent:", "ifTrue:ifFalse:", "=", "value", "at:"]
}, function ($methodClass){ return function (anObject,aBlock){
var self=this,$self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
index=$recv($self.values)._indexOf_ifAbsent_(anObject,(function(){
return (0);

}));
if($core.assert($recv(index).__eq((0)))){
return $recv(aBlock)._value();
} else {
return $recv($self.keys)._at_(index);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock,index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09keys := #().\x0a\x09values := #()",
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
$self.keys=[];
$self.values=[];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "keys",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09^ keys copy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.keys)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keys",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "keysAndValuesDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09^ keys with: values do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["with:do:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.keys)._with_do_($self.values,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "keysDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09^ keys do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.keys)._do_(aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "positionOfKey:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "positionOfKey: anObject\x0a\x09<inlineJS: '\x0a\x09\x09var keys = $self.keys;\x0a\x09\x09for(var i=0;i<keys.length;i++){\x0a\x09\x09\x09if(keys[i].__eq(anObject)) { return i;}\x0a\x09\x09}\x0a\x09\x09return -1;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var keys = $self.keys;\x0a\x09\x09for(var i=0;i<keys.length;i++){\x0a\x09\x09\x09if(keys[i].__eq(anObject)) { return i;}\x0a\x09\x09}\x0a\x09\x09return -1;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var keys = $self.keys;
		for(var i=0;i<keys.length;i++){
			if(keys[i].__eq(anObject)) { return i;}
		}
		return -1;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"positionOfKey:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09keys removeAll.\x0a\x09values removeAll",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["removeAll"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($self.keys)._removeAll()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["removeAll"]=1
//>>excludeEnd("ctx");
][0];
$recv($self.values)._removeAll();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "removeKey:ifAbsent:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09var index = $self._positionOfKey_(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09return aBlock._value()\x0a\x09\x09} else {\x0a\x09\x09\x09var keys = $self.keys, values = $self.values;\x0a\x09\x09\x09var value = values[index], l = keys.length;\x0a\x09\x09\x09keys[index] = keys[l-1];\x0a\x09\x09\x09keys.pop();\x0a\x09\x09\x09values[index] = values[l-1];\x0a\x09\x09\x09values.pop();\x0a\x09\x09\x09return value;\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var index = $self._positionOfKey_(aKey);\x0a\x09\x09if(index === -1) {\x0a\x09\x09\x09return aBlock._value()\x0a\x09\x09} else {\x0a\x09\x09\x09var keys = $self.keys, values = $self.values;\x0a\x09\x09\x09var value = values[index], l = keys.length;\x0a\x09\x09\x09keys[index] = keys[l-1];\x0a\x09\x09\x09keys.pop();\x0a\x09\x09\x09values[index] = values[l-1];\x0a\x09\x09\x09values.pop();\x0a\x09\x09\x09return value;\x0a\x09\x09}\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var index = $self._positionOfKey_(aKey);
		if(index === -1) {
			return aBlock._value()
		} else {
			var keys = $self.keys, values = $self.values;
			var value = values[index], l = keys.length;
			keys[index] = keys[l-1];
			keys.pop();
			values[index] = values[l-1];
			values.pop();
			return value;
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "values",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "values\x0a\x09^ values",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.values;

}; }),
$globals.Dictionary);

$core.addMethod(
$core.method({
selector: "valuesDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09^ values do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.values)._do_(aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Dictionary);



$core.addClass("HashedCollection", $globals.AssociativeCollection, [], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.HashedCollection.comment="I am a traditional JavaScript object, or a Smalltalk `Dictionary`.\x0a\x0aUnlike a `Dictionary`, I can only have strings as keys.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asJavaScriptSource",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSource\x0a\x09^ String streamContents: [ :str |\x0a\x09\x09str nextPut: '{'.\x0a\x09\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09str nextPutAll: key asJavaScriptSource; nextPut: ':'; nextPutAll: value asJavaScriptSource; nextPut: ',' ].\x0a\x09\x09str skip: -1; nextPut: '}' ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "nextPut:", "keysAndValuesDo:", "nextPutAll:", "asJavaScriptSource", "skip:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(str)._nextPut_("{")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPut:"]=1
//>>excludeEnd("ctx");
][0];
$self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
[$recv(str)._nextPutAll_([$recv(key)._asJavaScriptSource()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["asJavaScriptSource"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(str)._nextPut_(":")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["nextPut:"]=2
//>>excludeEnd("ctx");
][0];
$recv(str)._nextPutAll_($recv(value)._asJavaScriptSource());
return [$recv(str)._nextPut_(",")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["nextPut:"]=3
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv(str)._skip_((-1));
return $recv(str)._nextPut_("}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSource",{})});
//>>excludeEnd("ctx");
}; }),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09^ (self includesKey: aKey)\x0a\x09\x09ifTrue: [ self basicAt: aKey ]\x0a\x09\x09ifFalse: [ aBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "includesKey:", "basicAt:", "value"]
}, function ($methodClass){ return function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._includesKey_(aKey))){
return $self._basicAt_(aKey);
} else {
return $recv(aBlock)._value();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09^ self basicAt: aKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["basicAt:put:"]
}, function ($methodClass){ return function (aKey,aValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._basicAt_put_(aKey,aValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue})});
//>>excludeEnd("ctx");
}; }),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "includesKey:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "includesKey: aKey\x0a\x09<inlineJS: 'return self.hasOwnProperty(aKey)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.hasOwnProperty(aKey)"]]],
messageSends: []
}, function ($methodClass){ return function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.hasOwnProperty(aKey);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesKey:",{aKey:aKey})});
//>>excludeEnd("ctx");
}; }),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "keys",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09<inlineJS: 'return Object.keys(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Object.keys(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Object.keys(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keys",{})});
//>>excludeEnd("ctx");
}; }),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "keysDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09self keys do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "keys"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._keys())._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "removeKey:ifAbsent:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "removeKey: aKey ifAbsent: aBlock\x0a\x09^ self\x0a\x09\x09at: aKey\x0a\x09\x09ifPresent: [ :removed | self basicDelete: aKey. removed ]\x0a\x09\x09ifAbsent: [ aBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifPresent:ifAbsent:", "basicDelete:", "value"]
}, function ($methodClass){ return function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._at_ifPresent_ifAbsent_(aKey,(function(removed){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._basicDelete_(aKey);
return removed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({removed:removed},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeKey:ifAbsent:",{aKey:aKey,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "values",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "values\x0a\x09<inlineJS: '\x0a\x09\x09return $self._keys().map(function(key){\x0a\x09\x09\x09return $self._at_(key);\x0a\x09\x09});\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return $self._keys().map(function(key){\x0a\x09\x09\x09return $self._at_(key);\x0a\x09\x09});\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return $self._keys().map(function(key){
			return $self._at_(key);
		});
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"values",{})});
//>>excludeEnd("ctx");
}; }),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "valuesDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09self values do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "values"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._values())._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.HashedCollection);



$core.addClass("SequenceableCollection", $globals.Collection, [], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SequenceableCollection.comment="I am an IndexableCollection\x0awith numeric indexes starting with 1.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "= aCollection\x0a\x09(self class = aCollection class and: [\x0a\x09\x09self size = aCollection size ]) ifFalse: [ ^ false ].\x0a\x09self withIndexDo: [ :each :i |\x0a\x09\x09\x09\x09(aCollection at: i) = each ifFalse: [ ^ false ]].\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "and:", "=", "class", "size", "withIndexDo:", "at:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
if(!$core.assert($recv([$recv([$self._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(aCollection)._class())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv([$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(aCollection)._size())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["="]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))){
return false;
}
$self._withIndexDo_((function(each,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(!$core.assert($recv($recv(aCollection)._at_(i)).__eq(each))){
throw $early=[false];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "addLast:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "addLast: anObject\x0a\x09self add: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._add_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addLast:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "allButFirst",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allButFirst\x0a\x09^ self copyFrom: 2 to: self size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyFrom:to:", "size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._copyFrom_to_((2),$self._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allButFirst",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "allButLast",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allButLast\x0a\x09^ self copyFrom: 1 to: self size - 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyFrom:to:", "-", "size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._copyFrom_to_((1),$recv($self._size()).__minus((1)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allButLast",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "anyOne",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "anyOne\x0a\x09^ self at: 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"anyOne",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "atRandom",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atRandom\x0a\x09^ self at: self size atRandom",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:", "atRandom", "size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._at_($recv($self._size())._atRandom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atRandom",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "beginsWith:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["prefix"],
source: "beginsWith: prefix\x0a\x09self size < prefix size ifTrue: [ ^ false ].\x0a\x09^ (self first: prefix size) = prefix",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "<", "size", "=", "first:"]
}, function ($methodClass){ return function (prefix){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__lt([$recv(prefix)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0]))){
return false;
}
return $recv($self._first_($recv(prefix)._size())).__eq(prefix);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beginsWith:",{prefix:prefix})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "copyFrom:to:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (anIndex,anotherIndex){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "copyWithFirst:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "copyWithFirst: anObject\x0a\x09^ (self class with: anObject) addAll: self; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["addAll:", "with:", "class", "yourself"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._class())._with_(anObject);
$recv($1)._addAll_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWithFirst:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "endsWith:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["suffix"],
source: "endsWith: suffix\x0a\x09self size < suffix size ifTrue: [ ^ false ].\x0a\x09^ (self last: suffix size) = suffix",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "<", "size", "=", "last:"]
}, function ($methodClass){ return function (suffix){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__lt([$recv(suffix)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0]))){
return false;
}
return $recv($self._last_($recv(suffix)._size())).__eq(suffix);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endsWith:",{suffix:suffix})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "first",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "first\x0a\x09^ self at: 1",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"first",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "first:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "first: aNumber\x0a\x09\x22Answer the first `aNumber` elements of the receiver.\x0a\x09Raise an error if there are not enough elements in the receiver.\x22\x0a\x0a\x09self size < aNumber ifTrue: [ self error: 'Invalid number of elements' ].\x0a\x0a\x09^ self copyFrom: 1 to: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "<", "size", "error:", "copyFrom:to:"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv($self._size()).__lt(aNumber))){
$self._error_("Invalid number of elements");
}
return $self._copyFrom_to_((1),aNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"first:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "fourth",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fourth\x0a\x09^ self at: 4",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._at_((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fourth",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "includes:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "includes: anObject\x0a\x09^ (self indexOf: anObject ifAbsent: [ nil ]) notNil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["notNil", "indexOf:ifAbsent:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._indexOf_ifAbsent_(anObject,(function(){
return nil;

})))._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "indexOf:startingAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "start"],
source: "indexOf: anObject startingAt: start\x0a\x09\x22Answer the index of the first occurence of anElement after start\x0a\x09within the receiver. If the receiver does not contain anElement,\x0a\x09answer 0.\x22\x0a\x09^ self indexOf: anObject startingAt: start ifAbsent: [ 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["indexOf:startingAt:ifAbsent:"]
}, function ($methodClass){ return function (anObject,start){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._indexOf_startingAt_ifAbsent_(anObject,start,(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:",{anObject:anObject,start:start})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "indexOf:startingAt:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "start", "aBlock"],
source: "indexOf: anObject startingAt: start ifAbsent: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (anObject,start,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:ifAbsent:",{anObject:anObject,start:start,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "last",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "last\x0a\x09^ self at: self size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:", "size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._at_($self._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"last",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "last:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "last: aNumber\x0a\x09\x22Answer the last aNumber elements of the receiver.\x0a\x09Raise an error if there are not enough elements in the receiver.\x22\x0a\x0a\x09self size < aNumber ifTrue: [ self error: 'Invalid number of elements' ].\x0a\x0a\x09^ self copyFrom: self size - aNumber + 1 to: self size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "<", "size", "error:", "copyFrom:to:", "+", "-"]
}, function ($methodClass){ return function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__lt(aNumber))){
$self._error_("Invalid number of elements");
}
return $self._copyFrom_to_($recv($recv([$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0]).__minus(aNumber)).__plus((1)),$self._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"last:",{aNumber:aNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "newStream",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newStream\x0a\x09^ self streamClass on: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:", "streamClass"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._streamClass())._on_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newStream",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "readStream",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "readStream\x0a\x09\x22For Pharo compatibility\x22\x0a\x09\x0a\x09^ self stream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["stream"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readStream",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "removeLast",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeLast\x0a\x09^ self remove: self last",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["remove:", "last"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._remove_($self._last());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeLast",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "reverseDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "reverseDo: aBlock\x0a\x09self reversed do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "reversed"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._reversed())._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reverseDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"reversed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "second",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "second\x0a\x09^ self at: 2",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"second",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "stream",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stream\x0a\x09^ self newStream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["newStream"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._newStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stream",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "streamClass",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "streamClass\x0a\x09^ self class streamClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamClass", "class"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._class())._streamClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"streamClass",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "third",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "third\x0a\x09^ self at: 3",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._at_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"third",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "writeStream",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "writeStream\x0a\x09\x22For Pharo compatibility\x22\x0a\x09\x0a\x09^ self stream",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["stream"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._stream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeStream",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection);


$core.addMethod(
$core.method({
selector: "streamClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "streamClass\x0a\x09\x09^ Stream",
referencedClasses: ["Stream"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.Stream;

}; }),
$globals.SequenceableCollection.a$cls);

$core.addMethod(
$core.method({
selector: "streamContents:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "streamContents: aBlock\x0a\x09| stream |\x0a\x09stream := (self streamClass on: self new).\x0a\x09aBlock value: stream.\x0a\x09^ stream contents",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:", "streamClass", "new", "value:", "contents"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
stream=$recv($self._streamClass())._on_($self._new());
$recv(aBlock)._value_(stream);
return $recv(stream)._contents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"streamContents:",{aBlock:aBlock,stream:stream})});
//>>excludeEnd("ctx");
}; }),
$globals.SequenceableCollection.a$cls);


$core.addClass("Array", $globals.SequenceableCollection, [], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Array.comment="I represent a collection of objects ordered by the collector. The size of arrays is dynamic.\x0a\x0aI am directly mapped to JavaScript Number.\x0a\x0a*Note* In Amber, `OrderedCollection` is an alias for `Array`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "add:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09<inlineJS: 'self.push(anObject); return anObject;'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.push(anObject); return anObject;"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.push(anObject); return anObject;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "addAll:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "addAll: aCollection\x0a<inlineJS: '\x0a\x09if (Array.isArray(aCollection) && aCollection.length < 65000) self.push.apply(self, aCollection);\x0a\x09else $globals.Array.superclass.fn.prototype._addAll_.call($self, aCollection);\x0a\x09return aCollection;\x0a'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09if (Array.isArray(aCollection) && aCollection.length < 65000) self.push.apply(self, aCollection);\x0a\x09else $globals.Array.superclass.fn.prototype._addAll_.call($self, aCollection);\x0a\x09return aCollection;"]]],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	if (Array.isArray(aCollection) && aCollection.length < 65000) self.push.apply(self, aCollection);
	else $globals.Array.superclass.fn.prototype._addAll_.call($self, aCollection);
	return aCollection;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addAll:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "addFirst:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "addFirst: anObject\x0a\x09<inlineJS: 'self.unshift(anObject); return anObject;'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.unshift(anObject); return anObject;"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.unshift(anObject); return anObject;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addFirst:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "allIn:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "allIn: aBlock\x0a\x09^ aBlock valueWithPossibleArguments:\x0a\x09\x09\x22collect to match #in: behaviour\x22\x0a\x09\x09(self collect: [ :each | each in: [ :x | x ] ])",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valueWithPossibleArguments:", "collect:", "in:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(aBlock)._valueWithPossibleArguments_($self._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._in_((function(x){
return x;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allIn:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "appendToString:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "appendToString: aString\x0a<inlineJS: '\x0a\x09for (var i = 0, l = $self.length; i < l; ++i) {\x0a\x09\x09var el = $self[i];\x0a\x09\x09if ((typeof el === \x22string\x22) || $recv(el)._isString()) {\x0a\x09\x09\x09if (el.length === 1) { aString += el; continue; }\x0a\x09\x09}\x0a\x09\x09$self._error_(\x22Not a character.\x22);\x0a\x09}\x0a\x09return aString'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09for (var i = 0, l = $self.length; i < l; ++i) {\x0a\x09\x09var el = $self[i];\x0a\x09\x09if ((typeof el === \x22string\x22) || $recv(el)._isString()) {\x0a\x09\x09\x09if (el.length === 1) { aString += el; continue; }\x0a\x09\x09}\x0a\x09\x09$self._error_(\x22Not a character.\x22);\x0a\x09}\x0a\x09return aString"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	for (var i = 0, l = $self.length; i < l; ++i) {
		var el = $self[i];
		if ((typeof el === "string") || $recv(el)._isString()) {
			if (el.length === 1) { aString += el; continue; }
		}
		$self._error_("Not a character.");
	}
	return aString;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToString:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "asJavaScriptSource",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSource\x0a\x09^ '[', ((self collect: [:each | each asJavaScriptSource ]) join: ', '), ']'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: [",", "join:", "collect:", "asJavaScriptSource"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv("[".__comma($recv($self._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._asJavaScriptSource();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._join_(", "))).__comma("]")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSource",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09<inlineJS: 'return self[anIndex - 1] = anObject'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self[anIndex - 1] = anObject"]]],
messageSends: []
}, function ($methodClass){ return function (anIndex,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self[anIndex - 1] = anObject;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "collect:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "collect: aBlock\x0a\x09\x22Optimized version\x22\x0a\x09\x0a\x09<inlineJS: 'return self.map(function(each) {return aBlock._value_(each)})'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.map(function(each) {return aBlock._value_(each)})"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.map(function(each) {return aBlock._value_(each)});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "copyFrom:to:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a<inlineJS: '\x0a\x09if (anIndex >= 1 && anotherIndex <= self.length) {\x0a\x09\x09return self.slice(anIndex - 1, anotherIndex);\x0a\x09} else {\x0a\x09\x09self._at_(anIndex);\x0a\x09\x09self._at_(self.length + 1);\x0a\x09\x09throw new Error(\x22Incorrect indexes in #copyFrom:to: not caught by #at:\x22);\x0a\x09}\x0a'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09if (anIndex >= 1 && anotherIndex <= self.length) {\x0a\x09\x09return self.slice(anIndex - 1, anotherIndex);\x0a\x09} else {\x0a\x09\x09self._at_(anIndex);\x0a\x09\x09self._at_(self.length + 1);\x0a\x09\x09throw new Error(\x22Incorrect indexes in #copyFrom:to: not caught by #at:\x22);\x0a\x09}"]]],
messageSends: []
}, function ($methodClass){ return function (anIndex,anotherIndex){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	if (anIndex >= 1 && anotherIndex <= self.length) {
		return self.slice(anIndex - 1, anotherIndex);
	} else {
		self._at_(anIndex);
		self._at_(self.length + 1);
		throw new Error("Incorrect indexes in #copyFrom:to: not caught by #at:");
	};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "join:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "join: aString\x0a\x09<inlineJS: 'return self.join(aString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.join(aString)"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.join(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"join:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self \x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._printOn_.call($self,aStream))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printOn:"]=1,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_(" (")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$self._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._printOn_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv(aStream)._nextPutAll_(" ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "remove:ifAbsent:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09| index |\x0a\x09index := self indexOf: anObject ifAbsent: [ 0 ].\x0a\x09^ index = 0\x0a\x09\x09ifFalse: [ self removeIndex: index. anObject ]\x0a\x09\x09ifTrue: [ aBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["indexOf:ifAbsent:", "ifFalse:ifTrue:", "=", "removeIndex:", "value"]
}, function ($methodClass){ return function (anObject,aBlock){
var self=this,$self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
index=$self._indexOf_ifAbsent_(anObject,(function(){
return (0);

}));
if($core.assert($recv(index).__eq((0)))){
return $recv(aBlock)._value();
} else {
$self._removeIndex_(index);
return anObject;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock,index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09<inlineJS: 'self.length = 0'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.length = 0"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.length = 0;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "removeFrom:to:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber", "anotherNumber"],
source: "removeFrom: aNumber to: anotherNumber\x0a\x09<inlineJS: 'self.splice(aNumber -1, anotherNumber - aNumber + 1)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.splice(aNumber -1, anotherNumber - aNumber + 1)"]]],
messageSends: []
}, function ($methodClass){ return function (aNumber,anotherNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.splice(aNumber -1, anotherNumber - aNumber + 1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeFrom:to:",{aNumber:aNumber,anotherNumber:anotherNumber})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "removeIndex:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "removeIndex: anInteger\x0a\x09<inlineJS: 'self.splice(anInteger - 1, 1)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["self.splice(anInteger - 1, 1)"]]],
messageSends: []
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self.splice(anInteger - 1, 1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeIndex:",{anInteger:anInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "removeLast",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeLast\x0a\x09<inlineJS: 'return self.pop();'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.pop();"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.pop();;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeLast",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09<inlineJS: 'return self.slice().reverse()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.slice().reverse()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.slice().reverse();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reversed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "select:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "select: aBlock\x0a\x09\x22Optimized version\x22\x0a\x09\x0a\x09<inlineJS: 'return self.filter(function(each) {return aBlock._value_(each)})'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.filter(function(each) {return aBlock._value_(each)})"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.filter(function(each) {return aBlock._value_(each)});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09<inlineJS: 'return self.slice()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.slice()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.slice();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shallowCopy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "sort",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sort\x0a\x09^ self sort: [ :a :b | a < b ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sort:", "<"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._sort_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__lt(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sort",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "sort:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "sort: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09return self.sort(function(a, b) {\x0a\x09\x09\x09if(aBlock._value_value_(a,b)) {return -1} else {return 1}\x0a\x09\x09})\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return self.sort(function(a, b) {\x0a\x09\x09\x09if(aBlock._value_value_(a,b)) {return -1} else {return 1}\x0a\x09\x09})\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return self.sort(function(a, b) {
			if(aBlock._value_value_(a,b)) {return -1} else {return 1}
		})
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sort:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "sorted",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sorted\x0a\x09^ self copy sort",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sort", "copy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._copy())._sort();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sorted",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);

$core.addMethod(
$core.method({
selector: "sorted:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "sorted: aBlock\x0a\x09^ self copy sort: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["sort:", "copy"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._copy())._sort_(aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sorted:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Array);


$core.addMethod(
$core.method({
selector: "new:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "new: anInteger\x0a\x09<inlineJS: 'return new Array(anInteger)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return new Array(anInteger)"]]],
messageSends: []
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new Array(anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{anInteger:anInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.Array.a$cls);

$core.addMethod(
$core.method({
selector: "with:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "with: anObject\x0a\x09\x09^ (self new: 1)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "new:", "yourself"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new_((1));
$recv($1)._at_put_((1),anObject);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Array.a$cls);

$core.addMethod(
$core.method({
selector: "with:with:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anObject2"],
source: "with: anObject with: anObject2\x0a\x09\x09^ (self new: 2)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "new:", "yourself"]
}, function ($methodClass){ return function (anObject,anObject2){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new_((2));
[$recv($1)._at_put_((1),anObject)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._at_put_((2),anObject2);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:with:",{anObject:anObject,anObject2:anObject2})});
//>>excludeEnd("ctx");
}; }),
$globals.Array.a$cls);

$core.addMethod(
$core.method({
selector: "with:with:with:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anObject2", "anObject3"],
source: "with: anObject with: anObject2 with: anObject3\x0a\x09\x09^ (self new: 3)\x0a\x09\x09at: 1 put: anObject;\x0a\x09\x09at: 2 put: anObject2;\x0a\x09\x09at: 3 put: anObject3;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "new:", "yourself"]
}, function ($methodClass){ return function (anObject,anObject2,anObject3){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new_((3));
[$recv($1)._at_put_((1),anObject)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._at_put_((2),anObject2)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=2
//>>excludeEnd("ctx");
][0];
$recv($1)._at_put_((3),anObject3);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:with:with:",{anObject:anObject,anObject2:anObject2,anObject3:anObject3})});
//>>excludeEnd("ctx");
}; }),
$globals.Array.a$cls);

$core.addMethod(
$core.method({
selector: "withAll:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "withAll: aCollection\x0a\x09| instance index |\x0a\x09index := 1.\x0a\x09instance := self new: aCollection size.\x0a\x09aCollection do: [ :each |\x0a\x09\x09instance at: index put: each.\x0a\x09\x09index := index + 1 ].\x0a\x09^ instance",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new:", "size", "do:", "at:put:", "+"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
var instance,index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
index=(1);
instance=$self._new_($recv(aCollection)._size());
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(instance)._at_put_(index,each);
index=$recv(index).__plus((1));
return index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withAll:",{aCollection:aCollection,instance:instance,index:index})});
//>>excludeEnd("ctx");
}; }),
$globals.Array.a$cls);


$core.addClass("String", $globals.SequenceableCollection, [], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.String.comment="I am an indexed collection of Characters. Unlike most Smalltalk dialects, Amber doesn't provide the Character class. Instead, elements of a String are single character strings.\x0a\x0aString inherits many useful methods from its hierarchy, such as\x0a\x09`Collection >> #,`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: ",",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: ", aString\x0a\x09<inlineJS: 'return typeof aString === \x22string\x22 ?\x0a\x09\x09String(self) + aString :\x0a\x09\x09$recv(aString)._appendToString_(String(self))'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aString === \x22string\x22 ?\x0a\x09\x09String(self) + aString :\x0a\x09\x09$recv(aString)._appendToString_(String(self))"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aString === "string" ?
		String(self) + aString :
		$recv(aString)._appendToString_(String(self));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,",",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "<",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "< aString\x0a<inlineJS: 'return typeof aString === \x22string\x22 ?\x0a\x09String(self) < aString :\x0a\x09$recv(aString)._isStringLessThanSelf_(String(self))'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aString === \x22string\x22 ?\x0a\x09String(self) < aString :\x0a\x09$recv(aString)._isStringLessThanSelf_(String(self))"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aString === "string" ?
	String(self) < aString :
	$recv(aString)._isStringLessThanSelf_(String(self));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "<=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "<= aString\x0a<inlineJS: 'return typeof aString === \x22string\x22 ?\x0a\x09String(self) <= aString :\x0a\x09$recv(aString)._isStringLessThanOrEqualToSelf_(String(self))'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aString === \x22string\x22 ?\x0a\x09String(self) <= aString :\x0a\x09$recv(aString)._isStringLessThanOrEqualToSelf_(String(self))"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aString === "string" ?
	String(self) <= aString :
	$recv(aString)._isStringLessThanOrEqualToSelf_(String(self));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<=",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "= aString\x0a<inlineJS: 'return typeof aString === \x22string\x22 ?\x0a\x09String(self) === aString :\x0a\x09$recv(aString)._isStringEqualToSelf_(String(self))'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aString === \x22string\x22 ?\x0a\x09String(self) === aString :\x0a\x09$recv(aString)._isStringEqualToSelf_(String(self))"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aString === "string" ?
	String(self) === aString :
	$recv(aString)._isStringEqualToSelf_(String(self));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "==",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "== aString\x0a<inlineJS: 'return typeof aString === \x22string\x22 ?\x0a\x09String(self) === aString :\x0a\x09$recv(aString)._isStringEqualToSelf_(String(self))'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aString === \x22string\x22 ?\x0a\x09String(self) === aString :\x0a\x09$recv(aString)._isStringEqualToSelf_(String(self))"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aString === "string" ?
	String(self) === aString :
	$recv(aString)._isStringEqualToSelf_(String(self));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"==",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: ">",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "> aString\x0a<inlineJS: 'return typeof aString === \x22string\x22 ?\x0a\x09String(self) > aString :\x0a\x09$recv(aString)._isStringGreaterThanSelf_(String(self))'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aString === \x22string\x22 ?\x0a\x09String(self) > aString :\x0a\x09$recv(aString)._isStringGreaterThanSelf_(String(self))"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aString === "string" ?
	String(self) > aString :
	$recv(aString)._isStringGreaterThanSelf_(String(self));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: ">=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: ">= aString\x0a<inlineJS: 'return typeof aString === \x22string\x22 ?\x0a\x09String(self) >= aString :\x0a\x09$recv(aString)._isStringGreaterThanOrEqualSelf_(String(self))'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return typeof aString === \x22string\x22 ?\x0a\x09String(self) >= aString :\x0a\x09$recv(aString)._isStringGreaterThanOrEqualSelf_(String(self))"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof aString === "string" ?
	String(self) >= aString :
	$recv(aString)._isStringGreaterThanOrEqualSelf_(String(self));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,">=",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "add:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09self errorReadOnly",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["errorReadOnly"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._errorReadOnly();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "appendToString:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "appendToString: aString\x0a\x09<inlineJS: 'return aString + self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aString + self"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aString + self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToString:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "asJavaScriptMethodName",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptMethodName\x0a\x09<inlineJS: 'return $core.st2js(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return $core.st2js(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $core.st2js(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptMethodName",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

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
$globals.String);

$core.addMethod(
$core.method({
selector: "asJavaScriptSource",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJavaScriptSource\x0a\x09<inlineJS: '\x0a\x09\x09if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self.replace(/[\x5cx00-\x5cx1f\x22\x5c\x5c\x5cx7f-\x5cx9f]/g, function(ch){var c=ch.charCodeAt(0);return \x22\x5c\x5cx\x22+(\x220\x22+c.toString(16)).slice(-2)}) + \x22\x5c\x22\x22;\x0a\x09\x09else\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self + \x22\x5c\x22\x22;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self.replace(/[\x5cx00-\x5cx1f\x22\x5c\x5c\x5cx7f-\x5cx9f]/g, function(ch){var c=ch.charCodeAt(0);return \x22\x5c\x5cx\x22+(\x220\x22+c.toString(16)).slice(-2)}) + \x22\x5c\x22\x22;\x0a\x09\x09else\x0a\x09\x09\x09return \x22\x5c\x22\x22 + self + \x22\x5c\x22\x22;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		if(self.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "\"" + self.replace(/[\x00-\x1f"\\\x7f-\x9f]/g, function(ch){var c=ch.charCodeAt(0);return "\\x"+("0"+c.toString(16)).slice(-2)}) + "\"";
		else
			return "\"" + self + "\"";
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJavaScriptSource",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "asLowercase",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asLowercase\x0a\x09<inlineJS: 'return self.toLowerCase()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toLowerCase()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toLowerCase();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asLowercase",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "asMutator",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asMutator\x0a\x09\x22Answer a setter selector. For example,\x0a\x09#name asMutator returns #name:\x22\x0a\x0a\x09self last = ':' ifFalse: [  ^ self, ':' ].\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "=", "last", ","]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv($self._last()).__eq(":"))){
return $self.__comma(":");
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asMutator",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "asNumber",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asNumber\x0a\x09<inlineJS: 'return Number(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Number(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Number(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asNumber",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "asRegexp",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asRegexp\x0a\x09^ RegularExpression fromString: self",
referencedClasses: ["RegularExpression"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fromString:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.RegularExpression)._fromString_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asRegexp",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "asString",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asString\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "asSymbol",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSymbol\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "asSymbolPrintOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "asSymbolPrintOn: aStream\x0a\x09aStream nextPutAll: '#'.\x0a\x09self asString isSelector\x0a\x09\x09ifTrue: [ aStream nextPut: self ]\x0a\x09\x09ifFalse: [ self printOn: aStream ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "ifTrue:ifFalse:", "isSelector", "asString", "nextPut:", "printOn:"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("#");
if($core.assert($recv($self._asString())._isSelector())){
$recv(aStream)._nextPut_(self);
} else {
$self._printOn_(aStream);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSymbolPrintOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "asUppercase",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asUppercase\x0a\x09<inlineJS: 'return self.toUpperCase()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.toUpperCase()"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.toUpperCase();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asUppercase",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "asciiValue",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asciiValue\x0a\x09<inlineJS: 'return self.charCodeAt(0);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.charCodeAt(0);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.charCodeAt(0);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asciiValue",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<inlineJS: 'return String(self)[anIndex - 1] || aBlock._value()'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return String(self)[anIndex - 1] || aBlock._value()"]]],
messageSends: []
}, function ($methodClass){ return function (anIndex,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String(self)[anIndex - 1] || aBlock._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09<inlineJS: '\x0a\x09\x09var result = String(self)[anIndex - 1];\x0a\x09\x09return result ? aBlock._value_(result) : anotherBlock._value();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var result = String(self)[anIndex - 1];\x0a\x09\x09return result ? aBlock._value_(result) : anotherBlock._value();\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (anIndex,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var result = String(self)[anIndex - 1];
		return result ? aBlock._value_(result) : anotherBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09self errorReadOnly",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["errorReadOnly"]
}, function ($methodClass){ return function (anIndex,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._errorReadOnly();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "capitalized",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "capitalized\x0a\x09^ self ifNotEmpty: [ self first asUppercase, self allButFirst ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotEmpty:", ",", "asUppercase", "first", "allButFirst"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($self._first())._asUppercase()).__comma($self._allButFirst());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"capitalized",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "charCodeAt:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "charCodeAt: anInteger\x0a\x09<inlineJS: 'return self.charCodeAt(anInteger - 1)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.charCodeAt(anInteger - 1)"]]],
messageSends: []
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.charCodeAt(anInteger - 1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"charCodeAt:",{anInteger:anInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "copyFrom:to:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "anotherIndex"],
source: "copyFrom: anIndex to: anotherIndex\x0a\x09<inlineJS: 'return self.substring(anIndex - 1, anotherIndex)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.substring(anIndex - 1, anotherIndex)"]]],
messageSends: []
}, function ($methodClass){ return function (anIndex,anotherIndex){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.substring(anIndex - 1, anotherIndex);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyFrom:to:",{anIndex:anIndex,anotherIndex:anotherIndex})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "copyWithFirst:",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "copyWithFirst: anObject\x0a\x09(anObject isString and: [ anObject size = 1 ]) \x22character is one-char string in JS\x22\x0a\x09\x09ifFalse: [ self error: 'Cannot put ', anObject class name, ' in a String' ].\x0a\x09^ anObject, self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "and:", "isString", "=", "size", "error:", ",", "name", "class"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv($recv(anObject)._isString())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(anObject)._size()).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))){
$self._error_([$recv(["Cannot put ".__comma($recv($recv(anObject)._class())._name())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma(" in a String")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]);
}
return $recv(anObject).__comma(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyWithFirst:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "crlfSanitized",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "crlfSanitized\x0a\x09^ self lines join: String lf",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["join:", "lines", "lf"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._lines())._join_($recv($globals.String)._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crlfSanitized",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "deepCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deepCopy\x0a\x09^ self shallowCopy",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["shallowCopy"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._shallowCopy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "errorReadOnly",
protocol: "error handling",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "errorReadOnly\x0a\x09self error: 'Object is read-only'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("Object is read-only");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorReadOnly",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "escaped",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "escaped\x0a\x09<inlineJS: 'return escape(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return escape(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return escape(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"escaped",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "includesSubString:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["subString"],
source: "includesSubString: subString\x0a\x09<inlineJS: 'return self.indexOf(subString) != -1'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.indexOf(subString) != -1"]]],
messageSends: []
}, function ($methodClass){ return function (subString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.indexOf(subString) != -1;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includesSubString:",{subString:subString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "isCapitalized",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isCapitalized\x0a\x09^ self first asUppercase == self first",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["==", "asUppercase", "first"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv([$self._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first"]=1
//>>excludeEnd("ctx");
][0])._asUppercase()).__eq_eq($self._first());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isCapitalized",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "isSelector",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSelector\x0a<inlineJS:\x0a\x09'return !!self.match(/^([a-zA-Z][a-zA-Z0-9]*|[\x5c\x5c+*/=><,@%~|&-]+|([a-zA-Z][a-zA-Z0-9]*\x5c:)+)$/)'\x0a>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return !!self.match(/^([a-zA-Z][a-zA-Z0-9]*|[\x5c\x5c+*/=><,@%~|&-]+|([a-zA-Z][a-zA-Z0-9]*\x5c:)+)$/)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return !!self.match(/^([a-zA-Z][a-zA-Z0-9]*|[\\+*/=><,@%~|&-]+|([a-zA-Z][a-zA-Z0-9]*\:)+)$/);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSelector",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "isString",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isString\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return true;

}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "isStringEqualToSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "isStringEqualToSelf: aString\x0a\x09<inlineJS: 'return aString === String(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aString === String(self)"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aString === String(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isStringEqualToSelf:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "isStringGreaterThanOrEqualToSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "isStringGreaterThanOrEqualToSelf: aString\x0a\x09<inlineJS: 'return aString >= self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aString >= self"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aString >= self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isStringGreaterThanOrEqualToSelf:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "isStringGreaterThanSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "isStringGreaterThanSelf: aString\x0a\x09<inlineJS: 'return aString > self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aString > self"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aString > self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isStringGreaterThanSelf:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "isStringLessThanOrEqualToSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "isStringLessThanOrEqualToSelf: aString\x0a\x09<inlineJS: 'return aString <= self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aString <= self"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aString <= self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isStringLessThanOrEqualToSelf:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "isStringLessThanSelf:",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "isStringLessThanSelf: aString\x0a\x09<inlineJS: 'return aString < self'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return aString < self"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aString < self;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isStringLessThanSelf:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "isVowel",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isVowel\x0a\x09\x22Answer true if the receiver is a one character string containing a voyel\x22\x0a\x09\x0a\x09^ self size = 1 and: [ 'aeiou' includes: self asLowercase ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "=", "size", "includes:", "asLowercase"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._size()).__eq((1)))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return "aeiou"._includes_($self._asLowercase());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isVowel",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "join:",
protocol: "split join",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "join: aCollection\x0a\x09^ String\x0a\x09\x09streamContents: [ :stream | aCollection\x0a\x09\x09\x09\x09do: [ :each | stream nextPutAll: each asString ]\x0a\x09\x09\x09\x09separatedBy: [ stream nextPutAll: self ]]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "do:separatedBy:", "nextPutAll:", "asString"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(stream){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aCollection)._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(stream)._nextPutAll_($recv(each)._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPutAll_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"join:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "lineIndicesDo:",
protocol: "split join",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "lineIndicesDo: aBlock\x0a\x09\x22execute aBlock with 3 arguments for each line:\x0a\x09- start index of line\x0a\x09- end index of line without line delimiter\x0a\x09- end index of line including line delimiter(s) CR, LF or CRLF\x22\x0a\x09\x0a\x09| cr lf start sz nextLF nextCR |\x0a\x09start := 1.\x0a\x09sz := self size.\x0a\x09cr := String cr.\x0a\x09nextCR := self indexOf: cr startingAt: 1.\x0a\x09lf := String lf.\x0a\x09nextLF := self indexOf: lf startingAt: 1.\x0a\x09[ start <= sz ] whileTrue: [ \x0a\x09\x09(nextLF = 0 and: [ nextCR = 0 ])\x0a\x09\x09\x09ifTrue: [ \x22No more CR, nor LF, the string is over\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: sz value: sz.\x0a\x09\x09\x09\x09\x09^ self ].\x0a\x09\x09(nextCR = 0 or: [ 0 < nextLF and: [ nextLF < nextCR ] ])\x0a\x09\x09\x09ifTrue: [ \x22Found a LF\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextLF - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09ifFalse: [ 1 + nextCR = nextLF\x0a\x09\x09\x09\x09ifTrue: [ \x22Found a CR-LF pair\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextLF.\x0a\x09\x09\x09\x09\x09start := 1 + nextLF.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start.\x0a\x09\x09\x09\x09\x09nextLF := self indexOf: lf startingAt: start ]\x0a\x09\x09\x09\x09ifFalse: [ \x22Found a CR\x22\x0a\x09\x09\x09\x09\x09aBlock value: start value: nextCR - 1 value: nextCR.\x0a\x09\x09\x09\x09\x09start := 1 + nextCR.\x0a\x09\x09\x09\x09\x09nextCR := self indexOf: cr startingAt: start ] ]]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["size", "cr", "indexOf:startingAt:", "lf", "whileTrue:", "<=", "ifTrue:", "and:", "=", "value:value:value:", "ifTrue:ifFalse:", "or:", "<", "-", "+"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var cr,lf,start,sz,nextLF,nextCR;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
start=(1);
sz=$self._size();
cr=$recv($globals.String)._cr();
nextCR=[$self._indexOf_startingAt_(cr,(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["indexOf:startingAt:"]=1
//>>excludeEnd("ctx");
][0];
lf=$recv($globals.String)._lf();
nextLF=[$self._indexOf_startingAt_(lf,(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["indexOf:startingAt:"]=2
//>>excludeEnd("ctx");
][0];
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(start).__lt_eq(sz);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv([$recv(nextLF).__eq((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return [$recv(nextCR).__eq((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["="]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["and:"]=1
//>>excludeEnd("ctx");
][0])){
[$recv(aBlock)._value_value_value_(start,sz,sz)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:value:value:"]=1
//>>excludeEnd("ctx");
][0];
throw $early=[self];
}
if($core.assert($recv([$recv(nextCR).__eq((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["="]=3
//>>excludeEnd("ctx");
][0])._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv([(0).__lt(nextLF)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["<"]=1
//>>excludeEnd("ctx");
][0])._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(nextLF).__lt(nextCR);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
})))){
[$recv(aBlock)._value_value_value_(start,[$recv(nextLF).__minus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0],nextLF)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:value:value:"]=2
//>>excludeEnd("ctx");
][0];
start=[(1).__plus(nextLF)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0];
nextLF=[$self._indexOf_startingAt_(lf,start)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["indexOf:startingAt:"]=3
//>>excludeEnd("ctx");
][0];
return nextLF;
} else {
if($core.assert($recv([(1).__plus(nextCR)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=2
//>>excludeEnd("ctx");
][0]).__eq(nextLF))){
[$recv(aBlock)._value_value_value_(start,[$recv(nextCR).__minus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["-"]=2
//>>excludeEnd("ctx");
][0],nextLF)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:value:value:"]=3
//>>excludeEnd("ctx");
][0];
start=[(1).__plus(nextLF)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["+"]=3
//>>excludeEnd("ctx");
][0];
nextCR=[$self._indexOf_startingAt_(cr,start)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["indexOf:startingAt:"]=4
//>>excludeEnd("ctx");
][0];
nextLF=[$self._indexOf_startingAt_(lf,start)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["indexOf:startingAt:"]=5
//>>excludeEnd("ctx");
][0];
return nextLF;
} else {
$recv(aBlock)._value_value_value_(start,$recv(nextCR).__minus((1)),nextCR);
start=(1).__plus(nextCR);
nextCR=$self._indexOf_startingAt_(cr,start);
return nextCR;
}
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineIndicesDo:",{aBlock:aBlock,cr:cr,lf:lf,start:start,sz:sz,nextLF:nextLF,nextCR:nextCR})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "lineNumber:",
protocol: "split join",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "lineNumber: anIndex\x0a\x09\x22Answer a string containing the characters in the given line number.\x22\x0a\x0a\x09| lineCount |\x0a\x09lineCount := 0.\x0a\x09self lineIndicesDo: [ :start :endWithoutDelimiters :end |\x0a\x09\x09(lineCount := lineCount + 1) = anIndex ifTrue: [ ^ self copyFrom: start to: endWithoutDelimiters ]].\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["lineIndicesDo:", "ifTrue:", "=", "+", "copyFrom:to:"]
}, function ($methodClass){ return function (anIndex){
var self=this,$self=this;
var lineCount;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
lineCount=(0);
$self._lineIndicesDo_((function(start,endWithoutDelimiters,end){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
lineCount=$recv(lineCount).__plus((1));
if($core.assert($recv(lineCount).__eq(anIndex))){
throw $early=[$self._copyFrom_to_(start,endWithoutDelimiters)];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({start:start,endWithoutDelimiters:endWithoutDelimiters,end:end},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineNumber:",{anIndex:anIndex,lineCount:lineCount})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "lines",
protocol: "split join",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lines\x0a\x09\x22Answer an array of lines composing this receiver without the line ending delimiters.\x22\x0a<inlineJS: '\x0a\x09var result = self.split(/\x5cr\x5cn|\x5cr|\x5cn/);\x0a\x09if (!result[result.length-1]) result.pop();\x0a\x09return result;\x0a'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09var result = self.split(/\x5cr\x5cn|\x5cr|\x5cn/);\x0a\x09if (!result[result.length-1]) result.pop();\x0a\x09return result;"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	var result = self.split(/\r\n|\r|\n/);
	if (!result[result.length-1]) result.pop();
	return result;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lines",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "linesDo:",
protocol: "split join",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "linesDo: aBlock\x0a\x09\x22Execute aBlock with each line in this string. The terminating line\x0a\x09delimiters CR, LF or CRLF pairs are not included in what is passed to aBlock\x22\x0a\x0a\x09self lines do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "lines"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._lines())._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"linesDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "match:",
protocol: "regular expressions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRegexp"],
source: "match: aRegexp\x0a\x09<inlineJS: 'return self.search(aRegexp) != -1'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.search(aRegexp) != -1"]]],
messageSends: []
}, function ($methodClass){ return function (aRegexp){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.search(aRegexp) != -1;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"match:",{aRegexp:aRegexp})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "matchesOf:",
protocol: "regular expressions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRegularExpression"],
source: "matchesOf: aRegularExpression\x0a\x09<inlineJS: 'return self.match(aRegularExpression)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.match(aRegularExpression)"]]],
messageSends: []
}, function ($methodClass){ return function (aRegularExpression){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.match(aRegularExpression);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"matchesOf:",{aRegularExpression:aRegularExpression})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "printNl",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printNl\x0a\x09<inlineJS: 'console.log(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["console.log(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
console.log(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printNl",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: '''';\x0a\x09\x09nextPutAll: (self replace: '''' with: '''''');\x0a\x09\x09nextPutAll: ''''",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "replace:with:"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv(aStream)._nextPutAll_("'")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_($self._replace_with_("'","''"))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
$recv(aStream)._nextPutAll_("'");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "putOn:",
protocol: "streaming",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPutString: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutString:"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutString_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "remove:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "remove: anObject\x0a\x09self errorReadOnly",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["errorReadOnly"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._errorReadOnly();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "remove:ifAbsent:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09self errorReadOnly",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["errorReadOnly"]
}, function ($methodClass){ return function (anObject,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._errorReadOnly();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "replace:with:",
protocol: "regular expressions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "replace: aString with: anotherString\x0a\x09^ self replaceRegexp: (RegularExpression fromString: aString flag: 'g') with: anotherString",
referencedClasses: ["RegularExpression"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["replaceRegexp:with:", "fromString:flag:"]
}, function ($methodClass){ return function (aString,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._replaceRegexp_with_($recv($globals.RegularExpression)._fromString_flag_(aString,"g"),anotherString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aString:aString,anotherString:anotherString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "replaceRegexp:with:",
protocol: "regular expressions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRegexp", "aString"],
source: "replaceRegexp: aRegexp with: aString\x0a\x09<inlineJS: 'return self.replace(aRegexp, aString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.replace(aRegexp, aString)"]]],
messageSends: []
}, function ($methodClass){ return function (aRegexp,aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.replace(aRegexp, aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replaceRegexp:with:",{aRegexp:aRegexp,aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "reversed",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reversed\x0a\x09<inlineJS: 'return self.split(\x22\x22).reverse().join(\x22\x22)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.split(\x22\x22).reverse().join(\x22\x22)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.split("").reverse().join("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reversed",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "shallowCopy",
protocol: "copying",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shallowCopy\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "shortenedPrintString",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shortenedPrintString\x0a\x09^ self printString size > 30\x0a\x09\x09ifTrue: [ (self printString copyFrom: 1 to: 30), '...''' ]\x0a\x09\x09ifFalse: [ self printString ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", ">", "size", "printString", ",", "copyFrom:to:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv([$self._printString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printString"]=1
//>>excludeEnd("ctx");
][0])._size()).__gt((30)))){
return $recv($recv([$self._printString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printString"]=2
//>>excludeEnd("ctx");
][0])._copyFrom_to_((1),(30))).__comma("...'");
} else {
return $self._printString();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shortenedPrintString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "subStrings:",
protocol: "split join",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "subStrings: aString\x0a\x09^ self tokenize: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["tokenize:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._tokenize_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subStrings:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "symbolPrintString",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "symbolPrintString\x0a\x09^ String streamContents: [ :str | self asSymbolPrintOn: str ]",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamContents:", "asSymbolPrintOn:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.String)._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._asSymbolPrintOn_(str);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"symbolPrintString",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "tokenize:",
protocol: "split join",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "tokenize: aString\x0a\x09<inlineJS: 'return self.split(aString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.split(aString)"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.split(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tokenize:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "trimBoth",
protocol: "regular expressions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimBoth\x0a\x09^ self trimBoth: '\x5cs'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["trimBoth:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._trimBoth_("\x5cs");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimBoth",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "trimBoth:",
protocol: "regular expressions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["separators"],
source: "trimBoth: separators\x0a\x09^ (self trimLeft: separators) trimRight: separators",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["trimRight:", "trimLeft:"]
}, function ($methodClass){ return function (separators){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._trimLeft_(separators))._trimRight_(separators);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimBoth:",{separators:separators})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "trimLeft",
protocol: "regular expressions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimLeft\x0a\x09^ self trimLeft: '\x5cs'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["trimLeft:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._trimLeft_("\x5cs");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimLeft",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "trimLeft:",
protocol: "regular expressions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["separators"],
source: "trimLeft: separators\x0a\x09^ self replaceRegexp: (RegularExpression fromString: '^[', separators, ']+' flag: 'g') with: ''",
referencedClasses: ["RegularExpression"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","]
}, function ($methodClass){ return function (separators){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._replaceRegexp_with_($recv($globals.RegularExpression)._fromString_flag_([$recv("^[".__comma(separators)).__comma("]+")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0],"g"),"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimLeft:",{separators:separators})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "trimRight",
protocol: "regular expressions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trimRight\x0a\x09^ self trimRight: '\x5cs'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["trimRight:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._trimRight_("\x5cs");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimRight",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "trimRight:",
protocol: "regular expressions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["separators"],
source: "trimRight: separators\x0a\x09^ self replaceRegexp: (RegularExpression fromString: '[', separators, ']+$' flag: 'g') with: ''",
referencedClasses: ["RegularExpression"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["replaceRegexp:with:", "fromString:flag:", ","]
}, function ($methodClass){ return function (separators){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._replaceRegexp_with_($recv($globals.RegularExpression)._fromString_flag_([$recv("[".__comma(separators)).__comma("]+$")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0],"g"),"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trimRight:",{separators:separators})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "unescaped",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unescaped\x0a\x09<inlineJS: 'return unescape(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return unescape(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return unescape(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unescaped",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "uriComponentDecoded",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uriComponentDecoded\x0a\x09<inlineJS: 'return decodeURIComponent(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return decodeURIComponent(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return decodeURIComponent(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uriComponentDecoded",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "uriComponentEncoded",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uriComponentEncoded\x0a\x09<inlineJS: 'return encodeURIComponent(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return encodeURIComponent(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return encodeURIComponent(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uriComponentEncoded",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "uriDecoded",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uriDecoded\x0a\x09<inlineJS: 'return decodeURI(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return decodeURI(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return decodeURI(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uriDecoded",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "uriEncoded",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uriEncoded\x0a\x09<inlineJS: 'return encodeURI(self)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return encodeURI(self)"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return encodeURI(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uriEncoded",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject \x0a\x09^ anObject perform: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["perform:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anObject)._perform_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.String);


$core.addMethod(
$core.method({
selector: "cr",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09<inlineJS: 'return \x22\x5cr\x22'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return \x22\x5cr\x22"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return "\r";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cr",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String.a$cls);

$core.addMethod(
$core.method({
selector: "crlf",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "crlf\x0a\x09<inlineJS: 'return \x22\x5cr\x5cn\x22'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return \x22\x5cr\x5cn\x22"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return "\r\n";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crlf",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String.a$cls);

$core.addMethod(
$core.method({
selector: "esc",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "esc\x0a\x09^ self fromCharCode: 27",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fromCharCode:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._fromCharCode_((27));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"esc",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String.a$cls);

$core.addMethod(
$core.method({
selector: "fromCharCode:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "fromCharCode: anInteger\x0a\x09<inlineJS: 'return String.fromCharCode(anInteger)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return String.fromCharCode(anInteger)"]]],
messageSends: []
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String.fromCharCode(anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromCharCode:",{anInteger:anInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.String.a$cls);

$core.addMethod(
$core.method({
selector: "fromString:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "fromString: aString\x0a\x09\x09<inlineJS: 'return String(aString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return String(aString)"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.String.a$cls);

$core.addMethod(
$core.method({
selector: "lf",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lf\x0a\x09<inlineJS: 'return \x22\x5cn\x22'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return \x22\x5cn\x22"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return "\n";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lf",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String.a$cls);

$core.addMethod(
$core.method({
selector: "random",
protocol: "random",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "random\x0a\x09\x22Returns random alphanumeric string beginning with letter\x22\x0a\x09<inlineJS: 'return ((10+22*Math.random())/32).toString(32).slice(2);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return ((10+22*Math.random())/32).toString(32).slice(2);"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return ((10+22*Math.random())/32).toString(32).slice(2);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"random",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String.a$cls);

$core.addMethod(
$core.method({
selector: "randomNotIn:",
protocol: "random",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "randomNotIn: aString\x0a\x09| result |\x0a\x09[ result := self random. aString includesSubString: result ] whileTrue.\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileTrue", "random", "includesSubString:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=$self._random();
return $recv(aString)._includesSubString_(result);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue();
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"randomNotIn:",{aString:aString,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.String.a$cls);

$core.addMethod(
$core.method({
selector: "space",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "space\x0a\x09<inlineJS: 'return \x22 \x22'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return \x22 \x22"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return " ";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"space",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String.a$cls);

$core.addMethod(
$core.method({
selector: "streamClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "streamClass\x0a\x09\x09^ StringStream",
referencedClasses: ["StringStream"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $globals.StringStream;

}; }),
$globals.String.a$cls);

$core.addMethod(
$core.method({
selector: "tab",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tab\x0a\x09<inlineJS: 'return \x22\x5ct\x22'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return \x22\x5ct\x22"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return "\t";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tab",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String.a$cls);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUTFCharCode"],
source: "value: aUTFCharCode\x0a\x0a\x09<inlineJS: 'return String.fromCharCode(aUTFCharCode);'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return String.fromCharCode(aUTFCharCode);"]]],
messageSends: []
}, function ($methodClass){ return function (aUTFCharCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return String.fromCharCode(aUTFCharCode);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{aUTFCharCode:aUTFCharCode})});
//>>excludeEnd("ctx");
}; }),
$globals.String.a$cls);


$core.addClass("Set", $globals.Collection, ["defaultBucket", "slowBucketStores", "fastBuckets", "size"], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Set.comment="I represent an unordered set of objects without duplicates.\x0a\x0a## Implementation notes\x0a\x0aI put elements into different stores based on their type.\x0aThe goal is to store some elements into native JS object property names to be fast.\x0a\x0aIf an unboxed element has typeof 'string', 'boolean' or 'number', or an element is nil, null or undefined,\x0aI store it as a property name in an empty (== Object.create(null)) JS object, different for each type\x0a(for simplicity, nil/null/undefined is treated as one and included with the two booleans).\x0a\x0aIf element happen to be an object, I try to store them in `ArrayBucketStore`. I have two of them by default,\x0aone hashed using the Smalltalk class name, the other one using the JS constructor name. It is possible to have more or less\x0ainstances of `ArrayBucketStores`, see `#initializeSlowBucketStores`.\x0a\x0aAs a last resort, if none of the `ArrayBucketStore` instances can find a suitable bucket, the `defaultBucket` is used,\x0awhich is an `Array`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: "comparing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "= aCollection\x0a\x09self class = aCollection class ifFalse: [ ^ false ].\x0a\x09self size = aCollection size ifFalse: [ ^ false ].\x0a\x09self do: [ :each | (aCollection includes: each) ifFalse: [ ^ false ] ].\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "=", "class", "size", "do:", "includes:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
if(!$core.assert([$recv([$self._class()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["class"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(aCollection)._class())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])){
return false;
}
if(!$core.assert($recv([$self._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__eq($recv(aCollection)._size()))){
return false;
}
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(!$core.assert($recv(aCollection)._includes_(each))){
throw $early=[false];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "add:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09| bucket |\x0a\x09bucket := self bucketsOfElement: anObject.\x0a\x09^ bucket second\x0a\x09\x09ifNil: [\x0a\x09\x09\x09| object slowBucket |\x0a\x09\x09\x09object := bucket first.\x0a\x09\x09\x09slowBucket := bucket third.\x0a\x09\x09\x09slowBucket \x0a\x09\x09\x09\x09indexOf: object \x0a\x09\x09\x09\x09ifAbsent: [ \x0a\x09\x09\x09\x09\x09slowBucket add: object. \x0a\x09\x09\x09\x09\x09size := size + 1 ].\x0a\x09\x09\x09object ]\x0a\x09\x09ifNotNil: [ :primitiveBucket | \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09add: bucket first \x0a\x09\x09\x09\x09in: primitiveBucket ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["bucketsOfElement:", "ifNil:ifNotNil:", "second", "first", "third", "indexOf:ifAbsent:", "add:", "+", "add:in:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
var bucket;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
bucket=$self._bucketsOfElement_(anObject);
$1=$recv(bucket)._second();
if($1 == null || $1.a$nil){
var object,slowBucket;
object=[$recv(bucket)._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first"]=1
//>>excludeEnd("ctx");
][0];
slowBucket=$recv(bucket)._third();
$recv(slowBucket)._indexOf_ifAbsent_(object,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(slowBucket)._add_(object);
$self.size=$recv($self.size).__plus((1));
return $self.size;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return object;
} else {
var primitiveBucket;
primitiveBucket=$1;
return $self._add_in_($recv(bucket)._first(),primitiveBucket);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject,bucket:bucket})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "add:in:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anotherObject"],
source: "add: anObject in: anotherObject\x0a\x09<inlineJS: '\x0a\x09\x09if (anObject in anotherObject.store) { return anObject; }\x0a\x09\x09$self.size++;\x0a\x09\x09anotherObject.store[anObject] = true;\x0a\x09\x09return anObject;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09if (anObject in anotherObject.store) { return anObject; }\x0a\x09\x09$self.size++;\x0a\x09\x09anotherObject.store[anObject] = true;\x0a\x09\x09return anObject;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (anObject,anotherObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		if (anObject in anotherObject.store) { return anObject; }
		$self.size++;
		anotherObject.store[anObject] = true;
		return anObject;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:in:",{anObject:anObject,anotherObject:anotherObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "bucketsOfElement:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "bucketsOfElement: anObject\x0a\x09\x22Find the appropriate bucket for `anObject`.\x0a\x09For optimization purposes, directly answer an array with: \x0a\x09- the object to be store\x0a\x09- the primitive bucket\x0a\x09- the slow bucket\x22\x0a\x09\x0a\x09<inlineJS: '\x0a\x09\x09// include nil to well-known objects under \x22boolean\x22 fastBucket\x0a\x09\x09if (anObject == null || anObject.a$nil) return [ null, $self.fastBuckets.boolean ];\x0a\x09\x09\x0a\x09\x09var prim = anObject.valueOf();\x0a\x09\x09if (typeof prim === \x22object\x22 || typeof prim === \x22function\x22 || !$self.fastBuckets[typeof prim]) {\x0a\x09\x09\x09var bucket = null;\x0a\x09\x09\x09$self.slowBucketStores.some(function (store) {\x0a\x09\x09\x09\x09return bucket = store._bucketOfElement_(anObject);\x0a\x09\x09\x09});\x0a\x09\x09\x09return [ anObject, null, bucket || $self.defaultBucket ];\x0a\x09\x09}\x0a\x09\x09return [ prim, $self.fastBuckets[typeof prim] ];\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09// include nil to well-known objects under \x22boolean\x22 fastBucket\x0a\x09\x09if (anObject == null || anObject.a$nil) return [ null, $self.fastBuckets.boolean ];\x0a\x09\x09\x0a\x09\x09var prim = anObject.valueOf();\x0a\x09\x09if (typeof prim === \x22object\x22 || typeof prim === \x22function\x22 || !$self.fastBuckets[typeof prim]) {\x0a\x09\x09\x09var bucket = null;\x0a\x09\x09\x09$self.slowBucketStores.some(function (store) {\x0a\x09\x09\x09\x09return bucket = store._bucketOfElement_(anObject);\x0a\x09\x09\x09});\x0a\x09\x09\x09return [ anObject, null, bucket || $self.defaultBucket ];\x0a\x09\x09}\x0a\x09\x09return [ prim, $self.fastBuckets[typeof prim] ];\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		// include nil to well-known objects under "boolean" fastBucket
		if (anObject == null || anObject.a$nil) return [ null, $self.fastBuckets.boolean ];
		
		var prim = anObject.valueOf();
		if (typeof prim === "object" || typeof prim === "function" || !$self.fastBuckets[typeof prim]) {
			var bucket = null;
			$self.slowBucketStores.some(function (store) {
				return bucket = store._bucketOfElement_(anObject);
			});
			return [ anObject, null, bucket || $self.defaultBucket ];
		}
		return [ prim, $self.fastBuckets[typeof prim] ];
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bucketsOfElement:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "classNameOf:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "classNameOf: anObject\x0a\x09\x22Answer the class name of `anObject`, or `undefined` \x0a\x09if `anObject` is not an Smalltalk object\x22\x0a\x09\x0a\x09<inlineJS: 'return anObject.a$cls != null && anObject.a$cls.name'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return anObject.a$cls != null && anObject.a$cls.name"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return anObject.a$cls != null && anObject.a$cls.name;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classNameOf:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "collect:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "collect: aBlock\x0a\x09| collection |\x0a\x09collection := self class new.\x0a\x09self do: [ :each | collection add: (aBlock value: each) ].\x0a\x09^ collection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "class", "do:", "add:", "value:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
collection=$recv($self._class())._new();
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(collection)._add_($recv(aBlock)._value_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock,collection:collection})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "do:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09var el, keys, i;\x0a\x09\x09el = $self.fastBuckets;\x0a\x09\x09keys = Object.keys(el);\x0a\x09\x09for (i = 0; i < keys.length; ++i) {\x0a\x09\x09\x09var fastBucket = el[keys[i]], fn = fastBucket.fn, store = Object.keys(fastBucket.store);\x0a\x09\x09\x09if (fn) { for (var j = 0; j < store.length; ++j) { aBlock._value_(fn(store[j])); } }\x0a\x09\x09\x09else { store._do_(aBlock); }\x0a\x09\x09}\x0a\x09\x09el = $self.slowBucketStores;\x0a\x09\x09for (i = 0; i < el.length; ++i) { el[i]._do_(aBlock); }\x0a\x09\x09$self.defaultBucket._do_(aBlock);\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09var el, keys, i;\x0a\x09\x09el = $self.fastBuckets;\x0a\x09\x09keys = Object.keys(el);\x0a\x09\x09for (i = 0; i < keys.length; ++i) {\x0a\x09\x09\x09var fastBucket = el[keys[i]], fn = fastBucket.fn, store = Object.keys(fastBucket.store);\x0a\x09\x09\x09if (fn) { for (var j = 0; j < store.length; ++j) { aBlock._value_(fn(store[j])); } }\x0a\x09\x09\x09else { store._do_(aBlock); }\x0a\x09\x09}\x0a\x09\x09el = $self.slowBucketStores;\x0a\x09\x09for (i = 0; i < el.length; ++i) { el[i]._do_(aBlock); }\x0a\x09\x09$self.defaultBucket._do_(aBlock);\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		var el, keys, i;
		el = $self.fastBuckets;
		keys = Object.keys(el);
		for (i = 0; i < keys.length; ++i) {
			var fastBucket = el[keys[i]], fn = fastBucket.fn, store = Object.keys(fastBucket.store);
			if (fn) { for (var j = 0; j < store.length; ++j) { aBlock._value_(fn(store[j])); } }
			else { store._do_(aBlock); }
		}
		el = $self.slowBucketStores;
		for (i = 0; i < el.length; ++i) { el[i]._do_(aBlock); }
		$self.defaultBucket._do_(aBlock);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "includes:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "includes: anObject\x0a\x09| bucket |\x0a\x09bucket := self bucketsOfElement: anObject.\x0a\x09^ bucket second\x0a\x09\x09ifNil: [ bucket third includes: bucket first ]\x0a\x09\x09ifNotNil: [ :primitiveBucket | self includes: bucket first in: primitiveBucket ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["bucketsOfElement:", "ifNil:ifNotNil:", "second", "includes:", "third", "first", "includes:in:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
var bucket;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
bucket=$self._bucketsOfElement_(anObject);
$1=$recv(bucket)._second();
if($1 == null || $1.a$nil){
return $recv($recv(bucket)._third())._includes_([$recv(bucket)._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first"]=1
//>>excludeEnd("ctx");
][0]);
} else {
var primitiveBucket;
primitiveBucket=$1;
return $self._includes_in_($recv(bucket)._first(),primitiveBucket);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject,bucket:bucket})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "includes:in:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anotherObject"],
source: "includes: anObject in: anotherObject\x0a\x09<inlineJS: 'return anObject in anotherObject.store'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return anObject in anotherObject.store"]]],
messageSends: []
}, function ($methodClass){ return function (anObject,anotherObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return anObject in anotherObject.store;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includes:in:",{anObject:anObject,anotherObject:anotherObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09defaultBucket := #().\x0a\x09self\x0a\x09\x09initializeSlowBucketStores;\x0a\x09\x09removeAll",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["initialize", "initializeSlowBucketStores", "removeAll"]
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
$self.defaultBucket=[];
$self._initializeSlowBucketStores();
$self._removeAll();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "initializeSlowBucketStores",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeSlowBucketStores\x0a\x09slowBucketStores := {\x0a\x09\x09ArrayBucketStore hashBlock: [ :x | self classNameOf: x ].\x0a\x09\x09ArrayBucketStore hashBlock: [ :x | self jsConstructorNameOf: x ]\x0a\x09}",
referencedClasses: ["ArrayBucketStore"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["hashBlock:", "classNameOf:", "jsConstructorNameOf:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.slowBucketStores=[[$recv($globals.ArrayBucketStore)._hashBlock_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._classNameOf_(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["hashBlock:"]=1
//>>excludeEnd("ctx");
][0],$recv($globals.ArrayBucketStore)._hashBlock_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._jsConstructorNameOf_(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}))];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeSlowBucketStores",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "jsConstructorNameOf:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "jsConstructorNameOf: anObject\x0a\x09<inlineJS: 'return anObject.constructor && anObject.constructor.name'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return anObject.constructor && anObject.constructor.name"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return anObject.constructor && anObject.constructor.name;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsConstructorNameOf:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: "printing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: ' ('.\x0a\x09self \x0a\x09\x09do: [ :each | each printOn: aStream ]\x0a\x09\x09separatedBy: [ aStream nextPutAll: ' ' ].\x0a\x09aStream nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:", "nextPutAll:", "do:separatedBy:"]
}, function ($methodClass){ return function (aStream){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._printOn_.call($self,aStream))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["printOn:"]=1,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
[$recv(aStream)._nextPutAll_(" (")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["nextPutAll:"]=1
//>>excludeEnd("ctx");
][0];
$self._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._printOn_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [$recv(aStream)._nextPutAll_(" ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["nextPutAll:"]=2
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "remove:ifAbsent:",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09| bucket |\x0a\x09bucket := self bucketsOfElement: anObject.\x0a\x09^ bucket second\x0a\x09\x09ifNil: [ | obj | obj := bucket first. bucket third remove: obj ifAbsent: [ ^aBlock value ]. size := size - 1. obj ]\x0a\x09\x09ifNotNil: [ :primitiveBucket | self remove: bucket first in: primitiveBucket ifAbsent: aBlock ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["bucketsOfElement:", "ifNil:ifNotNil:", "second", "first", "remove:ifAbsent:", "third", "value", "-", "remove:in:ifAbsent:"]
}, function ($methodClass){ return function (anObject,aBlock){
var self=this,$self=this;
var bucket;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
bucket=$self._bucketsOfElement_(anObject);
$1=$recv(bucket)._second();
if($1 == null || $1.a$nil){
var obj;
obj=[$recv(bucket)._first()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["first"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv(bucket)._third())._remove_ifAbsent_(obj,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[$recv(aBlock)._value()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$self.size=$recv($self.size).__minus((1));
return obj;
} else {
var primitiveBucket;
primitiveBucket=$1;
return $self._remove_in_ifAbsent_($recv(bucket)._first(),primitiveBucket,aBlock);
}
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock,bucket:bucket})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "remove:in:ifAbsent:",
protocol: "private",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anotherObject", "aBlock"],
source: "remove: anObject in: anotherObject ifAbsent: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09if (anObject in anotherObject.store) {\x0a\x09\x09\x09delete anotherObject.store[anObject];\x0a\x09\x09\x09$self.size--;\x0a\x09\x09\x09return anObject;\x0a\x09\x09} else {\x0a\x09\x09\x09return aBlock._value();\x0a\x09\x09}'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09if (anObject in anotherObject.store) {\x0a\x09\x09\x09delete anotherObject.store[anObject];\x0a\x09\x09\x09$self.size--;\x0a\x09\x09\x09return anObject;\x0a\x09\x09} else {\x0a\x09\x09\x09return aBlock._value();\x0a\x09\x09}"]]],
messageSends: []
}, function ($methodClass){ return function (anObject,anotherObject,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		if (anObject in anotherObject.store) {
			delete anotherObject.store[anObject];
			$self.size--;
			return anObject;
		} else {
			return aBlock._value();
		};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:in:ifAbsent:",{anObject:anObject,anotherObject:anotherObject,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "removeAll",
protocol: "adding/removing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeAll\x0a\x09<inlineJS: '\x0a\x09\x09$self.fastBuckets = {\x0a\x09\x09\x09\x22boolean\x22: { store: Object.create(null), fn: function (x) { return {\x22true\x22: true, \x22false\x22: false, \x22null\x22: null}[x]; } },\x0a\x09\x09\x09\x22number\x22: { store: Object.create(null), fn: Number },\x0a\x09\x09\x09\x22string\x22: { store: Object.create(null) }\x0a\x09\x09};\x0a\x09\x09$self.slowBucketStores.forEach(function (x) { x._removeAll(); });\x0a\x09\x09$self.defaultBucket._removeAll();\x0a\x09\x09$self.size = 0;\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09$self.fastBuckets = {\x0a\x09\x09\x09\x22boolean\x22: { store: Object.create(null), fn: function (x) { return {\x22true\x22: true, \x22false\x22: false, \x22null\x22: null}[x]; } },\x0a\x09\x09\x09\x22number\x22: { store: Object.create(null), fn: Number },\x0a\x09\x09\x09\x22string\x22: { store: Object.create(null) }\x0a\x09\x09};\x0a\x09\x09$self.slowBucketStores.forEach(function (x) { x._removeAll(); });\x0a\x09\x09$self.defaultBucket._removeAll();\x0a\x09\x09$self.size = 0;\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		$self.fastBuckets = {
			"boolean": { store: Object.create(null), fn: function (x) { return {"true": true, "false": false, "null": null}[x]; } },
			"number": { store: Object.create(null), fn: Number },
			"string": { store: Object.create(null) }
		};
		$self.slowBucketStores.forEach(function (x) { x._removeAll(); });
		$self.defaultBucket._removeAll();
		$self.size = 0;
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeAll",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "select:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "select: aBlock\x0a\x09| collection |\x0a\x09collection := self class new.\x0a\x09self do: [ :each |\x0a\x09\x09(aBlock value: each) ifTrue: [\x0a\x09\x09\x09collection add: each ] ].\x0a\x09^ collection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "class", "do:", "ifTrue:", "value:", "add:"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
collection=$recv($self._class())._new();
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv(aBlock)._value_(each))){
return $recv(collection)._add_(each);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock,collection:collection})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "select:thenCollect:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["selectBlock", "collectBlock"],
source: "select: selectBlock thenCollect: collectBlock\x0a\x09| collection |\x0a\x09collection := self class new.\x0a\x09self do: [ :each |\x0a\x09\x09(selectBlock value: each) ifTrue: [\x0a\x09\x09\x09collection add: (collectBlock value: each) ] ].\x0a\x09^ collection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "class", "do:", "ifTrue:", "value:", "add:"]
}, function ($methodClass){ return function (selectBlock,collectBlock){
var self=this,$self=this;
var collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
collection=$recv($self._class())._new();
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv(selectBlock)._value_(each)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:"]=1
//>>excludeEnd("ctx");
][0])){
return $recv(collection)._add_($recv(collectBlock)._value_(each));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return collection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:thenCollect:",{selectBlock:selectBlock,collectBlock:collectBlock,collection:collection})});
//>>excludeEnd("ctx");
}; }),
$globals.Set);

$core.addMethod(
$core.method({
selector: "size",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.size;

}; }),
$globals.Set);



$core.addClass("ProtoStream", $globals.Object, [], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProtoStream.comment="I am the abstract base for different accessor for a sequence of objects. This sequence is referred to as my \x22contents\x22.\x0aMy instances are read/write streams modifying the contents.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "<<",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "<< anObject\x0a\x09self write: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["write:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._write_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"<<",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "atEnd",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atEnd\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"atEnd",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "atStart",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atStart\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"atStart",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "contents",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"contents",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "do:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09[ self atEnd ] whileFalse: [ aBlock value: self next ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["whileFalse:", "atEnd", "value:", "next"]
}, function ($methodClass){ return function (aBlock){
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
return $recv(aBlock)._value_($self._next());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x09^ self atStart and: [ self atEnd ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["and:", "atStart", "atEnd"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._atStart())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "next",
protocol: "reading",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09^ self atEnd\x0a\x09\x09ifTrue: [ nil ]\x0a\x09\x09ifFalse: [ self subclassResponsibility ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "atEnd", "subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._atEnd())){
return nil;
} else {
return $self._subclassResponsibility();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nextPut: anObject\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "nextPutAll:",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "nextPutAll: aCollection\x0a\x09aCollection do: [ :each |\x0a\x09\x09self nextPut: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "nextPut:"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aCollection)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._nextPut_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "nextPutString:",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPutString: aString\x0a\x09self nextPut: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPut:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._nextPut_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "peek",
protocol: "reading",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "peek\x0a\x09^ self atEnd\x0a\x09\x09ifTrue: [ nil ]\x0a\x09\x09ifFalse: [ self subclassResponsibility ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "atEnd", "subclassResponsibility"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._atEnd())){
return nil;
} else {
return $self._subclassResponsibility();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"peek",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "reset",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"reset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "resetContents",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetContents\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"resetContents",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "setToEnd",
protocol: "positioning",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setToEnd\x0a\x09self subclassResponsibility",
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
}, function($ctx1) {$ctx1.fill(self,"setToEnd",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "setToStart",
protocol: "positioning",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setToStart\x0a\x09self reset",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reset"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._reset();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setToStart",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);

$core.addMethod(
$core.method({
selector: "write:",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "write: anObject\x0a\x09anObject putOn: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["putOn:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anObject)._putOn_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"write:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "on: aCollection\x0a\x09\x09^ self new\x0a\x09\x09setCollection: aCollection;\x0a\x09\x09setStreamSize: aCollection size;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["setCollection:", "new", "setStreamSize:", "size", "yourself"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._setCollection_(aCollection);
$recv($1)._setStreamSize_($recv(aCollection)._size());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtoStream.a$cls);


$core.addClass("Stream", $globals.ProtoStream, ["collection", "position", "streamSize"], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Stream.comment="I represent an accessor for a sequence of objects. This sequence is referred to as my \x22contents\x22.\x0aMy instances are read/write streams to the contents sequence collection.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "atEnd",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atEnd\x0a\x09^ self position = self size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=", "position", "size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._position()).__eq($self._size());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atEnd",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "atStart",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atStart\x0a\x09^ self position = 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=", "position"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._position()).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atStart",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "close",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "collection",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "collection\x0a\x09^ collection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.collection;

}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "contents",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09^ self collection\x0a\x09\x09copyFrom: 1\x0a\x09\x09to: self streamSize",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copyFrom:to:", "collection", "streamSize"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._collection())._copyFrom_to_((1),$self._streamSize());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "flush",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flush",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return self;

}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x09^ self size = 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["=", "size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._size()).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "next",
protocol: "reading",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09^ self atEnd\x0a\x09\x09ifTrue: [ nil ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09self position: self position + 1.\x0a\x09\x09\x09collection at: self position ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "atEnd", "position:", "+", "position", "at:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($self._atEnd())){
return nil;
} else {
$self._position_($recv([$self._position()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["position"]=1
//>>excludeEnd("ctx");
][0]).__plus((1)));
return $recv($self.collection)._at_($self._position());
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "next:",
protocol: "reading",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09\x09self atEnd ifFalse: [\x0a\x09\x09tempCollection add: self next ]].\x0a\x09^ tempCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "atEnd", "add:", "next"]
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
var tempCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tempCollection=$recv($recv($self._collection())._class())._new();
$recv(anInteger)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(!$core.assert($self._atEnd())){
return $recv(tempCollection)._add_($self._next());
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return tempCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger,tempCollection:tempCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nextPut: anObject\x0a\x09self position: self position + 1.\x0a\x09self collection at: self position put: anObject.\x0a\x09self setStreamSize: (self streamSize max: self position)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["position:", "+", "position", "at:put:", "collection", "setStreamSize:", "max:", "streamSize"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._position_($recv([$self._position()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["position"]=1
//>>excludeEnd("ctx");
][0]).__plus((1)));
$recv($self._collection())._at_put_([$self._position()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["position"]=2
//>>excludeEnd("ctx");
][0],anObject);
$self._setStreamSize_($recv($self._streamSize())._max_($self._position()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "peek",
protocol: "reading",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "peek\x0a\x09^ self atEnd ifFalse: [\x0a\x09\x09self collection at: self position + 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "atEnd", "at:", "collection", "+", "position"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($self._atEnd())){
return $recv($self._collection())._at_($recv($self._position()).__plus((1)));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"peek",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "position",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "position\x0a\x09^ position ifNil: [ position := 0 ]",
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
$1=$self.position;
if($1 == null || $1.a$nil){
$self.position=(0);
return $self.position;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"position",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "position:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "position: anInteger\x0a\x09position := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
$self.position=anInteger;
return self;

}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "reset",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09self position: 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["position:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._position_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "resetContents",
protocol: "actions",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetContents\x0a\x09self reset.\x0a\x09self setStreamSize: 0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reset", "setStreamSize:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._reset();
$self._setStreamSize_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetContents",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "setCollection:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "setCollection: aCollection\x0a\x09collection := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
$self.collection=aCollection;
return self;

}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "setStreamSize:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "setStreamSize: anInteger\x0a\x09streamSize := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
$self.streamSize=anInteger;
return self;

}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "setToEnd",
protocol: "positioning",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setToEnd\x0a\x09self position: self size",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["position:", "size"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._position_($self._size());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setToEnd",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "size",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ self streamSize",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["streamSize"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._streamSize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "skip:",
protocol: "positioning",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "skip: anInteger\x0a\x09self position: ((self position + anInteger) min: self size max: 0)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["position:", "min:max:", "+", "position", "size"]
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._position_($recv($recv($self._position()).__plus(anInteger))._min_max_($self._size(),(0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"skip:",{anInteger:anInteger})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream);

$core.addMethod(
$core.method({
selector: "streamSize",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "streamSize\x0a\x09^ streamSize",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.streamSize;

}; }),
$globals.Stream);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "on: aCollection\x0a\x09\x09^ self new\x0a\x09\x09setCollection: aCollection;\x0a\x09\x09setStreamSize: aCollection size;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["setCollection:", "new", "setStreamSize:", "size", "yourself"]
}, function ($methodClass){ return function (aCollection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._setCollection_(aCollection);
$recv($1)._setStreamSize_($recv(aCollection)._size());
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.Stream.a$cls);


$core.addClass("StringStream", $globals.Stream, [], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StringStream.comment="I am a Stream specific to `String` objects.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "cr",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cr\x0a\x09^ self nextPutAll: String cr",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "cr"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._nextPutAll_($recv($globals.String)._cr());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cr",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "crlf",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "crlf\x0a\x09^ self nextPutAll: String crlf",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "crlf"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._nextPutAll_($recv($globals.String)._crlf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crlf",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "lf",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lf\x0a\x09^ self nextPutAll: String lf",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "lf"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._nextPutAll_($recv($globals.String)._lf());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lf",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "next:",
protocol: "reading",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "next: anInteger\x0a\x09| tempCollection |\x0a\x09tempCollection := self collection class new.\x0a\x09anInteger timesRepeat: [\x0a\x09\x09self atEnd ifFalse: [\x0a\x09\x09tempCollection := tempCollection, self next ]].\x0a\x09^ tempCollection",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "class", "collection", "timesRepeat:", "ifFalse:", "atEnd", ",", "next"]
}, function ($methodClass){ return function (anInteger){
var self=this,$self=this;
var tempCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tempCollection=$recv($recv($self._collection())._class())._new();
$recv(anInteger)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(!$core.assert($self._atEnd())){
tempCollection=$recv(tempCollection).__comma($self._next());
return tempCollection;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return tempCollection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger,tempCollection:tempCollection})});
//>>excludeEnd("ctx");
}; }),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPut: aString\x0a\x09self nextPutAll: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._nextPutAll_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "nextPutAll:",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPutAll: aString\x0a\x09| pre post |\x0a\x09self position = self collection size ifTrue: [ self setCollection: self collection, aString ] ifFalse: [\x0a\x09\x09pre := self collection copyFrom: 1 to: self position.\x0a\x09\x09post := self collection copyFrom: (self position + 1 + aString size) to: self collection size.\x0a\x09\x09self setCollection: pre, aString, post\x0a\x09].\x0a\x09self position: self position + aString size.\x0a\x09self setStreamSize: (self streamSize max: self position)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "=", "position", "size", "collection", "setCollection:", ",", "copyFrom:to:", "+", "position:", "setStreamSize:", "max:", "streamSize"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
var pre,post;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv([$self._position()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["position"]=1
//>>excludeEnd("ctx");
][0]).__eq([$recv([$self._collection()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["collection"]=1
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]))){
[$self._setCollection_([$recv([$self._collection()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["collection"]=2
//>>excludeEnd("ctx");
][0]).__comma(aString)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["setCollection:"]=1
//>>excludeEnd("ctx");
][0];
} else {
pre=[$recv([$self._collection()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["collection"]=3
//>>excludeEnd("ctx");
][0])._copyFrom_to_((1),[$self._position()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["position"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["copyFrom:to:"]=1
//>>excludeEnd("ctx");
][0];
post=$recv([$self._collection()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["collection"]=4
//>>excludeEnd("ctx");
][0])._copyFrom_to_([$recv([$recv([$self._position()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["position"]=3
//>>excludeEnd("ctx");
][0]).__plus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=2
//>>excludeEnd("ctx");
][0]).__plus([$recv(aString)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0],[$recv($self._collection())._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=3
//>>excludeEnd("ctx");
][0]);
$self._setCollection_([$recv($recv(pre).__comma(aString)).__comma(post)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]);
}
$self._position_($recv([$self._position()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["position"]=4
//>>excludeEnd("ctx");
][0]).__plus($recv(aString)._size()));
$self._setStreamSize_($recv($self._streamSize())._max_($self._position()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString,pre:pre,post:post})});
//>>excludeEnd("ctx");
}; }),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "nextPutString:",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPutString: aString\x0a\x09self nextPutAll: aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._nextPutAll_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "print:",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "print: anObject\x0a\x09anObject printOn: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["printOn:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anObject)._printOn_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"print:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "printSymbol:",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "printSymbol: anObject\x0a\x09anObject asSymbolPrintOn: self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asSymbolPrintOn:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(anObject)._asSymbolPrintOn_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printSymbol:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "space",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "space\x0a\x09self nextPut: ' '",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPut:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._nextPut_(" ");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"space",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringStream);

$core.addMethod(
$core.method({
selector: "tab",
protocol: "writing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tab\x0a\x09^ self nextPutAll: String tab",
referencedClasses: ["String"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextPutAll:", "tab"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._nextPutAll_($recv($globals.String)._tab());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tab",{})});
//>>excludeEnd("ctx");
}; }),
$globals.StringStream);



$core.addClass("Queue", $globals.Object, ["read", "readIndex", "write"], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Queue.comment="I am a one-sided queue.\x0a\x0a## Usage\x0a\x0aUse `#nextPut:` to add items to the queue.\x0aUse `#next` or `#nextIfAbsent:` to get (and remove) the next item in the queue.\x0a\x0a## Implementation notes\x0a\x0aA Queue uses two OrderedCollections inside,\x0a`read` is at the front, is not modified and only read using `readIndex`.\x0a`write` is at the back and is appended new items.\x0aWhen `read` is exhausted, `write` is promoted to `read` and new `write` is created.\x0a\x0aAs a consequence, no data moving is done by me, write appending may do data moving\x0awhen growing `write`, but this is left to engine to implement as good as it chooses to.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09read := OrderedCollection new.\x0a\x09write := OrderedCollection new.\x0a\x09readIndex := 1",
referencedClasses: ["OrderedCollection"],
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
$self.read=[$recv($globals.OrderedCollection)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$self.write=$recv($globals.OrderedCollection)._new();
$self.readIndex=(1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Queue);

$core.addMethod(
$core.method({
selector: "next",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09^ self nextIfAbsent: [ self error: 'Cannot read from empty Queue.' ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["nextIfAbsent:", "error:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._nextIfAbsent_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._error_("Cannot read from empty Queue.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Queue);

$core.addMethod(
$core.method({
selector: "nextIfAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "nextIfAbsent: aBlock\x0a\x09| result |\x0a\x09result := read at: readIndex ifAbsent: [\x0a\x09\x09write ifEmpty: [\x0a\x09\x09\x09readIndex > 1 ifTrue: [ read := #(). readIndex := 1 ].\x0a\x09\x09\x09^ aBlock value ].\x0a\x09\x09read := write.\x0a\x09\x09readIndex := 1.\x0a\x09\x09write := OrderedCollection new.\x0a\x09\x09read first ].\x0a\x09read at: readIndex put: nil.\x0a\x09readIndex := readIndex + 1.\x0a\x09^ result",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "ifEmpty:", "ifTrue:", ">", "value", "new", "first", "at:put:", "+"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
result=$recv($self.read)._at_ifAbsent_($self.readIndex,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($self.write)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
if($core.assert($recv($self.readIndex).__gt((1)))){
$self.read=[];
$self.readIndex=(1);
$self.readIndex;
}
throw $early=[$recv(aBlock)._value()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$self.read=$self.write;
$self.readIndex=(1);
$self.write=$recv($globals.OrderedCollection)._new();
return $recv($self.read)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($self.read)._at_put_($self.readIndex,nil);
$self.readIndex=$recv($self.readIndex).__plus((1));
return result;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextIfAbsent:",{aBlock:aBlock,result:result})});
//>>excludeEnd("ctx");
}; }),
$globals.Queue);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nextPut: anObject\x0a\x09write add: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.write)._add_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Queue);



$core.addClass("RegularExpression", $globals.Object, [], "Kernel-Collections");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.RegularExpression.comment="I represent a regular expression object. My instances are JavaScript `RegExp` object.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "compile:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compile: aString\x0a\x09<inlineJS: 'return self.compile(aString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.compile(aString)"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.compile(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.RegularExpression);

$core.addMethod(
$core.method({
selector: "exec:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "exec: aString\x0a\x09<inlineJS: 'return self.exec(aString) || nil'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.exec(aString) || nil"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.exec(aString) || nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exec:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.RegularExpression);

$core.addMethod(
$core.method({
selector: "test:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "test: aString\x0a\x09<inlineJS: 'return self.test(aString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.test(aString)"]]],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.test(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.RegularExpression);


$core.addMethod(
$core.method({
selector: "fromString:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "fromString: aString\x0a\x09\x09^ self fromString: aString flag: ''",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["fromString:flag:"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._fromString_flag_(aString,"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.RegularExpression.a$cls);

$core.addMethod(
$core.method({
selector: "fromString:flag:",
protocol: "instance creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "fromString: aString flag: anotherString\x0a\x09<inlineJS: 'return new RegExp(aString, anotherString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return new RegExp(aString, anotherString)"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anotherString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new RegExp(aString, anotherString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromString:flag:",{aString:aString,anotherString:anotherString})});
//>>excludeEnd("ctx");
}; }),
$globals.RegularExpression.a$cls);


$core.addTrait("TKeyValueCollection", "Kernel-Collections");
$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "at: anIndex\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value stored at anIndex.\x0a\x09Otherwise, raise an error.\x22\x0a\x0a\x09^ self at: anIndex ifAbsent: [ self errorNotFound ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "errorNotFound"]
}, function ($methodClass){ return function (anIndex){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._at_ifAbsent_(anIndex,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._errorNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{anIndex:anIndex})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollection);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value stored at anIndex.\x0a\x09Otherwise, answer the value of aBlock.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (anIndex,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollection);

$core.addMethod(
$core.method({
selector: "at:ifAbsentPut:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsentPut: aBlock\x0a\x09^ self at: aKey ifAbsent: [\x0a\x09\x09self at: aKey put: aBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifAbsent:", "at:put:", "value"]
}, function ($methodClass){ return function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._at_ifAbsent_(aKey,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._at_put_(aKey,$recv(aBlock)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsentPut:",{aKey:aKey,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollection);

$core.addMethod(
$core.method({
selector: "at:ifPresent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock"],
source: "at: anIndex ifPresent: aBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value of evaluating aBlock with the value stored at anIndex.\x0a\x09Otherwise, answer nil.\x22\x0a\x0a\x09^ self at: anIndex ifPresent: aBlock ifAbsent: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:ifPresent:ifAbsent:"]
}, function ($methodClass){ return function (anIndex,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._at_ifPresent_ifAbsent_(anIndex,aBlock,(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{anIndex:anIndex,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollection);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Lookup the given index in the receiver.\x0a\x09If it is present, answer the value of evaluating aBlock with the value stored at anIndex.\x0a\x09Otherwise, answer the value of anotherBlock.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (anIndex,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollection);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09\x22Store anObject under the given index in the receiver.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (anIndex,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollection);

$core.addMethod(
$core.method({
selector: "indexOf:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "indexOf: anObject\x0a\x09\x22Lookup index at which anObject is stored in the receiver.\x0a\x09If not present, raise an error.\x22\x0a\x0a\x09^ self indexOf: anObject ifAbsent: [ self errorNotFound ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["indexOf:ifAbsent:", "errorNotFound"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $self._indexOf_ifAbsent_(anObject,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._errorNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollection);

$core.addMethod(
$core.method({
selector: "indexOf:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09\x22Lookup index at which anObject is stored in the receiver.\x0a\x09If not present, return value of executing aBlock.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (anObject,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollection);

$core.addMethod(
$core.method({
selector: "with:do:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anotherCollection", "aBlock"],
source: "with: anotherCollection do: aBlock\x0a\x09\x22Calls aBlock with every value from self\x0a\x09and with indetically-indexed value from anotherCollection\x22\x0a\x0a\x09self withIndexDo: [ :each :index |\x0a\x09\x09aBlock value: each value: (anotherCollection at: index) ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["withIndexDo:", "value:value:", "at:"]
}, function ($methodClass){ return function (anotherCollection,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._withIndexDo_((function(each,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_value_(each,$recv(anotherCollection)._at_(index));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollection);

$core.addMethod(
$core.method({
selector: "withIndexDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09\x22Calls aBlock with every value from self\x0a\x09and with its index as the second argument\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["subclassResponsibility"]
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TKeyValueCollection);


$core.addTrait("TNativeZeroBasedCollection", "Kernel-Collections");
$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock"],
source: "at: anIndex ifAbsent: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09return anIndex >= 1 && anIndex <= self.length\x0a\x09\x09\x09? self[anIndex - 1]\x0a\x09\x09\x09: aBlock._value()\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return anIndex >= 1 && anIndex <= self.length\x0a\x09\x09\x09? self[anIndex - 1]\x0a\x09\x09\x09: aBlock._value()\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (anIndex,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return anIndex >= 1 && anIndex <= self.length
			? self[anIndex - 1]
			: aBlock._value()
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{anIndex:anIndex,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TNativeZeroBasedCollection);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aBlock", "anotherBlock"],
source: "at: anIndex ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09<inlineJS: '\x0a\x09\x09return anIndex >= 1 && anIndex <= self.length\x0a\x09\x09\x09? aBlock._value_(self[anIndex - 1])\x0a\x09\x09\x09: anotherBlock._value()\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09return anIndex >= 1 && anIndex <= self.length\x0a\x09\x09\x09? aBlock._value_(self[anIndex - 1])\x0a\x09\x09\x09: anotherBlock._value()\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (anIndex,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		return anIndex >= 1 && anIndex <= self.length
			? aBlock._value_(self[anIndex - 1])
			: anotherBlock._value()
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{anIndex:anIndex,aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TNativeZeroBasedCollection);

$core.addMethod(
$core.method({
selector: "detect:ifNone:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "anotherBlock"],
source: "detect: aBlock ifNone: anotherBlock\x0a\x09<inlineJS: '\x0a\x09\x09for(var i = 0; i < self.length; i++)\x0a\x09\x09\x09if(aBlock._value_(self[i]))\x0a\x09\x09\x09\x09return self[i];\x0a\x09\x09return anotherBlock._value();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09for(var i = 0; i < self.length; i++)\x0a\x09\x09\x09if(aBlock._value_(self[i]))\x0a\x09\x09\x09\x09return self[i];\x0a\x09\x09return anotherBlock._value();\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		for(var i = 0; i < self.length; i++)
			if(aBlock._value_(self[i]))
				return self[i];
		return anotherBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detect:ifNone:",{aBlock:aBlock,anotherBlock:anotherBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TNativeZeroBasedCollection);

$core.addMethod(
$core.method({
selector: "do:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09for(var i=0; i < self.length; i++) {\x0a\x09\x09\x09aBlock._value_(self[i]);\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09for(var i=0; i < self.length; i++) {\x0a\x09\x09\x09aBlock._value_(self[i]);\x0a\x09\x09}\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		for(var i=0; i < self.length; i++) {
			aBlock._value_(self[i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TNativeZeroBasedCollection);

$core.addMethod(
$core.method({
selector: "indexOf:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "indexOf: anObject ifAbsent: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09for(var i=0; i < self.length; i++) {\x0a\x09\x09\x09if($recv(self[i]).__eq(anObject)) {return i+1}\x0a\x09\x09};\x0a\x09\x09return aBlock._value();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09for(var i=0; i < self.length; i++) {\x0a\x09\x09\x09if($recv(self[i]).__eq(anObject)) {return i+1}\x0a\x09\x09};\x0a\x09\x09return aBlock._value();\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (anObject,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		for(var i=0; i < self.length; i++) {
			if($recv(self[i]).__eq(anObject)) {return i+1}
		};
		return aBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:ifAbsent:",{anObject:anObject,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TNativeZeroBasedCollection);

$core.addMethod(
$core.method({
selector: "indexOf:startingAt:ifAbsent:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "start", "aBlock"],
source: "indexOf: anObject startingAt: start ifAbsent: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09for(var i=start - 1; i < self.length; i++){\x0a\x09\x09\x09if($recv(self[i]).__eq(anObject)) {return i+1}\x0a\x09\x09}\x0a\x09\x09return aBlock._value();\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09for(var i=start - 1; i < self.length; i++){\x0a\x09\x09\x09if($recv(self[i]).__eq(anObject)) {return i+1}\x0a\x09\x09}\x0a\x09\x09return aBlock._value();\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (anObject,start,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		for(var i=start - 1; i < self.length; i++){
			if($recv(self[i]).__eq(anObject)) {return i+1}
		}
		return aBlock._value();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:startingAt:ifAbsent:",{anObject:anObject,start:start,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TNativeZeroBasedCollection);

$core.addMethod(
$core.method({
selector: "single",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "single\x0a<inlineJS: '\x0a\x09if (self.length == 0) throw new Error(\x22Collection is empty\x22);\x0a\x09if (self.length > 1) throw new Error(\x22Collection holds more than one element.\x22);\x0a\x09return self[0];\x0a'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09if (self.length == 0) throw new Error(\x22Collection is empty\x22);\x0a\x09if (self.length > 1) throw new Error(\x22Collection holds more than one element.\x22);\x0a\x09return self[0];"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	if (self.length == 0) throw new Error("Collection is empty");
	if (self.length > 1) throw new Error("Collection holds more than one element.");
	return self[0];;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"single",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TNativeZeroBasedCollection);

$core.addMethod(
$core.method({
selector: "size",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09<inlineJS: 'return self.length'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return self.length"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.length;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{})});
//>>excludeEnd("ctx");
}; }),
$globals.TNativeZeroBasedCollection);

$core.addMethod(
$core.method({
selector: "with:do:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anotherCollection", "aBlock"],
source: "with: anotherCollection do: aBlock\x0a\x09<inlineJS: '\x0a\x09    $recv(anotherCollection)._first_(0); // #guardSequenceableCollection\x0a\x09\x09for(var i=0; i<self.length; i++) {\x0a\x09\x09\x09aBlock._value_value_(self[i], anotherCollection[i]);\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09    $recv(anotherCollection)._first_(0); // #guardSequenceableCollection\x0a\x09\x09for(var i=0; i<self.length; i++) {\x0a\x09\x09\x09aBlock._value_value_(self[i], anotherCollection[i]);\x0a\x09\x09}\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (anotherCollection,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	    $recv(anotherCollection)._first_(0); // #guardSequenceableCollection
		for(var i=0; i<self.length; i++) {
			aBlock._value_value_(self[i], anotherCollection[i]);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:do:",{anotherCollection:anotherCollection,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TNativeZeroBasedCollection);

$core.addMethod(
$core.method({
selector: "withIndexDo:",
protocol: "enumerating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "withIndexDo: aBlock\x0a\x09<inlineJS: '\x0a\x09\x09for(var i=0; i < self.length; i++) {\x0a\x09\x09\x09aBlock._value_value_(self[i], i+1);\x0a\x09\x09}\x0a\x09'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09\x09for(var i=0; i < self.length; i++) {\x0a\x09\x09\x09aBlock._value_value_(self[i], i+1);\x0a\x09\x09}\x0a\x09"]]],
messageSends: []
}, function ($methodClass){ return function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

		for(var i=0; i < self.length; i++) {
			aBlock._value_value_(self[i], i+1);
		}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withIndexDo:",{aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.TNativeZeroBasedCollection);

$core.setTraitComposition([{trait: $globals.TKeyValueCollection}], $globals.AssociativeCollection);
$core.setTraitComposition([{trait: $globals.TKeyValueCollection}], $globals.SequenceableCollection);
$core.setTraitComposition([{trait: $globals.TNativeZeroBasedCollection}], $globals.Array);
$core.setTraitComposition([{trait: $globals.TNativeZeroBasedCollection}], $globals.String);

});
