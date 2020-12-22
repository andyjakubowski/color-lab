import './IconButton.scss';
import { makeBemClassNamer } from '../../../util/util.js';
import { ReactComponent as CalendarSvg } from './calendar.svg';

const IconButton = function IconButton({ componentState: modifier }) {
  const block = 'IconButton';
  const bem = makeBemClassNamer(block);
  return (
    <div className={`${block} ${block}_${modifier}`}>
      <button className={bem('container')}>
        <CalendarSvg className={bem('icon')} />
        {/* <Icon iconName="square.and.pencil" className={bem('icon')} /> */}
      </button>
    </div>
  );
};

IconButton.supportedStates = [
  'default',
  'hovered',
  'focused',
  'pressed',
  'disabled',
];

export default IconButton;
