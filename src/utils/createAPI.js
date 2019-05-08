import { stringify } from 'qs';
import request from '@/utils/request';

export default function CreateApi(URL, METHOD = 'GET') {
  return async function r(params) {
    switch (METHOD.toUpperCase()) {
      case 'GET':
        return request(`${URL}?${stringify(params)}`);
      case 'POST':
        return request(`${URL}`, {
          method: 'POST',
          body: params,
        });
      case 'DOWNLOAD':
        return request(`${URL}?${stringify(params)}`, {
          method: 'GET',
          download: true,
        });
      default:
        break;
    }
  };
}
