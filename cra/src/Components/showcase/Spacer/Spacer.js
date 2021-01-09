import './Spacer.scss';
import { combineClassNames } from '../../../util/util';

const Spacer = function Spacer({ dimension = 'vertical', className }) {
  const spacerClassName = `Spacer Spacer_${dimension}`;
  const fullClassName = combineClassNames(className, spacerClassName);
  return <div className={fullClassName}></div>;
};

Spacer.supportedStates = ['default'];

export default Spacer;
