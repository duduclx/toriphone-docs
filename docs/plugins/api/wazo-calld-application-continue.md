# wazo calld application continue

Add continue to dialplan in applications control to wazo-calld. Add switch from dialplan to application to be controlled by wazo-calld.

[wazo-calld-application-continue](https://github.com/sboily/wazo-calld-application-continue)

This will add this endpoints to the calld section:
* `/applications/<application_uuid>/calls/<call_id>/continue`
* `/calls/<call_id>/applications/<application_uuid>`

Check the API in your wazo in calld section in http://wazo_ip/api

installation:

```bash
apt install wazo-plugind-cli
wazo-plugind-cli -c "install git https://github.com/sboily/wazo-calld-application-continue --ref main"
```

author: Sylvain Boily