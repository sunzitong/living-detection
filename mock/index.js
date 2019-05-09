import { delay } from 'roadhog-api-doc';

const getVoiceSessionCode = {
  err_no: 0,
  err_msg: 'SUCCESS',
  result: {
    session_id: 'S5cd3f05b2b5d5634172969',
    code: '376',
  },
  timestamp: 1557393499,
  cached: 0,
  serverlogid: 304569273934991631,
  error_code: 0,
  error_msg: 'SUCCESS',
};

const proxy = {
  'POST /rest/2.0/face/v1/faceliveness/sessioncode': getVoiceSessionCode,
};
export default delay(proxy, 100);
