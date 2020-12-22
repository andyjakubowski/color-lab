import HStack from './HStack';
import Spacer from '../Spacer/Spacer';
import IconButton from '../IconButton/IconButton';

const HStackFaker = function HStackFaker() {
  return (
    <div style={{ width: '100%' }}>
      <HStack>
        <IconButton />
        <Spacer />
        <IconButton />
        <Spacer />
        <IconButton />
      </HStack>
    </div>
  );
};

HStackFaker.supportedStates = ['default'];

export default HStackFaker;
