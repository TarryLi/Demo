/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

export default () => {
  useEffect(() => {
    const exports = {};
    Object.defineProperty(exports, '__esModule', { value: true });
    // eslint-disable-next-line no-console
    console.log(exports);
  }, []);

  return <div className={style.wrap}>

  </div>;
};
