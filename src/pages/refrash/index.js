/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import Child from './child';
import style from './index.module.less';

export default () => {
  const [count, setCount] = useState(0);

  useEffect(() => {

  }, []);

  console.log('parent');

  return <div className={style.wrap}>
    <Button onClick={() => setCount(count + 1)}>+1</Button>
    <div>{count}</div>
    <Child count={count} />
  </div>;
};
