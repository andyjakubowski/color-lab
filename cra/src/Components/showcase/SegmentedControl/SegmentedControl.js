import './SegmentedControl.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';
import React, { useState } from 'react';

function SegmentedControl({ componentState, colorModeName }) {
  const SEGMENTS = ['Map', 'Transit', 'Satellite'];
  // const SEGMENTS = ['A', 'B', 'C', 'D', 'E'];
  const segmentCount = SEGMENTS.length;
  const defaultSelectedSegmentIndex = 0;
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(
    defaultSelectedSegmentIndex
  );
  const supportedStates = ['default', 'disabled'];
  const isStateSupported = supportedStates.includes(componentState);

  if (!isStateSupported) {
    return <UnsupportedStatePlaceholder colorModeName={colorModeName} />;
  }

  const block = 'SegmentedControl';
  const elements = [
    'selectedSegmentIndicator',
    'segmentsContainer',
    'segment',
    'segmentContent',
    'segmentTitle',
  ];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);

  const handleSegmentClick = function handleSegmentClick(clickedSegmentIndex) {
    setSelectedSegmentIndex(clickedSegmentIndex);
  };

  const segments = SEGMENTS.map((segmentTitle, segmentIndex) => {
    const shouldHideDivider = function shouldHideDivider(
      segmentIndex,
      selectedSegmentIndex
    ) {
      const difference = segmentIndex - selectedSegmentIndex;
      return difference === 0 || difference === 1;
    };
    const isSelectedSegment = function isSelectedSegment(index) {
      return index === selectedSegmentIndex;
    };
    const isSelected = isSelectedSegment(segmentIndex);
    const isDividerHidden = shouldHideDivider(
      segmentIndex,
      selectedSegmentIndex
    );
    const selectedSegmentClass = isSelected ? 'selectedSegment' : '';
    const segmentDividerClass = isDividerHidden ? 'segmentDividerHidden' : '';
    const segmentClassName = `${classNames.segment} ${selectedSegmentClass} ${segmentDividerClass}`;
    return (
      <div
        className={segmentClassName}
        key={segmentIndex.toString()}
        onClick={() => handleSegmentClick(segmentIndex)}
      >
        <div className={classNames.segmentContent}>
          <div className={classNames.segmentTitle}>{segmentTitle}</div>
        </div>
      </div>
    );
  });

  return (
    <div
      className={`${block} ${colorModeClassName}`}
      style={{
        '--SegmentedControl__selected-segment-index': selectedSegmentIndex,
        '--SegmentedControl__segment-count': segmentCount,
      }}
    >
      <div className={classNames.selectedSegmentIndicator}></div>
      <div className={classNames.segmentsContainer}>{segments}</div>
    </div>
  );
}

export default SegmentedControl;
