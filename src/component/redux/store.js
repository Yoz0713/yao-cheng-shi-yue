import { combineReducers } from "redux";
import { slideReducer } from "./reducer/slideChange"
import { fullReducer } from "./reducer/full";
import { teamReducer } from "./reducer/buildingTeam";
import { videoReducer } from "./reducer/playVideo";
import { floorReducer } from "./reducer/productFloorNav";
const createStore = require('redux').createStore;
const reducers = combineReducers({
    slideReducer,
    fullReducer,
    videoReducer,
    teamReducer,
    floorReducer
})

export const store = createStore(reducers)