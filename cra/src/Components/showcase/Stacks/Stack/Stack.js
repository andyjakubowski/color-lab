import './Stack.scss';
import React from 'react';
import { hasChildren } from '../../../../util/util';

const checkIsStretchable = function checkIsStretchable(child) {
  if (typeof child !== 'object') {
    return false;
  } else {
    return (
      child.type.name === 'Spacer' || child.props.hasStretchableDescendants
    );
  }
};

const isStretchableContainer = function isStretchableContainer(reactEl) {
  return ['HStack', 'VStack', 'ZStack'].includes(reactEl.type.name);
};

const childrenWithHasStretchableDescendants = function childrenWithHasStretchableDescendants(
  children
) {
  return children.map((child) => {
    if (hasChildren(child)) {
      const childrenArray = React.Children.toArray(child.props.children);
      const newChildren = childrenWithHasStretchableDescendants(childrenArray);
      const newProps = {
        ...child.props,
        children: newChildren,
      };
      if (isStretchableContainer(child)) {
        newProps.hasStretchableDescendants = newChildren.some(
          checkIsStretchable
        );
      }
      return {
        ...child,
        props: {
          ...newProps,
        },
      };
    } else {
      return child;
    }
  });
};

const getClassName = function getClassName(
  dimension,
  hasStretchableDescendants
) {
  const classNameForDimension = function classNameForDimension(dimension) {
    switch (dimension) {
      case 'horizontal':
        return 'HStack';
      case 'vertical':
        return 'VStack';
      case 'depth':
        return 'ZStack';
      default:
        console.warn(`Stack didn’t recognize dimension ${dimension}`);
    }
  };

  const baseClass = classNameForDimension(dimension);
  const stretchableModifierClass = hasStretchableDescendants
    ? `${baseClass}_stretchable`
    : '';

  return `${baseClass} ${stretchableModifierClass}`;
};

const Stack = function Stack({
  children,
  dimension,
  alignment = 'center',
  spacing = '0',
  padding = '0',
  hasStretchableDescendants = null,
  ...props
}) {
  const childrenArray = React.Children.toArray(children);

  let tweakedChildren;

  if (hasStretchableDescendants === null) {
    tweakedChildren = childrenWithHasStretchableDescendants(childrenArray);
    hasStretchableDescendants = tweakedChildren.some(checkIsStretchable);
  } else {
    tweakedChildren = childrenArray;
  }

  tweakedChildren = tweakedChildren.map((child) => {
    if (typeof child !== 'object') {
      return child;
    } else {
      return {
        ...child,
        props: {
          ...child.props,
          dimension,
        },
      };
    }
  });
  const styleObject = {
    '--spacing': `${spacing}px`,
    '--alignment': `var(--alignment-${alignment})`,
    '--padding': `${padding}px`,
  };

  const classNameStr = getClassName(dimension, hasStretchableDescendants);
  return (
    <div className={classNameStr} style={styleObject}>
      {tweakedChildren}
    </div>
  );
};

Stack.supportedStates = ['default'];

export default Stack;
