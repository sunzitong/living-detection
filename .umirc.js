import path from 'path';
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
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
    '@': path.resolve(__dirname, 'src'),
  },
  routes: [
    {
      path: '/living-detection', component: '../layouts/index.js', routes: [
        // 我的积分
        { path: '/living-detection/home', component: './home/Home', title: '活体识别' },
      ]
    },
  ],
}
