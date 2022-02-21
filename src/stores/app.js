/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import { decorators, utils } from '@/common';
import ROUTES from '@/routes/config';
import api from '@/services';

const { store: { merge } } = decorators;

const { route } = utils;

const DEFAULTS = {
  // 路由Array
  routeArr: [],
  // 路由Map
  routeMap: {}
};

/**
 * 可配置ACTION
 */
const ACTIONS = {
  caller: api,
  items: []
};

/**
 * 全局store
 */
@merge(DEFAULTS, ACTIONS)
class App {
  constructor() {
    this.init();
    const { routeArr, routeMap } = route.format(ROUTES);
    Object.assign(this, { routeArr, routeMap });
  }
}

export default new App();
