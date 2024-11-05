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
global.github = process.env.GITHUB || "https://chat.whatsapp.com/DwKlSK4yv2DKU4Bg9RJFKU";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/DwKlSK4yv2DKU4Bg9RJFKU";
global.website = process.env.GURL || "https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348104400066";
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

global.api_smd = "https://chat.whatsapp.com/DwKlSK4yv2DKU4Bg9RJFKU";
global.scan = "https://chat.whatsapp.com/DwKlSK4yv2DKU4Bg9RJFKU";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZUbERkT3Yrc0ErekFTUDErRVQvU0NrdkYvYmpUZHVIKzJSWUtod2ZuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWN6YXZTZGJoSFp0dHZVSFlHTmx3KzUrV1BrbkFqbjBqYVJIWHZJK3Z6TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUC9hbU1WZzBhTnFQbGFzMUJIKzFXck9rNEF3aVBHK3NXUmcxMmZkMVZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHbnQzVUltWkpkdU5rUVZ2THRrOWc3WlpXWHVHOTNFTmZDeWtyb0g1R0RzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFdHl6WFQzUFY3ZEZNODk3Q045YUJoSXdrSTVwWWVDbFNPS2lZMGVFRms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJCb1JmN0ppZ3k4T05QSFZpNFJjRTR0T1VORER0K0FvTDYyeUxZdTRqQms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0EwcVU0aEgvdUVoSlMzQkdwUXQ3T0psOS9FaGJadk9FQ1kyUHI0YjIzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmZldU9lMXJqYm1rQnBTeGYwK1I5OGZybzR6UVZTd0JjUDFzVm1wajFpQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdJOEp1VmgvaGFkYkFvUW5yZ3JuVkVJcEpBWlI0aEt2M29NMjJpQUp2TUIzdEJ6T0NOdjZhc2RxYkNmMU5BdTRvVHFVMzNHNEdaZGUvZ1hiVXNVYWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6IjJiMEcwV2pTcEFhd2lDTGJKaGZZbjhqZ1BwTG43MTJ2bWp2T20ycjdNUmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImkxRktqYUljU2EyOUljNGZ5cjlkMUEiLCJwaG9uZUlkIjoiNWU2ZTNjMjUtOTUwMi00NTVlLWJmZjMtZTU5MzIxYWE3MjQzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlMekRzZnVBUldKdW1jUnlhZHd2TlFiRVp3OD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHMXlia1F6NU41UVkwK0hXUFd5aWVOTEdNY3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMU5YUTVGMzQiLCJtZSI6eyJpZCI6IjIzNDgxMDQ0MDAwNjY6NzBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09DdDhvWUJFUHp2cDdrR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFGL1NZZG96UG9GSTI5SzlhcWhLR2g0RVZUVGd1bmc2b0tpOHlPbFFvRmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJpaHRRdXI3OXJTb0VUai9zMlEyMllMR1oxekF4dllTV3JLY2lJQ3kzOUpGY0tVdlpwMGdCakZnZUxmOFB5ZDB4UDZKWk9HWTFtSGpXSTdrNG9HQ0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3ZFQyK1VLUmdWd3h6ejdyZVE2Ni95RGw3K0VuTzc5VEVwTXpCVnZ2bmp1SnRBRTB5RTd3OGhwM3U3WmtBNGFUZ1d6Q200R2c4YXdrQ2tWaU9qZFdnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDQ0MDAwNjY6NzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2hmMG1IYU16NkJTTnZTdldxb1Nob2VCRlUwNExwNE9xQ292TWpwVUtCWCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDgwMzcyNH0="
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
