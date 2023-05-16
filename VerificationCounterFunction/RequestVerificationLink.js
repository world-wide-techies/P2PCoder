function startCounter() {
  let counter = 120;
  const timer = setInterval(() => {
    if (counter == 0) {
      clearInterval(timer);
      callback(true);
    } else {
      counter--;
      callback(false);
    }
  }, 1000);
}
export { startCounter };
