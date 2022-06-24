/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useMemo } from 'react';
import { Button } from 'antd';
import { common } from './export';
import style from './index.module.less';

export default () => {

  // useEffect(() => {
  //   const exports = {};
  //   Object.defineProperty(exports, '__esModule', { value: true });
  //   // eslint-disable-next-line no-console
  //   console.log(exports);
  // }, []);

  // const [count, setCount] = useState(0);
  // const click = () => {
  //   for (let i = 0; i <= 3; i++) {
  //     setCount(count + 1);
  //     console.log(count);
  //   }
  // };
  // console.log('render');

  // useEffect(() => {
  // const obj = {
  //   a: 1,
  //   b: function () {
  //     return this;
  //   },
  //   c: () => {
  //     return this;
  //   }
  // };

  // const a = 2;

  // console.log(obj.b());
  // console.log(obj.c());
  // const d = obj.b;
  // console.log(d());

  // function O() {
  //   this.a = 1;
  //   this.b = () => {
  //     return this;
  //   };
  // }

  // const obj = new O();

  // console.log(obj.b());
  // }, []);

  // const [code, setCode] = useState(0);

  // useEffect(() =>{
  //   setCode(1);
  //   console.log('effect');
  // }, []);

  // console.log('render');

  // const [num, setNum] = useState(0);

  // function expensiveFn() {
  //   let result = 0;

  //   for (let i = 0; i < 10000; i++) {
  //     result += i;
  //   }

  //   console.log(result); // 49995000
  //   return result;
  // }

  // const base = useMemo(expensiveFn, []);

  // useEffect(() =>{
  //   class a {
  //     // constructor() {
  //     //   this.say = this.say.bind(this);
  //     // }

  //     b = 1;

  //     say(){
  //       console.log(this);
  //     }

  //     talk = () => {
  //       console.log(this);
  //     };

  //     static hello(){
  //       console.log('hello');
  //     }
  //   }

  //   const b = new a();
  //   a.hello();
  //   b.say();
  //   b.talk();
  //   const { say, talk } = b;
  //   say();
  //   talk();
  // }, []);

  // useEffect(() => {
  //   // console.log(common);

  //   // const a = [1, 2, 3];
  //   // console.log(a[Symbol.iterator] instanceof Function);

  //   function* myGen() {
  //     yield 1;
  //     console.log('1-2');
  //     yield 2;
  //     yield 3;
  //   }

  //   const gen = myGen();
  //   console.log(gen.next());
  //   console.log(gen.next());
  //   console.log(gen.next());
  // }, []);

  // useEffect(() => {
  //   class Scheduler {
  //     constructor() {
  //       this.tasks = [];
  //       this.count = 0;
  //     }

  //     // async add(promiseFunc) {
  //     //   if (this.count >= 2) {
  //     //     await new Promise(resolve => {
  //     //       this.tasks.push(resolve);
  //     //     });
  //     //   }
  //     //   this.count++;
  //     //   const res = await promiseFunc();
  //     //   this.count--;
  //     //   if (this.tasks.length) {
  //     //     const task = this.tasks.shift();
  //     //     task();
  //     //   }
  //     //   return res;
  //     // }


  //     add(promiseFunc) {
  //       return new Promise(resolve => {
  //         this.tasks.push([resolve, promiseFunc]);
  //         this.run();
  //       });
  //     }

  //     async run() {
  //       if (this.count < 2) {
  //         const [resolve, promiseFunc] = this.tasks.shift();
  //         this.count++;
  //         const res = await promiseFunc();
  //         this.count--;
  //         if (this.tasks.length) {
  //           this.run();
  //         }
  //         resolve(res);
  //       }
  //     }
  //   }
  //   const scheduler = new Scheduler();
  //   const timeout = (time) => {
  //     return new Promise(r => setTimeout(r, time));
  //   };
  //   const addTask = (time, order) => {
  //     scheduler.add(() => timeout(time))
  //       .then(() => console.log(order));
  //   };
  //   addTask(4000, 1);
  //   addTask(1000, 2);
  //   addTask(2000, 3);
  //   addTask(3000, 4);
  //   // log: 2 3 1 4
  // }, []);

  return <div className={style.wrap}>
    {/* {code} */}
    {/* <Button onClick={click}>click</Button> */}
    {/* <h1>count：{num}</h1>
    <button onClick={() => setNum(num + base)}>+1</button> */}
  </div>;
};
