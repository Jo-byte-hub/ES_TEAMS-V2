//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "okoyejoshi@gmail.com";
global.location = "Edo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH";
global.website = process.env.GURL || "https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349115983460";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH";
global.scan = "https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1BvcExaQmM4RTF1SkJOOTllS1lkS2Zjcjg3OWVlbVAvM1VQTUcvMUxWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHdVS3dGTmFDd2NTQ0RXL25ScFdIdkZ5ODlmR0RFNzh4TStjb0NJdmpRND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUGxvQktyOTlScVJLc3ZHb0V5ZXFsbGZ1ZHkybFNOOC8xWjBDODhwcmxzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1eTRLK0NRQXFNdVBSTDdHN0tFRlFHbVhqb2tGaTMweEZaeEV6aysrbHk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPVWZKTHk5YU1jdk9BZmFIUWkyT1VHSVI3eVdUYmVGcjVJWkxxZlk1Mm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlHWGYyK0ZPQUluYVBZdWU3VEcwMGtZRzV0Y0g1aDVTZEgvQUdMSGNXbnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0drNGRBakJTSkVvWXVkRUQ3OUhIQVMwbjZxSmhKUGVpcC9PRWhoanVrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkRrN1JZZGsySTI1bEtrblNRSHhPejhPdGpQOVViZkF3NExVNnY1NjVsQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxpV1hnUXBaU0hMMWQ4QkFpbXlVSkg5L0JSdlMzeUY3dEd5VmprZGJWWElCOE9UVkcyd1FaQTZBVS9vUFZFeG5WUTZMQkVuTHZzejBFc3hZK2dVOWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiIyTmkvUWRQY1F6cWVyL1F3cnZOZzN1bVRZamVNWWkxMnF0cEtxVzZYdGZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJROWVZbVFTV1JyT2xUd1hHdTRrZl9nIiwicGhvbmVJZCI6ImNjYzkzODE5LWNhZDItNDU0Mi1hYTJjLWYwMjkyNGVlOWEwNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMVVVnRVZ1MDIzRHpLUXBsTWM3M0IwMmUvUms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU9NNDNoYk5ZaVNTU3pnZDg3UllnMklRcEpzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRIRVRGNkxFIiwibWUiOnsiaWQiOiIyMzQ5MTE1OTgzNDYwOjU2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9rb3llIEpvc2h1YSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnlnemNRR0VPcUlrYmdHR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZDU3V1E5bmdSaTN2dFF6eGphbm5mbjFOempuRlFReFdjcGtNUXRZUGR3dz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTHB1YUxFeVJjcG5KQ1ZJdlVTYzc0ZWhhYmNFWnJhaU5hRk5Hakc2SGJVdkZaSFdVUmtPZVZqUXlEK3d6WEpzWWpmRnNENlF1QXZxT1hURitSQ3ZLREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImVDZlZaWXFqcW9HMElud1pVQVZtM3pOOWhDUndoMXh2SmNtNmVBYlNFR1J6dGE2WGxoZG12YU8xcGxHVk9uL0xjNFIzZktZVjFaSG84WDV5WHpvWmlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTExNTk4MzQ2MDo1NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYZWUxa1BaNEVZdDc3VU04WTJwNTM1OVRjNDV4VUVNVm5LWkRFTFdEM2NNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MzMyOTIwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1ZRSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "© POWERED BY JOSHUA 👑",
  author: process.env.PACK_AUTHER || "Joshua",
  packname: process.env.PACK_NAME || "Joshua",
  botname: process.env.BOT_NAME || "Josh Tech👑",
  ownername: process.env.OWNER_NAME || "Joshua👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JOSH😊").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
