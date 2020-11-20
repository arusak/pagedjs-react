const http = require('http');
const cors = require('cors');
const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

// parse request body as JSON
app.use(express.json());

const SERVER_PORT = 8081;

async function getPdfFromHostedApp(browser) {
    const page = await browser.newPage();
    console.log('opening page');
    await page.goto('http://localhost:1234/', {waitUntil: 'networkidle2'});
    console.log('waiting for pagedjs to apply');
    await page.waitForSelector('.pagedjs_page', {timeout: 0});
    const options = {
        displayHeaderFooter: false,
        format: 'LETTER',
        landscape: true,
        width: 816,
        height: 1056,
        printBackground: true,
        margin: {bottom: '0'},
    };

    console.log('generation pdf');
    return await page.pdf(options);
}

const createPdf = async () => {
    const browser = await puppeteer.launch();
    const pdf = await getPdfFromHostedApp(browser);
    await browser.close();
    return pdf;
};

const respond = async (res) => {
    let pdf;
    try {
        pdf = await createPdf();
    } catch (err) {
        res.end(err.message);
        return;
    }

    console.log('sending response');

    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=report.pdf',
        'Content-Length': pdf.length,
    });

    res.end(pdf);
};

app.use(cors({origin: true, credentials: true}));

app.get('/', async (req, res) => {
    console.log('got request');
    await respond(res);
});

http.createServer(app).listen(SERVER_PORT, function () {
    console.log('PDF server is listening on port http://localhost:%d', SERVER_PORT);
});
