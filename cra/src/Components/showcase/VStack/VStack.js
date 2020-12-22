import './VStack.scss';

const VStack = function VStack({ children, alignment, spacing = '0' }) {
  const alignmentClassName = !!alignment ? `VStack_${alignment}` : '';
  return (
    <div
      className={`VStack ${alignmentClassName}`}
      style={{ '--spacing': spacing }}
    >
      {children}
    </div>
  );
};

VStack.supportedStates = ['default'];

export default VStack;
