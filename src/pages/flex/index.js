/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

export default () => {
  useEffect(() => {

  }, []);

  return <div className={style.wrap}>
    <div className={style.inner}></div>
    <div className={style.inner}></div>
    <div className={style.inner}></div>
  </div>;
};
