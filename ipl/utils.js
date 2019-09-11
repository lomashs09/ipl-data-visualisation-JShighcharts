function matches2015(matches){
matchObj2015 = matches.filter(val => {
    return (val.season == "2015")
   });
   matchId2015= matchObj2015.map((val)=> {
     return val.id
   })
   matchId2015 = new Set(matchId2015)
   return matches2015
}

function matches2016(matches){
    matchObj2016 = matches.filter(val => {
        return (val.season == "2016")
       });
       matchId2016= matchObj2016.map((val)=> {
         return val.id
       })
       matchId2016 = new Set(matchId2016)
       return matchId2016
}
module.exports.matches2015= matches2015
module.exports.matches2016 = matches2016
