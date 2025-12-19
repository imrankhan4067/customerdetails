namespace customerdetails.db;

using {managed,cuid} from '@sap/cds/common';


entity Customers: managed,cuid{
    // key customerID: Integer;
        name: String(100) @Core.Computed:false;
        address: String(100);
        email: String(50);
        phone: String(15);
        orders: Composition of   many Orders on orders.customer = $self;
}

entity Orders: managed,cuid{
    orderDate: Date;
    orderType: String(20);
    orderStatus: String;
    customer: Association to Customers;
}


// entity Employees{
//     address_ID: Integer;
//     address: Association to Address on address_ID = address_ID
// }

// entity Address{
//     key ID: Integer;
// }
