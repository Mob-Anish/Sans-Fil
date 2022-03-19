import * as userConstants from "../Constants/userConstants";
import * as tokenSystem from "../Services/token";
import * as userServices from "../Services/user";
// import * as deviceServices from "../Services/device";
import { handleError } from "../Utils/error";

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

    const { token, data } = message;

    // Set token in localstorage
    tokenSystem.setToken(token);

    // Set user info in localstorage
    tokenSystem.setUserInfo(data);

    // Set current user data
    dispatch(setCurrentUser(data));

    // Success
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

    const userInfo = await userServices.loginUser(body);

    const { data } = userInfo;

    const { token } = data;

    // Set token in localstorage
    tokenSystem.setToken(token);

    // Set user info in localstorage
    tokenSystem.setUserInfo(data);

    // If user has access token and jwt token
    // if (data.user.accessToken && token) {
    //   dispatch({
    //     type: userConstants.USER_AUTHORIZE,
    //     payload: data,
    //   });

    //   return dispatch({
    //     type: userConstants.USER_AUTH_SUCCESS,
    //     payload: message,
    //   });
    // }

    //If user is admin
    if (data.role === "admin" && token) {
      dispatch({
        type: userConstants.IS_ADMIN,
        payload: data,
      });

      return dispatch({
        type: userConstants.USER_AUTH_SUCCESS,
        payload: data,
      });
    }

    // If user has only jwt token
    if (token) {
      // Set current user data
      dispatch(setCurrentUser(data));

      dispatch({
        type: userConstants.USER_AUTH_SUCCESS,
        payload: data,
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

// Buy product
// export const buyProduct = () => async (dispatch) => {
//   try {
//     const message = await deviceServices.buyProduct();

//     const { data } = message;

//     console.log(data);

//     if (data.user.accessToken) {
//       dispatch({
//         type: userConstants.USER_AUTHORIZE,
//         payload: data,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// Fetch unverified user list
export const getUnverifiedUser = () => async (dispatch) => {
  try {
    dispatch({ type: userConstants.UNVERIFIED_USERLIST_FETCH_START });

    const unverifiedUser = await userServices.getUnverifiedUsers();

    const { data } = unverifiedUser;

    dispatch({
      type: userConstants.UNVERIFIED_USERLIST_FETCH_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: userConstants.UNVERIFIED_USERLIST_FETCH_FAIL,
      payload: handleError(err),
    });
  }
};

// Grant arduino token to user
export const grantArduinoToken = (userId) => async (dispatch) => {
  try {
    const body = {
      arduinoToken: "03DE11F42DF93724B745A5F3F6DB001A",
    };

    const verifiedUser = await userServices.grantArduinoToken(body, userId);

    dispatch({ type: userConstants.UNVERIFIED_USER_UPDATE, payload: userId });
  } catch (err) {
    console.log(err);
  }
};
