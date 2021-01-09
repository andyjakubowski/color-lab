import './HermioneCard.scss';
import HStack from '../Stacks/HStack/HStack';
import VStack from '../Stacks/VStack/VStack';
import IconButton from '../IconButton/IconButton';
import Spacer from '../Spacer/Spacer';
import hermioneProfile from './hermione_profile.png';
import hermioneFull from './hermione_full.jpg';

const HermioneCard = function HermioneCard({ className }) {
  return (
    <div className={`HermioneCard ${className}`}>
      <VStack>
        <img
          className="HermioneCard__resizable-image"
          src={hermioneFull}
          alt="Drawing of Hermione Granger"
          resizable="true"
        />
        <VStack padding="8" alignment="leading">
          <HStack>
            <VStack alignment="leading">
              <div>Hermione Granger</div>
              <Spacer />
              <div>Minister for Magic</div>
            </VStack>
            <Spacer />
            <IconButton />
            <IconButton />
          </HStack>
          <div>
            Illustration by{' '}
            <a href="https://fridouw.tumblr.com/">Frida Lundqvist</a>
          </div>
        </VStack>
      </VStack>
    </div>
  );
};

HermioneCard.supportedStates = ['default'];

export default HermioneCard;
