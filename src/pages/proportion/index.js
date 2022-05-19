/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

export default () => {
  useEffect(() => {

  }, []);

  return <div className={style.wrap}>
    <div class={style.wrapper1}>
      <div class={style['intrinsic-aspect-ratio-container']}>
        <div className={style.content}>
          12312312312
        </div>
      </div>
    </div>
  </div>;
};
