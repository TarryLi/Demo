/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
export default [
  {
    path: '/cesium',
    name: 'cesium地图',
    component: () => import('@/pages/cesium')
  },  
  {
    path: '/svg',
    name: 'svg压缩插件',
    component: () => import('@/pages/svg')
  },  
  {
    path: '/allocation',
    name: '分配',
    component: () => import('@/pages/allocation')
  },  
  {
    path: '/water',
    name: '水印',
    component: () => import('@/pages/water')
  },
  {
    path: '/promiseRace',
    name: 'promiseRace【多异步任务，控制并发】',
    component: () => import('@/pages/promiseRace')
  },
  {
    path: '/scheduler',
    name: 'scheduler【小而多任务切片】',
    component: () => import('@/pages/scheduler')
  },
  {
    path: '/gpt',
    name: 'chatGpt',
    component: () => import('@/pages/gpt')
  },
  {
    path: '/canvars',
    name: 'canvars基础',
    component: () => import('@/pages/canvars')
  },
  {
    path: '/canvasAnimation',
    name: 'canvars动画',
    component: () => import('@/pages/canvasAnimation')
  },
  {
    path: '/compressImg',
    name: '图片压缩',
    component: () => import('@/pages/compressImg')
  },
  {
    path: '/RAF',
    name: 'requestAnimationFrame【帧回调】',
    component: () => import('@/pages/RAF')
  },
  {
    path: '/virtualScroll',
    name: '虚拟滚动',
    component: () => import('@/pages/virtualScroll')
  },
  {
    path: '/timeInterval',
    name: '计时器误差',
    component: () => import('@/pages/timeInterval')
  },
  {
    path: '/reg',
    name: '正则',
    component: () => import('@/pages/reg')
  },
  {
    path: '/curry',
    name: '柯里化',
    component: () => import('@/pages/curry')
  },
  {
    path: '/monaco',
    name: 'monaco编辑器',
    component: () => import('@/pages/monaco')
  },
  {
    path: '/codeRun',
    name: 'codeRun',
    component: () => import('@/pages/codeRun')
  },
  {
    path: '/someTest',
    name: 'someTest',
    component: () => import('@/pages/someTest')
  },
  {
    path: '/typeScript',
    name: 'typeScript',
    component: () => import('@/pages/typeScript')
  },
  {
    path: '/groundGlass',
    name: '毛玻璃',
    component: () => import('@/pages/groundGlass')
  },
  {
    path: '/history',
    name: '路由',
    component: () => import('@/pages/history')
  },
  {
    path: '/webworker',
    name: 'webworker【多线程】',
    component: () => import('@/pages/webworker')
  },
  {
    path: '/text-overflow',
    name: '超出截断',
    component: () => import('@/pages/text-overflow')
  },
  {
    path: '/proportion',
    name: '元素宽高比',
    component: () => import('@/pages/proportion')
  },
  {
    path: '/flex',
    name: 'Flex',
    component: () => import('@/pages/flex')
  },
  {
    path: '/codingMan',
    name: 'codingMan',
    component: () => import('@/pages/codingMan')
  },
  {
    path: '/three',
    name: '三栏布局',
    component: () => import('@/pages/three')
  },
  {
    path: '/ant-x6',
    name: 'ant-x6',
    component: () => import('@/pages/ant-x6')
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('@/pages/ref')
  },
  {
    path: '/async-await',
    name: 'async-await',
    component: () => import('@/pages/async-await')
  },
  {
    path: '/promise',
    name: 'promise【手写】',
    component: () => import('@/pages/promise')
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import('@/pages/grid')
  },
  {
    path: '/class',
    name: 'class',
    component: () => import('@/pages/class')
  },
  {
    path: '/hooks',
    name: 'hooks',
    component: () => import('@/pages/hooks')
  },
  {
    path: '/refrash',
    name: 'refrash',
    component: () => import('@/pages/refrash')
  },
  {
    path: '/gis',
    name: 'gis',
    component: () => import('@/pages/gis')
  },
  {
    path: '/redux',
    name: 'redux',
    component: () => import('@/pages/redux')
  },
  {
    path: '/arcgis',
    name: 'arcgis',
    component: () => import('@/pages/arcgis')
  },
  {
    path: '/nav',
    name: 'nav',
    component: () => import('@/pages/nav')
  },
  {
    path: '/iframe',
    name: 'iframe',
    component: () => import('@/pages/iframe')
  },
  {
    path: '/vueSdk',
    name: 'vueSdk',
    component: () => import('@/pages/vueSdk')
  },
  {
    path: '/leaflet',
    name: 'leaflet',
    component: () => import('@/pages/leaflet')
  },
  {
    path: '/bable',
    name: 'bable',
    component: () => import('@/pages/bable')
  },
  {
    path: '/particleAnimation',
    name: '粒子动画',
    component: () => import('@/pages/particleAnimation')
  },
  {
    path: '/pubsub',
    name: '发布订阅',
    component: () => import('@/pages/pubsub')
  },
  {
    path: '/decorator',
    name: '装饰器',
    component: () => import('@/pages/decorator')
  }
];
