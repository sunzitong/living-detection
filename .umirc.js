import path from 'path';
// ref: https://umijs.org/config/
let origin = process.env.environment;
let publicPath = '/';
switch (origin) {
  case 'env':
    origin = 'http://localhost:8077';
    publicPath = '/';
    break;
  case 'online':
    origin = 'https://aip.baidubce.com';
    publicPath = '/';
    break;
  case 'production':
    origin = 'https://aip.baidubce.com';
    publicPath = '/living-detection/';
    break;
  default:
    origin = 'http://localhost:8077';
    publicPath = '/';
}
console.log(`origin:${origin}`)
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
  publicPath: publicPath,
  alias: {
    assets: path.resolve(__dirname, 'src/assets'),
    utils: path.resolve(__dirname, 'src/utils'),
    components: path.resolve(__dirname, 'src/components'),
    services: path.resolve(__dirname, 'src/services'),
    '@': path.resolve(__dirname, 'src'),
  },
  base: '/living-detection',
  history: 'hash',
  define: {
    "process.env.environment": process.env.environment
  },
  routes: [
    {
      path: '/', component: '../layouts/index.js', routes: [
        // 活体识别
        { path: '/home', component: './home/Home', title: '活体识别' },
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
