import './App.scss';
import ButtonCTA from './Components/ButtonCTA/ButtonCTA';

function App() {
  return (
    <div className="App">
      <ButtonCTA componentState="default" />
      <ButtonCTA componentState="hovered" />
      <ButtonCTA componentState="focused" />
      <ButtonCTA componentState="pressed" />
      <ButtonCTA componentState="selected" />
      <ButtonCTA componentState="disabled" />
    </div>
  );
}

export default App;
