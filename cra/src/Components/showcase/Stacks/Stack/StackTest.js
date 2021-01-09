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
      You shall not pass!
      <HStack>
        <div>Yay!</div>
        <img
          src={hermioneFull}
          alt="Hermione portrait"
          className="hermione"
          resizableFully
        />
        <div>Yahoo!</div>
        <img
          src={hermioneFull}
          alt="Hermione portrait"
          className="hermione"
          resizableFully
        />
        <div>Yowza!</div>
      </HStack>
      <img
        src={hermioneFull}
        alt="Hermione portrait"
        className="hermione"
        resizableFully
      />
      The underworld
    </VStack>
    //   </div>
    // </div>
  );
};

StackTest.supportedStates = ['default'];

export default StackTest;
