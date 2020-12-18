import './PageControlFaker.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import PageControl from './PageControl';
import React, { useState } from 'react';
import { getColorModeClassName } from '../../../util/util';

function PageControlFaker({ componentState, colorModeName }) {
  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);
  const numberOfPages = 5;
  const startPage = 0;
  const [currentPageIndex, setCurrentPageIndex] = useState(startPage);
  const colorModeClassName = getColorModeClassName(colorModeName);

  const onPreviousPage = function onPreviousPage() {
    const newCurrentPageIndex = currentPageIndex - 1;
    setCurrentPageIndex(newCurrentPageIndex);
  };

  const onNextPage = function onNextPage() {
    const newCurrentPageIndex = currentPageIndex + 1;
    setCurrentPageIndex(newCurrentPageIndex);
  };

  if (!isStateSupported) {
    return <UnsupportedStatePlaceholder colorModeName={colorModeName} />;
  }

  return (
    <div className={`PageControlFaker ${colorModeClassName}`}>
      <div className="PageControlFaker__page-label">
        {`Page ${currentPageIndex + 1}`}
      </div>
      <PageControl
        componentState={componentState}
        colorModeName={colorModeName}
        numberOfPages={numberOfPages}
        currentPageIndex={currentPageIndex}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    </div>
  );
}

export default PageControlFaker;
