using {customerdetails.db as cust} from '../db/schema';

service CustomerService @(requires: 'authenticated-user') {
    //    @Capabilities: {
    //     InsertRestrictions.Insertable: false,
    //     UpdateRestrictions.Updatable: true,
    //     DeleteRestrictions.Deletable: false
    //   }
    entity Customers @(restrict: [{
        grant: [
            'READ',
            'WRITE'
        ],
        to   : [
           'customerAdmin'
        ]
    },
    {
        grant: [
            'READ',
            'WRITE'
        ],
        to   : [
           'customerDisplay'
        ]
    }])           as projection on cust.Customers;

    entity Orders as projection on cust.Orders;


}

annotate CustomerService.Customers with @odata.draft.enabled;
