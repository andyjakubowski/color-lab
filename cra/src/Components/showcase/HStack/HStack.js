import './HStack.scss';

const HStack = function HStack({ children, alignment, spacing = '0' }) {
  const alignmentClassName = !!alignment ? `HStack_${alignment}` : '';
  return (
    <div
      className={`HStack ${alignmentClassName}`}
      style={{ '--spacing': spacing }}
    >
      {children}
    </div>
  );
};

HStack.supportedStates = ['default'];

export default HStack;
