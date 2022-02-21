/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

export default () => {
  let start;

  function step(timestamp) {
    const raf = document.getElementById('raf');
    if (start === undefined) { start = timestamp; }
    const elapsed = timestamp - start;

    // 这里使用`Math.min()`确保元素刚好停在200px的位置。
    raf && (raf.style.transform = `translateX(${Math.min(0.1 * elapsed, 200)}px)`);

    if (elapsed < 2000) { // 在两秒后停止动画
      window.requestAnimationFrame(step);
    }
  }

  useEffect(() => {
    window.requestAnimationFrame(step);
  }, []);

  return <div className={style.wrap}>
    <div className={style.raf} id="raf"></div>
  </div>;
};
