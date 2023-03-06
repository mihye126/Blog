// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {};

module.exports = withPlugins([
  [optimizedImages, {
    optimizeImages: false,
  }],[withBundleAnalyzer({
    images: {
      loader:'akamai',
      path:'/',
      domains: [
        'www.notion.so',
        'notion.so',
        'images.unsplash.com',
        'pbs.twimg.com',
        'abs.twimg.com',
        's3.us-west-2.amazonaws.com',
        'static.solved.ac',
        'ibb.co',
      ],
      formats: ['image/avif', 'image/webp'],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
    }
  })],[{
    webpackDevMiddleware: (config) => {
      // Webpack Dev Middleware 설정
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
      return config;
    },
    webpack: (config, { isServer }) => {
      // Webpack 설정
      if (!isServer) {
        config.node = {
          fs: 'empty',
          net: 'empty',
          tls: 'empty',
        };
        config.devServer = {
          client: {
            webSocketURL: 'http://localhost:3000',
            // 웹소켓 연결 대신 HTTP 롱 폴링 사용
            transport: 'polling',
          },
        };
      }
      return config;
    },
  }  
  
  ]
], nextConfig);
