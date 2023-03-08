sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/demo/podemoui/test/integration/FirstJourney',
		'com/demo/podemoui/test/integration/pages/PurchaseOrdersList',
		'com/demo/podemoui/test/integration/pages/PurchaseOrdersObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchaseOrdersList, PurchaseOrdersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/demo/podemoui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchaseOrdersList: PurchaseOrdersList,
					onThePurchaseOrdersObjectPage: PurchaseOrdersObjectPage
                }
            },
            opaJourney.run
        );
    }
);