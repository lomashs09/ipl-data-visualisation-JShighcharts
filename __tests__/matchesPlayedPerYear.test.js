const functions = require('../ipl/matchesPlayedPerYear');

test('When there is no Match Played' , () => {
    expect(functions([])).toBe(0);
});
test('When there is only one match played in one season', () => {
    expect(functions([{
        id: '100',
        season: '2008',
        city: 'Delhi',
        date: '2008-05-17',
        team1: 'Delhi Daredevils',
        team2: 'Kings XI Punjab',
        toss_winner: 'Delhi Daredevils',
        toss_decision: 'bat',
        result: 'normal',
        dl_applied: '1',
        winner: 'Kings XI Punjab',
        win_by_runs: '6',
        win_by_wickets: '0',
        player_of_match: 'DPMD Jayawardene',
        venue: 'Feroz Shah Kotla',
        umpire1: 'AV Jayaprakash',
        umpire2: 'RE Koertzen',
        umpire3: ''
      }])).toEqual({2008: 1})
});

