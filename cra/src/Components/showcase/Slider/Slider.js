import './Slider.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import { getColorModeClassName } from '../../../util/util';

function Slider({ componentState, colorModeName }) {
  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);
  const block = `Slider`;
  const colorModeClassName = getColorModeClassName(colorModeName);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={`${block} ${colorModeClassName}`}>
        <input type="range" min="1" max="90" className="Slider" />
      </div>
    );
  } else {
    returnElement = <UnsupportedStatePlaceholder />;
  }

  return returnElement;
}

export default Slider;
