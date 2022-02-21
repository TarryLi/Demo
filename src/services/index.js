/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { utils } from '@/common';

const gatewayConfig = {
  prefix: '/permission/web/v2',
  items: [
    // 获取权限菜单
    { key: 'queryMenus', url: '/menus', method: 'get' }
  ]
};

export default {
  ...utils.req.genAjax(gatewayConfig)
};
