import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# stopScreenSharing

Permet d'arréter le partage de contenu lors d'un appel vidéo.

```js
stopScreenSharing: (callSession?: CallSession, restoreLocalStream?: boolean) => Promise<OutgoingInviteRequest | void | null>;
```

```js
Wazo.Phone.stopScreenSharing(callSession, restoreLocalStream);
```

<Tabs>
  <TabItem value="Paramètres" label="Paramètres" default>

  `callSession` : objet CallSession  
  correspond à l'appel en cours.

  `restoreLocalStream` : boolean

  </TabItem>

  <TabItem value="Réponse" label="Réponse">

  `void` :  
  Il ne retourne rien.

  </TabItem>

  <TabItem value="Evènement" label="Evènement">

  Il déclenche les evènements.  
  ``ON_SHARE_SCREEN_ENDED``  

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

    const stopScreenSharing = (callSession) => {
      Wazo.Phone.stopScreenSharing(callSession);
    };
  };
  ```
  
  </TabItem>

</Tabs>