---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# setHost

Permet de configurer le serveur Wazo sur lequel s'authentifier.

```js
Wazo.Auth.setHost(host);
```

<Tabs>

  <TabItem value="Paramètres" label="Paramètres" default>

  `host`: string  
  URL ou ip de votre serveur (inclure le port si nécessaire).
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
  const server = '172.0.0.1'
  Wazo.Auth.setHost(server)
  ```

  </TabItem>

</Tabs>