import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
// redux-logger catches the action, console logs it out,
// and moves it along to action creator

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
