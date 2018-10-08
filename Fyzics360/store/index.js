import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './userReducer';
import loginReducer from './loginReducer';

const reducer = combineReducers({
  user: userReducer,
  login: loginReducer,
});
const middleware = applyMiddleware(logger, thunkMiddleware);

const store = createStore(reducer, middleware);

export default store;
