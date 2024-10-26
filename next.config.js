const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
rewrites: async () => [
  {
    source: "/public/myfile.html",
    destination: "/pages/api/myguy.js",
  },
],
module.exports = {
  async redirects() {
    return [
      {
        source: '/public/index1.html',
        destination: '/pages/api/myguy.js',
      },
    ]
  },
}
module.exports = withContentlayer(nextConfig);


