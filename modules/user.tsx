// @ts-nocheck

import { handleActions } from "redux-actions";
import * as types from "../types";
import axios from "axios";

export interface IUserState {
  users: Object[];
  error: string;
}

const initialUserState: IUserState = {
  users: [],
  error: null,
};

const allUsersReducer = (state = { users: [] }, { type, payload }) => {
  switch (type) {
    case types.ALL_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
      };
    case types.ALL_USERS_FAIL:
      return {
        ...state,
        error: payload,
      };
    case types.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: types.ALL_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.ALL_USERS_FAIL,
      payload: error.response.data,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: types.CLEAR_ERRORS,
  });
};

export default allUsersReducer;
