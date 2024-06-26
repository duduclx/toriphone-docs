# ON_CALL_RESUMED

L'event `ON_CALL_RESUMED` se déclenche lorsqu'un appel mis en pause est repris.

```js
Wazo.Phone.on(Wazo.Phone.ON_CALL_RESUMED, onCallResumed);
```

<div class="useless-tab-container">

- **Déclenchement**

  L'event `ON_CALL_RESUMED` se déclenche lorsqu'un appel mis en pause est repris.

- **Data**

  ```js
  {
  answered: true,
  answeredBySystem: undefined,
  answerTime: Date "date",
  autoAnswer: false,
  call: undefined,
  callId: "id du callSession",
  callerNumber: undefined,
  cameraEnabled: false,
  conference: false,
  creationTime: Date "date",
  dialedExtension: "",
  displayName: "prénom nom",
  endTime: null,
  ignored: false,
  isCaller: true,
  muted: false,
  number: "numéro",
  paused: false, // !
  recording: false,
  recordingPaused: false,
  ringing: false,
  screensharing: false,
  sipCallId: "id de l'appel Sip",
  sipStatus: "Established",
  startTime: Date "date",
  type: "CallSession",
  videoMuted: false,
  videoRemotelyDowngraded: undefined,
  }
  ```

- **Logique**

  Permet d'obtenir les informations à jour de `callSession`.

- **Exemple**

  voici un exemple dans un projet avec React :

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
      // écoute de l'évènement ON_CALL_RESUMED
      Wazo.Phone.on(Wazo.Phone.ON_CALL_RESUMED, onCallResumed);
    };

    const onCallResumed = (callSession) => {
      // obtenir l'id de l'appel à retirer
      const callSessionId = callSession.getId();
      // retiré des appels disponibles dans callSessions
      setCallSessions((prevCallSessions) => {
        const newCallSessions = { ...prevCallSessions };
        delete newCallSessions[callSessionId];
        return newCallSessions;
      });
      // retiré l'appel de l'appel en cours CallSession
      setCallSession({});
    };
  };
  ```

</div>
