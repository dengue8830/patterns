import { di } from "../../../../di/di";

export async function handleArchiveChannel({ channelId }) {
  // Validates the input
  if (!channelId) {
    throw new Error("Channel ID is required");
  }
  const archiveChannel = di.get("archiveChannel");
  await archiveChannel();
  // Formats the output
  return { success: true };
}
