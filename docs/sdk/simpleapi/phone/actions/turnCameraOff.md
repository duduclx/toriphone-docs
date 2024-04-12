import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# turnCameraOff

Permet de désactiver la caméra lors d'un appel vidéo.

```js
turnCameraOff: (callSession: CallSession) => void;
```

```js
Wazo.Phone.turnCameraOn(callSession);
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
  `ON_CAMERA_DISABLED`

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

    const turnCameraOff = (callSession) => {
      // désactive la caméra
      Wazo.Phone.turnCameraOff(callSession);
    };
  };
  ```
  
  </TabItem>

</Tabs>