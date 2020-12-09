import './UnsupportedStatePlaceholder.scss';

function UnsupportedStatePlaceholder({ stateName }) {
  return (
    <div className="UnsupportedStatePlaceholder">{`No ${stateName} state`}</div>
  );
}

export default UnsupportedStatePlaceholder;
