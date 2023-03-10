import { playVideo } from "../type";

const initialState = {
    flag: false,
}
// 這部分和useReducer hook是一樣的
export const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case playVideo:
            return {
                ...state,
                flag: action.payload
            }

        default:
            return state;
    }
}

