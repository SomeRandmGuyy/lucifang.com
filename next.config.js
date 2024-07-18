const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
    register: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
          },
        },
      },
      {
        urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cloudflare-cdn',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
          },
        },
      },
      {
        urlPattern: /.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'default-cache',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
          },
        },
      },
    ],
  });
  
  module.exports = withPWA({
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      styledComponents: true,
    },
    optimizeFonts: false,
    async rewrites() {
      return [
        {
          source: '/(links|lnk|l)',
          destination: '/',
        },
      ];
    },
  });  