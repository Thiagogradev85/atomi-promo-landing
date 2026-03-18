import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, 'public', 'screenshots');
const BASE = 'http://localhost:5175';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

async function scrollTo(selector) {
  try {
    await page.locator(selector).first().scrollIntoViewIfNeeded({ timeout: 3000 });
    await page.waitForTimeout(700);
  } catch {
    console.warn('  selector not found:', selector);
  }
}

async function snap(filename) {
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(OUT, filename) });
  console.log('✓', filename);
}

// ── load page ────────────────────────────────────────────────────────────────
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

// 01 hero
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(600);
await snap('01-hero.png');

// 02 countdown  (#promocao contains the countdown component)
await scrollTo('#promocao');
await snap('02-countdown.png');

// 03 products
await scrollTo('#produtos');
await snap('03-products.png');

// 04 contact
await scrollTo('#contato');
await snap('04-contact.png');

// 05-v1 orange — back to top, full hero
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
await snap('05-v1-orange.png');

// 05-v2 gold — click the theme toggle
const toggleBtn = page.locator('button').filter({ hasText: /V[12]/ }).first();
await toggleBtn.waitFor({ timeout: 5000 });
await toggleBtn.click();
await page.waitForTimeout(1200);
await snap('05-v2-gold.png');

await browser.close();
console.log('\nDone — screenshots saved to public/screenshots/');
