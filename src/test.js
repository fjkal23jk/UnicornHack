const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    
    const [el] = await page.$x('/html/body/pre');
    const src = await el.getProperty('innerHTML');
    const srcTxt = await src.jsonValue();

    console.log({srcTxt});

    browser.close();
}

scrapeProduct('https://api.bilibili.com/x/web-interface/view?bvid=BV1Ev41117fW');