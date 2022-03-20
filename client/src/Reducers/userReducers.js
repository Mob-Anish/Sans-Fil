import * as userConstants from "../Constants/userConstants";

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
};

export const userLogin = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_AUTH_START:
      return {
        loading: true,
      };
    case userConstants.USER_AUTH_SUCCESS:
      return {
        userInfo: action.payload,
        success: true,
        isAuthenticated: true,
      };
    case userConstants.USER_AUTH_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.RESET:
      return {
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export const userRegister = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_START:
      return {
        loading: true,
      };
    case userConstants.USER_REGISTER_SUCCESS:
      return {
        message: action.payload,
        success: true,
        isAuthenticated: true,
      };
    case userConstants.USER_REGISTER_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.USER_REGISTER_RESET:
      return {};

    default:
      return state;
  }
};

export const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.SET_CURRENT_USER:
      return {
        userInfo: action.payload,
        isAuthenticated: true,
      };

    case userConstants.USER_AUTHORIZE:
      return {
        userInfo: action.payload,
        isAuthorized: true,
      };

    case userConstants.IS_ADMIN:
      return {
        userInfo: action.payload,
        isAdmin: true,
        isAuthenticated: true,
      };

    case userConstants.USER_INFO_RESET:
      return {
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export const unverifiedUserList = (state = { users: [] }, action) => {
  switch (action.type) {
    case userConstants.UNVERIFIED_USERLIST_FETCH_START:
      return {
        loading: true,
      };
    case userConstants.UNVERIFIED_USERLIST_FETCH_SUCCESS:
      return {
        users: action.payload,
        count: action.payload.length,
        success: true,
      };
    case userConstants.UNVERIFIED_USER_UPDATE:
      const userId = action.payload;
      const orgUsers = state.users;

      orgUsers.forEach((el, i, arr) => {
        if (el._id == userId) {
          arr.splice(i, 1);
        }
      });

      return {
        users: orgUsers,
        count: orgUsers.length,
      };
    case userConstants.UNVERIFIED_USERLIST_FETCH_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userDelete = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_DELETE_START:
      return {
        loading: true,
      };
    case userConstants.USER_DELETE_SUCCESS:
      return {
        success: true,
      };
    case userConstants.USER_DELETE_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.USER_DELETE_RESET:
      return {};

    default:
      return state;
  }
};

export const userUpdate = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_EDIT_START:
      return {
        loading: true,
      };
    case userConstants.USER_EDIT_SUCCESS:
      return {
        success: true,
      };
    case userConstants.USER_EDIT_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.USER_EDIT_RESET:
      return {};

    default:
      return state;
  }
};

export const getUser = (state = { user: {} }, action) => {
  switch (action.type) {
    case userConstants.USER_FETCH_START:
      return {
        loading: true,
      };
    case userConstants.USER_FETCH_SUCCESS:
      return {
        success: true,
        user: action.payload,
      };
    case userConstants.USER_FETCH_FAIL:
      return {
        error: action.payload,
      };
    case userConstants.USER_FETCH_RESET:
      return {};

    default:
      return state;
  }
};
