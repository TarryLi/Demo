/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import chat from './chatgpt';
import style from './index.module.less';

export default () => {
  const [answer, setAnswer] = useState();
  const [input, setInput] = useState('');

  useEffect(() => {

  }, []);

  const onChat = async () => {
    if (!input) return;
    const data =  await chat(input);
    console.log(data);
    setAnswer(data);
  };

  return <div className={style.wrap}>
    <div className={style.chat}>{answer}</div>
    <div className={style.input}>
      <Input.TextArea rows={4} onPressEnter={onChat} value={input} onChange={e => setInput(e.target.value)}/>
    </div>
  </div>;
};
