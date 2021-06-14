import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Start Button', () => {
  render(<Button />);
  expect(screen.getByRole('button').innerHTML).toBe('Test me!');
});