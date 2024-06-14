//Comboboc is used for picklist values in LWC
import { LightningElement } from 'lwc';

export default class Combobox extends LightningElement {
    value = '';
        name;
        get options() {
            return [
                { label: 'New', value: 'New' },
                { label: 'In Progress', value: 'InProgress' },
                { label: 'Finished', value: 'Finished' },
            ];
        }
    
        handleChange(event) {
            this.value = event.detail.value;
            
    
        }
}