const emotes = require ("../config/emojis.json");

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send(`**You're not in a voice channel ${emotes.error}**`);

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`**No music playing on this server ${emotes.error}**`);

    client.player.shuffle(message.guild.id);
    return message.channel.send(`**Queue shuffled ${emotes.success}**`);
    
};

module.exports.config = {
    name: "shuffle",
    aliases: []
};
