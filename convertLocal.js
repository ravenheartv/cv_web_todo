const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlContent = fs.readFileSync('cv.html', 'utf8');
    await page.setContent(htmlContent);
    await page.pdf({ path: 'index.pdf', format: 'A4' });

    await browser.close();
})();