export async function getChat({ chatId }) {
  return {
    id: chatId,
    isBusy: false,
  };
}
