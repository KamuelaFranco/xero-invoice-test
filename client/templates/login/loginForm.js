Template.loginForm.events({
	// TODO: Get this form to work
	'form submit': function (event) {
		event.preventDefault();
		alert('You submitted that form ' + event.type);
	}
});