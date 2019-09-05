function extraRunConceded(matches,deliveries) {
    var extraRunsList=[]
    matches.map((val) => { if(val.season == "2016"){
        extraRunsList.push(val.id)
    }}
    )
    extrasRunsObj = {}
    deliveries.map((value)=> {
        if(extraRunsList.includes(value.match_id)) {
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
