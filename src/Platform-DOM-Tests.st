Smalltalk createPackage: 'Platform-DOM-Tests'!
TestCase subclass: #PlatformDomTest
	instanceVariableNames: 'fixtureDiv'
	package: 'Platform-DOM-Tests'!

!PlatformDomTest methodsFor: 'testing'!

testEntityConversion
	self assert: '&copy;' htmlTextContent equals: '©'
!

testTextContentDoesNotRunScript
	self shouldnt: [ '<script>throw new Error("Intentional")</script>' htmlTextContent ] raise: Error
! !

