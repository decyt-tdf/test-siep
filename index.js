'use strict'

var test = require('tape-catch')
var puppeteer = require('puppeteer');

// const fs = require('fs');

const appUrlBase = "https://siep.tdf.educar.gob.ar/";
const apiUrl = "https://constancia.sieptdf.tk/api";
const args = [
    "--disable-gpu",
    "--disable-setuid-sandbox",
    "--force-device-scale-factor",
    "--ignore-certificate-errors",
    "--no-sandbox",
];

test('Test Base Url', async (t) => {
    t.plan(1)
    console.time("Tiempo de Ejecución")
    const browser = await puppeteer.launch({args});
    const page = await browser.newPage();
    var estadoOK = false

    page.on('load', () => console.log("Carga Inicial Completa: " + page.url()));

    page.on('response', response => {
        const req = response.request();
        if (req.url() === appUrlBase) {
            response.buffer().then(
                b => {
                    console.log(`status: ${response.status()} | size: ${b.length} bytes`);
                    estadoOK = response.status() === 200 ? true : false
                },
                e => {
                    console.error(`${response.status()} ${response.url()} failed: ${e}`);
                    estadoOK = false
                }
            );
        }
    });

    try {
        await page.goto(appUrlBase,{
            waitUntil: 'domcontentloaded',
            timeout: 50000
        });
        // await page.screenshot({path: 'test-data/screen.png'});
    }
    catch(error){
        estadoOK = false
    }
    await page.close();
    await browser.close();

    // Define si el test pasa o no
    if(estadoOK){ t.ok(true,"Base URL Funcionando") }
    else { t.notOk(true, "BASE URL no esta Funcionando") }
    t.end();
    console.log("-------------------------------");
    console.timeEnd("Tiempo de Ejecución");
    console.log("-------------------------------")
});


test('Api Laravel', async (t) => {
    t.plan(1)
    console.time("Tiempo de Ejecución")
    const browser = await puppeteer.launch({args});
    const page = await browser.newPage();
    var estadoOK = false

    page.on('load', () => console.log("Carga Inicial Completa: " + page.url()));

    page.on('response', response => {
        const req = response.request();
        const data = response.buffer();
        // fs.writeFileSync('test-data/response.json', [data.url])
        estadoOK = response.status() === 200 ? true : false
    });

    try {
        await page.goto(apiUrl,{
            // waitUntil: 'domcontentloaded',
            timeout: 50000
        });
        // await page.waitForNavigation();
        await page.screenshot({path: 'test-data/screen.png'});
    }
    catch(error){
        estadoOK = false
    }


    // Define si el test pasa o no
    if(estadoOK){ t.ok(true,"API URL Funcionando") }
    else { t.notOk(true, "API URL no esta Funcionando") }
    t.end();
    console.log("-------------------------------");
    console.timeEnd("Tiempo de Ejecución");
    console.log("-------------------------------");
    await page.close();
    await browser.close();
});

