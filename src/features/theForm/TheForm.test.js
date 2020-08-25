import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import TheForm from './TheForm';

function ReduxWrapper({ children }) {
  const store = configureStore({ reducer: { form: formReducer } });
  return <Provider store={store}>{children}</Provider>;
}

const renderWithWrapper = (ui, options) =>
  render(ui, { wrapper: ReduxWrapper, ...options });

describe('The Form', () => {
  it('should render', () => {
    renderWithWrapper(<TheForm />);
    const el = screen.queryByText(/first name/i);
    expect(el).toBeInTheDocument();
    screen.debug();
  });
});
