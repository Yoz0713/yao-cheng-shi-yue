import { playVideo } from "../type"
export const playBannerVideo = (flag) => {
    return {
        type: playVideo,
        payload: flag
    }
}

