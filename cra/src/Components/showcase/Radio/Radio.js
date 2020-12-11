import './Radio.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import { getColorModeClassName } from '../../../util/util';

function Radio({ componentState, colorModeName }) {
  const supportedStates = [
    'default',
    'hovered',
    'focused',
    'pressed',
    'selected',
    'disabled',
  ];
  const block = `Radio`;
  const isStateSupported = supportedStates.includes(componentState);
  const colorModeClassName = getColorModeClassName(colorModeName);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={`${block} ${colorModeClassName}`}>
        <div className="Radio"></div>
      </div>
    );
  } else {
    returnElement = (
      <UnsupportedStatePlaceholder colorModeName={colorModeName} />
    );
  }

  return returnElement;
}

export default Radio;
