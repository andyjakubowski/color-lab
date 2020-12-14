import './Slider.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';

function Slider({ componentState, colorModeName }) {
  const supportedStates = ['default', 'focused', 'pressed', 'disabled'];
  const isStateSupported = supportedStates.includes(componentState);
  const block = `Slider`;
  const elements = ['input'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);
  const isDisabled = componentState === 'disabled';

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={`${block} ${colorModeClassName}`}>
        <input
          type="range"
          min="1"
          max="90"
          className={classNames.input}
          disabled={isDisabled}
        />
      </div>
    );
  } else {
    returnElement = (
      <UnsupportedStatePlaceholder colorModeName={colorModeName} />
    );
  }

  return returnElement;
}

export default Slider;
