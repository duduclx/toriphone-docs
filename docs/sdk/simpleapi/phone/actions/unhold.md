import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# unhold

La fonction `unhold` est obsolète.  
Il faut utiliser `resume` afin de reprendre un appel mis en pause.

```js
unhold: (callSession: CallSession) => Promise<MediaStream | void | null | undefined>;
```