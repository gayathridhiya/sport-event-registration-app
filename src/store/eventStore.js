import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import SportsEventApp from '../reducers/eventReducer';

const store =  createStore(SportsEventApp,applyMiddleware(thunkMiddleware));
export default store;