import { createAction, handleActions } from "redux-actions";
import * as types from "../types";

export interface ICounterState {
  counter: number;
}

const initialCounterState: ICounterState = {
  counter: 0,
};

const counterReducer = handleActions(
  {
    [types.INCREMENT]: ({ counter }: ICounterState, { payload }) => ({
      counter: counter + 1,
    }),
    [types.DECREMENT]: ({ counter }: ICounterState, { payload }) => ({
      counter: counter - 1,
    }),
    [types.RESET]: () => ({
      counter: 0,
    }),
  },
  initialCounterState
);

export const incrementCount = createAction(types.INCREMENT);
export const decrementCount = createAction(types.DECREMENT);
export const resetCount = createAction(types.RESET);

export default counterReducer;
