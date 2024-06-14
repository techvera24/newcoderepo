public with sharing class getaccount {
   
    @AuraEnabled(cacheable=true)
    public static List<Account>getAccountList() {
        return [SELECT Id, Name, Type, Phone , AnnualRevenue FROM Account];
    }
}