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
                matchesWon[played.winner][played.season]=1;
            }
        }
        else
        {
            matchesWon[played.winner]= {};
        }
        
    })

    // return matchesWon;
    return ObjtoListConverter(matchesWon);



}
function ObjtoListConverter(matchesWon){
list=[]
for(key in matchesWon)
{   
    a={}
    a["name"] = key
    b=[0,0,0,0,0,0,0,0,0,0]
    for(value in matchesWon[key]){    
        b[value-2008]=(matchesWon[key][value])
    }
    a["data"] = b
    list.push(a)

}
return list
}


module.exports = matchesWonPerteam