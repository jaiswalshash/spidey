// utils/scraper.js
// import axios from "axios";
import cheerio from 'cheerio';
import puppeteer from 'puppeteer'

async function scrapeProduct({url}) {
  try {
// Launching a headless browser
    const browser = await puppeteer.launch();
// Open a new browser
    const page = await browser.newPage();

    await page.goto(url);

    const title = await page.title();

    return title;

    // console.log(url);
    // const response = await axios.get(url);
    // const html = response.data;
    //   console.log(response)
    // return html;
    // Your scraping logic here

    // Return the scraped data or perform other async operations
  } catch (error) {
    // Handle any errors that occur during scraping
    console.error("Error while scraping:", error);
  }
}

export { scrapeProduct };
