import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reject

Il est possible de rejeter un appel entrant, cela évite de laisser sonner alors que l'on ne souhaite pas décrocher.

```js
reject(callSession: CallSession): Promise<void> | undefined
```

```js
Wazo.Phone.reject(callSession);
```

<Tabs>
  <TabItem value="Paramètres" label="Paramètres" default>

  `callSession` : objet CallSession  
  correspond à l'appel reçu.

  </TabItem>

  <TabItem value="Réponse" label="Réponse">

  `void` :  
  Il ne retourne pas de réponse.
  </TabItem>

  <TabItem value="Evènement" label="Evènement">

  Il déclenche l'évènement:  
  [`ON_CALL_REJECTED`](sdk/simpleapi/phoneEvents/onCallRejected.md) 

  Il déclenche aussi un WebSocket qui sera joué à l'appelant et à l'appelé :  
  CALL_ENDED: "call_ended"

  </TabItem>

  <TabItem value="Exemple" label="Exemple">

  ```js
  const rejectIncomingCall = callSession => {
    // hide incommingCall box
    setIncomingCall(false);
    // reject call
    Wazo.Phone.reject(callSession);
  };
  ```

  </TabItem>

</Tabs>