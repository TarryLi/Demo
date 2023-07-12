import * as pubsub from './pubsub';
import * as req from './req';
import * as url from './url';
import * as route from './route';

export {
  pubsub,
  req,
  url,
  route
};

// 防抖
export function debounce(func, delay = 120) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 节流
export function throttle(func, delay = 120) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    func.apply(this, args);
    timer = setTimeout(() => {
      timer = null;
    }, delay);
  };
}