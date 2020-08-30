import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import counterReducer from '../features/counter/counterSlice';

export const reducer = {
  form: formReducer,
  counter: counterReducer,
};

export default configureStore({
  reducer,
});
