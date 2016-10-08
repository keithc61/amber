define("{%= namespace %}/{%= name %}-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
var $core=$boot.api,nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage('{%= name %}-Tests');
$core.packages["{%= name %}-Tests"].transport = {"type":"amd","amdNamespace":"{%= namespace %}"};

$core.addClass('{%= name %}Test', $globals.TestCase, [], '{%= name %}-Tests');

});
