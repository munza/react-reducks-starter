import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as reducers from './ducks';
import middlewares from './middlewares';
import initialState from './initialState';

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  middlewares,
);

export default store;