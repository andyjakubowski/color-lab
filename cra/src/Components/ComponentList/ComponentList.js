import './ComponentList.scss';
import ComponentListItem from '../ComponentListItem/ComponentListItem';

function ComponentList({ components, colorModes, componentStates }) {
  const componentEls = components.map((Component, index) => (
    <ComponentListItem
      Component={Component}
      colorModes={colorModes}
      componentStates={componentStates}
      key={index}
    />
  ));

  return <div className="ComponentList">{componentEls}</div>;
}

export default ComponentList;
