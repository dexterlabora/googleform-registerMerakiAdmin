# googleform-registerMerakiAdmin
A Google Script to create a Meraki Dashboard admin account based on their Google Form entry.

# Instructions
Create a Google Form.

The first two questions should be as follows:
- Email
- Name

(SAMPLE, create this yourself.)


<img src="images/Meraki API Registration Form Screenshot.png" alt="Drawing" style="width: 100px;"/>


Link the form to a Google Script. 
![alt tag](/images/GoogleScriptsMenu.png)
![alt tag](/images/GoogleScriptsIDE.png)

Add a Trigger to launch the script when the Form is submitted.

![alt tag](/images/GoogleScriptsTriggersMenu.png)

Test the API calls
- Run menu
![alt tag](/images/GoogleScriptsRunMenu.png)

- select a function, such as **testGetMerakiOrgs. 

View the results
- View --> Logs menu

![alt tag](/images/GoogleScriptsLogsMenu.png)

![alt tag](/images/GoogleScriptsLogs.png)


