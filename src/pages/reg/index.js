/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import style from './index.module.less';

export default () => {
  const [res, setRes] = useState('');

  useEffect(() => {
    const str = '1234567812345678';
    const reg = /(?<!\.\d*)\B(?=(\d{3})+(?!\d))/g;
    const _res = str.replace(reg, ',');
    setRes(_res);
  }, []);

  return <div className={style.wrap}>
    {res}
    <a href="http://yapi.jdfmgt.com/" target="_blank" rel="noreferrer">sss</a>
  </div>;
};
