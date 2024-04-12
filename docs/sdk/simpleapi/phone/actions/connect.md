import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# connect

Connecte la ligne WebRtc de l'utilisateur et rend les appels possibles.

```js
connect: (options: Partial<ConnectionOptions>, sipLine?: SipLine | null | undefined) => Promise<void>;
```

```js
Wazo.Phone.connect(rawOptions, sipLine);
```

<Tabs>
  <TabItem value="Paramètres" label="Paramètres" default>

  `rawOptions` : (optionel)    
  Il est possible de configurer les contraintes au niveau du son et de vidéo du navigateur de l'utilisateur.  
  Plus d'informations sur [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
  ```js
  {
    audio: boolean,
    video: boolean
  }
  ```

  `sipLine` : (optionel)  
  Il est possible de renseigner une ligne Sip si elle n'existe pas dans la `Session`.

  </TabItem>

  <TabItem value="Réponse" label="Réponse">

  `void` :  
  Il ne retourne pas de réponse

  </TabItem>

  <TabItem value="Evènement" label="Evènement">

  Il ne déclenche pas d'évènement.
  </TabItem>

  <TabItem value="Exemple" label="Exemple">

  ```js
  const initializeWebRtc = async () => {
    await Wazo.Phone.connect({ audio: true, video: true });
    };
  ```

  </TabItem>

</Tabs>