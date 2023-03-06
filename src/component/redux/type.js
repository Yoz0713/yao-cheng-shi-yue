// 我的範例上是簡單採types.js來命名，但當檔案多時通常還會再次拆分
const slideChange = 'slideChange';

const videoStart = "videoStart"
const videoStop = "videoStop"

//action用來使menu中的建築團隊重新定位到第二cut的team3 state
const anchorBuildingTeam = "anchor to buildingteam"

// 這裡採node的方式做export/import
module.exports = {
    slideChange,
    videoStart,
    videoStop,
    anchorBuildingTeam,

};