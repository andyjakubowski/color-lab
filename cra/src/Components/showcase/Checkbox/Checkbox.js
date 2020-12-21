import './Checkbox.scss';
import getClassNames from '../../../util/util';
import React, { useState } from 'react';

function Checkbox({ componentState }) {
  const initialIsChecked = componentState === 'selected';
  const [isChecked, setIsChecked] = useState(initialIsChecked);
  const block = `Checkbox`;
  const elements = ['input'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const handleOnChange = function handleOnChange() {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`${block}`}>
      <input
        type="checkbox"
        className={classNames.input}
        checked={isChecked}
        onChange={handleOnChange}
      ></input>
    </div>
  );
}

Checkbox.supportedStates = [
  'default',
  'hovered',
  'focused',
  'pressed',
  'selected',
  'disabled',
];

export default Checkbox;
