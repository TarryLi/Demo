import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import 'echarts-gl';
import pie from './chart';
import style from './index.module.less';

export default () => {
  const chart = useRef();

  useEffect(() => {
    const chartDom = chart.current;
    const myChart = echarts.init(chartDom);
    
    pie(myChart);
  }, []);

  return <div className={style.wrap} ref={chart}>

  </div>;
};
