/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/my-app',
  output: 'standalone',
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/:p*',
        headers: [
          {
            key: 'X-Powered-By',
            value: 'next@14.2.17'
          }
        ]
      }
    ]
  },

  async redirects() {
    const redirects = [];

    if (process.env.APP_URL?.startsWith('http://localhost')) {
      redirects.push({
        source: '/',
        destination: nextConfig.basePath,
        basePath: false,
        permanent: false,
      })
    }

    return redirects;
  }
};

export default nextConfig;
