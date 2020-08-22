import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { Counter } from './Counter';
import counterReducer from './counterSlice';

function renderWithRedux() {
  const store = configureStore({ reducer: { counter: counterReducer } });
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

test('Add Async button', async () => {
  renderWithRedux();
  const addButton = screen.getByText(/add async/i);
  const theNumber = screen.getByText(/0/i);
  expect(addButton).toBeInTheDocument();
  fireEvent.click(addButton);
  // await waitFor(() => fireEvent.click(addButton));
  // expect(screen.queryByText(/2/i)).toBeInTheDocument();
  // await waitFor(() => expect(theNumber).toHaveTextContent('2'));
  // await waitFor(() => expect(screen.queryByText(/2/i)).toBeInTheDocument(), {
  //   timeout: 1500,
  // });
  await waitFor(() => expect(theNumber).toHaveTextContent('2'), {
    timeout: 1050,
  });
});

test('Setting custom add amount', () => {
  renderWithRedux();
  const setAmountField = screen.getByLabelText(/set increment amount/i);
  const addButton = screen.getByText(/add amount/i);
  const theNumber = screen.getByText(/0/i);
  user.clear(setAmountField);
  user.type(setAmountField, '4');
  fireEvent.click(addButton);
  expect(theNumber).toHaveTextContent('4');
});

test('Counter adds stuff', () => {});
