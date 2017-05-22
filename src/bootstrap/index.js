import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from '../state/store';
import { WelcomePage } from '../views/pages';

const history = createBrowserHistory();

const App = (props) => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <WelcomePage/>
    </BrowserRouter>
  </Provider>
);

export { default as registerServiceWorker } from './registerServiceWorker';

export default App;
