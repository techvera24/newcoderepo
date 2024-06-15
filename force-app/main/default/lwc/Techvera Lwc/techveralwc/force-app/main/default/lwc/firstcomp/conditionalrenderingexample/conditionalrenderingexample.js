import { LightningElement, track} from 'lwc';

export default class Conditionalrenderingexample extends LightningElement {
    @track displayDiv = false;

    @track cityList = ['Jaipur','Bangalore','Hyderabad','Nagpur'];
    showDivHandler(event){
        this.displayDiv=event.target.checked;
    }
}