import { toSpecificFloor } from "../type"
export const moveToFloor = (floor) => {
    return {
        type: toSpecificFloor,
        payload: floor
    }
}