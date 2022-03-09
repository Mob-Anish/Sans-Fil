import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { userLogin, userRegister, userInfo } from "./Reducers/userReducers";
import { deviceList, applianceLog } from "./Reducers/deviceReducers";

const initialState = {};

const rootReducer = combineReducers({
  userLogin,
  userRegister,
  userInfo,
  deviceList,
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
