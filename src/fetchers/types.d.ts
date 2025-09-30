export type StatsData = {
  name: string;
  totalUsers: number;
  totalRatings: number;
  ratingScore: number;
  rank: { level: string; percentile: number };
};
