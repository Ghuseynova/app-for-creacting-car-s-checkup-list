import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import appReducer from './reducer';

const saveState = (state: any) => {
  try {
    const serialisedState = JSON.stringify(state);

    window.localStorage.setItem('app_state', serialisedState);
  } catch (error) {
    // console.log(error)
  }
};

const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem('app_state');

    if (!serialisedState) return undefined;

    return JSON.parse(serialisedState);
  } catch (error) {
    return undefined;
  }
};

const oldState = loadState();

const store = createStore(
  appReducer,
  oldState,
  composeWithDevTools(applyMiddleware(logger)),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
