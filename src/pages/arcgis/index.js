/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import * as esriLoader from 'esri-loader';
import catalog from './images/catalog.svg';
import style from './index.module.less';

const uniqueValueInfos = [{
  value: 'ONLINE',
  symbol: {
    type: 'picture-marker',
    url: catalog
  }
}];

export default () => {
  const gis = useRef();

  useEffect(() => {
    let map = null;
    let view = null;
    let layer = null;

    esriLoader.loadModules(['esri/config', 'esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer', 'esri/Graphic']).then(([esriConfig, Map, MapView, FeatureLayer, Graphic]) => {
      esriConfig.apiKey = 'AAPK1c80761d92a94940a1853965d4bfa8289igndLWLR478ZzTrGijlgsUynL2i-rvT-XxjqMdwXVesLGg1snV7tbJ_GGLPaPrn';

      map = new Map({
        basemap: 'arcgis-topographic' // Basemap layer service
      });

      view = new MapView({
        map: map,
        center: [116.38333333333, 39.9], // Longitude, latitude
        zoom: 13, // Zoom level
        container: gis.current// Div element
      });

      layer = new FeatureLayer({
        //可以通过map.findLayerById(id)找到图层
        id: 'deviceLayer',
        title: '设备图层',
        //从attributes中获取的内部fields
        fields: [
          {
            name: 'ObjectID',
            type: 'oid'
          },
          {
            name: 'id',
            type: 'string'
          },
          {
            name: 'deviceUid',
            type: 'string'
          },
          {
            name: 'deviceStatus',
            type: 'string'
          }
        ],
        //让所有fields对外可访问
        outFields: ['*'],
        //点标记的唯一标识
        objectIdField: 'ObjectID',
        geometryType: 'point',
        //初始数据
        source: [],
        renderer: {
          type: 'unique-value',
          //提取deviceStatus作为渲染图标类型的标识
          valueExpression: 'return $feature.deviceStatus',
          //所有图标类型声明
          uniqueValueInfos,
          //根据缩放程度调整尺寸
          visualVariables: [
            {
              type: 'size',
              valueExpression: '$view.scale',
              stops: [
                { value: 500000, size: 1 },
                { value: 250000, size: 5 },
                { value: 125000, size: 15 },
                { value: 32000, size: 20 }
              ]
            }
          ]

        },
        //点击点标记后弹窗内容模板
        popupTemplate: {
          title: '{deviceUid}',
          content: [{
            type: 'fields',
            fieldInfos: [{
              label: '设备Uid',
              fieldName: 'deviceUid'
            }, {
              label: '设备id',
              fieldName: 'id'
            }, {
              label: '设备状态',
              fieldName: 'deviceStatus'
            }]
          }]
        }
      });

      map.add(layer);

      let point = {
        type: 'point',
        longitude: 116.38333333333,
        latitude: 39.9
        // longitude: 39.9,
        // latitude: 116.38333333333
      };
      
      let markerSymbol = {
        type: 'simple-marker', 
        color: [226, 119, 40]
      };
      
      let pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol
      });

      map.add(pointGraphic);

    });

    return () => {
      map.destroy();
    };
  }, []);

  return <div className={style.wrap}>
    <div className={style.gis} ref={gis}></div>
  </div>;
};
