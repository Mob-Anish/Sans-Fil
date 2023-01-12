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
  scheduleLog,
} from "./Reducers/deviceReducers";

const initialState = {};

const rootReducer = combineReducers({
  userRegister,
  userLogin,
  userInfo,
  deviceList,
  applianceLog,
  scheduleLog,
  unverifiedDeviceList,
  unverifiedUserList,
});

// For redux dev tools
const composeEnhancers =
  (process.env.REACT_APP_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
