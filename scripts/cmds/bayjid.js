module.exports = {
 config: {
	 name: "sourav",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "sourav") {
 return message.reply({
 body: " 「❥︎----ღ᭄_ᴬˢˢᴬᴸᴬᴹᴼᴸᴬᴵᴷᵁᴹ ..\n❥︎----ღ᭄_  ᴮᴿᴼᵀᴴᴱᴿ❞࿐.🌴.\n❥ Sourav \n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n Sourav」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Gn3R9SW.mp4")
 });
 }
 }
}
