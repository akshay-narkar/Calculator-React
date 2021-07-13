import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function App() {
  const data = { total: '20', next: '5', operation: '+' };

  const buttonname = '+/-';

  calculate(data, buttonname);

  return (
    <>
      <ButtonPanel />
      <br />
      <Display result="25" />
    </>
  );
}

export default App;
