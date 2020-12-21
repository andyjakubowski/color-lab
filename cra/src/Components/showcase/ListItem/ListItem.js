import './ListItem.scss';
import getClassNames from '../../../util/util';
import React, { useState } from 'react';

function ListItem({ componentState }) {
  const TITLE_TEXT = 'Title';
  const SUBTITLE_TEXT = 'Subtitle';
  const [uiState, setUiState] = useState(componentState);
  const block = 'ListItem';
  const elements = ['container', 'separator', 'content', 'title', 'subtitle'];
  const modifier = uiState;
  const classNames = getClassNames(block, elements, modifier);
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

  return (
    <div className={`${block}`} onClick={handleClick}>
      <div className={classNames.container}>
        <div className={classNames.content}>
          <div className={classNames.title}>{TITLE_TEXT}</div>
          <div className={classNames.subtitle}>{SUBTITLE_TEXT}</div>
        </div>
        <div className={classNames.separator}></div>
      </div>
    </div>
  );
}

ListItem.supportedStates = [
  'default',
  'hovered',
  'focused',
  'pressed',
  'selected',
  'disabled',
];

export default ListItem;
