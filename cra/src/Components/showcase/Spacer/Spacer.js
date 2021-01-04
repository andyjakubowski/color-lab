import './Spacer.scss';

const Spacer = function Spacer({ dimension = 'vertical' }) {
  console.log(`Spacer: I’m a ${dimension} spacer`);
  const classNameStr = `Spacer Spacer_${dimension}`;
  return <div className={classNameStr}></div>;
};

Spacer.supportedStates = ['default'];

export default Spacer;
