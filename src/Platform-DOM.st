Smalltalk createPackage: 'Platform-DOM'!
Object subclass: #PlatformDom
	instanceVariableNames: ''
	package: 'Platform-DOM'!

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

