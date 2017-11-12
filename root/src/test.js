define("{%= namespace %}/{%= name %}-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('{%= name %}-Tests');
($core.packageDescriptors||$core.packages)["{%= name %}-Tests"].innerEval = function (expr) { return eval(expr); };
($core.packageDescriptors||$core.packages)["{%= name %}-Tests"].transport = {"type":"amd","amdNamespace":"{%= namespace %}"};

$core.addClass('{%= name %}Test', $globals.TestCase, [], '{%= name %}-Tests');

});
