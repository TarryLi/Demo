/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import style from './index.module.less';

export default () => {
  const ref = useRef();

  useEffect(() => {
    window.vue_sdk.default.init(ref.current);
  }, []);

  return <div className={style.wrap} ref={ref}>

  </div>;
};
