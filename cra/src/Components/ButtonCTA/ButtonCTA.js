import './ButtonCTA.scss';
import UnsupportedStatePlaceholder from '../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';

function ButtonCTA({ componentState }) {
  const supportedStates = [
    'default',
    'hovered',
    'focused',
    'pressed',
    'disabled',
  ];
  const isStateSupported = supportedStates.includes(componentState);
  const block = `ButtonCTA`;
  const elements = ['bezel', 'label'];
  const modifier = componentState;
  const classNames = elements.reduce((classNamesObject, element) => {
    return {
      ...classNamesObject,
      [element]: `${block}__${element} ${block}__${element}_${modifier}`,
    };
  }, {});

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <button className={classNames.bezel}>
        <span className={classNames.label}>{componentState}</span>
      </button>
    );
  } else {
    returnElement = <UnsupportedStatePlaceholder stateName={componentState} />;
  }

  return returnElement;
}

export default ButtonCTA;
