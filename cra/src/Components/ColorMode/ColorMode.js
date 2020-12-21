import './ColorMode.scss';
import UnsupportedStatePlaceholder from '../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import { getColorModeClassName } from '../../util/util';

function ColorMode({ Component, componentStates, colorModeName }) {
  const colorModeClassName = getColorModeClassName(colorModeName);
  const block = `ColorMode`;
  const states = componentStates.map((stateName, index) => {
    const isStateSupported = Component.supportedStates.includes(stateName);
    if (isStateSupported) {
      return (
        <div className="ColorMode__state-container" key={index.toString()}>
          <div className="ColorMode__component-container">
            <Component
              colorModeName={colorModeName}
              componentState={stateName}
            />
          </div>
          <div className="ColorMode__state-label">{stateName}</div>
        </div>
      );
    } else {
      return (
        <div key={index.toString()}>
          <UnsupportedStatePlaceholder />
        </div>
      );
    }
  });

  return (
    <div className={`${block} ${colorModeClassName}`}>
      <h4 className="ColorMode__title">{colorModeName}</h4>
      <div className="ColorMode__states">{states}</div>
    </div>
  );
}

export default ColorMode;
