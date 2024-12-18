const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_29_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc3LFxuICAgICAgICA2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NixcbiAgICAgICAgODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNixcbiAgICAgICAgODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwLFxuICAgICAgICA0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYsXG4gICAgI"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "'",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "𝕴𝖛𝖆𝖓×͜×👑",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
