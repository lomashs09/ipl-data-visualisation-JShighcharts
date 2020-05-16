var matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
var matchesWonPerteam = require("./ipl/matchesWonPerTeam");
var extraRunConceded = require("./ipl/extraRunConceded");
var topEconomicalBowler = require("./ipl/topEconomicalBowler");

const matchesObj = "./csv_files/matches.csv";
const csv = require("csvtojson");
const deliveriesObj = "./csv_files/deliveries.csv";

csv()
  .fromFile(matchesObj)
  .then(matches => {
    const ObjForJson = {};
    ObjForJson.matchesPlayed = matchesPlayedPerYear(matches);
    ObjForJson.matchesWon = matchesWonPerteam(matches);
    
    
    csv()
      .fromFile(deliveriesObj)
      .then(deliveries => {
        ObjForJson.extraRunsObj = extraRunConceded(matches, deliveries);
        ObjForJson.topEconomy = topEconomicalBowler(matches, deliveries);
        const writeJsonFile = require("write-json-file");
        writeJsonFile("data.json", ObjForJson);
      });
  });

/*
1. Reads data from csv file
2. Calls functions implemented ipl module
3. Stores output at `public/data.json`
*/
