// 我的範例上是簡單採types.js來命名，但當檔案多時通常還會再次拆分
const slideChange = 'slideChange';

const fullOpen = "fullOpen"
const fullClose = "fullClose"

//action用來使menu中的建築團隊重新定位到第二cut的team3 state
const anchorBuildingTeam = "anchor to buildingteam"
// 點擊logo進全螢幕才撥影片
const playVideo = 'play banner video'
// 這裡採node的方式做export/import
module.exports = {
    slideChange,
    fullOpen,
    fullClose,
    anchorBuildingTeam,
    playVideo
};