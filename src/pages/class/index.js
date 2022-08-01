/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

class Father {
  constructor(food) {
    this.food = food;
  }

  eat() {
    console.log(this.food);
  }
}

class Child extends Father {
  constructor(word) {
    super('banana');
    this.word = word;
  }

  say() {
    console.log(this.word);
  }
}

export default () => {
  useEffect(() => {
    const child = new Child('haha');
    child.say();
    child.eat();
  }, []);

  return <div className={style.wrap}>

  </div>;
};
