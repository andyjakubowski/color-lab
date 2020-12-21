import './StepperFaker.scss';
import Stepper from './Stepper';
import React, { useState } from 'react';

function StepperFaker({ componentState }) {
  const minValue = 0;
  const maxValue = 4;
  const step = 1;
  const startValue = minValue;
  const [value, setValue] = useState(startValue);

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

  return (
    <div className={`StepperFaker`}>
      <div className="StepperFaker__label">{value}</div>
      <Stepper
        componentState={componentState}
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        onDecrementClick={handleDecrementClick}
        onIncrementClick={handleIncrementClick}
      />
    </div>
  );
}

StepperFaker.supportedStates = ['default'];

export default StepperFaker;
