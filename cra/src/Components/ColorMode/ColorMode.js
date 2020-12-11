import './ColorMode.scss';

function ColorMode({ Component, appearanceData, componentStates, modeName }) {
  const states = componentStates.map((stateName, index) => (
    <div className="ColorMode__state-container" key={index.toString()}>
      <div className="ColorMode__component-container">
        <Component
          colorModeName={modeName}
          appearanceData={appearanceData}
          componentState={stateName}
        />
      </div>
      <div className="ColorMode__state-label">{stateName}</div>
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
