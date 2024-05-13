---
sidebar_position: 2
---

# Node Red use case example

In the first part we introduced you to a simple set-up with simple examples (Introduce node-red plugin (part 1) 44). This second part is to show you more complex and closer examples of business use cases. Thank you Nicolas Verley for your contribution!

## Use case

Node-red allows the Wazo platform to connect to a large number of ecosystems such as:
* Google: Calendar, Google Sheet, Firestore, Speech…
* Salesforce
* mongodb
* Slack
* Twitter
* AWS
* DB: PosgreSQL, Mysql, Oracle…
* E-mail
* SMS

This capacity makes it possible to create very sophisticated scenarios to meet different business needs such as:
* Call routing to the right contact based on data contained in SFDC, PostgreSQL or Oracle
* Management system on-call according to Google calendar with escalation capacity by SMS
* Alert system with multiple flow management (Voice, Email, SMS, social networks)

In my scenario below, we will look beyond the Wazo modules of the Google Calendar and Sheet modules, of the Email and SMS module.

![nodered-example-1](/img/nodered/nodered-example-1.png)

### Scenario 1: Using the context of Flow to display the call volume and keep the calling number

![nodered-example-2](/img/nodered/nodered-example-2.png)

From the application_call_entered event, we will create a function to initialize a call counter and then we increment it for each incoming call in the application.

Note: the flow contexts are reset each time node-red is started. It is possible to keep data despite a restart by using global contexts.

![nodered-example-3](/img/nodered/nodered-example-3.png)

The node dashboard allows you to display the number of calls in progress via the trunk supervision module as well as the call volume via the display of the callvolume variable previously incremented.

![nodered-example-4](/img/nodered/nodered-example-4.png)

![nodered-example-5](/img/nodered/nodered-example-5.png)

From the same event, we will keep the calling number in a flow variable to reuse it when we need it. The flow variable will have the name of the call id in order to be able to distinguish the caller for each call.

![nodered-example-6](/img/nodered/nodered-example-6.png)

### Scenario 2: Call routing based on data in Google Sheet

![nodered-example-7](/img/nodered/nodered-example-7.png)

In this scenario, we will use a Google Sheet document from Google Drive to store calling numbers and their forwarding numbers. For example, the calling number 0102030405 is forwarded to distribution group 1001.

![nodered-example-8](/img/nodered/nodered-example-8.png)

To dynamically recover the calling number and its redirect number in GSheet, you must first install the Google sheet node via the npm command install node-red-contrib-google-sheets then activate the Google Sheet API from the Google Cloud console and then create a service account from the Google Sheets API.

![nodered-example-9](/img/nodered/nodered-example-9.png)

You will need to generate a key in JSON format from the service account which will be pasted into the creds field of the Node GSheet to authenticate. To allow access to your Google spreadsheet, you must share it using the email address of the previously created service account.

From the sharing address, you must extract the doc ID, namely ``1qWrLT1xMz8eKKOcY20bjpG2GEqeRg1lG6PeDvSFZCGI`` for our example

https://docs.google.com/spreadsheets/d/1qWrLT1xMz8eKKOcY20bjpG2GEqeRg1lG6PeDvSFZCGI/edit#gid=0

In the node configuration window, you must enter this ID in the Sheet field and then define the cells that will be collected in our case, we collect the first two columns and the first three rows so A1: B3 from Sheet1 so Sheet1! A1: B3 if I want to collect only the first cell Sheet1! A1

The GSheet node will collect a table of values that you will have to browse. Indeed, the “find the caller id in data” function will search in the table if there is a number identical to the calling number itself retrieved in the context of the Flow (flow.get (msg.data.call.id))

![nodered-example-10](/img/nodered/nodered-example-10.png)

![nodered-example-11](/img/nodered/nodered-example-11.png)

If the calling number is found in the spreadsheet then we collect the forwarding number which we put in msg.payload.exten so that it can be used in the call module otherwise the value of exten remains at Unknown. Finally, the switch module allows you to control msg.payload.exten and to send back to the hangup module if the caller is unknown or to send back to the processing group number if it is known.

![nodered-example-12](/img/nodered/nodered-example-12.png)

As a reminder, the call module uses the msg.payload.exten property if its Exten field is empty.

![nodered-example-13](/img/nodered/nodered-example-13.png)

### Scenario 3: Collecting the calling mobile number then sending an SMS to this caller

![nodered-example-14](/img/nodered/nodered-example-14.png)

In this scenario, we will collect the calling mobile phone number in the context of the flow and then we will text him.

To do this, it is necessary to create a Trial account with Twillio (there is another node using another supplier). Then you will need to create a telephone number with Twillio having the capacity to process SMS (Note: the creation of a telephone number requires validation by the operator requiring the transmission of docs such as passport and / or receipt rent).

Once the number has been validated, you must enter in the module the Account SID and the Token available from the Twillio console as well as the telephone number validated in the From field. For the destination and the content, we will retrieve them dynamically from the msg.payload (content) and msg.topic (recipient) fields.

![nodered-example-15](/img/nodered/nodered-example-15.png)

![nodered-example-16](/img/nodered/nodered-example-16.png)

In order to retrieve the calling number and enter a message, we use the function module to retrieve the calling telephone number in context using the call identifier: flow.get (msg.payload.call.id) then we enter the content of the message in msg.payload

![nodered-example-17](/img/nodered/nodered-example-17.png)

Then just call the application number and click on 4 to receive an SMS on your calling mobile number.

SMS message received

![nodered-example-18](/img/nodered/nodered-example-18.png)

### Scenario 4: Retrieving the next appointment in G-Suite then sending an email to the initiator of the meeting with the subject of the invitation as subject

![nodered-example-19](/img/nodered/nodered-example-19.png)

Module G Calendar allows you to access the next appointment in progress and then retrieve its content. To connect, you need to access the Google Cloud console and create a project if it is not already done, then activate the Google Calendar API and create a corresponding API key and an OAuth 2 account. (you can restrict access to the key and the account according to the call URLs). For more details on how to do this, please follow the link below.

[google-api-javascript-client](https://github.com/google/google-api-javascript-client/blob/master/docs/start.md)

When the OAuth 2 account is created, you will need to enter the customer ID and the secret code in the Google Calendar module. Then simply enter the email address of the calendar concerned in the Calendar field.

![nodered-example-20](/img/nodered/nodered-example-20.png)

In the Function module, I retrieve the creator’s email address to position it in the msg.to field before calling the email module.

![nodered-example-21](/img/nodered/nodered-example-21.png)

For the email module, you can use a gmail account but it must be configured either with less secure access (less access secure) or with an application password.

The To field is not filled in so the module will take the value of msg.to.

![nodered-example-22](/img/nodered/nodered-example-22.png)

Just call the app and click 5 and the initiator of the next meeting in your calendar will receive an email with the subject of the meeting.

## original post

[Introduce node-red plugin (part 2)](https://wazo-platform.discourse.group/t/introduce-node-red-plugin-part-2/150)