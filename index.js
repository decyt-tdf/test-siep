var test = require('tape')
var puppeteer = require('puppeteer')

test('Home ok', async (t) => {
  t.plan(1)
  var browser = await puppeteer.launch()
  var page = await browser.newPage()
  var res = await page.goto('https://siep.tdf.educar.gob.ar')
  t.equal(res.ok(), true) 
  await browser.close()
}
)
test()
