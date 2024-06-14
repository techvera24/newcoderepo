import { LightningElement, api,track } from 'lwc';
    import insertAccountMethod from '@salesforce/apex/lwcApexController.insertAccountMethod';
    import accName from '@salesforce/schema/Account.Name'; //Accessing fields from account object
    import accPhone from '@salesforce/schema/Account.Phone';
    import accType from '@salesforce/schema/Account.Type';
    import accWebsite from '@salesforce/schema/Account.Website';
    import accSite from '@salesforce/schema/Account.Site';
    
    import {ShowToastEvent} from 'lightning/platformShowToastEvent';
    
    export default class savelightningrecform extends LightningElement {
    @track accountid;
    @track error;
    @track PhoneError = " ";
    @track getAccountRecord={//getAccountRecord.name and all will get stored in respective variable names
    Name:accName,//Storing field value in variable --> Name
    Phone:accPhone,
    Type:accType,
    Website:accWebsite,
    Site:accSite
    
    };
    
    nameInpChange(event){
    this.getAccountRecord.Name = event.target.value;//What ever we write in form fields will store this value in this.getAccountRecord.Name
     console.log(this.getAccountRecord.Name);
    }
    
    phoneInpChange(event){
    this.getAccountRecord.Phone = event.target.value;
    //window.console.log(this.getAccountRecord.Phone);
    this.validatePhone();
    }
    validatePhone()
    {
        if(this.getAccountRecord.Phone.length>10)
        {
            //console.log('length'+this.getAccountRecord.Phone.length);//To check this on console
            //right click on lightning component page on salesforce and go to console
            this.PhoneError='Phone number should be 10 digits';
        }
        else if(this.getAccountRecord.Phone.length<=10)
        {
           // console.log('length'+this.getAccountRecord.Phone.length);
            this.PhoneError='';
        }
    }
    
    typeInpChange(event){
    this.getAccountRecord.Type = event.target.value;
    //window.console.log(this.getAccountRecord.Type);
    }
    
    websiteInpChange(event){
    this.getAccountRecord.Website = event.target.value;
    //window.console.log(this.getAccountRecord.Type);
    }
    
    accSiteChange(event){
    this.getAccountRecord.Site = event.target.value;
    //window.console.log(this.getAccountRecord.Type);
    }
    
    
    saveAccountAction(){//After submit button this event will fire
   
    insertAccountMethod({accountObj:this.getAccountRecord})//Inserting parameters in method which is from lwcApexController.cls

    .then(result=>{//<--From here to 
    window.console.log(this.createAccount);
    this.getAccountRecord={};
    this.accountid=result.Id;
    window.console.log('after save' + this.accountid);
    
    const toastEvent = new ShowToastEvent({
    title:'Success!',
    message:'Account created successfully',
    variant:'success'
    });
    this.dispatchEvent(toastEvent);
    })
    .catch(error=>{
    this.error=error.message;
    window.console.log(this.error);
    });//here code is not compulsory-->
    }
    
    }