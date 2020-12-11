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
import colorModes from './colorModeData';

function App() {
  const defaultTint = 'pink';

  const updateTint = function updateTint(value) {
    document.documentElement.style.setProperty('--tint', value);
  };

  const handleColorPickerInput = function handleColorPickerInput(e) {
    updateTint(e.target.value);
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

  updateTint(defaultTint);
  setVh();
  window.addEventListener('load', setVh);
  window.addEventListener('resize', setVh);

  return (
    <div className="App">
      <div className="App__ComponentList-container">
        <ComponentList
          components={components}
          colorModes={colorModes}
          componentStates={componentStates}
        />
      </div>
      {/* <div className="App__Inspector-container">
        <Inspector onColorPickerInput={(e) => handleColorPickerInput(e)} />
      </div> */}
    </div>
  );
}

export default App;
