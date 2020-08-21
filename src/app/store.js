import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    form: formReducer,
    counter: counterReducer,
  },
});
