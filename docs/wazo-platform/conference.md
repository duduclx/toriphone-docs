# conference

https://wazo-platform.org/uc-doc/administration/meetings


## créer une conférence

détailler

## aller plus loin

Pour avoir le comportement suivant:

Les participants qui se connectent avec le user PIN peuvent se connecter avant l'admin, mais ne peuvent pas communiquer entre eux tant que l'admin n'est pas connecté.

Lorque l'admin quitte la conférence, tous les participants sont déconnectés.

Dans votre conférence, indiquez un PIN user et un PIN admin distinct.

dans global settings / conference / default user

ajouter

```conf
wait_marked yes
end_marked yes
```

créer un nouveau fichier 
50-admin-is-marked.conf 
dans
/etc/asterisk/confbridge.d/

```bash
nano /etc/asterisk/confbridge.d/50-admin-is-marked.conf 
```

et ecrire
```conf
[xivo-admin-profile-1](+)
marked = yes
```

puis redémarrer le serveur

```bash
systemctl reboot
```