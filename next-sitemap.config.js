/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://flgmn.tech',
  generateRobotsTxt: false, // Используем ручной robots.txt
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin', '/private', '/api'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
  },
  // Дополнительные маршруты
  additionalPaths: [
    {
      loc: '/about',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/contact',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  ],
};

module.exports = config;
