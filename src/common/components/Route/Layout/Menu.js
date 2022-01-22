import React from 'react';
import { Menu } from 'antd';
import menuData from '@/routes/config';
import style from './Menu.module.less';

function parseMenuPath() {
  const { hash } = window.location;
  return hash.split('?')[0].replace(/^#/, '');
}

export default () => {
  const menuClick = (path) => {
    window.location.hash = `#${path}`;
  };

  const menuRender = () =>
    menuData.map(item => <Menu.Item
      key={item.path}
      onClick={() => menuClick(item.path)}
    >
      {item.name}
    </Menu.Item>);

  const getDefault = () => {
    let selectedKeys = null;
    const _path = parseMenuPath();
    menuData.forEach(({ path }) => {
      if (path === _path) {
        selectedKeys = path;
      }
    });
    return selectedKeys;
  };

  return <div className={style['menu-wrap']}>
    {/* <div className={style['menu-bg']}></div> */}
    <Menu
      style={{ width: 256 }}
      mode="inline"
      className={style.menu}
      defaultSelectedKeys={getDefault()}
    >
      {menuRender()}
    </Menu>
  </div>;
};
