import { LightningElement,track,api } from 'lwc';

export default class Decorators1 extends LightningElement {
    //@api value="100";
    @track value="100"; //Private property
    @api apivalue = "200"; //Public property
}