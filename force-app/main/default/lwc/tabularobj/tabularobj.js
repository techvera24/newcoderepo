import { LightningElement, wire,track } from 'lwc';
import getAccountList from'@salesforce/apex/getaccount.getAccountList';
//Here we are using apex class so no need to use @api 

export default class tabularobj extends LightningElement {
  @track columns = [{ //It (track) create columns
    label: 'Account name', // For label we can write anything
    fieldName: 'Name', //These are exact api names
    type: 'text', //field type
    sortable: true //It gives us functionality to sort data by asc desc or other criteria according to field // proides arrow
},
{
    label: 'Type',
    fieldName: 'Type',
    type: 'text',
    sortable: true
},
{
    label: 'Annual Revenue',
    fieldName: 'AnnualRevenue',
    type: 'Currency',
    sortable: true
},
{
    label: 'Phone',
    fieldName: 'Phone',
    type: 'phone',
    sortable: true
},
{
    label: 'Website',
    fieldName: 'Website',
    type: 'url',
    sortable: true
},
{
    label: 'Rating',
    fieldName: 'Rating',
    type: 'test',
    sortable: true
}
];


@track accList ;
@wire(getAccountList) wiredAccounts({error,data}) {
if (data) {
    this.accList = data;
} else if (error) {
    this.error = error;
    //If there is any data then pass the data otherwise pass error message.
    //Use of error is not mandatory. Use it if you want.
}
}

}