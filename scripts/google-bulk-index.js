/**
 * Google Search Console - Automated Bulk URL Indexing Script
 *
 * This script submits all pages from your sitemap directly to Googlebot
 * via the official Google Webmaster Indexing API for rapid same-day crawling.
 *
 * Requirements:
 * 1. Place your Google Service Account key as 'service_account.json' in the project root.
 * 2. Add the service account email as 'Owner' in Google Search Console.
 * 3. Run: node scripts/google-bulk-index.js
 */

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const KEY_FILE_PATHS = [
  path.resolve(__dirname, '../service_account.json'),
  path.resolve(__dirname, '../google-key.json'),
  path.resolve(__dirname, '../gsc-key.json'),
];

async function getUrlsToIndex() {
  const sitemapPath = path.resolve(__dirname, '../.next/server/app/sitemap.xml.body');
  const urls = [];

  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const matches = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)];
    for (const match of matches) {
      if (match[1] && !urls.includes(match[1])) {
        urls.push(match[1]);
      }
    }
  }

  // Fallback core pages if sitemap file is not present
  if (urls.length === 0) {
    const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saurabhdantani.work';
    return [
      `${BASE_URL}`,
      `${BASE_URL}/about`,
      `${BASE_URL}/projects`,
      `${BASE_URL}/blogs`,
      `${BASE_URL}/contact`,
      `${BASE_URL}/services/nextjs-development`,
      `${BASE_URL}/services/backend-microservices`,
      `${BASE_URL}/services/web-scraping`,
      `${BASE_URL}/services/real-time-systems`,
      `${BASE_URL}/services/crm-dashboards`,
      `${BASE_URL}/services/cloud-devops`,
      `${BASE_URL}/services/automation`,
      `${BASE_URL}/projects/lead-generation-crm`,
      `${BASE_URL}/projects/ai-voice-campaign-platform-calling-agent`,
      `${BASE_URL}/blogs/how-much-does-a-web-scraper-cost`,
      `${BASE_URL}/blogs/build-vs-buy-custom-lead-gen-crm`,
      `${BASE_URL}/blogs/web-scraping-vs-official-apis`,
    ];
  }

  return urls;
}

function findKeyFile() {
  for (const p of KEY_FILE_PATHS) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log('====================================================');
  console.log('🚀 Google Search Console Bulk Indexing Tool');
  console.log('====================================================\n');

  const keyFile = findKeyFile();

  if (!keyFile) {
    console.log('⚠️  No service account key file found!');
    console.log('\nTo allow this tool to submit URLs to Google on your behalf:');
    console.log('1. Go to Google Cloud Console (https://console.cloud.google.com)');
    console.log('2. Enable the "Web Search Indexing API"');
    console.log('3. Create a Service Account, generate a JSON key, and save it as:');
    console.log('   -> service_account.json (in your project root)');
    console.log('4. In Google Search Console, go to Settings -> Users & Permissions');
    console.log('   and add your service account email as "Owner".');
    console.log('5. Run: node scripts/google-bulk-index.js\n');
    console.log('====================================================');
    return;
  }

  const keyData = JSON.parse(fs.readFileSync(keyFile, 'utf8'));
  console.log(`🔑 Using Service Account: ${keyData.client_email}`);

  let authClient;
  try {
    console.log('⏳ Authenticating with Google APIs...');
    authClient = new google.auth.JWT({
      email: keyData.client_email,
      key: keyData.private_key,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    await authClient.authorize();
    console.log('✅ Authentication successful!\n');
  } catch (err) {
    console.error('❌ Failed to authenticate:', err.message);
    return;
  }

  const indexing = google.indexing({ version: 'v3', auth: authClient });
  const urls = await getUrlsToIndex();

  console.log(`📋 Found ${urls.length} total URLs to index.\n`);

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    process.stdout.write(`[${i + 1}/${urls.length}] Submitting: ${url} ... `);

    try {
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });

      if (res.status === 200) {
        console.log('✅ 200 OK (Queued for Googlebot)');
        successCount++;
      } else {
        console.log(`⚠️ Status: ${res.status}`);
      }
    } catch (err) {
      console.log(`❌ Error: ${err.message}`);
      errorCount++;

      if (err.message && err.message.includes('has not been used in project')) {
        console.log('\n⚠️  The "Web Search Indexing API" is not enabled in your Google Cloud Project yet!');
        console.log('👉 Please click this link to enable it with one click:');
        const match = err.message.match(/https:\/\/[^\s]+/);
        console.log(`   ${match ? match[0] : 'https://console.cloud.google.com/apis/library/indexing.googleapis.com'}\n`);
        console.log('After clicking "Enable", wait 30 seconds and run "npm run index:google" again.\n');
        break;
      }

      if (err.message && (err.message.includes('Permission denied') || err.status === 403)) {
        console.log('\n⚠️  Permission Denied in Google Search Console!');
        console.log('👉 Please add your service account email:');
        console.log(`   ${keyData.client_email}`);
        console.log('as an "Owner" in Google Search Console:');
        console.log('1. Go to https://search.google.com/search-console');
        console.log('2. Click Settings -> Users and permissions -> Add User');
        console.log('3. Set Permission to "Owner" and click Add.\n');
        break;
      }
    }

    // Gentle delay to respect Google API quota (200 requests/day)
    await sleep(350);
  }

  console.log('\n====================================================');
  console.log(`🎉 Bulk Indexing Complete!`);
  console.log(`   - Successfully submitted: ${successCount}`);
  console.log(`   - Errors: ${errorCount}`);
  console.log('====================================================\n');
}

main().catch(console.error);

