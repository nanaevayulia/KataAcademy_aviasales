import { configureStore, combineReducers } from '@reduxjs/toolkit';

import filterReducer from './filter-reducer';

const reducer = combineReducers({
  filterReducer,
});
const store = configureStore({ reducer });
export default store;
