const request = require('request');
const cheerio= require('cheerio');
//const getScoreCardObj = require('./scorecard');
const {gifs} = require('./scorecard');  // other way for importing the method
 
function getAllMatch(url)
{
    console.log(url);
    request(url,cb);
}


function cb(err, res, body){
    if(err){
        console.error("error",err);
    }
    else{
        extractAllMatchLink(body);
    }
}

function extractAllMatchLink(html){
    let selTool = cheerio.load(html);
   // console.log(selTool);
   let scorecardEleArr = selTool('.ds-grow.ds-px-4>a');
    console.log(scorecardEleArr.length);
    for(let i=0;i<scorecardEleArr.length;i++)
    {
       let scorecardLink= selTool(scorecardEleArr[i]).attr("href");
        
       let fullLink="https://www.espncricinfo.com" + scorecardLink;
        //console.log(fullLink);
        //getScoreCardObj.gifs(fullLink);
        gifs(fullLink);
    }
}

module.exports={
    getAllMatch : getAllMatch
};