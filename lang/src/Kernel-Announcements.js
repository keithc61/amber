define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Kernel-Announcements");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber/core"};

$core.addClass("AnnouncementSubscription", $globals.Object, ["valuable", "announcementClass"], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AnnouncementSubscription.comment="I am a single entry in a subscription registry of an `Announcer`.\x0aSeveral subscriptions by the same object is possible.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announcementClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcementClass\x0a\x09^ announcementClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.announcementClass;

}; }),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "announcementClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "announcementClass: aClass\x0a\x09announcementClass := Smalltalk globals at: aClass name",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:", "globals", "name"]
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.announcementClass=$recv($recv($globals.Smalltalk)._globals())._at_($recv(aClass)._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcementClass:",{aClass:aClass})});
//>>excludeEnd("ctx");
}; }),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "deliver:",
protocol: "announcing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "deliver: anAnnouncement\x0a\x09(self handlesAnnouncement: anAnnouncement)\x0a\x09\x09ifTrue: [ self valuable value: anAnnouncement ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "handlesAnnouncement:", "value:", "valuable"]
}, function ($methodClass){ return function (anAnnouncement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._handlesAnnouncement_(anAnnouncement);
if($core.assert($1)){
$recv($self._valuable())._value_(anAnnouncement);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deliver:",{anAnnouncement:anAnnouncement})});
//>>excludeEnd("ctx");
}; }),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "handlesAnnouncement:",
protocol: "announcing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "handlesAnnouncement: anAnnouncement\x0a\x09\x22anAnnouncement might be announced from within another Amber environment\x22\x0a\x09\x0a\x09^ (Smalltalk globals at: anAnnouncement class name) includesBehavior: self announcementClass",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["includesBehavior:", "at:", "globals", "name", "class", "announcementClass"]
}, function ($methodClass){ return function (anAnnouncement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv($globals.Smalltalk)._globals())._at_($recv($recv(anAnnouncement)._class())._name()))._includesBehavior_($self._announcementClass());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handlesAnnouncement:",{anAnnouncement:anAnnouncement})});
//>>excludeEnd("ctx");
}; }),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "receiver",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "receiver\x0a\x09^ self valuable receiver",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["receiver", "valuable"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._valuable())._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "valuable",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "valuable\x0a\x09^ valuable",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.valuable;

}; }),
$globals.AnnouncementSubscription);

$core.addMethod(
$core.method({
selector: "valuable:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValuable"],
source: "valuable: aValuable\x0a\x09valuable := aValuable",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aValuable){
var self=this,$self=this;
$self.valuable=aValuable;
return self;

}; }),
$globals.AnnouncementSubscription);



$core.addClass("AnnouncementValuable", $globals.Object, ["valuable", "receiver"], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AnnouncementValuable.comment="I wrap `valuable` objects (typically instances of `BlockClosure`) with a `receiver` to be able to unregister subscriptions based on a `receiver`.";
//>>excludeEnd("ide");
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
$globals.AnnouncementValuable);

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
$globals.AnnouncementValuable);

$core.addMethod(
$core.method({
selector: "valuable",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "valuable\x0a\x09^ valuable",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.valuable;

}; }),
$globals.AnnouncementValuable);

$core.addMethod(
$core.method({
selector: "valuable:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "valuable: anObject\x0a\x09valuable := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
$self.valuable=anObject;
return self;

}; }),
$globals.AnnouncementValuable);

$core.addMethod(
$core.method({
selector: "value",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ self valuable value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value", "valuable"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._valuable())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{})});
//>>excludeEnd("ctx");
}; }),
$globals.AnnouncementValuable);

$core.addMethod(
$core.method({
selector: "value:",
protocol: "evaluating",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject\x0a\x09^ self valuable value: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value:", "valuable"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._valuable())._value_(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.AnnouncementValuable);



$core.addClass("Announcer", $globals.Object, ["registry", "subscriptions"], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Announcer.comment="I hold annoncement subscriptions (instances of `AnnouncementSubscription`) in a private registry.\x0aI announce (trigger) announces, which are then dispatched to all subscriptions.\x0a\x0aThe code is based on the announcements as [described by Vassili Bykov](http://www.cincomsmalltalk.com/userblogs/vbykov/blogView?searchCategory=Announcements%20Framework).\x0a\x0a## API\x0a\x0aUse `#announce:` to trigger an announcement.\x0a\x0aUse `#on:do:` or `#on:send:to:` to register subscriptions.\x0a\x0aWhen using `#on:send:to:`, unregistration can be done with `#unregister:`.\x0a\x0a## Usage example:\x0a\x0a    SystemAnnouncer current\x0a        on: ClassAdded\x0a        do: [ :ann | window alert: ann theClass name, ' added' ].";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announce:",
protocol: "announcing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x09subscriptions do: [ :each |\x0a\x09\x09each deliver: anAnnouncement ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["do:", "deliver:"]
}, function ($methodClass){ return function (anAnnouncement){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.subscriptions)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._deliver_(anAnnouncement);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement})});
//>>excludeEnd("ctx");
}; }),
$globals.Announcer);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09subscriptions := OrderedCollection new",
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
$self.subscriptions=$recv($globals.OrderedCollection)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Announcer);

