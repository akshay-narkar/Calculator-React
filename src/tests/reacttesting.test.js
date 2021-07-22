import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from '../components/Error';
import Buttonpanel from '../components/ButtonPanel';

describe('Button', () => {
  test('renders Button component', () => {
    render(<Buttonpanel />);
    const sign = screen.getByRole('button', { name: '+/-' });
    const number = screen.getByRole('button', { name: '9' });
    expect(sign).toBeTruthy();
    expect(number).toBeTruthy();
  });
});

describe('Error', () => {
  test('renders error component', () => {
    render(<Error />);
    const error = screen.getByText('Oops! An error occured in rendering!');
    expect(error).toBeTruthy();
  });
});
