const functions = require('../ipl/matchesWonPerTeam');

describe("computes most economical bowlers", () => {
it('When there is no Match Played' , () => {
    expect(functions([])).toEqual([]);
});

it('When there is only one Win and one team' , () => {
    expect(functions([
{
    season:'2010',
    winner: 'Kings XI Punjab',
}
    ])).toEqual( [{"data": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], "name": "Kings XI Punjab"}]);
});
it('When each team won One Time' , () => {
    expect(functions([
{
    season:'2011',
    winner: 'Kings XI Punjab',
},
{
    season:'2012',
    winner: 'KKR',
},
{
    season:'2013',
    winner: 'RR',
},
{
    season:'2014',
    winner: 'Pune',
}
])).toEqual(
    [
        {
          "data": 1,
          "data": [
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
          ],
          "name": "Kings XI Punjab",
        },
        {
          "data": [
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
          ],
          "name": "KKR",
        },
        {
          "data": [
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
          ],
          "name": "RR",
        },
        {
            "data": [
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
            ],
            "name": "Pune",
          },
      ]

    )
});
it('When one Team match all Seasons' , () => {
    expect(functions([
{
    season:'2008',
    winner: 'Kings XI Punjab',
},
{
    season:'2009',
    winner: 'Kings XI Punjab',
},
{
    season:'2010',
    winner: 'Kings XI Punjab',
},
{
    season:'2011',
    winner: 'Kings XI Punjab',
},
{
    season:'2012',
    winner: 'Kings XI Punjab',
},
{
    season:'2013',
    winner: 'Kings XI Punjab',
},
{
    season:'2014',
    winner: 'Kings XI Punjab',
},
{
    season:'2015',
    winner: 'Kings XI Punjab',
},
{
    season:'2016',
    winner: 'Kings XI Punjab',
},
{
    season:'2017',
    winner: 'Kings XI Punjab',
}
    ])).toEqual( [{"data": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "name": "Kings XI Punjab"}]);
});
it('When one Team match all Seasons' , () => {
    expect(functions([
{
    season:'2008',
    winner: 'Kings XI Punjab',
},
{
    season:'2008',
    winner: 'Kings XI Punjab',
},
{
    season:'2008',
    winner: 'Kings XI Punjab',
},
{
    season:'2008',
    winner: 'Kings XI Punjab',
},
{
    season:'2008',
    winner: 'Kings XI Punjab',
},
{
    season:'2013',
    winner: 'Kings XI Punjab',
},
{
    season:'2014',
    winner: 'Kings XI Punjab',
},
{
    season:'2015',
    winner: 'Kings XI Punjab',
},
{
    season:'2016',
    winner: 'Kings XI Punjab',
},
{
    season:'2017',
    winner: 'Kings XI Punjab',
}
    ])).toEqual( [{"data": [5, 0, 0, 0, 0, 1, 1, 1, 1, 1], "name": "Kings XI Punjab"}]);
});
})