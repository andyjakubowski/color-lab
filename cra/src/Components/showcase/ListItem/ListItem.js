import './ListItem.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames from '../../../util/util';

function ListItem({ componentState, appearanceData }) {
  const TITLE_TEXT = 'Title';
  const SUBTITLE_TEXT = 'Subtitle';
  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);
  const block = 'ListItem';
  const elements = ['container', 'separator', 'content', 'title', 'subtitle'];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);

  let returnElement;

  if (isStateSupported) {
    returnElement = (
      <div className={classNames.container} style={appearanceData}>
        <div className={classNames.separator}></div>
        <div className={classNames.content}>
          <div className={classNames.title}>{TITLE_TEXT}</div>
          <div className={classNames.subtitle}>{SUBTITLE_TEXT}</div>
        </div>
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

export default ListItem;
