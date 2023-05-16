function startCounter() {
  let counter = 120;
  const timer = setInterval(() => {
    if (counter == 0) {
      clearInterval(timer);
      return true;
    } else {
      counter--;
    }
  }, 1000);
  return false;
}
export { startCounter };
