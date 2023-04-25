export function mixin(...args) {
  return function (constructor) {
    for (let arg of args) {
      for (let key of Object.getOwnPropertyNames(arg.prototype)) {
        if (key === 'construct') continue;
        Object.defineProperty(constructor.prototype, key, Object.getOwnPropertyDescriptor(arg.prototype, key));
      }
    }
  };
}