import React, { useState, useRef } from "react";

const useTimer = (intialState = 0) => {
  const [timer, setTimer] = useState(intialState);
  const [isActive, setIsActive] = useState(false);
  const [showPause, setShowPause] = useState(false);

  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setShowPause(true);

    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setShowPause(false);
  };

  const handleResume = () => {
    setShowPause(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);

    setShowPause(false);
    setIsActive(false);
    setTimer(0);
  };

  return {
    timer,
    showPause,
    isActive,
    handlePause,
    handleReset,
    handleStart,
    handleResume
  };
};

export default useTimer;
