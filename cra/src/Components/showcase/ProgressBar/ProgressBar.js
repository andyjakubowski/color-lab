import './ProgressBar.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';

function ProgressBar({ componentState, colorModeName, progressRate = 0.0 }) {
  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);

  if (!isStateSupported) {
    return <UnsupportedStatePlaceholder colorModeName={colorModeName} />;
  }

  const block = 'ProgressBar';
  const elements = ['track', 'progress'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);

  return (
    <div
      className={`${block} ${colorModeClassName}`}
      style={{
        '--progress-rate': progressRate,
      }}
    >
      <div className={classNames.track}>
        <div className={classNames.progress}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
