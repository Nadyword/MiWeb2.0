/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5069/Inmo/api/:path*',
      },
    ];
  },
};

export default nextConfig;
