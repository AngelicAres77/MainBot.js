var Discordie = require("discordie");

var client = new Discordie({

    messageCacheLimit: 2000,

    autoReconnect: true

});

var Events = Discordie.Events;

client.connect({

    token: "MzkxNDQ3MTIzNjIwNjU5MjAx.DRYzEA.uGNLdT8_pCgCZ6QI9c0GGGE1H4E"

});



client.Dispatcher.on(Events.GATEWAY_READY, e => {

    console.log("Username: " + client.User.username);
  client.User.setGame("help");
});



client.Dispatcher.on(Events.MESSAGE_CREATE, e => {

    var input = e.message.content;

    var params = input.split(" ");

    var cmd = params.splice(0, 1);

    var channel = e.message.channel;

    var mentions = e.message.mentions;

    var author = e.message.author;

    var guild = e.message.guild;

	var prefix = "^"





    switch (cmd[0].toLowerCase()) {

        case "network":

            e.message.reply("I am online and fully functional.");

            break;

    case prefix + "help":

      var str = (" ```^network: makes sure bot is online. ``` ");

      str += (" ```^discordie: gives link to where to learn discordie. ``` ");

      str += (" ``` ^help: shows list of commands. ``` ");

      //str += (" ``` ^invite: invites the bot to a server. ``` ");

      str += (" ``` ^changes: Shows what is new for the bot. ``` ");

      //str += (" ``` ^kick: Kicks a user. Usage: ^kick @user (reason) ``` ");

      str += (" ``` ^ban: bans a user. Usage: ^ban @user (reason) ``` ");

      //str += (" ``` ^join: joins the bot's offical discord. ``` ");

      //str += (" ``` ^joincommandsdiscord: Join's Command's offical discord. ``` ");


      client.DirectMessageChannels.getOrOpen(author).then(function (dm) {

        dm.sendMessage(str).then(function (msg) {

          channel.sendMessage("", false, {

            color: 0x5ae862,

            title: "Message sent!"

          });

        });

      });

            break;

            //Need to convert to new channels

			//Do not touch these

            /*case "rules":

                switch (e.message.channel_id) {

                    case "":

                        e.message.channel.sendMessage(" ``` No spamming, no swearing please, no disrespect, this is for all synch players, use trade channel for trading, selling, or anything to do with exchanging, Staff_Applications is for applications, rules will be in that chat ``` ")

                        break;

                    case "287711480135155712":

                        e.message.channel.sendMessage(" ``` No spamming applications,be patient, Chris will get to your application when he has time. ``` 	")

                        break;

                    case "288061628035891211":

                        e.message.channel.sendMessage("``` Bans: ```")

                        break;

                    case "287967700783988736":

                        e.message.channel.sendMessage(" ``` Rules: ``` ")

                        break;

                }



                break; */

        case prefix + "guilds":

            if (e.message.author.id == 273595447296131084){

                var chans = [];



                client.Guilds.map(g => {

                    setTimeout(function() {

                        channel.sendMessage(g.name);

                        g.channels.forEach(ch => {

                            chans.push(ch.name);

                        }, this);



                        channel.sendMessage("\t" + chans.join("\n\t » "));

                    }, 2 * 1000);

                });

            }



            break;

        case "kick":
  if (e.message.author.id == 273595447296131084){
            var id = (mentions[0]) ? mentions[0].id : params[0];

            var guildmember = guild.members.find(m => m.id == id);



            if (guildmember)

                guildmember.kick().then(function() {

                    console.log("Kicked user");

                    e.message.channel.sendMessage("succesfully Kicked" + m.id);

                });
                }
            break;



        case "ban":
        if (e.message.author.id == 273595447296131084){

            var id = (mentions[0]) ? mentions[0].id : params[0];

            var guildmember = guild.members.find(m => m.id == id);



            if (guildmember)

                guildmember.ban().then(function() {

                    console.log("Banned user");

                    e.message.channel.sendMessage("Succesfully Banned");

                });
              }
            break;

		case prefix + "invite":

			e.message.channel.sendMessage("https://discordapp.com/oauth2/authorize?client_id=391447123620659201&scope=bot&permissions=2146948351")

			break;

        case  prefix + "changes":

            e.message.reply(" ``` Bot Re-made and Re-coded. ``` ");

            break;

            /*case  prefix + "join":

            e.message.reply(" ");

            break;*/

		case prefix + "announce":

		if (e.message.author.id == 273595447296131084){

            var string = [];

            var spop = [].concat.apply([], e.message.content.split('"').map(function(v, i) {

                return i % 2 ? v : v.split(' ');

            })).filter(Boolean);

            for (var i = 2; i < spop.length; i++) {

                string.push(spop[i]);

            }

            var title = spop[1]



            client.Guilds.forEach(function(res) {

                res.generalChannel.sendMessage(" **Incoming announcement from the Admin**", false, {

                    color: 0x5ae862,

                    author: {

                        name: title = title,

                        icon_url: client.User.avatarURL

                    },

                    fields: [{

                        name: "Announcement(s)",

                        value: "```\n " + string.join(" ") + "```"

                    }],

                    thumbnail: {

                        url: client.User.avatarURL

                    }

            }).then(function(err, res) {

                channel.sendMessage("Announcement has been sent");

            }).catch(function(err) {

                console.log(err);

            });

  });

}

  break;

			case prefix + "gisthub":

				e.message.channel.sendMessage(" https://gist.github.com/ ")

				break;

		}

}); //229-531-3076
