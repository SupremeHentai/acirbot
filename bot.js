const Discord = require('discord.js');
var fs = require('fs');
const client = new Discord.Client();
const prefix = "73:";
 
var token = "NzM2ODcyNTUzOTM4OTQ0MDcw.Xx1ICw.EEDRvCRShMHrlqwbUSLBWe8gO6k";
var basedChannels = ["cable-street-bets", "alphatism"];
 
 
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
    if (message.content.toLowerCase() == "guacamole") {
        message.channel.send("🥑👨🏿🍆");
    }
});
 
client.on('message', message => {
    if (message.guild.name == "UoA: level 3 confessions") return;
    len = message.content.length;
    if (message.content.slice(len-3,len).toLowerCase() == "nig") {
        if (basedChannels.includes(message.channel.name)) {
            const attachment = new Discord.MessageAttachment('gers.jpg');
            message.channel.send(attachment);
        }
    }
});
 
client.on('message', message => {
    len = message.content.length;
    if (message.content.includes("hentai")) {
        if (basedChannels.includes(message.channel.name)) {
            const attachment = new Discord.MessageAttachment('import.jpg');
            message.channel.send(attachment);
        }
    }
});
 
client.on('message', message => {
    if (message.content.toLowerCase() == "no") {
        message.channel.send("cturne");
    }
});
 
client.on('message', message => {
    if (message.channel.name == "👶part1") return;
    if (message.author.bot) return;
    if (message.member.user.id == "736872553938944070") return;
    var string = message.content;
    if (string.toLowerCase().includes("my ")) {
        const idx = string.indexOf("my");
        const item = string.slice(idx + 3);
        message.channel.send("OUR " + item + " comrade");
    }
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.name == "👶part1") return;
    if (message.member.user.id == "736872553938944070") return;
    var string = message.content;
    if (string.toLowerCase().includes("i ")) {
        const idx = string.indexOf("i ");
        const item = string.slice(idx + 2);
        message.channel.send("WE " + item + " comrade");
    }
});

client.on('message', message => {
    if (message.member.user.id == "736872553938944070") return;
    var string = message.content;
    if (string.toLowerCase().includes("pain")) {
        message.channel.send("🥖");
    }
});

client.on('message', message => {
    console.log(message.channel.name);
    if (message.channel.name == "👶part1") return;
    if (message.author.bot) return;
    if (message.member.user.id == "736872553938944070") return;
    var string = message.content;
    if (string.toLowerCase().includes("i'm ")) {
        const idx = string.indexOf("i'm");
        const item = string.slice(idx + 4);
        message.channel.send("WE'RE " + item + " comrade");
    }
});
 
client.on('message', message => {
    if (message.guild.name == "UoA: level 3 confessions") return;
    if (message.content.toLowerCase() == "around the world") {
        /*for (var i = 0; i < 12; i++) {
            message.channel.send("around the world\naround the world\naround the world\naround the world\n\naround the world\naround the world\naround the world\naround the world\n\naround the world\naround the world\naround the world\naround the world\n\n");
        }*/
        for (var i = 0; i < 4; i++) {
            message.channel.send(`Around the world, around the world 
Around the world, around the world 
Around the world, around the world 
Around the world, around the world
 
Around the world, around the world 
Around the world, around the world 
Around the world, around the world 
Around the world, around the world
 
Around the world, around the world 
Around the world, around the world 
Around the world, around the world 
Around the world, around the world
 
Around the world, around the world 
Around the world, around the world 
Around the world, around the world 
Around the world, around the world
 
Around the world, around the world 
Around the world, around the world 
Around the world, around the world 
Around the world, around the world
            `)
        }
        /*const attachment = new Discord.MessageAttachment('aroundtheworld.txt');
        message.channel.send(attachment);*/
    }
});
 
client.on('message', message => {
    if (message.guild.name == "UoA: level 3 confessions") return;
    if (message.content.toLowerCase() == "ram ranch") {
        message.channel.send(`
18 naked cowboys in the showers at Ram Ranch!
Big hard throbbing cocks wanting to be sucked!
18 naked cowboys wanting to be fucked!
Cowboys in the showers at Ram Ranch!
On their knees wanting to suck cowboy cocks!
Ram Ranch really rocks!
Hot hard buff cowboys their cocks throbbing hard!
18 more wild cowboys out in the yard!
Big bulging cocks ever so hard!
Orgy in the showers at Ram Ranch!
Big hard throbbing cocks ramming cowboy butt!
Like a breed a ram wanting to rut! 
Big hard throbbing cocks getting sucked real deep! 
Cowboys even getting fucked in their sleep! 
Ram Ranch ... it ROCKS! 
Cowboys love big hard throbbing cocks! 
            `)
        }
    }
);
 
/*
client.on('message', message => {
    if (message.content.slice(0,8).toLowerCase() == prefix + " eval") {
        message.channel.send(eval(message.content.slice(9,message.content.length)))
    }
});*/
 
client.on('message', message => {
    if (message.guild.name == "UoA: level 3 confessions") return;
    rand = Math.random()
    console.log(rand);
    if (rand > 0.99) {
        const attachment = new Discord.MessageAttachment('kunt.png');
        message.channel.send(attachment);
    }
});
 
client.on('message', message => {
    if (message.content == "+gloria") {
        const attachment = new Discord.MessageAttachment('gloria.png');
        message.channel.send(attachment);
    }
});
 
client.login(token);