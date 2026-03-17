import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /we craft modern digital products that scale with your business/i,
  });
  expect(heading).toBeInTheDocument();
});
