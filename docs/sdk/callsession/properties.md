---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Les Propriétés

Détail de la propriété call :

Par défaut, `callSession.call` est vide. Mais il sera nécessaire de le compléter via les websockets suivant :  
`onCallCreated`  
`onCallUpdated`  
`onCallAnswered`  
afin de pouvoir utiliser certaines fonctions du SDK et certaines méthodes de l'objet CallSession.

<Tabs>
  <TabItem value="callsession" label="callsession" default>
  ```js
  callSession = {
    answerTime: Date "date", // Type: Date | null
    answeredBySystem: undefined, // Type: boolean | undefined
    answered: false, // Type: boolean
    autoAnswer: false, // Type: boolean
    call: undefined, // Type: object | undefined
    callId: undefined, // Type: string | undefined
    callerNumber: undefined, // Type: string | undefined
    cameraEnabled: false, // Type: boolean
    conference: false, // Type: boolean
    creationTime: Date "date", // Type: Date
    dialedExtension: "", // Type: string, eg: "1001"
    displayName: "prénom nom", // Type: string
    endTime: Date "date", // Type: Date | null
    ignored: false, // Type: boolean
    isCaller: false, // Type: boolean
    muted: false, // Type: boolean
    number: "numéro", // Type: string, eg: "1001"
    paused: false, // Type: boolean
    recording: false, // Type: boolean
    recordingPaused: false, // Type: boolean
    ringing: true, // Type: boolean
    screensharing: false, // Type: boolean
    sipCallId: "identifiant de l'appel sip", // Type: string, eg: "85112a0a-a768-482b-a76e-5e9b956ed554"
    sipSession: {}, // Type: object
    sipStatus: "Initial", // Type: string
    startTime: Date "date", // Type: Date
    type: "CallSession", // Type: string
    videoMuted: false, // Type: boolean
    videoRemotelyDowngraded: undefined, // Type: boolean | undefined
  };
  ```
  </TabItem>

  <TabItem value="callsession.call" label="callsession.call">
  ```js
  callSession.call = {
    type: "CallSession", // Type: string
    id: "identifiant de l'appel", // Type: string
    sipCallId: "identifiant de l'appel sip", // Type: string, eg: "85112a0a-a768-482b-a76e-5e9b956ed554"
    callerName: "prénom nom", // Type: string,
    callerNumber: "numéro", // Type: string, eg: "1001"
    calleeName: "prénom nom", // Type: string,
    calleeNumber: "numéro", // Type: string, eg: "1001"
    dialedExtension: "numéro", // Type: string, eg: "1001"
    lineId: 1 // Type: number, eg 1
    isCaller: false, // Type: boolean
    isVideo: false, // Type: boolean
    onHold: false, // Type: boolean
    muted: false, // Type: boolean
    status: data.data.status,
    startingTime: Date "date", // Type: Date
    talkingToIds: [
      0 : {
          1700657161.93: "0e3e7153-873c-4c0f-8d46-b43426eae511" // callId: user.uuid
          }
      ], // Type Array, contient les particpants distant à l'appel
    recording: false, // Type: boolean
  };
  ```
  </TabItem>

  <TabItem value="callsession.sipSession" label="callsession.sipSession">
  ``` 
    Cette propriété ne sera pas détaillée,
    et nous sera pas utile.
    ```
  </TabItem>
</Tabs>







