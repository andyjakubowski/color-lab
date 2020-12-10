import './Radio.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';

function Radio({ componentState, appearanceData }) {
  const supportedStates = [
    'default',
    'hovered',
    'focused',
    'pressed',
    'selected',
    'disabled',
  ];
  const isStateSupported = supportedStates.includes(componentState);

  let returnElement;

  if (isStateSupported) {
    returnElement = <div className="Radio" style={appearanceData}></div>;
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

export default Radio;
