/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Button } from 'antd';
import style from './index.module.less';

const ChildComp = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return ({
      log: () => {
        // eslint-disable-next-line no-console
        console.log('111');
      }
    });
  }, []);

  return <div>child</div>;
});

export default () => {
  const ref = useRef();

  return <div className={style.wrap}>
    <ChildComp ref={ref} />
    <Button onClick={() => ref.current.log()}>打印</Button>
  </div>;
};
