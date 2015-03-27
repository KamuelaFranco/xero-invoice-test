Template.layout.helpers({
	errorMessage: function () {
		return Session.get('errorMessage') || 'An error occurred';
	}
});