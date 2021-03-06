import './HermioneRow.scss';
import { HStack, VStack, ZStack, Spacer } from '../../Stacks/Stacks';
import IconButton from '../IconButton/IconButton';
import hermione from './hermione_row.png';

const HermioneRow = function HermioneRow() {
  return (
    <div className="HermioneRow">
      <HStack alignment="top" padding="16" spacing="8">
        <img
          src={hermione}
          alt="Drawing of Hermione Granger"
          style={{
            width: '40px',
          }}
        />
        <h4 style={{ margin: '0' }}>Hermione Granger</h4>
        <Spacer />
        <IconButton />
        <IconButton />
      </HStack>
    </div>
  );
};

HermioneRow.supportedStates = ['default'];

export default HermioneRow;
