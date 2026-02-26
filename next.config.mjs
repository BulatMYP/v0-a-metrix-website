/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',          // <- добавьте эту строку
  assetPrefix: '',       // <- и эту
  images: {
    unoptimized: true,   // если уже была
  },
};

export default nextConfig;