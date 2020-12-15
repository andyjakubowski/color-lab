import './ListItem.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';
import React, { useState } from 'react';

function ListItem({ componentState, colorModeName }) {
  const TITLE_TEXT = 'Title';
  const SUBTITLE_TEXT = 'Subtitle';
  const [uiState, setUiState] = useState(componentState);
  const supportedStates = [
    'default',
    'hovered',
    'focused',
    'pressed',
    'selected',
    'disabled',
  ];
  const isStateSupported = supportedStates.includes(uiState);
  const block = 'ListItem';
  const elements = ['container', 'separator', 'content', 'title', 'subtitle'];
  const modifier = uiState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);
  const toggleSelectedState = function toggleSelectedState() {
    if (uiState === 'default') {
      setUiState('selected');
    } else {
      setUiState('default');
    }
  };
  const handleClick = function handleClick() {
    if (uiState !== 'default' && uiState !== 'selected') {
      return;
    }

    toggleSelectedState();
  };

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={`${block} ${colorModeClassName}`} onClick={handleClick}>
        <div className={classNames.container}>
          <div className={classNames.content}>
            <div className={classNames.title}>{TITLE_TEXT}</div>
            <div className={classNames.subtitle}>{SUBTITLE_TEXT}</div>
          </div>
          <div className={classNames.separator}></div>
        </div>
      </div>
    );
  } else {
    returnElement = (
      <UnsupportedStatePlaceholder colorModeName={colorModeName} />
    );
  }

  return returnElement;
}

export default ListItem;
