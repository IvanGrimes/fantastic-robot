const withOptimizedImages = require('next-images');
const withOffline = require('next-offline');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css');

const withFonts = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { isServer } = options;
      const assetPrefix = nextConfig.assetPrefix || '';
      const testPattern = /\.(woff|woff2|eot|ttf|otf)$/;

      config.module.rules.push({
        test: testPattern,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: `${assetPrefix}/_next/static/fonts/`,
              outputPath: `${isServer ? '../' : ''}static/fonts/`,
              name: '[name].[hash].[ext]',
            },
          },
        ],
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};

module.exports = withOffline(
  withBundleAnalyzer(
    withFonts(
      withCSS(
        withOptimizedImages({
          target: 'serverless',
          analyzeBrowser: Boolean(process.env.BUNDLE_ANALYZE),
          bundleAnalyzerConfig: {
            browser: {
              analyzerMode: 'static',
              reportFilename: '../bundles/client.html',
            },
          },
          webpack(config) {
            config.plugins.push(
              new Dotenv({
                systemvars: true,
              })
            );

            return config;
          },
          env: {
            SPACE_ID: process.env.SPACE_ID,
            ACCESS_TOKEN: process.env.ACCESS_TOKEN,
            TELEGRAM_API: process.env.TELEGRAM_API,
            TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
          },
          workboxOpts: {
            swDest: 'static/service-worker.js',
            runtimeCaching: [
              {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                  cacheName: 'https-calls',
                  networkTimeoutSeconds: 15,
                  expiration: {
                    maxEntries: 150,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                  },
                  cacheableResponse: {
                    statuses: [0, 200],
                  },
                },
              },
            ],
          },
          inlineImageLimit: 4096,
          optimizeImages: true,
          optimizeImagesInDev: false,
          responsive: {
            sizes: [320, 375, 420, 500, 620, 768],
            placeholder: true,
            placeholderSize: 40,
          },
          mozjpeg: {
            quality: 80,
          },
          optipng: {
            optimizationLevel: 3,
          },
          gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
          },
        })
      )
    )
  )
);
