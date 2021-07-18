import Big from 'big.js';
import operate from './operate';

function calculate(data, button) {
  const { total, next, operation } = data;
  const data1 = {
    total1: total,
    next1: next,
    operation1: operation,
    nonoperation: null,
    decimal: null,
  };

  switch (true) {
    case button === '.':
      data1.next1 = '.';
      data1.decimal = true;
      return data1;
    case button === '+/-':
      if (data1.next1) {
        data1.next1 = Big(data1.next1).times(-1);
        data1.nonoperation = true;
      }
      return data1;
    case button === 'AC':
      data1.total1 = null;
      data1.next1 = null;
      data1.operation1 = null;
      data1.nonoperation = null;
      return data1;
    case button === '=':
      if (data1.total1 && data1.operation1 && data1.next1 !== '') {
        data1.total1 = operate(data1.total1, data1.next1, data1.operation1);
        data1.next1 = data1.total1;
        data1.operation1 = null;
      } else {
        data1.next1 = '';
      }
      return data1;
    case button >= 0 && button <= 10:
      data1.next1 = button;
      data1.operation1 = null;
      return data1;
    default:
      if (data1.next1 !== '' && data1.next1 !== null) {
        if (data1.operation1 && data1.total1) {
          data1.total1 = operate(data1.total1, data1.next1, data1.operation1);
          data1.next1 = data1.total1;
          data1.operation1 = button;
        } else if ((data1.operation1 || data1.operation1 == null) && button === '%') {
          data1.operation1 = '%';
          data1.total1 = data1.next1;
          data1.total1 = operate(data1.total1, data1.next1, data1.operation1);
          data1.next1 = data1.total1;
          data1.operation1 = null;
        } else if (data1.operation1) {
          data1.total1 = 'xyz';
          data1.next1 = data1.total1;
          data1.operation1 = button;
        } else if (data1.operation1 == null) {
          data1.operation1 = button;
          data1.total1 = data1.next1;
          data1.next1 = '';
        }
      }

      return data1;
  }
}

export default calculate;
