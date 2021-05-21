/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const speedTest = require('@lh2020/speedtest-net');

const Language = require('../language');
const Lang = Language.getString('web');

// https://github.com/ddsol/speedtest.net/blob/master/bin/index.js#L86
function speedText(speed) {
    let bits = speed * 8;
    const units = ['', 'K', 'M', 'G', 'T'];
    const places = [0, 1, 2, 3, 3];
    let unit = 0;
    while (bits >= 2000 && unit < 4) {
      unit++;
      bits /= 1000;
    }

    return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
}

const calc = "Basit matematik işlemleri için hesap makinesi."
Asena.addCommand({pattern: 'calc ?(.*)', fromMe: true, desc: calc}, (async (message, match) => {
    if (!message.reply_message) {
        if (match[1].length < 4) { return await message.client.sendMessage(message.jid,'*Lütfen Geçerli Olan Şekilde Kullanın!* \n*.calc 1 + 2*\n*.calc 3 x 5*\n*.calc 10 / 5*\n*.calc 5 - 2* \n*.calc 100 % 5*', MessageType.text) }
        else if (match[1].includes('+')) { var split = match[1].split('+'), sonsayi = split[1], ilksayi = split[0]
            var resp = -(-ilksayi - sonsayi)
            try { await message.client.sendMessage(message.jid,'*Hesaplama Yapıldı ✅*\n*Sonuç:* ' + resp, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,'*Hesaplama Yapılamadı ❌*\n*Hata:* \n' + err,MessageType.text);
            }
        }
        else if (match[1].includes('-')) { var split = match[1].split('-'), sonsayicik = split[1], ilksayicik = split[0] 
            var result = ilksayicik - sonsayicik
            try { await message.client.sendMessage(message.jid,'*Hesaplama Yapıldı ✅*\n*Sonuç:* ' + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,'*Hesaplama Yapılamadı ❌*\n*Hata:* \n' + err,MessageType.text);
            }
        }
        else if (match[1].includes('x')) { var split = match[1].split('x'), sonsayicarp = split[1], ilksayicarp = split[0] 
            var result = ilksayicarp * sonsayicarp
            try { await message.client.sendMessage(message.jid,'*Hesaplama Yapıldı ✅*\n*Sonuç:* ' + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,'*Hesaplama Yapılamadı ❌*\n*Hata:* \n' + err,MessageType.text);
            }
        }
        else if (match[1].includes('/')) { var split = match[1].split('/'), sonsayibol = split[1], ilksayibol = split[0] 
            var result = ilksayibol / sonsayibol
            try { await message.client.sendMessage(message.jid,'*Hesaplama Yapıldı ✅*\n*Sonuç:* ' + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,'*Hesaplama Yapılamadı ❌*\n*Hata:* \n' + err,MessageType.text)
            }
        }
        else if (match[1].includes('%')) { var split = match[1].split('%'), sonsayibol = split[1], ilksayibol = split[0] 
            var result = ilksayibol % sonsayibol
            try { await message.client.sendMessage(message.jid,'*Hesaplama Yapıldı ✅*\n*Sonuç:* ' + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,'*Hesaplama Yapılamadı ❌*\n*Hata:* \n' + err,MessageType.text)
            }
        }
        else if (!match[1].includes('%') || !match[1].includes('-') || !match[1].includes('+') || !match[1].includes('x') || !match[1].includes('/') ) {
            return await message.client.sendMessage(message.jid,'*Lütfen Geçerli Olan Şekilde Kullanın!* \n*.calc 1 + 2*\n*.calc 3 x 5*\n*.calc 10 / 5*\n*.calc 5 - 2* \n*.calc 100 % 5*', MessageType.text)
        }
    }
    else {
        if (message.reply_message.length < 4) { return await message.client.sendMessage(message.jid,'*Lütfen Geçerli Olan Şekilde Bir Mesaja Yanıt Verin!* \n*1 + 2*\n*3 x 5*\n*10 / 5*\n*5 - 2* \n*100 % 5*', MessageType.text) }
        if (message.reply_message.text.includes('+')) { var split = message.reply_message.text.split('+'), sonsayi = split[1], ilksayi = split[0]
            var result = ilksayi + sonsayi
            try { await message.client.sendMessage(message.jid,'*Hesaplama Yapıldı ✅*\n*Sonuç:* ' + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,'*Hesaplama Yapılamadı ❌*\n*Hata:* \n' + err,MessageType.text);
            }
        }
        else if (message.reply_message.text.includes('-')) { var split = message.reply_message.text.split('-'), sonsayicik = split[1], ilksayicik = split[0] 
            var result = ilksayicik - sonsayicik
            try { await message.client.sendMessage(message.jid,'*Hesaplama Yapıldı ✅*\n*Sonuç:* ' + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,'*Hesaplama Yapılamadı ❌*\n*Hata:* \n' + err,MessageType.text);
            }
        }
        else if (message.reply_message.text.includes('x')) { var split = message.reply_message.text.split('x'), sonsayicarp = split[1], ilksayicarp = split[0] 
            var result = ilksayicarp * sonsayicarp
            try { await message.client.sendMessage(message.jid,'*Hesaplama Yapıldı ✅*\n*Sonuç:* ' + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,'*Hesaplama Yapılamadı ❌*\n*Hata:* \n' + err,MessageType.text);
            }
        }
        else if (message.reply_message.text.includes('/')) { var split = message.reply_message.text.split('/'), sonsayibol = split[1], ilksayibol = split[0] 
            var result = ilksayibol / sonsayibol
            try { await message.client.sendMessage(message.jid,'*Hesaplama Yapıldı ✅*\n*Sonuç:* ' + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,'*Hesaplama Yapılamadı ❌*\n*Hata:* \n' + err,MessageType.text)
            }
        }
        else if (message.reply_message.text.includes('%')) { var split = message.reply_message.text.split('%'), sonsayibol = split[1], ilksayibol = split[0] 
            var result = ilksayibol % sonsayibol
            try { await message.client.sendMessage(message.jid,'*Hesaplama Yapıldı ✅*\n*Sonuç:* ' + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,'*Hesaplama Yapılamadı ❌*\n*Hata:* \n' + err,MessageType.text)
            }
        }
        else if (!message.reply_message.text.includes('%') || !message.reply_message.text.includes('-') || !message.reply_message.text.includes('+') || !message.reply_message.text.includes('x') || !message.reply_message.text.includes('/') ) {
            return await message.client.sendMessage(message.jid,'*Lütfen Geçerli Olan Şekilde Kullanın!* \n*.calc 1 + 2*\n*.calc 3 x 5*\n*.calc 10 / 5*\n*.calc 5 - 2* \n*.calc 100 % 5*', MessageType.text)
        }
    }
}));

Asena.addCommand({pattern: 'speedtest', fromMe: true, desc: Lang.SPEEDTEST_DESC}, (async (message, match) => {
    var msg = await message.reply(Lang.SPEEDTESTING);
    var st = await speedTest({acceptLicense: true, acceptGdpr: true});
    
    await message.client.sendMessage(
      message.jid,Lang.SPEEDTEST_RESULT + '\n\n' + 
    '*ISP:* ```' + st.isp + '```\n' +
    '*Ping:* ```' + st.ping.latency + 'ms```\n' +
    '*' + Lang.UPLOAD + ':* ```' + speedText(st.upload.bandwidth) + '```\n' +
    '*' + Lang.DOWNLOAD + ':* ```' + speedText(st.download.bandwidth) + '```\n',MessageType.text
    );
    await msg.delete();
}));

Asena.addCommand({pattern: 'ping', fromMe: true, deleteCommand: false, desc: Lang.PING_DESC}, (async (message, match) => {
  var start = new Date().getTime();
  await message.sendMessage('```Ping!```');
  var end = new Date().getTime();

  await message.client.sendMessage(
    message.jid,'*Pong!*\n```' + (end - start) + 'ms```', MessageType.text);
}));
