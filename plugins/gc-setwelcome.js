const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('𝗙𝗲𝗹𝗶𝗰𝗶𝗱𝗮𝗱𝗲𝘀 𝗔𝗰𝘁𝗶𝘃𝗮𝘀𝘁𝗲 𝗟𝗮 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗮 𝗣𝗮𝗿𝗮 𝗘𝘀𝘁𝗲 𝗚𝗿𝘂𝗽𝗼 👻️');
  } else throw `𝗜𝗻𝗴𝗿𝗲𝘀𝗲 𝗘𝗹 𝗠𝗲𝗻𝘀𝗮𝗷𝗲 𝗣𝗮𝗿 𝗖𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗮𝗿 𝗟𝗮 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗮 𝗣𝗲𝗿𝘇𝗼𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗮 𝗗𝗲 𝗘𝘀𝘁𝗮 𝗠𝗮𝗻𝗲𝗿𝗮 :\n\n.𝘀𝗲𝘁𝘄𝗲𝗹𝗰𝗼𝗺𝗲 𝗦𝗽𝗶𝗱𝗲𝗿 𝗚𝗿𝘂𝗽𝗼 𝗩𝗲𝗻𝘁𝗮𝘀\n\n\n\n𝗦𝗶 𝗗𝗲𝘀𝗲𝗮  𝗠𝗲𝗻𝗰𝗶𝗼𝗻𝗮𝗿 𝗔 𝗟𝗮 𝗣𝗲𝗿𝘀𝗼𝗻𝗮 𝗤𝘂𝗲 𝗦𝗲 𝗨𝗻𝗶𝗼 𝗥𝗲𝗰𝗶𝗲𝗻 𝗛𝗮𝗴𝗮𝗹𝗼 𝗗𝗲 𝗘𝘀𝘁𝗮 𝗠𝗮𝗻𝗲𝗿𝗮 :\n\n.𝘀𝗲𝘁𝘄𝗲𝗹𝗰𝗼𝗺𝗲 𝗛𝗼𝗹𝗮 @user 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 𝗔𝗹 𝗦𝗽𝗶𝗱𝗲𝗿 𝗚𝗿𝘂𝗽𝗼 𝗩𝗲𝗻𝘁𝗮𝘀`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
export default handler;
