// 😴 Just a DI container, dont pay too much attention on this file

import { getUser } from "../feature/chat/use-case/send-message/repository/get-user.repository";
import { getChat } from "../feature/chat/use-case/send-message/repository/get-chat.repository";
import { sendMessageToChat } from "../feature/chat/use-case/send-message/repository/send-message-to-chat.repository";
import { archiveChannel } from "../feature/channel/use-case/archive/repository/archive-channel.repository";
import { getChannel } from "../feature/channel/use-case/archive/repository/get-channel.repository";
import { sendMessage } from "../feature/chat/use-case/send-message/send-message.use-case";

const container = {};

type Keys =
  | "getUser"
  | "getChat"
  | "sendMessageToChat"
  | "archiveChannel"
  | "getChannel"
  | "sendMessage";

export const di = {
  get: (key: Keys) => container[key],
  set: (key: Keys, value: any) => (container[key] = value),
};

export function setupDI() {
  di.set("getUser", getUser);
  di.set("getChat", getChat);
  di.set("sendMessageToChat", sendMessageToChat);
  di.set("sendMessage", sendMessage);
  di.set("archiveChannel", archiveChannel);
  di.set("getChannel", getChannel);
}
