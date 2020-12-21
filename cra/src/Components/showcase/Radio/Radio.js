import './Radio.scss';
import getClassNames from '../../../util/util';
import React, { useState } from 'react';

function Radio({ componentState }) {
  const initialIsChecked = componentState === 'selected';
  const [isChecked, setIsChecked] = useState(initialIsChecked);
  const block = `Radio`;
  const elements = ['input'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const handleOnChange = function handleOnChange() {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`${block}`}>
      <input
        type="radio"
        className={classNames.input}
        checked={isChecked}
        onChange={handleOnChange}
      ></input>
    </div>
  );
}

Radio.supportedStates = [
  'default',
  'hovered',
  'focused',
  'pressed',
  'selected',
  'disabled',
];

export default Radio;
