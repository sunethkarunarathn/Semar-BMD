const { getContentType } = require('@adiwajshing/baileys')
	
module.exports = async (semar, denz, msg) => {
try {
console.log(msg)
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
msg.message = (getContentType(msg.message) === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
const pushname = msg.pushName || 'Nama Tidak Terdeteksi'
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : ''
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isGroup = from.endsWith('@g.us')
const sender = msg.key.fromMe ? (semar.user.id.split(':')[0]+'@s.whatsapp.net' || semar.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const botNumber = semar.user.id.split(':')[0]
const isSaya = botNumber.includes(senderNumber)
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await semar.sendMessage(from,{text: teks},{quoted:msg})}

switch (command) {
case 'p':
              const buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]

const buttonMessage = {
    text: "Hi it's button aeea",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}
semar.sendMessage(from, buttonMessage)
break

case 'temp':{
   const templateMessage = {
    text: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: 'My Github', 
       url: 'https://github.com/dcode-denpa'
      } },
     {
     index: 2, 
     callButton: {
      displayText: 'Owner', 
       phoneNumber: '6285866295842'
      } },
     {
     index: 3, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#tes'
       } },
    { 
     index: 4, 
      quickReplyButton: {
       displayText: 'Click2', 
       id: '#tes'
       } },
     {
     index: 5, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#tes'
       } },
     ],
    }
   const sendm =  semar.sendMessage(
    from, 
    templateMessage
    )
   }
  break
  
default:
}} catch (e) {
var error = String(e)
console.log(error)}}