import './ActivityIndicator.scss';

const ActivityIndicator = function ActivityIndicator({
  componentState,
  colorModeName,
}) {
  const block = 'ActivityIndicator';
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

  return <div className={`${block}`}>{svg}</div>;
};

ActivityIndicator.supportedStates = ['default'];

export default ActivityIndicator;
