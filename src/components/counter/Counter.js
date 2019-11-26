import React from 'react';
import Header from './Header';
import Incrementor from './Incrementor';
import Decrementor from './Decrementor';

function Counter() {

  const initialValue = 0;
  const [currentValue, setValue] = React.useState(initialValue);

  const handleIncrement = () => {
    setValue(currentValue + 1);
  };

  const handleDecrement = () => {
    setValue(currentValue - 1);
  };

  const resetValue = () => {
    setValue(0);
  };

  return (
    <div className="counter">
      <div>
        <Header valueThreshold={2} currentValue={currentValue} />
        <div>Incrementor/Decrementor ({initialValue})</div>
        <Incrementor  onIncrement={handleIncrement} />
        <Decrementor  onDecrement={handleDecrement} />
        <button onClick={resetValue}>reset</button>
        <h2>{currentValue}</h2>
      </div>
    </div>
  );
}

export default Counter;
