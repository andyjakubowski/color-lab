import './Label.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';

function Label({ componentState, colorModeName }) {
  const LABEL_TEXT = 'Medical ID';

  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);
  const block = `Label`;
  const elements = ['text'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={`${block} ${colorModeClassName}`}>
        <div className={classNames.text}>{LABEL_TEXT}</div>
      </div>
    );
  } else {
    returnElement = <UnsupportedStatePlaceholder />;
  }

  return returnElement;
}

export default Label;
