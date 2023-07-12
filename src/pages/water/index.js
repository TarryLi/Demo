/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

(function () {
  // canvas 实现 watermark
  function __canvasWM({
    // 使用 ES6 的函数默认值方式设置参数的默认取值
    // 具体参见 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters
    container = document.body,
    width = '200px',
    height = '150px',
    textAlign = 'center',
    textBaseline = 'middle',
    font = '20px microsoft yahei',
    fillStyle = 'rgba(184, 184, 184, 0.8)',
    content = '请勿外传',
    rotate = '30',
    zIndex = 1000
  } = {}) {
    var args = arguments[0];
    var canvas = document.createElement('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    var ctx = canvas.getContext('2d');

    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = font;
    ctx.fillStyle = fillStyle;
    ctx.rotate(Math.PI / 180 * rotate);
    ctx.fillText(content, parseFloat(width) / 2, parseFloat(height) / 2);

    var base64Url = canvas.toDataURL();
    const watermarkDiv = document.createElement('div');
    watermarkDiv.setAttribute('style', `
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index:${zIndex};
      pointer-events:none;
      background-repeat:repeat;
      background-image:url('${base64Url}')`);

    container.style.position = 'relative';
    container.insertBefore(watermarkDiv, container.firstChild);

  }

  window.__canvasWM = __canvasWM;
})();

(function () {
  // svg 实现 watermark
  function __svgWM({
    container = document.body,
    content = '请勿外传',
    width = '300px',
    height = '200px',
    opacity = '0.2',
    fontSize = '20px',
    zIndex = 1000
  } = {}) {
    const args = arguments[0];
    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${width}">
      <text x="50%" y="50%" dy="12px"
      text-anchor="middle"
      stroke="#000000"
      stroke-width="1"
      stroke-opacity="${opacity}"
      fill="none"
      transform="rotate(-45, 120 120)"
      style="font-size: ${fontSize};">
      ${content}
      </text>
      </svg>`;

    const base64Url = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgStr)))}`;
    const __wm = document.querySelector('.__wm');

    const watermarkDiv = __wm || document.createElement('div');
    watermarkDiv.setAttribute('style', `
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index:${zIndex};
      pointer-events:none;
      background-repeat:repeat;
      background-image:url('${base64Url}')`);

    container.style.position = 'relative';
    container.insertBefore(watermarkDiv, container.firstChild);
  }

  window.__svgWM = __svgWM;
})();

export default () => {
  useEffect(() => {
    window.__svgWM({
      content: 'LTY'
    });
  }, []);

  return <div className={style.wrap}>

  </div>;
};
