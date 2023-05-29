function trackSession() {
  let sessionCount = sessionStorage.getItem("sessionCount");

  if (sessionCount) {
    sessionCount = parseInt(sessionCount) + 1;
  } else {
    sessionCount = 1;
  }

  sessionStorage.setItem("sessionCount", sessionCount.toString());
  return sessionCount;
}

export { trackSession };
