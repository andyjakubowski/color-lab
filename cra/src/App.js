import './layoutHelp.scss';
import './App.scss';
import './colorModes.scss';
import ComponentList from './components/ComponentList/ComponentList';
import Inspector from './components/Inspector/Inspector';
import StackTest from './components/showcase/Stacks/Stack/StackTest';
// import VStackTest from './components/showcase/Stacks/VStack/VStackTest';
// import HermioneCard from './components/showcase/HermioneCard/HermioneCard';
// import HermioneRow from './components/showcase/HermioneRow/HermioneRow';
// import ToolbarFaker from './components/showcase/ToolbarFaker/ToolbarFaker';
// import IconButton from './components/showcase/IconButton/IconButton';
// import SystemButton from './components/showcase/SystemButton/SystemButton';
// import TextField from './components/showcase/TextField/TextField';
// import Alert from './components/showcase/Alert/Alert';
// import PageControlFaker from './components/showcase/PageControl/PageControlFaker';
// import ActivityIndicator from './components/showcase/ActivityIndicator/ActivityIndicator';
// import Button from './components/showcase/Button/Button';
// import SegmentedControl from './components/showcase/SegmentedControl/SegmentedControl';
// import ProgressBarFaker from './components/showcase/ProgressBarFaker/ProgressBarFaker';
// import StepperFaker from './components/showcase/Stepper/StepperFaker';
// import Label from './components/showcase/Label/Label';
// import Slider from './components/showcase/Slider/Slider';
// import Switch from './components/showcase/Switch/Switch';
// import Checkbox from './components/showcase/Checkbox/Checkbox';
// import Radio from './components/showcase/Radio/Radio';
// import ListItem from './components/showcase/ListItem/ListItem';
import colorModesData from './colorModes';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import colorModes from './colorModes';
import ColorUtil from './util/ColorUtil';

const updateRootStyles = function updateRootStyles(colorModes) {
  colorModes.forEach((colorMode) => {
    const props = Object.entries(colorMode.props);
    props.forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  });
};
updateRootStyles(colorModesData);

const components = [
  StackTest,
  // HermioneCard,
  // VStackTest,
  // ToolbarFaker,
  // HermioneRow,
  // IconButton,
  // SystemButton,
  // TextField,
  // Alert,
  // PageControlFaker,
  // ActivityIndicator,
  // StepperFaker,
  // ProgressBarFaker,
  // SegmentedControl,
  // Switch,
  // Checkbox,
  // Button,
  // Radio,
  // ListItem,
  // Slider,
  // Label,
];

const setVh = function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

setVh();
window.addEventListener('load', setVh);
window.addEventListener('resize', setVh);

function App() {
  const initialTint = useMemo(() => {
    const hexColor = ColorUtil.getRandomHexColor();
    const { h, s, l } = ColorUtil.hexToHslWithPercentageStrings(hexColor);
    return { hex: hexColor, h, s, l };
  }, []);

  const [tint, setTint] = useState(initialTint);

  const componentStates = useMemo(
    () => ['default', 'hovered', 'pressed', 'selected', 'disabled'],
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
    document.documentElement.style.setProperty('--l-tint', tint.hex);
    document.documentElement.style.setProperty('--l-tint-h', tint.h);
    document.documentElement.style.setProperty('--l-tint-s', tint.s);
    document.documentElement.style.setProperty('--l-tint-l', tint.l);
    document.documentElement.style.setProperty('--d-tint', tint.hex);
    document.documentElement.style.setProperty('--d-tint-h', tint.h);
    document.documentElement.style.setProperty('--d-tint-s', tint.s);
    document.documentElement.style.setProperty('--d-tint-l', tint.l);
  });

  const handleTintValueChange = useCallback(function handleTintValueChange(e) {
    const { h, s, l } = ColorUtil.hexToHslWithPercentageStrings(e.target.value);
    setTint({ hex: e.target.value, h, s, l });
  }, []);

  return <StackTest />;

  // return (
  //   <div className="App">
  //     <div className="App__ComponentList-container">
  //       <ComponentList
  //         components={components}
  //         colorModes={colorModeNames}
  //         componentStates={componentStates}
  //       />
  //     </div>
  //     {
  //       <div className="App__Inspector-container">
  //         <Inspector tint={tint.hex} onTintInput={handleTintValueChange} />
  //       </div>
  //     }
  //   </div>
  // );
}

export default App;