$core.addMethod(
$core.method({
selector: "on:do:",
protocol: "subscribing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a\x09self on: aClass do: aBlock for: nil",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["on:do:for:"]
}, function ($methodClass){ return function (aClass,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._on_do_for_(aClass,aBlock,nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:",{aClass:aClass,aBlock:aBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Announcer);

$core.addMethod(
$core.method({
selector: "on:do:for:",
protocol: "subscribing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock", "aReceiver"],
source: "on: aClass do: aBlock for: aReceiver\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09valuable: (AnnouncementValuable new\x0a\x09\x09\x09valuable: aBlock;\x0a\x09\x09\x09receiver: aReceiver;\x0a\x09\x09\x09yourself);\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
referencedClasses: ["AnnouncementSubscription", "AnnouncementValuable"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "valuable:", "new", "receiver:", "yourself", "announcementClass:"]
}, function ($methodClass){ return function (aClass,aBlock,aReceiver){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$self.subscriptions;
$2=[$recv($globals.AnnouncementSubscription)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$3=$recv($globals.AnnouncementValuable)._new();
$recv($3)._valuable_(aBlock);
$recv($3)._receiver_(aReceiver);
[$recv($2)._valuable_([$recv($3)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["valuable:"]=1
//>>excludeEnd("ctx");
][0];
$recv($2)._announcementClass_(aClass);
$recv($1)._add_($recv($2)._yourself());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:for:",{aClass:aClass,aBlock:aBlock,aReceiver:aReceiver})});
//>>excludeEnd("ctx");
}; }),
$globals.Announcer);

$core.addMethod(
$core.method({
selector: "on:doOnce:",
protocol: "subscribing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock"],
source: "on: aClass doOnce: aBlock\x0a\x09| subscription |\x0a\x09\x0a\x09subscription := AnnouncementSubscription new\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself.\x0a\x09subscription valuable: [ :ann |\x0a\x09\x09subscriptions remove: subscription.\x0a\x09\x09aBlock value: ann ].\x0a\x0a\x09subscriptions add: subscription",
referencedClasses: ["AnnouncementSubscription"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["announcementClass:", "new", "yourself", "valuable:", "remove:", "value:", "add:"]
}, function ($methodClass){ return function (aClass,aBlock){
var self=this,$self=this;
var subscription;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.AnnouncementSubscription)._new();
$recv($1)._announcementClass_(aClass);
subscription=$recv($1)._yourself();
$recv(subscription)._valuable_((function(ann){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($self.subscriptions)._remove_(subscription);
return $recv(aBlock)._value_(ann);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($self.subscriptions)._add_(subscription);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:doOnce:",{aClass:aClass,aBlock:aBlock,subscription:subscription})});
//>>excludeEnd("ctx");
}; }),
$globals.Announcer);

$core.addMethod(
$core.method({
selector: "on:send:to:",
protocol: "subscribing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aSelector", "anObject"],
source: "on: aClass send: aSelector to: anObject\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09valuable: (MessageSend new\x0a\x09\x09\x09receiver: anObject;\x0a\x09\x09\x09selector: aSelector;\x0a\x09\x09\x09yourself);\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
referencedClasses: ["AnnouncementSubscription", "MessageSend"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "valuable:", "new", "receiver:", "selector:", "yourself", "announcementClass:"]
}, function ($methodClass){ return function (aClass,aSelector,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$self.subscriptions;
$2=[$recv($globals.AnnouncementSubscription)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
$3=$recv($globals.MessageSend)._new();
$recv($3)._receiver_(anObject);
$recv($3)._selector_(aSelector);
$recv($2)._valuable_([$recv($3)._yourself()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["yourself"]=1
//>>excludeEnd("ctx");
][0]);
$recv($2)._announcementClass_(aClass);
$recv($1)._add_($recv($2)._yourself());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:send:to:",{aClass:aClass,aSelector:aSelector,anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Announcer);

$core.addMethod(
$core.method({
selector: "unsubscribe:",
protocol: "subscribing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "unsubscribe: anObject\x0a\x09subscriptions := subscriptions reject: [ :each |\x0a\x09\x09each receiver = anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["reject:", "=", "receiver"]
}, function ($methodClass){ return function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.subscriptions=$recv($self.subscriptions)._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._receiver()).__eq(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unsubscribe:",{anObject:anObject})});
//>>excludeEnd("ctx");
}; }),
$globals.Announcer);



$core.addClass("SystemAnnouncer", $globals.Announcer, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SystemAnnouncer.comment="My unique instance is the global announcer handling all Amber system-related announces.\x0a\x0a## API\x0a\x0aAccess to the unique instance is done via `#current`";
//>>excludeEnd("ide");

$core.setSlots($globals.SystemAnnouncer.a$cls, ["current"]);
$core.addMethod(
$core.method({
selector: "current",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self.current;
if($1 == null || $1.a$nil){
$self.current=[(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($methodClass.superclass||$boot.nilAsClass).fn.prototype._new.call($self))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.supercall = false
//>>excludeEnd("ctx");
][0];
return $self.current;
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{})});
//>>excludeEnd("ctx");
}; }),
$globals.SystemAnnouncer.a$cls);

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
$globals.SystemAnnouncer.a$cls);


$core.addClass("SystemAnnouncement", $globals.Object, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SystemAnnouncement.comment="I am the superclass of all system announcements";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "classTag",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classTag\x0a\x09\x22Returns a tag or general category for this class.\x0a\x09Typically used to help tools do some reflection.\x0a\x09Helios, for example, uses this to decide what icon the class should display.\x22\x0a\x09\x0a\x09^ 'announcement'",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return "announcement";

}; }),
$globals.SystemAnnouncement.a$cls);


$core.addClass("ClassAnnouncement", $globals.SystemAnnouncement, ["theClass"], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassAnnouncement.comment="I am the abstract superclass of class-related announcements.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "theClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.theClass;

}; }),
$globals.ClassAnnouncement);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
$self.theClass=aClass;
return self;

}; }),
$globals.ClassAnnouncement);



