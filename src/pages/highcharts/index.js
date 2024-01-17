/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import Highcharts3D from 'highcharts/highcharts-3d';
import style from './index.module.less';

Highcharts3D(Highcharts);

export default () => {
  const chart = useRef();
  useEffect(() => {
    const chartDom = chart.current;

    Highcharts.chart(chartDom, {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45
        }
      },
      title: {
        text: '简数科技每周水果消耗量'
      },
      subtitle: {
        text: 'Highcharts 中的3D环形图'
      },
      plotOptions: {
        pie: {
          innerSize: 100,
          depth: 45
        }
      },
      series: [{
        name: '货物金额',
        data: [
          ['香蕉', 8],
          ['猕猴桃', 3],
          ['桃子', 1],
          ['橘子', 6],
          ['苹果', 8],
          ['梨', 4],
          ['柑橘', 4],
          ['橙子', 1],
          ['葡萄 (串)', 1]
        ]
      }]
    });
  }, []);

  return <div className={style.wrap} ref={chart}>

  </div>;
};
