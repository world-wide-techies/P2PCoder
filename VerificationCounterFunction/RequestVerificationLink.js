const requestVerificationLink = () => {
  // Disable the button to prevent multiple requests
  document.getElementById("requestLinkButton").disabled = true;

  // Set the initial count
  let count = 120;

  // Update the button text and countdown every second
  const countdown = setInterval(() => {
    count--;
    document.getElementById(
      "requestLinkButton"
    ).innerText = `Request Link (${count}s)`;

    // If the countdown reaches 0, re-enable the button
    if (count === 0) {
      clearInterval(countdown);
      document.getElementById("requestLinkButton").disabled = false;
      document.getElementById("requestLinkButton").innerText = "Request Link";
    }
  }, 1000);
};
