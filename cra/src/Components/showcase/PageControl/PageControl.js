import './PageControl.scss';
import UnsupportedStatePlaceholder from '../../UnsupportedStatePlaceholder/UnsupportedStatePlaceholder';
import getClassNames, { getColorModeClassName } from '../../../util/util';

const PageControl = function PageControl({
  componentState,
  colorModeName,
  numberOfPages = 4,
  currentPage = 3,
  onPreviousPage = () => console.log('onPreviousPage'),
  onNextPage = () => console.log('onNextPage'),
}) {
  const supportedStates = ['default'];
  const isStateSupported = supportedStates.includes(componentState);
  const block = 'PageControl';
  const elements = [
    'sideSpacerLeft',
    'sideSpacerRight',
    'pageIndicatorsContainer',
    'pageIndicatorContainer',
    'pageIndicator',
  ];
  const modifier = componentState;
  const classNames = getClassNames(block, elements, modifier);
  const colorModeClassName = getColorModeClassName(colorModeName);
  const isFirstPageCurrent = currentPage === 0;
  const isLastPageCurrent = currentPage === numberOfPages;

  const updateCurrentPageIfNeeded = function updateCurrentPageIfNeeded({
    elType,
    clickedPageIndex = null,
  }) {
    if (elType === 'sideSpacerLeft' && !isFirstPageCurrent) {
      onPreviousPage();
      return;
    }

    if (elType === 'sideSpacerRight' && !isLastPageCurrent) {
      onNextPage();
      return;
    }

    if (elType === 'pageIndicator' && clickedPageIndex < currentPage) {
      onPreviousPage();
      return;
    }

    if (elType === 'pageIndicator' && clickedPageIndex > currentPage) {
      onNextPage();
      return;
    }
  };

  const handleSideSpacerLeftClick = function handleSideSpacerLeftClick() {
    updateCurrentPageIfNeeded({
      elType: 'sideSpacerLeft',
    });
  };

  const handleSideSpacerRightClick = function handleSideSpacerRightClick() {
    updateCurrentPageIfNeeded({
      elType: 'sideSpacerRight',
    });
  };

  const handlePageIndicatorContainerClick = function handlePageIndicatorContainerClick(
    index
  ) {
    updateCurrentPageIfNeeded({
      elType: 'pageIndicator',
      clickedPageIndex: index,
    });
  };

  const pageIndicators = [...Array(numberOfPages)].map((_, indicatorIndex) => {
    const boundClickHandler = handlePageIndicatorContainerClick.bind(
      null,
      indicatorIndex
    );
    let pageIndicatorClassName = classNames.pageIndicator;
    if (indicatorIndex === currentPage) {
      pageIndicatorClassName = `${pageIndicatorClassName} PageControl__pageIndicator_current`;
    }
    return (
      <div
        className={classNames.pageIndicatorContainer}
        key={indicatorIndex}
        onClick={boundClickHandler}
      >
        <div className={pageIndicatorClassName}></div>
      </div>
    );
  });

  if (isStateSupported) {
    return (
      <div className={`${block} ${colorModeClassName}`}>
        <div
          className={classNames.sideSpacerLeft}
          onClick={handleSideSpacerLeftClick}
        ></div>
        <div className={classNames.pageIndicatorsContainer}>
          {pageIndicators}
        </div>
        <div
          className={classNames.sideSpacerRight}
          onClick={handleSideSpacerRightClick}
        ></div>
      </div>
    );
  } else {
    return <UnsupportedStatePlaceholder colorModeName={colorModeName} />;
  }
};

export default PageControl;
