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
    <div className="container">
      <Display result={total} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };
//   }

// handleClick = (buttonName) => {
//   const dataObject = { ...this.state };
//   if (dataObject.total === 'error') {
//     this.setState(() => ({
//       total: null,
//       next: null,
//       operation: null,
//     }));
//     return;
//   }
//   const { next, operation, total } = calculate(dataObject, buttonName);
//   this.setState(() => (
//     {
//       next,
//       total,
//       operation,
//     }
//   ));
// }

//   render() {
//     const { total } = this.state;
//     return (
//       <div className="container">
//         <Display result={total} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </div>
//     );
//   }
// }
