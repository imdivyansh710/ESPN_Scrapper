const request = require('request');
const cheerio= require('cheerio');

function getInfoFromScoreCard(url){
    console.log("from scorecard.js", url);
}

module.exports={
    gifs:getInfoFromScoreCard
}