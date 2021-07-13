import Big from 'big.js';

function operate(numberone, numbertwo, operation) {
  const numberOne = Big(numberone);
  const numberTwo = Big(numbertwo);
  switch (operation) {
    case '%':
      return numberOne.div(100);
    case '/':
      return numberOne.div(numberTwo);
    case 'X':
      return numberOne.times(numberTwo);
    case '+':
      return numberOne.plus(numberTwo);
    case '-':
      return numberOne.minus(numberTwo);
    default:
      return 'Symbol not recognized';
  }
}

export default operate;
