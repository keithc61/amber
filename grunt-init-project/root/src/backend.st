Smalltalk createPackage: '{%= name %}-Backend'!
Object subclass: #{%= name %}Backend
	slots: {}
	package: '{%= name %}-Backend'!

!{%= name %}Backend methodsFor: 'lambda api'!

echoEvent: event andContext: context
	^ #{
		#statusCode -> 200.
		#headers->#{'Access-Control-Allow-Origin' -> '*'}.
		#body -> (JSON stringify: #{#event -> event. #context -> context})
	}
!

status
	^ #{
		#statusCode -> 200.
		#headers->#{'Access-Control-Allow-Origin' -> '*'}.
		#body -> (JSON stringify: #{#ok -> true. #amber -> Smalltalk version. #node -> process version})
	}
! !

