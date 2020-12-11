import './ButtonCTA.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';

function ButtonCTA({ componentState, colorModeName }) {
  const CTA_TEXT = 'Send';
  const supportedStates = [
    'default',
    'hovered',
    'focused',
    'pressed',
    'disabled',
  ];
  const isStateSupported = supportedStates.includes(componentState);
  const block = `ButtonCTA`;
  const elements = ['bezel', 'label'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={`${block} ${colorModeClassName}`}>
        <div className={classNames.bezel}>
          <span className={classNames.label}>{CTA_TEXT}</span>
        </div>
      </div>
    );
  } else {
    returnElement = <UnsupportedStatePlaceholder />;
  }

  return returnElement;
}

export default ButtonCTA;
