sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"customersui/customerdetailsui/test/integration/pages/CustomersList",
	"customersui/customerdetailsui/test/integration/pages/CustomersObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('customersui/customerdetailsui') + '/test/flp.html#app-preview',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage
        },
        async: true
    });

    return runner;
});

