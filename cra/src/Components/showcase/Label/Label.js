import './Label.scss';
import getClassNames from '../../../util/util';

function Label({ componentState }) {
  const LABEL_TEXT = 'Medical ID';

  const block = `Label`;
  const elements = ['text'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);

  return (
    <div className={`${block}`}>
      <div className={classNames.text}>{LABEL_TEXT}</div>
    </div>
  );
}

Label.supportedStates = ['default'];

export default Label;
