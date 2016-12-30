define(["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
var $core=$boot.api,nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage('Platform-DOM');
$core.packages["Platform-DOM"].innerEval = function (expr) { return eval(expr); };
$core.packages["Platform-DOM"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('PlatformDom', $globals.Object, [], 'Platform-DOM');

$core.addMethod(
$core.method({
selector: "isDomNode:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	return anObject.nodeType > 0 &&
		Object.prototype.toString.call(anObject) !== "[object Object]";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDomNode:",{anObject:anObject},$globals.PlatformDom.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isDomNode: anObject\x0a<inlineJS: '\x0a\x09return anObject.nodeType > 0 &&\x0a\x09\x09Object.prototype.toString.call(anObject) !== \x22[object Object]\x22\x0a'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PlatformDom.klass);

$core.addMethod(
$core.method({
selector: "isFeasible",
protocol: 'testing',
fn: function (){
var self=this;
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
}, function($ctx1) {$ctx1.fill(self,"isFeasible",{},$globals.PlatformDom.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFeasible\x0a<inlineJS: '\x0a  if (typeof document === \x22undefined\x22) return false;\x0a  try {\x0a    var d = document.createElement(\x22div\x22),\x0a\x09  f = document.createDocumentFragment(),\x0a\x09  t = document.createTextNode(\x22Hello, Amber!\x22);\x0a\x09f.appendChild(t);\x0a\x09d.insertBefore(f, null);\x0a\x09return d.innerHTML === \x22Hello, Amber!\x22;\x0a  } catch (e) {\x0a    return false;\x0a  }\x0a'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PlatformDom.klass);

$core.addMethod(
$core.method({
selector: "newDocumentFragment",
protocol: 'node creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return document.createDocumentFragment();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newDocumentFragment",{},$globals.PlatformDom.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newDocumentFragment\x0a<inlineJS: 'return document.createDocumentFragment()'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PlatformDom.klass);

$core.addMethod(
$core.method({
selector: "newElement:",
protocol: 'node creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return document.createElement(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newElement:",{aString:aString},$globals.PlatformDom.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "newElement: aString\x0a<inlineJS: 'return document.createElement(aString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PlatformDom.klass);

$core.addMethod(
$core.method({
selector: "newTextNode:",
protocol: 'node creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return document.createTextNode(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newTextNode:",{aString:aString},$globals.PlatformDom.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "newTextNode: aString\x0a<inlineJS: 'return document.createTextNode(aString)'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PlatformDom.klass);

});
