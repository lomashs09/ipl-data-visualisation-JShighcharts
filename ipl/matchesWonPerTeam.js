function matchesWonPerteam(matches) {
  let matchesWon = {};
  matches.map(played => {
    if (played.winner in matchesWon) {
      if (played.season in matchesWon[played.winner]) {
        matchesWon[played.winner][played.season] += 1;
      } else {
        matchesWon[played.winner][played.season] = 1;
      }
    } else {
      matchesWon[played.winner] = {};
      matchesWon[played.winner][played.season] = 1;
    }
  });
  return ObjtoListConverter(matchesWon);
}
function ObjtoListConverter(matchesWon) {   // Converting List to Obj                                            
  matchesWonList = [];
  for (key in matchesWon) {
    tempMatchesWonObj = {};
    tempMatchesWonObj["name"] = key;
    initialList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (value in matchesWon[key]) {
      initialList[value - 2008] = matchesWon[key][value];
    }
    tempMatchesWonObj["data"] = initialList;
    matchesWonList.push(tempMatchesWonObj);
  }
  return matchesWonList;
}
module.exports = matchesWonPerteam;
