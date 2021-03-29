import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';
import logger from "redux-logger/src";
import promise from "redux-promise-middleware";

const store = createStore(rootReducer, applyMiddleware(promise, thunk, logger));

export default store;
