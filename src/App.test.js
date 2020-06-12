import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  const { getByText } = render(<App title='The GitHub Cards App' />);
  const appTitle = getByText(/The GitHub Cards App/i);
  expect(appTitle).toBeInTheDocument();
});

test('renders a card', () => {
  const { getByText } = render(<App />);
  const nameElement = getByText(/Name/i);
  expect(nameElement).toBeInTheDocument();
  const companyElement = getByText(/Company/i);
  expect(companyElement).toBeInTheDocument();
  const reposElement = getByText(/Public Repos/i);
  expect(reposElement).toBeInTheDocument();
});
