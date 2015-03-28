Template.loginForm.events({
	// TODO: Get this form to work
	'form submit': function (event) {
		event.preventDefault();
		var apiKey = event.target.apiKey.value;
		var apiSecret = event.target.apiSecret.value;
		Session.set('apiKey', apiKey);
		Session.set('apiSecret', apiSecret);
	}
});