import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### disconnect

Déconnecte la ligne WebRtc de l'utilisateur.

```js
disconnect: () => Promise<void>;
```

```js
Wazo.Phone.disconnect();
```

<Tabs>
  <TabItem value="Paramètres" label="Paramètres" default>

  Il ne prend pas de paramètre.
  </TabItem>

  <TabItem value="Réponse" label="Réponse">

  `void` :  
  Il ne retourne pas de réponse
  </TabItem>

  <TabItem value="Evènement" label="Evènement">

  Il déclenche l'évènement :  
  `ON_DISCONNECTED`

  </TabItem>

  <TabItem value="Exemple" label="Exemple">

  ```js
  const closeWebRtc = async () => {
    await Wazo.Phone.disconnect();
    };
  ```

  </TabItem>

</Tabs>