import './HermioneRow.scss';
import HStack from '../HStack/HStack';
import IconButton from '../IconButton/IconButton';
import Spacer from '../Spacer/Spacer';
import hermione from './hermione_row.png';

const HermioneRow = function HermioneRow() {
  return (
    <div className="HermioneRow">
      <HStack alignment="center">
        <img
          src={hermione}
          alt="Drawing of Hermione Granger"
          style={{
            width: '40px',
          }}
        />
        <h4>Hermione Granger</h4>
        <IconButton />
      </HStack>
    </div>
  );
};

HermioneRow.supportedStates = ['default'];

export default HermioneRow;
