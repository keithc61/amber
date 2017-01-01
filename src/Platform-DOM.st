Smalltalk createPackage: 'Platform-DOM'!
Object subclass: #PlatformDom
	instanceVariableNames: ''
	package: 'Platform-DOM'!

!PlatformDom class methodsFor: 'converting'!

toArray: aDomList
<inlineJS: 'return Array.prototype.slice.call(aDomList)'>
! !

!PlatformDom class methodsFor: 'node creation'!

newCustomEvent: aString detail: anObject
<inlineJS: 'return new CustomEvent(aString, {detail: anObject})'>
!

newDocumentFragment
<inlineJS: 'return document.createDocumentFragment()'>
!

newElement: aString
<inlineJS: 'return document.createElement(aString)'>
!

newTextNode: aString
<inlineJS: 'return document.createTextNode(aString)'>
! !

!PlatformDom class methodsFor: 'testing'!

isDomNode: anObject
<inlineJS: '
	return anObject.nodeType > 0 &&
		Object.prototype.toString.call(anObject) !!== "[object Object]"
'>
!

isFeasible
<inlineJS: '
  if (typeof document === "undefined") return false;
  try {
    var d = document.createElement("div"),
	  f = document.createDocumentFragment(),
	  t = document.createTextNode("Hello, Amber!!");
	f.appendChild(t);
	d.insertBefore(f, null);
	return d.innerHTML === "Hello, Amber!!";
  } catch (e) {
    return false;
  }
'>
! !

!CharacterArray methodsFor: '*Platform-DOM'!

asDomNode
	^ document createTextNode: self asString
! !

!Collection methodsFor: '*Platform-DOM'!

asDomNode
	| fragment |
	fragment := document createDocumentFragment.
	self do: [ :each | fragment appendChild: each asDomNode ].
	^ fragment
! !

!JSObjectProxy methodsFor: '*Platform-DOM'!

asDomNode
	(PlatformDom isDomNode: jsObject)
		ifTrue: [ ^ jsObject ]
		ifFalse: [ ^ super asDomNode ]
! !

!String methodsFor: '*Platform-DOM'!

htmlTextContent
<inlineJS: 'var d=document.createElement("div");d.innerHTML=self;return d.textContent||d.innerText;'>
! !

