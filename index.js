require('dotenv/config');

const Discord = require('discord.js');
const prefix = 'h!'

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('estou operante')
})

bot.on('message', msg => {
    if (msg.content === 'oi') {
        msg.reply('Olá!')
    }
})

bot.on('message', msg => {
    if (!(msg.content.startsWith('h!embed')))
        return;
    const args = msg.content.slice(prefix.length).trim().split(/;+/);
    if (args.length != 5)
        return msg.channel.send('Uso: `h!embed;cor;título;descrição;imagem`')
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor(args[1])
    .setTitle(args[2])
    .setDescription(args[3])
    .setImage(args[4])
    msg.reply(exampleEmbed)
})


bot.login(process.env.TOKEN);
