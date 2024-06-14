const { Manager } = require('discord-music-player');

module.exports = async (client, interaction) => {
  if (!interaction?.isCommand()) return;

  const { member, channelId, guildId, applicationId, commandName, deferred, replied, ephemeral, options, id, createdTimestamp } = interaction;
  const { guild } = member;

  if (!guild) {
    return interaction?.reply({ content: ":x: Interactions only Works inside of GUILDS!", ephemeral: true }).catch(() => {});
  }

  const CategoryName = interaction?.commandName;
  simple_databasing(client, guild.id, member.id);

  const guild_settings = client.settings.get(guild.id);
  const es = guild_settings.embed;
  const ls = guild_settings.language;
  const { prefix, botchannel, unkowncmdmessage } = guild_settings;

  let command = false;
  try {
    if (client.slashCommands.has(CategoryName + interaction?.options.getSubcommand())) {
      command = client.slashCommands.get(CategoryName + interaction?.options.getSubcommand());
    }
  } catch {
    if (client.slashCommands.has("normal" + CategoryName)) {
      command = client.slashCommands.get("normal" + CategoryName);
    }
  }

  if (command) {
    //...

    client.manager = new Manager(client);

    const player = client.manager.players.get(guild.id);

    //...
  }
};