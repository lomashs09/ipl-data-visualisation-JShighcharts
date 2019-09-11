const functions = require("../ipl/extraRunConceded");

describe("Extra Runs Conceded in 2016", () => {
  it("When there is no Match Played", () => {
    expect(functions([], [])).toEqual({});
  });

  it("When there are few Extra Runs Conceded", () => {
    expect(
      functions(
        [
          {
            id: "1",
            season: "2016"
          },
          {
            id: "2",
            season: "2016"
          },
          {
            id: "3",
            season: "2016"
          },
          {
            id: "4",
            season: "2016"
          },
          {
            id: "5",
            season: "2016"
          },
          {
            id: "6",
            season: "2016"
          }
        ],
        [
          {
            match_id: "2",
            bowling_team: "Sunrisers Hyderabad",
            extra_runs: "3"
          },
          {
            match_id: "3",
            bowling_team: "Mumbai Indians",
            extra_runs: "4"
          },
          {
            match_id: "4",
            bowling_team: "Mumbai Indians",
            extra_runs: "5"
          },
          {
            match_id: "5",
            bowling_team: "Mumbai Indians",
            extra_runs: "10"
          },
          {
            match_id: "6",
            bowling_team: "Mumbai Indians",
            extra_runs: "12"
          }
        ]
      )
    ).toEqual({
      "Mumbai Indians": 31,
      "Sunrisers Hyderabad": 3
    });
  });

  it("When there are few Extra Runs Conceded", () => {
    expect(
      functions(
        [
          {
            id: "1",
            season: "2016"
          }
        ],
        [
          {
            match_id: "1",
            bowling_team: "Sunrisers Hyderabad",
            extra_runs: "3"
          }
        ]
      )
    ).toEqual({
      "Sunrisers Hyderabad": 3
    });
  });
  it("When there are extra runs conceded by many teams", () => {
    expect(
      functions(
        [
          {
            id: "1",
            season: "2016"
          },
          {
            id: "2",
            season: "2017"
          },
          {
            id: "3",
            season: "2018"
          },
          {
            id: "4",
            season: "2016"
          },
          {
            id: "5",
            season: "2016"
          },
          {
            id: "6",
            season: "2016"
          },
          {
            id: "7",
            season: "2016"
          },
          {
            id: "8",
            season: "2016"
          },
          {
            id: "9",
            season: "2016"
          }
        ],
        [
          {
            match_id: "1",
            bowling_team: "Sunrisers Hyderabad",
            extra_runs: "3"
          },
          {
            match_id: "2",
            bowling_team: "Sunrisers Hyderabad",
            extra_runs: "3"
          },
          {
            match_id: "3",
            bowling_team: "KKR",
            extra_runs: "1"
          },
          {
            match_id: "4",
            bowling_team: "DD",
            extra_runs: "0"
          },
          {
            match_id: "5",
            bowling_team: "Pune",
            extra_runs: "7"
          },
          {
            match_id: "6",
            bowling_team: "Sunrisers Hyderabad",
            extra_runs: "11"
          },
          {
            match_id: "7",
            bowling_team: "KKR",
            extra_runs: "8"
          },
          {
            match_id: "8",
            bowling_team: "CSK",
            extra_runs: "10"
          }

        ]
      )
    ).toEqual({
      "Sunrisers Hyderabad": 14,
      "CSK": 10,
      "DD":0,
      "KKR":8,
      "Pune": 7,
      "Sunrisers Hyderabad":14,
    });
  });
});
