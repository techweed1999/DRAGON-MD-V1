const { cmd, commands } = require('../command');
const axios = require('axios');

cmd({
  'pattern': "couplepp",
  'alias': ["couple", "cpp"],
  'react': '💑',
  'desc': "Get a male and female couple profile picture.",
  'category': "image",
  'use': ".couplepp",
  'filename': __filename
}, async (conn, m, store, {
  from,
  args,
  reply
}) => {
  try {
    reply("*💑 ᴅʀᴀɢᴏɴ ᴍᴅ ғᴇᴇᴛᴄʜɪɴɢ ʏᴏᴜʀ ᴄᴏᴜᴘʟᴇᴘᴘ...*");
    
    const response = await axios.get("https://api.davidcyriltech.my.id/couplepp");

    if (!response.data || !response.data.success) {
      return reply("❌ Failed to fetch couple profile pictures. Please try again later.");
    }

    const malePp = response.data.male;
    const femalePp = response.data.female;

    if (malePp) {
      await conn.sendMessage(from, {
        'image': { 'url': malePp },
        'caption': "👨 ᴍᴀʟ ᴄᴏᴜᴘʟᴇ ᴘɪᴄs\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴡᴇᴇᴅ ᴛᴇᴄʜ"
      }, { 'quoted': m });
    }

    if (femalePp) {
      await conn.sendMessage(from, {
        'image': { 'url': femalePp },
        'caption': "👩 ғᴇᴍᴀʟᴇ ᴄᴏᴜᴘʟᴇ ᴘɪᴄs\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴡᴇᴇᴅ ᴛᴇᴄʜ"
      }, { 'quoted': m });
    }

  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while fetching the couple profile pictures.");
  }
});
