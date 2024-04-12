---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# validToken

## valider le token de l'utilisateur

```js
const session = await Wazo.Auth.validateToken(token, refreshToken);
```

<Tabs>
  <TabItem value="Paramètres" label="Paramètres" default>
  
  `token`: string  
  le token de l'utilisateur a valider (eg: vérifie que le token est valide et non expiré).
  
  `refreshToken`: string (optionel)  
  le refresh token de l'utilisateur, utilisé pour générer un nouveau token si le token est expiré.
  </TabItem>

  <TabItem value="Réponse" label="Réponse">

  `Wazo.domain.Session` :  
  Il retourne l'objet `session` de l'utilisateur
  </TabItem>

  <TabItem value="Evènement" label="Evènement">
  Il ne déclenche pas d'évènement.
  </TabItem>

  <TabItem value="" label="">

  ```js
  const session = await Wazo.Auth.validateToken(token, refreshToken);
  ```
  </TabItem>

</Tabs>