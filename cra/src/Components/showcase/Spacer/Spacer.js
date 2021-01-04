import './Spacer.scss';

const Spacer = function Spacer({ dimension = 'vertical' }) {
  const classNameStr = `Spacer Spacer_${dimension}`;
  return <div className={classNameStr}></div>;
};

Spacer.supportedStates = ['default'];

export default Spacer;
