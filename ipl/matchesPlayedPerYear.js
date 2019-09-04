function matchesPlayedPerYear(jsonObj) {
  if (jsonObj.length == 0) {
    return 0;
  }
  var matchesPlayedData = {};
  jsonObj.filter(match => {
    if (match.season in matchesPlayedData) {
        matchesPlayedData[match.season] += 1;
    } else {
        matchesPlayedData[match.season] = 1;
    }
  });
  const writeJsonFile = require('write-json-file');
 
  (async () => {
      await writeJsonFile('matchesPlayedPerYear.json', matchesPlayedData);
  })();
    return matchesPlayedData;
}
module.exports = matchesPlayedPerYear;

