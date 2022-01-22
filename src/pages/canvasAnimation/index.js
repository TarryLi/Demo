/* eslint-disable max-len */
import React, { useEffect } from 'react';
import style from './index.module.less';

let reqId = null;

export default () => {
  useEffect(() => {
    function draw() {
      const ctx = document.getElementById('canvas').getContext('2d');
      ctx.clearRect(0, 0, 1000, 800); // 清空画布

      ctx.save(); // 保存初始状态

      const time = new Date();
      ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
      ctx.font = '40px Microsoft YaHei';
      ctx.fillText('fsfsf', 300, 300);
      ctx.restore();

      reqId = window.requestAnimationFrame(draw);
    }

    reqId = window.requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(reqId);
    };
  }, []);

  return <div className={style.wrap}>
    <canvas id="canvas" width="1500" height="800"></canvas>
  </div>;
};
