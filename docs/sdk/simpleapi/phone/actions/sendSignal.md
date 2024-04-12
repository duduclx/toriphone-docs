import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# sendSignal

Permet d'envoyer un simple texte à l'interlocuteur.  
Le texte n'est pas enregistré en base, il faut donc le récupérer via l'évènement pour l'afficher au destinataire.  
Il est différencier de `sendChat`, son but est de pouvoir créer un évènement identique mais pour une autre action.  
Par exemple, lever la main, un wizz, etc ...

```js
sendSignal: (content: any, sipSession?: Inviter | Invitation) => void;
```

```js
Wazo.Phone.sendSignal(content);
```

<Tabs>
  <TabItem value="Paramètres" label="Paramètres" default>

  `content` : string  
  le texte à envoyer.

  </TabItem>

  <TabItem value="Réponse" label="Réponse">

  `void` :  
  Il ne retourne rien.

  </TabItem>

  <TabItem value="Evènement" label="Evènement">

  Il déclenche l'évènement.  
  `ON_SIGNAL`  

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

    const sendSignal = (message) => {
      // envoi le signal
      Wazo.Phone.sendSignal(message);
    };
  };
  ```
  
  </TabItem>

</Tabs>