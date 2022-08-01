/* eslint-disable @typescript-eslint/no-use-before-define */
class MyPromise {
  static PENDING = 'pending';

  static FULFILLED = 'fulfilled';

  static REJECTED = 'rejected';

  constructor(handle) {
    this.PromiseState = MyPromise.PENDING;
    this.PromiseResult = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    try {
      handle(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(value) {
    if (this.PromiseState === MyPromise.PENDING) {
      setTimeout(() => {
        this.PromiseState = MyPromise.FULFILLED;
        this.PromiseResult = value;
        this.onFulfilledCallbacks.forEach(callback => {
          callback(value);
        });
      });
    }
  }

  reject(reason) {
    if (this.PromiseState === MyPromise.PENDING) {
      setTimeout(() => {
        this.PromiseState = MyPromise.REJECTED;
        this.PromiseResult = reason;
        this.onRejectedCallbacks.forEach(callback => {
          callback(reason);
        });
      });
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
      throw reason;
    };

    const promise2 = new MyPromise((resolve, reject) => {
      if (this.PromiseState === MyPromise.FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.PromiseResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      } else if (this.PromiseState === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.PromiseResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      } else if (this.PromiseState === MyPromise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulfilled(this.PromiseResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.PromiseResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
    });

    return promise2;
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  /**
   * finally
   * @param {*} callBack 无论结果是fulfilled或者是rejected，都会执行的回调函数
   * @returns 
   */

  finally(callBack) {
    return this.then(callBack, callBack);
  }

  /**
   * Promise.resolve()
   * @param {[type]} value 要解析为 Promise 对象的值 
   */
  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    } else if (typeof value === 'object' && 'then' in value) {
      return new MyPromise((resolve, reject) => {
        value.then(resolve, reject);
      });
    }

    return new MyPromise((resolve) => {
      resolve(value);
    });
  }

  /**
   * myPromise.reject
   * @param {*} reason 表示Promise被拒绝的原因
   * @returns 
   */
  static reject(reason) {
    return new MyPromise((_, reject) => {
      reject(reason);
    });
  }

  /**
   * Promise.all
   * @param {iterable} promises 一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入
   * @returns 
   */
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if (Array.isArray(promises)) {
        if (promises.length === 0) {
          return resolve(promises);
        }

        let count = 0;
        let result = [];

        promises.forEach((item, index) => {
          MyPromise.resolve(item).then(value => {
            count++;
            result[index] = value;
            count === promises.length && resolve(result);
          }, reason => {
            reject(reason);
          });
        });
      } else {
        return reject(new TypeError('Argument is not iterable'));
      }
    });
  }

  /**
  * Promise.race()
  * @param {iterable} promises 可迭代对象，类似Array。详见 iterable。
  * @returns 
  */
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      if (Array.isArray(promises)) {
        if (promises.length > 0) {
          return promises.forEach((item) => {
            MyPromise.resolve(item).then(resolve, reject);
          });
        }
      } else {
        return reject(new TypeError('Argument is not iterable'));
      }
    });
  }

}

/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }

  if (x instanceof MyPromise) {
    if (x.PromiseState === MyPromise.PENDING) {
      x.then(y => {
        resolvePromise(promise2, y, resolve, reject);
      }, reject);
    } else if (x.PromiseState === MyPromise.FULFILLED) {
      resolve(x.PromiseResult);
    } else if (x.PromiseState === MyPromise.REJECTED) {
      rejected(x.PromiseResult);
    }
  } else if (x !== null && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
      var then = x.then;
    } catch (error) {
      reject(error);
    }

    if (typeof then === 'function') {
      let called = false;

      try {
        then.call(x, y => {
          if (called) return;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, r => {
          if (called) return;
          called = true;
          reject(r);
        });
      } catch (error) {
        if (called) return;
        called = true;
        reject(error);
      }
    } else {
      resolve(x);
    }

  } else {
    return resolve(x);
  }
}

export default MyPromise;