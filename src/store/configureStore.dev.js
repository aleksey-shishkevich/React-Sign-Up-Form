import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
//import DevTools from '../containers/DevTools';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

/**
 * Entirely optional, this tiny library adds some functionality to
 * your DevTools, by logging actions/state to your console. Used in
 * conjunction with your standard DevTools monitor gives you great
 * flexibility!
 */
const logger = createLogger();

// Create a history of your choosing (we're using a browser history in this case)

import history from './history';

const middleware = routerMiddleware(history);

const finalCreateStore = composeWithDevTools(
  // Middleware you want to use in development:
  applyMiddleware(logger, thunk, middleware)//,
  // Required! Enable Redux DevTools with the monitors you chose
 // DevTools.instrument()
)(createStore);

module.exports = function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
};
