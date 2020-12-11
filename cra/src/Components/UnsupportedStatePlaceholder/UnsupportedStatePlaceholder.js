import './UnsupportedStatePlaceholder.scss';
import { getColorModeClassName } from '../../util/util';

function UnsupportedStatePlaceholder({ colorModeName }) {
  const block = `UnsupportedStatePlaceholder`;
  const colorModeClassName = getColorModeClassName(colorModeName);

  return <div className={`${block} ${colorModeClassName}`}>Unavailable</div>;
}

export default UnsupportedStatePlaceholder;
