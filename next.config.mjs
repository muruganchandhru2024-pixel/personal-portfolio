
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-portfolio',
  transpilePackages: ['three'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
