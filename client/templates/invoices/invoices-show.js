Template.invoicesShow.helpers({
	invoices: function () {
		return Invoices.find();
	}
});