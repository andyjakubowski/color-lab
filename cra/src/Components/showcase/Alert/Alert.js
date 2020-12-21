import './Alert.scss';
import getClassNames from '../../../util/util';
import Button from '../Button/Button';

const Alert = function Alert({ componentState }) {
  const TITLE_TEXT = 'Do you want to keep this new document “Dreams”?';
  const MESSAGE_TEXT = 'You can’t undo this action.';
  const PREFERRED_ACTION_TEXT = 'Save';
  const CANCEL_ACTION_TEXT = 'Cancel';
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

  return (
    <div className={`${block}`}>
      <div className={classNames.platter}>
        <h3 className={classNames.title}>{TITLE_TEXT}</h3>
        <p className={classNames.message}>{MESSAGE_TEXT}</p>
        <Button
          componentState={componentState}
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
};

Alert.supportedStates = ['default'];

export default Alert;
