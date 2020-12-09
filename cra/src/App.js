import './App.scss';
import ComponentList from './components/ComponentList/ComponentList';
import ButtonCTA from './components/showcase/ButtonCTA/ButtonCTA';
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
  const components = [ButtonCTA];

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
