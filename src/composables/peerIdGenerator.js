export function generatePeerIdCharacter() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let peerId = "";

  for (let i = 0; i < 10; i++)
    peerId += characters.charAt(Math.floor(Math.random() * characters.length));

  return peerId;
}
