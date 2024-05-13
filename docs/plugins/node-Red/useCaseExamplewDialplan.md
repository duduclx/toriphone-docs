---
sidebar_position: 3
---

# Node Red with dialplan example


## call blacklist from node red

The example is for blacklisting a call

```bash
[xivo-subrgbl-did]
exten =  s,1,NoOp(Check if incoming calls is blacklisted in node-red)
same  =    n,Set(CURLOPT(ssl_verifypeer)=0)
same  =    n,Set(CURLOPT(header)=1)
same  =    n,Set(CURLOPT(httptimeout)=10)
same  =    n,Set(CURLOPT(httpheader)=X_CHANNEL_ID:${CHANNEL(uniqueid)})
same  =    n,Set(CURLOPT(httpheader)=X_EXTEN:${XIVO_BASE_EXTEN})
same  =    n,Set(CURLOPT(httpheader)=X_CALLERID:${CALLERID(num)})
same  =    n,Set(CURLOPT(useragent)=wazo)
same  =    n,Set(CURL_RESULT=${CURL(http://**your_node_red**/blacklist)})
same  =    n,Set(RESPONSE=${CUT(CURL_RESULT, ,2)})
same  =    n,GotoIf($["${RESPONSE}" = "404"]?blacklisted)
same  =    n,Return()
same  =    n(blacklisted),Playback(bye)
same  =    n,Hangup()
```

This dialplan just make an http request to a node-red, and it decide to accept call or not depending of the HTTP result of your request. So basically 200 is, ok call is not blacklisted, and 404 is call is blacklisted.

In my node red i just created an http endpoint /blacklist and i wrote a very small function for the exemple to accept or not the call. If the call is accepted, i just go to the 200 and if not go to 404.

![nodered-dialplan-1](/img/nodered/nodered-dialplan-1.png)

In my function, i just get the information like this:

```js
const callerid = msg.req.headers.x_callerid;
const channel_id = msg.req.headers.x_channel_id;
const exten = msg.req.headers.exten;

if (callerid == '8000') {
    return [null,msg]
}

return [msg,null];
```

So this is a really simple exemple, but you can imagine for exemple to get your blacklist from a google sheet, or any databases you want. The possibility is clearly very big ;).

## original post

[calltrace for blacklist](https://wazo-platform.discourse.group/t/calltrace-for-blacklist/312/4?u=quintana)