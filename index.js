var matchesPlayedPerYear =require('./ipl/matchesPlayedPerYear')
var matchesWonPerteam = require('./ipl/matchesWonPerTeam')
var extraRunConceded = require('./ipl/extraRunConceded')
var topEconomicalBowler = require('./ipl/topEconomicalBowler')
const matchesObj='./csv_files/matches.csv'
const csv=require('csvtojson')
const deliveriesObj='./csv_files/deliveries.csv'

csv()
.fromFile(matchesObj)
.then((matches)=>{
    ObjForJson = {}
    ObjForJson.matchesPlayed = matchesPlayedPerYear(matches)
    ObjForJson.matchesWon = matchesWonPerteam(matches)
    // const writeJsonFile = require('write-json-file');
    // writeJsonFile('data1.json', ObjForJson);

    //  console.log(matchesPlayedPerYear(matches));
    // console.log(matchesWonPerteam(matches));
    csv()
    .fromFile(deliveriesObj)
    .then((deliveries) => {
        // console.log(extraRunConceded(matches, deliveries))
        // ObjForJson.extraRunsObj = extraRunConceded(matches, deliveries)
        // const writeJsonFile = require('write-json-file');
        // writeJsonFile('data1.json', ObjForJson);
        console.log(topEconomicalBowler(matches, deliveries))
    })
})









/*
1. Reads data from csv file
2. Calls functions implemented ipl module
3. Stores output at `public/data.json`
*/