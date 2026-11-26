
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.DEPLOY_TARGET === 'ec2' ? '' : '/personal-portfolio',
  transpilePackages: ['three'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
