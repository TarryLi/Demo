/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import style from './index.module.less';

export default () => {
  const ref = useRef();

  useEffect(() => {
    const map = L.map(ref.current).setView([39.9788, 116.30226], 14);

    let baseLayer = L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
      attribution: '高德地图',
      maxZoom: 13,
      minZoom: 3,
      subdomains: '1234',
      zoom: 3
    });
    map.addLayer(baseLayer);
    
  }, []);

  return <div className={style.wrap} ref={ref}>

  </div>;
};
