import './ToolbarFaker.scss';
import HStack from '../HStack/HStack';
import IconButton from '../IconButton/IconButton';
import Spacer from '../Spacer/Spacer';

const ToolbarFaker = function ToolbarFaker() {
  return (
    <div className="ToolbarFaker">
      <HStack>
        <HStack>
          <IconButton />
          <IconButton />
        </HStack>
        <Spacer />
        <HStack>
          <IconButton />
          <IconButton />
        </HStack>
      </HStack>
    </div>
  );
};

ToolbarFaker.supportedStates = ['default'];

export default ToolbarFaker;
