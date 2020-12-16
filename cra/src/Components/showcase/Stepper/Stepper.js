import './Stepper.scss';
import { ReactComponent as DecrementSVG } from './decrement.svg';
import { ReactComponent as IncrementSVG } from './increment.svg';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';

function Stepper({
  componentState,
  colorModeName,
  value = 0,
  minValue = 0,
  maxValue = 6,
  onDecrementClick = () => console.log('Stepper decrement clicked'),
  onIncrementClick = () => console.log('Stepper increment clicked'),
}) {
  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);

  if (!isStateSupported) {
    return <UnsupportedStatePlaceholder colorModeName={colorModeName} />;
  }

  const block = 'Stepper';
  const elements = [
    'segmentsContainer',
    'segmentContainer',
    'segmentContent',
    'segmentSymbol',
    'decrement',
    'increment',
  ];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);
  const isDecrementDisabled = value <= minValue;
  const isIncrementDisabled = value >= maxValue;
  const disabledSegmentContainerClassName =
    'Stepper__segmentContainer_disabled';
  classNames.decrement = isDecrementDisabled
    ? `${classNames.decrement} ${disabledSegmentContainerClassName}`
    : classNames.decrement;
  classNames.increment = isIncrementDisabled
    ? `${classNames.increment} ${disabledSegmentContainerClassName}`
    : classNames.increment;

  return (
    <div className={`${block} ${colorModeClassName}`}>
      <div className={classNames.segmentsContainer}>
        <div
          className={`${classNames.segmentContainer} ${classNames.decrement}`}
          onClick={onDecrementClick}
        >
          <div className={classNames.segmentContent}>
            <DecrementSVG className={classNames.segmentSymbol} />
          </div>
        </div>
        <div
          className={`${classNames.segmentContainer} ${classNames.increment}`}
          onClick={onIncrementClick}
        >
          <div className={classNames.segmentContent}>
            <IncrementSVG className={classNames.segmentSymbol} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
