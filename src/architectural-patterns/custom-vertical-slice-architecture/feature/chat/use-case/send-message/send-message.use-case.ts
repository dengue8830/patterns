import { di } from "../../../../di/di";

export async function sendMessage({ myId, text, chatId }) {
  const getUser = di.get("getUser");
  const getChat = di.get("getChat");
  const sendMessageToChat = di.get("sendMessageToChat");
  const me = await getUser(myId);
  if (me.banned) {
    throw new Error("You are banned");
  }
  const chat = await getChat({ chatId });
  if (chat.busy) {
    throw new Error("Chat is busy");
  }
  await sendMessageToChat({ senderId: me.id, text, chatId });
}
