import { render, screen } from '@testing-library/react';
import { App } from '../App';

it(`Renders 'Learn React' link`, () => {
  render(<App />);
  const linkElement = screen.getByText(/pop movies/i);
  expect(linkElement).toBeInTheDocument();
});
