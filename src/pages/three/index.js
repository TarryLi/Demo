/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

export default () => {
  useEffect(() => {

  }, []);

  return <div className={style.wrap}>
    <div className={style.one}>
      <div class="left">left</div>
      <div class="right">right</div>
      <div class="main">float   缺点：内容展现顺序与DOM结构不一致，主体内容后加载，一定程度影响用户体验当宽度缩小到不足以显示三栏时，右侧栏会被挤到下方</div>
    </div>

    <div className={style.two}>
      <div class="left">left</div>
      <div class="main">flex布局   缺点：无法兼容低版本的浏览器</div>
      <div class="right">right</div>
    </div>


    <div className={style.three}>
      <div class="main">圣杯布局   缺点：当中间栏宽度比左栏宽度小时，布局会发生混乱</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>

    <div className={style.four}>
      <div class="main">
        <div className="in">
          双飞翼布局   缺点：DOM结构较复杂
        </div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
  </div>;
};
