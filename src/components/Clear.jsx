import '../global-styles/styles.scss';

const Clear = ({ operation, handleClear }) => {
  return <button onClick={() => handleClear(operation)}>{operation}</button>;
};

export default Clear;
