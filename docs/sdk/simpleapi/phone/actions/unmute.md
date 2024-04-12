import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# unmute

Il réactive le micro de l'utilisateur, afin que l'appelé entende de nouveau.

```js
Wazo.Phone.unmute(callSession);
```

<Tabs>
  <TabItem value="Paramètres" label="Paramètres" default>

  `callSession` : objet CallSession  
  correspond à l'appel en cours.

  </TabItem>

  <TabItem value="Réponse" label="Réponse">

  `void` :  
  Il ne retourne rien.

  </TabItem>

  <TabItem value="Evènement" label="Evènement">

  Il déclenche l'évènement.  
  `ON_CALL_UNMUTED`

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

    const unmute = (callSession) => {
      setCallSessions((prevCallSessions) => {
        const newCallSessions = { ...prevCallSessions };
        // met à jour l'appel dans callSessions
        newCallSessions[callSession.getId()].muted = false;
        return newCallSessions;
      });
      // active le micro
      Wazo.Phone.unmute(callSession);
    };
  };
  ```
  
  </TabItem>

</Tabs>