/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [{ source: '/contact', destination: '/form', permanent: false }];
  },
  async rewrites() {
    console.log('rewrites');
    console.log(process.env.NEXT_PUBLIC_API_URL);
    console.log('NEXT_PUBLIC_API_KEY : ' + process.env.NEXT_PUBLIC_API_KEY);
    console.log('API_KEY : ' + process.env.API_KEY);
    return [
      {
        source: '/api/movies',
        destination: `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.API_KEY}&targetDt=20220825`
      },
      {
        source: '/api/animals',
        destination: `${process.env.NEXT_PUBLIC_API_URL}?serviceKey=${encodeURI(process.env.NEXT_PUBLIC_API_KEY)}&_type=json`
      }
    ];
  }
};

module.exports = nextConfig;
