// //节流函数
// function throttle(callback, timeFrame = 1000) {
//   let lastTime = 0
//   return function () {
//     let nowTime = Date.now()
//     if (nowTime - lastTime > timeFrame) {
//       lastTime = nowTime
//       callback()
//     }
//   }
// }

function throttle(callback, timeFrame) {
  let waiting = true
  return function () {
    if (waiting) {
      callback()
      setTimeout(() => {
        waiting = true
      }, timeFrame)
    }
    waiting = false
  }


}

//防抖函数
function debounce(callback, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback()
    }, delay)
  }

}

export {throttle, debounce}