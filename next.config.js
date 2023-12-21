// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withPlugins = require("next-compose-plugins");

const nextConfig = {};

module.exports = withPlugins([
  [withBundleAnalyzer({
    staticPageGenerationTimeout: 1000,
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
        'localhost:3000',
        'hye-dev.vercel.app'
      ],
      formats: ['image/avif', 'image/webp'],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
    }
  })]
], nextConfig);
