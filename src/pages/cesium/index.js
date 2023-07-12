/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import * as Cesium from 'cesium';
import { GeoJsonDataSource, ScreenSpaceEventHandler, ScreenSpaceEvent } from 'resium';
import store from '@/stores/cesium';
import dcJson from './geojson/dc.json';
import bjJson from './geojson/bj.json';
import BaseMap from './baseMap';

export default observer(() => {
  const { viewer, update } = store;

  useEffect(() => {
    if (viewer) {
      console.log(viewer);
    }
  }, [viewer]);

  const onClickCommunity = (e) => {
    console.log(e);
    const pick = viewer.scene.pick(e.position);
  };

  const onDragEnd = () => {
    const result = viewer.camera.pickEllipsoid(new Cesium.Cartesian2(viewer.canvas.clientWidth / 2, viewer.canvas.clientHeight / 2));
    const curPosition = Cesium.Ellipsoid.WGS84.cartesianToCartographic(result);
    const lng = (curPosition.longitude * 180) / Math.PI;
    const lat = (curPosition.latitude * 180) / Math.PI;
    update({ center3D: `${lng},${lat}` });
  };

  return <BaseMap>
    <ScreenSpaceEventHandler>
      <ScreenSpaceEvent
        action={() => onDragEnd()}
        type={Cesium.ScreenSpaceEventType.LEFT_UP}
      />
      {/* <ScreenSpaceEvent
            action={clickMap}
            type={Cesium.ScreenSpaceEventType.LEFT_CLICK}
          /> */}
    </ScreenSpaceEventHandler>
    <GeoJsonDataSource
      show
      data={dcJson}
      stroke={Cesium.Color.AQUA}
      strokeWidth={3}
      name="community"
      onClick={onClickCommunity}
      onMouseEnter={(movement, target) => {
        console.log(1);
        target.id.polygon.material = Cesium.Color.fromCssColorString('rgba(175, 238, 238, 1)');
        target.id.polygon.outlineColor = Cesium.Color.fromCssColorString('yellow');
      }}
      onMouseLeave={(movement, target) => {
        console.log(2);
        target.id.polygon.material = Cesium.Color.fromCssColorString('rgba(175, 238, 238, 0.75)');
        target.id.polygon.outlineColor = Cesium.Color.fromCssColorString('yellow');
      }}
      onLoad={(e) => {
        const entities = e.entities.values;
        for (let i = 0; i < entities.length; i++) {
          const entity = entities[i];
          entity.polygon.material = Cesium.Color.fromCssColorString('rgba(175, 238, 238, 0.75)');
          entity.polygon.extrudedHeight = 20;
          entity.polygon.outlineWidth = 50;
          entity.polygon.outlineColor = Cesium.Color.fromCssColorString('rgba(175, 238, 238, 1)');
        }
      }}
    />
    <GeoJsonDataSource
      show
      data={bjJson}
      stroke={Cesium.Color.AQUA}
      strokeWidth={3}
      name="community"
      onClick={false}
      onLoad={(e) => {
        const entities = e.entities.values;
        for (let i = 0; i < entities.length; i++) {
          const entity = entities[i];
          entity.polygon.material = Cesium.Color.fromCssColorString('rgba(127, 255, 170, 0.15)');
          entity.polygon.extrudedHeight = 20;
          entity.polygon.outlineWidth = 100;
          entity.polygon.outlineColor = Cesium.Color.fromCssColorString('rgba(72, 61, 139, 1)');
        }
      }}
    />
  </BaseMap>;
});