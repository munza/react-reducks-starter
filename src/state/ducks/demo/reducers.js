import { handleActions } from 'redux-actions';

import * as types from './types';

const initialState = {
  count: 0,
};

const reducers = handleActions({

  [types.DEMO_COUNTER_INCREMENT]: (state, action) => ({
    ...state,
    count: state.count + 1,
  }),

  [types.DEMO_COUNTER_DECREMENT]: (state, action) => ({
    ...state,
    count: state.count > 0 ? state.count - 1 : 0,
  }),

}, initialState);

export default reducers;

