import './Checkbox.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';

function Checkbox({ componentState, appearanceData }) {
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
    returnElement = <div className="Checkbox" style={appearanceData}></div>;
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

export default Checkbox;