$core.addClass("ClassAdded", $globals.ClassAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassAdded.comment="I am emitted when a class is added to the system.\x0aSee ClassBuilder >> #addSubclassOf:... methods";
//>>excludeEnd("ide");


$core.addClass("ClassCommentChanged", $globals.ClassAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassCommentChanged.comment="I am emitted when the comment of a class changes. (Behavior >> #comment)";
//>>excludeEnd("ide");


$core.addClass("ClassDefinitionChanged", $globals.ClassAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassDefinitionChanged.comment="I am emitted when the definition of a class changes.\x0aSee ClassBuilder >> #class:instanceVariableNames:";
//>>excludeEnd("ide");


$core.addClass("ClassMigrated", $globals.ClassAnnouncement, ["oldClass"], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassMigrated.comment="I am emitted when a class is migrated.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "oldClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "oldClass\x0a\x09^ oldClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.oldClass;

}; }),
$globals.ClassMigrated);

$core.addMethod(
$core.method({
selector: "oldClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "oldClass: aClass\x0a\x09oldClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
$self.oldClass=aClass;
return self;

}; }),
$globals.ClassMigrated);



$core.addClass("ClassMoved", $globals.ClassAnnouncement, ["oldPackage"], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassMoved.comment="I am emitted when a class is moved from one package to another.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "oldPackage",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "oldPackage\x0a\x09^ oldPackage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.oldPackage;

}; }),
$globals.ClassMoved);

$core.addMethod(
$core.method({
selector: "oldPackage:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "oldPackage: aPackage\x0a\x09oldPackage := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
$self.oldPackage=aPackage;
return self;

}; }),
$globals.ClassMoved);



$core.addClass("ClassRemoved", $globals.ClassAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassRemoved.comment="I am emitted when a class is removed.\x0aSee Smalltalk >> #removeClass:";
//>>excludeEnd("ide");


$core.addClass("ClassRenamed", $globals.ClassAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassRenamed.comment="I am emitted when a class is renamed.\x0aSee ClassBuilder >> #renameClass:to:";
//>>excludeEnd("ide");


$core.addClass("MethodAnnouncement", $globals.SystemAnnouncement, ["method"], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodAnnouncement.comment="I am the abstract superclass of method-related announcements.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "method",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ method",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.method;

}; }),
$globals.MethodAnnouncement);

$core.addMethod(
$core.method({
selector: "method:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCompiledMethod"],
source: "method: aCompiledMethod\x0a\x09method := aCompiledMethod",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aCompiledMethod){
var self=this,$self=this;
$self.method=aCompiledMethod;
return self;

}; }),
$globals.MethodAnnouncement);



