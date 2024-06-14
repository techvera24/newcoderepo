import { LightningElement, wire} from 'lwc';
import getAccountList from'@salesforce/apex/getaccount.getAccountList';

export default class One extends LightningElement {
  @wire(getAccountList) accounts;

}