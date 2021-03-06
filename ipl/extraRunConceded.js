var utils = require('./utils')

function extraRunConceded(matches,deliveries) {
    var matchId2016= utils.matches2016(matches)
    var extrasRunsObj = {}
    deliveries.map((value)=> {
        if(matchId2016.has(value.match_id)) {
            if(value.bowling_team in extrasRunsObj ){
                extrasRunsObj[value.bowling_team] += parseInt((value.extra_runs),10)
            }
            else{
                extrasRunsObj[value.bowling_team] = parseInt((value.extra_runs),10)
            }
        }
    }
    )
    return extrasRunsObj
}
module.exports = extraRunConceded
