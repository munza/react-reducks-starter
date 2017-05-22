import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from '../state/store';
import { AppLayout } from '../views/layouts';
import { WelcomePage } from '../views/pages';

const history = createBrowserHistory();

function app() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <AppLayout>
          <WelcomePage/>
        </AppLayout>
      </BrowserRouter>
    </Provider>
  );
}

export { default as registerServiceWorker } from './registerServiceWorker';

export default app;
