import './ColorMode.scss';
import { getColorModeClassName } from '../../util/util';

function ColorMode({ Component, componentStates, colorModeName }) {
  const colorModeClassName = getColorModeClassName(colorModeName);
  const block = `ColorMode`;
  const states = componentStates.map((stateName, index) => (
    <div className="ColorMode__state-container" key={index.toString()}>
      <div className="ColorMode__component-container">
        <Component colorModeName={colorModeName} componentState={stateName} />
      </div>
      <div className="ColorMode__state-label">{stateName}</div>
    </div>
  ));

  return (
    <div className={`${block} ${colorModeClassName}`}>
      <h4 className="ColorMode__title">{colorModeName}</h4>
      <div className="ColorMode__states">{states}</div>
    </div>
  );
}

export default ColorMode;
