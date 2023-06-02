import { generatePeerIdCharacter } from "./peerIdGenerator";

// In event order =>
function storeSessionData(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getSessionData() {
  const users = JSON.parse(localStorage.getItem("users"));
  return users;
}

function startTimer(joinTime) {
  const currentTime = new Date();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  const [joinMinutes, joinSeconds] = joinTime.split(":").map(Number);

  const timeDifference =
    currentMinutes * 60 + currentSeconds - (joinMinutes * 60 + joinSeconds);

  if (timeDifference >= 59 * 60 + 59) {
    localStorage.removeItem("users");
    return;
  } else {
    setTimeout(() => startTimer(joinTime), 1000);
  }
}

const peerId = generatePeerIdCharacter();

let sessionData = getSessionData();
if (!sessionData) {
  sessionData = [];
  storeSessionData(sessionData);
}

let currentUser;
const userIndex = sessionData.findIndex((user) => user.peerId === peerId);

if (userIndex !== -1 && sessionData.length < 2) {
  currentUser = {
    peerId,
    joinTime: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  sessionData.push(currentUser);
  storeSessionData(sessionData);
} else if (userIndex !== -1) {
  currentUser = sessionData[userIndex];

  const storedJoinTime = getSessionData()[userIndex].joinTime;

  startTimer(storedJoinTime);
} else {
  throw new Error("Session is at maximum users");
}

window.onbeforeunload = () => {
  storeSessionData(sessionData);
};

export { storeSessionData, getSessionData };
