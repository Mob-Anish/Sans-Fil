import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { userLogin, userRegister, userInfo } from "./Reducers/userReducers";

const initialState = {};

const rootReducer = combineReducers({
  userLogin,
  userRegister,
  userInfo,
});

// For redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
