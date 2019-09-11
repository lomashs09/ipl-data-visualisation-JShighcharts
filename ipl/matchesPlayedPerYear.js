function matchesPlayedPerYear(jsonObj) {
  if (jsonObj.length == 0) {
    return 0;
  }
  var matchesPlayedData = {};
  jsonObj.map(match => {
    if (match.season in matchesPlayedData) {
        matchesPlayedData[match.season] += 1;
    } else {
        matchesPlayedData[match.season] = 1;
    }
  });

    return matchesPlayedData;
}
module.exports = matchesPlayedPerYear;



