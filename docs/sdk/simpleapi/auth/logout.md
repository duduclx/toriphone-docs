---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# logout

## déconnecter un utilisateur

Détruit le token et refrashToken de l'utilisateur.

```js
await Wazo.Auth.logout();
```

<Tabs>
  <TabItem value="Paramètres" label="Paramètres" default>
  Aucun
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
  const logout = async () => {
    await Wazo.Auth.logout();
    session = null;
  };
  ```
  </TabItem>

</Tabs>