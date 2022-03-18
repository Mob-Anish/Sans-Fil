import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import {
  userLogin,
  userRegister,
  userInfo,
  unverifiedUserList,
} from "./Reducers/userReducers";
import {
  deviceList,
  applianceLog,
  unverifiedDeviceList,
} from "./Reducers/deviceReducers";

const initialState = {};

const rootReducer = combineReducers({
  userRegister,
  userLogin,
  userInfo,
  deviceList,
  unverifiedDeviceList,
  unverifiedUserList,
  applianceLog,
});

// For redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
