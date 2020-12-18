import './Alert.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';
import Button from '../Button/Button';

const Alert = function Alert({ componentState, colorModeName }) {
  const TITLE_TEXT = 'Do you want to keep this new document “Dreams”?';
  const MESSAGE_TEXT = 'You can’t undo this action.';
  const PREFERRED_ACTION_TEXT = 'Save';
  const CANCEL_ACTION_TEXT = 'Cancel';
  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);
  const block = 'Alert';
  const elements = [
    'title',
    'message',
    'preferredAction',
    'cancelAction',
    'platter',
  ];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);

  const alert = (
    <div className={`${block} ${colorModeClassName}`}>
      <div className={classNames.platter}>
        <h3 className={classNames.title}>{TITLE_TEXT}</h3>
        <p className={classNames.message}>{MESSAGE_TEXT}</p>
        <Button
          componentState={componentState}
          colorModeName={colorModeName}
          labelText={PREFERRED_ACTION_TEXT}
          inlineStyles={{
            marginInlineStart: '16px',
            marginInlineEnd: '16px',
            marginBlockEnd: '16px',
          }}
          additionalClassName="ButtonCTA"
        ></Button>
        <Button
          componentState={componentState}
          colorModeName={colorModeName}
          labelText={CANCEL_ACTION_TEXT}
          inlineStyles={{
            marginInlineStart: '16px',
            marginInlineEnd: '16px',
            paddingBlockEnd: '16px',
          }}
          additionalClassName="ButtonSecondary"
        ></Button>
      </div>
    </div>
  );

  const placeholder = (
    <UnsupportedStatePlaceholder colorModeName={colorModeName} />
  );

  if (isStateSupported) {
    return alert;
  } else {
    return placeholder;
  }
};

export default Alert;
