import dotenv from 'dotenv';
dotenv.config();
import puppeteer from 'puppeteer';
import fs from 'fs';

const url = `https://finance.yahoo.com/quote/GC%3DF/history/?period1=967608000&period2=1716908994&frequency=1mo`;

export const getGoldData = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('table tbody tr td');
    const data = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('table tbody tr td'));
        const key = ["date", "close"]
        return tds.map(td => (td as HTMLAreaElement).innerText);
    });
    // organize data into a 7 column matrix
    let organizedData = [];
    for (let i = 0; i < data.length; i+=7) {
        organizedData.push(data.slice(i, i+7));
    }
    // now make the first value in each row the key
    organizedData = organizedData.map(row => {
        return {
            date: row[0],
            close: row[4]
        }
    });
    console.log(organizedData);
    fs.writeFileSync('goldData.json', JSON.stringify(organizedData, null, 4));
    await browser.close();
}
