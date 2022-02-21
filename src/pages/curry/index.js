/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import style from './index.module.less';

/**
* 中转函数
* @param fn    待柯里化的原函数
* @param len   所需的参数个数
* @param args  已接收的参数列表
*/
function _curry(fn, len, ...args) {
  return function (...params) {
    const _args = [...args, ...params];
    if (_args.length >= len) {
      return fn.apply(this, _args);
    }
    return _curry.call(this, fn, len, ..._args);
  };
}

/**
 * 将函数柯里化
 * @param fn    待柯里化的原函数
 * @param len   所需的参数个数，默认为原函数的形参个数
 */
function curry(fn, len = fn.length) {
  return _curry.call(this, fn, len);
}

export default () => {
  const func = (a, b, c, d, e) => [a, b, c, d, e];

  const _fn = curry(func);

  return <div className={style.wrap}>
    {_fn(1, 2, 3, 4, 5)}
    {_fn(1)(2)(3, 4, 5)}
  </div>;
};
