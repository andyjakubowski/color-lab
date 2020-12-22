import './SystemButton.scss';
import { makeBemClassNamer } from '../../../util/util.js';

const SystemButton = function SystemButton({
  componentState: modifier,
  title = 'Button',
}) {
  const block = 'SystemButton';
  const bem = makeBemClassNamer(block);
  return (
    <div className={`${block} ${block}_${modifier}`}>
      <button className={bem('container')}>
        <span className={bem('titleLabel')}>{title}</span>
      </button>
    </div>
  );
};

SystemButton.supportedStates = [
  'default',
  'hovered',
  'focused',
  'pressed',
  'disabled',
];

export default SystemButton;
