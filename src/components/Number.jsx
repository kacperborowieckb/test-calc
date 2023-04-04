import '../global-styles/styles.scss';

const NumberComponent = ({ number, setResult }) => {
  return <button onClick={() => setResult(number)}>{number}</button>;
};

export default NumberComponent;
