// const functions = require("../ipl/extraRunConceded");

// describe("Extra Runs Conceded in 2016", () => {
//   it("When there is no Match Played", () => {
//     expect(functions([], [])).toEqual({});
//   });

//   it("When there is only one Match Played", () => {
//     expect(
//       functions(
//         [
//           {
//             id: "1",
//             season: "2016"
//           },
//           {
//             id: "2",
//             season: "2016"
//           },
//           {
//             id: "3",
//             season: "2016"
//           },
//           {
//             id: "4",
//             season: "2016"
//           },
//           {
//             id: "5",
//             season: "2016"
//           },
//           {
//             id: "6",
//             season: "2016"
//           }
//         ],
//         [
//           {
//             match_id: "2",
//             bowling_team: "Sunrisers Hyderabad",
//             extra_runs: "3"
//           },
//           {
//             match_id: "3",
//             bowling_team: "Mumbai Indians",
//             extra_runs: "4"
//           },
//           {
//             match_id: "4",
//             bowling_team: "Mumbai Indians",
//             extra_runs: "5"
//           },
//           {
//             match_id: "5",
//             bowling_team: "Mumbai Indians",
//             extra_runs: "10"
//           },
//           {
//             match_id: "6",
//             bowling_team: "Mumbai Indians",
//             extra_runs: "12"
//           }
//         ]
//       )
//     ).toEqual({
//         "Mumbai Indians": 31,
//         "Sunrisers Hyderabad": 3,
//         });
//   });
// });
