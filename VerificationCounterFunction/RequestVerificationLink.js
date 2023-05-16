const startCounter = () => {
  let counter = 120;
  const intervalID = setInterval(() => {
    counter--;
    if (counter == 0) {
      clearInterval(intervalID);
      return true;
    }
  }, 1000);
  return false;
};
startCounter();
