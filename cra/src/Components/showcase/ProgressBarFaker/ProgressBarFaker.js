import './ProgressBarFaker.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import ProgressBar from '../ProgressBar/ProgressBar';
import React, { useState, useEffect } from 'react';

function ProgressBarFaker({ componentState, colorModeName }) {
  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);
  const minProgressRate = 0.0;
  const maxProgressRate = 1.0;
  const startProgressRate = 0.2;
  const [progressRate, setProgressRate] = useState(startProgressRate);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) {
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
  }, [progressRate, isAnimating]);

  if (!isStateSupported) {
    return <UnsupportedStatePlaceholder colorModeName={colorModeName} />;
  }

  return (
    <div
      className="ProgressBarFaker"
      onClick={() => setIsAnimating(!isAnimating)}
    >
      <ProgressBar
        componentState={componentState}
        colorModeName={colorModeName}
        progressRate={progressRate}
      />
    </div>
  );
}

export default ProgressBarFaker;
