/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import style from './index.module.less';

export default () => {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    console.log(editorRef.current.getValue());
  }

  function handleEditorChange(value, event) {
    console.log('here is the current model value:', value);
  }

  return (
    <>
      <button onClick={showValue} type="button">Show value</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </>
  );
};
