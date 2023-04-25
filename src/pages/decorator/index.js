/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { mixin } from './core';
import style from './index.module.less';

export default () => <div className={style.wrap}></div>;

class A {
  say() {
    return 1;
  }
}

class B {
  hi() {
    return 2;
  }
}

@mixin(A, B)
class C {

}

let c = new C();
console.log(c.say(), c.hi());