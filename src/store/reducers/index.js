import { combineReducers } from 'redux';
import UserReducer from './User';

const rootReducer = combineReducers({
  User: UserReducer,
});

export default rootReducer;
