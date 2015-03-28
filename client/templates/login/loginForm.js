Template.loginForm.events({
	'form submit': function (event) {
		event.preventDefault();
		alert('You submitted that form ' + event.type);
	}
});