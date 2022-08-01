/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

export default () => {
  useEffect(() => {

  }, []);

  return <div className={style.wrap}>
    <div className={style.wrap1}>
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
      <div class="four item">Four</div>
      <div class="five item">Five</div>
      <div class="six item">Six</div>
      <div class="seven item">Seven</div>
      <div class="eight item">eight</div>
      <div class="nine item">Nine</div>
    </div>
    <div className={style.wrap2}>
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
      <div class="four item">Four</div>
      <div class="five item">Five</div>
      <div class="six item">Six</div>
      <div class="seven item">Seven</div>
      <div class="eight item">eight</div>
      <div class="nine item">Nine</div>
    </div>
  </div>;
};
