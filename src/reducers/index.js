import { combineReducers } from 'redux';
import main from './main';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const rootReducer = combineReducers({
  main,
  router: routerReducer
});

export default rootReducer;
