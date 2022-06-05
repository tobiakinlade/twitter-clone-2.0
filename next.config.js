/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cloudflare-ipfs.com', 'localhost', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
