import { LightningElement, wire, api } from "lwc";
//Without importing apex class we are running this. using import 1
//1. import the methods getRecord and getFieldValue
import { getRecord, getFieldValue } from "lightning/uiRecordApi"; // ----1

//2. Import reference to the object and the fields
import NAME_FIELD from "@salesforce/schema/Account.Name";
import RATING_FIELD from "@salesforce/schema/Account.Rating";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
//Import any_name from "@salesforce/schema/object.field_name";
//If we want 10 fields here we have to import all the 10 fields.

//Above all fields gets stored in the variable 'fields'
const fields = [NAME_FIELD, RATING_FIELD, INDUSTRY_FIELD];

export default class Sec extends LightningElement {
  @api recordId;// Provides current page recordid // Using @api recordid it becomes object specific.
  //With the help of this execution time is less.

  //3. Wire the output of the out of the box method getRecord to the property account
  //It takes all the fileds related to the recordid and store it in account variable. variable name can be any.
  @wire(getRecord, {recordId: "$recordId",fields })accountvar; //Using it as a web service.
  //In web service, it calculates data based on recordid. Can be showed only on particular object.

  //4. Fetch the field values from the record
  get name() { //First property in html
    return getFieldValue(this.accountvar.data, NAME_FIELD);
  }//it returns Name field value from accountvar data

  get rating() {//Second property in html
    return getFieldValue(this.accountvar.data, RATING_FIELD);
  }//it returns Rating field value from accountvar data

  get industry() {//Third property in html
    return getFieldValue(this.accountvar.data, INDUSTRY_FIELD);
  }//it returns Industry field value from accountvar data
}