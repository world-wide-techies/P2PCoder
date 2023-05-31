import { generatePeerIdCharacter } from "./peerIdGenerator";

// Function to generate peerId and time
function generatePeerIdAndTime() {
  const peerId = generatePeerIdCharacter();

  const currentTime = new Date();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedTime = `${minutes}:${seconds}`;

  return { peerId, generatedTime: formattedTime };
}
// Store session data in the local storage
function storeSessionData(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Retrieve session data from the local storage
function getSessionData() {
  const users = JSON.parse(localStorage.getItem("users"));

  return users;
}
// Timer function to terminate session
function startTimer() {
  const currentTime = new Date();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  const [joinMinutes, joinSeconds] = joinTime.split(":").map(Number);

  // Calculate the time difference between the current time and the join time
  const timeDifference =
    currentMinutes * 60 + currentSeconds - (joinMinutes * 60 + joinSeconds);

  if (timeDifference >= 59 * 60 + 59) {
    localStorage.removeItem("users");
  } else {
    setTimeout(() => startTimer(joinTime), 1000);
  }
}
// Retrieve or initialize session data
let sessionData = getSessionData();
if (!sessionData || sessionData.length !== 2) {
  const user1 = generatePeerIdAndTime();
  const user2 = generatePeerIdAndTime();

  // Store the session data in the local storage
  sessionData = [user1, user2];
  storeSessionData(sessionData);
}

// Determine the user's index based on their peer ID
const userIndex = sessionData.findIndex(
  (user) => user.peerId === generatePeerIdCharacter()
);
if (userIndex !== -1) {
  const currentUser = sessionData[userIndex];

  // Start the timer using the join time of the current user
  startTimer(currentUser.generatedTime);
}

export { generatePeerIdAndTime, storeSessionData, getSessionData };
