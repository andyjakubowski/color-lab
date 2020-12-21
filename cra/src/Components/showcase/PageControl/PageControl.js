import './PageControl.scss';
import getClassNames from '../../../util/util';

const PageControl = function PageControl({
  componentState,
  numberOfPages = 4,
  currentPageIndex = 3,
  onPreviousPage = () => console.log('onPreviousPage'),
  onNextPage = () => console.log('onNextPage'),
}) {
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
  const isFirstPageCurrent = currentPageIndex === 0;
  const isLastPageCurrent = currentPageIndex + 1 === numberOfPages;

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

    if (elType === 'pageIndicator' && clickedPageIndex < currentPageIndex) {
      onPreviousPage();
      return;
    }

    if (elType === 'pageIndicator' && clickedPageIndex > currentPageIndex) {
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
    if (indicatorIndex === currentPageIndex) {
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

  return (
    <div className={`${block}`}>
      <div
        className={classNames.sideSpacerLeft}
        onClick={handleSideSpacerLeftClick}
      ></div>
      <div className={classNames.pageIndicatorsContainer}>{pageIndicators}</div>
      <div
        className={classNames.sideSpacerRight}
        onClick={handleSideSpacerRightClick}
      ></div>
    </div>
  );
};

PageControl.supportedStates = ['default'];

export default PageControl;
