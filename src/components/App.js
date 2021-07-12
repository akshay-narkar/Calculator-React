import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div>
      <ButtonPanel />
      <br />
      <Display result="25" />
    </div>
  );
}

export default App;
