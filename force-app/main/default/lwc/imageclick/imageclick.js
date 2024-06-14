import { LightningElement, api,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import IMAGE from "@salesforce/resourceUrl/salesforce";//salesforce is the image name from static resource
    export default class Imageclick extends NavigationMixin(LightningElement) {
    
        companyLogo = IMAGE;

        navigateToReports() {
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Report',
                    actionName: 'home'
                },
            });
        }
    }