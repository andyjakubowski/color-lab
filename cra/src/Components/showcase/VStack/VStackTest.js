import VStack from './VStack';
import IconButton from '../IconButton/IconButton';
import Spacer from '../Spacer/Spacer';

const VStackTest = function VStackTest() {
  return (
    <div
      style={{
        background: 'lightgray',
      }}
    >
      <VStack>
        <div>Hermione Granger</div>
        <div>Minister for Magic</div>
        <IconButton />
        <IconButton />
      </VStack>
    </div>
  );
};

VStackTest.supportedStates = ['default'];

export default VStackTest;
