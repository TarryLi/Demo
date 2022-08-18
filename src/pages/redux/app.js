/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { add, minus, change } from './store/count';
import { getListData } from './store/list';
import style from './app.module.less';

export default () => {
  const count = useSelector((state) => state.counterReducer.value);
  const list = useSelector((state) => state.listReducer.list);
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);

  return <div className={style.wrap}>
    <div>{count}</div>
    <Button onClick={() => dispatch(add())}>加</Button>
    <Button onClick={() => dispatch(minus())}>减</Button>
    <Input value={value} onChange={e => setValue(+e.target.value)} style={{ width: '200px' }} />
    <Button onClick={() => dispatch(change(value))}>修改</Button>
    <div>
      <Button onClick={() => dispatch(getListData('小猪佩奇'))}>请求</Button>
      {list.map((i, idx) => <div key={idx}>{i}</div>)}
    </div>
  </div>;
};
