import React from 'react';
import classNames from 'classnames';
import Header from './Header';
import Menu from './Menu';
import style from './index.module.less';

export default ({ route }) => (
  <div className={classNames(style.layout)}>
    <Header />
    <div className={style.body}>
      <Menu />
      <div className={style['with-container']}>
        {route}
      </div>
    </div>
  </div>
);
