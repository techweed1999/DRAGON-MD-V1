const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const config = require('../config');
const { cmd } = require('../command');
// by crazy dev privacy ethicaly right
cmd({
  pattern: "repo",
  alias: ["sc", "script", "info"],
  desc: "Afficher les infos du repo GitHub",
  react: "❤️",
  category: "info",
  filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
  const githubRepoURL = 'https://github.com/WeedTechInc/DRAGON-MD V1;

  try {
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
    
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    const repoData = await response.json();

    const caption = `╭「 DRAGON V1 - SCRIPT🎉 」
│🏷️ *Name* : ${repoData.name}
│👤 *Autor* : ${repoData.owner.login}
│⭐ *Stars* : ${repoData.stargazers_count}
│⑂ *Forks* : ${repoData.forks_count}
│🔗 *Link* : ${repoData.html_url}
│📝 *Description* : ${repoData.description || 'Aucune description'}
╰───────────────
> ${config.DESCRIPTION}`;

    await conn.sendMessage(from, {
      image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/4j1qgh.jpeg' },
      caption
    }, { quoted: mek });

    const audioPath = path.join(__dirname, '../crazy/menu.mp3');
    if (fs.existsSync(audioPath)) {
      await conn.sendMessage(from, {
        audio: fs.readFileSync(audioPath),
        mimetype: 'audio/mp4',
        ptt: true
      }, { quoted: mek });
    } else {
      reply("❌ L'audio 'menunew.m4a' est introuvable dans le dossier /crazy.");
    }

  } catch (error) {
    console.error("Erreur repo:", error);
    reply(`❌ Une erreur est survenue : ${error.message}`);
  }
});