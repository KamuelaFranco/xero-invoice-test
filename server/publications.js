Meteor.publish('invoices', function() {
	return Invoices.find();
});