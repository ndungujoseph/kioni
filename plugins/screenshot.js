/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");

const Language = require('../language');
const Lang = Language.getString('webss');

Asena.addCommand({pattern: 'ss ?(.*)', fromMe: true, desc: Lang.SS_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.LİNK);

    var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${match[1]}&output=image&full_page=true`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by Kioni Ndungu. Powered by I.T H.A.C.K.S.'})

}));

const sh = "Yapay zeka ile daha önce olmayan insan yüzleri üretir."
Asena.addCommand({pattern: 'faceai', fromMe: true, desc: sh}, (async (message, match) => {

    var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by Kioni Ndungu. Powered by I.T H.A.C.K.S.'})

}));

const dh = "Yapay zeka ile daha önce olmayan anime yüzleri üretir."
Asena.addCommand({pattern: 'animai', fromMe: true, desc: dh}, (async (message, match) => {

    var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/&output=image&width=1000&height=1000&retina=true&full_page=false', { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by Kioni Ndungu. Powered by I.T H.A.C.K.S.'})

}));


