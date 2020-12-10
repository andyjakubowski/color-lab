import './ComponentListItem.scss';
import ColorMode from '../ColorMode/ColorMode';

function ComponentListItem({ Component, colorModes, componentStates }) {
  const modes = colorModes.map((colorMode) => (
    <div className="ComponentListItem__ColorMode-container">
      <ColorMode
        Component={Component}
        key={colorMode.name}
        appearanceData={colorMode.data}
        componentStates={componentStates}
        modeName={colorMode.name}
      />
    </div>
  ));

  return (
    <div className="ComponentListItem">
      <h3 className="ComponentListItem__component-name">{Component.name}</h3>
      {modes}
    </div>
  );
}

export default ComponentListItem;
