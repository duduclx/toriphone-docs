---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# refreshToken

## configurer un callback lorsque le token est renouvelé

Quand le token de l'utilisateur va bientôt expirer, le SDK de Wazo déclenche un callback.  
Vous pouvez donc me mettre à jour dans votre application.  
Par exemple, l'enregistrer dans le localStorage ou les cookies.

> Il faut configurer le clientId pour que le refresh token soit retourné dans `Session` !

```js
Wazo.Auth.setOnRefreshToken(token => { /* Do something with the new token */ });
```

<Tabs>
  <TabItem value="Paramètres" label="Paramètres" default>

  `callback`: Function (token: string)  
  Une fonction appelée lorsque le token de l'utilisateur va bientôt expirer.
  </TabItem>

  <TabItem value="Réponse" label="Réponse">

  `Wazo.domain.Session` :  
  Il retourne l'objet `session` de l'utilisateur
  </TabItem>

  <TabItem value="Evènement" label="Evènement">
  Il ne déclenche pas d'évènement.
  </TabItem>

  <TabItem value="Exemple" label="Exemple">
  
  ```js
  Wazo.Auth.setOnRefreshToken((token) => {
      setUser({ token });
    });
  ```
  </TabItem>

</Tabs>