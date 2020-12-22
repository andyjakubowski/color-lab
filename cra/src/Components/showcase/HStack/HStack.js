import './HStack.scss';

const HStack = function HStack({
  children,
  alignment = 'center',
  spacing = '0',
}) {
  return (
    <div
      className={`HStack HStack_${alignment}`}
      style={{ '--spacing': spacing }}
    >
      {children}
    </div>
  );
};

HStack.supportedStates = ['default'];

export default HStack;
