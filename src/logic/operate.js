import Big from 'big.js';

function operate(numberone, numbertwo, operation) {
  const numberOne = Big(numberone);
  const numberTwo = Big(numbertwo);
  let x = 0;
  switch (operation) {
    case '%':
      x = numberOne.div(100);
      return x.toString();
    case '/':
      if (numberTwo.toString() === '0') {
        return 'Divide by 0 Error';
      }
      x = numberOne.div(numberTwo);
      return x.toString();
    case 'X':
      x = numberOne.times(numberTwo);
      return x.toString();
    case '+':
      x = numberOne.plus(numberTwo);
      return x.toString();
    case '-':
      x = numberOne.minus(numberTwo);
      return x.toString();

    default:
      return 'Symbol not recognized';
  }
}

export default operate;
