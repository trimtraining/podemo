using sap.lcap.podemo from '../db/schema';

service podemoService
{
    @odata.draft.enabled
    entity PurchaseOrders as
        projection on podemo.PurchaseOrders;
}
