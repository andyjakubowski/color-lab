import './layoutHelp.scss';
import './App.scss';
import ComponentList from './components/ComponentList/ComponentList';
import ButtonCTA from './components/showcase/ButtonCTA/ButtonCTA';
import Label from './components/showcase/Label/Label';
import Slider from './components/showcase/Slider/Slider';
import Checkbox from './components/showcase/Checkbox/Checkbox';
import Radio from './components/showcase/Radio/Radio';
import ListItem from './components/showcase/ListItem/ListItem';
import colorModes from './colorModeData';

function App() {
  const componentStates = [
    'default',
    'hovered',
    'focused',
    'pressed',
    'selected',
    'disabled',
  ];
  const components = [ButtonCTA, Label, Slider, Checkbox, Radio, ListItem];

  return (
    <div className="App">
      <ComponentList
        components={components}
        colorModes={colorModes}
        componentStates={componentStates}
      />
    </div>
  );
}

export default App;
