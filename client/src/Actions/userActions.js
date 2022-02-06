import * as userConstants from "../Constants/userConstants";
import * as userServices from "../Services/user";
import { handleError } from "../Utils/error";

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
    console.log(err);
    dispatch({
      type: userConstants.USER_REGISTER_FAIL,
      payload: handleError(err),
    });
  }
};
