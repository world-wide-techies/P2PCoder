function initializeTimer(userJoinTime) {
  const timer = setInterval(() => {
    const currentTime = new Date();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    const [joinMinutes, joinSeconds] = userJoinTime.split(":").map(Number);

    const timeDifference =
      currentMinutes * 60 + currentSeconds - (joinMinutes * 60 + joinSeconds);

    if (timeDifference >= 59 * 60 + 59) {
      clearInterval(timer);
      endSession();
    }
  }, 1000);
}
