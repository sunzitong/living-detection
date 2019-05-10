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

const verify = {

  err_no: 0,
  err_msg: 'SUCCESS',
  result: {
    score: 0.984654366,
    thresholds: {
      'frr_1e-4': 0.05,
      'frr_1e-3': 0.3,
      'frr_1e-2': 0.9,
    },
    code: {
      create: 5789,
      identify: 5789,
    },
    pic_list: [
      {
        face_id: 5745745747,
        // pic: gsagaheryzxv...
      },
      {
        face_id: 5745745747,
        // pic: gsagaheryzxv...
      },
    ],
  },
  timestamp: 1509611848,
  cached: 0,
  serverlogid: 2248375729,
};

const proxy = {
  'POST /rest/2.0/face/v1/faceliveness/sessioncode': getVoiceSessionCode,
  'POST /rest/2.0/face/v1/faceliveness/verify': verify,
};
export default delay(proxy, 100);
