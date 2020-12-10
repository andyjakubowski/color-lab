import './UnsupportedStatePlaceholder.scss';

function UnsupportedStatePlaceholder({ stateName, appearanceData }) {
  return (
    <div
      className="UnsupportedStatePlaceholder"
      style={appearanceData}
    >{`Unavailable`}</div>
  );
}

export default UnsupportedStatePlaceholder;
