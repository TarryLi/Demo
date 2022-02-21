/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import style from './VirtualScroll.module.less';

// eslint-disable-next-line
var offset = 1;
// eslint-disable-next-line
var itemHeight = 40;
const containerHeight = 410;
const visibleCount = Math.ceil(containerHeight / itemHeight);

export default () => {
  const [allData] = useState(() => {
    const res = [];
    for (let i = 1; i <= 1000; i++) {
      res.push(i);
    }
    return res;
  });

  const [startHeight, setStartHeight] = useState(0);
  const [endHeight, setEndHeight] = useState(0);
  const [data, setData] = useState(allData.slice(0, 20));
  const containerRef = useRef(null);

  useEffect(() => {
    if (allData.length <= visibleCount) return;
    let timer = null;
    function setHeight() {
      const { scrollTop } = containerRef.current;
      const startIndex = Math.ceil(scrollTop / 40);
      const start = startIndex - offset > 0 ? startIndex - offset : 0;
      const end = startIndex + visibleCount + offset < allData.length
        ? startIndex + visibleCount + offset : allData.length;
      setData(allData.slice(start, end));
      setStartHeight(start * 40);
      setEndHeight((allData.length - end) * 40);
    }
    setHeight();
    containerRef.current.addEventListener('wheel', () => {
      if (timer) return;
      setHeight();
      clearTimeout(timer);
      timer = null;
    }, 120);
  }, [allData]);

  return (
    <div
      className={style.virtual__container}
      style={{ height: containerHeight }}
      ref={containerRef}
    >
      <div style={{ height: startHeight }}></div>
      {data.map((item) => <div
        className={style.virtual__text}
        style={{ height: itemHeight }}
        key={item}
      >
        {item}
      </div>)}
      <div style={{ height: endHeight }}></div>
    </div>
  );
};
