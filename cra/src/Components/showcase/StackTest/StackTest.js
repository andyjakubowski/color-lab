import './StackTest.scss';
import { HStack, VStack, ZStack, Spacer } from '../../Stacks/Stacks';
import IconButton from '../IconButton/IconButton';
import hermioneProfile from './hermione_profile.png';
import hermioneFull from './hermione_full.jpg';

const StackTest = function StackTest() {
  return (
    <VStack>
      <HStack>
        <div style={{ padding: '40px' }}>
          Hermione first met know-it-all", an
          {/* impression reinforced by her
              constant correct answers and eagerness to please the professors.
              However, she stepped in to take the blame from the boys after they
              had saved her from a troll on Hallowe'en in 1991, surprising them
              in a grateful way, which led to them quickly becoming friends. She
              later played a crucial role in protecting the Philosopher's Stone
              from Voldemort. */}
        </div>
        Hey
        <img src={hermioneProfile} resizableFully />
        <div>
          Hermione first met Harry Potter and Ron Weasley aboard the Hogwarts
          Express, who found her unfriendly and somewhat of an "insufferable
          know-it-all", an impression reinforced by her constant correct answers
          and eagerness to please the professors. However, she stepped in to
          take the blame from the boys after they had saved her from a troll on
          Hallowe'en in 1991, surprising them in a grateful way, which led to
          them quickly becoming friends. She later played a crucial role in
          protecting the Philosopher's Stone from Voldemort.
        </div>
      </HStack>
      <img src={hermioneFull} resizableFully />
    </VStack>
  );
};

StackTest.supportedStates = ['default'];

export default StackTest;
