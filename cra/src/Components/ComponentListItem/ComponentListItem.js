import './ComponentListItem.scss';
import ColorMode from '../ColorMode/ColorMode';

function ComponentListItem({ Component, colorModes, componentStates }) {
  const modes = colorModes.map((colorMode) => (
    <ColorMode
      Component={Component}
      key={colorMode.name}
      appearanceData={colorMode.data}
      componentStates={componentStates}
      modeName={colorMode.name}
    />
  ));

  return (
    <div className="ComponentListItem">
      <h3 className="ComponentListItem__component-name">{Component.name}</h3>
      {modes}
    </div>
  );
}

export default ComponentListItem;
