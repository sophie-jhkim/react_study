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
        destination: `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.API_KEY}&targetDt=20220825`,
      },
      {
        source: "/api/animals/:type",
        destination: `${process.env.NEXT_PUBLIC_API_URL}?serviceKey=${process.env.NEXT_PUBLIC_API_KEY}&_type=:type`,
      },
    ];
  },
};

module.exports = nextConfig;
