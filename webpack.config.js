const Encore = require('@symfony/webpack-encore');
const path = require('path');

const libAssets = path.resolve(__dirname, 'assets/js/lib');

Encore
  // directory where compiled assets will be stored
  .setOutputPath('src/Resources/public')
  // public path used by the web server to access the output path
  .setPublicPath('/public')

  // entries
  .addEntry('advanced-shipping', './assets/js/app.js')

  // copy images
  .copyFiles({
    from: './assets/images',
    to: 'images/[path][name].[ext]',
    includeSubdirectories: true,
    pattern: /\.(png|jpg|jpeg|svg)$/
  })

  // configuration
  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())

  // organise files
  .configureFilenames({
    js: 'js/[name].js',
    css: 'css/[name].css',
  })
  .configureImageRule({
    type: 'asset',
    filename: `images/[name].[ext]`,
  })
;

const config = Encore.getWebpackConfig();
config.resolve.alias = {
  '@lib': libAssets,
};

module.exports = config;
