import { combineReducers } from "redux";
import authReducer from "./authReducer";
import showsReducer from "./showsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  shows: showsReducer
});

export default rootReducer;