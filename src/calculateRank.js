/**
 * Calculates the exponential cdf.
 *
 * @param {number} x The value.
 * @returns {number} The exponential cdf.
 */
function exponential_cdf(x) {
  return 1 - 2 ** -x;
}

/**
 * Calculates the log normal cdf.
 *
 * @param {number} x The value.
 * @returns {number} The log normal cdf.
 */
function log_normal_cdf(x) {
  // approximation
  return x / (1 + x);
}

/**
 * Calculates Chrome Extension rank based on 3 metrics:
 * - users: number of installations
 * - ratingScore: average rating (0-500, where 500 = 5.0 stars)
 * - ratingCount: number of ratings received
 *
 * @param {object} params Extension metrics.
 * @param {number} params.users Total installations.
 * @param {number} params.ratingScore Rating (0-500).
 * @param {number} params.ratingCount Number of ratings.
 * @returns {{ level: string, percentile: number }} The extension's rank.
 */
function calculateRank({ users, ratingScore, ratingCount }) {
  const USERS_MEDIAN = 1000;
  const USERS_WEIGHT = 5;

  const SCORE_MEDIAN = 400;
  const SCORE_WEIGHT = 4;

  const RATINGS_MEDIAN = 50;
  const RATINGS_WEIGHT = 3;

  const TOTAL_WEIGHT = USERS_WEIGHT + SCORE_WEIGHT + RATINGS_WEIGHT;

  const THRESHOLDS = [1, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];
  const LEVELS = ["S", "A+", "A", "A-", "B+", "B", "B-", "C+", "C"];

  const rank =
    1 -
    (USERS_WEIGHT * log_normal_cdf(users / USERS_MEDIAN) +
      SCORE_WEIGHT * exponential_cdf(ratingScore / SCORE_MEDIAN) +
      RATINGS_WEIGHT * exponential_cdf(ratingCount / RATINGS_MEDIAN)) /
      TOTAL_WEIGHT;

  const level = LEVELS[THRESHOLDS.findIndex((t) => rank * 100 <= t)];

  return { level, percentile: rank * 100 };
}

export { calculateRank };
export default calculateRank;
