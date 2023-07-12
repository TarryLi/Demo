/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import {
  ScreenSpaceEventType,
  Ion,
  WebMapTileServiceImageryProvider,
  Cartesian3,
  Math
} from 'cesium';
import { Viewer } from 'resium';
import store from '@/stores/cesium';
import style from './index.module.less';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiY2U0MjUxZi05NjNhLTRlMjktYWIwMy0yYjEyN2M3MWU1ZGEiLCJpZCI6MTA0ODU5LCJpYXQiOjE2ODc3Njc5OTR9.82OebH7OPGduE5UpsOa_gzTNdps-3K-wch6LMET-RRw';

export default observer(({ children }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current && viewerRef.current.cesiumElement) {
      viewerRef.current.cesiumElement.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
      viewerRef.current.cesiumElement._cesiumWidget._creditContainer.style.display = 'none';

      viewerRef.current.cesiumElement.scene.globe.depthTestAgainstTerrain = true; // 解决垂直视角时点击报错的问题
      viewerRef.current.cesiumElement.imageryLayers.removeAll(); // 删除默认影像

      viewerRef.current.cesiumElement.imageryLayers.addImageryProvider(new WebMapTileServiceImageryProvider({
        url: 'http://t{s}.tianditu.gov.cn/DataServer?T=vec_w&L={TileMatrix}&Y={TileRow}&X={TileCol}&tk=bc0dbc5f4390217637dc05978eea5fcd',
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        layer: 'tdtImgLayer',
        style: 'default',
        format: 'tiles',
        maximumLevel: 18,
        tileMatrixSetID: 'w',
        show: true
      }));

      viewerRef.current.cesiumElement.imageryLayers.addImageryProvider(new WebMapTileServiceImageryProvider({
        url: 'http://t{s}.tianditu.gov.cn/DataServer?T=cva_w&L={TileMatrix}&Y={TileRow}&X={TileCol}&tk=bc0dbc5f4390217637dc05978eea5fcd',
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        layer: 'tdtImgLayer',
        style: 'default',
        format: 'tiles',
        maximumLevel: 18,
        tileMatrixSetID: 'w',
        show: true
      }));

      viewerRef.current.cesiumElement.camera.setView({
        destination: Cartesian3.fromDegrees(116.40475463540939, 39.77455298622946, 15000), // 经纬度以及相机离地高度
        orientation: {
          heading: Math.toRadians(0), // 航向角
          pitch: Math.toRadians(-45), // 俯仰角
          roll: 0 // 距中心的距离，以米为单位
        },
        duration: 1 // 飞行时间
      });

      store.update({ viewer: viewerRef.current.cesiumElement });
    }
  }, [viewerRef]);

  return <div className={style.wrap}>
    <Viewer
      full
      style={{ width: '100%', height: '100%' }}
      ref={viewerRef}
      baseLayerPicker={false}
      geocoder={false}
      selectionIndicator={false}
      fullscreenButton={false}
      homeButton={false}
      sceneModePicker={false}
      navigationHelpButton={false}
      vrButton={false}
      timeline={false}
      animation={false}
      navigationInstructionsInitiallyVisible={false}
      infoBox={false}
    >
      {children}
    </Viewer>
  </div>;
});
