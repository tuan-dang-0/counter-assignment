import { getByRole, getByTestId, render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const countMessage = screen.getByText(/Count/i);
  expect(countMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = Number(screen.getByTestId("count").textContent);
  expect(count).toBe(0);
});

test('clicking + increments the count', () => {
  const increment = screen.getByRole("button", {name: "+" });
  const countBefore = Number(screen.getByTestId("count").textContent);
  expect(countBefore).toBe(0);
  fireEvent.click(increment);
  const countAfter = Number(screen.getByTestId("count").textContent);
  expect(countAfter).toBe(1);
});

test('clicking - decrements the count', () => {
  const decrement = screen.getByRole("button", {name: "-" });
  const countBefore = Number(screen.getByTestId("count").textContent);
  expect(countBefore).toBe(0);
  fireEvent.click(decrement);
  const countAfter = Number(screen.getByTestId("count").textContent);
  expect(countAfter).toBe(-1);
});
