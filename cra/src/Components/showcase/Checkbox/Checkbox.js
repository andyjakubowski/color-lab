import './Checkbox.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import { getColorModeClassName } from '../../../util/util';

function Checkbox({ componentState, colorModeName }) {
  const supportedStates = [
    'default',
    'hovered',
    'focused',
    'pressed',
    'selected',
    'disabled',
  ];
  const block = `Checkbox`;
  const isStateSupported = supportedStates.includes(componentState);
  const colorModeClassName = getColorModeClassName(colorModeName);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={`${block} ${colorModeClassName}`}>
        <div className="Checkbox"></div>
      </div>
    );
  } else {
    returnElement = <UnsupportedStatePlaceholder />;
  }

  return returnElement;
}

export default Checkbox;
