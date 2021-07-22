import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  const [state, setState1] = useState({
    total: null,
    next: null,
    operaion: null,
  });

  const handleClick = (buttonName) => {
    const dataObject = { ...state };

    if (dataObject.total === 'error') {
      setState1({
        total: null,
        next: null,
        operation: null,
      });
      return;
    }

    const { next, operation, total } = calculate(dataObject, buttonName);
    setState1({
      next,
      operation,
      total,
    });
  };
  const { total } = state;
  return (
    <div className="calcclass">
      <h5 className="calclefttext">Let’s do some math!</h5>

      <div className="container">
        <Display result={total} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
}

export default App;
