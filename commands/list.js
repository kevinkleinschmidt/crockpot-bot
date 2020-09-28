const { DiscordAPIError } = require('discord.js');
const db = require('../db');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'list',
    description: 'Get list of recipes',
    execute(msg, args) {
        var body = "";
        var number = 1;
        const embed = new MessageEmbed()
        .setTitle('Crockpot Bot Recipe List:')
        .setFooter('Welcome to Flavor Town!')
        db.query("SELECT * FROM recipes")
        .then(result => {
            const arr = result.rows;
            arr.forEach(item => {
                var date = moment(item.date_added).format('L');
                var string = `**${number}).** (${item.link}) submitted by ${item.submitted_by} on ${date}\n`;
                body += string;
                number ++;
            })
            embed.setDescription(body)
            msg.reply(embed);
        })
        .catch(error => {
            console.log(error)
            msg.channel.send('Sorry! We had trouble completing your request!')
        })
    }
}