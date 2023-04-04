import { useState } from 'react';
import '../global-styles/styles.scss';
import Clear from './Clear';
import Equal from './Equal';
import NumberComponent from './Number';
import Operation from './Operation';

const Calculator = () => {
  const initialState = {
    currentProblem: '',
    result: '',
    operation: '',
  };

  const [state, setState] = useState({ ...initialState });

  const setResult = (content) => {
    setState({
      ...state,
      result: state.result + content,
    });
  };

  const calculate = () => {
    let result;
    let first = Number(state.currentProblem.slice(0, -1));
    let second = Number(state.result);
    switch (state.operation) {
      case '+':
        result = first + second;
        break;
      case '*':
        result = first * second;
        break;
      case '-':
        result = first - second;
        break;
      case '/':
        if (second !== 0) {
          result = first / second;
        } else {
          setState({
            ...state,
            result: 'Error..',
          });
          setTimeout(() => {
            setState({
              ...initialState,
            });
          }, 1000);
        }
        break;
    }

    if (typeof result === 'number') {
      setState({
        currentProblem: state.currentProblem + state.result + '=',
        result: result.toString(),
        operation: '',
      });
    }
  };

  const handleOperation = (operation) => {
    if (state.operation !== '') {
      calculate();
      setState((prevState) => {
        return { currentProblem: prevState.result + operation, result: '', operation: operation };
      });
    } else {
      setState({
        currentProblem: state.result + operation,
        result: '',
        operation: operation,
      });
    }
  };

  const handleClear = (operation) => {
    switch (operation) {
      case 'C':
        setState({
          ...initialState,
        });
        break;
      case 'CE':
        setState({
          ...state,
          result: '',
        });
        break;
      case 'BS':
        setState({
          ...state,
          result: state.result.slice(0, -1),
        });
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="calculator__top-section">
        <div className="calculator__current-problem">{state.currentProblem}</div>
        <div className="calculator__result">{state.result}</div>
      </div>

      <Clear operation="C" handleClear={handleClear} />
      <Clear operation="CE" handleClear={handleClear} />
      <Clear operation="BS" handleClear={handleClear} />
      <Operation operation="+" handleOperation={handleOperation} />
      <NumberComponent number={1} setResult={setResult} />
      <NumberComponent number={2} setResult={setResult} />
      <NumberComponent number={3} setResult={setResult} />
      <Operation operation="-" handleOperation={handleOperation} />
      <NumberComponent number={4} setResult={setResult} />
      <NumberComponent number={5} setResult={setResult} />
      <NumberComponent number={6} setResult={setResult} />
      <Operation operation="*" handleOperation={handleOperation} />
      <NumberComponent number={7} setResult={setResult} />
      <NumberComponent number={8} setResult={setResult} />
      <NumberComponent number={9} setResult={setResult} />
      <Operation operation="/" handleOperation={handleOperation} />
      <button
        onClick={() => {
          console.log(state);
        }}
      >
        :D
      </button>
      <NumberComponent number={0} setResult={setResult} />
      <Equal calculate={calculate} />
    </div>
  );
};

export default Calculator;
