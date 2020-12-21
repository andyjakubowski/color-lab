import './PageControlFaker.scss';
import PageControl from './PageControl';
import React, { useState } from 'react';

function PageControlFaker({ componentState, colorModeName }) {
  const numberOfPages = 5;
  const startPage = 0;
  const [currentPageIndex, setCurrentPageIndex] = useState(startPage);

  const onPreviousPage = function onPreviousPage() {
    const newCurrentPageIndex = currentPageIndex - 1;
    setCurrentPageIndex(newCurrentPageIndex);
  };

  const onNextPage = function onNextPage() {
    const newCurrentPageIndex = currentPageIndex + 1;
    setCurrentPageIndex(newCurrentPageIndex);
  };

  return (
    <div className={`PageControlFaker`}>
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

PageControlFaker.supportedStates = ['default'];

export default PageControlFaker;
