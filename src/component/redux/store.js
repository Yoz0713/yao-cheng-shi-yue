import { combineReducers } from "redux";
import { slideReducer } from "./reducer/slideChange"
import { videoReducer } from "./reducer/videoToggle";
import { teamReducer } from "./reducer/buildingTeam";
const createStore = require('redux').createStore;
const reducers = combineReducers({
    slideReducer,
    videoReducer,
    teamReducer
})

export const store = createStore(reducers)