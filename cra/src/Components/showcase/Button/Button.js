import './Button.scss';
import getClassNames from '../../../util/util';

function Button({
  componentState,
  labelText = 'Send',
  inlineStyles = {},
  additionalClassName = '',
}) {
  const block = `Button`;
  const elements = ['bezel', 'label'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);

  return (
    <div className={`${block} ${additionalClassName}`} style={inlineStyles}>
      <div className={classNames.bezel}>
        <span className={classNames.label}>{labelText}</span>
      </div>
    </div>
  );
}

Button.supportedStates = [
  'default',
  'hovered',
  'focused',
  'pressed',
  'disabled',
];

export default Button;
