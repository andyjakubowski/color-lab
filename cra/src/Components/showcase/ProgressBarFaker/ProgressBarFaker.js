import './ProgressBarFaker.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import React, { useState, useEffect } from 'react';

function ProgressBarFaker({ componentState }) {
  const minProgressRate = 0.0;
  const maxProgressRate = 1.0;
  const startProgressRate = 0.2;
  const [progressRate, setProgressRate] = useState(startProgressRate);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (!isPaused) {
      return;
    }

    const minProgressIncrease = 0.0016;
    const maxProgressIncrease = 0.0053 * 4;
    const getRandomArbitrary = function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    };
    const updatePercentage = 0.2;
    const updateProgressRate = function updateProgressRate() {
      const shouldUpdateProgress = Math.random() > updatePercentage;
      if (!shouldUpdateProgress) {
        return;
      }

      const randomProgressIncrease = getRandomArbitrary(
        minProgressIncrease,
        maxProgressIncrease
      );

      const newProgressRate = progressRate + randomProgressIncrease;

      if (newProgressRate < maxProgressRate) {
        setProgressRate(newProgressRate);
      } else {
        setProgressRate(minProgressRate);
      }
    };

    const INTERVAL_MS = 128;
    const intervalId = setInterval(updateProgressRate, INTERVAL_MS);
    const cleanUp = function cleanUp() {
      clearInterval(intervalId);
    };
    return cleanUp;
  }, [progressRate, isPaused]);

  return (
    <div className="ProgressBarFaker" onClick={() => setIsPaused(!isPaused)}>
      <ProgressBar
        componentState={componentState}
        progressRate={progressRate}
      />
    </div>
  );
}

ProgressBarFaker.supportedStates = ['default'];

export default ProgressBarFaker;
