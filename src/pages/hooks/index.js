/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

// import React, { useState, useCallback } from 'react';
// import { Button } from 'antd';

// const TestButton = React.memo((props) => {
//   console.log(props.title);
//   return <Button color='primary' onClick={props.onClick} style={props.title === 'useCallback点击' ? {
//     marginLeft: 20
//   } : undefined}>{props.title}</Button>;
// });

// const MockMemo = () => {
//   const [count, setCount] = useState(0);
//   const [show, setShow] = useState(true);

//   const add = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
//         <TestButton title="普通点击" onClick={() => setCount(count + 1)} />
//         <TestButton title="useCallback点击" onClick={add} />
//       </div>
//       <div style={{ marginTop: 20 }}>count: {count}</div>
//       <Button onClick={() => { setShow(!show); }}> 切换</Button>
//     </div>
//   );
// };

// export default MockMemo;

// import { Button } from 'antd';
// import React, { useCallback, useState } from 'react';

// const useUpdate = () => {
//   const [, setState] = useState({});

//   return useCallback(() => setState({}), []);
// };

// export default (props)=> {
//   const update = useUpdate();

//   return (
//     <div style={{ padding: 50 }}>
//       <div>时间：{Date.now()}</div>
//       <Button color='primary' onClick={update}>更新时间</Button>
//     </div>
//   );
// };


import React, { useCallback, useState } from 'react';

const Child = React.memo(function (props) {
  console.log('子组件渲染了');
  return (
    <>
      <button onClick={props.onClick}>改标题</button>
      <h1>{props.name}</h1>
    </>
  );
});

export default (props)=> {
  const [title, setTitle] = useState('这是一个 title');
  const [subtitle, setSubtitle] = useState('我是一个副标题');
  const callback = useCallback(() => {
    setTitle('标题改变了');
  }, []);
  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button onClick={() => setSubtitle('副标题改变了')}>改副标题</button>
      <Child onClick={callback} name="桃桃" />
    </div>
  );
};