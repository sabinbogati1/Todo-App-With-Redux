import { combineReducers } from 'redux';
import TodoReducer from "./todoReducer";
const rootReducer = combineReducers({
      todoValue: TodoReducer
});

export default rootReducer;
