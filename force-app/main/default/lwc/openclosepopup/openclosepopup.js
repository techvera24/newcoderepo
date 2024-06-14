import { LightningElement,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; //This line is extremely important for navigation. ----1) 
//import here and then extend, export it in the next line

//export default class Openclosepopup extends NavigationMixin(LightningElement) {  //-----2)
export default class Openclosepopup extends LightningElement {
    @track isModalOpen = false; //If we make it true it will continuously get open so previously we have to make it false.
    openModal() {

        this.isModalOpen = true; //To open it we make it true.
    }
    closeModal() {
     
        this.isModalOpen = false; //To close the modal //False means hide.
    }
    submitDetails() {
        this.isModalOpen = false;
    }
    /*submitDetails() {

      this[NavigationMixin.Navigate]({
         type: "standard__objectPage",
         attributes: {
             objectApiName: "Contact",
             actionName: "home"
         }
     });//Using this code we can go to contact home page by clicking on 'OK' button
     //For this we need to import navigation mixin means line no. 1) and 2) and also this code under submitDetails()
 }*/
}