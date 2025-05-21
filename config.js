/* ʜᴏᴡ ᴛᴏ ʙᴇᴄᴏᴍᴇ ᴀ ɢᴀʏ 

ᴍᴏᴅɪғʏ ᴛʜɪs sᴄʀɪᴘᴛ ᴛᴏ ʙᴇᴄᴏᴍᴇ
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || DRAGON~MD~SAhjSZ5Y#yfpnd6MWMTPm2aX4TYHfl6CFmbTZ9V9-7Nt2vRIOyXw",
// add your Crazy Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DRAGON-MD V1 🎉*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/wbpqf9.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DRAGON-MD-V1",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "DRAGON-MD_V1💫",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "24105730123",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ᴅʀᴀɢᴏɴ ᴅᴇᴠ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴡᴇᴇᴅ ᴛᴇᴄʜ ɪɴᴄ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/wbpqf9.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> 🔰 ʜɪ ᴅᴀʀʟɪɴɢ ᴅʀᴀɢᴏɴ ᴍᴅ ᴠ1 ɪᴛ\'ᴛ ᴀʟɪᴠᴇ ᴀɴᴅ ʀᴇᴀᴅʏ ᴊᴜsᴛ ᴛʏᴘᴇ ᴍᴇɴᴜ🦋\n\n*ᴅᴇsᴄ:* ᴅʀᴀɢᴏɴ ᴍᴅ ᴠ1 ᴄʜᴜᴅᴅʏ ʙᴜᴅᴅʏ🌻 ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ғᴏʀ ᴀᴜᴛᴏᴍᴀsᴛ ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴀᴄᴄᴏᴜɴᴛ ᴍᴏʀᴇ ᴀɴᴅ ғᴜɴ ᴄᴍᴅs ᴀᴅᴅᴇᴅ✅\n\n> ᴄʀᴇᴀᴛᴇᴅ ᴡɪᴛʜ 💞 ʙʏ ᴡᴇᴇᴅ ᴅᴇᴠ",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "24165730123",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
/* ʙʏ ᴡᴇᴇᴅ ᴅᴇᴠ 

ᴛʜᴀɴᴄᴋs ᴛᴏ 

- ɢᴏᴅ ᴅᴏᴍᴀ ғᴏʀ ʜᴇʟᴘ

- ᴊᴀᴡᴀᴅ ғᴏʀ ᴛᴇsᴛ

- ᴋᴀᴍᴀᴅᴏ ғᴏʀ ᴘʟᴜɢɪɴs ᴅᴇsɪɢɴ
*/
