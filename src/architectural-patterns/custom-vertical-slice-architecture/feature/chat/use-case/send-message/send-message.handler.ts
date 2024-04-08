import { sendMessage } from "./send-message.use-case";

export async function handleSendMessage({
  chatId,
  userId,
  text,
}: {
  chatId: number;
  userId: number;
  text: string;
}) {
  // Validates the input
  if (!text) {
    throw new Error("Text is required");
  }
  await sendMessage({ chatId, myId: userId, text });
  // Formats the output
  return { success: true };
}
