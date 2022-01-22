import { get } from 'lodash';
import qs from 'qs';
import { getAppCode } from './req';
import { getAccessToken } from './cache';

/**
 * 请求地址携带参数和凭证信息
 * @param {String} url 请求地址
 * @param {Object} query 请求参数
 * @param {String} appCode 应用编码
 * @param {String} jwtToken token信息
 */
export function withCredentials(url, query = {}, appCode, jwtToken) {
  if (url.indexOf('?') === -1) {
    url += '?';
  } else {
    url += '&';
  }
  appCode = getAppCode(appCode);
  const _query = { ...query };
  const _token = getAccessToken();
  if (appCode) {
    _query.appCode = appCode;
  }
  if (jwtToken || _token) {
    _query.jwtToken = jwtToken || get(_token.split(' '), '[1]');
  }
  url += qs.stringify(_query);
  return url;
}
