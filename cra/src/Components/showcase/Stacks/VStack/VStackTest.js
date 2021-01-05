import VStack from './VStack';
import IconButton from '../../IconButton/IconButton';
import Spacer from '../../Spacer/Spacer';

const VStackTest = function VStackTest() {
  return (
    <div
      style={{
        background: 'lightgray',
      }}
    >
      <VStack alignment="center">
        <div>Hermione Granger</div>
        <div>Minister for Magic and Such</div>
        <Spacer />
        <IconButton />
        <IconButton />
      </VStack>
    </div>
  );
};

VStackTest.supportedStates = ['default'];

export default VStackTest;
