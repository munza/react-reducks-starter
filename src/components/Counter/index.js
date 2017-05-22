import React from 'react';

import './styles.css';

const Counter = (props) => (
  <div>
    <button className="counter-button" onClick={props.decrement}>-</button>
    <span className="counter-count">{props.count}</span>
    <button className="counter-button" onClick={props.increment}>+</button>
  </div>
);

export default Counter;