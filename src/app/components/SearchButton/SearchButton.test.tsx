import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './SearchButton';

test('renders Button with test', () => {
  render(<Button>Test me!</Button>);
  expect(screen.getByRole('button').innerHTML).toBe('Test me!');
});

test('calls onClick', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me!</Button>);

  fireEvent.click(screen.getByRole('button'));

  expect(handleClick).toBeCalled();
});
