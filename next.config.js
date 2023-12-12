/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'factjano-public-images.s3.ap-south-1.amazonaws.com',
          },
          {
            protocol: 'https',
            hostname: 'factjano.com',
          },
          {
            protocol: 'https',
            hostname: 'play.google.com',
          },
          {
            protocol: 'https',
            hostname: 'user-images.githubusercontent.com',
          },
        ],
      },
};

module.exports = nextConfig;
