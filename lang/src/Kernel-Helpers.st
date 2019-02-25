Smalltalk createPackage: 'Kernel-Helpers'!
Trait named: #TSubclassable
	package: 'Kernel-Helpers'!

!TSubclassable methodsFor: 'class creation'!

subclass: aString 
	"Kept for file-in compatibility."
	^ self subclass: aString slots: #() package: nil
!

subclass: aString instanceVariableNames: anotherString
	"Kept for file-in compatibility."
	^ self subclass: aString instanceVariableNames: anotherString package: nil
!

subclass: aString instanceVariableNames: aString2 category: aString3
	"Kept for file-in compatibility."
	^ self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3
	"Kept for file-in compatibility. ignores class variables and pools."
	^ self subclass: aString instanceVariableNames: aString2 package: aString3
!

subclass: aString instanceVariableNames: aString2 package: aString3
	"Kept for file-in compatibility."
	^ self subclass: aString slots: (self slotsFromInstanceVariablesString: aString2) package: aString3
!

subclass: aString slots: aCollection
	"Kept for file-in compatibility."
	^ self subclass: aString slots: aCollection package: nil
!

subclass: aString slots: aCollection classVariables: anObject package: anotherString
	"Kept for file-in compatibility. ignores class variables."
	^ ClassBuilder new
		superclass: self subclass: aString slots: aCollection package: anotherString
!

subclass: aString slots: aCollection classVariables: anObject poolDictionaries: anotherObject package: anotherString
	"Kept for file-in compatibility. ignores class variables and pools."
	^ ClassBuilder new
		superclass: self subclass: aString slots: aCollection package: anotherString
!

subclass: aString slots: aCollection package: anotherString
	^ ClassBuilder new
		superclass: self subclass: aString slots: aCollection package: anotherString
!

subclass: aString uses: aTraitCompositionDescription 
	"Kept for file-in compatibility."
	^ self subclass: aString uses: aTraitCompositionDescription slots: #() package: nil
!

subclass: aString uses: aTraitCompositionDescription instanceVariableNames: anotherString
	"Kept for file-in compatibility."
	^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: anotherString package: nil
!

subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 category: aString3
	"Kept for file-in compatibility."
	^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3
!

subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 classVariableNames: classVars poolDictionaries: pools category: aString3
	"Kept for file-in compatibility. ignores class variables and pools."
	^ self subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3
!

subclass: aString uses: aTraitCompositionDescription instanceVariableNames: aString2 package: aString3
	"Kept for file-in compatibility."
	^ self subclass: aString uses: aTraitCompositionDescription slots: (self slotsFromInstanceVariablesString: aString2) package: aString3
!

subclass: aString uses: aTraitCompositionDescription slots: aCollection
	"Kept for file-in compatibility."
	^ self subclass: aString uses: aTraitCompositionDescription slots: aCollection package: nil
!

subclass: aString uses: aTraitCompositionDescription slots: aCollection package: aString3
	| cls |
	cls := self subclass: aString slots: aCollection package: aString3.
	cls setTraitComposition: aTraitCompositionDescription asTraitComposition.
	^ cls
! !

