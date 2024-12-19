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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/r3qkl0.mp4" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_55_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0LFxuICAgICAgICA0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE1LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDk4LFxuICAgICAgICA4NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTczLFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NixcbiAgICAgICAgMTcxLFxuICAgICAgICA4NyxcbiAgICAgICAgMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MSxcb"  // PUT your SESSION_ID 


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
