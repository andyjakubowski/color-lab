import './ColorMode.scss';

function ColorMode({ Component, appearanceData, componentStates, modeName }) {
  const states = componentStates.map((stateName, index) => (
    <Component
      key={index.toString()}
      appearanceData={appearanceData}
      componentState={stateName}
    />
  ));

  return (
    <div className="ColorMode">
      <p>{modeName}</p>
      <div className="ColorMode__states">{states}</div>
    </div>
  );
}

export default ColorMode;
