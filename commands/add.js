const db = require('../db');

module.exports = {
    name: 'add',
    description: 'Add recipe to list',
    execute(msg, args) {
        const link = args[0];
        const user = msg.author.username;
        db.query("INSERT INTO recipes (link, submitted_by) VALUES ($1, $2)", [link, user])
        .then(() => msg.reply("thank you! We've added the recipe to list!"))
        .catch(error => msg.channel.send('Sorry! We had trouble completing your request!'))
    }
}