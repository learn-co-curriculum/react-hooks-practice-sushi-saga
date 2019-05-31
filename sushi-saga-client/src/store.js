import { createStore, combineReducers } from 'redux';
import menuReducer from './reducers/menuReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  order: orderReducer
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);