import './StackTest.scss';
import HStack from '../HStack/HStack';
import VStack from '../VStack/VStack';
import IconButton from '../../IconButton/IconButton';
import Spacer from '../../Spacer/Spacer';
import hermioneProfile from './hermione_profile.png';
import hermioneFull from './hermione_full.jpg';

const StackTest = function StackTest() {
  return (
    // <div
    //   style={{
    //     width: '100%',
    //     height: '100%',
    //     padding: '100px 100px',
    //     background: '#222',
    //   }}
    // >
    //   <div
    //     style={{
    //       width: '100%',
    //       height: '100%',
    //       borderRadius: '17px',
    //       display: 'grid',
    //       placeContent: 'center',
    //       gridAutoRows: 'minmax(0, max-content)',
    //       gridAutoColumns: 'minmax(0, max-content)',
    //       border: '10px solid #444',
    //       background: 'burlywood',
    //       outline: 'none',
    //     }}
    //   >
    <VStack>
      <HStack>
        <div style={{ padding: '40px' }}>
          Hermione first met Harry Potter and Ron Weasley aboard the Hogwarts
          Express, who found her unfriendly and somewhat of an "insufferable
          know-it-all", an impression reinforced by her constant correct answers
          and eagerness to please the professors. However, she stepped in to
          take the blame from the boys after they had saved her from a troll on
          Hallowe'en in 1991, surprising them in a grateful way, which led to
          them quickly becoming friends. She later played a crucial role in
          protecting the Philosopher's Stone from Voldemort.
        </div>
        Hey
        <div>
          <img src={hermioneProfile} resizableFully />
        </div>
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
    //   </div>
    // </div>
  );
};

StackTest.supportedStates = ['default'];

export default StackTest;
