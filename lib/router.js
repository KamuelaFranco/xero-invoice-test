Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading'
});

Router.onBeforeAction('loading');

// TODO: Root route should run /invoices route logic
Router.route('/', function () {
	this.go('/invoices');
});

// TODO: This needs to make sure invoices are loaded before showing the page
Router.route('/invoices', {
	waitOn: function () {
		// TODO: Sort by unpaid
		Meteor.subscribe('invoices');
	},
	action: function () {
		if (Session.equals("xeroLoggedIn", true)) {
			this.render('invoicesShow');
		} else {
			throw new Meteor.Error("invalid-credentials", "Your Xero account credentials couldn't be verified.");
		}
	}
});

// TODO: Invoice needs to exist
Router.route('/invoices/:_id', {
	waitOn: function () {
		// TODO: Subscribe to the particular invoice or handle non-existence
		Meteor.subscribe('invoices');
	},
	action: function () {
		if (Session.equals("xeroLoggedIn", true)) {
			this.render('invoicesItem');
		} else {
			throw new Meteor.Error("invalid-credentials", "Your Xero account credentials couldn't be verified.");
			Session.set("errorMessage", "Your Xero account credentials couldn't be verified.");
		}
	}
});

// TODO: Make sure redirects work as intended
Router.route('login', {
	action: function () {
		if(Session.equals("xeroLoggedIn", true)) {
			this.render('invoicesShow');
		} else {
			Session.set("errorMessage", "Your Xero account credentials couldn't be verified.");
			this.render('login');
		}
	}
});