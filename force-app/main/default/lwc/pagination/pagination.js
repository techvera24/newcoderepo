import { LightningElement,track,api } from 'lwc';


import ACCOUNTDETAILS from '@salesforce/apex/getaccount.getAccountList'; //We can change 'ACCOUNTDETAILS' this name but paste this same to no. 2

export default class Pagination extends LightningElement{

    pageSizeOptions = [5, 10, 25, 50, 75, 100]; //Page size options
    records = []; //All records available in the data table
    columns = []; //columns information available in the data table
    totalRecords = 0; //Total no.of records
    pageSize; //No.of records to be displayed per page
    totalPages; //Total no.of pages
    pageNumber = 1; //Page number    
    recordsToDisplay = []; //Records to be displayed on the page
    
    get bDisableFirst() {
        return this.pageNumber == 1;
    }
    get bDisableLast() {
        return this.pageNumber == this.totalPages;
    }
    get bDisablemarket() {
        return this.pageNumber == this.totalPages;
    }
    // connectedCallback method called when the element is inserted into a document
    connectedCallback() {
        // set datatable columns info
        this.columns = [{
                label: 'Name',
                fieldName: 'Name'
            },
            {
                label: 'Type',
                fieldName: 'Type'
            },
            {
                label: 'Phone',
                fieldName: 'Phone'
            },
            {
                label: 'AnnualRevenue',
                fieldName: 'AnnualRevenue'
            },
        ];
        // fetch contact records from apex method 
        ACCOUNTDETAILS() // We can change this name paste same name from no. 2
            .then((result) => {
                if (result != null) {
                    console.log('RESULT--> ' + JSON.stringify(result));
                    this.records = result; //Storing result in record varible.
                    this.totalRecords = result.length; // Storing total records count                 
                    this.pageSize = this.pageSizeOptions[0]; //set pageSize with default value as first option
                    this.paginationHelper(); // call helper menthod to update pagination logic ----1)
                }
            })
            .catch((error) => {
                console.log('error while fetch contacts--> ' + JSON.stringify(error));
            });
    }
    handleRecordsPerPage(event) {
        this.pageSize = event.target.value;
        this.paginationHelper();
    }
    previousPage() {
        this.pageNumber = this.pageNumber - 1;
        this.paginationHelper();
    }
    nextPage() {
        this.pageNumber = this.pageNumber + 1;
        this.paginationHelper();
    }
    firstPage() {
        this.pageNumber = 1;
        this.paginationHelper();
    }
    lastPage() {
        this.pageNumber = this.totalPages;
        this.paginationHelper();
    }
    Delete(){
        this.pageNumber = this.totalPages;
        this.paginationHelper();
    }
    downloadClick() {
        let downloadElement = document.createElement('a');
        downloadElement.href = 'https://pixabay.com/images/search/nature/';
        downloadElement.target = '_self';
        downloadElement.download = 'download.jpg';
        document.body.appendChild(downloadElement);
        downloadElement.click(); 
    }
        // JS function to handel pagination logic 
    paginationHelper() { //----from point 1
        this.recordsToDisplay = [];
        // calculate total pages
        this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
        // set page number 
        if (this.pageNumber <= 1) {
            this.pageNumber = 1;
        } else if (this.pageNumber >= this.totalPages) {
            this.pageNumber = this.totalPages;
        }
        // set records to display on current page 
        for (let i = (this.pageNumber - 1) * this.pageSize; i < this.pageNumber * this.pageSize; i++) {
            if (i === this.totalRecords) {
                break;
            }
            this.recordsToDisplay.push(this.records[i]);
        }
    }

    }