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
  },
  {
    path: '/history',
    name: '路由',
    component: () => import('@/pages/history')
  },
  {
    path: '/webworker',
    name: 'webworker',
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
  }
];
