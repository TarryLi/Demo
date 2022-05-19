/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

export default () => {
  useEffect(() => {

  }, []);

  const text = '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字';

  return <div className={style.wrap}>
    <div className={style.one}>{text}</div>
    <div className={style.two}>{text}</div>
    <div>
      <p className={style.three}>{text}</p>
    </div>
    <div className={style.four}>
      <div className={style.text}>{text}</div>
    </div>
  </div>;
};
