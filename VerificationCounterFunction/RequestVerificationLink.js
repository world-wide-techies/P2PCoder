function startCounter() {
  let counter = 120;
  const timer = setInterval(() => {
    if (counter == 0) {
      clearInterval(timer);
      return true;
    } else {
      counter--;
      return false;
    }
  }, 1000);
}
export { startCounter };
