import './Button.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';

function Button({
  componentState,
  colorModeName,
  labelText = 'Send',
  inlineStyles = {},
  additionalClassName = '',
}) {
  const supportedStates = [
    'default',
    'hovered',
    'focused',
    'pressed',
    'disabled',
  ];
  const isStateSupported = supportedStates.includes(componentState);
  const block = `Button`;
  const elements = ['bezel', 'label'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div
        className={`${block} ${colorModeClassName} ${additionalClassName}`}
        style={inlineStyles}
      >
        <div className={classNames.bezel}>
          <span className={classNames.label}>{labelText}</span>
        </div>
      </div>
    );
  } else {
    returnElement = (
      <UnsupportedStatePlaceholder colorModeName={colorModeName} />
    );
  }

  return returnElement;
}

export default Button;
