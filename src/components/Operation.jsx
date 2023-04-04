import '../global-styles/styles.scss';

const Operation = ({ operation, handleOperation }) => {
  return (
    <button
      onClick={() => {
        handleOperation(operation);
      }}
    >
      {operation}
    </button>
  );
};

export default Operation;
