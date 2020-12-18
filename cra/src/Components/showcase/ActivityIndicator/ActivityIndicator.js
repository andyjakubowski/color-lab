import './ActivityIndicator.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import { getColorModeClassName } from '../../../util/util';

const ActivityIndicator = function ActivityIndicator({
  componentState,
  colorModeName,
}) {
  const block = 'ActivityIndicator';
  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);
  const colorModeClassName = getColorModeClassName(colorModeName);

  const lineCount = 8;
  const fullRotation = 360;
  const svgViewBoxSize = 31;
  const strokeWidth = 4;
  const isLineCapRound = true;
  const capRadius = isLineCapRound ? strokeWidth / 2 : 0;
  const desiredLineLength = 10;
  const lineElementLength = desiredLineLength - 2 * capRadius;
  const lineStartYCoordinate = 0.5 + capRadius;
  const lineEndYCoordinate = lineStartYCoordinate + lineElementLength;
  const rotationInterval = fullRotation / lineCount;

  const lines = [...Array(lineCount)].map((_, lineIndex) => {
    const rotationAngle = rotationInterval * lineIndex;
    return (
      <line
        className={`${block}__svg-line`}
        key={lineIndex}
        x1="50%"
        y1={lineStartYCoordinate}
        x2="50%"
        y2={lineEndYCoordinate}
        transform={`rotate(${rotationAngle} 15.5 15.5)`}
        strokeWidth={strokeWidth}
        strokeLinecap={isLineCapRound ? 'round' : 'butt'}
        style={{
          '--line-index': lineIndex,
        }}
      />
    );
  });

  const svg = (
    <svg
      viewBox={`0 0 ${svgViewBoxSize} ${svgViewBoxSize}`}
      className={`${block}__svg-container`}
      preserveAspectRatio="xMidYMid meet"
      style={{
        '--line-count': lineCount,
      }}
    >
      {lines}
    </svg>
  );

  if (isStateSupported) {
    return <div className={`${block} ${colorModeClassName}`}>{svg}</div>;
  } else {
    return <UnsupportedStatePlaceholder colorModeName={colorModeName} />;
  }
};

export default ActivityIndicator;
