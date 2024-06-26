---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# init

Permet de pré-configurer l'application, avant de pouvoir connecter un utilisateur.

```js
Wazo.Auth.init(clientId, tokenExpiration, minSubscriptionType, authorizationName);
```

> Il faut configurer le clientId pour que le refresh token soit retourné dans `Session` !

<Tabs>
  <TabItem value="Paramètres" label="Paramètres" default>

  `clientId`: string (optionel)  
  Un identifiant de l'application, qui est obligatoire pour obtenir un refreshtoken.
  
  `tokenExpiration`: number (optionel, par defaut 3600 secondes)  
  Durée avant expiration du token (en secondes) 
  
  `minSubscriptionType`: number (optionel)  
  Defines the minimum user subscription type that allows access to your application.
  
  `authorizationName`: string (optionel)  
  Defines the name of the authorization the user should have to ba able to login.
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
  // initialise l'application avec un identifiant "wazo-desktop"
  // et configure la durée du token à 3600 secondes, soit 1 heure
  Wazo.Auth.init("wazo-desktop", 3600);
  ```
  
  </TabItem>
</Tabs>