const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/dxxoo/whatsapp-bot

Instagram: https://instagram.com/dimaass.cc

Best regards, DXXOO.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
〘 INFORMATION 〙

➥ OCTOPUS BOT WhatsApp
➥ CREATOR : @dimaass.cc
➥ wa.me/6281293249556

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

*Creator:*
➥ ${prefix}blackpink
➥ ${prefix}text3d
➥ ${prefix}logopornhub
➥ ${prefix}sticker
➥ ${prefix}stickergif
➥ ${prefix}stickergiphy
➥ ${prefix}meme
➥ ${prefix}quotemaker
➥ ${prefix}nulis

*Education:*
➥ ${prefix}wiki
➥ ${prefix}brainly
➥ ${prefix}kbbi 

*Islam:*
➥ ${prefix}infosurah
➥ ${prefix}surah
➥ ${prefix}tafsir
➥ ${prefix}ALaudio
➥ ${prefix}jsolat

*18+:*
➥ ${prefix}nekopoi

*Fun Menu (Group):*
➥ ${prefix}say
➥ ${prefix}kutuk
➥ ${prefix}santet
➥ ${prefix}dadu
➥ ${prefix}koin
➥ ${prefix}rate
➥ ${prefix}bisakah
➥ ${prefix}apakah
➥ ${prefix}kapankah
➥ ${prefix}simisimi
➥ ${prefix}antisticker
➥ ${prefix}antilink
➥ ${prefix}katakasar
	┷➥ ${prefix}klasmen

*Download:*
➥ ${prefix}ytmp3
➥ ${prefix}ytmp4
➥ ${prefix}facebook

*Primbon:*
➥ ${prefix}cekzodiak
➥ ${prefix}artinama
➥ ${prefix}cekjodoh

*Search Any:*
➥ ${prefix}google
➥ ${prefix}dewabatch
➥ ${prefix}images
➥ ${prefix}sreddit
➥ ${prefix}resep
➥ ${prefix}stalkig
➥ ${prefix}cuaca
➥ ${prefix}chord
➥ ${prefix}lirik
➥ ${prefix}ss
➥ ${prefix}play
➥ ${prefix}movie
➥ ${prefix}whatanime

*Random Teks:*
➥ ${prefix}namaninja
➥ ${prefix}motivasi
➥ ${prefix}howgay
➥ ${prefix}fakta
➥ ${prefix}pantun
➥ ${prefix}katabijak
➥ ${prefix}quote
➥ ${prefix}cerpen
➥ ${prefix}cersex
➥ ${prefix}puisi

*Random Images:*
➥ ${prefix}anime
➥ ${prefix}kpop
➥ ${prefix}memes
➥ ${prefix}doggo
➥ ${prefix}wpanime

*Lain-lain:*
➥ ${prefix}ping
➥ ${prefix}tts
➥ ${prefix}translate
➥ ${prefix}resi
➥ ${prefix}covidindo
➥ ${prefix}ceklokasi
➥ ${prefix}shortlink
➥ ${prefix}bapakfont
➥ ${prefix}hilihfont
➥ ${prefix}qrread
➥ ${prefix}qrcode
➥ ${prefix}spamcall
➥ ${prefix}spamcall2
➥ ${prefix}gcinfo


*Tentang Bot:*
➥ ${prefix}tnc
➥ ${prefix}donasi
➥ ${prefix}botstat
➥ ${prefix}ownerbot
➥ ${prefix}join

_-_-_-_-_-_-_-_-_-_-_-_-_-_

*Owner Bot:*
➥ ${prefix}ban - banned
➥ ${prefix}bc - promosi
➥ ${prefix}leaveall - keluar semua grup
➥ ${prefix}clearall - hapus semua chat

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

➥ ${prefix}add
➥ ${prefix}kick @tag
➥ ${prefix}promote @tag
➥ ${prefix}demote @tag
➥ ${prefix}mutegrup
➥ ${prefix}tagall
➥ ${prefix}setprofile
➥ ${prefix}del
➥ ${prefix}welcome
➥ ${prefix}grouplink
➥ ${prefix}revoke

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
➥ ${prefix}kickall
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

Trakteer : https://trakteer.id/dymass
Saweria  : https://saweria.co/dxxoo

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -DXXOO`
}
