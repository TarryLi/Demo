/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

const ChildTwo = ({ count }) => {
  useEffect(() => {

  }, []);
  console.log('childTwo');

  return <div className={style.wrap}>
    <div>childTwo:{count}</div>
  </div>;
};

export default ({ count }) => {
  useEffect(() => {

  }, []);
  console.log('child');

  return <div className={style.wrap}>
    <div>child:{count}</div>
    <ChildTwo count={count} />
  </div>;
};
