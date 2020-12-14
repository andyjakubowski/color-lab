import './Radio.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';

function Radio({ componentState, colorModeName }) {
  const supportedStates = [
    'default',
    'hovered',
    'focused',
    'pressed',
    'selected',
    'disabled',
  ];
  const isStateSupported = supportedStates.includes(componentState);
  const block = `Radio`;
  const elements = ['input'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={`${block} ${colorModeClassName}`}>
        <input type="radio" className={classNames.input}></input>
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
