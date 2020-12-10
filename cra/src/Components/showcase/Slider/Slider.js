import './Slider.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';

function Slider({ componentState, appearanceData }) {
  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <input
        type="range"
        min="1"
        max="90"
        className="Slider"
        style={appearanceData}
      />
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

export default Slider;
