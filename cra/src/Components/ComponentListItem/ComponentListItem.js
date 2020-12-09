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
      <h3>{Component.name}</h3>
      <div className="ComponentListItem__content">{modes}</div>
    </div>
  );
}

export default ComponentListItem;
