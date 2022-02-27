import * as userConstants from "../Constants/userConstants";
import * as tokenSystem from "../Services/token";
import * as userServices from "../Services/user";
import { handleError } from "../Utils/error";
import { setAuthToken } from "../Utils/setAuthToken";

// Register action
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_REGISTER_START });

    const body = {
      name,
      email,
      password,
    };

    const message = await userServices.registerUser(body);

    dispatch({
      type: userConstants.USER_REGISTER_SUCCESS,
      payload: message,
    });
  } catch (err) {
    dispatch({
      type: userConstants.USER_REGISTER_FAIL,
      payload: handleError(err),
    });
  }
};

// Login action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_AUTH_START });

    const body = {
      email,
      password,
    };

    const message = await userServices.loginUser(body);

    const { token, data } = message;

    console.log(data);

    // Set token in localstorage
    tokenSystem.setToken(message);

    // Set token to Auth header
    setAuthToken(token);

    // If user has access token and jwt token
    if (data.user.accessToken && token) {
      dispatch({
        type: userConstants.USER_AUTHORIZE,
        payload: data,
      });

      return dispatch({
        type: userConstants.USER_AUTH_SUCCESS,
        payload: message,
      });
    }

    // If user is admin
    if (data.user.role === "admin" && token) {
      dispatch({
        type: userConstants.IS_ADMIN,
        payload: data,
      });

      return dispatch({
        type: userConstants.USER_AUTH_SUCCESS,
        payload: message,
      });
    }

    // If user has only jwt token
    if (token) {
      // Set current user data
      dispatch(setCurrentUser(data));

      dispatch({
        type: userConstants.USER_AUTH_SUCCESS,
        payload: message,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: userConstants.USER_AUTH_FAIL,
      payload: handleError(err),
    });
  }
};

export const logout = () => (dispatch) => {
  tokenSystem.removeToken();
  setAuthToken(false);
  dispatch({ type: userConstants.USER_INFO_RESET });
  dispatch({ type: userConstants.RESET });
};

// Set logged in user
export const setCurrentUser = (data) => {
  return {
    type: userConstants.SET_CURRENT_USER,
    payload: data,
  };
};

export const buyProduct = () => (dispatch) => {
  try {
    const message = await userServices.buyProduct();

    const { data } = message;

    if (data.user.accessToken) {
      dispatch(setCurrentUser(data));
    }
  } catch (err) {
    console.Consolelog(err);
  }
};
