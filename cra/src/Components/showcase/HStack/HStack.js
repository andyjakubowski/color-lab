import './HStack.scss';
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
      return {
        ...child,
        props: {
          ...child.props,
          children: newChildren,
          hasStretchableDescendants: newChildren.some(
            checkHasStretchableDescendants
          ),
        },
      };
    } else {
      return child;
    }
  });
};

const HStack = function HStack({
  children,
  alignment = 'center',
  spacing = '0',
  funnyName,
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
    '--spacing': spacing,
    '--alignment': `--alignment-${alignment}`,
  };
  const classNameStr = `HStack ${
    hasStretchableDescendants ? 'HStack_stretchable' : ''
  }`;
  return (
    <div className={classNameStr} style={styleObject}>
      {tweakedChildren}
    </div>
  );
};

HStack.supportedStates = ['default'];

export default HStack;
