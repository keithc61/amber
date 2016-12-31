define(["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
var $core=$boot.api,nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage('Platform-DOM-Tests');
$core.packages["Platform-DOM-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["Platform-DOM-Tests"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('PlatformDomTest', $globals.TestCase, ['fixtureDiv'], 'Platform-DOM-Tests');
$core.addMethod(
$core.method({
selector: "testEntityConversion",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.PlatformDom)._isFeasible();
if($core.assert($1)){
self._assert_equals_("&copy;"._htmlTextContent(),"©");
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEntityConversion",{},$globals.PlatformDomTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEntityConversion\x0a\x09PlatformDom isFeasible ifTrue: [ self assert: '&copy;' htmlTextContent equals: '©' ]",
referencedClasses: ["PlatformDom"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isFeasible", "assert:equals:", "htmlTextContent"]
}),
$globals.PlatformDomTest);

$core.addMethod(
$core.method({
selector: "testTextContentDoesNotRunScript",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.PlatformDom)._isFeasible();
if($core.assert($1)){
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return "<script>throw new Error(\x22Intentional\x22)</script>"._htmlTextContent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}),$globals.Error);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTextContentDoesNotRunScript",{},$globals.PlatformDomTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTextContentDoesNotRunScript\x0a\x09PlatformDom isFeasible ifTrue: [\x0a\x09\x09self shouldnt: [ '<script>throw new Error(\x22Intentional\x22)</script>' htmlTextContent ] raise: Error ]",
referencedClasses: ["PlatformDom", "Error"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isFeasible", "shouldnt:raise:", "htmlTextContent"]
}),
$globals.PlatformDomTest);


});
