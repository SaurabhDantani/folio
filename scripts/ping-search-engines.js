/**
 * Ping Search Engines Script
 * Notifies Google and Bing that your sitemap.xml and feed.xml have been updated.
 *
 * Usage: node scripts/ping-search-engines.js
 */

const https = require('https');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const FEED_URL = `${SITE_URL}/feed.xml`;

const pingEndpoints = [
  {
    name: 'Google (Sitemap)',
    url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  },
  {
    name: 'Google (RSS Feed)',
    url: `https://www.google.com/ping?sitemap=${encodeURIComponent(FEED_URL)}`,
  },
  {
    name: 'Bing (Sitemap)',
    url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  },
];

console.log(`\n📡 Pinging search engines for: ${SITE_URL}\n`);

pingEndpoints.forEach((target) => {
  https
    .get(target.url, (res) => {
      console.log(`[${res.statusCode}] ${target.name}: Pinged successfully`);
    })
    .on('error', (err) => {
      console.error(`[ERR] ${target.name}:`, err.message);
    });
});

