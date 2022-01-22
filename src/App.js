import React from 'react';
import { inject, observer } from 'mobx-react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { Route } from '@/common/components';
import '@/styles/index.less';

export default inject('app')(
  observer(({ app: { routeArr } }) => (
    <ConfigProvider locale={zhCN}>
      <Route routes={routeArr} />
    </ConfigProvider>
  ))
);
