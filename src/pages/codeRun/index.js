/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { useSetState } from 'react-use';
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import 'monaco-editor/esm/vs/editor/contrib/find/findController';
import 'monaco-editor/esm/vs/basic-languages/monaco.contribution';
import Preview from './Preview';
import style from './index.module.less';

function getDefaultState() {
  return {
    htmlCode: null
  };
}

export default () => {
  const editorRef = useRef({});
  const preRef = useRef({});

  const [state, setState] = useSetState(getDefaultState());

  const onBlur = (val) => {
    setState({ htmlCode: val });
    preRef.current.run();
  };

  useEffect(() => {
    const editor = monaco.editor.create(editorRef.current, {
      value: "ReactDOM.render(<h1>Hello, world!</h1>,document.getElementById('root'));",
      language: 'javascript',
      minimap: {
        enabled: false // 关闭小地图
      },
      wordWrap: 'on', // 代码超出换行
      theme: 'vs-dark', // 主题
      fontSize: 16,
      fontFamily: 'MonoLisa, monospace',
      contextmenu: false, // 不显示右键菜单
      fixedOverflowWidgets: true // 让语法提示层能溢出容器
    });
    // 监听编辑事件
    editor.onDidChangeModelContent(() => {
      setState({ htmlCode: editor.getValue() });
    });
    // 监听失焦事件
    editor.onDidBlurEditorText(() => {
      onBlur(editor.getValue());
    });
    // editor.dispose();
  }, []);

  return <div className={style.wrap}>
    <div ref={editorRef} className={style.editor}></div>
    <div className={style.preview}><Preview {...state} ref={preRef} /></div>
  </div>;
};
