import React from 'react';
import './Counter.css';

const Counter = ({ value, onChange }) => {
  const handleIncrement = () => onChange(value + 1);
  const handleDecrement = () => onChange(value - 1);

  return (
    <div className="counter">
      <button className="counter-button" onClick={handleDecrement}>-</button>
      <span className="counter-value">{value}</span>
      <button className="counter-button" onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;