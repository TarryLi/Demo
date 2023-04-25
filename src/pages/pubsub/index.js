/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import pubsub from './pubsub';
import style from './index.module.less';

export default () => {
  useEffect(() => {
    pubsub.subscribe('color', (color) => {
      console.log('color1:', color);
    });
    pubsub.subscribe('color', (color) => {
      console.log('color2:', color);
    });
    pubsub.subscribe('height', (height) => {
      console.log('height:', height);
    });
    pubsub.publish('color', 'red');
    pubsub.publish('height', 120);
  }, []);

  return <div className={style.wrap}>

  </div>;
};
