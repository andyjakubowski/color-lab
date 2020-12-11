import './layoutHelp.scss';
import './App.scss';
import ComponentList from './components/ComponentList/ComponentList';
import Inspector from './components/Inspector/Inspector';
import ButtonCTA from './components/showcase/ButtonCTA/ButtonCTA';
import Label from './components/showcase/Label/Label';
import Slider from './components/showcase/Slider/Slider';
import Checkbox from './components/showcase/Checkbox/Checkbox';
import Radio from './components/showcase/Radio/Radio';
import ListItem from './components/showcase/ListItem/ListItem';
import colorModesData from './colorModes';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(colorModesData);
  const [tint, setTint] = useState(colorModesData[0].props['--l-tint']);

  const colorModeNames = data.map((colorMode) => {
    return { name: colorMode.name };
  });

  const updateGlobalStyles = function updateGlobalStyles(colorModes) {
    colorModes.forEach((colorMode) => {
      const props = Object.entries(colorMode.props);
      props.forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    });
  };

  const updateTint = function updateTint(value) {
    document.documentElement.style.setProperty('--l-tint', value);
    document.documentElement.style.setProperty('--d-tint', value);
  };

  const handleTintValueChange = function handleTintValueChange(tintValue) {
    updateTint(tintValue);
  };
  const componentStates = [
    'default',
    'hovered',
    'focused',
    'pressed',
    'selected',
    'disabled',
  ];
  const components = [ButtonCTA, Label, Slider, Checkbox, Radio, ListItem];

  const setVh = function setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  updateGlobalStyles(data);
  setVh();
  window.addEventListener('load', setVh);
  window.addEventListener('resize', setVh);

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
          <Inspector tint={tint} onTintInput={handleTintValueChange} />
        </div>
      }
    </div>
  );
}

export default App;
