## react-reducks-starter

A react starter package built with the following packages.
```json
{
  "create-react-app": "^1.3.1",
  "history": "^4.6.1",
  "lodash": "^4.17.4",
  "react": "^15.5.4",
  "react-dom": "^15.5.4",
  "react-redux": "^5.0.5",
  "react-router-dom": "^4.1.1",
  "react-router-redux": "next",
  "redux": "^3.6.0",
  "redux-actions": "^2.0.3",
  "redux-devtools-extension": "^2.13.2"
}
```

### Installation
- **SSH**: `git clone git@github.com:munza/react-reducks-starter.git`
- **HTTPS**: `git clone https://github.com/munza/react-reducks-starter.git`
- `cd <project>`
- `yarn`
- `yarn run start`

### Usage
- **Commands**
    - `yarn run start`
    - `yarn run test`
    - `yarn run build`
- **Page**
    - Create and edit page under `views/pages` folder. (eg. `views/pages/DemoPage`)
    - Add `export { default as DemoPage } from './pages/Demo'` at `views/pages/index.js` file.
- **Route**
    - Add route definition at `routes/index.js` file.
    ```js
    import { DemoPage } from '../views/pages';
    
    const routes = [
      // ...
      {
        path: '/demo',
        name: 'demo',
        component: DemoPage,
        exact: true,
      },
      // ...
    ];
    
    export default routes;
    ```
- **State/Ducks**
    - Add new folder under `state/ducks` directory.


- **Actions Types**
    - Add action types at `state/ducks/<state>/types.js`
    ```
    export const DEMO_ACTION = 'DEMO/ACTION';
    ```
    
    
- **Action Creators**
    - Add action creators at `state/ducks/<state>/actions.js`
    ```js
    import { createActions } from 'redux-actions';
    
    import types from './types';
    
    const actions = createActions({
    
      [types.DEMO_ACTION]: () => ({}),
    
    });
    
    export default actions;
    ```
    
    
- **Action Handlers/Reducers**
    - Add action handlers/reducers at `state/ducks/<state>/reducers.js`
    ```js
    import { handleActions } from 'redux-actions';
    
    import types from './types';
    
    const initialState = {};
    
    const reducers = handleActions({
    
      [types.DEMO_ACTION]: (state, action) => ({
        ...state,
        // state changes
      }),
    
    }, initialState);
    
    export default reducers;
    ```
    
    
- **Operations**
    - Add operations and side-effects at `state/ducks/<state>/operations.js`
    ```js
    import actions from './actions';
    import store from '../../store';
    
    export const demoAction = actions.demo.action;
    
    // this will only work after integrating redux-thunk as middleware
    export const demoActionSideEffect = topic => dispatch => {
      store.dispatch(demoAction());
    
      // all the side effects
    };
    ```
    
    
- **Register Ducks**
    - Register operations and reducers at `state/ducks/<state>/index.js`
    ```js
    import reducer from './reducers';
    import * as demoOperations from './operations';
  
    export { demoOperations };
    
    export default reducer;
    ```
    - Register ducks reducers at `state/ducks/index.js`
    ```js
    export { default as demo } from './demo';
    ```
    
    
- **Register States**
    - Register states at `views/pages/Demo/index.js`
    ```js
    const matchStateToProps = (state) => ({
      demo: state.demo,
    });
    ```
- **Register Operations**
    - Register operations at `views/pages/Demo/index.js`
    ```js
    import { bindActionCreators } from 'redux';

    import { demoOperations } from '../../../state/ducks/demo';
    
    const matchDispatchToProps = (dispatch) => (
      bindActionCreators(demoOperations, dispatch)
    );
    ```
    
    
- **Data/API Calls/Side Effects**
    - Add files/folders under `data` directory to put all the side effect operations and call them inside `state/ducks/<state>/operations.js` file.

### Extra
- Create components under `components` directory to when you want to reuse it in multiple pages.
- Create layouts under `views/layouts` directory and add a logical expression to dynamically select layout at `bootstrap/index.js`
- Create partials to request views in multiple pages. (eg, navbar, header, footer etc.)

### Issues
- Feel free to report/open any issue.

### License
MIT