import { LightningElement, api } from 'lwc';

export default class ViewSource  extends LightningElement {
    baseURL =
       // 'https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/';
            //'salesforce.com';
            'https://developer.salesforce.com/docs/component-library/overview/components';
    @api source;

    get sourceURL() {
        return this.baseURL + this.source;
    }
}
