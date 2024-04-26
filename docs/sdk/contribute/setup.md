# setup

## environnement de développement

Vous pouvez contriuber et modifier le projet Wazo-js-sdk.

Voici deux méthodes pour écrire et tester votre code.

On considère que vous avez une application, soit pour de la production, soit uniquement pour du test / dev.

## embarqué

Dans ce projet, créer un dossier sdk
```bash
mkdir sdk
```

cloner wazo-js-sdk dans ce dossier

```bash
cd sdk
git clone https://github.com/wazo-platform/wazo-js-sdk.git
```

faites vos modifications et lancer

```bash
yarn clean && yarn build
```

dans votre application, importer le sdk non pas depuis le package officiel (@wazo/sdk)
mais depuis votre propre build, en vous assurant du bon chemin.

```js
import Wazo from "../sdk/wazo/sdk"
```

## déporté

En dehors de votre application,
vous clonez wazo-js-sdk

```bash
git clone https://github.com/wazo-platform/wazo-js-sdk.git
```

vous apportez vos changements dans le dossier src de wazo-js-sdk

Vous compilez le package

```bash
yarn clean && yarn build
```

Vous copiez les dossiers
`dist`, `esm`, `lib`
dans 
`node_modules/@wazo/sdk`