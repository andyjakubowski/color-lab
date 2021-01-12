import './ToolbarFaker.scss';
import { HStack, VStack, ZStack, Spacer } from '../../Stacks/Stacks';
import IconButton from '../IconButton/IconButton';

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
