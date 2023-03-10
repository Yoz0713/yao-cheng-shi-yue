import { fullOpen, fullClose } from "../type";

const initialState = {
    flag: true,

}
// 這部分和useReducer hook是一樣的
export const fullReducer = (state = initialState, action) => {
    switch (action.type) {
        case fullOpen:
            return {
                ...state,
                flag: action.payload

            }

        case fullClose:
            return {
                ...state,
                flag: action.payload

            }

        default:
            return state;
    }
}