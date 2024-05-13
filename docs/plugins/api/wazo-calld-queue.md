# wazo calld queue 

This plugin add queue control to wazo-calld and publish to Wazo websocket Queue log from wazo-call-logd

[wazo-calld-queue](https://github.com/sboily/wazo-calld-queue) 

This will add this endpoints to the calld section:
* ``/queues``
* ``/queues/<queue_name>``
* ``/queues/<queue_name>/add_member``
* ``/queues/<queue_name>/remove_member``
* ``/queues/<queue_name>/pause_member``
* ``/queues/<queue_name>/livestats``
* ``/queues/agents_status``
* ``/queues/<queue_name>/withdraw``

Check the API in your wazo in calld section in http://wazo_ip/api

installation:

```bash
apt install wazo-plugind-cli
wazo-plugind-cli -c "install git https://github.com/sboily/wazo-calld-queue"
```

author: Sylvain Boily