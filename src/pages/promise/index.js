/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import MyPromise from './promise';
import style from './index.module.less';

export default () => {
  useEffect(() => {
    // console.log(1);

    // const promise = new MyPromise((resolve, reject) => {
    //   console.log(2);
    //   setTimeout(() => {
    //     resolve('成功');
    //     // reject('失败');
    //     console.log(4);
    //   });
    // });

    // promise.then(res => {
    //   console.log(res);
    //   return 5;
    // }, err => {
    //   console.log(err);
    // }).then(res => {
    //   console.log(res);
    // });

    // console.log(3);

    // promise.catch(err => {
    //   console.log(err);
    // });

    // console.log(promise);

    const promise1 = MyPromise.resolve(3);
    const promise2 = 42;
    const promise3 = new MyPromise((resolve) => {
      setTimeout(() => resolve('foo'), 3000);
    });

    MyPromise.all([promise1, promise2, promise3]).then((values) => {
      console.log(values);
    });
  }, []);

  return <div className={style.wrap}>

  </div>;
};
