const { proto, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins } = require('./storage/functions.js')
const fs = require('fs')

module.exports = async (semar, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const pushname = msg.pushName || 'Nama Tidak Terdeteksi'
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = semar.user.id.split(':')[0]
const sender = msg.key.fromMe ? (semar.user.id.split(':')[0]+'@s.whatsapp.net' || semar.user.id) : (msg.key.participant || msg.key.remoteJid)
const groupMetadata = isGroup ? await semar.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender)
const senderNumber = sender.split('@')[0]
const isSaya = botNumber.includes(senderNumber)
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await semar.sendMessage(from,{text: teks},{quoted:msg})}

const sendButMessage = (id, text1, footer1, but = [], options = {}) => {
const buttonMessage = {text: text1, footer: footer1, buttons: but, headerType: 1}
semar.sendMessage(id, buttonMessage, options)}

const sendButTemplate = (id, text1, footer1, but = [], options = {}) => {
const templateMessage = {text: text1,footer: footer1,templateButtons: but}
semar.sendMessage(id, templateMessage, options)}

const sendLstMessage = (id, text1, footer1, title1, buttonText1, sec  = [], options = {}) => {
const listMessage = {text: text1,footer: footer1,title: title1,buttonText: buttonText1, sections: sec}
semar.sendMessage(id, listMessage, options)}

const sendRacMessage = (id, text1 = {}) => {
const reactionMessage = {react: {text: text1,key: msg.key}}
semar.sendMessage(id, reactionMessage)}

switch (command) {
case 'p1':
sendButMessage(from, 'test', 'test', [{buttonId: `${prefix}p1`, buttonText: {displayText: 'Button 1'}, type: 1},{buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},{buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}], {quoted:msg})
break

case 'tutor':
sendButTemplate(from, 'Follow Ig Gw Bang', ':v', [{index: 1, urlButton: {displayText: 'Link ig', url: 'https://instagram.com/dcodedenpa'}},{index: 2, callButton: {displayText: 'Nomor Gw', phoneNumber: '6285866295942'}},{index: 3, quickReplyButton: {displayText: 'Ok', id: `0`}}])
break

case 'p3':
sendLstMessage(from, 'test', 'test', 'test', 'test', [{title: "Section 1",rows: [{title: "Option 1", rowId: "option1"},{title: "Option 2", rowId: "option2", description: "This is a description"}]},{title: "Section 2",rows: [{title: "Option 3", rowId: "option3"},{title: "Option 4", rowId: "option4", description: "This is a description V2"}]}])
break

case 'react':
sendRacMessage(from, `${dn}`)
break

default:
}} catch (e) {
console.log(e)}}