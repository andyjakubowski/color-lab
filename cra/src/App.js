import './layoutHelp.scss';
import './App.scss';
import './colorModes.scss';
import ComponentList from './components/ComponentList/ComponentList';
import Inspector from './components/Inspector/Inspector';
import ButtonCTA from './components/showcase/ButtonCTA/ButtonCTA';
import Label from './components/showcase/Label/Label';
import Slider from './components/showcase/Slider/Slider';
import Checkbox from './components/showcase/Checkbox/Checkbox';
import Radio from './components/showcase/Radio/Radio';
import ListItem from './components/showcase/ListItem/ListItem';
import colorModesData from './colorModes';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import colorModes from './colorModes';

const updateRootStyles = function updateRootStyles(colorModes) {
  console.log('updateRootStyles');

  colorModes.forEach((colorMode) => {
    const props = Object.entries(colorMode.props);
    props.forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  });
};
updateRootStyles(colorModesData);

const components = [ButtonCTA, Label, Slider, Checkbox, Radio, ListItem];

const setVh = function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

setVh();
window.addEventListener('load', setVh);
window.addEventListener('resize', setVh);

function App() {
  const initialTint = colorModes[0].props['--l-tint'];

  const [tintValue, setTintValue] = useState(initialTint);

  const componentStates = useMemo(
    () => ['default', 'hovered', 'focused', 'pressed', 'selected', 'disabled'],
    []
  );

  const colorModeNames = useMemo(
    () =>
      colorModes.map((colorMode) => {
        return { name: colorMode.name };
      }),
    []
  );

  useEffect(() => {
    document.documentElement.style.setProperty('--l-tint', tintValue);
    document.documentElement.style.setProperty('--d-tint', tintValue);
  });

  const handleTintValueChange = useCallback(function handleTintValueChange(e) {
    setTintValue(e.target.value);
  }, []);

  return (
    <div className="App">
      <div className="App__ComponentList-container">
        <ComponentList
          components={components}
          colorModes={colorModeNames}
          componentStates={componentStates}
        />
      </div>
      {
        <div className="App__Inspector-container">
          <Inspector tint={tintValue} onTintInput={handleTintValueChange} />
        </div>
      }
    </div>
  );
}

export default App;
