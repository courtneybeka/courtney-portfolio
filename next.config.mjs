/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      // If you still need the wildcard for other domains, you can add it back:
      // {
      //   protocol: 'https',
      //   hostname: '**',
      // },
    ],
  },
};

export default nextConfig;
