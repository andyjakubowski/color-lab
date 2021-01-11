import './Stack.scss';
import React from 'react';
import {
  makeBemClassNamer,
  hasChildren,
  isObject,
  combineClassNames,
  has,
} from '../../../../util/util';

const combineStyles = function combineStyles(styleProp, localStyles) {
  return styleProp ? { ...localStyles, ...styleProp } : localStyles;
};

const isStackType = function isStackType(type) {
  return ['HStack', 'VStack', 'ZStack'].includes(type);
};

const getElementType = function getElementType(element) {
  if (!isObject(element)) {
    return 'nonObject';
  }

  // const resizableHorizontally = element.props.resizableHorizontally === 'true' || !!element.props.resizableHorizontally
  // const resizableVertically = element.props.resizableVertically === 'true' || !!element.props.resizableVertically

  // if (resizableHorizontally && resizableVertically) {
  //   return 'resizableFully';
  // } else if (resizableHorizontally) {
  //   return 'resizableHorizontally';
  // } else if (resizableVertically) {
  //   return 'resizableVertically';
  // }

  switch (element.type.name) {
    case 'Spacer':
      return 'Spacer';
    case 'HStack':
      return 'HStack';
    case 'VStack':
      return 'VStack';
    case 'ZStack':
      return 'ZStack';
    default:
      return 'other';
  }
};

const checkResizableHorizontally = function checkResizableHorizontally(
  element,
  dimension
) {
  if (!React.isValidElement(element)) {
    return false;
  }

  if (element.type.name === 'Spacer' && dimension === 'horizontal') {
    return true;
  }

  return (
    element.props.resizableHorizontally === 'true' ||
    !!element.props.resizableHorizontally ||
    !!element.props.resizableFully
  );
};

const checkResizableVertically = function checkResizableVertically(
  element,
  dimension
) {
  if (!React.isValidElement(element)) {
    return false;
  }

  if (element.type.name === 'Spacer' && dimension === 'vertical') {
    return true;
  }

  return (
    element.props.resizableVertically === 'true' ||
    !!element.props.resizableVertically ||
    !!element.props.resizableFully
  );
};

const childrenWithStretchableDescendantProps = function childrenWithStretchableDescendantProps(
  children,
  dimension
) {
  const getChild = function getChild(child) {
    const type = getElementType(child);
    switch (type) {
      case 'Spacer':
        return {
          ...child,
          props: {
            ...child.props,
            dimension,
          },
        };
      default:
        return child;
    }
  };

  const isStack = function isStack(element) {
    const type = getElementType(element);
    return isStackType(type);
  };

  const getDimension = function getDimension(stackElement) {
    const type = getElementType(stackElement);
    switch (type) {
      case 'HStack':
        return 'horizontal';
      case 'VStack':
        return 'vertical';
      case 'ZStack':
        return 'depth';
      default:
        return 'none';
    }
  };

  return children.map((child) => {
    if (hasChildren(child)) {
      const childrenArray = React.Children.toArray(child.props.children);
      const childDimension = isStack(child) ? getDimension(child) : dimension;
      const newChildren = childrenWithStretchableDescendantProps(
        childrenArray,
        childDimension
      );
      const newProps = {
        ...child.props,
        children: newChildren,
      };

      if (isStack(child)) {
        newProps.resizableHorizontally = newChildren.some((child) =>
          checkResizableHorizontally(child, childDimension)
        );
        newProps.resizableVertically = newChildren.some((child) =>
          checkResizableVertically(child, childDimension)
        );
        newProps.isResizabilitySet = true;
      }

      return {
        ...child,
        props: {
          ...newProps,
        },
      };
    } else {
      return getChild(child);
    }
  });
};

const getClassNameResizabilityModifier = function getClassNameResizabilityModifier(
  isResizableHorizontally,
  isResizableVertically,
  prefix = null
) {
  const prefixPart = prefix === null ? '' : `${prefix}-`;
  if (isResizableHorizontally && isResizableVertically) {
    return `${prefixPart}resizable-fully`;
  } else if (isResizableHorizontally) {
    return `${prefixPart}resizable-horizontally`;
  } else if (isResizableVertically) {
    return `${prefixPart}resizable-vertically`;
  } else {
    return `${prefixPart}content-sized`;
  }
};

const Stack = function Stack({
  children,
  dimension,
  alignment = 'center',
  spacing = '0',
  padding = '0',
  isResizabilitySet = null,
  resizableHorizontally,
  resizableVertically,
  className,
  style: styleProp,
  ...props
}) {
  const isTopLevelStack = isResizabilitySet === null;
  const childrenArray = React.Children.toArray(children);

  let tweakedChildren;
  let isTopLevelStackResizableHorizontally = false;
  let isTopLevelStackResizableVertically = false;
  let stackClassNameBemModifier;

  if (isTopLevelStack) {
    tweakedChildren = childrenWithStretchableDescendantProps(
      childrenArray,
      dimension
    );
    isTopLevelStackResizableHorizontally = tweakedChildren.some((child) =>
      checkResizableHorizontally(child, dimension)
    );
    isTopLevelStackResizableVertically = tweakedChildren.some((child) =>
      checkResizableVertically(child, dimension)
    );
  } else {
    tweakedChildren = childrenArray;
  }

  tweakedChildren = tweakedChildren.map((child) => {
    if (isObject(child)) {
      const existingClassName = child.props.className;
      const isChildResizableHorizontally = checkResizableHorizontally(
        child,
        dimension
      );
      const isChildResizableVertically = checkResizableVertically(
        child,
        dimension
      );
      const bemModifier = getClassNameResizabilityModifier(
        isChildResizableHorizontally,
        isChildResizableVertically
      );

      const stackItemClassName = `stack-item_${bemModifier}`;
      const newClassName = combineClassNames(
        existingClassName,
        stackItemClassName
      );
      const {
        resizableHorizontally,
        resizableVertically,
        resizableFully,
        ...rest
      } = child.props;
      return {
        ...child,
        props: {
          ...rest,
          className: newClassName,
        },
      };
    } else {
      return child;
    }
  });
  const localStyle = {
    '--spacing': `${spacing}px`,
    '--alignment': `var(--alignment-${alignment})`,
    '--padding': `${padding}px`,
  };
  const styleObject = combineStyles(styleProp, localStyle);

  const bemBlock = 'Stack';
  const bem = makeBemClassNamer(bemBlock);

  if (isTopLevelStack) {
    stackClassNameBemModifier = getClassNameResizabilityModifier(
      isTopLevelStackResizableHorizontally,
      isTopLevelStackResizableVertically,
      'top-level'
    );
  }

  const stackClassName = [
    className,
    bemBlock,
    bem(null, stackClassNameBemModifier),
    bem(null, dimension),
  ].join(' ');

  const wrappedChildren = tweakedChildren.map((child, index) => {
    const hasClassName =
      React.isValidElement(child) && has(child.props, 'className');
    if (hasClassName) {
      return (
        <div className={child.props.className} key={index}>
          {child}
        </div>
      );
    } else {
      return (
        <div className="stack-item_content-sized" key={index}>
          {child}
        </div>
      );
    }
  });

  return (
    <div className={stackClassName} style={styleObject}>
      {wrappedChildren}
    </div>
  );
};

Stack.supportedStates = ['default'];

export default Stack;
