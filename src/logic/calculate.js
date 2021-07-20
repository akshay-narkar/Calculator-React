import Big from 'big.js';
import operate from './operate';

Big.strict = true;

const calculate = (dataObject, buttonName) => {
  const { operation, total, next } = dataObject;

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['-', '+', '÷', 'x'];
  const newDataObject = { ...dataObject };
  if (buttonName === 'AC') {
    newDataObject.total = null;
    newDataObject.next = null;
    newDataObject.operation = null;
  }
  if (numbers.includes(buttonName)) {
    if (total === null || total === 'error' || operators.includes(total)) {
      newDataObject.total = buttonName;
    } else if (total !== null && next !== null && total === next) {
      newDataObject.total = buttonName;
    } else { newDataObject.total = total + buttonName; }
  }

  if (buttonName === '.') {
    if (total === null || total === next) {
      newDataObject.total = '0'.concat('.');
    } else if (total && total.indexOf(buttonName) === -1) {
      newDataObject.total = total.concat('.');
    }
  }
  if (buttonName === '+/-' && total && parseFloat(total)) {
    const newTotal = Big(total);
    newDataObject.total = newTotal.times(-1).toString();
  }
  if (buttonName === '%' && total && parseFloat(total)) {
    const newTotal = Big(total);
    newDataObject.total = newTotal.div(100).toString();
  }
  if (buttonName === '=' && operation && total && next && !operators.includes(total)) {
    const newTotal = operate(next, total, operation);
    newDataObject.operation = null;
    newDataObject.total = newTotal.toString();
    newDataObject.next = newTotal.toString();
  }

  if (operators.includes(buttonName)) {
    if (operation) {
      newDataObject.operation = buttonName;
      newDataObject.total = buttonName;
    } else {
      newDataObject.operation = buttonName;
      newDataObject.next = total;
      newDataObject.total = buttonName;
    }
  }

  return newDataObject;
};
export default calculate;
