---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

## Installation dans un projet

Vous pouvez l'installer avec une de des commandes suivantes, à votre préférence :

<Tabs>
    <TabItem value="npm" label="npm" default>
    ```bash
    npm install @wazo/sdk
    ```
    </TabItem>
    <TabItem value="yarn" label="yarn">
    ```bash
    yarn add @wazo/sdk
    ```
    </TabItem>
</Tabs>

## Importation

Vous pouvez maintenant l'importer :

<Tabs>
    <TabItem value="node" label="node" default>
    ```js
    import Wazo from '@wazo/sdk';
    ```
    </TabItem>
    <TabItem value="vanilla js" label="vanilla js">
    ```js
    const { Wazo } = window['@wazo/sdk'];
    ```
    </TabItem>
</Tabs>

## Content Delivery Networks

Il est possible de charger le SDK depuis un CDN.

<Tabs>
    <TabItem value="unpkg" label="unpkg" default>
    ```html
    <script src="https://unpkg.com/@wazo/sdk/dist/wazo-sdk.js"></script>
    ```
    </TabItem>
    <TabItem value="JsDelivr" label="JsDelivr">
    ```html
    <script src="https://cdn.jsdelivr.net/npm/@wazo/sdk"></script>
    ```
    </TabItem>
</Tabs>