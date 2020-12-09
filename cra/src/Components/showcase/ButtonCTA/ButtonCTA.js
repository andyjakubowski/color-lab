import './ButtonCTA.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';

function ButtonCTA({ componentState, appearanceData }) {
  const getClassNames = function getClassNames(elements) {
    return elements.reduce((classNamesObject, element) => {
      return {
        ...classNamesObject,
        [element]: `${block}__${element} ${block}__${element}_${modifier}`,
      };
    }, {});
  };
  const getStyles = function getStyles(stylesObject) {
    return stylesObject;
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
  const styles = getStyles(appearanceData);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={classNames.bezel} style={styles}>
        <span className={classNames.label}>{componentState}</span>
      </div>
    );
  } else {
    returnElement = <UnsupportedStatePlaceholder stateName={componentState} />;
  }

  return returnElement;
}

export default ButtonCTA;
