/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { tokenizer, parser, transformer, generator } from './bable';
import style from './index.module.less';

export default () => {
  useEffect(() => {
    const compiler = (input) => {
      const tokens = tokenizer(input);
      const ast = parser(tokens);
      const newAst = transformer(ast);
      const output = generator(newAst);

      return output;
    };

    const str = 'const add = (a, b) => a + b';

    const result = compiler(str);

    console.log(result);
  }, []);

  return <div className={style.wrap}>

  </div>;
};
