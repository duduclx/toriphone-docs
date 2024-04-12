import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# sendDTMF

Les codes sont utilisés lorsque l'on doit intéragir avec un IVR (standard ou messagerie par exemple).

```js
sendDTMF: (tone: string, callSession: CallSession) => void;
```

```js
Wazo.Phone.sendDTMF(tone, callSession);
```

<Tabs>
  <TabItem value="Paramètres" label="Paramètres" default>

  `tone` : string  
  correspond à la touche désirée,  
  eg: 0-9, \* et #.

  `callSession` : objet CallSession  
  correspond à l'appel en cours.

  </TabItem>

  <TabItem value="Réponse" label="Réponse">

  `void` :  
  Il ne retourne rien.

  </TabItem>

  <TabItem value="Evènement" label="Evènement">

  Il déclenche le websocket.  
  `CALL_DTMF_CREATED: "call_dtmf_created"`

  </TabItem>

  <TabItem value="Exemple" label="Exemple">

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)

    const initializeWebRtc = async () => {
      // connexion à la ligne SIP
      await Wazo.Phone.connect({ audio: true, video: true });
    };

    const sendDTMF = (tone, callSession) => {
      // envoi le code
      Wazo.Phone.sendDTMF(tone, callSession);
    };
  };
  ```
  
  </TabItem>

</Tabs>