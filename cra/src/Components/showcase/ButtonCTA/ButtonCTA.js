import './ButtonCTA.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames from '../../../util/util';

function ButtonCTA({ componentState, appearanceData }) {
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

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={classNames.bezel} style={appearanceData}>
        <span className={classNames.label}>{CTA_TEXT}</span>
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

export default ButtonCTA;
