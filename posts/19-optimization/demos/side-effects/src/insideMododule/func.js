
const unuseArrowFunc = () => {
  console.log('没有用的箭头函数');
}

const usedArrowFunc = () => {
  console.log('被导出的方法用到的箭头函数');
}

function unuseFunc () {
  console.log('没有用的普通函数');
}

function usedFunc () {
  console.log('被导出的方法用到的普通函数');
}

function exportedFunc() {
  console.log('导出的函数');
  usedArrowFunc();
  usedFunc();
}

export {
  exportedFunc
}

export default exportedFunc;