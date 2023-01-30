import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement.closest('a')).toHaveAttribute('href', 'https://create-react-app.dev/docs/running-tests/');
});

test('renders news section title', () => {
  render(<App />);
  const titleElement = screen.getByText('News');
  expect(titleElement).toBeInTheDocument();
});