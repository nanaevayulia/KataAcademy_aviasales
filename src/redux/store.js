import { configureStore, combineReducers, compose, applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import filterReducer from './filter-reducer';
import apiReducer from './api-reducer';

const reducer = combineReducers({
  filterReducer,
  apiReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = configureStore({ reducer }, composeEnhancers(applyMiddleware(thunk)));
export default store;
