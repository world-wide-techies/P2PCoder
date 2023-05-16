import { useState, useEffect } from "react";

const VerificationCounter = ({ onTimerComplete }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(120);

  useEffect(() => {
    let timer = null;

    if (secondsRemaining > 0) {
      timer = setTimeout(() => {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      onTimerComplete();
    }

    return () => clearTimeout(timer);
  }, [secondsRemaining, onTimerComplete]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      {secondsRemaining > 0 ? (
        <p>
          Request a new verification link in {formatTime(secondsRemaining)}{" "}
          seconds.
        </p>
      ) : (
        <p>
          Request a new verification link now.{" "}
          {/* This can be replaced with the desired button or link */}
        </p>
      )}
    </div>
  );
};

export default VerificationCounter;
