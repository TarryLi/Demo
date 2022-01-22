/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import style from './index.module.less';

let startTime = 0;
let count1 = 0;
let count2 = 0;

let timer = null;

export default () => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);

  const fixed = () => {
    count2 += 1;
    const offset = new Date().getTime() - (startTime + count2 * 1000);
    let nextTime = 1000 - offset;
    if (nextTime < 0) nextTime = 0;
    setTimeout(fixed, nextTime);

    setTwo(new Date().getTime() - (startTime + count2 * 1000));
  };

  const nofixed = () => {
    count1 += 1;
    setOne(new Date().getTime() - (startTime + count1 * 1000));
  };

  useEffect(() => {
    startTime = new Date().getTime();

    setInterval(nofixed, 1000);

    setTimeout(fixed, 1000);
  }, []);

  const addEvent = () => {
    timer = setInterval(() => {
      let i = 0;
      while (i++ < 100000000);
    }, 0);
  };

  const deleteEvent = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  return <div className={style.wrap}>
    <p>
      正常interval误差:
      <span>{one}</span>
      ms
    </p>
    <p>
      矫正interval误差:
      <span>{two}</span>
      ms
    </p>
    <button type="button" onClick={addEvent}>添加任务干扰</button>
    <button type="button" onClick={deleteEvent}>删除任务干扰</button>
  </div>;
};
