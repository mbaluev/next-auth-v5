/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost', 'auth-client', 'mbaluev.com'],
    },
  },
};

export default nextConfig;
