# h5 living-detection

使用[百度AI h5活体检测api](https://ai.baidu.com/docs#/Face-H5Liveness-V3/top) （语音校验码+视频录制）, 判断当前用户的真实性。

## 项目运行

```bash
$ git clone https://github.com/sunzitong/living-detection.git
$ cd living-detection
$ npm install
$ npm run start                      # 打开mock数据
$ npm run start-without-mock         # 关闭mock数据
本地访问 http://localhost:8077/living-detection/home 进行访问

注： 若提示 ‘Open api daily request limit reached’， 表示今天调用api的次数已达上线。
```
## 扫描下方二维码查看实际演示效果

### mobile web demo

<img width="250" src="https://github.com/sunzitong/living-detection/blob/master/src/assets/linkaddress.png" />

http://www.agonyszt.com/living-detection/#/home
