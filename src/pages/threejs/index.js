/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import LChart from './LChart';
import PieChart from './pie';
import { getPercent } from './utils';
import style from './index.module.less';

export default () => {
  const ref = useRef();

  const drawPie = (dom, data, options) => {
    const { lightOpt = {}, cameraOpt = {}, manifest = {} } = options;
    const {
      ladder = true,
      separation = true,
      loop = false,
      concentric = false,
      concentricLoop = false,
      concentricLoopSame
    } = manifest;
    const radius = 0.5;
    const totalPart = data.reduce((acc, cur) => {
      return acc += cur.value;
    }, 0);
    // 获取个模块比例
    const percent = data.reduce((acc, cur) => {
      acc.push(getPercent(cur.value, totalPart));
      return acc;
    }, []);
    // 按比例获取角度并转弧度
    const angleArr = percent.map(item => {
      return item * 360 * Math.PI / 180;
    });
    // 初始化chart
    const chartContext = new LChart(dom, (lightOpt), (cameraOpt));
    // 构造chart所需数据
    const pieData = angleArr.map((item, index) => {
      return {
        radius,
        angle: item,
        height: percent[index],
        color: data[index].color,
        title: data[index].title,
        toolTip: data[index].toolTip
      };
    });
    // 添加物体
    const chartMesh = new PieChart(pieData, {
      ladder,
      separation,
      loop,
      concentric,
      concentricLoop,
      concentricLoopSame,
      radius
    });
    chartContext.setChartData(chartMesh.group);
  };

  useEffect(() => {
    const data =  [
      {
        title: '1',
        toolTip: '',
        value: 70,
        color: '#3C7DFA'
      },
      {
        title: '2',
        toolTip: '',
        value: 50,
        color: '#FFC673'
      },
      {
        title: '3',
        toolTip: '',
        value: 40,
        color: '#864FFF'
      },
      {
        title: '4',
        toolTip: '',
        value: 20,
        color: '#A0FF8C'
      }
    ];
    drawPie(ref.current, data, {
      manifest: {
        ladder: false,
        separation: false,
        loop: true
      },
      cameraOpt: {
        width: ref.current.clientWidth,
        height: ref.current.clientHeight
      }
    });
  }, []);

  return <div className={style.wrap} ref={ref}>

  </div>;
};
