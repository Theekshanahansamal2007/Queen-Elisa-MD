/*
 
 𝕚 𝕒𝕞 𝗧𝗜𝗞𝗞𝗔 ᵇᵒᵗ ʕ•ᴥ•ʔ





𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳 ☘️ :☞︎︎︎ ℝ.𝔻.𝕋𝕙𝕖𝕖𝕜𝕤𝕙𝕒𝕟𝕒 ℍ𝕒𝕟𝕤𝕒𝕞𝕒𝕝 𝕊𝕣𝕚 𝕁𝕒𝕪𝕒𝕝𝕒𝕥𝕙



*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['+94741844543'] // Owner number , (අයිතිකරුගේ නම්බර් එක )
global.pemilik = ['+94741844543'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['+94741844543'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'TᕼᗴᗴKՏᕼᗩᑎᗩ ᕼᗩᑎՏᗩᗰᗩᒪ' // Your name ඔබේ නම 
global.botnma = 'ʕ•ᴥ•ʔ TIKKᗩ ᴡʜᴀᴛsᴀᴘᴘ 𝐁𝐨𝐭 💃' // Your bot name , ඔබගෙ බොට්ගේ නම 
global.ownernma = '𝓣𝓱𝓮𝓮𝓴𝓼𝓱𝓪𝓷𝓪 𝓗𝓪𝓷𝓼𝓪𝓶𝓪𝓵' //ownernama,ownername
global.packname = '𝑇𝑖𝑘𝑘𝑎 𝑆𝑡𝑖𝑐𝑘𝑒𝑟 𝑃𝑎𝑐𝑘' // Sticker package name 
global.author = 'TᕼᗴᗴKՏᕼᗩᑎᗩ' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '◇─────────────────◇

☘️ 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 👉:ℝ.𝔻.𝕋𝕙𝕖𝕖𝕜𝕤𝕙𝕒𝕟𝕒 ℍ𝕒𝕟𝕤𝕒𝕞𝕒𝕝 𝕊𝕣𝕚 𝕁𝕒𝕪𝕒𝕝𝕒𝕥𝕙

☘️ 𝚝𝚎𝚕𝚎𝚐𝚛𝚊𝚖 👉: http://t.me/theekshanahansamal

◇─────────────────◇
𝕚 𝕒𝕞 𝗧𝗜𝗞𝗞𝗔 ᵇᵒᵗ ʕ•ᴥ•ʔ'
// Alive massage , ඔබේ බොගේ alive massage  එක මෙහි ඇති ` ` මෙම ලකුනු ඇතුලේ ඔබට අවශ්‍ය ඔනිම දෙයක් Type කරන්න.💃
global.alivelogo = `https://i.ibb.co/6DLCS27/IMG-20220703-234202-052.jpg`
global.alive =`Hello i am alive now

Download song type .yt 
Thanks fro using...`
// Welcome massage  ඔබට කැමති නම් මෙයට ඔබෙ welcome massage  එක යොදන්න 
global.welcome = `wellcome my whatsapp group`
🌀 Thanks Fro using sl zim bot
✾ Some bugs fixing
😼♥️
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`
// Caption 
global.cap = `© 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚 𝐌𝐃`
global.mess = {
    success: '✅ හරි!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'ටිකක්  ඉන්න 🫥 ',
 

    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
