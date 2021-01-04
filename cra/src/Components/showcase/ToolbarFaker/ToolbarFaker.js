import './ToolbarFaker.scss';
import HStack from '../HStack/HStack';
import IconButton from '../IconButton/IconButton';
import Spacer from '../Spacer/Spacer';

const ToolbarFaker = function ToolbarFaker() {
  return (
    <div className="ToolbarFaker">
      <HStack>
        <IconButton />
        <Spacer />
        <IconButton />
        <Spacer />
        <IconButton />
        <Spacer />
        <IconButton />
        <Spacer />
        <IconButton />
      </HStack>
    </div>
  );
};

ToolbarFaker.supportedStates = ['default'];

export default ToolbarFaker;
