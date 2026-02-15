javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // обязательно для генерации статики
  images: {
    unoptimized: true, // если используете next/image
  },
  // trailingSlash: true, // опционально
};

export default nextConfig;
