import DiscordJS, { Intents } from "discord.js"
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready',()=>{
    console.log('ON')
})

client.on('messageCreate',(message)=>{
    if (message.content === 'ping'){
        message.reply({content:'why'})
    }
})

client.login(process.env.TOKEN)