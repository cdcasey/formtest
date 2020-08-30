import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';

import { reducer } from './app/store';

export function render(
  ui,
  {
    initialState,
    store = configureStore({ reducer, preloadedState: initialState }),
    ...options
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';
