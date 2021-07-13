import Big from 'big.js';
import operate from './operate';

function calculate(data, button) {
  let { total, next, operation } = data;

  switch (button) {
    case '.':
      Big(total).times(1.0);
      Big(next).times(1.0);
      break;
    case '+/-':
      Big(total).times(-1);
      Big(next).times(-1);
      break;
    case 'AC':
      total = 0;
      next = 0;
      operation = null;
      break;
    case '=':
      total = operate(total, next, operation);
      next = total;
      operation = null;
      break;
    default:
      break;
  }
}

export default calculate;
