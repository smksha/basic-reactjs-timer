import React, { useRef, useState } from "react";
import { formatTimer } from "./utils";

const Stopwatch = () => {
  const [timer, setTimer] = useState(3595);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);

    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
    setIsActive(false);
    setTimer(0);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);

    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  return (
    <div className="stopwatch-card">
      <h1>Time: {formatTimer(timer)}</h1>
      <div className="stopwatch-button-wrapper">
        {!isActive && !isPaused ? (
          <button onClick={handleStart}>Start</button>
        ) : isPaused ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handleResume}>Resume</button>
        )}
        <button onClick={handleReset} disabled={!isActive}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
