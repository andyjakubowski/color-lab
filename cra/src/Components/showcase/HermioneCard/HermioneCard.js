import './HermioneCard.scss';
import { HStack, VStack, ZStack, Spacer } from '../../Stacks/Stacks';
import IconButton from '../IconButton/IconButton';
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
          resizableFully
        />
        <VStack padding="8" alignment="leading">
          <HStack>
            <VStack alignment="leading">
              <div>Hermione Granger</div>
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
