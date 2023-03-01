// 我的範例上是簡單採types.js來命名，但當檔案多時通常還會再次拆分
const slideChange = 'slideChange';
const videoStart = "videoStart"
const videoStop = "videoStop"
// 這裡採node的方式做export/import
module.exports = {
    slideChange,
    videoStart,
    videoStop
};