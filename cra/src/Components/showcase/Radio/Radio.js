import './Radio.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';
import React, { useState } from 'react';

function Radio({ componentState, colorModeName }) {
  const supportedStates = [
    'default',
    'hovered',
    'focused',
    'pressed',
    'selected',
    'disabled',
  ];
  const initialIsChecked = componentState === 'selected';
  const [isChecked, setIsChecked] = useState(initialIsChecked);
  const isStateSupported = supportedStates.includes(componentState);
  const block = `Radio`;
  const elements = ['input'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);
  const handleOnChange = function handleOnChange() {
    setIsChecked(!isChecked);
  };

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={`${block} ${colorModeClassName}`}>
        <input
          type="radio"
          className={classNames.input}
          checked={isChecked}
          onChange={handleOnChange}
        ></input>
      </div>
    );
  } else {
    returnElement = (
      <UnsupportedStatePlaceholder colorModeName={colorModeName} />
    );
  }

  return returnElement;
}

export default Radio;
