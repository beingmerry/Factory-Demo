import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Factory Demo Header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Factory Demo/i);
  expect(headerElement).toBeInTheDocument();
});
