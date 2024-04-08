export async function getUser({ userId }) {
  return {
    id: userId,
    banned: false,
  };
}
