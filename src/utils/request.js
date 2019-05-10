import fetch from 'dva/fetch';
import { stringify } from 'qs';
import { Toast } from 'antd-mobile';
import { accessToken } from '../../user';

const origin = process.env.environment;

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '身份过期,重新登陆app',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  408: '请求超时',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
function checkStatus(response) {
  if (response.status === 200 || response.status === 304) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  const error = new Error(errortext);
  error.status = response.status;
  error.response = response;
  throw error;
}

export default function request(url, options) {
  const defaultOptions = {
    // credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        ...newOptions.headers,
      };
      newOptions.body = stringify(newOptions.body);
    } else {
      /**
       * newOptions.body是FormData的情况，此时不可以设置hearder
       */
      newOptions.headers = {};
      // 'Content-Type': 'multipart/form-data',
    }
  } else {
    newOptions.headers = {
      ...newOptions.headers,
    };
  }
  const newUrl = `${origin === 'production' ? 'https://aip.baidubce.com' : ''}${url}?access_token=${accessToken}`;
  return fetch(newUrl, newOptions)
    .then(checkStatus)
    .then(async (response) => {
      const RESPONSE = response.json();
      const result = await RESPONSE;
      if (result.err_msg !== 'SUCCESS') {
        Toast.fail(result.error_msg);
        return undefined;
      }
      return RESPONSE;
    })
    .catch((e) => {
      setTimeout(() => {
        if (e.message !== '已取消') {
          Toast.fail(e.message);
        }
      }, 0);
    });
}
