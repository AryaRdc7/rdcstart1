exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `ð° -----[ *MENU ${BotName}* ]----- ð°
  
Hi, *${id.split("@s.whatsapp.net")[0]}* ðï¸
Berikut adalah info pada bot ini!â¨

â ï¸ *${tampilTanggal}*
â ï¸ *${tampilWaktu}*

â» INFO BOT! :
   
â *GITHUB*: https://github.com/aryardc7
â *AUTHOR*: Arya Rdc
â *DESIGNER*: BINTANG NUR PRADANA
â *YOUTUBE*: BINTANG NUR PRADANA
â *SCRIPT ORIGINAL BY*: ABDUL MUTTAQIN / FDCIABDUL

â» INFO LAIN! :

OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS
UPDATE BOT TERBARU DI YOUTUBE BINTANG NUR PRADANA

â»ï¸ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
â»ï¸ MAU DONASI? SILAHKAN KETIK #donate

ðº *Iklan* :

â Follow akun instagram admin ${instagramlu}

â ï¸ INFORMASI COVID-19 TERBARU!

â ï¸ POSITIF: *${corohelp.confirmed.value}*
â ï¸ SEMBUH: *${corohelp.recovered.value}*
â ï¸ MENINGGAL: *${corohelp.deaths.value}*
â ï¸ UPDATE: *${corohelp.lastUpdate}*

â»ï¸ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

â»ï¸ Mau pasang iklan di *${BotName} ?*
âï¸ WA : *${whatsapplu}*
  
â ï¸ Gunakan dengan bijak â¼ï¸
â ï¸ Bot ini berjalan ${kapanbotaktif} â¼ï¸

â³ï¸ Official Grub [1] : ${grupch1}

â³ï¸ Official Grub [2] : ${grupch2}

  
ð° -----[ *POWERED BY ${BotName}* ]----- ð°`
}
