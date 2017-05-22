import React from 'react';
import { render } from 'react-dom';

import App, { registerServiceWorker } from './bootstrap';

render(<App />, document.getElementById('root'));

registerServiceWorker();
