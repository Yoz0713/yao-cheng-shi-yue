import { combineReducers } from "redux";
import { slideReducer } from "./reducer/slideChange"
import { videoReducer } from "./reducer/videoToggle";
const createStore = require('redux').createStore;
const reducers = combineReducers({
    slideReducer,
    videoReducer
})

export const store = createStore(reducers)