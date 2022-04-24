/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

export default () => {
  useEffect(() => {
    const pathChange = () => {
      // eslint-disable-next-line no-console
      console.log(window.history);
    };
    window.addEventListener('popstate', pathChange);
  }, []);

  const pushState = () => {
    window.history.pushState({}, '', 'http://localhost:3033/#/groundGlass');
  };

  return <div className={style.wrap}>
    <button type="button" onClick={pushState}>pushState</button>
  </div>;
};
