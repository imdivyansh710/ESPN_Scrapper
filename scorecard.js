const request = require('request');
const cheerio = require('cheerio');

function getInfoFromScoreCard(url) {
    //console.log("from scorecard.js", url);
    request(url, cb);
}


function cb(err, res, body) {
    if (err) {
        console.log(err);
    }
    else {
        getMatchDetails(body);
    }
}

function getMatchDetails(html) {
    let selTool = cheerio.load(html);
    //1.get venue
    // 2.get date
    let descArr = selTool('.ds-grow>.ds-text-tight-m.ds-font-regular.ds-text-typo-mid3').text().split(',');
    //console.log(descArr);
    // 20th Match (N), Abu Dhabi, October 06, 2020, Indian Premier League
    let dateOfMatch = descArr[2];
    let venueOfMatch = descArr[1];
    console.log(dateOfMatch);
    console.log(venueOfMatch);
    //3get team names
    //4 get result
    let matchResEle = selTool('.ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo');
    console.log(matchResEle.text());

    let teamNames = selTool('.ds-text-tight-l');
   //console.log(teamNames.text());
    let team1 = selTool(teamNames[0]).text();
    let team2 = selTool(teamNames[1]).text();
    console.log(team1);
    console.log(team2);

    //5 get innings 

    let allBatsmanTable = selTool('.ci-scorecard-table tbody');
    let stringhtml="";
    console.log(allBatsmanTable.length);

    for(let i=0;i<allBatsmanTable.length;i++)
    {
        stringhtml+= selTool(allBatsmanTable[i]).html();
        let allRows = selTool(allBatsmanTable[i]).find("tr");
        console.log(allRows.length);
        for(let j=0;j<allRows.length;j++)
        {
            let row = selTool(allRows[j]);
            let firstColumnOfRow = row.find("td")[0];
            //cconsole.log("forstcolumn",selTool(firstColumnOfRow).html());
           // console.log(selTool(selTool(firstColumnOfRow).html()).hasClass("ds-popper-wrapper"));
             if(selTool(selTool(firstColumnOfRow).html()).hasClass("ds-popper-wrapper")==true){
                let playerName = selTool(row.find('td')[0]).text();
                let run = selTool(row.find('td')[2]).text();
                let ball = selTool(row.find('td')[3]).text();
                let six = selTool(row.find('td')[6]).text();
                let four = selTool(row.find('td')[5]).text();
                let strikeRate = selTool(row.find('td')[7]).text();
                console.log(`Player name ${playerName} run ${run} ball ${ball} four ${four} six ${six} strike rate ${strikeRate} `);

            //     console.log(playerName);
             }
        }
    }

   // console.log(stringhtml);
   
}

module.exports = {
    gifs: getInfoFromScoreCard
}