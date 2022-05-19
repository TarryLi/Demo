/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

function CM() {
  this.tasks = [];

  this.sleep = (time) => {
    this.tasks.push({ event: 'sleep', value: time });
    return this;
  };

  this.eat = (food) => {
    this.tasks.push({ event: 'eat', value: food });
    return this;
  };

  this.sleepFirst = (time) => {
    this.tasks.unshift({ event: 'sleep', value: time });
    return this;
  };

  this.run = () => {
    if (this.tasks.length <= 0) return;
    const { event, value } = this.tasks.shift();

    switch (event) {
      case 'sleep':
        setTimeout(() => {
          console.log(`等待${value}秒..`);
          this.run();
        }, value * 1000);
        break;

      case 'eat':
        console.log(`Eat ${value}`);
        this.run();
        break;

      case 'talk':
        console.log(`Hi This is ${value} !`);
        this.run();
        break;

      default:
        break;
    }
  };

  setTimeout(() =>{
    this.run();
  });

  return (name) => {
    this.tasks.push({ event: 'talk', value: name });
    return this;
  };
}

const CodingMan = new CM();

export default () => {

  useEffect(() => {
    CodingMan('Hank').sleepFirst(5).eat('supper');
  }, []);

  return <div className={style.wrap}>
    <p>// 实现一个CodingMan，可以按照以下方式调用:
    // CodingMan(“Hank”)输出:
    // Hi! This is Hank!
    // CodingMan(“Hank”).sleep(10).eat(“dinner”)
    // 输出
    // Hi! This is Hank!
    //等待10秒..
    // Wake up after 10
    // Eat dinner~
    // CodingMan(“Hank”).eat(“dinner”).eat(“supper”)
    // 输出
    // Hi This is Hank!
    // Eat dinner~
    // Eat supper~
    // CodingMan(“Hank”).sleepFirst(5).eat(“supper”)
    // 输出
    //等待5秒
    // Wake up after 5
    // Hi This is Hank!
    // Eat supper
    // 以此类推
    </p>
  </div>;
};
