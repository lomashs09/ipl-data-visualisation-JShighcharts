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
          
        },
        {
          id: '100',
          season: '2015',
         
        }],
                  [
                    {
                      match_id: '99',
                      bowler: 'YS Chahal',
                      wide_runs: '0',
                      bye_runs: '0',
                      legbye_runs: '0',
                      noball_runs: '0',
                      penalty_runs: '0',
                      batsman_runs: '1',
                      extra_runs: '0',
                      total_runs: '1'
                    },
                    {
                      match_id: '100',
                      bowler: 'TS Mills',
                      wide_runs: '0',
                      bye_runs: '0',
                      legbye_runs: '0',
                      noball_runs: '0',
                      penalty_runs: '0',
                      batsman_runs: '1',
                      extra_runs: '0',
                      total_runs: '1',
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
      },
      {
        id: '102',
        season: '2015',
        
      }],
                [
                  {
                    match_id: '101',
                    bowler: 'V Kohli',
                    wide_runs: '0',
                    bye_runs: '0',
                    legbye_runs: '0',
                    noball_runs: '0',
                    penalty_runs: '0',
                    batsman_runs: '1',
                    extra_runs: '0',
                    total_runs: '1',
                  },
                  {
                    match_id: '102',
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
      
    },
    {
      id: '102',
      season: '2015',
      
    }],
              [
                {
                  match_id: '101',
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
                },
                {
                  match_id: '102',
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
                },
              ]
            )

).toEqual({"V Kohli": 48});
});


it("When More than 10 Bowlers Bolwed deliveries which includes some no balls and wide balls", () => {
  expect(functions(
    [{
      id: '99',
      season: '2015',
      
    },
    {
      id: '100',
      season: '2015',
     
    },
    {
      id: '101',
      season: '2015',
     
    },  {
      id: '102',
      season: '2015',
     
    },
    {
      id: '103',
      season: '2015',
     
    },
    {
      id: '104',
      season: '2015',
     
    },
    {
      id: '105',
      season: '2015',
     
    },
    {
      id: '106',
      season: '2015',
     
    },
    {
      id: '107',
      season: '2015',
     
    },
    {
      id: '108',
      season: '2015',
     
    },  {
      id: '109',
      season: '2015',
     
    },  {
      id: '111',
      season: '2015',
     
    }],
              [{
                match_id: '111',
                bowler: 'YS Chahal',
                wide_runs: '0',
                bye_runs: '0',
                legbye_runs: '0',
                noball_runs: '0',
                penalty_runs: '0',
                batsman_runs: '8',
                extra_runs: '0',
                total_runs: '1'
              },
                {
                  match_id: '110',
                  bowler: 'YS Chahal',
                  wide_runs: '0',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '0',
                  penalty_runs: '0',
                  batsman_runs: '1',
                  extra_runs: '0',
                  total_runs: '1'
                },               {
                  match_id: '109',
                  bowler: 'sachin',
                  wide_runs: '1',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '0',
                  penalty_runs: '0',
                  batsman_runs: '4',
                  extra_runs: '0',
                  total_runs: '1'
                },               {
                  match_id: '108',
                  bowler: 'sachin',
                  wide_runs: '0',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '2',
                  penalty_runs: '0',
                  batsman_runs: '3',
                  extra_runs: '0',
                  total_runs: '1'
                },               {
                  match_id: '107',
                  bowler: 'sachin',
                  wide_runs: '1',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '1',
                  penalty_runs: '0',
                  batsman_runs: '1',
                  extra_runs: '0',
                  total_runs: '1'
                },               {
                  match_id: '106',
                  bowler: 'YS',
                  wide_runs: '1',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '2',
                  penalty_runs: '0',
                  batsman_runs: '1',
                  extra_runs: '0',
                  total_runs: '1'
                },               {
                  match_id: '105',
                  bowler: 'Chahal',
                  wide_runs: '0',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '0',
                  penalty_runs: '0',
                  batsman_runs: '1',
                  extra_runs: '0',
                  total_runs: '1'
                },               {
                  match_id: '104',
                  bowler: 'MSD',
                  wide_runs: '0',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '0',
                  penalty_runs: '0',
                  batsman_runs: '1',
                  extra_runs: '0',
                  total_runs: '1'
                },               {
                  match_id: '103',
                  bowler: 'loki',
                  wide_runs: '0',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '0',
                  penalty_runs: '0',
                  batsman_runs: '1',
                  extra_runs: '0',
                  total_runs: '1'
                },               {
                  match_id: '102',
                  bowler: 'Yas',
                  wide_runs: '0',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '0',
                  penalty_runs: '0',
                  batsman_runs: '1',
                  extra_runs: '0',
                  total_runs: '1'
                },
                {
                  match_id: '101',
                  bowler: 'P kumar',
                  wide_runs: '0',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '0',
                  penalty_runs: '0',
                  batsman_runs: '1',
                  extra_runs: '0',
                  total_runs: '1'
                },
                {
                  match_id: '99',
                  bowler: 'YS Chahal',
                  wide_runs: '0',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '0',
                  penalty_runs: '0',
                  batsman_runs: '1',
                  extra_runs: '0',
                  total_runs: '1'
                },
                {
                  match_id: '100',
                  bowler: 'TS Mills',
                  wide_runs: '0',
                  bye_runs: '0',
                  legbye_runs: '0',
                  noball_runs: '0',
                  penalty_runs: '0',
                  batsman_runs: '1',
                  extra_runs: '0',
                  total_runs: '1',
                },
              ]
            )

).toEqual({"Chahal": 6,
            "MSD": 6,
            "P kumar": 6,
            "TS Mills": 6,
            "YS Chahal": 6,
            "YS":24,
            "YS Chahal":27,
            "Yas": 6,
            "loki":6,
            "sachin":78,
});
});

})