$core.addClass("MethodAdded", $globals.MethodAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodAdded.comment="I am emitted when a `CompiledMethod` is added to a class.";
//>>excludeEnd("ide");


$core.addClass("MethodModified", $globals.MethodAnnouncement, ["oldMethod"], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodModified.comment="I am emitted when a `CompiledMethod` is modified (a new method is installed). I hold a reference to the old method being replaced.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "oldMethod",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "oldMethod\x0a\x09^ oldMethod",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.oldMethod;

}; }),
$globals.MethodModified);

$core.addMethod(
$core.method({
selector: "oldMethod:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethod"],
source: "oldMethod: aMethod\x0a\x09oldMethod := aMethod",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aMethod){
var self=this,$self=this;
$self.oldMethod=aMethod;
return self;

}; }),
$globals.MethodModified);



$core.addClass("MethodMoved", $globals.MethodAnnouncement, ["oldProtocol"], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodMoved.comment="I am emitted when a `CompiledMethod` is moved to another protocol. I hold a refernce to the old protocol of the method.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "oldProtocol",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "oldProtocol\x0a\x09^ oldProtocol",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.oldProtocol;

}; }),
$globals.MethodMoved);

$core.addMethod(
$core.method({
selector: "oldProtocol:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "oldProtocol: aString\x0a\x09oldProtocol := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.oldProtocol=aString;
return self;

}; }),
$globals.MethodMoved);



$core.addClass("MethodRemoved", $globals.MethodAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodRemoved.comment="I am emitted when a `CompiledMethod` is removed from a class.";
//>>excludeEnd("ide");


$core.addClass("PackageAnnouncement", $globals.SystemAnnouncement, ["package"], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageAnnouncement.comment="I am the abstract superclass of package-related announcements.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "package",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09^ package",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.package;

}; }),
$globals.PackageAnnouncement);

$core.addMethod(
$core.method({
selector: "package:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "package: aPackage\x0a\x09package := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aPackage){
var self=this,$self=this;
$self.package=aPackage;
return self;

}; }),
$globals.PackageAnnouncement);



$core.addClass("PackageAdded", $globals.PackageAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageAdded.comment="I am emitted when a `Package` is added to the system.";
//>>excludeEnd("ide");


$core.addClass("PackageClean", $globals.PackageAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageClean.comment="I am emitted when a package is committed and becomes clean.";
//>>excludeEnd("ide");


$core.addClass("PackageDirty", $globals.PackageAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageDirty.comment="I am emitted when a package becomes dirty.";
//>>excludeEnd("ide");


$core.addClass("PackageRemoved", $globals.PackageAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PackageRemoved.comment="I am emitted when a `Package` is removed from the system.";
//>>excludeEnd("ide");


$core.addClass("ProtocolAnnouncement", $globals.SystemAnnouncement, ["theClass", "protocol"], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProtocolAnnouncement.comment="I am the abstract superclass of protocol-related announcements.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "package",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "package\x0a\x09\x0a\x09^ self theClass ifNotNil: [ :class | class packageOfProtocol: self protocol ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNotNil:", "theClass", "packageOfProtocol:", "protocol"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._theClass();
if($1 == null || $1.a$nil){
return $1;
} else {
var class_;
class_=$1;
return $recv(class_)._packageOfProtocol_($self._protocol());
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"package",{})});
//>>excludeEnd("ctx");
}; }),
$globals.ProtocolAnnouncement);

$core.addMethod(
$core.method({
selector: "protocol",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocol\x0a\x09^ protocol",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.protocol;

}; }),
$globals.ProtocolAnnouncement);

$core.addMethod(
$core.method({
selector: "protocol:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "protocol: aString\x0a\x09protocol := aString",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.protocol=aString;
return self;

}; }),
$globals.ProtocolAnnouncement);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.theClass;

}; }),
$globals.ProtocolAnnouncement);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: "accessing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aClass){
var self=this,$self=this;
$self.theClass=aClass;
return self;

}; }),
$globals.ProtocolAnnouncement);



$core.addClass("ProtocolAdded", $globals.ProtocolAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProtocolAdded.comment="I am emitted when a protocol is added to a class.";
//>>excludeEnd("ide");


$core.addClass("ProtocolRemoved", $globals.ProtocolAnnouncement, [], "Kernel-Announcements");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProtocolRemoved.comment="I am emitted when a protocol is removed from a class.";
//>>excludeEnd("ide");

});
