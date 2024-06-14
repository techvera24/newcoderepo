import { LightningElement, api } from 'lwc';

import { NavigationMixin } from 'lightning/navigation'; //This line is extremely important for navigation. 
//import here and then extend, export it in the next line

export default class NewTestComp extends NavigationMixin(LightningElement) {
    @api recordId;
    // Navigate to New Account Page 
    navigateToNewAccountPage() { //This is standard code just change object name according to requirement
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
        });
    }
    // Navigate to View Account Page //Add it to object record page this will not work on home page
    navigateToViewAccountPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId, //We are passing here id because to view record we go to record page and view that specific record so we need id.
                objectApiName: 'Account',
                actionName: 'view'
            },
        });
    }
    // Navigate to Edit Account Page //Add it to object record page this will not work on home page
    navigateToEditAccountPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,//We are passing here id because to edit record we go to record page and edit that specific record so we need id.
                objectApiName: 'Account',
                actionName: 'edit'
            },
        });
    }

    // Navigation to Account List view(recent)
    navigateToAccountListView() { //no need of id here because just want to see list view page 
        this[NavigationMixin.Navigate]({//we can navigate this from home page.
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list' //This will open list view page
            },
            state: {
                filterName: 'Recent'
            },
        });
    }
    // Navigation to Contact related list of account
    navigateToContactRelatedList() {//need of id here because we want to see related records here.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',//We have to specify related object here 
                // If we have another object in relation then we have to write this related wala code again.
                actionName: 'view'
            },
        });
    }
    //Navigate to home page
    navigateToHomePage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {//Here we are not providing any object so need to provide any action
                pageName: 'home'
            },
        });
    }
    // Navigation to contant object home page
    navigateToContactHome() {
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Contact",
                actionName: "home"
            }
        });
    }
    //Navigate to chatter
    navigateToChatter() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            },
        });
    }
    //Navigate to Reports home page
    navigateToReports() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Report',
                actionName: 'home'
            },
        });
    }
    //Navigate to Files home
    navigateToFilesHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument', //This is api name of file home
                actionName: 'home'
            },
        });
    }
    // Navigation to lightning component

    // Navigation to web page 
    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://www.salesforce.com/"
            }
        });
    }
    //Navigate to visualforce page
   
    // Navigation to Custom Tab
    navigateToTab() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                //Name of any CustomTab. Visualforce tabs, web tabs, Lightning Pages, and Lightning Component tabs
                apiName: 'Account_details'
            },
        });
    }
}  