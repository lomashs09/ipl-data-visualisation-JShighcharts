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
        allBowlersList[currValue.bowler].totalRuns += parseInt(currValue.wide_runs,10) + parseInt(currValue.noball_runs,10) + parseInt(currValue.batsman_runs ,10);
        if(currValue.wide_runs==0 && currValue.noball_runs==0){
        allBowlersList[currValue.bowler].totalBalls += parseInt(1, 10);
        }
      } else {
        allBowlersList[currValue.bowler] = {
          totalRuns: parseInt(currValue.wide_runs,10) + parseInt(currValue.noball_runs,10) + parseInt(currValue.batsman_runs ,10),
          totalBalls: 1
        };
      }
    }
  }, {});
  topBowlers= {}
  for(keys in allBowlersList)
  {
    economy = (allBowlersList[keys].totalRuns/allBowlersList[keys].totalBalls) *6
    topBowlers[keys] = economy
  }

  var topBowlersList= []
  for(var bowlerName in topBowlers){
    topBowlersList.push([bowlerName ,topBowlers[bowlerName]]);
  }
  topBowlersList.sort(function(a,b){
    return a[1]-b[1]
  })
  return ((topBowlersList).slice(0,10))
}
module.exports = topEconomicalBolwer;
