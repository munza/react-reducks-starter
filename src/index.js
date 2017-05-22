import { render } from 'react-dom';

import app, { registerServiceWorker } from './bootstrap';

render(app(), document.getElementById('root'));

registerServiceWorker();
