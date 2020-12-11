import './Inspector.scss';
import React, { useState } from 'react';

function Inspector({ tint, onTintInput }) {
  const [tintValue, setTintValue] = useState(tint);
  console.log('Inspector, tintValue:', tintValue);
  const bemClass = function getClassName(element) {
    return `Inspector__${element}`;
  };
  const TINT_LABEL_TEXT = 'Tint';

  const onInput = function onInput(e) {
    setTintValue(e.target.value);
    onTintInput(e.target.value);
  };

  // const pink = '#F63CB9';

  return (
    <div className={bemClass('container')}>
      <div className={bemClass('content')}>
        <div className={bemClass('tint-picker-container')}>
          <label
            htmlFor="tint-picker"
            className={bemClass('tint-picker-label')}
          >
            {TINT_LABEL_TEXT}
          </label>
          <input
            type="color"
            className={bemClass('tint-picker-input')}
            id="tint-picker"
            onInput={onInput}
            value={tintValue}
          />
        </div>
      </div>
    </div>
  );
}

export default Inspector;
