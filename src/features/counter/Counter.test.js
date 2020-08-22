import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../app/store';
import { Counter } from './Counter';

function renderWithRedux() {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

test('+ & - buttons', () => {
  renderWithRedux();
  const addButton = screen.getByText(/\+/i);
  const subtractButton = screen.getByText(/-/i);
  const theNumber = screen.getByText(/0/i);
  expect(addButton).toBeInTheDocument();
  fireEvent.click(addButton);
  expect(theNumber).toHaveTextContent('1');
  fireEvent.click(subtractButton);
  expect(theNumber).toHaveTextContent('0');
});

test('Add Amount button', () => {
  renderWithRedux();
  const addButton = screen.getByText(/add amount/i);
  const theNumber = screen.getByText(/0/i);
  expect(addButton).toBeInTheDocument();
  fireEvent.click(addButton);
  expect(theNumber).toHaveTextContent('2');
});

test('Setting custom add amount', () => {
  renderWithRedux();
  const setAmountField = screen.getByLabelText(/set increment amount/i);

  //   const addButton = screen.getByText(/add amount/i);
  const theNumber = screen.getByText(/0/i);
  //   expect(addButton).toBeInTheDocument();
  //   fireEvent.click(addButton);
  //   expect(theNumber).toHaveTextContent("2");
});

test('Counter adds stuff', () => {});
