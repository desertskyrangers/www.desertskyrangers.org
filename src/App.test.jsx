import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header and footer', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Desert Sky Rangers/i);
  expect(linkElement[0]).toBeInTheDocument();
  expect(linkElement[1]).toBeInTheDocument();
});
