import {
  getVoiceSessionCode,
  verify,
} from 'services';

export default {

  state: {
  },

  effects: {
    *getVoiceSessionCode({ payload }, { call }) {
      const response = yield call(getVoiceSessionCode, payload);
      return response;
    },
    *verify({ payload }, { call }) {
      const response = yield call(verify, payload);
      return response;
    },
  },

  reducers: {
  },
};
