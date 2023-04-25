/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import style from './index.module.less';

export default () => {
  const [times, setTimes] = useState(0);

  useEffect(() => {
    // function rafCallback(timestamp) {
    //   const start = new Date().getTime();
    //   while (new Date().getTime() - start < 2) {}
    //   window.requestAnimationFrame(rafCallback);
    // }
    // window.requestAnimationFrame(rafCallback);

    // function timeoutCallback() {
    //   setTimeout(timeoutCallback, 0);
    // }
    // setTimeout(timeoutCallback, 0);

    // const timeout = 1000;
    // function workLoop(deadline) {
    //   while (deadline.timeRemaining() > 0 || deadline.didTimeout) {}
    //   requestIdleCallback(workLoop, { timeout });
    // }
    // requestIdleCallback(workLoop, { timeout });

    // const channel = new MessageChannel();
    // const port = channel.port2;
    // function work() {
    //   port.postMessage(null);
    // }
    // channel.port1.onmessage = work;
    // port.postMessage(null);

    let count = 0;
    function mymicrotask() {
      Promise.resolve(1).then((res) => {
        count++;
        if (count < 100000) {
          mymicrotask();
        }
      });
    }
    function rafCallback(timestamp) {
      mymicrotask();
      count = 0;
      window.requestAnimationFrame(rafCallback);
    }
    window.requestAnimationFrame(rafCallback);
  }, []);

  const startWork = () => {
    let works = [];
    for (let i = 0; i < 3000; i++) {
      works.push(() => {
        const start = performance.now();
        const time = Math.random();
        while (performance.now() - start < time) { }
      });
    }

    const yieldInterval = 5; // 单位毫秒
    const startTime = new Date().getTime();
    const channel = new MessageChannel();
    const port = channel.port2;

    const workLoop = () => {
      const currentEventStartTime = new Date().getTime();
      let work = works.shift();
      while (work) {
        work();
        // 执行完当前工作，则判断时间是否超过5ms，如果超过，则退出while循环
        if (new Date().getTime() - currentEventStartTime > yieldInterval) {
          // 执行耗时超过了5ms，结束本轮事件，主动让出控制权给浏览器绘制页面或者执行其他操作
          break;
        }
        work = works.shift();
      }
      // 如果还有剩余的工作，则放到下一个事件中处理
      if (works.length) {
        port.postMessage(null);
      } else {
        const endTime = new Date().getTime();
        setTimes(endTime - startTime);
      }
    };

    channel.port1.onmessage = workLoop;
    port.postMessage(null);
  };

  return <div className={style.wrap}>
    <button onClick={startWork}>perform work</button>
    <div className={style.animation}>{times}</div>
  </div>;
};
