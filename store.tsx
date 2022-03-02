// @ts-nocheck

import { useMemo } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./modules";
import { useStore, initializeStore } from "../store";
import { createWrapper } from "next-redux-wrapper";

const configureStore = () => {
  const logger = createLogger();
  const enhancer = compose(
    composeWithDevTools(applyMiddleware(logger, thunkMiddleware))
  );
  const store = createStore(reducers, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: true });

export default wrapper;
