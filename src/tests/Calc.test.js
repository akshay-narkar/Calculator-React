import calculate from '../logic/calculate';

let state;
let object;

beforeAll(() => {
  state = { operation: null, total: null, next: null };
});

describe('Calling the calculation function & testing the conditions with different buttons and object',
  () => {
    test('Calling with Button AC', () => {
      state = { operation: 1, total: 1, next: 1 };
      state = calculate(state, 'AC');
      object = { operation: null, total: null, next: null };
      expect(state).toEqual(object);
      expect(state).not.toEqual({ operation: 1, total: 1, next: 1 });
    });

    test('Calling with Button .', () => {
      state = { operation: 1, total: null, next: 1 };
      state = calculate(state, '.');
      object = { operation: 1, total: '0.', next: 1 };
      expect(state).toEqual(object);
      expect(state).not.toEqual({ operation: 1, total: 1, next: 1 });
    });

    test('Calling with Button . and total not null', () => {
      state = { operation: 1, total: '1', next: 2 };
      state = calculate(state, '.');
      object = { operation: 1, total: '1.', next: 2 };
      expect(state).toEqual(object);
      expect(state).not.toEqual({ operation: 1, total: 1, next: 1 });
    });

    test('Calling with Button . and total not null', () => {
      state = { operation: 1, total: '1', next: 2 };
      state = calculate(state, '.');
      object = { operation: 1, total: '1.', next: 2 };
      expect(state).toEqual(object);
      expect(state).not.toEqual({ operation: 1, total: 1, next: 1 });
    });

    test('Calling with Button +/- ', () => {
      state = { operation: 1, total: '1', next: 2 };
      state = calculate(state, '+/-');
      object = { operation: 1, total: '-1', next: 2 };
      expect(state).toEqual(object);
      expect(state).not.toEqual({ operation: 1, total: 1, next: 1 });
    });

    test('Calling with Button % ', () => {
      state = { operation: 1, total: '100', next: 2 };
      state = calculate(state, '%');
      object = { operation: 1, total: '1', next: 2 };
      expect(state).toEqual(object);
      expect(state).not.toEqual({ operation: 1, total: 1, next: 1 });
    });

    test('Calling with a number & total is null', () => {
      state = { operation: 1, total: null, next: 2 };
      state = calculate(state, '9');
      object = { operation: 1, total: '9', next: 2 };
      expect(state).toEqual(object);
      expect(state).not.toEqual({ operation: 1, total: 1, next: 1 });
    });

    test('Calling with a number & total == next', () => {
      state = { operation: 1, total: 2, next: 2 };
      state = calculate(state, '9');
      object = { operation: 1, total: '9', next: 2 };
      expect(state).toEqual(object);
      expect(state).not.toEqual({ operation: 1, total: 1, next: 1 });
    });

    test('Calling with a number & total == next', () => {
      state = { operation: 1, total: 3, next: 2 };
      state = calculate(state, '9');
      object = { operation: 1, total: '39', next: 2 };
      expect(state).toEqual(object);
      expect(state).not.toEqual({ operation: 1, total: 1, next: 1 });
    });

    test('Calling with a =', () => {
      state = { operation: '+', total: 3, next: 2 };
      state = calculate(state, '=');
      object = { operation: null, total: '5', next: '5' };
      expect(state).toEqual(object);
      expect(state).not.toEqual({ operation: 1, total: 1, next: 1 });
    });

    test('Calling with a operator if operator is set', () => {
      state = { operation: '+', total: 3, next: 2 };
      state = calculate(state, '-');
      object = { operation: '-', total: '-', next: 2 };
      expect(state).toEqual(object);
      expect(state).not.toEqual({ operation: 1, total: 1, next: 1 });
    });

    test('Calling with a operator if operator is not set', () => {
      state = { operation: null, total: 3, next: 2 };
      state = calculate(state, '-');
      object = { operation: '-', total: '-', next: 3 };
      expect(state).toEqual(object);
      expect(state).not.toEqual({ operation: 1, total: 1, next: 1 });
    });
  });
