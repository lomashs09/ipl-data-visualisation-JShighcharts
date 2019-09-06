let functions = require("../ipl/topEconomicalBowler");

describe("Top Economical Bowlers in 2015", () => {
    it("When there is no match Played", () => {
      expect(functions([], [])).toEqual({});
    });
    it("When Bowler Bowled all Deliveries Correctly", () => {
      expect(functions(
        [{
          id: '99',
          season: '2015',
          city: 'Mumbai',
          date: '2008-05-16',
          team1: 'Kolkata Knight Riders',
          team2: 'Mumbai Indians',
          toss_winner: 'Mumbai Indians',
          toss_decision: 'field',
          result: 'normal',
          dl_applied: '0',
          winner: 'Mumbai Indians',
          win_by_runs: '0',
          win_by_wickets: '8',
          player_of_match: 'SM Pollock',
          venue: 'Wankhede Stadium',
          umpire1: 'BR Doctrove',
          umpire2: 'DJ Harper',
          umpire3: ''
        },
        {
          id: '100',
          season: '2015',
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
        }],
                  [
                    {
                      match_id: '99',
                      inning: '1',
                      batting_team: 'Sunrisers Hyderabad',
                      bowling_team: 'Royal Challengers Bangalore',
                      over: '16',
                      ball: '6',
                      batsman: 'DJ Hooda',
                      non_striker: 'Yuvraj Singh',
                      bowler: 'YS Chahal',
                      is_super_over: '0',
                      wide_runs: '0',
                      bye_runs: '0',
                      legbye_runs: '0',
                      noball_runs: '0',
                      penalty_runs: '0',
                      batsman_runs: '1',
                      extra_runs: '0',
                      total_runs: '1',
                      player_dismissed: '',
                      dismissal_kind: '',
                      fielder: ''
                    },
                    {
                      match_id: '100',
                      inning: '1',
                      batting_team: 'Sunrisers Hyderabad',
                      bowling_team: 'Royal Challengers Bangalore',
                      over: '17',
                      ball: '1',
                      batsman: 'DJ Hooda',
                      non_striker: 'Yuvraj Singh',
                      bowler: 'TS Mills',
                      is_super_over: '0',
                      wide_runs: '0',
                      bye_runs: '0',
                      legbye_runs: '0',
                      noball_runs: '0',
                      penalty_runs: '0',
                      batsman_runs: '1',
                      extra_runs: '0',
                      total_runs: '1',
                      player_dismissed: '',
                      dismissal_kind: '',
                      fielder: ''
                    },
                  ]
                )

    ).toEqual({"TS Mills": 6,
                "YS Chahal": 6
  });
  });

  it("When Bowler Bowled Wide and No Ball", () => {
    expect(functions(
      [{
        id: '101',
        season: '2015',
        city: 'Mumbai',
        date: '2008-05-16',
        team1: 'Kolkata Knight Riders',
        team2: 'Mumbai Indians',
        toss_winner: 'Mumbai Indians',
        toss_decision: 'field',
        result: 'normal',
        dl_applied: '0',
        winner: 'Mumbai Indians',
        win_by_runs: '0',
        win_by_wickets: '8',
        player_of_match: 'SM Pollock',
        venue: 'Wankhede Stadium',
        umpire1: 'BR Doctrove',
        umpire2: 'DJ Harper',
        umpire3: ''
      },
      {
        id: '102',
        season: '2015',
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
      }],
                [
                  {
                    match_id: '101',
                    inning: '1',
                    batting_team: 'Sunrisers Hyderabad',
                    bowling_team: 'Royal Challengers Bangalore',
                    over: '16',
                    ball: '1',
                    batsman: 'DJ Hooda',
                    non_striker: 'Yuvraj Singh',
                    bowler: 'V Kohli',
                    is_super_over: '0',
                    wide_runs: '0',
                    bye_runs: '0',
                    legbye_runs: '0',
                    noball_runs: '0',
                    penalty_runs: '0',
                    batsman_runs: '1',
                    extra_runs: '0',
                    total_runs: '1',
                    player_dismissed: '',
                    dismissal_kind: '',
                    fielder: ''
                  },
                  {
                    match_id: '102',
                    inning: '1',
                    batting_team: 'Sunrisers Hyderabad',
                    bowling_team: 'Royal Challengers Bangalore',
                    over: '17',
                    ball: '2',
                    batsman: 'DJ Hooda',
                    non_striker: 'Yuvraj Singh',
                    bowler: 'V Kohli',
                    is_super_over: '0',
                    wide_runs: '1',
                    bye_runs: '0',
                    legbye_runs: '0',
                    noball_runs: '5',
                    penalty_runs: '0',
                    batsman_runs: '1',
                    extra_runs: '0',
                    total_runs: '1',
                    player_dismissed: '',
                    dismissal_kind: '',
                    fielder: ''
                  },
                ]
              )

  ).toEqual({"V Kohli": 48});
});


it("When Bowler Bowled Wide and No Ball", () => {
  expect(functions(
    [{
      id: '101',
      season: '2015',
      city: 'Mumbai',
      date: '2008-05-16',
      team1: 'Kolkata Knight Riders',
      team2: 'Mumbai Indians',
      toss_winner: 'Mumbai Indians',
      toss_decision: 'field',
      result: 'normal',
      dl_applied: '0',
      winner: 'Mumbai Indians',
      win_by_runs: '0',
      win_by_wickets: '8',
      player_of_match: 'SM Pollock',
      venue: 'Wankhede Stadium',
      umpire1: 'BR Doctrove',
      umpire2: 'DJ Harper',
      umpire3: ''
    },
    {
      id: '102',
      season: '2015',
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
    }],
              [
                {
                  match_id: '101',
                  inning: '1',
                  batting_team: 'Sunrisers Hyderabad',
                  bowling_team: 'Royal Challengers Bangalore',
                  over: '16',
                  ball: '1',
                  batsman: 'DJ Hooda',
                  non_striker: 'Yuvraj Singh',
                  bowler: 'V Kohli',
                  is_super_over: '0',
                  wide_runs: '0',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '0',
                  penalty_runs: '0',
                  batsman_runs: '1',
                  extra_runs: '0',
                  total_runs: '1',
                  player_dismissed: '',
                  dismissal_kind: '',
                  fielder: ''
                },
                {
                  match_id: '102',
                  inning: '1',
                  batting_team: 'Sunrisers Hyderabad',
                  bowling_team: 'Royal Challengers Bangalore',
                  over: '17',
                  ball: '2',
                  batsman: 'DJ Hooda',
                  non_striker: 'Yuvraj Singh',
                  bowler: 'V Kohli',
                  is_super_over: '0',
                  wide_runs: '1',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '1',
                  penalty_runs: '0',
                  batsman_runs: '5',
                  extra_runs: '0',
                  total_runs: '1',
                  player_dismissed: '',
                  dismissal_kind: '',
                  fielder: ''
                },
              ]
            )

).toEqual({"V Kohli": 48});
});

})