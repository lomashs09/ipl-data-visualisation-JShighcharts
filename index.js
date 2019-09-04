var matchesPlayedPerYear =require('./ipl/matchesPlayedPerYear')
var matchesWonPerteam = require('./ipl/matchesWonPerTeam')
var extraRunConceded = require('./ipl/extraRunConceded')
const matchesObj='./csv_files/matches.csv'
const csv=require('csvtojson')
const deliveriesObj='./csv_files/deliveries.csv'

csv()
.fromFile(matchesObj)
.then((matches)=>{
     console.log(matchesPlayedPerYear(matches));
    // console.log(matchesWonPerteam(matches));
    // console.log(matches)
    // csv()
    // .fromFile(deliveriesObj)
    // .then((deliveries) => {
    //     // console.log(deliveries)
    //     console.log(extraRunConceded(matches, deliveries))
    // })
})


// csv()
// .fromFile(deliveriesObj)
// .then((deliveries) => {
//     // console.log(deliveries)
//     console.log(extraRunConceded(matches, deliveries))
// })






/*
1. Reads data from csv file
2. Calls functions implemented ipl module
3. Stores output at `public/data.json`
*/