const request = require('request');
const cheerio= require('cheerio');

function getInfoFromScoreCard(url){
    //console.log("from scorecard.js", url);
    request(url,cb);
}


function cb(err, res,body){
    if(err){
        console.log(err);
    }
    else{
        getMatchDetails(body);
    }
}

function getMatchDetails(html){
    let selTool = cheerio.load(html);
    //1.get venue
    // 2.get date
    let descArr = selTool('.ds-grow>.ds-text-tight-m.ds-font-regular.ds-text-typo-mid3').text().split(',');
   //console.log(descArr);
 // 20th Match (N), Abu Dhabi, October 06, 2020, Indian Premier League
 let dateOfMatch = descArr[2];
 let venueOfMatch= descArr[1];
 console.log(dateOfMatch);
 console.log(venueOfMatch);
    //3get team names
    //4 get result

    let matchResEle = selTool('.ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo');
    console.log(matchResEle.text());
}

module.exports={
    gifs:getInfoFromScoreCard
}