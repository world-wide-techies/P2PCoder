function trackSession() {
  let sessionId = localStorage.getItem("sessionId");

  if (sessionId) {
    return sessionId;
  } else {
    sessionId = generateSessionId();
    localStorage.setItem("sessionId", sessionId);
    return sessionId;
  }
}

function generateSessionId() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let sessionId = "";

  for (let i = 0; i < 10; i++) {
    sessionId += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return sessionId;
}

export { trackSession };
