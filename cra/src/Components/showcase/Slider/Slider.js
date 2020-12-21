import './Slider.scss';
import getClassNames from '../../../util/util';

function Slider({ componentState }) {
  const block = `Slider`;
  const elements = ['input'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const isDisabled = componentState === 'disabled';

  return (
    <div className={`${block}`}>
      <input
        type="range"
        min="1"
        max="90"
        className={classNames.input}
        disabled={isDisabled}
      />
    </div>
  );
}

Slider.supportedStates = ['default', 'focused', 'pressed', 'disabled'];

export default Slider;
