// Enter Your Environment Variables

var API_KEY = 'YourAPIKey'; // Enter your API Key. This is in your Meraki Dashboard profile. Your Org must have APIs enabled. 

var ORG_ID = 'YourOrgID'; // Enter your Org ID (use testGetMerakiOrgs(); to learn the org IDs)
var SHARD = 'nXXX'; // Your Shard Number (see this when in the URL when you login to Meraki Dashboard)
                  // https://nXXX.meraki.com/api/v0/organizations/{{organizationId}}/admins

/* #####################################################
Meraki API Workshop Registration Script

- This script collects a single response from a Google Form
  * Email
  * Name
- Creates an admin account with Meraki API

There are additional test functions which are useful to run API calls and view the output in the log without using the form.

Written by:
Cory Guynn
2017


 ##################################################### */

// *************
// API CALLS TO MERAKI
// *************

function addMerakiAdmin(apiKey, orgId, shard, payload){
  var headers = {
    "x-cisco-meraki-api-key": apiKey
  };
  var options =
      {
        "method" : "post",
        "payload": payload,
        "headers": headers,
        "content-type": "application/json",
        "contentLength": payload.length,
        "followRedirects": true,
        "muteHttpExceptions":true
      };
  //response = UrlFetchApp.fetch('http://52.211.241.52:1880/test', options);
  response = UrlFetchApp.fetch('https://'+shard+'.meraki.com/api/v0/organizations/'+orgId+'/admins', options);
  var result = JSON.parse(response.getContentText());
  Logger.log(result);
  Logger.log(response.getResponseCode());
}

// Test function (use this to test the API call without using the form)
function testAddMerakiAdmin(){
  var data = {
    "name":"Google Scripts",
    "email":"postman24@email.com",
    "orgAccess":"full"
  };
  addMerakiAdmin(API_KEY,ORG_ID,SHARD,data);
}


// Get Meraki Admins -- Not used in the form, but really helpful to see if admins are getting created
function getMerakiAdmins(apiKey,orgId){
  var payload;
  var headers = {
    "x-cisco-meraki-api-key": apiKey
  };
  var url = 'https://dashboard.meraki.com/api/v0/organizations/'+orgId+'/admins';
  var options = {
    'method': 'get',
    'headers': headers,
    'payload': payload
  };
  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);

  Logger.log("URL JSON: "+ JSON.stringify(data));
}

// Test function (Use this to test the API call without using the form)
function testGetMerakiAdmins(){
  getMerakiAdmins(API_KEY,ORG_ID);
}

// Get the Meraki Organizations and IDs this API key hass access to.
function getMerakiOrgs(apiKey){
  var headers = {
    "x-cisco-meraki-api-key": apiKey
  };
  var url = 'https://dashboard.meraki.com/api/v0/organizations';
  var options = {
    'method': 'get',
    'headers': headers
  };
  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);

  Logger.log("Meraki Orgs: "+ JSON.stringify(data));
}

// Test function
function testGetMerakiOrgs(){
  getMerakiOrgs(API_KEY);
}


// *************
// Form Handlers
// *************


// Collects input from form submition
//      (must run this via form or an error will occur)

function onFormSubmit(e) {
  var form = FormApp.getActiveForm();
  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();

  var admin = {};
  admin.name = itemResponses[0].getResponse();
  admin.group = itemResponses[1].getResponse();
  admin.email = formResponse.getRespondentEmail();

  Logger.log("onFormSubmit - name: "+admin.name);
  Logger.log("onFormSubmit - email: "+admin.email);


  //determine org ID and shard
  // <--- insert logic here --->

  //create admin account
  var payload = {
    "name":admin.name,
    "email":admin.email,
    "orgAccess":"full"
  };

  addMerakiAdmin(API_KEY, ORG_ID, SHARD, payload);
}
