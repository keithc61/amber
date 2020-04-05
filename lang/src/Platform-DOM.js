define(["amber/boot", "require", "amber/core/Kernel-Collections", "amber/core/Kernel-Infrastructure", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Platform-DOM");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("PlatformDom", $globals.Object, [], "Platform-DOM");

$core.addMethod(
$core.method({
selector: "isDomNode:",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isDomNode: anObject\x0a<inlineJS: '\x0a\x09return anObject.nodeType > 0 &&\x0a\x09\x09Object.prototype.toString.call(anObject) !== \x22[object Object]\x22\x0a'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a\x09return anObject.nodeType > 0 &&\x0a\x09\x09Object.prototype.toString.call(anObject) !== \x22[object Object]\x22"]]],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	return anObject.nodeType > 0 &&
		Object.prototype.toString.call(anObject) !== "[object Object]";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDomNode:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.PlatformDom.a$cls);

$core.addMethod(
$core.method({
selector: "isFeasible",
protocol: "testing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFeasible\x0a<inlineJS: '\x0a  if (typeof document === \x22undefined\x22) return false;\x0a  try {\x0a    var d = document.createElement(\x22div\x22),\x0a\x09  f = document.createDocumentFragment(),\x0a\x09  t = document.createTextNode(\x22Hello, Amber!\x22);\x0a\x09f.appendChild(t);\x0a\x09d.insertBefore(f, null);\x0a\x09return d.innerHTML === \x22Hello, Amber!\x22;\x0a  } catch (e) {\x0a    return false;\x0a  }\x0a'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["\x0a  if (typeof document === \x22undefined\x22) return false;\x0a  try {\x0a    var d = document.createElement(\x22div\x22),\x0a\x09  f = document.createDocumentFragment(),\x0a\x09  t = document.createTextNode(\x22Hello, Amber!\x22);\x0a\x09f.appendChild(t);\x0a\x09d.insertBefore(f, null);\x0a\x09return d.innerHTML === \x22Hello, Amber!\x22;\x0a  } catch (e) {\x0a    return false;\x0a  }"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

  if (typeof document === "undefined") return false;
  try {
    var d = document.createElement("div"),
	  f = document.createDocumentFragment(),
	  t = document.createTextNode("Hello, Amber!");
	f.appendChild(t);
	d.insertBefore(f, null);
	return d.innerHTML === "Hello, Amber!";
  } catch (e) {
    return false;
  };
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFeasible",{})});
//>>excludeEnd("ctx");
}; }),
$globals.PlatformDom.a$cls);

$core.addMethod(
$core.method({
selector: "newCustomEvent:detail:",
protocol: "creation",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "newCustomEvent: aString detail: anObject\x0a<inlineJS: 'return new CustomEvent(aString, {detail: anObject})'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return new CustomEvent(aString, {detail: anObject})"]]],
messageSends: []
}, function ($methodClass){ return function (aString,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new CustomEvent(aString, {detail: anObject});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCustomEvent:detail:",{aString:aString,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.PlatformDom.a$cls);

$core.addMethod(
$core.method({
selector: "toArray:",
protocol: "converting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomList"],
source: "toArray: aDomList\x0a<inlineJS: 'return Array.prototype.slice.call(aDomList)'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["return Array.prototype.slice.call(aDomList)"]]],
messageSends: []
}, function ($methodClass){ return function (aDomList){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Array.prototype.slice.call(aDomList);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toArray:",{aDomList:aDomList})});
//>>excludeEnd("ctx");
}; }),
$globals.PlatformDom.a$cls);

$core.addMethod(
$core.method({
selector: "asDomNode",
protocol: "*Platform-DOM",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asDomNode\x0a\x09| fragment |\x0a\x09fragment := document createDocumentFragment.\x0a\x09self do: [ :each | fragment appendChild: each asDomNode ].\x0a\x09^ fragment",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["createDocumentFragment", "do:", "appendChild:", "asDomNode"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
var fragment;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
fragment=$recv(document)._createDocumentFragment();
$self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(fragment)._appendChild_($recv(each)._asDomNode());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return fragment;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asDomNode",{fragment:fragment})});
//>>excludeEnd("ctx");
}; }),
$globals.Collection);

$core.addMethod(
$core.method({
selector: "asDomNode",
protocol: "*Platform-DOM",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asDomNode\x0a\x09(PlatformDom isDomNode: jsObject)\x0a\x09\x09ifTrue: [ ^ jsObject ]\x0a\x09\x09ifFalse: [ ^ super asDomNode ]",
referencedClasses: ["PlatformDom"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:ifFalse:", "isDomNode:", "asDomNode"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert($recv($globals.PlatformDom)._isDomNode_($self.jsObject))){
return $self.jsObject;
} else {
return [(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._asDomNode.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asDomNode",{})});
//>>excludeEnd("ctx");
}; }),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "asDomNode",
protocol: "*Platform-DOM",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asDomNode\x0a\x09^ document createTextNode: self asString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["createTextNode:", "asString"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(document)._createTextNode_($self._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asDomNode",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

$core.addMethod(
$core.method({
selector: "htmlTextContent",
protocol: "*Platform-DOM",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "htmlTextContent\x0a<inlineJS: 'var d=document.createElement(\x22div\x22);d.innerHTML=self;return d.textContent||d.innerText;'>",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [["inlineJS:", ["var d=document.createElement(\x22div\x22);d.innerHTML=self;return d.textContent||d.innerText;"]]],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var d=document.createElement("div");d.innerHTML=self;return d.textContent||d.innerText;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"htmlTextContent",{})});
//>>excludeEnd("ctx");
}; }),
$globals.String);

});
