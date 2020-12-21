import './Switch.scss';
import getClassNames from '../../../util/util';
import React, { useState } from 'react';

function Switch({ componentState }) {
  const initialIsChecked = componentState === 'selected';
  const [isChecked, setIsChecked] = useState(initialIsChecked);
  const block = `Switch`;
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

Switch.supportedStates = ['default', 'pressed', 'selected', 'disabled'];

export default Switch;
