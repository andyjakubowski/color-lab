import './ProgressBar.scss';
import getClassNames from '../../../util/util';

function ProgressBar({ componentState, progressRate = 0.0 }) {
  const block = 'ProgressBar';
  const elements = ['track', 'progress'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);

  return (
    <div
      className={`${block}`}
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

ProgressBar.supportedStates = ['default'];

export default ProgressBar;
