/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUk1TU1HdGJnUHAyamhTUlF1d1hReE44S2F5amJKNmlmWlBnWHFmUWYxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFgyRStMcFpmL1dJNnVuMTJldmtRdk9LcXA4dHpPRGMzVHpnYnpXRzhHTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQnB5Y1JpMkVWTDlIMEFIZkRaQ3VzYWk3TGxndUk2S1Vuc0tUNWxJUkdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDd2xwNnFKV2s1WTAydFpSNXpVV3R5NkFLNVlJRlA3a3NNYkRxaEkxUmhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBGeWRJUDZJVnIxSHV0YTRQYTRpSDhRRUN1VmhPOVhwVE5EWEgrTEhHV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkU3Y2tYeTJxZzk5SCtrTmR0SnJ0RzZhZS9qSFBYS1dBLzhwTnNyOHNkejQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09sTWlPSHlSQXVCTzB5dVI1MVBVK3krK2Jjc2UvRUJOWS9JTlNDUUNWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVMvU1VLUGdnWWVMYTd6RTBFdXhDWUNGZW5xS0dlMnFYci9HWStwK1F4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhJWmFONC9wU2hqV3ozODNiUmpNTklQYW1OeE1Zc2lySm1LZ1dSK3V5WnNSQ1pNTVY4MFVJcjRNTmJoRHg3ZDRacXExblhBWjhmNVFITG5ZSmJCTmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6Ing2NDk2SVc1RUdtYmM1WVdGTCtaaStuem9nUkk1M0IxU0t4TkFlQjJBeVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDkxNTU2MjM3ODM0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MTFDRjlCM0E2OEU4MUZCNEU2MjYzNEQxNTY5ODgwMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5NTU0Nzc0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI0OTE1NTYyMzc4MzQzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFGRjA2MTlCMDNCMUM4MjI5OTY0QkZBMkFBMDY4NTFDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mzk1NTQ3NzR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQ5MTU1NjIzNzgzNDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzFDODQ3MEY2Qzk0OEVFQzAzNUZDMTMxNzcyMDM4NTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczOTU1NDc3OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDkxNTU2MjM3ODM0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMjIzOUQyRTFFMDczMjNBRDA5QkRBMDQzNTlBMzEzRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5NTU0Nzc4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1MlJkMng0bFQzMlcwc1NBeXRnenhBIiwicGhvbmVJZCI6ImMzNDRiNTg4LTA0NzYtNDBiZi04M2FhLTAxZDA3ZWU5OTE5MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTEFzMElLV2NiY1BaSFUxbzQ4cEtqejhZWjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjhDSHZWallrRXJlZExuS1QxM1NpMy9QU1djPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFFTVFFTEVQIiwibWUiOnsiaWQiOiI0OTE1NTYyMzc4MzQzOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGFkZHkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01MT3lNa0VFTWYvdmIwR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImxyLzhodWE4aU12MGFrVUlRcXNLd285WHd6RGM1N1d2UngvWFVyUVNwUXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InQ2MjV2Vm1DQjYya2pmVVc2ZitqNjN1RHVMKyt0aTlkTmh0YU1mZExTMlRSd3d6UDN4Y3cxcmQvOGFiUnNscGhGV2ExR3Fmdms2MCtPQ2YxSk9uWUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKU0YzZGROZ3d3OVRBdlBaSTd4aGNKV3UxbDV2bUFhWCtmYW1HNlEwQlcwbjNsazI2N3lxUWJTdFZxQzk4MjhmNWdKclhNeUszcDQ3MDUyWWtzcVZndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ5MTU1NjIzNzgzNDM6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaYS8vSWJtdklqTDlHcEZDRUtyQ3NLUFY4TXczT2UxcjBjZjExSzBFcVVNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM5NTU0Nzc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9LeiJ9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '254114018035';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
