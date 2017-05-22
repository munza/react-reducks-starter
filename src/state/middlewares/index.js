import { applyMiddleware } from 'redux';

import reduxDevtoolsWrapper from './reduxDevTools';

const middlewares = [];

const composedMiddlewares = reduxDevtoolsWrapper(
  applyMiddleware(...middlewares),
);

export default composedMiddlewares;

