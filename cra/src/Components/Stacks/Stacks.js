import './Stacks.scss';
import React from 'react';
import { makeBemClassNamer, hasChildren } from '../../util/util';

const combineStyles = function combineStyles(styleProp, localStyles) {
  return styleProp ? { ...localStyles, ...styleProp } : localStyles;
};

const isStackType = function isStackType(type) {
  return ['HStack', 'VStack', 'ZStack'].includes(type);
};

const getElementType = function getElementType(element) {
  if (!React.isValidElement(element)) {
    return 'notAReactElement';
  }

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

const isSpacer = function isSpacer(element) {
  return getElementType(element) === 'Spacer';
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

  tweakedChildren = tweakedChildren.map((child, index) => {
    if (React.isValidElement(child)) {
      const existingClassName = child.props.className;
      const isChildResizableHorizontally = checkResizableHorizontally(
        child,
        dimension
      );
      const isChildResizableVertically = checkResizableVertically(
        child,
        dimension
      );
      const resizabilityModifier = getClassNameResizabilityModifier(
        isChildResizableHorizontally,
        isChildResizableVertically
      );
      const spacerClassName = isSpacer(child) ? 'Spacer' : null;
      const containerClassName = [
        `stack-item__container_${resizabilityModifier}`,
        spacerClassName,
      ].join(' ');

      const stackItemClassName = `stack-item__content_${resizabilityModifier}`;
      const newClassName = [existingClassName, stackItemClassName].join(' ');
      const {
        resizableHorizontally,
        resizableVertically,
        resizableFully,
        ...rest
      } = child.props;
      return (
        <div className={containerClassName} key={index}>
          {{
            ...child,
            props: {
              ...rest,
              className: newClassName,
            },
          }}
        </div>
      );
    } else {
      return (
        <div className="stack-item__container_content-sized" key={index}>
          {child}
        </div>
      );
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

  return (
    <div className={stackClassName} style={styleObject}>
      {tweakedChildren}
    </div>
  );
};

const HStack = function HStack(props) {
  return <Stack {...props} dimension="horizontal" />;
};

const VStack = function VStack(props) {
  return <Stack {...props} dimension="vertical" />;
};

const ZStack = function ZStack(props) {
  return <Stack {...props} dimension="depth" />;
};

const Spacer = function Spacer({ dimension = 'vertical', className }) {
  const spacerClassName = `Spacer Spacer_${dimension}`;
  const fullClassName = [className, spacerClassName].join(' ');
  return <div className={fullClassName}></div>;
};

Stack.supportedStates = ['default'];
HStack.supportedStates = ['default'];
VStack.supportedStates = ['default'];
ZStack.supportedStates = ['default'];
Spacer.supportedStates = ['default'];

export { HStack, VStack, ZStack, Spacer };
