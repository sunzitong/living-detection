import path from 'path';
// ref: https://umijs.org/config/
let origin = process.env.environment;

switch (origin) {
  case 'env':
    origin = 'http://localhost:8077';
    break;
  case 'online':
    origin = 'https://aip.baidubce.com';
    break;
  // case 'production':
  //   origin = 'http://work.order.gyapt.cn';
  //   break;
  default:
    origin = 'http://localhost:8077';
}
console.log(origin)
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'living-detection',
      dll: true,
      hd: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  alias: {
    assets: path.resolve(__dirname, 'src/assets'),
    utils: path.resolve(__dirname, 'src/utils'),
    components: path.resolve(__dirname, 'src/components'),
    services: path.resolve(__dirname, 'src/services'),
    '@': path.resolve(__dirname, 'src'),
  },
  routes: [
    {
      path: '/living-detection', component: '../layouts/index.js', routes: [
        // 活体识别
        { path: '/living-detection/home', component: './home/Home', title: '活体识别' },
      ]
    },
  ],
  proxy: {
    "/rest": {
      "target": origin,
      "changeOrigin": true,
      "secure": false,
    },
  }
}
