Smalltalk createPackage: 'Kernel-Promises'!
Object subclass: #Promise
	slots: {}
	package: 'Kernel-Promises'!

!Promise class methodsFor: 'composites'!

all: aCollection
"Returns a Promise resolved with results of sub-promises."
<inlineJS: 'return Promise.all($recv(aCollection)._asArray())'>
!

any: aCollection
"Returns a Promise resolved with first result of sub-promises."
<inlineJS: 'return Promise.race($recv(aCollection)._asArray())'>
! !

!Promise class methodsFor: 'instance creation'!

forBlock: aBlock
"Returns a Promise that is resolved with the value of aBlock,
and rejected if error happens while evaluating aBlock."
	^ self new then: aBlock
!

new
"Returns a dumb Promise resolved with nil."
<inlineJS: 'return Promise.resolve()'>
!

new: aBlock
"Returns a Promise that is eventually resolved or rejected.
Pass a block that is called with one argument, model.
You should call model value: ... to resolve the promise
and model signal: ... to reject the promise.
If error happens during run of the block,
promise is rejected with that error as well."
<inlineJS: 'return new Promise(function (resolve, reject) {
    var model = {value: resolve, signal: reject};
    aBlock._value_(model);
})'>
!

signal: anObject
"Returns a Promise rejected with anObject."
<inlineJS: 'return $recv(anObject)._in_(function (x) {return Promise.reject(x)})'>
!

value: anObject
"Returns a Promise resolved with anObject."
<inlineJS: 'return $recv(anObject)._in_(function (x) {return Promise.resolve(x)})'>
! !

Trait named: #TThenable
	package: 'Kernel-Promises'!

!TThenable methodsFor: 'promises'!

catch: aBlock
<inlineJS: 'return self.then(null, function (err) { return aBlock._value_(err); })'>
!

on: aClass do: aBlock
<inlineJS: 'return self.then(null, function (err) {
    if (err._isKindOf_(aClass)) return aBlock._value_(err);
    else throw err;
})'>
!

on: aClass do: aBlock catch: anotherBlock
	^ (self on: aClass do: aBlock) catch: anotherBlock
!

then: aBlockOrArray
"Accepts a block or array of blocks.
Each of blocks in the array or the singleton one is
used in .then call to a promise, to accept a result
and transform it to the result for the next one.
In case a block has more than one argument
and result is an array, first n-1 elements of the array
are put into additional arguments beyond the first.
The first argument always contains the result as-is."
<inlineJS: '
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
}, self)'>
!

then: aBlockOrArray catch: anotherBlock
	^ (self then: aBlockOrArray) catch: anotherBlock
!

then: aBlockOrArray on: aClass do: aBlock
	^ (self then: aBlockOrArray) on: aClass do: aBlock
!

then: aBlockOrArray on: aClass do: aBlock catch: anotherBlock
	^ ((self then: aBlockOrArray) on: aClass do: aBlock) catch: anotherBlock
! !

Promise setTraitComposition: {TThenable} asTraitComposition!
! !

