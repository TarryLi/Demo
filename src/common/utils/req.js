/* eslint-disable max-len */
import axios from 'axios';
import qs from 'qs';
import {
  isBoolean, isFunction, has, omit
} from 'lodash';
import { APP_CODE, API_BASE_URL } from '@/common/constants';

// const { NODE_ENV } = process.env;

const CONTENT_TYPES = {
  1: 'application/json',
  2: 'application/x-www-form-url-urlencode',
  3: 'multipart/form-data'
};

function getConfigValue(key, value, defaultValue) {
  const { __JDC_MFE_CONFIG__: CONFIG, __JDC_MFE_ACTIVE_APP__: APP } = window;
  if (typeof value !== 'undefined') {
    return value;
  }
  if (APP && typeof APP[key] !== 'undefined') {
    return APP[key];
  }
  if (CONFIG && typeof CONFIG[key] !== 'undefined') {
    return CONFIG[key];
  }
  return defaultValue;
}

function getAppCode(appCode) {
  return getConfigValue('appCode', appCode, APP_CODE);
}

function getBaseURL(baseURL) {
  return getConfigValue('apiBaseURL', baseURL, API_BASE_URL);
}

/**
 * 获取ajax请求
 * @param {Object} param
 * {
 *  baseURL {String}: axios baseURL属性
 *  appCode {String}: 应用编码
 *  withCredentials {Boolean}: axios withCredentials属性
 *  successCodes { Array | String | Number } 成功code
 *  noAuthCodes { Array | String | Number } 无权限code
 *  noAuthHandler {Function}: 无权限处理函数
 *  adjustConfig {Function}: config自定义校准函数
 *  doneHandle {Function}: 请求成功回调
 *  failHandle {Function}: 请求失败回调
 * }
 */
function ajaxGetter({
  baseURL,
  appCode,
  withCredentials,
  adjustConfig
} = {}) {
  withCredentials = isBoolean(withCredentials) ? withCredentials : true;
  // 缓存正在请求的ajax
  return (url, options) => {
    const _appCode = getAppCode(options.appCode || appCode);
    const _baseURL = getBaseURL(options.baseURL || baseURL);
    const method = (options.method || 'post').toLowerCase();
    const headers = {};
    // headers中携带应用编码
    if (_appCode) {
      headers['cityos-application-code'] = _appCode;
    }
    if (options.contentType) {
      headers['Content-Type'] = CONTENT_TYPES[options.contentType] || options.contentType;
    }
    const config = {
      url,
      method,
      baseURL: _baseURL,
      withCredentials: isBoolean(options.withCredentials)
        ? options.withCredentials
        : withCredentials,
      headers: { ...headers, ...(options.headers || {}) }
    };
    if (options.responseType) {
      config.responseType = options.responseType;
    }
    if (['get', 'delete'].indexOf(method) !== -1 && options.body !== true) {
      // remove Content-Type if data is undefined
      config.data = true;
      config.params = options.data;
      if (options.serialize) {
        config.paramsSerializer = (params) =>
          qs.stringify(params, isBoolean(options.serialize) ? { arrayFormat: 'repeat' } : options.serialize);
      }
    } else if (options.contentType === 2) {
      config.data = qs.stringify(options.data);
    } else {
      config.data = options.data;
    }
    const _adjustConfig = options.adjustConfig || adjustConfig;
    if (isFunction(_adjustConfig)) {
      _adjustConfig(config);
    }
    return axios(config)
      .then(({ data }) => data)
      .catch((error) => Promise.reject(error));
  };
}

/**
 * 获取ajax请求生成器
 * @param {Function} ajaxHandler
 */
function genAjaxGetter(ajaxHandler) {
  /**
   * 根据配置批量生成ajax请求
   * @param {Object} options
   */
  return (options) => {
    const result = {};
    options.items.forEach(item => {
      result[item.key] = function (params) {
        let url = (item.prefix || options.prefix || '') + (item.url || '');
        let data = params;
        // 解析restful风格的请求，eg：/a/:b/:c
        if (/\/:/.test(url)) {
          const excludes = [];
          url = url.replace(/:([^/]+)/g, (match, p1) => {
            if (has(data, p1)) {
              excludes.push(p1);
              return data[p1];
            }
            return match;
          });
          data = omit(data, excludes);
        }
        return ajaxHandler(
          url,
          {
            data,
            ...omit(options, ['prefix', 'items']),
            ...omit(item, ['key', 'url', 'prefix'])
          }
        );
      };
    });
    return result;
  };
}

const ajax = ajaxGetter();

const genAjax = genAjaxGetter(ajax);

export {
  ajax,
  genAjax,
  ajaxGetter,
  genAjaxGetter,
  getAppCode,
  getBaseURL
};
