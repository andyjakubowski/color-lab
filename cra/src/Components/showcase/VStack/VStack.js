import './VStack.scss';
import React from 'react';
import { hasChildren } from '../../../util/util';

const checkHasStretchableDescendants = function checkHasStretchableDescendants(
  child
) {
  if (typeof child !== 'object') {
    return false;
  } else {
    return (
      child.type.name === 'Spacer' || child.props.hasStretchableDescendants
    );
  }
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
      if (child.type.name === 'VStack') {
        newProps.hasStretchableDescendants = newChildren.some(
          checkHasStretchableDescendants
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

const VStack = function VStack({
  children,
  alignment = 'center',
  spacing = '0',
  padding = '0',
  hasStretchableDescendants = null,
}) {
  const childrenArray = React.Children.toArray(children);

  let tweakedChildren;

  if (hasStretchableDescendants === null) {
    tweakedChildren = childrenWithHasStretchableDescendants(childrenArray);
    hasStretchableDescendants = tweakedChildren.some(
      checkHasStretchableDescendants
    );
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
          dimension: 'horizontal',
        },
      };
    }
  });
  const styleObject = {
    '--spacing': `${spacing}px`,
    '--v-alignment': `var(--alignment-${alignment})`,
    '--padding': `${padding}px`,
  };
  const classNameStr = `VStack ${
    hasStretchableDescendants ? 'VStack_stretchable' : ''
  }`;
  return (
    <div className={classNameStr} style={styleObject}>
      {tweakedChildren}
    </div>
  );
};

VStack.supportedStates = ['default'];

export default VStack;
