const functions = require('../ipl/matchesWonPerTeam');

test('When there is no Match Played' , () => {
    expect(functions([])).toEqual({});
});

test('When there is only one Match Played' , () => {
    expect(functions([
{
    season:'2010',
    winner: 'Kings XI Punjab',
}
    ])).toEqual({'Kings XI Punjab' : {  : 1}});
});
