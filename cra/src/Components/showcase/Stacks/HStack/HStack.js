import React from 'react';
import Stack from '../Stack/Stack';

const HStack = function HStack(props) {
  return <Stack {...props} dimension="horizontal" />;
};

HStack.supportedStates = ['default'];

export default HStack;
