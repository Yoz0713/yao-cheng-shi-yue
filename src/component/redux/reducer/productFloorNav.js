import { toSpecificFloor } from "../type";

const initialState = {
    floor: "0",
}
// 這部分和useReducer hook是一樣的
export const floorReducer = (state = initialState, action) => {
    switch (action.type) {
        case toSpecificFloor:
            return {
                ...state,
                floor: action.payload
            }

        default:
            return state;
    }
}