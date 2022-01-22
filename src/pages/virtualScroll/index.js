/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import VirtualScroll from './components/VirtualScroll';
import style from './index.module.less';

export default () => {
  useEffect(() => {

  }, []);

  return <div className={style.wrap}>
    <VirtualScroll />
  </div>;
};
