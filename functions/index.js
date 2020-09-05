const functions = require('firebase-functions');
const puppeteer = require('puppeteer');
const cors = require('cors')({origin: true});
// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Cloud Firestore under the path /messages/:documentId/original
exports.addMessage = functions
.runWith({ memory: "2GB" })
.https.onCall(async (req, res) => {
    // Grab the text parameter.
    // const original = req.query.text;
    const url = 'https://api.bilibili.com/x/web-interface/view?bvid=BV1Ev41117fW';

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox','--proxy-server=https=xxx:xxx']
    });
    const page = await browser.newPage();
    await page.goto(url);
    
    const [el] = await page.$x('/html/body/pre');
    const src = await el.getProperty('innerHTML');
    const srcTxt = await src.jsonValue();

    browser.close();


    // Send back a message that we've succesfully written the message
    res.json({srcTxt});
  });