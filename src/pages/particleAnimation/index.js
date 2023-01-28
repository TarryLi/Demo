/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import style from './index.module.less';

window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

export default () => {
  const canvasRef = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const dots = [];

    // 鼠标粒子
    let warea = {
      x: null,
      y: null,
      max: 200 // 鼠标位置 和点的连线
    };
    //获取鼠标活动时的鼠标坐标
    window.onmousemove = (e) => {
      warea.x = e.clientX - 272;
      warea.y = e.clientY - 72;
    };
    //鼠标移出界面时清空
    window.onmouseout = (e) => {
      warea.x = null;
      warea.y = null;
    };

    for (let i = 0; i < 100; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        xa: Math.random() * 3 - 1,
        ya: Math.random() * 3 - 1,
        max: 100
      });
    }

    const drawLine = (dot) => {
      const ndots = [warea].concat(dots);

      for (var i = 0; i < ndots.length; i++) {
        var item = ndots[i];

        // 过滤错误信息
        if (dot === item || item.x === null || item.y === null) continue;
        // 创建变量
        let xc = dot.x - item.x,
          yc = dot.y - item.y,
          dis = '',
          ratio = '';

        // 两个粒子之间的距离
        dis = Math.sqrt(xc * xc + yc * yc);

        // 判断 粒子 之间的距离
        if (dis < item.max) {
          // 如果是鼠标，则让其他粒子向鼠标的位置移动
          if (item === warea && dis > item.max / 2) {
            dot.x -= xc * 0.03;
            dot.y -= yc * 0.03;
          }

          // 计算距离比 -- 用于线 厚度
          ratio = (item.max - dis) / item.max;
          // 画线
          context.beginPath();
          context.lineWidth = ratio / 2;
          context.strokeStyle = 'rgba(255,218,27,1)';
          context.moveTo(dot.x, dot.y);
          context.lineTo(item.x, item.y);
          context.stroke();
        }
      }
    };

    const drawDots = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'rgba(0,43,54,1)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.x += dot.xa;
        dot.y += dot.ya;

        dot.xa *= dot.x > canvas.width || dot.x < 0 ? -1 : 1;
        dot.ya *= dot.y > canvas.height || dot.y < 0 ? -1 : 1;

        context.fillRect(dot.x - 1, dot.y - 1, 2, 2);
        context.fillStyle = 'rgba(255,218,27,1)';

        drawLine(dot);
      });
    };

    function animate() {
      requestAnimFrame(animate);
      drawDots();
    }
    animate();
  }, []);

  return <div className={style.wrap}>
    <canvas width="1000" height="1000" ref={canvasRef}></canvas>
  </div>;
};
