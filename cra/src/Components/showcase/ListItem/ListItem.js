import './ListItem.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';

function ListItem({ componentState, colorModeName }) {
  const TITLE_TEXT = 'Title';
  const SUBTITLE_TEXT = 'Subtitle';
  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);
  const block = 'ListItem';
  const elements = ['container', 'separator', 'content', 'title', 'subtitle'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={`${block} ${colorModeClassName}`}>
        <div className={classNames.container}>
          <div className={classNames.separator}></div>
          <div className={classNames.content}>
            <div className={classNames.title}>{TITLE_TEXT}</div>
            <div className={classNames.subtitle}>{SUBTITLE_TEXT}</div>
          </div>
        </div>
      </div>
    );
  } else {
    returnElement = (
      <UnsupportedStatePlaceholder colorModeName={colorModeName} />
    );
  }

  return returnElement;
}

export default ListItem;
