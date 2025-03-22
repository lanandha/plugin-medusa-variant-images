import { useState, useEffect } from "react";
const useTimer = ({ every = 1e3, length = 3e5, onComplete = () => null, recursive = false }) => {
  const [timeLeft, setTimeLeft] = useState(length);
  const [isRunning, setRunning] = useState(true);
  let countdown;
  let timeout;
  const handleStop = (restartTimer = false) => {
    setRunning(false);
    clearInterval(countdown);
    if (restartTimer) setTimeLeft(length);
    onComplete();
  };
  useEffect(() => {
    if (!isRunning)
      if (recursive) timeout = setTimeout(() => setRunning(true), 3e3);
      else return;
    countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          handleStop();
          return timeLeft;
        }
        return prevTime - every;
      });
    }, every);
    return () => {
      clearInterval(countdown);
      clearTimeout(timeout);
    };
  }, [isRunning]);
  const secondsLeft = Math.ceil(timeLeft / 1e3);
  return { timeLeft: secondsLeft, fetching: !isRunning, restart: handleStop.bind(null, true) };
};
export {
  useTimer
};
