import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# transfer

Le transfère d'appel direct permet de rediriger l'appel directement vers le numéro cible.

```js
transfer: (callSession: CallSession, target: string) => void;
```

```js
Wazo.Phone.transfer(callSession, target)
```

<Tabs>
  <TabItem value="Paramètres" label="Paramètres" default>

  `callSession` : objet CallSession  
  correspond à l'appel reçu.

  `target` : string  
  correspond au numéro de téléphone à qui transférer l'appel.

  </TabItem>

  <TabItem value="Réponse" label="Réponse">

  `void` :  
  Il ne retourne pas de réponse.

  </TabItem>

  <TabItem value="Evènement" label="Evènement">

  Il déclenche l'évènement:  
  [`ON_CALL_INCOMING`](sdk/simpleapi/phoneEvents/onCallIncoming.md)

  Cet évènement sera reçu par l'appelé.

  on call outgoing ??
  on call ended ??

  </TabItem>

  <TabItem value="Exemple" label="Exemple">

  ```js
  import React, { useState } from "react";

  export const myComponent = () => {
    const [callSession, setCallSession] = useState({}); // contient l'appel actif
    const [callSessions, setCallSessions] = useState({}); // contient l'ensemble des appels (en cours et disponible)
    const [target, setTarget] = useState(""); // le numéro cible du transfert d'appel

    const initializeWebRtc = async () => {
        // connexion à la ligne SIP
        await Wazo.Phone.connect({ audio: true, video: true });
    };

    const directTransfer = (callSession, target) => {
      Wazo.Phone.transfer(callSession,target)
      setCallSessions((prevCallSessions) => {
        const newCallSessions = { ...prevCallSessions };
        delete newCallSessions[callSession.getId()];
        return newCallSessions;
      });
    }
  }
  ```
  
  </TabItem>

</Tabs>