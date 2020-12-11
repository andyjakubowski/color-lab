import './Inspector.scss';
// import React, { useState } from 'react';

const bemClass = function getClassName(element) {
  return `Inspector__${element}`;
};
const TINT_LABEL_TEXT = 'Tint';

function Inspector({ tint, onTintInput }) {
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
            onInput={onTintInput}
            value={tint}
          />
        </div>
      </div>
    </div>
  );
}

export default Inspector;
