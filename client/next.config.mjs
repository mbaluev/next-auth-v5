/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {
      allowedForwardedHosts: ['localhost'],
      allowedOrigins: ['http://localhost']
    },
  }
};

export default nextConfig;
