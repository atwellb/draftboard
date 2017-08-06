const app = angular.module('draftboard', []);

class DraftController {
	constructor() {
		this.message = 'hi';
	}
}

app.controller('DraftController', DraftController);