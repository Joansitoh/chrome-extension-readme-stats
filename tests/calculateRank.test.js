import "@testing-library/jest-dom";
import { calculateRank } from "../src/calculateRank.js";
import { expect, it, describe } from "@jest/globals";

describe("Test calculateRank for Chrome Extensions", () => {
  it("new extension gets C rank", () => {
    expect(
      calculateRank({
        users: 0,
        ratingScore: 0,
        ratingCount: 0,
      }),
    ).toStrictEqual({ level: "C", percentile: 100 });
  });

  it("small extension gets B- rank", () => {
    expect(
      calculateRank({
        users: 235,
        ratingScore: 470,
        ratingCount: 7,
      }),
    ).toStrictEqual({ level: "B-", percentile: expect.any(Number) });
  });

  it("medium extension gets B+ rank", () => {
    expect(
      calculateRank({
        users: 1000,
        ratingScore: 400,
        ratingCount: 50,
      }),
    ).toStrictEqual({ level: "B+", percentile: expect.any(Number) });
  });

  it("popular extension gets A rank", () => {
    expect(
      calculateRank({
        users: 5000,
        ratingScore: 450,
        ratingCount: 100,
      }),
    ).toStrictEqual({ level: "A", percentile: expect.any(Number) });
  });

  it("very popular extension gets A+ rank", () => {
    expect(
      calculateRank({
        users: 50000,
        ratingScore: 480,
        ratingCount: 500,
      }),
    ).toStrictEqual({ level: "A+", percentile: expect.any(Number) });
  });

  it("top extension like MetaMask gets S rank", () => {
    expect(
      calculateRank({
        users: 10000000,
        ratingScore: 470,
        ratingCount: 5000,
      }),
    ).toStrictEqual({ level: "S", percentile: expect.any(Number) });
  });
});
