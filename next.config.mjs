import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.giphy.com',
            port: '',
            pathname: '/media/**',
          },
        ],
      },
    
};

export default withNextVideo(nextConfig);