// 兼容处理，请使用APP_CODE
export const CITYOS_APP_CODE = 'DRIGHT';

export const APP_CODE = 'DRIGHT';

export const API_BASE_URL = '/api';

/**
 * 分页参数
 */
export const PAGINATION = {
  current: 1,
  total: 0,
  pageSize: 20,
  size: 'middle',
  pageSizeOptions: ['10', '20', '30', '40'],
  showSizeChanger: true,
  showQuickJumper: true,
  hideOnSinglePage: false,
  showTotal: total => `共 ${total} 条`
};

// 订阅发布主题
export const PUB_SUB_TOPIC = {
  // 兼容旧的命名
  // 权限数据查询
  QUERY_AUTHS: 'AUTH_MAP',
  // 用户上下文查询
  QUERY_USER_CONTEXT: 'USER_CTX',

  // 初始化
  INIT: 'INIT',
  // 权限数据
  AUTH_MAP: 'AUTH_MAP',
  // 用户上下文
  USER_CTX: 'USER_CTX',
  // 激活状态的应用
  ACTIVE_APP: 'ACTIVE_APP',
  // 激活的布局
  ACTIVE_LAYOUT: 'ACTIVE_LAYOUT'
};
