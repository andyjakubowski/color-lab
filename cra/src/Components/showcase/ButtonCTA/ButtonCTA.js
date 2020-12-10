import './ButtonCTA.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';

function ButtonCTA({ componentState, appearanceData }) {
  const CTA_TEXT = 'Send';
  const getClassNames = function getClassNames(elements) {
    return elements.reduce((classNamesObject, element) => {
      return {
        ...classNamesObject,
        [element]: `${block}__${element} ${block}__${element}_${modifier}`,
      };
    }, {});
  };
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
  const classNames = getClassNames(elements);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={classNames.bezel} style={appearanceData}>
        <span className={classNames.label}>{CTA_TEXT}</span>
      </div>
    );
  } else {
    returnElement = (
      <UnsupportedStatePlaceholder
        stateName={componentState}
        appearanceData={appearanceData}
      />
    );
  }

  return returnElement;
}

export default ButtonCTA;
