// @ts-nocheck

import counterReducer from "./counter";
import timerReducer from "./timer";
import allUsersReducer from "./user";
import buttonReducer from "./button";
import allImageReducer from "./image";

import { combineReducers, applyMiddleware, createStore } from "redux";
import { handleActions } from "redux-actions";

import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { createWrapper, HYDRATE } from "next-redux-wrapper";
import type { Context } from "next-redux-wrapper";

import type { ICounterState } from "./counter";
import type { ITimerState } from "./timer";

const rootReducer = combineReducers({
  counterReducer,
  timerReducer,
  allUsersReducer,
  buttonReducer,
  allImageReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// create a makeStore function
const initStore = (context: Context) => {
  const logger = createLogger();
  const middleware = [logger, thunkMiddleware];
  return createStore(reducer, bindMiddleware([...middleware]));
};

// export an assembled wrapper
// @ts-ignore
export const wrapper = createWrapper(initStore, { debug: true });
