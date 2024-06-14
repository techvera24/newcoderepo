export default class Lightninginput extends LightningElement {
    namevalue='';
    cityvalue='';
    acvalues='';
    
       namechange(event){
            this.namevalue = event.target.value;
        } 
    
        citychange(event){
            this.cityvalue = event.target.value;
        } 
        ACchange(event){
            this.acvalues = event.target.value;
        } 
    
        handleNext() {
    
            alert('Name '+  this.namevalue);
            alert('City '+  this.cityvalue);
            alert( 'AC VALUE'+  this.acvalues);
        }
        savehandle(event)
        {


        }

    }