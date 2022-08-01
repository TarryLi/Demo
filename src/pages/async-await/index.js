/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import style from './index.module.less';

let count = 0;

export default () => {
  const ref = useRef({});

  useEffect(() => {
    const fn = (arg) => {
      console.log(arg);
      return arg;
    };

    function* generator() {
      console.log('start');
      const res1 = yield fn('y-1');

      console.log(res1);
      const res2 = yield fn('y-2');

      console.log(res2);
      return 4;
    }
    const gen = generator();

    ref.current.gen = gen;

  }, []);

  const next = () => {
    const gen = ref.current.gen;
    const _count = count++;
    console.log('count' + _count);
    console.log(gen.next(_count));
  };

  return <div className={style.wrap}>
    <Button onClick={next}>next</Button>
  </div>;
};
