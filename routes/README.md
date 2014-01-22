#TODO

-add validation to route constructor. object is supposed to be called "validate", takes the form:
	
	validation: {
		payload: {
			name: Hapi.types.String().required(),
			_id: Hapi.types.Any()
		}
	}

	Right now it doesn't work in the constructor b/c you can't add validate to GET or HEAD requests