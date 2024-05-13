---
sidebar_position: 1
---

# Node Red introduction

Sometimes we hear about a lot of software that seems by far super interesting, we go to a tweet, an article, we look at the website and we say that we would like to play with it because it seems to have a really interesting potential. I have a number of this software in mind, but I decided to dig it out during the holiday season. This software is called node RED. Developed by IBM Emerging Technology for a few years under Apache 2 license, this software is very popular, has an ecosystem and a very interesting programmable opening. This is a project in the OpenJS foundation.

It is defined as “Low-code programming for event-driven applications”.

I invite you to browse the website http://www.nodered.org to learn more.

Also the language elements here: https://nodered.org/docs/user-guide/concepts

![nodered-intro-1](/img/nodered/nodered-intro-1.png)

To install it is rather simple especially if you have docker. Personally I made a directory on my disk to have persistent storage (ex. Nodered-data) and I run the following command:

```bash
docker run -it -p 1880:1880 -v <directory/nodered-data>:/data --name mynodered nodered/node-red
```

Once my Node-Red is launched, I just need to go to the web page on port 1880.

To install node-red see the doc page here: https://nodered.org/docs/getting-started/

## Wazo Platform and Node Red

Very quickly if you do not know wazo-platform, I invite you to read our website https://wazo-platform.org/ to discover us, but a quick introduction to give you an idea.

Wazo Platform’s mission is to provide a native programmable cloud telecommunications platform. It is open source and distributed under the free GPLv3 license. Its purpose is clearly to remove complex plumbing from the telecommunications platform and allow innovation in this area.

To install wazo-platform I refer you to our dedicated page https://wazo-platform.org/install. The use case covered by this article is on the subject of unified communication, so I invite you to follow the documentation on this subject.

Once your wazo platform is in place, you can have fun with Wazo Platform and Node Red.

## Wazo platform configuration

The prerequisites are quite simple, you need an account that has the rights to play with the APIs, a SIP trunk to call the platform, or simply a phone connected directly to it and having declared a programmable application on the platform.

## Node Red side

Your node-red has been installed, you just have to go into module management, look for wazo and install the plugin. Once the plugin is installed you will find a number of nodes available to create what seems interesting to you.

## Use case

We are going to talk about some use cases, but obviously you will be able to play with node-red and Wazo Platform by discovering a lot.

I suggest you discover these:
* Simple call and hang up
* IVR with home automation integration
* SIP trunk monitoring

Module to install:
* node-red-contrib-wazo-platform
* node-red-dashboard

### Basic configuration

First you have to connect your flow to the wazo websocket to receive the events. Just add a “wss in” node. Then go to the configuration by clicking on the node and add the server then make a token request by putting your Wazo API identifiers. The identifiers are not stored, the application only keeps the refreshToken. Once the websocket is configured we will be able to start a first case.

### Received call and hangup

In this first case we will call our telephone number. By default if you have not done anything in your node-red or developed anything, it will not happen much except to have received an event to notify you that you have an incoming call.

In the case of wazo platform, an incoming call is signaled by a message with the name application_call_entered. We will therefore filter on this event then launch a progress, which is the ringing train, wait 5 seconds and finally hang up the call. This obviously doesn’t do much, but it does get you started with your Red node.

Do not forget to press Deploy each time you modify it in your node-red to apply your modifications.

![nodered-intro-2](/img/nodered/nodered-intro-2.jpeg)

### IVR

It’s pretty simple to create an IVR with a sound and pick up DTMFs to redirect the call. In the example below, just add a DTMF node, choose the key and connect the destination. In my case 9 hangs up the call, 1 calls a phone number, but 2 and 3 simply manage my light to turn it on or off.

![nodered-intro-3](/img/nodered/nodered-intro-3.png)

### SIP Trunk

The wazo platform module also offers the ability to connect a trunk node to supervise it (register or not) and to know the number of calls in progress. We can then make graphs to monitor the number of calls, but we could also put a notification to say that the trunk is no longer recording.

![nodered-intro-4](/img/nodered/nodered-intro-4.png)

The above example generates graphs and gauges on the node-red-dashboard in real time without having to make a line of code. To access it, simply connect to the interface http://my_server:1880/ui and you will see your graphs in real time. This dashboard is quite powerful and you can do a lot of configuration and customization, but also write your own graphic elements.

![nodered-intro-5](/img/nodered/nodered-intro-5.png)

## original post

[Introduce node-red plugin (part 1)](https://wazo-platform.discourse.group/t/introduce-node-red-plugin-part-1/145)