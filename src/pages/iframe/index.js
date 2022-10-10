/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import style from './index.module.less';

export default () => {
  const ref = useRef();

  useEffect(() => {
    const parentNode = ref.current;
    if (parentNode) {
      const children = parentNode.children[0];
      children && parentNode.removeChild(children);
    }
    const iFrame = document.createElement('iframe');
    iFrame.src = 'http://localhost:3000/';
    iFrame.style.width = '100%';
    iFrame.style.height = '100%';
    iFrame.frameBorder = 0;
    if (parentNode) {
      parentNode.appendChild(iFrame);
    } else {
      warnMsg.warn('请刷新浏览器重试');
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }} ref={ref}></div>
  );
};
