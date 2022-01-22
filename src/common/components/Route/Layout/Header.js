import React from 'react';
import logo from '@/images/logo.svg';
import style from './Header.module.less';

export default () => <div className={style.wrap}>
  <img alt="LOGO" src={logo} className={style['logo-icon']} />
  <span className={style['logo-text']}>Demo</span>
</div>;
