exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `ð° -----[ *MENU DONASI ${BotName}* ]----- ð°
  
Hi, *${id.split("@s.whatsapp.net")[0]}* ðï¸
Mau donasi? â¨

â ï¸ *${tampilTanggal}*
â ï¸ *${tampilWaktu}*

â» Silahkan donasi dibawah ini :
   
Nanti Aja

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
