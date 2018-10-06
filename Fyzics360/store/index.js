import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import userReducer from './userReducer'

const reducer = combineReducers({
  user: userReducer
})
const middleware = applyMiddleware(logger, thunkMiddleware)

const store = createStore(reducer, middleware)

export default store;