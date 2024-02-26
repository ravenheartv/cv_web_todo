const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //take web from localhost:5500
    await page.goto('http://localhost:5501', {waitUntil: ['networkidle0', 'load', 'domcontentloaded']});
    await page.pdf({ 
        path: 'cv.pdf', 
        format: 'A4',
        printBackground: true
    });

    await browser.close();
})();