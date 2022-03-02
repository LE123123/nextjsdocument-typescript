// @ts-nocheck

import { createAction, handleActions } from "redux-actions";
import * as types from "../types";

export interface ITimerState {
  lastUpdate: number;
  light: boolean;
}

const initialTimerState: ITimerState = {
  lastUpdate: 0,
  light: false,
};

export const TICK = createAction(types.TICK, (light: boolean) => ({
  light,
  ts: Date.now(),
}));

export const TICK2 = createAction(
  types.TICK2,
  (content) => "was set in other page" + content
);

const timerReducer = handleActions(
  {
    [types.TICK]: (state, { payload }) => ({
      lastUpdate: payload.ts,
      light: !!payload.light,
    }),
    [types.TICK2]: (state, { payload }) => ({
      ...state,
      payload,
    }),
  },
  initialTimerState
);

export const serverRenderClock = () => (dispatch) => {
  dispatch(TICK(false));
};

export const startClock = () => (dispatch) => {
  console.log("start clock!!");
  setInterval(() => {
    dispatch(TICK(true));
  }, 1000);
};
export default timerReducer;
