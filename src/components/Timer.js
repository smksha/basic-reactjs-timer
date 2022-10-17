import React from "react";
import useTimer from "../hooks/useTimer";
import { formatTimer } from "../utils";

const Timer = () => {
  const {
    timer,
    isActive,
    showPause,
    handlePause,
    handleStart,
    handleReset,
    handleResume
  } = useTimer(0);

  return (
    <div className="stopwatch-card">
      <h1>Time: {formatTimer(timer)}</h1>
      <div className="stopwatch-button-wrapper">
        {!isActive && !showPause ? (
          <button onClick={handleStart}>Start</button>
        ) : showPause ? (
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

export default Timer;
