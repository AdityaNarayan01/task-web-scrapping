const path = require("path");
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

function a_z_linkExtractor(url){
    request(url, function(error, response, html){
      if (error) {
        console.error(error);
      } else {
       // azlinkExtractor(html);
        azClicklink(html);
      }
    })
  }
  
function azClicklink(html){
    let $ = cheerio.load(html)
    let az_page = $('.hlist.noprint>ul>li>a[title ="Wikipedia:Contents/A–Z index"]')
    let az_link = az_page.attr("href")

    //  console.log(link)

    let azfullLink = "https://en.wikipedia.org/" + az_link;
    console.log(azfullLink)

    //AtagExtract(azfullLink)

}


module.exports={
    azlink:a_z_linkExtractor,
  }