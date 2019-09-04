function matchesWonPerteam(jsonObj){
    let matchesWon ={};
    jsonObj.filter(played =>{
        
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
            matchesWon[played.winner]= { };
        }
        
    })
    return matchesWon;
    
}
module.exports = matchesWonPerteam