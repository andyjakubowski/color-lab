import React from 'react';
import './ComponentList.scss';
import ComponentListItem from '../ComponentListItem/ComponentListItem';

const ComponentList = React.memo(function ComponentList({
  components,
  colorModes,
  componentStates,
}) {
  const componentEls = components.map((Component, index) => (
    <ComponentListItem
      Component={Component}
      colorModes={colorModes}
      componentStates={componentStates}
      key={index}
    />
  ));

  return <div className="ComponentList">{componentEls}</div>;
});

export default ComponentList;
