const { launch } = require("qawolf");
const selectors = require("../selectors/sandbox");

const sandbox = async () => {
  const browser = await launch({ device: "iPad Pro 11", url: "https://9zjd4.csb.app/" });
  // click input
  await browser.click(selectors[0]);
  // type into input
  await browser.type(selectors[1], "123");
  // click input
  await browser.click(selectors[2]);
  // type into input
  await browser.type(selectors[3], " 1");
  // click input
  await browser.click(selectors[4]);
  // click "50" span
  await browser.click({ css: "[data-qa='temperature-slider']" });
  // click body
  await browser.click(selectors[6]);
  // click "Twenty" li
  await browser.click(selectors[7]);
  // click "Male" span
  await browser.click(selectors[8]);
  // click button
  await browser.click(selectors[9]);
  // click "21" button
  await browser.click(selectors[10]);
  // click div
  await browser.click(selectors[11]);
  // click "August 2014 Su Mo Tu We Th Fr Sa 27 28 2..." div
  await browser.click(selectors[12]);
  // click button
  await browser.click(selectors[13]);
  // click "30" button
  await browser.click(selectors[14]);
  // click "OK" button
  await browser.click(selectors[15]);
  // click button
  await browser.click(selectors[16]);
  // click div
  await browser.click(selectors[17]);
  // click div
  await browser.click(selectors[18]);
  // click "OK" button
  await browser.click(selectors[19]);
  // click "SUBMIT 0" button
  await browser.click({ css: "[data-qa='submit']" });
  // click "SUBMIT 1" button
  await browser.click({ css: "[data-qa='submit']" });
  // click "SUBMIT 2" button
  await browser.click({ css: "[data-qa='submit']" });
  // click "SUBMIT 3" button
  await browser.click({ css: "[data-qa='submit']" });
  // click "SUBMIT 4" button
  await browser.click({ css: "[data-qa='submit']" });
  // click "0" button
  await browser.click({ css: "[data-qa='fab']" });
  // click "1" button
  await browser.click({ css: "[data-qa='fab']" });
  // click "2" button
  await browser.click({ css: "[data-qa='fab']" });
  // click "3" button
  await browser.click({ css: "[data-qa='fab']" });
  // click "4" button
  await browser.click({ css: "[data-qa='fab']" });
  await browser.close();
};

sandbox();