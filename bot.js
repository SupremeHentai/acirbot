const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "73:";

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (message.content.includes("73") && message.member.user.id != "736872553938944070") {
        console.log(message.member.user.id);
	    // send back "Pong." to the channel the message was sent in
	    //message.channel.send('<:osuhow:713918429073113102>');
    }
});

client.on('message', message => {
    //console.log(message.content.slice(0,8));
    if (message.content.slice(0,7).toLowerCase() == prefix + " say") {
        message.channel.send(message.content.slice(8,message.content.length));
    }
});

client.on('message', message => {
    if (message.content == "FEAR" || message.content == "FEAR!") {
        message.channel.send("FEAR GOD AND GIVE GLORY TO HIM!")
    }
});

client.on('message', message => {
    console.log(message.channel.name);
    len = message.content.length;
    if (message.content.slice(len-3,len) == "nig") {
        const attachment = new Discord.MessageAttachment('gers.jpg');
        message.channel.send(attachment);
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() == "no") {
        message.channel.send("cturne");
    }
});

client.on('message', message => {
    if (message.content.slice(0,8).toLowerCase() == prefix + " eval") {
        message.channel.send(eval(message.content.slice(9,message.content.length)))
    }
});

client.on('message', message => {
    rand = Math.random()
    console.log(rand);
    if (rand > 0.99) {
        const attachment = new Discord.MessageAttachment('kunt.png');
        message.channel.send(attachment);
    }
});

client.login('NzM2ODcyNTUzOTM4OTQ0MDcw.Xx1ICw.PK_NmIAsDelSB61blpXPm1sdCmA');