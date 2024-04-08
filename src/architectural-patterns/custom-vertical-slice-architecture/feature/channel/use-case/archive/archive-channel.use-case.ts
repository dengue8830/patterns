import { di } from "../../../../di/di";

export async function archiveChannel({ channelId }) {
  const getChannel = di.get("getChannel");
  const _archiveChannel = di.get("archiveChannel");
  const channel = await getChannel({ channelId });
  if (channel.archived) {
    throw new Error("Channel is already archived");
  }
  await getChannel({ channelId });
  await _archiveChannel({ channelId });
  return {};
}
