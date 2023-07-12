/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import { decorators } from '@/common';
import api from '@/services';

const { store: { merge } } = decorators;

const DEFAULTS = {
  viewer: null
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
  }
}

export default new App();
