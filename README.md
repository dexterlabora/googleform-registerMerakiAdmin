# googleform-registerMerakiAdmin
A Google Script to create a Meraki Dashboard admin account based on their Google Form entry.

# Instructions
##Create a Google Form.

##The first two questions should be as follows:
- Email
- Name

(SAMPLE, create this yourself.)


<img src="images/Meraki API Registration Form Screenshot.png" alt="Form" width=400/>


##Link the form to a Google Script. 

<img src="images/GoogleScriptsMenu.png" alt="Google Scripts Menu" width=400/>

##Paste the contents of this repository's 'code.gs' into the Google Scripts IDE.

<img src="images/GoogleScriptsIDE.png" alt="Google Scripts IDE" width=400/>

##Add a Trigger to launch the script when the Form is submitted.

<img src="images/GoogleScriptsTriggersMenu.png" alt="Triggers Menu" width=400/>

- select the onFormSubmit function

<img src="images/GoogleScriptsTriggers.png" alt="Triggers" width=400/>

##Test the API calls
- Run menu

<img src="images/GoogleScriptsRunMenu.png" alt="Run Menu" width=400/>

- select a function, such as **testGetMerakiOrgs. 

##View the results
- View --> Logs menu

<img src="images/GoogleScriptsLogsMenu.png" alt="Logs Menu" width=400/>

<img src="images/GoogleScriptsLogs.png" alt="Logs" width=400/>


