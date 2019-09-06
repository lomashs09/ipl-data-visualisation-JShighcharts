let mostEconomicalBowlers = require("../ipl/topEconomicalBowler");

describe("Top Economical Bowlers in 2015", () => {
    it("When there is no match Played", () => {
      expect(functions([], [])).toEqual({});
    });
)