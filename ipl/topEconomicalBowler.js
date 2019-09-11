var utils = require('./utils')
function topEconomicalBolwer(matches, deliveries) {
  utils.matches2015(matches)   
  allBowlersList = {};
  deliveries.reduce((acc, currBowler) => {
    if (matchId2015.has(currBowler.match_id)) {
      if (currBowler.bowler in allBowlersList) {
        allBowlersList[currBowler.bowler].totalRuns +=
          parseInt(currBowler.wide_runs, 10) +
          parseInt(currBowler.noball_runs, 10) +
          parseInt(currBowler.batsman_runs, 10);
        if (currBowler.wide_runs == 0 && currBowler.noball_runs == 0) {
            allBowlersList[currBowler.bowler].totalBalls += 1;
        }
      } else {
        allBowlersList[currBowler.bowler] = {
          totalRuns:
            parseInt(currBowler.wide_runs, 10) +
            parseInt(currBowler.noball_runs, 10) +
            parseInt(currBowler.batsman_runs, 10),
          totalBalls: 1
        };
      }
    }
  }, {});
  topBowlers = {};
  for (keys in allBowlersList) {
    economy =
      (allBowlersList[keys].totalRuns / allBowlersList[keys].totalBalls) * 6;
    topBowlers[keys] = economy;
  }
  var topBowlersList = [];
  for (var bowlerName in topBowlers) {              // Converting into List to Sort it by Economy
    topBowlersList.push([bowlerName, topBowlers[bowlerName]]);
  }
  topBowlersList.sort(function(a, b) {            // Function to Sort the List
    return a[1] - b[1];
  });
  let temp = topBowlersList.slice(0, 10);
  let topBowlersObj = {};
  temp.forEach(element => {
    topBowlersObj[element[0]] = element[1];        // Converting list into Object to convert into Json Object for HighGraphs
  });

  return topBowlersObj;
}
module.exports = topEconomicalBolwer;
