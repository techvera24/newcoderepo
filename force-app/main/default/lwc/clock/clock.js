import { LightningElement, api } from 'lwc';

export default class Clock extends LightningElement {
    timestamp = new Date(); //This gives current date and time

    @api
    refresh() {
        this.timestamp = new Date();
    }
}

