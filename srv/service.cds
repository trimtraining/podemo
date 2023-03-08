using sap.lcap.podemo from '../db/schema';

service podemoService
{
    entity PurchaseOrders as
        projection on podemo.PurchaseOrders;

    annotate PurchaseOrders with @odata.draft.enabled;
}
