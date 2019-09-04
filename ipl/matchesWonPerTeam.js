function matchesWonPerteam(matches){
    let matchesWon ={};
    matches.filter(played =>{
        
        if(played.winner in matchesWon)
        {
            if(played.season in matchesWon[played.winner])
            {
                matchesWon[played.winner][played.season] +=1;

            }
            else
            {
                matchesWon[played.winner][played.season]=0;
            }
        }
        else
        {
            matchesWon[played.winner]= {};
        }
        
    })
    const writeJsonFile = require('write-json-file');
 
    (async () => {
        await writeJsonFile('matchesPlayedPerYear.json', matchesWon);
    })();
    return matchesWon;
    
}

module.exports = matchesWonPerteam