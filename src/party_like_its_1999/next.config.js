const pkg = require('./package.json');

// Apply HTTP response headers to all routes in the application.
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  }
];

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // specify a name to use for a custom build directory to use instead of .next.
  distDir: './dist',

  generateBuildId: async () => {
    return pkg.version;
  },


  // Apply these headers to all routes in your application.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },

}

module.exports = nextConfig;
