import { createActions } from 'redux-actions';

import * as types from './types';

const actionCreators = createActions({

  [types.DEMO_COUNTER_INCREMENT]: () => ({}),

  [types.DEMO_COUNTER_DECREMENT]: () => ({}),

});

export default actionCreators;