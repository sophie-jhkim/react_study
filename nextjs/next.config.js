/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [{ source: "/contact", destination: "/form", permanent: false }];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: ``,
      },
    ];
  },
};

module.exports = nextConfig;
