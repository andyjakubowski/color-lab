import './StepperFaker.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import Stepper from './Stepper';
import React, { useState } from 'react';
import { getColorModeClassName } from '../../../util/util';

function StepperFaker({ componentState, colorModeName }) {
  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);
  const minValue = 0;
  const maxValue = 4;
  const step = 1;
  const startValue = minValue;
  const [value, setValue] = useState(startValue);
  const colorModeClassName = getColorModeClassName(colorModeName);

  const decrementValue = function decrementValue() {
    const newValue = value - step;
    const newValueCappedAtMinValue = Math.max(newValue, minValue);
    setValue(newValueCappedAtMinValue);
  };

  const incrementValue = function incrementValue() {
    const newValue = value + step;
    const newValueCappedAtMaxValue = Math.min(newValue, maxValue);
    setValue(newValueCappedAtMaxValue);
  };

  const handleDecrementClick = function handleDecrementClick() {
    if (value > minValue) {
      decrementValue();
    }
  };

  const handleIncrementClick = function handleIncrementClick() {
    if (value < maxValue) {
      incrementValue();
    }
  };

  if (!isStateSupported) {
    return <UnsupportedStatePlaceholder colorModeName={colorModeName} />;
  }

  return (
    <div className={`StepperFaker ${colorModeClassName}`}>
      <div className="StepperFaker__label">{value}</div>
      <Stepper
        componentState={componentState}
        colorModeName={colorModeName}
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        onDecrementClick={handleDecrementClick}
        onIncrementClick={handleIncrementClick}
      />
    </div>
  );
}

export default StepperFaker;
