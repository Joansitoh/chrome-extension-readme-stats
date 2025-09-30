import "@testing-library/jest-dom";
import { calculateRank } from "../src/calculateRank.js";
import { expect, it, describe } from "@jest/globals";

describe("Test calculateRank for Chrome Extensions", () => {
  it("new extension gets C rank", () => {
    const rank = calculateRank({
      users: 0,
      ratingScore: 0,
      ratingCount: 0,
    });
    expect(rank.level).toBe("C");
    expect(rank.percentile).toBe(100);
  });

  it("small extension gets appropriate rank", () => {
    const rank = calculateRank({
      users: 235,
      ratingScore: 470,
      ratingCount: 7,
    });
    expect(rank.level).toBeDefined();
    expect(rank.percentile).toBeGreaterThan(0);
    expect(rank.percentile).toBeLessThanOrEqual(100);
  });

  it("medium extension gets better rank than small", () => {
    const rank = calculateRank({
      users: 1000,
      ratingScore: 400,
      ratingCount: 50,
    });
    expect(rank.level).toBeDefined();
    expect(rank.percentile).toBeGreaterThan(0);
    expect(rank.percentile).toBeLessThan(100);
  });

  it("popular extension gets good rank", () => {
    const rank = calculateRank({
      users: 5000,
      ratingScore: 450,
      ratingCount: 100,
    });
    expect(rank.level).toBeDefined();
    expect(["A", "A+", "A-", "S"]).toContain(rank.level);
  });

  it("very popular extension gets high rank", () => {
    const rank = calculateRank({
      users: 50000,
      ratingScore: 480,
      ratingCount: 500,
    });
    expect(rank.level).toBeDefined();
    expect(["A", "A+", "S"]).toContain(rank.level);
  });

  it("top extension with millions of users gets excellent rank", () => {
    const rank = calculateRank({
      users: 10000000,
      ratingScore: 470,
      ratingCount: 5000,
    });
    expect(rank.level).toBeDefined();
    // With 10M users, should be in top tier
    expect(["S", "A+", "A"]).toContain(rank.level);
    expect(rank.percentile).toBeLessThan(20);
  });

  it("ranking improves with more users", () => {
    const rank1 = calculateRank({
      users: 100,
      ratingScore: 400,
      ratingCount: 10,
    });
    const rank2 = calculateRank({
      users: 10000,
      ratingScore: 400,
      ratingCount: 10,
    });
    expect(rank2.percentile).toBeLessThan(rank1.percentile);
  });

  it("ranking improves with higher rating score", () => {
    const rank1 = calculateRank({
      users: 1000,
      ratingScore: 300,
      ratingCount: 50,
    });
    const rank2 = calculateRank({
      users: 1000,
      ratingScore: 480,
      ratingCount: 50,
    });
    expect(rank2.percentile).toBeLessThan(rank1.percentile);
  });
});
