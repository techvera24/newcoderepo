import { LightningElement,track,api,wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; //This line is extremely important for navigation. ----1) 
//import here and then extend, export it in the next line
import getAccountList from'@salesforce/apex/getaccount.getAccountList';

export default class practicecodes extends NavigationMixin(LightningElement) {  //-----2)
//export default class practicecodes extends LightningElement {
    @track isModalOpen = false; //If we make it true it will continuously get open so previously we have to make it false.
    openModal() {

        this.isModalOpen = true; //To open it we make it true.
    }
    closeModal() {
     
        this.isModalOpen = false; //To close the modal //False means hide.
    }
    
     
    //submitDetails() {

        //this.isModalclose = false;
//}
        navigateToTab() {
            this[NavigationMixin.Navigate]({
                type: 'standard__navItemPage',
                attributes: {
                    //Name of any CustomTab. Visualforce tabs, web tabs, Lightning Pages, and Lightning Component tabs
                    apiName: 'openclose' // Write tab name
                },
            });
 }
}