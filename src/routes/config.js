/* eslint-disable no-unused-vars */
export default [
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
    name: 'requestAnimationFrame',
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
  }
];
