/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Tag } from 'antd';
import style from './index.module.less';

export default () => {
  useEffect(() => {
    const canvas = document.getElementById('tutorial');
    const ctx = canvas.getContext('2d');

    // 绘制矩形
    // ctx.fillRect(10, 20, 20, 30);

    // 绘制路径
    // ctx.beginPath();
    // ctx.moveTo(75, 50);
    // ctx.lineTo(100, 75);
    // ctx.lineTo(100, 25);
    // ctx.fill();

    // 绘制笑脸
    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
    // ctx.stroke();

    // 描边三角形
    // ctx.beginPath();
    // ctx.moveTo(125, 125);
    // ctx.lineTo(125, 45);
    // ctx.lineTo(45, 125);
    // ctx.closePath();
    // ctx.stroke();

    // 绘制圆
    // for (var i = 0; i < 4; i++) {
    //   for (var j = 0; j < 3; j++) {
    //     ctx.beginPath();
    //     var x = 25 + j * 50; // x 坐标值
    //     var y = 25 + i * 50; // y 坐标值
    //     var radius = 20; // 圆弧半径
    //     var startAngle = 0; // 开始点
    //     var endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
    //     var anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针

    //     ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

    //     if (i > 1) {
    //       ctx.fill();
    //     } else {
    //       ctx.stroke();
    //     }
    //   }
    // }

    // 二次贝塞尔曲线
    // ctx.beginPath();
    // ctx.moveTo(75, 25);
    // ctx.quadraticCurveTo(25, 25, 25, 62.5);
    // ctx.quadraticCurveTo(25, 100, 50, 100);
    // ctx.quadraticCurveTo(50, 120, 30, 125);
    // ctx.quadraticCurveTo(60, 120, 65, 100);
    // ctx.quadraticCurveTo(125, 100, 125, 62.5);
    // ctx.quadraticCurveTo(125, 25, 75, 25);
    // ctx.stroke();

    // 三次贝塞尔曲线
    // ctx.beginPath();
    // ctx.moveTo(75, 40);
    // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    // ctx.fill();

    // Path2D()对象
    // var rectangle = new Path2D();
    // rectangle.rect(10, 10, 50, 50);

    // var circle = new Path2D();
    // circle.moveTo(125, 35);
    // circle.arc(100, 35, 25, 0, 2 * Math.PI);

    // ctx.stroke(rectangle);
    // ctx.fill(circle);

    // 颜色
    // for (var i = 0; i < 6; i++) {
    //   for (var j = 0; j < 6; j++) {
    //     ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
    //       Math.floor(255 - 42.5 * j) + ',0)';
    //     ctx.fillRect(j * 25, i * 25, 25, 25);
    //   }
    // }

    // for (var i = 0; i < 6; i++) {
    //   for (var j = 0; j < 6; j++) {
    //     ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' +
    //       Math.floor(255 - 42.5 * j) + ')';
    //     ctx.beginPath();
    //     ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
    //     ctx.stroke();
    //   }
    // }

    // 画背景
    // ctx.fillStyle = '#FD0';
    // ctx.fillRect(0, 0, 75, 75);
    // ctx.fillStyle = '#6C0';
    // ctx.fillRect(75, 0, 75, 75);
    // ctx.fillStyle = '#09F';
    // ctx.fillRect(0, 75, 75, 75);
    // ctx.fillStyle = '#F30';
    // ctx.fillRect(75, 75, 75, 75);
    // ctx.fillStyle = '#FFF';

    // 设置透明度值
    // ctx.globalAlpha = 0.2;

    // 画半透明圆
    // for (var i = 0; i < 7; i++) {
    //   ctx.beginPath();
    //   ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    //   ctx.fill();
    // }

    // 画背景
    // ctx.fillStyle = 'rgb(255,221,0)';
    // ctx.fillRect(0, 0, 150, 37.5);
    // ctx.fillStyle = 'rgb(102,204,0)';
    // ctx.fillRect(0, 37.5, 150, 37.5);
    // ctx.fillStyle = 'rgb(0,153,255)';
    // ctx.fillRect(0, 75, 150, 37.5);
    // ctx.fillStyle = 'rgb(255,51,0)';
    // ctx.fillRect(0, 112.5, 150, 37.5);

    // 画半透明矩形
    // for (var i = 0; i < 10; i++) {
    //   ctx.fillStyle = 'rgba(255,255,255,' + (i + 1) / 10 + ')';
    //   for (var j = 0; j < 4; j++) {
    //     ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5)
    //   }
    // }

    // var lineJoin = ['round', 'bevel', 'miter'];
    // ctx.lineWidth = 10;
    // for (var i = 0; i < lineJoin.length; i++) {
    //   ctx.lineJoin = lineJoin[i];
    //   ctx.beginPath();
    //   ctx.moveTo(-5, 5 + i * 40);
    //   ctx.lineTo(35, 45 + i * 40);
    //   ctx.lineTo(75, 5 + i * 40);
    //   ctx.lineTo(115, 45 + i * 40);
    //   ctx.lineTo(155, 5 + i * 40);
    //   ctx.stroke();
    // }

    // ctx.beginPath();
    // ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
    // ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
    // ctx.fill("evenodd");

    // 绘制文本
    // ctx.font = "48px serif";
    // ctx.fillText("Hello world", 10, 50);
    // ctx.strokeText('这是测试文字这是测试文字这是测试文字', 100, 100, 150);

    // Draw slice
    // document.getElementById('source').addEventListener('load', e => {
    //   ctx.drawImage(document.getElementById('source'),
    //     33, 71, 104, 124, 21, 20, 87, 104);
    // })

    // Draw frame
    document.getElementById('frame').addEventListener('load', e => {
      ctx.drawImage(document.getElementById('frame'), 0, 0);
    });

    // 图片
    // var img = new Image();
    // img.onload = function () {
    //   for (var i = 0; i < 4; i++) {
    //     for (var j = 0; j < 3; j++) {
    //       ctx.drawImage(img, j * 50, i * 38, 50, 38);
    //     }
    //   }
    // };
    // img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
  }, []);

  return <div className={style.wrap}>
    <canvas id="tutorial" width="1500" height="800"></canvas>

    <div style={{ display: 'none' }}>
      <img id="source" alt="" src="https://mdn.mozillademos.org/files/5397/rhino.jpg" width="300" height="227" />
      <img id="frame" alt="" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150" />
    </div>
  </div>;
};
