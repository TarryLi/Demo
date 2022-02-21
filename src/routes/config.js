/* eslint-disable @typescript-eslint/no-unused-vars */
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
  }
];
