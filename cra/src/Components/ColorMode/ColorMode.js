import './ColorMode.scss';

function ColorMode({ Component, appearanceData, componentStates, modeName }) {
  const states = componentStates.map((stateName, index) => (
    <div class="ColorMode__state-container">
      <div class="ColorMode__component-container">
        <Component
          key={index.toString()}
          appearanceData={appearanceData}
          componentState={stateName}
        />
      </div>
      <div class="ColorMode__state-label">{stateName}</div>
    </div>
  ));

  return (
    <div className="ColorMode" style={appearanceData}>
      <h4 className="ColorMode__title">{modeName}</h4>
      <div className="ColorMode__states">{states}</div>
    </div>
  );
}

export default ColorMode;
