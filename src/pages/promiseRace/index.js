/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import style from './index.module.less';

const runner = (tasks, max = 3, logger) => {
  const list = [];
  let i = 0;

  const run = () => {
    if (tasks.length === i) {
      return Promise.resolve();
    }

    const task = tasks[i++];
    list.push(task);
    logger('任务开始执行' + i);
    task().then(() => {
      list.splice(list.indexOf(task), 1);
      logger('任务执行完');
    });

    let pr = Promise.resolve();
    if (list.length > max) {
      pr = Promise.race(list);
    }
    return pr.then(() => run());
  };

  run().then(() => {
    Promise.all(list).then(() => {
      logger('任务全部完成');
    });
  });
};

export default () => {
  const [log, setLog] = useState([]);
  const ref = useRef([]);

  const logger = (l) => {
    ref.current = [...ref.current, l];
    setLog(ref.current);
  };

  useEffect(() => {
    const tasks = [];
    for (let index = 0; index < 10; index++) {
      const task = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 100 * Math.random());
      });
      tasks.push(task);
    }
    runner(tasks, 3, logger);
  }, []);

  return <div className={style.wrap}>
    {log.map((item, idx) => <p key={idx}>{item}</p>)}
  </div>;
};
