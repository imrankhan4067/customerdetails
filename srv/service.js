const cds = require('@sap/cds');
const { SELECT } = require('@sap/cds/lib/ql/cds-ql');

class CustomerService extends cds.ApplicationService {
  init(){
    const { Customers, Orders } = this.entities
    // this.before ('READ', Authors, req => {...})
    this.after ('READ', Customers, (results, req) => {

        // debugger;
        results.forEach(element => {
            element.quantity = 100;
        });

    
    })

    this.before ('UPDATE', Customers, (req) => {
        // debugger;
        const {email} = req.data;

        if(email && !email.includes('@')){
            req.error(400, 'Invalid Email');
        }

    });

    this.on ('READ', Orders, async(req) => { 
        debugger;
        let whereCondition = req.data;
        let result=[];

        if(req.data.hasOwnProperty("ID")){
            result = await cds.run(SELECT.from(Orders).where(whereCondition));
        }else{
            result = await cds.run(SELECT.from(Orders).limit(1));
        }
        return result;


    })
    
    return super.init()
  }
}

module.exports = CustomerService;