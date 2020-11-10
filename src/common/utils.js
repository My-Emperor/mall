//工具类
// 防抖动方法 通过计时器在判断在短时间内不触发刷新 delay--延时 , func--方法
export function debounce(funce, delay) {
  //timer用于判断是否是第一次进入且带计时器
  let timer = null;
  return function (...args) {
    //不为null 则清空计时器 刷新一次
    if (timer) clearTimeout(timer);
    //为null 表名的第一次进入 设置计时器
    timer = setTimeout(() => {
      funce.apply(this, args)
    }, delay)
  }
};
