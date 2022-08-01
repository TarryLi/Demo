/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import compile from './utils/compile';
import createHtml from './utils/createHtml';
import style from './index.module.less';

export default forwardRef(({ ...props }, ref) => {
  const iframeRef = useRef(null);

  const [code, setCode] = useState('');

  useImperativeHandle(ref, () => ({
    run: async (jsContent) => {
      const compiledData = await compile({ jsContent });
      const _code = createHtml(
        compiledData.html,
        compiledData.js,
        compiledData.css
        // _cssResources,
        // _jsResources,
        // openAlmightyConsole.value
      );
      // console.log(_code);
      setCode(_code);
    }
  }), []);

  return <iframe className={style.iframe} ref={iframeRef} title="preview" srcDoc={code}></iframe>;
});
