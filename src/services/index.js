import CreateApi from 'utils/createAPI';

// 获取语音校验码
export const getVoiceSessionCode = CreateApi('/rest/2.0/face/v1/faceliveness/sessioncode', 'POST');

// 视频活体检测
export const verify = CreateApi('/rest/2.0/face/v1/faceliveness/verify', 'POST');
