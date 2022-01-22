import loadable from '@loadable/component';
import { clearAuth } from './cache';

let uid = 1;

function genUid() {
  return `_${uid++}`;
}

function dynamicImport(Comp) {
  return loadable(Comp);
}

export function format(routes) {
  const routeMap = {};
  // 格式化原始路由数据，添加一些辅助信息，并生成map对象
  function toMap(data, parent) {
    data.forEach(item => {
      item.id = genUid();
      if (item.component) {
        item.component = dynamicImport(item.component);
      }
      if (parent && !parent.layout) {
        item.parentPaths = [...(parent.parentPaths || []), parent.path];
      }
      if (!item.redirect && item.path) {
        routeMap[item.path] = item;
      }
      if (item.routes && item.routes.length) {
        toMap(item.routes, item);
      }
    });
  }
  toMap(routes);
  // 将原始路由数据转换为array形式，将layout下的子路由展平
  function toArr(data) {
    return data.reduce((prev, { routes: children, ...rest }) => {
      if (!children || !children.length) {
        return prev.concat(rest);
      }
      if (rest.layout) {
        return prev.concat({ ...rest, routes: toArr(children) });
      }
      if (rest.component) {
        return prev.concat(rest, ...toArr(children));
      }
      return prev.concat(...toArr(children));
    }, []);
  }
  const routeArr = toArr(routes);
  return { routeArr, routeMap };
}

const loginPath = '/login';
const noAuthPath = '/401';

const isLogining = () => {
  const { hash } = window.location;
  if (hash.indexOf(`#${loginPath}`) === 0) {
    return true;
  }
  return false;
};

const goLogin = (returnUrl) => {
  if (isLogining) {
    return;
  }
  clearAuth();
  let href = '';
  if (!returnUrl) {
    href = `#${loginPath}`;
  } else {
    href = `#${loginPath}?returnUrl=${returnUrl}`;
  }
  const { __PROJECT_NAME__, location } = window;
  window.location.href = `${__PROJECT_NAME__ === 'cityos' ? '/' : location.pathname}${href}`;
};

const goNoAuth = () => {
  const { __PROJECT_NAME__, location } = window;
  window.location.href = `${__PROJECT_NAME__ === 'cityos' ? '/' : location.pathname}#${noAuthPath}`;
};

export {
  isLogining,
  goLogin,
  goNoAuth
};
