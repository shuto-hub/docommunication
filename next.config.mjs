/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LIVEBLOCKS_API_KEY: process.env.LIVEBLOCKS_API_KEY,
  },
};

export default nextConfig;
