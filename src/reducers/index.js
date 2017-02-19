import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import clients from './clientReducer'

  const rootReducer = combineReducers({
    routing: routerReducer,
    clients
  })

export default rootReducer;
