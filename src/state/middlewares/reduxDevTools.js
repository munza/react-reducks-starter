import { composeWithDevTools } from 'redux-devtools-extension';

const reduxDevToolsWrapper = process.env.NODE_ENV !== 'production'
  ? composeWithDevTools
  : middlewares => middlewares;

export default reduxDevToolsWrapper;