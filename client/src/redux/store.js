// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // combined reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
