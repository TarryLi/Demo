/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Menu } from 'antd';
import style from './index.module.less';

export default () => {
  useEffect(() => {

  }, []);

  return <div className={style.wrap}>
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
      <Menu.SubMenu key="mail" title="投资部门">
        <Menu.Item key="two">
          我的项目
        </Menu.Item>
        <Menu.Item key="three">
          项目复盘
        </Menu.Item>
        <Menu.Item key="three">
          项目台账
        </Menu.Item>
        <Menu.Item key="three">
          项目查重
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="SubMenu" title="另类风控">
        <Menu.Item key="two">
          项目分工
        </Menu.Item>
        <Menu.Item key="three">
          我的项目
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="ls" title="另类律师">
        <Menu.Item key="two">
          项目分工
        </Menu.Item>
        <Menu.Item key="three">
          我的项目
        </Menu.Item>
        <Menu.Item key="three">
          项目列表
        </Menu.Item>
        <Menu.Item key="three">
          合规审查清单
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </div>;
};
