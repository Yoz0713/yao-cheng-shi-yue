import { fullOpen, fullClose } from "../type"
export const fullActive = () => {
    return {
        type: fullOpen,
        payload: true
    }
}
export const fullNotActive = () => {
    return {
        type: fullClose,
        payload: false
    }
}