/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['three'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
