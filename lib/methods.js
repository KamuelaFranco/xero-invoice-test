Meteor.methods({
	xeroLogin: function () {
		var apiKey = Session.get('apiKey');
		var apiSecret = Session.get('apiSecret');

		// TODO: Attempt the Oauth and check for success
		if (false) {

		} else {

		}
	},
	xeroAPI: function (apiMethod, args) {
		// TODO: Implement this API wrapper
	}
});