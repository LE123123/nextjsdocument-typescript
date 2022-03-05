// @ts-nocheck

import { handleActions, createAction } from "redux-actions";
import * as types from "../types";

export const clickSideBar = createAction(types.SIDEBAR_CLICKED);

const initialState: any = {
  sideBarClicked: false,
};

const buttonReducer = handleActions(
  {
    [types.SIDEBAR_CLICKED]: (state) => ({
      ...state,
      sideBarClicked: !state.sideBarClicked,
    }),
  },
  initialState
);

export default buttonReducer;
