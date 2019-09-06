function topEconomicalBolwer(matches, deliveries) {
  extraRunsList = [];
  matches.map(val => {
    if (val.season == "2015") {
      extraRunsList.push(val.id);
    }
  });
  allBowlersList = {};
  deliveries.reduce((acc, currValue) => {
    if (extraRunsList.includes(currValue.match_id)) {
      if (currValue.bowler in allBowlersList) {
        allBowlersList[currValue.bowler].totalRuns +=
          parseInt(currValue.wide_runs, 10) +
          parseInt(currValue.noball_runs, 10) +
          parseInt(currValue.batsman_runs, 10);
        if (currValue.wide_runs == 0 && currValue.noball_runs == 0) {
          allBowlersList[currValue.bowler].totalBalls += 1;
        }
      } else {
        allBowlersList[currValue.bowler] = {
          totalRuns:
            parseInt(currValue.wide_runs, 10) +
            parseInt(currValue.noball_runs, 10) +
            parseInt(currValue.batsman_runs, 10),
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
