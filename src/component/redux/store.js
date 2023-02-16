import { combineReducers } from "redux";
import { slideReducer } from "./reducer/slideChange"
const createStore = require('redux').createStore;
const reducers = combineReducers({
    slideReducer,
})

export const store = createStore(reducers)