const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  images: {
    domains: ['images.prismic.io'],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
