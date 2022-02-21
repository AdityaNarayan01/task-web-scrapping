//const url = "https://en.wikipedia.org/wiki/Main_Page"
const path = require("path");
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

const AZobj = require('./azindex');

console.log("************Before***********");



request("https://en.wikipedia.org/wiki/Main_Page", cb);

function cb(error, response, html) {
  if (error) {
    console.error(error);
  } else {
    linkExtractor(html);
  }
}

//main page --> portal
function linkExtractor(html){
    let $ = cheerio.load(html)
    let anchorLink = $('a[title="Wikipedia:Contents/Portals"]')
    let link = anchorLink.attr("href")
    
  //  console.log(link)

    let fullLink = "https://en.wikipedia.org/" + link;
   // console.log(fullLink);
   AZobj.azlink(fullLink)
   
}

console.log("***********after***********");

