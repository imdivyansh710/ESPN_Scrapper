let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request = require('request');
const cheerio= require('cheerio');

request(url,cb);

function cb(err, res, body){
    if(err){
        console.error("error",err);
    }
    else{
        handleHTML(body);
    }
}

function handleHTML(html){
    let selTool = cheerio.load(html);
    console.log(selTool);
   // let anchorEle = selTool('a[title="View All Results"]');
    //console.log(anchorEle);
    let relativelink = anchorEle.attr("href");
    let fullLink="https://www.espncricinfo.com" + relativelink;
    console.log(fullLink);
}