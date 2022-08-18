/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

export default () => {
  useEffect(() => {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhNmU0YmNjNi0yM2U5LTRlYTUtYmM4MC1hZTQ5MWNjYzg2M2QiLCJpZCI6MTA0ODU5LCJpYXQiOjE2NjA2MzM2ODh9.X7GnCnfqFH8Nnpa4uUyfpit-mCHFfiwJh0qp0ZpGkR8';

    const viewer = new Cesium.Viewer('cesiumContainer', {
      baseLayerPicker: false, // 如果设置为false，将不会创建右上角图层按钮。
      geocoder: false, // 如果设置为false，将不会创建右上角查询(放大镜)按钮。
      navigationHelpButton: false, // 如果设置为false，则不会创建右上角帮助(问号)按钮。
      homeButton: false, // 如果设置为false，将不会创建右上角主页(房子)按钮。
      sceneModePicker: false, // 如果设置为false，将不会创建右上角投影方式控件(显示二三维切换按钮)。
      animation: false, // 如果设置为false，将不会创建左下角动画小部件。
      timeline: false, // 如果设置为false，则不会创建正下方时间轴小部件。
      fullscreenButton: false, // 如果设置为false，将不会创建右下角全屏按钮。
      scene3DOnly: true, // 为 true 时，每个几何实例将仅以3D渲染以节省GPU内存。
      shouldAnimate: false, // 默认true ，否则为 false 。此选项优先于设置 Viewer＃clockViewModel 。
      // ps. Viewer＃clockViewModel 是用于控制当前时间的时钟视图模型。我们这里用不到时钟，就把shouldAnimate设为false
      infoBox: false, // 是否显示点击要素之后显示的信息
      sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
      requestRenderMode: false, // 启用请求渲染模式，不需要渲染，节约资源吧
      fullscreenElement: document.body, // 全屏时渲染的HTML元素 暂时没发现用处，虽然我关闭了全屏按钮，但是键盘按F11 浏览器也还是会进入全屏
      imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
      })
    });

    viewer._cesiumWidget._creditContainer.style.display = 'none';// 隐藏版权

    viewer.imageryLayers.addImageryProvider(
      new Cesium.UrlTemplateImageryProvider({
        url: 'http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8'
      })
    );
    // 设置初始位置  Cesium.Cartesian3.fromDegrees(longitude, latitude, height, ellipsoid, result)
    const boundingSphere = new Cesium.BoundingSphere(
      Cesium.Cartesian3.fromDegrees(116.38333333333, 39.9, 100),
      15000
    );
    // 定位到初始位置
    viewer.camera.flyToBoundingSphere(boundingSphere, {
      // 动画，定位到初始位置的过渡时间，设置成0，就没有动画
      duration: 0
    });
  }, []);

  return <div className={style.wrap}>
    <div id="cesiumContainer"></div>
  </div>;
};
