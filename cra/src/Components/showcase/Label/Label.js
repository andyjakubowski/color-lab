import './Label.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames from '../../../util/util';

function Label({ componentState, appearanceData }) {
  const LABEL_TEXT = 'Medical ID';

  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);
  const block = `Label`;
  const elements = ['text'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={classNames.text} style={appearanceData}>
        {LABEL_TEXT}
      </div>
    );
  } else {
    returnElement = (
      <UnsupportedStatePlaceholder
        stateName={componentState}
        appearanceData={appearanceData}
      />
    );
  }

  return returnElement;
}

export default Label;
