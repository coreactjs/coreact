const path = require('path');
const {Webpack} = require('coreact/dist/webpack');
const instance = new Webpack({
  mode: process.env.NODE_ENV,
  entries: {
    app: [
      './src/client.ts',
      './styles/app.sass'
    ]
  },
  enableGzip: false,
  path: path.resolve(__dirname, './bundle'),
  publicPath: process.env.NODE_ENV === 'production' ? 'bundle/default/' : '/dist/',
  sassOptions: {
    includePaths: [path.resolve(__dirname, './styles')],
    data:'@import "variables";'
  },
});
instance.isolate(process.env.APP_NAME);
module.exports = instance.config();
