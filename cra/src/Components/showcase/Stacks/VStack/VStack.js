import React from 'react';
import Stack from '../Stack/Stack';

const VStack = function VStack(props) {
  return <Stack {...props} dimension="vertical" />;
};

VStack.supportedStates = ['default'];

export default VStack;
